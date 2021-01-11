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
    "revision": "5fd6e2b23c6f01728db3d0e08a4533a4"
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
    "url": "assets/js/10.f428a34f.js",
    "revision": "40be681ab8b659ebf59f31d5211daee7"
  },
  {
    "url": "assets/js/11.80377e35.js",
    "revision": "f30d4ccd8434e72527c74679a53d1690"
  },
  {
    "url": "assets/js/2.5a1b50d2.js",
    "revision": "8a43d3c6bfaafe769f880c4fa03174f3"
  },
  {
    "url": "assets/js/3.8bc5ab58.js",
    "revision": "1e3047717000d32544235f289c593836"
  },
  {
    "url": "assets/js/4.706544b4.js",
    "revision": "859c5210caaa10e0dce958d44fa04aa2"
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
    "url": "assets/js/9.24cd7017.js",
    "revision": "60ee8d6119e9b10f95d34bff7957fa9b"
  },
  {
    "url": "assets/js/app.9c8cb280.js",
    "revision": "d3ab76999dd6c985d79eb35a20a0723d"
  },
  {
    "url": "index.html",
    "revision": "1cfb3ae1dd6304a760a5fdc3bc04ebfb"
  },
  {
    "url": "navigation.html",
    "revision": "c0e48d0340ad8d37a622d2b6c8e8d2bc"
  },
  {
    "url": "spring/index.html",
    "revision": "d1f954852543dff7cc47af629c655572"
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
