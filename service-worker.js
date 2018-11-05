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
    "revision": "58834543fee78a83df56b3d329ea0564"
  },
  {
    "url": "assets/css/1.styles.b0bfd764.css",
    "revision": "bd2953ae21f32746ddb8402e019843e8"
  },
  {
    "url": "assets/css/2.styles.6b7569cb.css",
    "revision": "658262901bc10d9dfb2774a90d71fb81"
  },
  {
    "url": "assets/css/styles.ca68ff03.css",
    "revision": "2b73208f0c3df4a8f6981ac468d1aac3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.b0bfd764.js",
    "revision": "bd201d4af6b94889429700b2a6d3e048"
  },
  {
    "url": "assets/js/10.1285a1a4.js",
    "revision": "8f735a04e7be20f63d46d082646447bd"
  },
  {
    "url": "assets/js/11.1b1f7633.js",
    "revision": "a51be5a7a45ed2d000c406e667323d9b"
  },
  {
    "url": "assets/js/12.4778b0ea.js",
    "revision": "aaa40e96d189281879915627b3310631"
  },
  {
    "url": "assets/js/13.367dba20.js",
    "revision": "675df415d053debeba14ff4ae0945597"
  },
  {
    "url": "assets/js/14.0d1b6b55.js",
    "revision": "9ca44fc7d1023508d1435f9530d6857b"
  },
  {
    "url": "assets/js/15.69d8fa6b.js",
    "revision": "0603cfd590fac3b28cffdc1e1540c9a1"
  },
  {
    "url": "assets/js/16.21a8a58f.js",
    "revision": "6dfa4df2d73345a19f2c2418bb61371c"
  },
  {
    "url": "assets/js/17.ff8b72b3.js",
    "revision": "1432ebc96919ad29b8c0b9b7529defc1"
  },
  {
    "url": "assets/js/18.42394a00.js",
    "revision": "bf462dd7c569feb8c9cd3181c1e6ebcc"
  },
  {
    "url": "assets/js/19.c9e9abc1.js",
    "revision": "e83b63a5d86b5c76b2725e8b51c79889"
  },
  {
    "url": "assets/js/2.6b7569cb.js",
    "revision": "fe333b391aa7529e7228c22d5c70f516"
  },
  {
    "url": "assets/js/20.ad67f4e1.js",
    "revision": "19b1690ce078dfdd9aa4d496728bf3ed"
  },
  {
    "url": "assets/js/21.021b9588.js",
    "revision": "d4c5f45ed9d9de4253631c6f49ad8dc6"
  },
  {
    "url": "assets/js/22.7bfbe4fb.js",
    "revision": "fdc04934dea142afad6b7ed53d00ffa6"
  },
  {
    "url": "assets/js/23.42065822.js",
    "revision": "1a108ea1bf50ef4bff2cc3ebe3e0f5e3"
  },
  {
    "url": "assets/js/24.292c1502.js",
    "revision": "22a35df7ecf46b93b627273981fd1b0b"
  },
  {
    "url": "assets/js/25.ab9ef203.js",
    "revision": "ea1754f6d19ccb6d6524a5ad89f69193"
  },
  {
    "url": "assets/js/26.8f7b5c63.js",
    "revision": "a9b2d96044505dba681e339e427a7d40"
  },
  {
    "url": "assets/js/27.72bd2d0f.js",
    "revision": "129e69a7613d4203092246f0f5184921"
  },
  {
    "url": "assets/js/28.d9c493dc.js",
    "revision": "c494fc39bf376a59afc352fd59304102"
  },
  {
    "url": "assets/js/29.0eb02310.js",
    "revision": "7e6e9be46ea2b62371ae14dda76fc472"
  },
  {
    "url": "assets/js/3.d5554bf3.js",
    "revision": "2c33227e11e03519a955cd332966abb0"
  },
  {
    "url": "assets/js/30.dfd843b8.js",
    "revision": "f6e016a82cce7539c363acbf9e7d6f74"
  },
  {
    "url": "assets/js/31.c33b7298.js",
    "revision": "940ae8fb6347acec429557de62474376"
  },
  {
    "url": "assets/js/32.678182ae.js",
    "revision": "6c268c5b62233d7d0973a6ffc4fa43a6"
  },
  {
    "url": "assets/js/33.b7bbc8e1.js",
    "revision": "d108a31691070aaef16a550c35bc21f4"
  },
  {
    "url": "assets/js/34.785ddfbc.js",
    "revision": "f407a702dba6575881ce55d3d085277d"
  },
  {
    "url": "assets/js/35.beeab964.js",
    "revision": "7426335565028f40778a23bcc4467924"
  },
  {
    "url": "assets/js/36.e9a49435.js",
    "revision": "a2ca03e616a33c6dc8baaac97694358d"
  },
  {
    "url": "assets/js/37.1eedfa0a.js",
    "revision": "8f2dd40a63a74ea942b656f9837c07b8"
  },
  {
    "url": "assets/js/4.67167a7b.js",
    "revision": "8809c963f152bb6594ec8569df6651a9"
  },
  {
    "url": "assets/js/5.49b6d2e2.js",
    "revision": "554b1eece61351ae168e0b468c7daf53"
  },
  {
    "url": "assets/js/6.8aeb21a0.js",
    "revision": "56296742568ef12304b3ea3e3b6556a7"
  },
  {
    "url": "assets/js/7.839fbd24.js",
    "revision": "59676e1f5367984c552de4baf5c9bfa0"
  },
  {
    "url": "assets/js/8.217f3af2.js",
    "revision": "02a6e402df033c46c244fb2ca05ef895"
  },
  {
    "url": "assets/js/9.535eddb1.js",
    "revision": "019b52817c0128284619106c134ae1bd"
  },
  {
    "url": "assets/js/app.ca68ff03.js",
    "revision": "a986bfc4249188278854f010e97fd988"
  },
  {
    "url": "images/AnnualAppraisalCycle.png",
    "revision": "94d4f6c25b7661a575b7ea7c89cba7f4"
  },
  {
    "url": "images/DisciplinaryProcessFlowchart.png",
    "revision": "f36d17031e535e080cd24409713a63fd"
  },
  {
    "url": "images/OrgChart.png",
    "revision": "893feae947413fbb248adcd27b8bc66e"
  },
  {
    "url": "images/ProbationProcessFlowchart.png",
    "revision": "74020be0bbf6dde3b0d92c9a6f811566"
  },
  {
    "url": "images/TidewayCareLogo.svg",
    "revision": "a232a9862334bd03a92c3a3d8bb303f1"
  },
  {
    "url": "index.html",
    "revision": "4d243e344fb32d92dcb8e00ac05d8a00"
  },
  {
    "url": "Policies/G01.html",
    "revision": "2eb9a6b15fc87936e03ae3b23ee5363b"
  },
  {
    "url": "Policies/G02.html",
    "revision": "f1b874ba5a5286db962d42b8170b0984"
  },
  {
    "url": "Policies/G02Appendix01.html",
    "revision": "26adf015a320d59f5acff4beba7029a9"
  },
  {
    "url": "Policies/G02Appendix02.html",
    "revision": "dc68dd4cc06cfe401b7fc7b1ab375932"
  },
  {
    "url": "Policies/G03.html",
    "revision": "18b996871c0f767646b730a50f91343a"
  },
  {
    "url": "Policies/G04.html",
    "revision": "0ecf47d4efd3aec154f49c434dbbb1a0"
  },
  {
    "url": "Policies/G05.html",
    "revision": "03cac13b38574ed745e75087fc2d576e"
  },
  {
    "url": "Policies/G06.html",
    "revision": "a08da03d217f427d569a68d212debd2c"
  },
  {
    "url": "Policies/HR01.html",
    "revision": "ee9a82b5041185903373ad6b0a32ec0d"
  },
  {
    "url": "Policies/HR01Appendix01.html",
    "revision": "168d6970743b177c1bb904e69ad4ea3d"
  },
  {
    "url": "Policies/HR01Appendix02.html",
    "revision": "cb67e9181012b61741fba6e7691784bc"
  },
  {
    "url": "Policies/HR01Appendix05.html",
    "revision": "570f996cae3099b97fe297a34f680744"
  },
  {
    "url": "Policies/HR01Appendix06.html",
    "revision": "768ffc72d0ed268175f277b7fb262c21"
  },
  {
    "url": "Policies/HR01Appendix07.html",
    "revision": "f3cdff7b245af05ecf11008aeb103f4a"
  },
  {
    "url": "Policies/HR01Appendix08.html",
    "revision": "79834c3833444933a99ca79959c1bc23"
  },
  {
    "url": "Policies/HR02.html",
    "revision": "119e76f9b52040caa7e31666f1062997"
  },
  {
    "url": "Policies/HR02Appendix01.html",
    "revision": "a3a735712108eca68bdbbc7b969c08d2"
  },
  {
    "url": "Policies/HR02Appendix02.html",
    "revision": "ddc706737856ab506066417d49eae504"
  },
  {
    "url": "Policies/HR02Appendix03.html",
    "revision": "ae58b4dd62f1fdb21f5ce2814e8f7a3c"
  },
  {
    "url": "Policies/HR03.html",
    "revision": "3efcf09a6bc123a08a006bd9cdbcef35"
  },
  {
    "url": "Policies/HS01.html",
    "revision": "2807ba37af27be593457f0c34f1af6ba"
  },
  {
    "url": "Policies/HS02.html",
    "revision": "977f73cd86d611e758b839084738b9e3"
  },
  {
    "url": "Policies/index.html",
    "revision": "271692e87ae154d8b72c45dfc0dffa5e"
  },
  {
    "url": "Policies/OP01.html",
    "revision": "43a36d28a81b900c5aa5b08b403ec5cf"
  },
  {
    "url": "Policies/OP02.html",
    "revision": "f5e6e1feba73f142102357384531bdfc"
  },
  {
    "url": "Policies/OP03.1.html",
    "revision": "0c69e0f0d87fc15ead200b8033d65cc2"
  },
  {
    "url": "Policies/OP03.html",
    "revision": "2f2975751f52a36819b05a1ee7a9e83a"
  },
  {
    "url": "Policies/OP04.html",
    "revision": "095e9f8f9151dd61d4d17f4e3ceb0af8"
  },
  {
    "url": "Policies/OP05.html",
    "revision": "1e69d6547e6999a32387934e4cf8f256"
  },
  {
    "url": "Policies/OP06.html",
    "revision": "fbe45cd54fcef602e1cafb7c52c7d693"
  },
  {
    "url": "Policies/OP07.html",
    "revision": "abf5acf1e7c5d81c99998e1f722b3f58"
  },
  {
    "url": "Policies/OP09.html",
    "revision": "fb6a2d2f95d9904a9b64aa4c480f0763"
  },
  {
    "url": "Policies/OP11.html",
    "revision": "2e3b97b90201f74755727e68cabf7102"
  },
  {
    "url": "Policies/OP12.html",
    "revision": "c37ce57c7fbe2ad5a46c016cc98687fb"
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
