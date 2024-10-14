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
    "revision": "74688b97dbb26716e363bd834fbb72fd"
  },
  {
    "url": "assets/css/0.styles.674fe553.css",
    "revision": "80e76cc2e6b2b26d692ade66b8a04f47"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.dcccd42c.js",
    "revision": "83387f85dd6680b694ffb873f78b0fe0"
  },
  {
    "url": "assets/js/10.c683fd46.js",
    "revision": "9ccfcec8c1600867519c13721b8994a4"
  },
  {
    "url": "assets/js/11.952826fc.js",
    "revision": "2b758a72b492099964dfc13979f615d4"
  },
  {
    "url": "assets/js/12.0229126e.js",
    "revision": "6484aa001002cd3de9ec3c1c6e61288f"
  },
  {
    "url": "assets/js/13.4efdb7a1.js",
    "revision": "8274463e3edae5a82ed122983286786e"
  },
  {
    "url": "assets/js/14.e6ce3edc.js",
    "revision": "1f59bd266ad3281d7f1391bd8623e214"
  },
  {
    "url": "assets/js/15.e16dab9f.js",
    "revision": "9970aaf7615697d4f0f706ea795d5614"
  },
  {
    "url": "assets/js/16.83e198c4.js",
    "revision": "c788b5f5935bf0e847ae58b75c4396af"
  },
  {
    "url": "assets/js/17.14792a24.js",
    "revision": "b25960bad44c5836053bf3bbb72d8814"
  },
  {
    "url": "assets/js/18.173e2291.js",
    "revision": "4e1af6ad2beb1a486fd489dfed3c5ba6"
  },
  {
    "url": "assets/js/19.61539c6f.js",
    "revision": "fda5399da0ab32b74ef0dddd652db530"
  },
  {
    "url": "assets/js/2.a4a749b6.js",
    "revision": "64cb31a3af57ce201eaae2e1bee8dcf1"
  },
  {
    "url": "assets/js/20.06ce56d9.js",
    "revision": "3c8ae50ec09c345bc690b5c02f073352"
  },
  {
    "url": "assets/js/21.b6e78ac9.js",
    "revision": "90f11cd181412ca77b6d74f7232b0fc0"
  },
  {
    "url": "assets/js/22.f9631b3a.js",
    "revision": "8497172040014030983f87ba2746837d"
  },
  {
    "url": "assets/js/23.ad531e94.js",
    "revision": "3e96bd9ab13b477306693dc9e4ee6aab"
  },
  {
    "url": "assets/js/24.8e898fbc.js",
    "revision": "7f0809a61d6e2af954c41ccb82844625"
  },
  {
    "url": "assets/js/25.0cedb53b.js",
    "revision": "5408c1a4e338abe2d1bc1d49a7853552"
  },
  {
    "url": "assets/js/26.10e1bef1.js",
    "revision": "af757c01ea10271581fbf799e79a8cad"
  },
  {
    "url": "assets/js/27.57284f25.js",
    "revision": "5614cbf36be780a0796ebf25c1c23d58"
  },
  {
    "url": "assets/js/28.883695df.js",
    "revision": "e1b06b17e27af425b2e5042b5a10fecc"
  },
  {
    "url": "assets/js/29.40d9379a.js",
    "revision": "4b1dd6c63349469a1a06ff7e7d7c6d74"
  },
  {
    "url": "assets/js/3.0eedc2f5.js",
    "revision": "dadcb7bdcc973ea9612e65e9adaa1432"
  },
  {
    "url": "assets/js/30.733b27f6.js",
    "revision": "3f2ba375525ae37f9e7dbd45a0fb7281"
  },
  {
    "url": "assets/js/31.d4036098.js",
    "revision": "188f3c661c7efeec4e99ca8ecdfda017"
  },
  {
    "url": "assets/js/32.cc83205a.js",
    "revision": "e45ebbee979a726907aeaf15c7f24c05"
  },
  {
    "url": "assets/js/33.6f89d20f.js",
    "revision": "d0002207db4c7ea8610600eec2469d0d"
  },
  {
    "url": "assets/js/34.e45c47ba.js",
    "revision": "f28797c4c72c461575b196627ecf4ac4"
  },
  {
    "url": "assets/js/35.e0d76813.js",
    "revision": "e8d1dfe83a982f30771377229c3bf6fe"
  },
  {
    "url": "assets/js/36.2c12cdbc.js",
    "revision": "099e4e8712dc27ff2309eaa4c830b457"
  },
  {
    "url": "assets/js/37.304639f6.js",
    "revision": "0ac00203ff9787a09a3d11dd052f4105"
  },
  {
    "url": "assets/js/38.322d8fca.js",
    "revision": "0864fdfc1d6aa0cf78166e9d45398bdc"
  },
  {
    "url": "assets/js/39.6b8b9494.js",
    "revision": "1981589b77eb3a17b3534ab8d601fbd6"
  },
  {
    "url": "assets/js/4.1392fec0.js",
    "revision": "71540527e38263620f31e1efb64a0753"
  },
  {
    "url": "assets/js/40.229facea.js",
    "revision": "4c4c3421d8d633e1ee16ea885da458ee"
  },
  {
    "url": "assets/js/41.bf6c5f0e.js",
    "revision": "b7f76fac611938a7f1cdb13df7bba11e"
  },
  {
    "url": "assets/js/42.6a167fe5.js",
    "revision": "c0e8c77a86335c3a717ab43d2c26ad63"
  },
  {
    "url": "assets/js/43.12b894fe.js",
    "revision": "29b767fee3a528918dcc6e4f0a0172b8"
  },
  {
    "url": "assets/js/44.7e5ab9e5.js",
    "revision": "8c7e9380703e06c82e482d5cb0b589d9"
  },
  {
    "url": "assets/js/45.8192ce1d.js",
    "revision": "1c1e701eb1538e201acc7eb3f3073368"
  },
  {
    "url": "assets/js/46.a7822e50.js",
    "revision": "2ae5f00cfb69a2520875e6fde5b2056e"
  },
  {
    "url": "assets/js/47.2a71ff3b.js",
    "revision": "79f5ae8fed7d8eeed7b65df24a254952"
  },
  {
    "url": "assets/js/48.118e20b6.js",
    "revision": "51ceef30210f61e2227f6c38f4d68e01"
  },
  {
    "url": "assets/js/49.cad0a50d.js",
    "revision": "d5ac739b9a43c4468d708456c7a48c7d"
  },
  {
    "url": "assets/js/5.84655fac.js",
    "revision": "3344fc5863ef128a2928415b47a3be1a"
  },
  {
    "url": "assets/js/50.670cb7b8.js",
    "revision": "9c6e7578502c2ff0deebc25276a9a64c"
  },
  {
    "url": "assets/js/51.e658c205.js",
    "revision": "1f62c90fe329645b9ca74494bd2f0be0"
  },
  {
    "url": "assets/js/52.f0022141.js",
    "revision": "0e957bc02eadd18c4edbb4ccce40d30b"
  },
  {
    "url": "assets/js/53.2eadfc6e.js",
    "revision": "237bc8015fb89257e9df17931a70d14f"
  },
  {
    "url": "assets/js/54.7bdef580.js",
    "revision": "ce5ba3e037b20d72ec9c61c7ddbbf360"
  },
  {
    "url": "assets/js/55.e21c2fc0.js",
    "revision": "abcf4066086a0598d53f04cc21685d2b"
  },
  {
    "url": "assets/js/56.b990160a.js",
    "revision": "f22bf6f7b300d4dec17cf59291a0cea2"
  },
  {
    "url": "assets/js/57.ebbecd19.js",
    "revision": "9cc7d2178a32ddf2ab80e2228c5f21cf"
  },
  {
    "url": "assets/js/6.f9c5d2e2.js",
    "revision": "37cfadab21f62519d858345918695848"
  },
  {
    "url": "assets/js/7.04d0e226.js",
    "revision": "b0fc8a19f5aaaf68add6cb0de41efd95"
  },
  {
    "url": "assets/js/app.2cfeabc5.js",
    "revision": "80ac9ca767526ccc9b49a367a1e2b3d2"
  },
  {
    "url": "assets/js/vendors~docsearch.8ee43d73.js",
    "revision": "a8517086caaf81ffbd692a55932a3cff"
  },
  {
    "url": "developer/environment/system.html",
    "revision": "9b1d8e8743d6e99779af33e862e08524"
  },
  {
    "url": "developer/environment/workspace.html",
    "revision": "c10694ef9dde87357b85112ea5960944"
  },
  {
    "url": "developer/spec/components.html",
    "revision": "e36a9ea704fcf0bce284bc6cd4ae9d32"
  },
  {
    "url": "developer/spec/interfaces.html",
    "revision": "1d8c1e14f2d9bc8f2ced0b6043aa2b91"
  },
  {
    "url": "developer/standard/coding.html",
    "revision": "958404107822aa1c534cd4bbdf260576"
  },
  {
    "url": "developer/standard/immutability.html",
    "revision": "bcbf415d0a9fa6c7adb6a7957f0c19b7"
  },
  {
    "url": "developer/standard/quality.html",
    "revision": "50c2905d1057c66c1172d7d1cf9fc1f1"
  },
  {
    "url": "developer/standard/testing.html",
    "revision": "d944dd05d1287b5c2ca15cfde67fadfc"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "b629d47598975556707ef284f3b5a7a3"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "53e19f861ef2b6b5c5564788fd86aedc"
  },
  {
    "url": "index.html",
    "revision": "d75bde2356428f6a81b0adcc0d1c09a1"
  },
  {
    "url": "introduction/contributing.html",
    "revision": "34c450935911625e7e8938dcd5579343"
  },
  {
    "url": "introduction/index.html",
    "revision": "09a16f61bddd9cb71b125e0c9081d3e9"
  },
  {
    "url": "introduction/installation.html",
    "revision": "14f2608c354d7094b0685183b32b4397"
  },
  {
    "url": "introduction/status.html",
    "revision": "b5b427088662c974c7914d60b087008b"
  },
  {
    "url": "introduction/version.html",
    "revision": "9b6d2b6fdbe7ac874c8c129c134bb9b3"
  },
  {
    "url": "logo-square.svg",
    "revision": "9c0b32c62964d033a977c9b49d695ebd"
  },
  {
    "url": "logo.png",
    "revision": "53e19f861ef2b6b5c5564788fd86aedc"
  },
  {
    "url": "logo.svg",
    "revision": "f42d031b317007445489c1ce36ec618e"
  },
  {
    "url": "packages/action.html",
    "revision": "f60bf9219569d462deccadeb93abaccb"
  },
  {
    "url": "packages/cache.html",
    "revision": "db3128182a9584597c2016e0b023c720"
  },
  {
    "url": "packages/danky.html",
    "revision": "5d09429ed944f24ecb6e2d5116db7143"
  },
  {
    "url": "packages/data-structure.html",
    "revision": "975cec0af232de782db1db71d3067df1"
  },
  {
    "url": "packages/filesystem.html",
    "revision": "b9957c550b1ff11dac9981626f15424a"
  },
  {
    "url": "packages/http.html",
    "revision": "ca0abab8cf1b26573515cba4147508b1"
  },
  {
    "url": "packages/message.html",
    "revision": "ab09a399a6c896654542ff7091f6f67f"
  },
  {
    "url": "packages/parameter.html",
    "revision": "2d55acdc837489d35b373459e5881833"
  },
  {
    "url": "packages/regex.html",
    "revision": "6a7240ad42ab3d9875c36343b382f05f"
  },
  {
    "url": "packages/router.html",
    "revision": "b1dab88426ce40fc42d614bea74b9643"
  },
  {
    "url": "packages/schwager.html",
    "revision": "8d4b4c58d798deed093fc0bc14f16d4b"
  },
  {
    "url": "packages/sql2p.html",
    "revision": "7a4cd2fd7f2d3308832fa03c4da5e0b2"
  },
  {
    "url": "packages/standard.html",
    "revision": "3bd01553111f26a27eef798e9e8aaa02"
  },
  {
    "url": "packages/throwable-handler.html",
    "revision": "dc30cb9bcea3d1212676f8d07dff99ce"
  },
  {
    "url": "packages/trace.html",
    "revision": "c61d4bc684e7ff62e35a57df58fb751d"
  },
  {
    "url": "packages/var-dump.html",
    "revision": "872b33442eb44a203b5962580f168d57"
  },
  {
    "url": "packages/var-support.html",
    "revision": "175c99541ae53ef7ecf61ac7db141e15"
  },
  {
    "url": "packages/workflow.html",
    "revision": "fb0410327c1f8444f14d78c9bb8e959b"
  },
  {
    "url": "packages/writer.html",
    "revision": "b7685fd9ff8cb5eecb40d4ca683f0f36"
  },
  {
    "url": "packages/xrdebug.html",
    "revision": "62be0d205d5858efadbd6a0acaa9286e"
  },
  {
    "url": "src/packages/throwable-handler-demo.svg",
    "revision": "a43c3701821a9e5e39ee27e632716666"
  },
  {
    "url": "src/packages/throwable-handler-logo.svg",
    "revision": "853f9066528f0c862de6f7ce923af31d"
  },
  {
    "url": "src/packages/var-dump-demo.svg",
    "revision": "448067fabfe2d2d19150215708b4462e"
  },
  {
    "url": "src/packages/xrdebug-social.png",
    "revision": "45e146f557f0c57c438f5455da4333f8"
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
