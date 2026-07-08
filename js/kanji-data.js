/* =====================================================
   Kanji Master - Bộ gộp dữ liệu Kanji

   Data từng cấp JLPT nằm trong js/data/kanji-*.js
   (nạp TRƯỚC file này trong index.html).
   Thêm cấp mới: tạo js/data/kanji-n4.js -> window.KANJI_N4
   rồi nối vào mảng dưới đây.
   ===================================================== */

window.KANJI_DATA = [].concat(
  window.KANJI_N5 || [],
  window.KANJI_N4 || []
);

/** Danh sách cấp JLPT hiện có trong data (cho bộ lọc UI) */
window.KANJI_LEVELS = (function () {
  var seen = {};
  var levels = [];
  window.KANJI_DATA.forEach(function (k) {
    if (!seen[k.jlpt]) { seen[k.jlpt] = true; levels.push(k.jlpt); }
  });
  return levels;
})();
