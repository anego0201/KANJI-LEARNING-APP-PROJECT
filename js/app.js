/* =====================================================
   Kanji Master - Phase 3
   Điều phối chính: chuyển màn hình, thống kê, Add to Home Screen
   ===================================================== */

window.KM = window.KM || {};

(function () {
  "use strict";

  var btnInstall = document.getElementById("btn-install");
  var installModal = document.getElementById("install-modal");
  var btnCloseModal = document.getElementById("btn-close-modal");
  var standaloneBadge = document.getElementById("standalone-badge");
  var navItems = document.querySelectorAll(".nav-item");

  /**
   * Kiểm tra app đang chạy ở chế độ standalone (đã Add to Home Screen) hay chưa.
   * - iOS Safari: navigator.standalone (API riêng của Apple)
   * - Chuẩn chung: media query display-mode
   */
  function isStandalone() {
    return (
      window.navigator.standalone === true ||
      window.matchMedia("(display-mode: standalone)").matches
    );
  }

  /** Đọc thống kê từ SRS engine và đổ vào màn hình chính */
  function refreshStats() {
    var stats = KM.srs.getStats();
    document.getElementById("stat-total").textContent = stats.total;
    document.getElementById("stat-due").textContent = stats.due;
    document.getElementById("stat-learned").textContent = stats.learned;
    document.getElementById("stat-new").textContent = stats.newToday;
  }
  KM.refreshStats = refreshStats;

  /** Chuyển màn hình: home / study (write, stats sẽ thêm ở Phase sau) */
  function showScreen(name) {
    document.querySelectorAll(".screen").forEach(function (s) {
      s.hidden = s.id !== "screen-" + name;
    });

    navItems.forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.screen === name);
    });

    if (name === "home") refreshStats();
    if (name === "study") KM.flashcard.start();
    if (name === "write") KM.writer.start();
  }
  KM.showScreen = showScreen;

  /** Đăng ký Service Worker -> app chạy offline (Phase 5) */
  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return; // Safari cũ / file:// thì bỏ qua

    navigator.serviceWorker.register("sw.js").then(function () {
      // SW sẵn sàng = toàn bộ app đã nằm trong cache
      return navigator.serviceWorker.ready;
    }).then(function () {
      var badge = document.getElementById("offline-badge");
      if (badge) badge.hidden = false;
    }).catch(function (err) {
      console.warn("Không đăng ký được Service Worker:", err);
    });
  }

  function init() {
    refreshStats();
    KM.flashcard.bindEvents();
    registerServiceWorker();

    // Điều hướng qua thanh nav dưới cùng
    navItems.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (!btn.disabled) showScreen(btn.dataset.screen);
      });
    });

    // Nút "Bắt đầu học" trên trang chủ
    document.getElementById("btn-start-study").addEventListener("click", function () {
      showScreen("study");
    });

    if (isStandalone()) {
      // Đã cài vào Home Screen -> ẩn nút cài đặt, hiện badge xác nhận
      standaloneBadge.hidden = false;
    } else {
      // Đang chạy trong trình duyệt -> hiện nút hướng dẫn cài đặt
      btnInstall.hidden = false;
    }
  }

  btnInstall.addEventListener("click", function () {
    installModal.hidden = false;
  });

  btnCloseModal.addEventListener("click", function () {
    installModal.hidden = true;
  });

  // Đóng modal khi chạm vào nền tối bên ngoài
  installModal.addEventListener("click", function (e) {
    if (e.target === installModal) {
      installModal.hidden = true;
    }
  });

  // Chặn double-tap zoom trên iOS (phòng khi touch-action chưa đủ)
  var lastTouchEnd = 0;
  document.addEventListener(
    "touchend",
    function (e) {
      var now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    },
    { passive: false }
  );

  init();
})();
