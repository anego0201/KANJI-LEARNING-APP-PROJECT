/* =====================================================
   Kanji Master - Phase 5
   Service Worker: cache toàn bộ app để chạy OFFLINE

   QUAN TRỌNG: mỗi lần sửa code, tăng số version ở CACHE_NAME
   (v1 -> v2...) để iOS tải lại cache mới.
   ===================================================== */

var CACHE_NAME = "kanji-master-v3";

/* Toàn bộ tài nguyên cần cho app chạy không mạng */
var PRECACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/style.css",
  "./js/app.js",
  "./js/flashcard.js",
  "./js/furigana.js",
  "./js/kanji-data.js",
  "./js/srs.js",
  "./js/storage.js",
  "./js/writer.js",
  "./js/lib/hanzi-writer.min.js",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./data/strokes/休.json",
  "./data/strokes/木.json",
  "./data/strokes/人.json",
  "./data/strokes/日.json",
  "./data/strokes/月.json",
  "./data/strokes/山.json",
  "./data/strokes/川.json",
  "./data/strokes/学.json",
  "./data/strokes/校.json",
  "./data/strokes/食.json"
];

/* Cài đặt: tải sẵn toàn bộ vào cache */
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(PRECACHE);
    }).then(function () {
      return self.skipWaiting(); // kích hoạt SW mới ngay, không chờ đóng tab
    })
  );
});

/* Kích hoạt: xóa cache của version cũ */
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE_NAME; })
            .map(function (k) { return caches.delete(k); })
      );
    }).then(function () {
      return self.clients.claim(); // kiểm soát các tab đang mở ngay lập tức
    })
  );
});

/* Chiến lược Cache-First:
   - Có trong cache -> trả ngay (nhanh + offline)
   - Chưa có -> tải mạng, lưu vào cache cho lần sau
   - Mất mạng khi điều hướng -> trả index.html đã cache */
self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;

  var url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return; // không đụng request bên ngoài

  event.respondWith(
    caches.match(event.request).then(function (cached) {
      if (cached) return cached;

      return fetch(event.request).then(function (resp) {
        if (resp.ok) {
          var clone = resp.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, clone);
          });
        }
        return resp;
      }).catch(function () {
        if (event.request.mode === "navigate") {
          return caches.match("./index.html");
        }
      });
    })
  );
});
