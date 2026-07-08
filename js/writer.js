/* =====================================================
   Kanji Master - Phase 4
   Luyện viết tay (Handwriting)

   2 chế độ:
   1. "Kiểm tra nét"  : dùng Hanzi Writer (data KanjiVG tiếng Nhật
      nằm cục bộ tại data/strokes/) - animation thứ tự nét +
      quiz chấm từng nét vẽ tự động.
   2. "Viết tự do"    : HTML5 Canvas nền ô ly, chữ mẫu mờ phía sau,
      người dùng tự chấm điểm độ chính xác.
   ===================================================== */

window.KM = window.KM || {};

KM.writer = (function () {
  "use strict";

  var current = null;      // kanji object đang luyện
  var writer = null;       // instance HanziWriter
  var initialized = false;
  var quizMistakes = 0;

  // Canvas viết tự do
  var ctx = null;
  var drawing = false;
  var strokes = [];        // các nét đã vẽ xong, mỗi nét = mảng điểm {x,y}
  var currentStroke = null; // nét đang vẽ dở

  var el = {};

  function cacheDOM() {
    el.picker = document.getElementById("kanji-picker");
    el.tabGuide = document.getElementById("tab-guide");
    el.tabFree = document.getElementById("tab-free");
    el.panelGuide = document.getElementById("panel-guide");
    el.panelFree = document.getElementById("panel-free");
    el.gridBox = document.getElementById("hw-box");
    el.hwTarget = document.getElementById("hw-target");
    el.feedback = document.getElementById("write-feedback");
    el.canvasBox = document.getElementById("canvas-box");
    el.canvas = document.getElementById("free-canvas");
    el.ghost = document.getElementById("canvas-ghost");
    el.toggleGhost = document.getElementById("toggle-ghost");
    el.freeFeedback = document.getElementById("free-feedback");
  }

  /* ---------- Nạp data nét vẽ (file cục bộ -> offline được) ---------- */
  function charDataLoader(char, onComplete) {
    fetch("data/strokes/" + encodeURIComponent(char) + ".json")
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(onComplete)
      .catch(function () {
        setFeedback("⚠️ Chưa có dữ liệu nét vẽ cho chữ " + char);
      });
  }

  function setFeedback(msg) {
    el.feedback.textContent = msg;
  }

  /* ---------- Hanzi Writer: animation + quiz ---------- */
  function createWriter() {
    if (writer) {
      try { writer.cancelQuiz(); } catch (e) { /* chưa có quiz */ }
    }
    el.hwTarget.innerHTML = "";

    var size = el.gridBox.clientWidth || 300;
    writer = HanziWriter.create(el.hwTarget, current.kanji, {
      width: size,
      height: size,
      padding: Math.round(size * 0.08),
      showCharacter: false,          // ẩn chữ, chỉ hiện outline mờ để tô theo
      showOutline: true,
      strokeColor: "#f0f0f5",
      outlineColor: "rgba(255, 255, 255, 0.22)",
      highlightColor: "#ff6b81",
      drawingColor: "#ff6b81",
      drawingWidth: 14,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 250,
      showHintAfterMisses: 2,        // sai 2 lần -> nháy gợi ý nét đúng
      charDataLoader: charDataLoader
    });
  }

  function animate() {
    if (!writer) return;
    try { writer.cancelQuiz(); } catch (e) {}
    setFeedback("▶ Quan sát thứ tự nét vẽ...");
    writer.animateCharacter({
      onComplete: function () {
        setFeedback("Xong! Bấm \"Kiểm tra nét\" để tự viết nhé ✏️");
      }
    });
  }

  function startQuiz() {
    if (!writer) return;
    quizMistakes = 0;
    setFeedback("✏️ Vẽ lần lượt " + current.strokes + " nét theo đúng thứ tự...");
    writer.quiz({
      onMistake: function () {
        quizMistakes += 1;
      },
      onComplete: function (summary) {
        var n = summary.totalMistakes;
        setFeedback(
          n === 0
            ? "🎉 Hoàn hảo! Đúng toàn bộ " + current.strokes + " nét."
            : "✅ Hoàn thành! Bạn vẽ sai " + n + " lần. Thử lại để đạt điểm tuyệt đối nhé."
        );
      }
    });
  }

  /* ---------- Canvas viết tự do ---------- */
  function setupCanvas() {
    var size = el.canvasBox.clientWidth || 300;
    var dpr = window.devicePixelRatio || 1;
    el.canvas.width = Math.round(size * dpr);
    el.canvas.height = Math.round(size * dpr);
    el.canvas.style.width = size + "px";
    el.canvas.style.height = size + "px";

    ctx = el.canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#f0f0f5";
    strokes = [];
    currentStroke = null;
  }

  function canvasPos(e) {
    var rect = el.canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function hasDrawn() {
    return strokes.length > 0 || currentStroke !== null;
  }

  /** Vẽ 1 nét (mảng điểm) lên canvas */
  function drawStroke(points) {
    if (!points.length) return;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    if (points.length === 1) {
      ctx.lineTo(points[0].x + 0.1, points[0].y + 0.1); // chấm 1 điểm khi chỉ tap
    } else {
      for (var i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
    }
    ctx.stroke();
  }

  /** Xóa canvas rồi vẽ lại toàn bộ các nét đã lưu */
  function redrawAll() {
    var dpr = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, el.canvas.width / dpr, el.canvas.height / dpr);
    strokes.forEach(drawStroke);
  }

  function clearCanvas() {
    if (!ctx) return;
    strokes = [];
    currentStroke = null;
    redrawAll();
    el.freeFeedback.textContent = "";
  }

  /** Xóa nét vừa vẽ (không đụng các nét trước đó) */
  function undoStroke() {
    if (!ctx || strokes.length === 0) return;
    strokes.pop();
    redrawAll();
    el.freeFeedback.textContent = "";
  }

  function bindCanvas() {
    el.canvas.addEventListener("pointerdown", function (e) {
      e.preventDefault();
      drawing = true;
      el.canvas.setPointerCapture(e.pointerId);
      var p = canvasPos(e);
      currentStroke = [p];
      drawStroke(currentStroke);
    });

    el.canvas.addEventListener("pointermove", function (e) {
      if (!drawing || !currentStroke) return;
      var p = canvasPos(e);
      var prev = currentStroke[currentStroke.length - 1];
      currentStroke.push(p);
      // chỉ vẽ đoạn mới, không vẽ lại cả nét -> mượt
      ctx.beginPath();
      ctx.moveTo(prev.x, prev.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    });

    ["pointerup", "pointercancel"].forEach(function (ev) {
      el.canvas.addEventListener(ev, function () {
        if (drawing && currentStroke) {
          strokes.push(currentStroke); // chốt nét -> có thể undo từng nét
          currentStroke = null;
        }
        drawing = false;
      });
    });
  }

  function selfGrade(good) {
    if (!hasDrawn()) {
      el.freeFeedback.textContent = "Bạn chưa viết gì mà 😄";
      return;
    }
    if (good) {
      el.freeFeedback.textContent = "👍 Tuyệt! Chuyển sang chữ khác hoặc luyện tiếp.";
    } else {
      el.freeFeedback.textContent = "💪 Không sao, xóa rồi viết lại nào!";
    }
  }

  /* ---------- Chọn Kanji & chuyển tab ---------- */
  function buildPicker() {
    el.picker.innerHTML = "";
    KANJI_DATA.forEach(function (k) {
      var b = document.createElement("button");
      b.className = "kanji-chip";
      b.textContent = k.kanji;
      b.addEventListener("click", function () { selectKanji(k); });
      el.picker.appendChild(b);
    });
  }

  function selectKanji(k) {
    current = k;

    // Đánh dấu chip đang chọn
    var chips = el.picker.children;
    for (var i = 0; i < chips.length; i++) {
      chips[i].classList.toggle("active", chips[i].textContent === k.kanji);
    }

    el.ghost.textContent = k.kanji;
    setFeedback("");
    clearCanvas();
    createWriter();
  }

  function showTab(name) {
    var guide = name === "guide";
    el.tabGuide.classList.toggle("active", guide);
    el.tabFree.classList.toggle("active", !guide);
    el.panelGuide.hidden = !guide;
    el.panelFree.hidden = guide;

    // Canvas chỉ đo được kích thước khi panel đang hiện
    if (!guide) setupCanvas();
  }

  function bindEvents() {
    document.getElementById("btn-animate").addEventListener("click", animate);
    document.getElementById("btn-quiz").addEventListener("click", startQuiz);
    document.getElementById("btn-clear").addEventListener("click", clearCanvas);
    document.getElementById("btn-undo").addEventListener("click", undoStroke);
    document.getElementById("btn-grade-ok").addEventListener("click", function () { selfGrade(true); });
    document.getElementById("btn-grade-bad").addEventListener("click", function () { selfGrade(false); });

    el.tabGuide.addEventListener("click", function () { showTab("guide"); });
    el.tabFree.addEventListener("click", function () { showTab("free"); });

    el.toggleGhost.addEventListener("change", function () {
      el.ghost.style.visibility = this.checked ? "visible" : "hidden";
    });

    bindCanvas();
  }

  /** Gọi mỗi lần mở màn hình Viết (màn hình phải đang hiện để đo kích thước) */
  function start() {
    if (!initialized) {
      cacheDOM();
      buildPicker();
      bindEvents();
      initialized = true;
    }
    showTab("guide");
    selectKanji(current || KANJI_DATA[0]);
  }

  return { start: start };
})();
