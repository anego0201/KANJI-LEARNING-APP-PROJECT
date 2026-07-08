/* =====================================================
   Kanji Master - Phase 2
   Thuật toán SRS (Spaced Repetition) - SM-2 rút gọn

   Luật tính lịch ôn khi người dùng trả lời:

   ĐÚNG (correct = true):
     reps + 1
     interval:  lần 1 -> 1 ngày
                lần 2 -> 3 ngày
                lần n -> interval cũ × ease (làm tròn)
     nextReview = bây giờ + interval

   SAI (correct = false):
     reps về 0 (học lại từ đầu)
     ease giảm 0.2 (không thấp hơn 1.3)
     nextReview = bây giờ + 10 phút (ôn lại ngay trong phiên)
   ===================================================== */

window.KM = window.KM || {};

KM.srs = (function () {
  "use strict";

  var DAY_MS = 24 * 60 * 60 * 1000;
  var RELEARN_MS = 10 * 60 * 1000; // 10 phút
  var MIN_EASE = 1.3;
  var MAX_EASE = 2.8;

  function todayString() {
    var d = new Date();
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }

  /**
   * Cập nhật lịch ôn cho 1 Kanji sau khi người dùng trả lời.
   * @param {string} kanjiId
   * @param {boolean} correct - Đúng/Sai
   * @returns {object} bản ghi tiến độ mới (đã lưu)
   */
  function answer(kanjiId, correct) {
    var rec = KM.storage.getRecord(kanjiId);
    var now = Date.now();

    if (correct) {
      rec.reps += 1;
      rec.correct += 1;

      if (rec.reps === 1) {
        rec.interval = 1;
      } else if (rec.reps === 2) {
        rec.interval = 3;
      } else {
        rec.interval = Math.round(rec.interval * rec.ease);
      }
      rec.ease = Math.min(MAX_EASE, rec.ease + 0.05);
      rec.nextReview = now + rec.interval * DAY_MS;
    } else {
      rec.reps = 0;
      rec.wrong += 1;
      rec.interval = 0;
      rec.ease = Math.max(MIN_EASE, rec.ease - 0.2);
      rec.nextReview = now + RELEARN_MS;
    }

    rec.lastReview = now;
    KM.storage.putRecord(rec);
    return rec;
  }

  /** Kanji đã từng học và ĐẾN HẠN ôn tập (nextReview <= now) */
  function getDueCards() {
    var progress = KM.storage.loadProgress();
    var now = Date.now();
    return KANJI_DATA.filter(function (k) {
      var rec = progress[k.id];
      return rec && rec.lastReview !== null && rec.nextReview <= now;
    });
  }

  /** Kanji CHƯA từng học */
  function getNewCards() {
    var progress = KM.storage.loadProgress();
    return KANJI_DATA.filter(function (k) {
      var rec = progress[k.id];
      return !rec || rec.lastReview === null;
    });
  }

  /**
   * Hàng đợi học hôm nay = thẻ đến hạn + thẻ mới
   * (thẻ mới bị giới hạn bởi settings.newCardsPerDay, đếm theo ngày)
   */
  function getStudyQueue() {
    var settings = KM.storage.loadSettings();

    // Reset bộ đếm thẻ mới nếu đã sang ngày khác
    if (settings.newCardsDate !== todayString()) {
      settings.newCardsDate = todayString();
      settings.newCardsIntroduced = 0;
      KM.storage.saveSettings(settings);
    }

    var remainingNew = Math.max(
      0,
      settings.newCardsPerDay - settings.newCardsIntroduced
    );

    var due = getDueCards();
    var fresh = getNewCards().slice(0, remainingNew);

    return { due: due, fresh: fresh, all: due.concat(fresh) };
  }

  /** Gọi khi 1 thẻ MỚI được đưa vào học lần đầu (để trừ quota trong ngày) */
  function markNewCardIntroduced() {
    var settings = KM.storage.loadSettings();
    if (settings.newCardsDate !== todayString()) {
      settings.newCardsDate = todayString();
      settings.newCardsIntroduced = 0;
    }
    settings.newCardsIntroduced += 1;
    KM.storage.saveSettings(settings);
  }

  /** Thống kê tổng quan cho màn hình chính */
  function getStats() {
    var progress = KM.storage.loadProgress();
    var now = Date.now();
    var learned = 0;
    var due = 0;

    KANJI_DATA.forEach(function (k) {
      var rec = progress[k.id];
      if (rec && rec.lastReview !== null) {
        learned += 1;
        if (rec.nextReview <= now) due += 1;
      }
    });

    return {
      total: KANJI_DATA.length,
      learned: learned,
      due: due,
      newToday: getStudyQueue().fresh.length
    };
  }

  return {
    answer: answer,
    getDueCards: getDueCards,
    getNewCards: getNewCards,
    getStudyQueue: getStudyQueue,
    markNewCardIntroduced: markNewCardIntroduced,
    getStats: getStats
  };
})();
