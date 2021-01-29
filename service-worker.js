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
    "revision": "cf8c34cd4633f417f9d322210e1c9b01"
  },
  {
    "url": "assets/css/0.styles.6cb0f74c.css",
    "revision": "7194f96cc23b626c831a5f078c1d4224"
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
    "url": "assets/js/2.741789e0.js",
    "revision": "4cb6cc8dd4f0971777dd1804aad9f942"
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
    "url": "assets/js/6.59ef9762.js",
    "revision": "855c92fc1c1bf773a9b75619caa41015"
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
    "url": "assets/js/app.219c6560.js",
    "revision": "12f811eb1434cf4decf65769330a2df6"
  },
  {
    "url": "docker/index.html",
    "revision": "88d0e1325956e2a2dd573d9093a12a92"
  },
  {
    "url": "index.html",
    "revision": "19aca490cfa5d91d78faa70e847bb908"
  },
  {
    "url": "navigation.html",
    "revision": "bfd0bb6b1f4d0b50a22cdf32b4bde533"
  },
  {
    "url": "spring/index.html",
    "revision": "ca1e281a4686ab125e79291468f4a44c"
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
