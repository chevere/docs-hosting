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
    "revision": "07ec607a058b5ce885fd33a74fba4654"
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
    "url": "assets/js/29.98648c7e.js",
    "revision": "a0b2a49bb057844de1986335dc50f38e"
  },
  {
    "url": "assets/js/3.0eedc2f5.js",
    "revision": "dadcb7bdcc973ea9612e65e9adaa1432"
  },
  {
    "url": "assets/js/30.636f90ab.js",
    "revision": "0113c2bd62b2455d63bddca84810068c"
  },
  {
    "url": "assets/js/31.d4036098.js",
    "revision": "188f3c661c7efeec4e99ca8ecdfda017"
  },
  {
    "url": "assets/js/32.3f9c2def.js",
    "revision": "7253e023f1a8c78a6434de812366b977"
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
    "url": "assets/js/35.565b7e51.js",
    "revision": "3c185e653aa55919c3746e12785e0062"
  },
  {
    "url": "assets/js/36.3c6cacd2.js",
    "revision": "821d5509f265f9637ab3742cfc5fbe53"
  },
  {
    "url": "assets/js/37.99e75105.js",
    "revision": "9d9ed9a0156a06cad00d06c6ae40fcbf"
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
    "url": "assets/js/41.a307e7b0.js",
    "revision": "c6a80022fd04740685292abeb3e4cccb"
  },
  {
    "url": "assets/js/42.60a0f70a.js",
    "revision": "884dafea2e59cbb9b56067d665cdc31a"
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
    "url": "assets/js/46.72fe0002.js",
    "revision": "aae390292c0d231d248cad8afd53e896"
  },
  {
    "url": "assets/js/47.549f1c9a.js",
    "revision": "78afef663a3e673521b5ed5d50fa37d7"
  },
  {
    "url": "assets/js/48.33ecf92e.js",
    "revision": "5d5c2b28b4ea08d4908b0d4b6a4f125d"
  },
  {
    "url": "assets/js/49.7755d331.js",
    "revision": "f3c4497aaaa953db76bee640c3ee2c01"
  },
  {
    "url": "assets/js/5.84655fac.js",
    "revision": "3344fc5863ef128a2928415b47a3be1a"
  },
  {
    "url": "assets/js/50.92bb5958.js",
    "revision": "02b9d35aaf18c0d59b1f3757376ec88d"
  },
  {
    "url": "assets/js/51.61e99a7c.js",
    "revision": "d8a55534bd5674a844e6388861d305c5"
  },
  {
    "url": "assets/js/52.e8276b9f.js",
    "revision": "64458b826ba818a0c996b11e47cdc534"
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
    "url": "assets/js/app.90a86b96.js",
    "revision": "f1a640ee57848898c7c42649ce17c72f"
  },
  {
    "url": "assets/js/vendors~docsearch.8ee43d73.js",
    "revision": "a8517086caaf81ffbd692a55932a3cff"
  },
  {
    "url": "developer/environment/system.html",
    "revision": "bd6f924ca5fa7a2f114fb48c77840892"
  },
  {
    "url": "developer/environment/workspace.html",
    "revision": "2fadcdece2e08e8f5bd22d36210d9039"
  },
  {
    "url": "developer/spec/components.html",
    "revision": "6b1170e9562dee07142e2ccfda65a177"
  },
  {
    "url": "developer/spec/interfaces.html",
    "revision": "56bde5ba92df5f4a5a01b4a63427c003"
  },
  {
    "url": "developer/standard/coding.html",
    "revision": "cad66520301e24baa7a304f226fd7f15"
  },
  {
    "url": "developer/standard/immutability.html",
    "revision": "863a52fca0df9d3ef20fbd2fb1b6ec4f"
  },
  {
    "url": "developer/standard/quality.html",
    "revision": "5b859ad38b0416ed49e4a2d37af8b1e1"
  },
  {
    "url": "developer/standard/testing.html",
    "revision": "5eb5a70e8923d91bed9ee8507cf11618"
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
    "revision": "393429b8903f47fdb1f3fb96ba347075"
  },
  {
    "url": "introduction/contributing.html",
    "revision": "c02862e8e3290399e49060c9d9aaa582"
  },
  {
    "url": "introduction/index.html",
    "revision": "c11fe541e6d7e315b76ddb3f58cb819c"
  },
  {
    "url": "introduction/installation.html",
    "revision": "5599556833d5be7d1f70196e7e87101c"
  },
  {
    "url": "introduction/status.html",
    "revision": "54e6f29d7a385d2199da2b314788b3bd"
  },
  {
    "url": "introduction/version.html",
    "revision": "73e4f84dc361e78ca78eb6cd6b394a58"
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
    "revision": "a6706273e7b1a96149eeaf24eb35ec2e"
  },
  {
    "url": "packages/cache.html",
    "revision": "1e7eccc4bca562125630ca2c3e9bd196"
  },
  {
    "url": "packages/danky.html",
    "revision": "f22fe6eb2040cf810d8f99994155dc7f"
  },
  {
    "url": "packages/data-structure.html",
    "revision": "bbdfcc12a28ded54ad47e8224eb3c7b3"
  },
  {
    "url": "packages/filesystem.html",
    "revision": "cbed3ae69308e60d3eb05e82997d6027"
  },
  {
    "url": "packages/http.html",
    "revision": "20383f78ba7272495a831c005d3890de"
  },
  {
    "url": "packages/message.html",
    "revision": "c1111def17b267412c1c353e362ead62"
  },
  {
    "url": "packages/parameter.html",
    "revision": "4538a04192fb80146fbb3dfa09678e89"
  },
  {
    "url": "packages/regex.html",
    "revision": "3d0bdd2f556c4c597212e44ef544bc33"
  },
  {
    "url": "packages/router.html",
    "revision": "9bf43d2750294beecb6a656b30092d6d"
  },
  {
    "url": "packages/schwager.html",
    "revision": "0279a274ae77d37c069ff717e0b9a191"
  },
  {
    "url": "packages/sql2p.html",
    "revision": "561922b9cd309fc313ef3bc040c50462"
  },
  {
    "url": "packages/standard.html",
    "revision": "fbacb6347e650e05be2a2b609d3ba313"
  },
  {
    "url": "packages/throwable-handler.html",
    "revision": "74082afd28e5e0d1586b0ab082581d1b"
  },
  {
    "url": "packages/trace.html",
    "revision": "8543091322943af0fa87e96da8d72ed8"
  },
  {
    "url": "packages/var-dump.html",
    "revision": "d98a5e9f44209e353a675445a2d2a316"
  },
  {
    "url": "packages/var-support.html",
    "revision": "137a0591a6218500fd40a40b02521ef2"
  },
  {
    "url": "packages/workflow.html",
    "revision": "ffaefc82b0a6c65baecfcbf03eaabaf7"
  },
  {
    "url": "packages/writer.html",
    "revision": "65b56da2498f9c939bd8b67d9747d772"
  },
  {
    "url": "packages/xrdebug.html",
    "revision": "d2d854b0c56ad151892560ee4f210ada"
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
