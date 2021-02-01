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
    "revision": "3c09798069f6f26f9ee97e9f9a08594c"
  },
  {
    "url": "assets/css/0.styles.9121fd13.css",
    "revision": "ba14dbcf4c6fcc1ab917dbd86a7a8258"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Bold-Italic.a0475780.woff2",
    "revision": "a04757804840e4e870b5310e37fcbc37"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Bold.c318a45b.woff2",
    "revision": "c318a45b45be019ffdeb8c9ac6a41283"
  },
  {
    "url": "assets/fonts/JetBrainsMono-ExtraBold-Italic.045b7ab8.woff2",
    "revision": "045b7ab8d749812c052e9eca1ec5db07"
  },
  {
    "url": "assets/fonts/JetBrainsMono-ExtraBold.c3c08fc9.woff2",
    "revision": "c3c08fc9f418f827eb3eed1b0ebe48c8"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Italic.06bf2228.woff2",
    "revision": "06bf22283c831651e111b08000e502fc"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Medium-Italic.dd0da6de.woff2",
    "revision": "dd0da6de6c2340f4bf0aa4108f98a63f"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Medium.54b68275.woff2",
    "revision": "54b6827550ef145b4c1968518a96070f"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Regular.3eacd637.woff2",
    "revision": "3eacd63796de4b39bc102dae7b143ca5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2ccebd25.js",
    "revision": "e9b43cff05911d3051ebde43d5b2f275"
  },
  {
    "url": "assets/js/11.01a4e93b.js",
    "revision": "06b71e64c0ebd4a1f2eeb5a715a47de2"
  },
  {
    "url": "assets/js/12.afd1062c.js",
    "revision": "e89c81f8dd31be03e47b98a225d4a8a2"
  },
  {
    "url": "assets/js/2.8f2b6977.js",
    "revision": "91fda31fa42238bb6d4136a3c7b74d46"
  },
  {
    "url": "assets/js/3.9baef331.js",
    "revision": "0a28e7cc991d80fb058e83b137689671"
  },
  {
    "url": "assets/js/4.fb0f182d.js",
    "revision": "433f4b35e796b2bb4de031d9244a596f"
  },
  {
    "url": "assets/js/5.19ecd13d.js",
    "revision": "ae315c07ee339d7353a28cf8b83d8130"
  },
  {
    "url": "assets/js/6.4e165537.js",
    "revision": "a94585c8db85596171ff8b1593d265dc"
  },
  {
    "url": "assets/js/7.19d2344a.js",
    "revision": "e2540fe769f0a2aa3644de8587ea9a37"
  },
  {
    "url": "assets/js/8.cfb618f8.js",
    "revision": "e816c03d10f3a7154862b6abd777cd33"
  },
  {
    "url": "assets/js/9.e150cb2a.js",
    "revision": "d83254ea01dca3a722e7d8fbfa6301a5"
  },
  {
    "url": "assets/js/app.c1690f70.js",
    "revision": "ea42b88c4242ce781bee4859bcea27f0"
  },
  {
    "url": "docker/index.html",
    "revision": "6ebea3f46ff6d723fb707396a6fc0dfb"
  },
  {
    "url": "index.html",
    "revision": "362cf25f43776a9349531fb22f9a6ed9"
  },
  {
    "url": "MLOGO100x100.png",
    "revision": "883c132dcc91e5bbec348b5f079b0a73"
  },
  {
    "url": "MLOGO200x200.png",
    "revision": "34f10abae491dc74f3df354df438253f"
  },
  {
    "url": "MLOGO40x40.png",
    "revision": "a1f84e51a43c597be40640823ae81136"
  },
  {
    "url": "navigation.html",
    "revision": "95c67d4e117daed78da9be75b700c9c1"
  },
  {
    "url": "spring/index.html",
    "revision": "7a802bbea01ba5587d51a9e95824f16c"
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
