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
    "revision": "1f67a683614858daf21627cb0b930905"
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
    "url": "assets/css/styles.3bfc283c.css",
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
    "url": "assets/js/3.17cfa3f5.js",
    "revision": "6bdec1ea7deece1aaf506c667345d6fd"
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
    "url": "assets/js/54.ed55e494.js",
    "revision": "2ce014c772a78ce6be497e2b53c33bcb"
  },
  {
    "url": "assets/js/55.ba9f9dca.js",
    "revision": "36ffe77b59ddd8cc189a2e3147b02039"
  },
  {
    "url": "assets/js/56.8dbcc415.js",
    "revision": "0d88a6a61802bdb2dfce041990d467e1"
  },
  {
    "url": "assets/js/57.e6af51eb.js",
    "revision": "b59960664b2af516bbe2077a9429f15b"
  },
  {
    "url": "assets/js/58.9675225c.js",
    "revision": "55b20b7841f138997314c815a2394e1d"
  },
  {
    "url": "assets/js/59.7833c5f0.js",
    "revision": "60fe16724a35a8868e164a6ba9718b87"
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
    "url": "assets/js/64.b0b0b9d4.js",
    "revision": "3fab6c62bcf9fd15fc4b21c1675a3c92"
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
    "url": "assets/js/70.ca4f750f.js",
    "revision": "8d5cb905356604ab557db3fb8852a5fc"
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
    "url": "assets/js/app.3bfc283c.js",
    "revision": "13fe544e67b70d6f42e98a25f69e0c61"
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
    "revision": "00e056e5d3643b154b38073d6d223919"
  },
  {
    "url": "Policies/G01.html",
    "revision": "65ae8bd7ef73c2bf36104c0158175ce0"
  },
  {
    "url": "Policies/G02.html",
    "revision": "4eaab827c18cedbee6994436db8622e2"
  },
  {
    "url": "Policies/G02Appendix01.html",
    "revision": "e528dbe0c42dd6e4bfa37334060ac3ac"
  },
  {
    "url": "Policies/G02Appendix02.html",
    "revision": "ab021534ba6c97a6de68fba85047ef15"
  },
  {
    "url": "Policies/G03.html",
    "revision": "89ca9471d8306872d7f6771486c245d5"
  },
  {
    "url": "Policies/G04.html",
    "revision": "5449101e51b426b878d945c95b1da228"
  },
  {
    "url": "Policies/G05.html",
    "revision": "19f16fe4d7d1b67cebaafdb9edb58b03"
  },
  {
    "url": "Policies/G06.html",
    "revision": "b2fed8dc6da4a46099ab08d9b6cc166f"
  },
  {
    "url": "Policies/HR01.html",
    "revision": "78b4194a4ab056537c2acaa1ab4737f3"
  },
  {
    "url": "Policies/HR01Appendix01.html",
    "revision": "2286d7c9a0d9a0167fad0aabc365d62a"
  },
  {
    "url": "Policies/HR01Appendix02.html",
    "revision": "91f34767845ee157e31bd359d3233961"
  },
  {
    "url": "Policies/HR01Appendix05.html",
    "revision": "8cd378c651e9f648bc4e0f891281d53f"
  },
  {
    "url": "Policies/HR01Appendix06.html",
    "revision": "a89f0d911a1254034b341a52b63bc6e1"
  },
  {
    "url": "Policies/HR01Appendix07.html",
    "revision": "4186588025186fd8f35ceb1d6e21f2c3"
  },
  {
    "url": "Policies/HR01Appendix08.html",
    "revision": "3d1a5bc240b4dd654d95c71ff56e93ef"
  },
  {
    "url": "Policies/HR02.html",
    "revision": "b10795ad425fe617f7881e8870a57bae"
  },
  {
    "url": "Policies/HR02Appendix01.html",
    "revision": "3a684e4f68317f65df1caceb9c2abdd2"
  },
  {
    "url": "Policies/HR02Appendix02.html",
    "revision": "80942fa1f41c6853b103ede3695cdf61"
  },
  {
    "url": "Policies/HR02Appendix03.html",
    "revision": "c9eab345bf9a429aadf51ce6e0a148b8"
  },
  {
    "url": "Policies/HR03.html",
    "revision": "5bff91299a45f98182e1461aaadcc514"
  },
  {
    "url": "Policies/HS01.html",
    "revision": "8c0e4a3d03dc0b6acdd1c691cec06ddd"
  },
  {
    "url": "Policies/HS01Appendix01.html",
    "revision": "e664e85c8a9cd5d3d01471af590cfe90"
  },
  {
    "url": "Policies/HS01Appendix02.html",
    "revision": "ffbe49383232de39507d32ac21f65b30"
  },
  {
    "url": "Policies/HS01Appendix03.html",
    "revision": "45d6ace050ff23a7694f188684c87f75"
  },
  {
    "url": "Policies/HS01Appendix04.html",
    "revision": "06d7c8f13465eacdd716019e5e31ce58"
  },
  {
    "url": "Policies/HS01Appendix05.html",
    "revision": "a7cf6512f9c5de8fcfc95c31c570504c"
  },
  {
    "url": "Policies/HS02.html",
    "revision": "bdbc46250414a87b1d95c8438aa8c40c"
  },
  {
    "url": "Policies/HS02Appendix01.html",
    "revision": "82003f01469b7c45140cb119c5449664"
  },
  {
    "url": "Policies/HS02Appendix02.html",
    "revision": "64a1e174abe02c1cf0d4cae092fe0bc9"
  },
  {
    "url": "Policies/HS02Appendix03.html",
    "revision": "771465c1d534f1890f7ae7b2dc76801a"
  },
  {
    "url": "Policies/HS02Appendix04.html",
    "revision": "1662e6db54f917e7297ce332104cad09"
  },
  {
    "url": "Policies/index.html",
    "revision": "83b537e3eff09c8627bc768aed96b478"
  },
  {
    "url": "Policies/OP01.html",
    "revision": "9a1a14d7f3cb1a823bf8b9d5642a5fff"
  },
  {
    "url": "Policies/OP01Appendix01.html",
    "revision": "b37e163f58a82da2f4ce5bb968e4fff7"
  },
  {
    "url": "Policies/OP01Appendix02.html",
    "revision": "2745e48b49f9300ac3d9f8a19ac92fa6"
  },
  {
    "url": "Policies/OP01Appendix03.html",
    "revision": "5e76344ea8ec2aed300391a31680905a"
  },
  {
    "url": "Policies/OP02.html",
    "revision": "39bd7b5905fcb8f5fdee69d56fee41a1"
  },
  {
    "url": "Policies/OP03.1.html",
    "revision": "7892971a9f6552f550674690ca6067a0"
  },
  {
    "url": "Policies/OP03.1Appendix04.html",
    "revision": "603ac1e4d0842745978a927e849a1201"
  },
  {
    "url": "Policies/OP03.1Appendix05.html",
    "revision": "2710776a8863f2f1c8440f41ba8d6692"
  },
  {
    "url": "Policies/OP03.1Appendix06.html",
    "revision": "52e79274cf1e6180d883bd34cc43a880"
  },
  {
    "url": "Policies/OP03.html",
    "revision": "cc4d10131e1e7bc2c947d92519db1abd"
  },
  {
    "url": "Policies/OP03Appendix01.html",
    "revision": "22a19a9275e836e343a41a3d9089226c"
  },
  {
    "url": "Policies/OP03Appendix02.html",
    "revision": "8dd0110cec9dff788778e4b42e030750"
  },
  {
    "url": "Policies/OP04.html",
    "revision": "08f58405f711c4eb32b1b5799780d716"
  },
  {
    "url": "Policies/OP04Appendix01.html",
    "revision": "7cc44224687269b70c0f08d471c3b0eb"
  },
  {
    "url": "Policies/OP04Appendix02.html",
    "revision": "a4bcdab4181015d1361cba7aecca5c99"
  },
  {
    "url": "Policies/OP05.html",
    "revision": "0df0592f1c4b5c4703eb80311dc47bfb"
  },
  {
    "url": "Policies/OP06.html",
    "revision": "254ebd9d2f946238bed235a062fef413"
  },
  {
    "url": "Policies/OP06Appendix01.html",
    "revision": "045872c1486537bf7f757feb8a9dfdb0"
  },
  {
    "url": "Policies/OP06Appendix02.html",
    "revision": "869ff4a7be12addb76c3b0ef59adbfe7"
  },
  {
    "url": "Policies/OP06Appendix03.html",
    "revision": "6dabbfcb50429bfb262583afe9ba7dde"
  },
  {
    "url": "Policies/OP07.html",
    "revision": "e0dbd9161dbaf67097e53891e49f3d34"
  },
  {
    "url": "Policies/OP07Appendix01.html",
    "revision": "3b239e241888ccec558e930d7790fd01"
  },
  {
    "url": "Policies/OP07Appendix02.html",
    "revision": "8543351ce4ef95a5b16454a766a33b42"
  },
  {
    "url": "Policies/OP07Appendix03.html",
    "revision": "faaabaa7e63fa158818939da5cd973bb"
  },
  {
    "url": "Policies/OP07Appendix04.html",
    "revision": "3049c2d430c047bd4c7d2440aaa002f5"
  },
  {
    "url": "Policies/OP07Appendix05.html",
    "revision": "55be43f4cdd6bbb32597660b8d3e1b19"
  },
  {
    "url": "Policies/OP07Appendix06.html",
    "revision": "716f3f8077608f65b7e97022a1075fc0"
  },
  {
    "url": "Policies/OP09.html",
    "revision": "a1e213bc65f65ac55cb81bccace4661f"
  },
  {
    "url": "Policies/OP09Appendix01.html",
    "revision": "fa8ca48ed28d3fd5f587e1e2dcfb6a06"
  },
  {
    "url": "Policies/OP09Appendix02.html",
    "revision": "a2554600c7618f4110255a79340b485c"
  },
  {
    "url": "Policies/OP09Appendix03.html",
    "revision": "ed4ee1ceba72fcdc5e7fc5db62474989"
  },
  {
    "url": "Policies/OP11.html",
    "revision": "26c9416151a3305edbf0f0a4e0885338"
  },
  {
    "url": "Policies/OP12.html",
    "revision": "72ac8c4150b6eb6ba899be5f2d0c3720"
  },
  {
    "url": "Policies/OP12Appendix01.html",
    "revision": "924d4cf2825a91d44b008385638fb012"
  },
  {
    "url": "Policies/OP12Appendix02.html",
    "revision": "cc8315e67e7e95173896b13835bcb66b"
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
