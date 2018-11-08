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
    "revision": "c4919559cfdd9860a84beb9990765ad1"
  },
  {
    "url": "assets/css/1.styles.c8145ebd.css",
    "revision": "bd2953ae21f32746ddb8402e019843e8"
  },
  {
    "url": "assets/css/2.styles.6b7569cb.css",
    "revision": "658262901bc10d9dfb2774a90d71fb81"
  },
  {
    "url": "assets/css/styles.c2f999f9.css",
    "revision": "2b73208f0c3df4a8f6981ac468d1aac3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.c8145ebd.js",
    "revision": "9a3c9894870040c51763d3e7c6f0bac4"
  },
  {
    "url": "assets/js/10.976f574b.js",
    "revision": "47ac14326bde27a7cab86cecff2dac4f"
  },
  {
    "url": "assets/js/11.5b16f991.js",
    "revision": "c1a53ab387c06fe10959fcf7e35c829a"
  },
  {
    "url": "assets/js/12.c940c56b.js",
    "revision": "89ff4691ba596d8645ca8abf50d1378b"
  },
  {
    "url": "assets/js/13.a0709895.js",
    "revision": "19d177eb1a87b800e07b9fc713a8487a"
  },
  {
    "url": "assets/js/14.85e9265b.js",
    "revision": "a13f4d760b2927a991f4dcc3efe18b1d"
  },
  {
    "url": "assets/js/15.1275193d.js",
    "revision": "a70b85e8caadf153549dad904d475ae2"
  },
  {
    "url": "assets/js/16.d0b278cc.js",
    "revision": "1093680ba363cbf69c04a8394a8ffed4"
  },
  {
    "url": "assets/js/17.eecfc34c.js",
    "revision": "900ea8827e09965837ff020ce57e1de0"
  },
  {
    "url": "assets/js/18.41ceb633.js",
    "revision": "2aca2fe3cf668ccf3fa2f62c1dcb7a21"
  },
  {
    "url": "assets/js/19.82ac81cf.js",
    "revision": "32196a42c3377c8833537ee68f9847f0"
  },
  {
    "url": "assets/js/2.6b7569cb.js",
    "revision": "fe333b391aa7529e7228c22d5c70f516"
  },
  {
    "url": "assets/js/20.0df263d3.js",
    "revision": "949082eaa109d6dff65e0a635ba1e508"
  },
  {
    "url": "assets/js/21.3340cf50.js",
    "revision": "ff464d04b7f4142a48dae06aad388282"
  },
  {
    "url": "assets/js/22.8cfb07c6.js",
    "revision": "3cb43f611a44e77b8c55611f9b8b6841"
  },
  {
    "url": "assets/js/23.a67d0856.js",
    "revision": "f9adc9a20e46d2d906a4813d6a5a1f70"
  },
  {
    "url": "assets/js/24.f7ec6a47.js",
    "revision": "cd480c5020eb069021c61ab803ffc752"
  },
  {
    "url": "assets/js/25.4143270f.js",
    "revision": "fdfdf80341a8ed83976a3a534480171c"
  },
  {
    "url": "assets/js/26.30f3716b.js",
    "revision": "3e5e321d3745c6699f487de18bacd571"
  },
  {
    "url": "assets/js/27.d1da5738.js",
    "revision": "ac0a09c4edd4961e6b74b77ff91cf0e0"
  },
  {
    "url": "assets/js/28.05c7c5f2.js",
    "revision": "7f01ec35dc42d5c3b0b06fd4a8b2a605"
  },
  {
    "url": "assets/js/29.ad367cae.js",
    "revision": "6584b7dd1251f8d2fb4079c0397721fc"
  },
  {
    "url": "assets/js/3.653a2e0d.js",
    "revision": "160906c331db3827e812519d7d22d73a"
  },
  {
    "url": "assets/js/30.c89ddbb3.js",
    "revision": "135e9a90a7f272d812e4d3cd5306d974"
  },
  {
    "url": "assets/js/31.3b35475a.js",
    "revision": "5b99d2d8992bdcc8c0ceb464e7f123c7"
  },
  {
    "url": "assets/js/32.f44f82e7.js",
    "revision": "2d12fa132b888a7a9c15716c1617929e"
  },
  {
    "url": "assets/js/33.a3bfea3e.js",
    "revision": "bb8b58cf941929d7530fd3a4e8a6140d"
  },
  {
    "url": "assets/js/34.a5951e6e.js",
    "revision": "6190008c26e782f64816161c6cc5baa0"
  },
  {
    "url": "assets/js/35.48e633b9.js",
    "revision": "58bf8336f39cd56e28e03cb91b95af83"
  },
  {
    "url": "assets/js/36.b9914b9b.js",
    "revision": "276b41f2edde19ac2d2d827adf47b14d"
  },
  {
    "url": "assets/js/37.7c86ff4a.js",
    "revision": "2ab33a933488e79edf05e72553f59d52"
  },
  {
    "url": "assets/js/38.e299f8b5.js",
    "revision": "71d2014821b56c3c2218359229055f1b"
  },
  {
    "url": "assets/js/39.a469e1f7.js",
    "revision": "5b3f119d910c267267ee00c87509de23"
  },
  {
    "url": "assets/js/4.724b1352.js",
    "revision": "fe708954affecf342fccceee05b62d60"
  },
  {
    "url": "assets/js/40.3a4bc8a6.js",
    "revision": "4a655adeb565bd544fbb4a7f085061df"
  },
  {
    "url": "assets/js/41.9de9a443.js",
    "revision": "e5f5ba5271d3da8f8fe7cf4f54319d88"
  },
  {
    "url": "assets/js/42.222a920f.js",
    "revision": "481a26f5b9f89034ebd7c7f5c47b5d0c"
  },
  {
    "url": "assets/js/43.3c38080e.js",
    "revision": "d339cd9c0c804a71c35a7c6b2fc05c1d"
  },
  {
    "url": "assets/js/44.912df610.js",
    "revision": "0e6826a6ea1c519559ff9fa2af2deee2"
  },
  {
    "url": "assets/js/45.fbc2250d.js",
    "revision": "cfd3c83719b9c2b682c787632fed2aef"
  },
  {
    "url": "assets/js/46.90f15f02.js",
    "revision": "07a8035a275fa7c1af5e82009f23a7b0"
  },
  {
    "url": "assets/js/47.49606a45.js",
    "revision": "70a47aa351a9151f25b94421ad09cbe9"
  },
  {
    "url": "assets/js/48.4f5b5eb2.js",
    "revision": "581e2a663cc81dfc0ad5302a12ed7453"
  },
  {
    "url": "assets/js/49.3078e091.js",
    "revision": "57575723da9a05af320ff1a624ec1586"
  },
  {
    "url": "assets/js/5.d95331b9.js",
    "revision": "825c188440daadd9f9134600fa678fda"
  },
  {
    "url": "assets/js/50.d217d611.js",
    "revision": "b64285c37fa33fa77a34f3bd3b62ee57"
  },
  {
    "url": "assets/js/51.e6e20a4a.js",
    "revision": "fdc80ced403939320930c1c071a38f9f"
  },
  {
    "url": "assets/js/52.e84355eb.js",
    "revision": "48b58511073cf1d3a9dde68a59b65d88"
  },
  {
    "url": "assets/js/53.86f88813.js",
    "revision": "4ae729723572495b97ba18a5604bce9e"
  },
  {
    "url": "assets/js/54.a78e8e7a.js",
    "revision": "891b6607b2c959bf30c2cfd09a8e0715"
  },
  {
    "url": "assets/js/55.d8a9e77a.js",
    "revision": "8d81db1d4c9cdf323264aaa93560e572"
  },
  {
    "url": "assets/js/56.828ce91f.js",
    "revision": "8d4de04d9eceed89649940ab666bc9bb"
  },
  {
    "url": "assets/js/57.8454f5e2.js",
    "revision": "94bbb09b353eace882353ee3781f89dd"
  },
  {
    "url": "assets/js/58.03bd0474.js",
    "revision": "e141ca49de0ba1e03987ffab0ef1b0ff"
  },
  {
    "url": "assets/js/59.a2d762ee.js",
    "revision": "be9c97389132a58adc47371e56114322"
  },
  {
    "url": "assets/js/6.16ac62fb.js",
    "revision": "4c1edee0d2fcca4e886f5fe44b185513"
  },
  {
    "url": "assets/js/60.4a0d12af.js",
    "revision": "7f42236becbda57663642c17b009a2dc"
  },
  {
    "url": "assets/js/61.3964f8b7.js",
    "revision": "1ff5f3e25fc56fc450525406d6ff8927"
  },
  {
    "url": "assets/js/62.a210354d.js",
    "revision": "f12a82a0c9813b00352cdff1bdd2f117"
  },
  {
    "url": "assets/js/63.16bfa31e.js",
    "revision": "ac1fdd6e5c9fb0f2a3e6fd0ca42e2ed0"
  },
  {
    "url": "assets/js/64.81e328da.js",
    "revision": "b95373958108cc08397d5e2c15665572"
  },
  {
    "url": "assets/js/65.63ae0cc6.js",
    "revision": "284384b6f910ebf9da20957b641019ec"
  },
  {
    "url": "assets/js/66.0fd97f41.js",
    "revision": "9d849ec687b9a78f673ff43ea49e607f"
  },
  {
    "url": "assets/js/67.5ff774f5.js",
    "revision": "b71d542b483b0c16e75745f9646e2c72"
  },
  {
    "url": "assets/js/68.71ba1dd0.js",
    "revision": "d303a10f29a049cdaf846f40ceff33e6"
  },
  {
    "url": "assets/js/69.8011ad89.js",
    "revision": "4820e1b141530b67a475a1b3db2e616e"
  },
  {
    "url": "assets/js/7.c9864456.js",
    "revision": "ede27a7e104116960487bdd3ba9547d9"
  },
  {
    "url": "assets/js/70.1c1c6daf.js",
    "revision": "14af19717191687811eaf871e1264518"
  },
  {
    "url": "assets/js/8.c853bb50.js",
    "revision": "08c814426e7ef8e65e4504513b1c71d5"
  },
  {
    "url": "assets/js/9.57a4ef05.js",
    "revision": "a2f132f4783cbb876f6351eddf0cb0c1"
  },
  {
    "url": "assets/js/app.c2f999f9.js",
    "revision": "098951ca861df293d13745dcc00c0fb8"
  },
  {
    "url": "images/AnnualAppraisalCycle.png",
    "revision": "94d4f6c25b7661a575b7ea7c89cba7f4"
  },
  {
    "url": "images/BSTFlowchart.png",
    "revision": "7ee967a7f3ef5df0d8dab0216e9f5677"
  },
  {
    "url": "images/ComplaintsProcessFlowchart.png",
    "revision": "20a39815de95742b55d9cb350a7ca62f"
  },
  {
    "url": "images/DisciplinaryProcessFlowchart.png",
    "revision": "f36d17031e535e080cd24409713a63fd"
  },
  {
    "url": "images/GLOEProcessChart.png",
    "revision": "5537d77a6d665a0db60007c618ddb876"
  },
  {
    "url": "images/HandWashingPoster.png",
    "revision": "a1b8f35dc7aea7df35c29e6546b2b6aa"
  },
  {
    "url": "images/IncidentReportingFlowchart.png",
    "revision": "0a97fe42eefbe02c04860fc0a7d5fa6e"
  },
  {
    "url": "images/ManualHandlingFig1.jpg",
    "revision": "accfb9e799b497ec34328117518b30cb"
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
    "url": "images/STARABCFlowchart.png",
    "revision": "9b02a6c214ac7c84cdb157f68edc53a3"
  },
  {
    "url": "images/TidewayCareLogo.png",
    "revision": "2405bccf0474568ffda7d4cbfac41eb4"
  },
  {
    "url": "images/TransitionPlanningFlowchart.png",
    "revision": "5fa24356ffcfe2ae3f8502af7c3f40a2"
  },
  {
    "url": "images/WhichBagPoster.png",
    "revision": "3af017ce322590dc109f6272b5a9e463"
  },
  {
    "url": "index.html",
    "revision": "bbd9235783284b5806f8863e29ca1450"
  },
  {
    "url": "Policies/G01.html",
    "revision": "f6f436ae4a9806703a3f0e589b2894a3"
  },
  {
    "url": "Policies/G02.html",
    "revision": "6328f652840f2bb54b732838ec6d8764"
  },
  {
    "url": "Policies/G02Appendix01.html",
    "revision": "5d9949be72885dc3d9016dcae727cb29"
  },
  {
    "url": "Policies/G02Appendix02.html",
    "revision": "f9747fd5667f48644f3d31a4048928fc"
  },
  {
    "url": "Policies/G03.html",
    "revision": "573ecfd7ed9bd3665bc8d1ba9bc0cda4"
  },
  {
    "url": "Policies/G04.html",
    "revision": "84c3c629c65e1e9e27191b2be7991726"
  },
  {
    "url": "Policies/G05.html",
    "revision": "4c2aeae8b6d15b7aaf8d29d6ee2d99d6"
  },
  {
    "url": "Policies/G06.html",
    "revision": "1f801a06a65901ac1d65b8d08bb67950"
  },
  {
    "url": "Policies/HR01.html",
    "revision": "d27b9d3b542d3df56bf464c5f1e0abbe"
  },
  {
    "url": "Policies/HR01Appendix01.html",
    "revision": "6835b1e5db292cde35a38c57fd185980"
  },
  {
    "url": "Policies/HR01Appendix02.html",
    "revision": "273413e55829a391314a159a1ce316b4"
  },
  {
    "url": "Policies/HR01Appendix05.html",
    "revision": "379342cfad41a93cde57f322aca4a561"
  },
  {
    "url": "Policies/HR01Appendix06.html",
    "revision": "dcb11a2e70e129015f3d245256518e52"
  },
  {
    "url": "Policies/HR01Appendix07.html",
    "revision": "46c5685d6a2bd8eb01f91e11b160478e"
  },
  {
    "url": "Policies/HR01Appendix08.html",
    "revision": "88fda1db132ca24f7cb3041fab607228"
  },
  {
    "url": "Policies/HR02.html",
    "revision": "9e75eca12e3d0e7d598e9070805e7af0"
  },
  {
    "url": "Policies/HR02Appendix01.html",
    "revision": "df3e1dab418ce33042eeb950a6a44f49"
  },
  {
    "url": "Policies/HR02Appendix02.html",
    "revision": "08f704d29ea83a18a5e60de8d0cf9e61"
  },
  {
    "url": "Policies/HR02Appendix03.html",
    "revision": "af29dd0f3b2616a4f3c31eb80180b05e"
  },
  {
    "url": "Policies/HR03.html",
    "revision": "636ab5bfb1de16e290a84cf0b3dc1d3a"
  },
  {
    "url": "Policies/HS01.html",
    "revision": "8cffbe4cf63452697b7370723b69e5df"
  },
  {
    "url": "Policies/HS01Appendix01.html",
    "revision": "4522ba665b3f4f80842f29df7aab5142"
  },
  {
    "url": "Policies/HS01Appendix02.html",
    "revision": "d35e517f684a76b2d37615be41bc89e8"
  },
  {
    "url": "Policies/HS01Appendix03.html",
    "revision": "183f7cd0db8e6df9b02da861960da8be"
  },
  {
    "url": "Policies/HS01Appendix04.html",
    "revision": "98bba034b50a6a9b516d50f8663a98ab"
  },
  {
    "url": "Policies/HS01Appendix05.html",
    "revision": "d95090203794fcc728c98b0a398d1103"
  },
  {
    "url": "Policies/HS02.html",
    "revision": "06fbd02edb7b79d8b07fc30741466eec"
  },
  {
    "url": "Policies/HS02Appendix01.html",
    "revision": "0ababb6325e2c590bdcc7067963fad1e"
  },
  {
    "url": "Policies/HS02Appendix02.html",
    "revision": "a308b775387ba0c6f387c8324bb59aad"
  },
  {
    "url": "Policies/HS02Appendix03.html",
    "revision": "01906f7f568a139f44c751cb8d96ea00"
  },
  {
    "url": "Policies/HS02Appendix04.html",
    "revision": "733c908bfff5c70b6d75d250a7bf486e"
  },
  {
    "url": "Policies/index.html",
    "revision": "03d19aaa2abdf70d27c6814948d2f596"
  },
  {
    "url": "Policies/OP01.html",
    "revision": "0b477d2307cfdc42e1c540366c3df0b8"
  },
  {
    "url": "Policies/OP01Appendix01.html",
    "revision": "9d8e9bdabe079bcb4bc88fc1191776b7"
  },
  {
    "url": "Policies/OP01Appendix02.html",
    "revision": "d47f6cf0308c17ecb3cf2ccebc4e45d6"
  },
  {
    "url": "Policies/OP01Appendix03.html",
    "revision": "b6b96cf8ea7d5944bebf17de51320f24"
  },
  {
    "url": "Policies/OP02.html",
    "revision": "1c261e6844ccd60a5d665dec65b06fe7"
  },
  {
    "url": "Policies/OP03.1.html",
    "revision": "c61262eb020e35b9210d7ba801b2a38c"
  },
  {
    "url": "Policies/OP03.1Appendix04.html",
    "revision": "2ae52b557a8eaf7ef835da1775c66023"
  },
  {
    "url": "Policies/OP03.1Appendix05.html",
    "revision": "96c9e4027ca2cdc80c9f7d2ce2bc9875"
  },
  {
    "url": "Policies/OP03.1Appendix06.html",
    "revision": "1f355620a5e4c752cc065a4b9077f32b"
  },
  {
    "url": "Policies/OP03.html",
    "revision": "86392c6101989397c0892e7b030721f3"
  },
  {
    "url": "Policies/OP03Appendix01.html",
    "revision": "0b3ce6d1fe78afb3f2515b995c2f488b"
  },
  {
    "url": "Policies/OP03Appendix02.html",
    "revision": "df7a695a29eac28a0c4c3437ffe15a01"
  },
  {
    "url": "Policies/OP04.html",
    "revision": "0f7df7ce66e8bba0553f61c2c5776c00"
  },
  {
    "url": "Policies/OP04Appendix01.html",
    "revision": "59205298bdc86f53f276965701fefe89"
  },
  {
    "url": "Policies/OP04Appendix02.html",
    "revision": "2154403d749717f777f43f33a5c77cb6"
  },
  {
    "url": "Policies/OP05.html",
    "revision": "1d7968724d6c98ea01123a3842ad1371"
  },
  {
    "url": "Policies/OP06.html",
    "revision": "df17fa9662fbb3b9ec41f5913adf673d"
  },
  {
    "url": "Policies/OP06Appendix01.html",
    "revision": "2304ca8d1389aea7f4e4018d07fe2927"
  },
  {
    "url": "Policies/OP06Appendix02.html",
    "revision": "79007ea3b90a1f6ea6e792cf8ea4fc7a"
  },
  {
    "url": "Policies/OP06Appendix03.html",
    "revision": "f179975159b0dd6e335e92593fe9852f"
  },
  {
    "url": "Policies/OP07.html",
    "revision": "067c54c1f99e5707eb383dc65fccdf86"
  },
  {
    "url": "Policies/OP07Appendix01.html",
    "revision": "867abe7925342fa92ff6076ba8933d9e"
  },
  {
    "url": "Policies/OP07Appendix02.html",
    "revision": "6d3e47e469151f67ebd8f4da0dc07863"
  },
  {
    "url": "Policies/OP07Appendix03.html",
    "revision": "61986177a393335654710045da3493f8"
  },
  {
    "url": "Policies/OP07Appendix04.html",
    "revision": "44741374afcb225eaec757b48f17bc6c"
  },
  {
    "url": "Policies/OP07Appendix05.html",
    "revision": "6b0e4fecd1ce8542a2fcf3bc366621fd"
  },
  {
    "url": "Policies/OP07Appendix06.html",
    "revision": "9c713d2be734bc3794c234ce6e34d136"
  },
  {
    "url": "Policies/OP09.html",
    "revision": "e10292843e31396604d1f1a5c925b30b"
  },
  {
    "url": "Policies/OP09Appendix01.html",
    "revision": "2d74a73c859f4ab8c35cfea01787f7b9"
  },
  {
    "url": "Policies/OP09Appendix02.html",
    "revision": "e3ab87b751f927b2e7c349cf15cffa6c"
  },
  {
    "url": "Policies/OP09Appendix03.html",
    "revision": "261c8f71d5d133e8767887a98a331c71"
  },
  {
    "url": "Policies/OP11.html",
    "revision": "549c970fbacd020429d6fe848e9d506e"
  },
  {
    "url": "Policies/OP12.html",
    "revision": "36c8986a81f1c0cac9c327af8ab81ea9"
  },
  {
    "url": "Policies/OP12Appendix01.html",
    "revision": "8853edc365b24d3e98d6a37d6200c6e5"
  },
  {
    "url": "Policies/OP12Appendix02.html",
    "revision": "1ac15ccb4197392777fdd0c434ca0a38"
  },
  {
    "url": "TCDocs-Icon192.png",
    "revision": "1a58796214fe34a414e742e9de376c72"
  },
  {
    "url": "TCDocs-Icon512.png",
    "revision": "58e600d6a88b9c81bbac4dfd44ddc585"
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
