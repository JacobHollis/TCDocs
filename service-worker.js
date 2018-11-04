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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c3c3aa27ffa7a6025421bef2c50aebed"
  },
  {
    "url": "assets/css/1.styles.1d2d5be2.css",
    "revision": "bd2953ae21f32746ddb8402e019843e8"
  },
  {
    "url": "assets/css/2.styles.6b7569cb.css",
    "revision": "658262901bc10d9dfb2774a90d71fb81"
  },
  {
    "url": "assets/css/styles.e0d759dc.css",
    "revision": "2b73208f0c3df4a8f6981ac468d1aac3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.1d2d5be2.js",
    "revision": "dc5f75ecee001d29cb86a8bc8a8f8baf"
  },
  {
    "url": "assets/js/10.ff169fb4.js",
    "revision": "b62d6e846e4b32e9e4d8e40ae285400e"
  },
  {
    "url": "assets/js/11.e842d238.js",
    "revision": "207fa2481a764c158d56b6b2d3680275"
  },
  {
    "url": "assets/js/12.d79d53da.js",
    "revision": "3cb3ec6015bd165c96f39ae922f777ca"
  },
  {
    "url": "assets/js/13.8a6dbd5f.js",
    "revision": "a668e786781f0a2489d2ed121ef6e7b9"
  },
  {
    "url": "assets/js/14.1644335e.js",
    "revision": "090b70ae2a3114eed029aeb556a9e052"
  },
  {
    "url": "assets/js/15.a4805779.js",
    "revision": "e5b29e6272d4b6900fa5ffa9732e2547"
  },
  {
    "url": "assets/js/16.276eae53.js",
    "revision": "2f3e97109ab8ea246a9561db04771ebb"
  },
  {
    "url": "assets/js/17.3e199510.js",
    "revision": "da29a0a0365f8303b68d6b8bb05442d8"
  },
  {
    "url": "assets/js/18.b29d5982.js",
    "revision": "6c638f1409d16e89b2572819a69c332b"
  },
  {
    "url": "assets/js/19.b27014c3.js",
    "revision": "4d527ecf59a6026e14561229a37f8fb0"
  },
  {
    "url": "assets/js/2.6b7569cb.js",
    "revision": "fe333b391aa7529e7228c22d5c70f516"
  },
  {
    "url": "assets/js/20.a185b309.js",
    "revision": "d9891764fdb76009f84a644675391e40"
  },
  {
    "url": "assets/js/21.88fd540a.js",
    "revision": "2f08958467d92ec22cd6e4edd00d9e33"
  },
  {
    "url": "assets/js/22.3245e669.js",
    "revision": "db668665b0496d9c3d7fb27e9a67b1a1"
  },
  {
    "url": "assets/js/23.0a78a974.js",
    "revision": "1e2ee2d73b0f2f239236b07c2283594d"
  },
  {
    "url": "assets/js/24.1681074b.js",
    "revision": "fa5f7418482425e9cb3fda098cf5abf9"
  },
  {
    "url": "assets/js/25.8838caaf.js",
    "revision": "a0765ac5823b9e5c2e521b892a1c205f"
  },
  {
    "url": "assets/js/26.5573f78e.js",
    "revision": "794c91d78519a53c8ef0e3edcc338e89"
  },
  {
    "url": "assets/js/3.3eee7afe.js",
    "revision": "1ade5d266495e4711f65c807b8d94d18"
  },
  {
    "url": "assets/js/4.7f9b3fd6.js",
    "revision": "a49436edf8851512b6bc1472a174bef2"
  },
  {
    "url": "assets/js/5.de05ba30.js",
    "revision": "cf32f342959cf80913f5642612be813e"
  },
  {
    "url": "assets/js/6.70dbefb4.js",
    "revision": "20b4203508ac1613d40e4e6e1a77b557"
  },
  {
    "url": "assets/js/7.4c0bc7d5.js",
    "revision": "1dbc241f3ad820baae34e1b7d1029789"
  },
  {
    "url": "assets/js/8.14f99af3.js",
    "revision": "1ee0d6848725b7e263b93dd615b97c49"
  },
  {
    "url": "assets/js/9.bbb0340a.js",
    "revision": "a200116c9ea3870cf5c8c512c529ba32"
  },
  {
    "url": "assets/js/app.e0d759dc.js",
    "revision": "1aa81009818ae02d1b0678f02ac96657"
  },
  {
    "url": "images/TidewayCareLogo.svg",
    "revision": "a232a9862334bd03a92c3a3d8bb303f1"
  },
  {
    "url": "index.html",
    "revision": "143a6ebbdec969a9cc0035d8f49eaee9"
  },
  {
    "url": "Policies/G01.html",
    "revision": "5ee99e19878249e9dafb09e01932a41d"
  },
  {
    "url": "Policies/G02.html",
    "revision": "45f56f537623313ceae31807d6d3837a"
  },
  {
    "url": "Policies/G03.html",
    "revision": "c365333e779f89a3ed6a108ada218723"
  },
  {
    "url": "Policies/G04.html",
    "revision": "0b1768fd3e3cbde81ebedd4b68797737"
  },
  {
    "url": "Policies/G05.html",
    "revision": "dce4ec6086712761161649ddf5584fb0"
  },
  {
    "url": "Policies/G06.html",
    "revision": "04b547a17502bdbce79f786973226ef2"
  },
  {
    "url": "Policies/HR01.html",
    "revision": "819c682c00eb625749bc419176be52a7"
  },
  {
    "url": "Policies/HR02.html",
    "revision": "1bd5bc22614d2750da14789ecf69076f"
  },
  {
    "url": "Policies/HR03.html",
    "revision": "29f8a37cb56572320fff6f3da634a6b6"
  },
  {
    "url": "Policies/HS01.html",
    "revision": "31401ee68ce01f547e5cc9409569d735"
  },
  {
    "url": "Policies/HS02.html",
    "revision": "72a1843c2addfab314e3926b7fd8823c"
  },
  {
    "url": "Policies/index.html",
    "revision": "f98505c4ffdc3376a9d3cf1c2c070874"
  },
  {
    "url": "Policies/OP01.html",
    "revision": "5ce7a0bb5ecb14289093f80497cd355f"
  },
  {
    "url": "Policies/OP02.html",
    "revision": "ab8c546d6c677cee627f36366b4c1e7b"
  },
  {
    "url": "Policies/OP03.1.html",
    "revision": "010185d5c4bb970822580b495b43a7e6"
  },
  {
    "url": "Policies/OP03.html",
    "revision": "bf16974cc1aac249baf03e389b9b6291"
  },
  {
    "url": "Policies/OP04.html",
    "revision": "59da468bade456aea0b51cd8e7b931a4"
  },
  {
    "url": "Policies/OP05.html",
    "revision": "8098dc73f3546a1e58d32536203f6b73"
  },
  {
    "url": "Policies/OP06.html",
    "revision": "ab4054e361c92da12d70f158c58ad197"
  },
  {
    "url": "Policies/OP07.html",
    "revision": "1e4a9dfcf0d4b200c98fa38f28b1783b"
  },
  {
    "url": "Policies/OP09.html",
    "revision": "9227da2161c5e264e9a4548a5bc6a687"
  },
  {
    "url": "Policies/OP11.html",
    "revision": "50fe951aa72eb5d9498ccabad23dd4ec"
  },
  {
    "url": "Policies/OP12.html",
    "revision": "f8d27eb7cdae494620dd21b9bad97a15"
  },
  {
    "url": "TCApps-Icon192.png",
    "revision": "02bf22d25294908b652918eea7304550"
  },
  {
    "url": "TCApps-Icon512.png",
    "revision": "413dbd04cd135c919f156eb08529a034"
  },
  {
    "url": "TCFavicon.png",
    "revision": "09ae6f03989797c77702a0a2ad2899c9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
