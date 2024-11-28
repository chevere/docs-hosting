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
    "revision": "13d9b5d994c03aeffa06354e1bec76f0"
  },
  {
    "url": "assets/css/0.styles.ddeed1b0.css",
    "revision": "406f4367135f0ed38c274acb9d10537c"
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
    "url": "assets/js/23.3cbf9598.js",
    "revision": "137682f9eae088e8a8222e4363cd0d56"
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
    "url": "assets/js/26.f2ad10e0.js",
    "revision": "592239afa79c7e5ee326f5edd7e0b7ae"
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
    "url": "assets/js/29.3ff2de7a.js",
    "revision": "5fcf0cfa52d9bbda4139e8e64344e2cf"
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
    "url": "assets/js/31.820376de.js",
    "revision": "ca8021b64ab1996c7a2b87c886bcb9b4"
  },
  {
    "url": "assets/js/32.cc83205a.js",
    "revision": "e45ebbee979a726907aeaf15c7f24c05"
  },
  {
    "url": "assets/js/33.138faefc.js",
    "revision": "df0c8d91b1fd9c0480029b2afdc8c467"
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
    "url": "assets/js/39.292dfbaf.js",
    "revision": "de99126d8bc97d46d32d67c595f386d5"
  },
  {
    "url": "assets/js/4.1392fec0.js",
    "revision": "71540527e38263620f31e1efb64a0753"
  },
  {
    "url": "assets/js/40.6f98890f.js",
    "revision": "2020b3bc8f0163d13c977a1a3dd03ba8"
  },
  {
    "url": "assets/js/41.bf6c5f0e.js",
    "revision": "b7f76fac611938a7f1cdb13df7bba11e"
  },
  {
    "url": "assets/js/42.40e24264.js",
    "revision": "2edfad8fea5bdc1d3299583650f4e1b5"
  },
  {
    "url": "assets/js/43.d7ce4689.js",
    "revision": "601c5f0a0b5f2fcc96d79b4422014678"
  },
  {
    "url": "assets/js/44.5fa174dc.js",
    "revision": "9a65319ca9e6d927ab50c51e77b5edbb"
  },
  {
    "url": "assets/js/45.77830eb0.js",
    "revision": "a8ffa87bb5d8a97e09bf3a8bfe4eb514"
  },
  {
    "url": "assets/js/46.a79377f4.js",
    "revision": "0323ae70a35e40d93314614c16371a0c"
  },
  {
    "url": "assets/js/47.3db19dd0.js",
    "revision": "99d4cfdd7d5f6aea63fdc469733802e9"
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
    "url": "assets/js/50.fdf4843c.js",
    "revision": "9398e73ac1347805c4b97a500b28b3b3"
  },
  {
    "url": "assets/js/51.e658c205.js",
    "revision": "1f62c90fe329645b9ca74494bd2f0be0"
  },
  {
    "url": "assets/js/52.3a85328c.js",
    "revision": "bef749341b7053dbce18f536de67fe55"
  },
  {
    "url": "assets/js/53.f8a00e1c.js",
    "revision": "f144812a82e5d5b1b0ac397026611f86"
  },
  {
    "url": "assets/js/54.b3bd3c8d.js",
    "revision": "df93548ed6c2dfdaa5b2402b3f83f184"
  },
  {
    "url": "assets/js/55.89a7f182.js",
    "revision": "720ccccb43fc5f1646eaa8a433e6e90f"
  },
  {
    "url": "assets/js/56.7696db24.js",
    "revision": "ee394ea08f59d2dc5c2b099e62ec7efb"
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
    "url": "assets/js/app.2bcbc6d1.js",
    "revision": "1616fa459bfdbf3898f42d69c99c8f07"
  },
  {
    "url": "assets/js/vendors~docsearch.8ee43d73.js",
    "revision": "a8517086caaf81ffbd692a55932a3cff"
  },
  {
    "url": "developer/environment/system.html",
    "revision": "a746212b171042218199e099c59b57eb"
  },
  {
    "url": "developer/environment/workspace.html",
    "revision": "973dcef88c8422a999aeeb7ed0ce232f"
  },
  {
    "url": "developer/spec/components.html",
    "revision": "f1e736e6d3619105e3c14cf9704014b0"
  },
  {
    "url": "developer/spec/interfaces.html",
    "revision": "f7506cce058edf052be6799ca282d5ed"
  },
  {
    "url": "developer/standard/coding.html",
    "revision": "0a81885166eb3baa4bce5e4acda2fe57"
  },
  {
    "url": "developer/standard/immutability.html",
    "revision": "5728be24e81aa4fee34903f7ebe181b3"
  },
  {
    "url": "developer/standard/quality.html",
    "revision": "015296d664efe9f596cc0e7e9acef08c"
  },
  {
    "url": "developer/standard/testing.html",
    "revision": "6e044be1bf288bab9b4bc52d50935a70"
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
    "revision": "b69aa25854589442c84d231e3d1f5d97"
  },
  {
    "url": "introduction/contributing.html",
    "revision": "ded7dfe2a858971b3805cf636d675172"
  },
  {
    "url": "introduction/index.html",
    "revision": "3c5535bcda6fb0d3b8fddd61fc9b97d2"
  },
  {
    "url": "introduction/installation.html",
    "revision": "987b5ce9247bacbbff2116c0facfa021"
  },
  {
    "url": "introduction/status.html",
    "revision": "37a5432051a6277f3572785bfd1638cb"
  },
  {
    "url": "introduction/version.html",
    "revision": "ca86fe9d2b9295087eccb6be133fdfca"
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
    "revision": "04578fcdbcad8de04f4b3911896b3684"
  },
  {
    "url": "packages/cache.html",
    "revision": "145c8197ecb6ddfc85838d7c81461191"
  },
  {
    "url": "packages/danky.html",
    "revision": "94026dd3b97444146c0e3bb3df8c114e"
  },
  {
    "url": "packages/data-structure.html",
    "revision": "ebf65cdab6cebef8f548cef3ef279b74"
  },
  {
    "url": "packages/filesystem.html",
    "revision": "fdea66bb28dbfcccc97a243348afde1d"
  },
  {
    "url": "packages/http.html",
    "revision": "6b40a655c550dd4a94c1998a80ccfe4a"
  },
  {
    "url": "packages/message.html",
    "revision": "8f7ee2609ba408bf6e1763c98675af1f"
  },
  {
    "url": "packages/parameter.html",
    "revision": "d421b18085df0282e7970c34c069e43e"
  },
  {
    "url": "packages/regex.html",
    "revision": "40d4091cab53e77cb868103ea16e640e"
  },
  {
    "url": "packages/router.html",
    "revision": "bd0bc21fcbbc8cfd9a3ef5360134581a"
  },
  {
    "url": "packages/schwager.html",
    "revision": "efc1947933a7cd6613bcffa715b9e414"
  },
  {
    "url": "packages/sql2p.html",
    "revision": "aeedf48cc030d4563ca346065e9abe53"
  },
  {
    "url": "packages/standard.html",
    "revision": "d54dcc46b7b2eababe8eebb1af1148df"
  },
  {
    "url": "packages/throwable-handler.html",
    "revision": "8ee8554550480a740c5b5b3b315a868c"
  },
  {
    "url": "packages/trace.html",
    "revision": "62b98196d0f3f3f70555f0f8f376635e"
  },
  {
    "url": "packages/var-dump.html",
    "revision": "5cd61bae30032aa0e4cd8cbc18c27a9c"
  },
  {
    "url": "packages/var-support.html",
    "revision": "1d5b03c195512a065a1e09388f5504eb"
  },
  {
    "url": "packages/workflow.html",
    "revision": "1332c2ee3f436e6e306cd14dc5a0213d"
  },
  {
    "url": "packages/writer.html",
    "revision": "36db6b916f27f710832d619c193ea829"
  },
  {
    "url": "packages/xrdebug.html",
    "revision": "c98a01509d78a3c828e09b61c4f49c5a"
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
