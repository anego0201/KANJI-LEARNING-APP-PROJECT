/* =====================================================
   Kanji Master - Phase 2
   Lớp lưu trữ tiến độ học (localStorage)

   - Toàn bộ tiến độ nằm dưới 1 key có version để sau này
     dễ migrate (hoặc chuyển sang IndexedDB nếu data lớn).
   - Tiến độ mỗi Kanji được lưu theo id, tách khỏi data gốc
     (kanji-data.js chỉ đọc, không bao giờ bị ghi đè).

   Schema 1 bản ghi tiến độ (progress record):
   {
     id:         "kyuu",      // trùng id trong KANJI_DATA
     reps:       0,           // số lần trả lời ĐÚNG liên tiếp
     ease:       2.5,         // hệ số giãn cách (SM-2)
     interval:   0,           // khoảng cách ôn tập hiện tại (ngày)
     nextReview: 0,           // timestamp (ms) - đến hạn ôn khi <= Date.now()
     lastReview: null,        // timestamp lần ôn gần nhất
     correct:    0,           // tổng số lần đúng (thống kê)
     wrong:      0            // tổng số lần sai (thống kê)
   }
   ===================================================== */

window.KM = window.KM || {};

KM.storage = (function () {
  "use strict";

  var PROGRESS_KEY = "kanjiMaster.progress.v1";
  var SETTINGS_KEY = "kanjiMaster.settings.v1";

  var DEFAULT_SETTINGS = {
    newCardsPerDay: 10,     // số Kanji MỚI tối đa đưa vào học mỗi ngày
    furiganaOn: true,       // bật/tắt furigana (dùng ở Phase 3)
    newCardsDate: null,     // ngày (yyyy-mm-dd) của bộ đếm bên dưới
    newCardsIntroduced: 0   // số Kanji mới đã đưa vào trong ngày đó
  };

  function safeParse(json, fallback) {
    try {
      var v = JSON.parse(json);
      return v === null || v === undefined ? fallback : v;
    } catch (e) {
      return fallback;
    }
  }

  /** Đọc toàn bộ map tiến độ: { kanjiId: progressRecord } */
  function loadProgress() {
    return safeParse(localStorage.getItem(PROGRESS_KEY), {});
  }

  function saveProgress(progressMap) {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progressMap));
  }

  /** Lấy tiến độ 1 Kanji; nếu chưa từng học thì trả về bản ghi mới */
  function getRecord(id) {
    var all = loadProgress();
    return all[id] || newRecord(id);
  }

  function newRecord(id) {
    return {
      id: id,
      reps: 0,
      ease: 2.5,
      interval: 0,
      nextReview: 0,
      lastReview: null,
      correct: 0,
      wrong: 0
    };
  }

  /** Ghi đè tiến độ 1 Kanji */
  function putRecord(record) {
    var all = loadProgress();
    all[record.id] = record;
    saveProgress(all);
  }

  function loadSettings() {
    var s = safeParse(localStorage.getItem(SETTINGS_KEY), {});
    // Trộn với default để thêm field mới không làm hỏng settings cũ
    var merged = {};
    for (var k in DEFAULT_SETTINGS) merged[k] = DEFAULT_SETTINGS[k];
    for (var k2 in s) merged[k2] = s[k2];
    return merged;
  }

  function saveSettings(settings) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }

  /** Xóa sạch tiến độ (dùng khi muốn học lại từ đầu) */
  function resetAll() {
    localStorage.removeItem(PROGRESS_KEY);
    localStorage.removeItem(SETTINGS_KEY);
  }

  return {
    loadProgress: loadProgress,
    getRecord: getRecord,
    newRecord: newRecord,
    putRecord: putRecord,
    loadSettings: loadSettings,
    saveSettings: saveSettings,
    resetAll: resetAll
  };
})();
