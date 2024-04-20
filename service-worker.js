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
    "revision": "ec6fc6bf5d3c54a5b1cdd8b23a315dac"
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
    "url": "assets/js/23.08e62617.js",
    "revision": "cf9b568292b6c6b09bfe0f30351e253f"
  },
  {
    "url": "assets/js/24.8e898fbc.js",
    "revision": "7f0809a61d6e2af954c41ccb82844625"
  },
  {
    "url": "assets/js/25.a60f1acf.js",
    "revision": "8c1c0c30296a1bed34981d3add4082c9"
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
    "url": "assets/js/30.2ebdc440.js",
    "revision": "c3ec33f6f4d3b505c0d870f0ce09ba9a"
  },
  {
    "url": "assets/js/31.66372028.js",
    "revision": "bc5ac4838e2d5b5672512c224517755d"
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
    "url": "assets/js/35.ddc4ee39.js",
    "revision": "21408f012158c6f80a32c936fec68650"
  },
  {
    "url": "assets/js/36.8263ff9c.js",
    "revision": "93023bdc2a8ff3502bdd6bbcf052e06a"
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
    "url": "assets/js/45.02cb591c.js",
    "revision": "23df27e647b7580469f728dd7d35867d"
  },
  {
    "url": "assets/js/46.a7822e50.js",
    "revision": "2ae5f00cfb69a2520875e6fde5b2056e"
  },
  {
    "url": "assets/js/47.c6c22555.js",
    "revision": "31e451bdedde85af800116ca3163f601"
  },
  {
    "url": "assets/js/48.33ecf92e.js",
    "revision": "5d5c2b28b4ea08d4908b0d4b6a4f125d"
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
    "url": "assets/js/51.0973cc37.js",
    "revision": "e75d4ff3c696ad13e21486bf30afdd21"
  },
  {
    "url": "assets/js/52.e8276b9f.js",
    "revision": "64458b826ba818a0c996b11e47cdc534"
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
    "url": "assets/js/app.def0f853.js",
    "revision": "94c9302f12fed81453d9ec093801e843"
  },
  {
    "url": "assets/js/vendors~docsearch.8ee43d73.js",
    "revision": "a8517086caaf81ffbd692a55932a3cff"
  },
  {
    "url": "developer/environment/system.html",
    "revision": "f952826beee9589a4ca5ce00746fcfc0"
  },
  {
    "url": "developer/environment/workspace.html",
    "revision": "d104045ed40af670dbf3b73b4978a42a"
  },
  {
    "url": "developer/spec/components.html",
    "revision": "f29328fa9612df1f1952bfcb059348f1"
  },
  {
    "url": "developer/spec/interfaces.html",
    "revision": "2fcc8123e4cbcd92dd916b6fde494b73"
  },
  {
    "url": "developer/standard/coding.html",
    "revision": "4fa86f3f6fc316abb87980dce049a3c8"
  },
  {
    "url": "developer/standard/immutability.html",
    "revision": "cc180428215f33dc0606a429fab877fa"
  },
  {
    "url": "developer/standard/quality.html",
    "revision": "158cfcd6b7d6b2bfe682fac9f34f6472"
  },
  {
    "url": "developer/standard/testing.html",
    "revision": "978186414e2942256d16d0c10b870ac8"
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
    "revision": "c6e4c2ebe2b9443e239deb00e77d2ad0"
  },
  {
    "url": "introduction/contributing.html",
    "revision": "d921ad37d7c0237e89280c072fa58b8e"
  },
  {
    "url": "introduction/index.html",
    "revision": "08042019783e02695eb1d344924ac5df"
  },
  {
    "url": "introduction/installation.html",
    "revision": "e4c1557941a8151972b42a00680ae7ea"
  },
  {
    "url": "introduction/status.html",
    "revision": "5737bed65999091498d6a56a5958d573"
  },
  {
    "url": "introduction/version.html",
    "revision": "3f7ca0e9573eccba27b23e33347d1a6d"
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
    "revision": "e81105110f9455f3a9d02ac2f2b5bcca"
  },
  {
    "url": "packages/cache.html",
    "revision": "af3f91eaa8f36de461e64cbc58945762"
  },
  {
    "url": "packages/danky.html",
    "revision": "42fb102ae220e71599e3a1ce94321dfb"
  },
  {
    "url": "packages/data-structure.html",
    "revision": "69c7d42f0d9a4efee42029b2843fb290"
  },
  {
    "url": "packages/filesystem.html",
    "revision": "251c0820e7091a0f1a85163e53cd3127"
  },
  {
    "url": "packages/http.html",
    "revision": "6eddb0c90a737dfd5a077ba8738b0dfa"
  },
  {
    "url": "packages/message.html",
    "revision": "3a2517afb596d963d58ab3e8dc50109f"
  },
  {
    "url": "packages/parameter.html",
    "revision": "2b51255cc0e8e8c994178d2deb4fc04a"
  },
  {
    "url": "packages/regex.html",
    "revision": "bfac55ba7cf363ab76e0bcb79add2529"
  },
  {
    "url": "packages/router.html",
    "revision": "a450c823a21bf568925707753846a8bf"
  },
  {
    "url": "packages/schwager.html",
    "revision": "f2aa1df98a8230955aafdf7a0e59ba6b"
  },
  {
    "url": "packages/sql2p.html",
    "revision": "0ae1cc0a5cf15053541b07c2471f97ee"
  },
  {
    "url": "packages/standard.html",
    "revision": "999fe960a43082729abf1e9e4fdc607f"
  },
  {
    "url": "packages/throwable-handler.html",
    "revision": "6ca4a8d03030e118b23cfc7073a60cc4"
  },
  {
    "url": "packages/trace.html",
    "revision": "e6cfb47bdc13a9e8cd3de5fc2b1e87e4"
  },
  {
    "url": "packages/var-dump.html",
    "revision": "930c3279ca5b8c20ef96492bd60ddcd7"
  },
  {
    "url": "packages/var-support.html",
    "revision": "d38805a9e59c03bc7d2e74f2dcb42bfa"
  },
  {
    "url": "packages/workflow.html",
    "revision": "192bb50a6ddd1ae56909c041e7154f95"
  },
  {
    "url": "packages/writer.html",
    "revision": "adfd2fc90006a9636040cb9d0c0727fc"
  },
  {
    "url": "packages/xrdebug.html",
    "revision": "cfa2a89ccfbb5af9ada21bbf6c222642"
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
