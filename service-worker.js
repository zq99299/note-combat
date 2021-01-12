/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fe527ce41c98c641151f386ee65af02b"
  },
  {
    "url": "assets/css/0.styles.3c59a9c8.css",
    "revision": "0e8aea449041eaaddec1c3fd630c7669"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ae2dcb4f.js",
    "revision": "800e722d2d0205647e1ee6f85ae33e09"
  },
  {
    "url": "assets/js/11.529de61d.js",
    "revision": "c73d27b266986307cf07a4cb8f98b7dd"
  },
  {
    "url": "assets/js/12.097da429.js",
    "revision": "c6a75617a30fd05cd06bb31801a3c390"
  },
  {
    "url": "assets/js/2.5a1b50d2.js",
    "revision": "8a43d3c6bfaafe769f880c4fa03174f3"
  },
  {
    "url": "assets/js/3.cf5f66e5.js",
    "revision": "d3a01838023eb9b7fdc9b8ee84de22c1"
  },
  {
    "url": "assets/js/4.6715e346.js",
    "revision": "128c5043b12f64f21609aeeec0f392d2"
  },
  {
    "url": "assets/js/5.9dc543e5.js",
    "revision": "3a6b28d01710ed1007ab1d2ed60ad9dd"
  },
  {
    "url": "assets/js/6.681b9c9a.js",
    "revision": "a8858bc79102b34988aad33f0196cced"
  },
  {
    "url": "assets/js/7.62e07670.js",
    "revision": "cd64ab7eb6d4bbe49983476aa4a23a39"
  },
  {
    "url": "assets/js/8.2e83bd93.js",
    "revision": "38109951f8297c336782b79d634a8ce6"
  },
  {
    "url": "assets/js/9.55199f42.js",
    "revision": "67d24ae60631f08955f1aa6c39bd6a19"
  },
  {
    "url": "assets/js/app.b8a1cf7e.js",
    "revision": "76e34ba84839d794feb48688fb59f23e"
  },
  {
    "url": "docker/index.html",
    "revision": "0ae0faddd4bb5c9f965bbb37877e2aba"
  },
  {
    "url": "index.html",
    "revision": "e20738dc1a7c433beb4523e2254f535a"
  },
  {
    "url": "navigation.html",
    "revision": "c91ae6fdba148dfee552f917e9d172a7"
  },
  {
    "url": "spring/index.html",
    "revision": "d0e00ddeb8d67d4f382283914ff74333"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
