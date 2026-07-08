/* =====================================================
   Kanji Master - Phase 3
   Phiên học Flashcard

   Luồng 1 thẻ:
     Mặt trước (Kanji) --chạm--> Mặt sau (đáp án) --chấm Đúng/Sai--> thẻ kế tiếp
   - Đúng/Sai được chuyển thẳng vào KM.srs.answer() (Phase 2)
   - Thẻ trả lời SAI được đưa về CUỐI hàng đợi để ôn lại ngay trong phiên
   - Thẻ MỚI học lần đầu sẽ trừ vào quota "Kanji mới/ngày"
   ===================================================== */

window.KM = window.KM || {};

KM.flashcard = (function () {
  "use strict";

  var queue = [];          // hàng đợi thẻ của phiên hiện tại
  var doneCount = 0;       // số thẻ đã hoàn thành (trả lời Đúng)
  var totalCount = 0;      // tổng thẻ ban đầu của phiên
  var newIds = {};         // id các thẻ MỚI (chưa từng học) trong phiên
  var introducedIds = {};  // id thẻ mới ĐÃ trừ quota (tránh trừ 2 lần)
  var revealed = false;

  // ----- DOM -----
  var el = {};
  function cacheDOM() {
    el.flashcard = document.getElementById("flashcard");
    el.front = document.getElementById("fc-front");
    el.back = document.getElementById("fc-back");
    el.kanji = document.getElementById("fc-kanji");
    el.backKanji = document.getElementById("fc-back-kanji");
    el.onyomi = document.getElementById("fc-onyomi");
    el.kunyomi = document.getElementById("fc-kunyomi");
    el.meaningJa = document.getElementById("fc-meaning-ja");
    el.meaningEn = document.getElementById("fc-meaning-en");
    el.radicals = document.getElementById("fc-radicals");
    el.mnemonic = document.getElementById("fc-mnemonic");
    el.examples = document.getElementById("fc-examples");
    el.actions = document.getElementById("fc-actions");
    el.count = document.getElementById("study-count");
    el.badge = document.getElementById("study-badge");
    el.done = document.getElementById("study-done");
    el.doneTitle = document.getElementById("study-done-title");
    el.doneMsg = document.getElementById("study-done-msg");
    el.toggleFurigana = document.getElementById("toggle-furigana");
  }

  function current() {
    return queue[0] || null;
  }

  /** Bắt đầu (hoặc bắt đầu lại) một phiên học */
  function start() {
    if (!el.flashcard) cacheDOM();

    var q = KM.srs.getStudyQueue();
    queue = q.all.slice();
    doneCount = 0;
    totalCount = queue.length;
    newIds = {};
    introducedIds = {};
    q.fresh.forEach(function (k) { newIds[k.id] = true; });

    // Khôi phục trạng thái nút Furigana từ settings
    var settings = KM.storage.loadSettings();
    el.toggleFurigana.checked = settings.furiganaOn;
    applyFurigana(settings.furiganaOn);

    if (queue.length === 0) {
      showDone(
        "Không có thẻ nào!",
        "Bạn đã ôn hết thẻ đến hạn hôm nay. Quay lại vào ngày mai nhé 👋"
      );
      return;
    }

    el.done.hidden = true;
    el.flashcard.hidden = false;
    renderCard();
  }

  /** Hiển thị mặt trước của thẻ hiện tại */
  function renderCard() {
    var card = current();
    if (!card) {
      showDone("Hoàn thành! 🎊", "Bạn đã học xong " + totalCount + " thẻ trong phiên này.");
      KM.refreshStats && KM.refreshStats();
      return;
    }

    revealed = false;
    el.kanji.textContent = card.kanji;
    el.front.hidden = false;
    el.back.hidden = true;
    el.actions.hidden = true;

    el.count.textContent = doneCount + " / " + totalCount;
    el.badge.textContent = newIds[card.id] ? "🆕 Thẻ mới" : "🔄 Ôn tập";

    // Đưa vùng cuộn (.app-main) về đầu thẻ khi sang thẻ mới
    var main = document.querySelector(".app-main");
    if (main) main.scrollTop = 0;
  }

  /** Lật thẻ: hiện mặt sau với đầy đủ đáp án */
  function reveal() {
    var card = current();
    if (!card || revealed) return;
    revealed = true;

    el.backKanji.textContent = card.kanji;
    el.onyomi.textContent = card.onyomi.length ? card.onyomi.join("、") : "—";
    el.kunyomi.textContent = card.kunyomi.length ? card.kunyomi.join("、") : "—";
    el.meaningJa.textContent = card.meaning.ja;
    el.meaningEn.textContent = card.meaning.en;
    el.mnemonic.textContent = card.mnemonic;

    // Bộ thủ phân rã
    el.radicals.innerHTML = "";
    card.radicals.forEach(function (r) {
      var chip = document.createElement("span");
      chip.className = "radical-chip";
      chip.innerHTML =
        '<span class="radical-char">' + r.radical + "</span>" +
        '<span class="radical-meaning">' + r.meaning + "</span>";
      el.radicals.appendChild(chip);
    });

    // Câu ví dụ (Furigana render bằng <ruby>, bật/tắt bằng CSS)
    el.examples.innerHTML = "";
    card.examples.forEach(function (ex) {
      var li = document.createElement("li");
      li.className = "fc-example";
      li.innerHTML =
        '<span class="example-jp">' + KM.furigana.toRubyHTML(ex.jp) + "</span>" +
        '<span class="example-en">' + ex.en + "</span>";
      el.examples.appendChild(li);
    });

    el.front.hidden = true;
    el.back.hidden = false;
    el.actions.hidden = false;
  }

  /** Người dùng chấm Đúng/Sai cho thẻ hiện tại */
  function answer(correct) {
    var card = current();
    if (!card || !revealed) return;

    // Thẻ mới học lần đầu -> trừ quota ngày (chỉ 1 lần cho mỗi thẻ)
    if (newIds[card.id] && !introducedIds[card.id]) {
      introducedIds[card.id] = true;
      KM.srs.markNewCardIntroduced();
    }

    KM.srs.answer(card.id, correct);
    queue.shift();

    if (correct) {
      doneCount += 1;
    } else {
      // Sai -> đưa về cuối hàng đợi để gặp lại ngay trong phiên
      queue.push(card);
    }

    renderCard();
  }

  function showDone(title, msg) {
    el.flashcard.hidden = true;
    el.actions.hidden = true;
    el.done.hidden = false;
    el.doneTitle.textContent = title;
    el.doneMsg.textContent = msg;
    el.count.textContent = doneCount + " / " + totalCount;
    el.badge.textContent = "";
  }

  /** Bật/tắt Furigana: chỉ cần ẩn/hiện <rt> bằng class trên <body> */
  function applyFurigana(on) {
    document.body.classList.toggle("furigana-off", !on);
  }

  function bindEvents() {
    cacheDOM();

    el.front.addEventListener("click", reveal);

    document.getElementById("btn-correct").addEventListener("click", function () {
      answer(true);
    });
    document.getElementById("btn-wrong").addEventListener("click", function () {
      answer(false);
    });

    el.toggleFurigana.addEventListener("change", function () {
      applyFurigana(this.checked);
      var settings = KM.storage.loadSettings();
      settings.furiganaOn = this.checked;
      KM.storage.saveSettings(settings);
    });

    document.getElementById("btn-back-home").addEventListener("click", function () {
      KM.showScreen("home");
    });
  }

  return {
    start: start,
    bindEvents: bindEvents
  };
})();
