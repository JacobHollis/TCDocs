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
    "revision": "07748e22876b65a3905cfb413be1252d"
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
    "url": "assets/css/styles.a0b89eef.css",
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
    "url": "assets/js/11.a835e2bf.js",
    "revision": "de6c1cf3e11bec28d0d16c55ecbc285a"
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
    "url": "assets/js/app.a0b89eef.js",
    "revision": "93e78d8b6ebebf7765de8414d5472206"
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
    "revision": "4ec1283b8d7a144376de1b6e31b413ba"
  },
  {
    "url": "Policies/G01.html",
    "revision": "883a14913bbce850dd5119911a608e02"
  },
  {
    "url": "Policies/G02.html",
    "revision": "ddf4f3835752567f2dfb4ab16f7edd7a"
  },
  {
    "url": "Policies/G02Appendix01.html",
    "revision": "a103b26f46202b5302dcb34ef5f89cec"
  },
  {
    "url": "Policies/G02Appendix02.html",
    "revision": "1dfe554ee8d3f089d7b535f9a19d1899"
  },
  {
    "url": "Policies/G03.html",
    "revision": "a90560fcfc12179b7233edc99c5e5020"
  },
  {
    "url": "Policies/G04.html",
    "revision": "2c9608a5c43d710d08ecfd93904a3285"
  },
  {
    "url": "Policies/G05.html",
    "revision": "4e3306c37daf6a84df379087be64ea30"
  },
  {
    "url": "Policies/G06.html",
    "revision": "c149e9ed00d7097c55c3cee08ea7435a"
  },
  {
    "url": "Policies/HR01.html",
    "revision": "1b2196e415811af9fb064f3c48ca901f"
  },
  {
    "url": "Policies/HR01Appendix01.html",
    "revision": "997c9f31e876ef779cec90bddbf30a4b"
  },
  {
    "url": "Policies/HR01Appendix02.html",
    "revision": "a08c726fc3cbd3653ff69b04eca5e4de"
  },
  {
    "url": "Policies/HR01Appendix05.html",
    "revision": "66c20e7f26a283093373f0c3e343ddf2"
  },
  {
    "url": "Policies/HR01Appendix06.html",
    "revision": "f9a4554deca25cd6b9d7481d7de585c1"
  },
  {
    "url": "Policies/HR01Appendix07.html",
    "revision": "2a920e1476a1b6bbdc2922e473430a8f"
  },
  {
    "url": "Policies/HR01Appendix08.html",
    "revision": "41f99d8af61e298a3dc21bcb72c59fcf"
  },
  {
    "url": "Policies/HR02.html",
    "revision": "ef3e23e310bd180b6f4b4e25645bb831"
  },
  {
    "url": "Policies/HR02Appendix01.html",
    "revision": "a7b3b5c8041e27e8925342e6c485f24b"
  },
  {
    "url": "Policies/HR02Appendix02.html",
    "revision": "c52550f0d442753a439719e9f6332ae3"
  },
  {
    "url": "Policies/HR02Appendix03.html",
    "revision": "eefc104c9112a00b225db1a7026229ce"
  },
  {
    "url": "Policies/HR03.html",
    "revision": "6fcf77cbe34c30ae3313fa5703a5da72"
  },
  {
    "url": "Policies/HS01.html",
    "revision": "dee57d1673688ea696867af63b622629"
  },
  {
    "url": "Policies/HS01Appendix01.html",
    "revision": "659c0ff37873db88f94bb733153ccaa5"
  },
  {
    "url": "Policies/HS01Appendix02.html",
    "revision": "71c52f42dcb4343077978fcd6273b216"
  },
  {
    "url": "Policies/HS01Appendix03.html",
    "revision": "558bb2d8aacb71828281f70ef304c56c"
  },
  {
    "url": "Policies/HS01Appendix04.html",
    "revision": "169243d8231dec50d0ef229e682b7192"
  },
  {
    "url": "Policies/HS01Appendix05.html",
    "revision": "09a4b9b59f376685ae2ffca3c58fb506"
  },
  {
    "url": "Policies/HS02.html",
    "revision": "2d32d6ce84d7462b05a310238b5b0a92"
  },
  {
    "url": "Policies/HS02Appendix01.html",
    "revision": "7837677185aec74989bac62152d1db1d"
  },
  {
    "url": "Policies/HS02Appendix02.html",
    "revision": "e2370d9b414bbf5f0026bb8f1cb7edad"
  },
  {
    "url": "Policies/HS02Appendix03.html",
    "revision": "d12f36bc21c982904bf209d585d737ae"
  },
  {
    "url": "Policies/HS02Appendix04.html",
    "revision": "fec1a01bb7da24a8ae50e00034254d9a"
  },
  {
    "url": "Policies/index.html",
    "revision": "f89a3172253963523e7de8509fa8bf81"
  },
  {
    "url": "Policies/OP01.html",
    "revision": "2913809fe5be62d3282634fd19c9a164"
  },
  {
    "url": "Policies/OP01Appendix01.html",
    "revision": "e05b5e1e4b17880ad4ffa7085a4fda62"
  },
  {
    "url": "Policies/OP01Appendix02.html",
    "revision": "108ece6782c9a8bb24ab65e3db7e2bad"
  },
  {
    "url": "Policies/OP01Appendix03.html",
    "revision": "28082e73797508ddb38172dcb36dfcfa"
  },
  {
    "url": "Policies/OP02.html",
    "revision": "c0835767b9bb6ee42337d9b538183338"
  },
  {
    "url": "Policies/OP03.1.html",
    "revision": "4b0947f5bf13a7b378b6eaa658192fe2"
  },
  {
    "url": "Policies/OP03.1Appendix04.html",
    "revision": "a96011221385ecca5dad914e2e920292"
  },
  {
    "url": "Policies/OP03.1Appendix05.html",
    "revision": "48558890e63ef1500fe62a77077ebbb4"
  },
  {
    "url": "Policies/OP03.1Appendix06.html",
    "revision": "ad1646e8c7303e6b1b26b993e1cee2ac"
  },
  {
    "url": "Policies/OP03.html",
    "revision": "85580b5381d2a13b5cb988abcd1eaff6"
  },
  {
    "url": "Policies/OP03Appendix01.html",
    "revision": "e1f029f57bf98e032c80484f0146c592"
  },
  {
    "url": "Policies/OP03Appendix02.html",
    "revision": "512ea57cb8c500788b7993ccddcd9f83"
  },
  {
    "url": "Policies/OP04.html",
    "revision": "e7d29525e3a60195c1312b23f376db72"
  },
  {
    "url": "Policies/OP04Appendix01.html",
    "revision": "c02f0d5daea02afa0832b96c00655923"
  },
  {
    "url": "Policies/OP04Appendix02.html",
    "revision": "70f53228de815004939748866f3c714c"
  },
  {
    "url": "Policies/OP05.html",
    "revision": "2446a71ff3bbd516748c71dfca30f49d"
  },
  {
    "url": "Policies/OP06.html",
    "revision": "0f954bfe17429c118a772edd84d19498"
  },
  {
    "url": "Policies/OP06Appendix01.html",
    "revision": "452844d9632d47030893d284c743c97a"
  },
  {
    "url": "Policies/OP06Appendix02.html",
    "revision": "08513a4613d28458e328a170ff68f18a"
  },
  {
    "url": "Policies/OP06Appendix03.html",
    "revision": "17374e4e09fbefe1c7ffcab5f1edfbed"
  },
  {
    "url": "Policies/OP07.html",
    "revision": "d6c48a9a737422328b07749a929e7ae1"
  },
  {
    "url": "Policies/OP07Appendix01.html",
    "revision": "db973293e5314ce0aaf54925c3654c6f"
  },
  {
    "url": "Policies/OP07Appendix02.html",
    "revision": "bfbd44632025a562236e68fc8ee8bdd1"
  },
  {
    "url": "Policies/OP07Appendix03.html",
    "revision": "0d45942c799e06b51eaab741b3740370"
  },
  {
    "url": "Policies/OP07Appendix04.html",
    "revision": "0c390aa7e9ecc8d081c8c2efea188451"
  },
  {
    "url": "Policies/OP07Appendix05.html",
    "revision": "83455f322e9f15c0ee9687bb8cc5165c"
  },
  {
    "url": "Policies/OP07Appendix06.html",
    "revision": "607fe5a1444e5ac456f27fa463187025"
  },
  {
    "url": "Policies/OP09.html",
    "revision": "589fe87eb8be6f3a43e24ccd4c58c80c"
  },
  {
    "url": "Policies/OP09Appendix01.html",
    "revision": "922701ed11c26a2735836120c977122d"
  },
  {
    "url": "Policies/OP09Appendix02.html",
    "revision": "e58f9dea74ec01d9ce584a31deaf7f46"
  },
  {
    "url": "Policies/OP09Appendix03.html",
    "revision": "9a8a45af14230db0aa257bf2dd18fbe6"
  },
  {
    "url": "Policies/OP11.html",
    "revision": "d508b2615327bd2202108f7fe8600505"
  },
  {
    "url": "Policies/OP12.html",
    "revision": "c2a6a9ac988978884e9c87ac365836e1"
  },
  {
    "url": "Policies/OP12Appendix01.html",
    "revision": "2aff7c579bddb32a6e94c33bd95d42ab"
  },
  {
    "url": "Policies/OP12Appendix02.html",
    "revision": "5fc0ea971ae12ea5d89115662f55a2d1"
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
