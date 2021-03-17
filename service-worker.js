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
    "revision": "130b2b5d0597f98511772ffdda28aaa5"
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
    "url": "assets/js/10.48a88567.js",
    "revision": "96f44a414a4bece12e398ea799c430ab"
  },
  {
    "url": "assets/js/11.e50e7754.js",
    "revision": "b47f95ee718b66820a1fd9577719f44d"
  },
  {
    "url": "assets/js/12.e229e12c.js",
    "revision": "a0dde6bf648e2291fd001363ad755355"
  },
  {
    "url": "assets/js/13.d18d9b62.js",
    "revision": "e9e9c01ad462e049df9bec132039af4d"
  },
  {
    "url": "assets/js/14.0d20196b.js",
    "revision": "37ba8669c563fdb5a89e31b3c7a24b29"
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
    "url": "assets/js/4.1131d3d3.js",
    "revision": "e8b3772d96438a3a316890d5a9a33392"
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
    "url": "assets/js/9.be290bfb.js",
    "revision": "da549fbb07c60725a1735c3769703544"
  },
  {
    "url": "assets/js/app.e9353738.js",
    "revision": "31a4f50ed42770bfc636c3c78f2aa251"
  },
  {
    "url": "docker/index.html",
    "revision": "7ba0d7414df15c448956412699d1fc54"
  },
  {
    "url": "gitlab/cicd/index.html",
    "revision": "76d1c6e190509878bc6b93698dd8f6aa"
  },
  {
    "url": "gitlab/index.html",
    "revision": "2384ed56c750acb3340d98ddc0017baf"
  },
  {
    "url": "index.html",
    "revision": "98e6e8026735af9b5e568fd6ca4872eb"
  },
  {
    "url": "mlogo.svg",
    "revision": "ac847ef8c526f385e7288c4808a7b830"
  },
  {
    "url": "navigation.html",
    "revision": "060519be7ab624752bc1a9e5c15f6ce4"
  },
  {
    "url": "spring/index.html",
    "revision": "0f30b7894b400e74c71c728995186bac"
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
