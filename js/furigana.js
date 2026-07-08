/* =====================================================
   Kanji Master - Phase 2
   Bộ phân tích Furigana

   Cú pháp trong data:  漢字[かんじ]
   -> chuyển thành:     <ruby>漢字<rt>かんじ</rt></ruby>

   Phase 3 sẽ dùng module này để render câu ví dụ,
   kèm nút Bật/Tắt Furigana (chỉ cần ẩn/hiện thẻ <rt> bằng CSS).
   ===================================================== */

window.KM = window.KM || {};

KM.furigana = (function () {
  "use strict";

  // Bắt cụm "một hoặc nhiều Kanji" theo sau là "[cách đọc]"
  // 一-龯 : vùng Unicode CJK (Kanji), 々 : dấu lặp Kanji
  var PATTERN = /([一-龯々]+)\[([^\]]+)\]/g;

  function escapeHTML(s) {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /**
   * Chuyển chuỗi có cú pháp furigana thành HTML <ruby>.
   * @param {string} text - ví dụ: "今日[きょう]は休[やす]みます。"
   * @returns {string} HTML an toàn để gán vào innerHTML
   */
  function toRubyHTML(text) {
    var escaped = escapeHTML(text);
    return escaped.replace(PATTERN, function (_, kanji, reading) {
      return "<ruby>" + kanji + "<rt>" + reading + "</rt></ruby>";
    });
  }

  /**
   * Bỏ hoàn toàn phần furigana, trả về câu thuần (dùng cho chế độ tắt Furigana
   * hoặc khi cần copy văn bản).
   * @param {string} text
   * @returns {string} ví dụ: "今日は休みます。"
   */
  function stripFurigana(text) {
    return text.replace(PATTERN, "$1");
  }

  return {
    toRubyHTML: toRubyHTML,
    stripFurigana: stripFurigana
  };
})();
