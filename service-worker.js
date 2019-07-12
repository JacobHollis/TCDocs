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
    "revision": "fdfd81929c8910f5005e88a6cd026858"
  },
  {
    "url": "assets/css/1.styles.dd3bfaf7.css",
    "revision": "bd2953ae21f32746ddb8402e019843e8"
  },
  {
    "url": "assets/css/2.styles.6b7569cb.css",
    "revision": "658262901bc10d9dfb2774a90d71fb81"
  },
  {
    "url": "assets/css/styles.729b5925.css",
    "revision": "2b73208f0c3df4a8f6981ac468d1aac3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.dd3bfaf7.js",
    "revision": "ba816865573c5c0f5f6e6c06e3d9d651"
  },
  {
    "url": "assets/js/10.f4ef1d89.js",
    "revision": "ab6754e81c0a2fe030ea00ffcc85f04c"
  },
  {
    "url": "assets/js/11.de6a683d.js",
    "revision": "1dedfc381153db58a270d00d242f70c4"
  },
  {
    "url": "assets/js/12.d616a437.js",
    "revision": "874e25349db377e71fb95ea420e8ae4a"
  },
  {
    "url": "assets/js/13.dd9dc885.js",
    "revision": "1bd8e5c95d446fa077086890457f1360"
  },
  {
    "url": "assets/js/14.fccbda2a.js",
    "revision": "5ec9fe7ddf9deb2256264fb552d923e3"
  },
  {
    "url": "assets/js/15.cf941e12.js",
    "revision": "c5d793163e8d1739e6e7cf6683400f52"
  },
  {
    "url": "assets/js/16.a1cd6d1e.js",
    "revision": "7a36242b54706f4a3820ea7cbc92abcb"
  },
  {
    "url": "assets/js/17.bfffb9ae.js",
    "revision": "82ede9f1880b79e95d898ecb8ad13d0a"
  },
  {
    "url": "assets/js/18.6a0e9e8c.js",
    "revision": "bb0e8446cc4a8903beaca55cddae61bc"
  },
  {
    "url": "assets/js/19.618a4591.js",
    "revision": "c46a8c61cd5ea49de02fa6f9a162db17"
  },
  {
    "url": "assets/js/2.6b7569cb.js",
    "revision": "fe333b391aa7529e7228c22d5c70f516"
  },
  {
    "url": "assets/js/20.b40967d4.js",
    "revision": "09c19b738035102b4894bb4936dc4084"
  },
  {
    "url": "assets/js/21.75ff934e.js",
    "revision": "da52e667a6903c8544bf92df836d1939"
  },
  {
    "url": "assets/js/22.ec33b840.js",
    "revision": "0ad404adcb7a5047efc687e1f1412275"
  },
  {
    "url": "assets/js/23.5d4d6f20.js",
    "revision": "9e328de223d93d811d83b2063e58bfd9"
  },
  {
    "url": "assets/js/24.2e6486de.js",
    "revision": "5a28f69679187a952232d15fd45100c0"
  },
  {
    "url": "assets/js/25.46ca3c96.js",
    "revision": "99f1ade2044e4317e08b2be3ea2ff8bf"
  },
  {
    "url": "assets/js/26.3b4d4545.js",
    "revision": "cd617254c811495233dc03b0fcdb1af5"
  },
  {
    "url": "assets/js/27.4a1ccc40.js",
    "revision": "141368af87880ed530cc0750599f34e7"
  },
  {
    "url": "assets/js/28.446c7a59.js",
    "revision": "d5b621a20ff811b6599b79e855e90803"
  },
  {
    "url": "assets/js/29.8a9a45e4.js",
    "revision": "371944b2029accd53cca137430bc89c9"
  },
  {
    "url": "assets/js/3.939c5852.js",
    "revision": "b905473446cb4e820b5a2018fdf722f1"
  },
  {
    "url": "assets/js/30.3ce65b25.js",
    "revision": "cbf47cb1975462ec0f7915312fb52820"
  },
  {
    "url": "assets/js/31.63b7b250.js",
    "revision": "9b1793c19798c83c2562c8b0bf2766b1"
  },
  {
    "url": "assets/js/32.470484c8.js",
    "revision": "67bdefed28f906415a53f0c3ea699784"
  },
  {
    "url": "assets/js/33.5c8d532f.js",
    "revision": "7d5c50a549d24346eaec47e741468b34"
  },
  {
    "url": "assets/js/34.add157e0.js",
    "revision": "b05bd152c9b25f7dd5c95ca2a5fc7837"
  },
  {
    "url": "assets/js/35.0ec4ef78.js",
    "revision": "31c63c793cab9ed330aef65429010eb2"
  },
  {
    "url": "assets/js/36.41cb75a1.js",
    "revision": "8ade4e9ef34b7b7f6f899f8607d1f82d"
  },
  {
    "url": "assets/js/37.dc5a52a4.js",
    "revision": "29908ac9a44120a02db50bb0ff786568"
  },
  {
    "url": "assets/js/38.704722ba.js",
    "revision": "b02320dee65b7b63e08f820d691b147b"
  },
  {
    "url": "assets/js/39.fe424f0d.js",
    "revision": "1910e82e507d2decb56ecae9eea48e1c"
  },
  {
    "url": "assets/js/4.5f6bd451.js",
    "revision": "776cf63ad2678085a1fb625c7a6e13af"
  },
  {
    "url": "assets/js/40.8bba5286.js",
    "revision": "10008104b524112191840d920b688829"
  },
  {
    "url": "assets/js/41.7955d444.js",
    "revision": "3c73e4ea5aab7db6c7cf581aade3637f"
  },
  {
    "url": "assets/js/42.6390a4de.js",
    "revision": "8697cae1ae0053804380203db31e3447"
  },
  {
    "url": "assets/js/43.c76e6681.js",
    "revision": "3e201fb51316cd234dedb00c8078de47"
  },
  {
    "url": "assets/js/44.3099fea7.js",
    "revision": "63ddc6e1ad14fa3f9f346eb1ac81aee3"
  },
  {
    "url": "assets/js/45.7d952ba9.js",
    "revision": "8d9074b6213e7d0126103fc795e5a6a4"
  },
  {
    "url": "assets/js/46.f935e9d3.js",
    "revision": "669e484b7bdbbf8553960d89574bec7c"
  },
  {
    "url": "assets/js/47.b1dcb276.js",
    "revision": "f3ef871ca4ebf97b1a4f16ac9312c456"
  },
  {
    "url": "assets/js/48.2f9b7e37.js",
    "revision": "ae061ae22fed32db57cdfdc7bbe29e40"
  },
  {
    "url": "assets/js/49.57823b46.js",
    "revision": "a020a0009ffe23ebc33aeaace3576629"
  },
  {
    "url": "assets/js/5.824a6221.js",
    "revision": "3c7fdfa46b2f47e29df639ff894b9299"
  },
  {
    "url": "assets/js/50.5eeeedbb.js",
    "revision": "0bd4cee61b036488d399acc3b1bec2a5"
  },
  {
    "url": "assets/js/51.b0be90f8.js",
    "revision": "f8b0fb6381a5c3d663016508f4c0b537"
  },
  {
    "url": "assets/js/52.82125be1.js",
    "revision": "02b6872f8de990311c723f4f023da4bf"
  },
  {
    "url": "assets/js/53.51046690.js",
    "revision": "dbc3a48ff52a0825dab442cbe7863d3f"
  },
  {
    "url": "assets/js/54.0590830f.js",
    "revision": "eed116aa141e2e39f8741e349b7d11f4"
  },
  {
    "url": "assets/js/55.996d6306.js",
    "revision": "ff1062275d0c4b14c0c1c826f4ccffd7"
  },
  {
    "url": "assets/js/56.765504dc.js",
    "revision": "33d54a7ee40d035326bae61c91158d94"
  },
  {
    "url": "assets/js/57.c606281c.js",
    "revision": "49421884dd1aeb4ec1b75537a5023b16"
  },
  {
    "url": "assets/js/58.b9a95976.js",
    "revision": "6fe1114c7563b59212fbaf590d147991"
  },
  {
    "url": "assets/js/59.0880ce7b.js",
    "revision": "d276cd2a4ee8d521689c46b4747a4d87"
  },
  {
    "url": "assets/js/6.71789e6e.js",
    "revision": "ce2f28c132da43816d1196af05d11147"
  },
  {
    "url": "assets/js/60.53de8adb.js",
    "revision": "3586477cbe2da0553b846d805ca62eab"
  },
  {
    "url": "assets/js/61.18cc5558.js",
    "revision": "60a0a3df4414e4e32c1cdd793697c256"
  },
  {
    "url": "assets/js/62.314ca9bc.js",
    "revision": "9e59e941e49890462715dea1ea1e19fb"
  },
  {
    "url": "assets/js/63.d4ab2b2d.js",
    "revision": "4713425df0ac550b64bb4426547011df"
  },
  {
    "url": "assets/js/64.9fa05ffa.js",
    "revision": "34290d3d2c6e98cfd6bc81f8c224d080"
  },
  {
    "url": "assets/js/65.6fa065e7.js",
    "revision": "fc2d842b995c8763a72ebe55f852d5b0"
  },
  {
    "url": "assets/js/66.89f39108.js",
    "revision": "92835cdc3905bce137f315484b9c0db0"
  },
  {
    "url": "assets/js/67.893a0638.js",
    "revision": "7893e9a44ce3c92e3dcef6c019ba133e"
  },
  {
    "url": "assets/js/68.bb713a9e.js",
    "revision": "aaa4d2a07ee4e97fcb5b18b68960741d"
  },
  {
    "url": "assets/js/69.b8eb8837.js",
    "revision": "ebe91ede5100db3ba62abc512b05015a"
  },
  {
    "url": "assets/js/7.e655be38.js",
    "revision": "05dfca1f15b5f79933970846532702bb"
  },
  {
    "url": "assets/js/70.1387af06.js",
    "revision": "30f2a9cbe48f9a8f295ed7e7804933eb"
  },
  {
    "url": "assets/js/71.f8b49ab4.js",
    "revision": "055637fa298d6b4699651d46cc23ced6"
  },
  {
    "url": "assets/js/72.e8c747fa.js",
    "revision": "f36f6bdd2f1c3938e3f712e63c0ca988"
  },
  {
    "url": "assets/js/73.599771a9.js",
    "revision": "596e7f18b93e0f43c16b1f777cdfde04"
  },
  {
    "url": "assets/js/74.da800255.js",
    "revision": "64b4f3fb8fe2b214782d38e5f6116c60"
  },
  {
    "url": "assets/js/75.c1a13e57.js",
    "revision": "792c760505636b809c27c88fe8048f2c"
  },
  {
    "url": "assets/js/76.2fd41889.js",
    "revision": "cc568380ed47f6446a2eb81cdaf8f46e"
  },
  {
    "url": "assets/js/77.2bc96f52.js",
    "revision": "1bd63fd94d2c7b00c9a2aece85175526"
  },
  {
    "url": "assets/js/78.6d9e678d.js",
    "revision": "24c276464eea8f5f0bfa18a4bdbdd2ac"
  },
  {
    "url": "assets/js/79.fb93cf8d.js",
    "revision": "8fd2520bfc60575b081abbf5665a7cde"
  },
  {
    "url": "assets/js/8.959aaa98.js",
    "revision": "227f0e8843fea973c88b7bc86a34b85a"
  },
  {
    "url": "assets/js/80.bd9493df.js",
    "revision": "57904794dbac434c928aea3dbefd9594"
  },
  {
    "url": "assets/js/9.7db777a4.js",
    "revision": "1fa09326ade2c57f75d0eab10da063d6"
  },
  {
    "url": "assets/js/app.729b5925.js",
    "revision": "f08c47fc0e4fae7d708a630fbf7fadf4"
  },
  {
    "url": "Handbook/index.html",
    "revision": "3666c9c3fef6cc15184aa5fd1b2f9d14"
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
    "revision": "69d294d17b175fee503c62b4e841dabe"
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
    "url": "images/OP05Appendix04Pic1.png",
    "revision": "723b3d093a39556825c6fb0943bcdd8b"
  },
  {
    "url": "images/OrgChart.png",
    "revision": "c5729762ce97406f760776176bf98525"
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
    "revision": "6bb45c50fe7a0af64be53e297a1792d0"
  },
  {
    "url": "Policies/G01.html",
    "revision": "f94b7f0359d24a3287ba18497fba7c63"
  },
  {
    "url": "Policies/G02.html",
    "revision": "8fa6d6d49f0aaadb567b7f5467357976"
  },
  {
    "url": "Policies/G02Appendix01.html",
    "revision": "58ddd45a7e041b07ace2335575d7d416"
  },
  {
    "url": "Policies/G02Appendix02.html",
    "revision": "dcf7650532e2058b7ab6fefa7c845400"
  },
  {
    "url": "Policies/G03.html",
    "revision": "bf7d8a0a7d2151be1a4694fa123468d5"
  },
  {
    "url": "Policies/G04.html",
    "revision": "b86578b584a2ad90e3a76b1df0283eaf"
  },
  {
    "url": "Policies/G05.html",
    "revision": "5488826e813a9f5ed8ab89a22dd88a41"
  },
  {
    "url": "Policies/G06.html",
    "revision": "536383d60ca237610bf6f5faf9f5a9f8"
  },
  {
    "url": "Policies/HR01.html",
    "revision": "deaf9a425d94dbbc082210f173c5676a"
  },
  {
    "url": "Policies/HR01Appendix01.html",
    "revision": "8eb933585be61996afb5efd0a3d9c198"
  },
  {
    "url": "Policies/HR01Appendix02.html",
    "revision": "a9fa1314ad64e4894d46929538006062"
  },
  {
    "url": "Policies/HR01Appendix05.html",
    "revision": "295276b65e260b51c658ff41646197ef"
  },
  {
    "url": "Policies/HR01Appendix06.html",
    "revision": "7e685cfed9979c2e5ced4f3819dfe0a7"
  },
  {
    "url": "Policies/HR01Appendix07.html",
    "revision": "09822f1a04f083677f750e4df7a9435c"
  },
  {
    "url": "Policies/HR01Appendix08.html",
    "revision": "cd35f05577bba976bb02bceb27661eac"
  },
  {
    "url": "Policies/HR02.html",
    "revision": "4810be92cb6d62181695d50da3044988"
  },
  {
    "url": "Policies/HR02Appendix01.html",
    "revision": "af2f43a752da7810a98b7d9cfbc132c1"
  },
  {
    "url": "Policies/HR02Appendix02.html",
    "revision": "d7285a51d0c7cf288743ad20a96ce568"
  },
  {
    "url": "Policies/HR02Appendix03.html",
    "revision": "a9f4c35ff6281f4acdde1039b8f70338"
  },
  {
    "url": "Policies/HR03.html",
    "revision": "cd2bc4c7dcb1082f08039c8ed4f14117"
  },
  {
    "url": "Policies/HS01.html",
    "revision": "05d3b116cc7f56e14253ad6266b6e7bd"
  },
  {
    "url": "Policies/HS01Appendix01.html",
    "revision": "92c05561c765394011e27d8189c917b3"
  },
  {
    "url": "Policies/HS01Appendix02.html",
    "revision": "84b76d28fa3201dd58601fb2e05085b1"
  },
  {
    "url": "Policies/HS01Appendix03.html",
    "revision": "088561b2e3c199fdd19de7296d046b29"
  },
  {
    "url": "Policies/HS01Appendix04.html",
    "revision": "618528ffc2e64dac8ee9c637bcba786e"
  },
  {
    "url": "Policies/HS01Appendix05.html",
    "revision": "da87268e5769a939fd63868378101569"
  },
  {
    "url": "Policies/HS02.html",
    "revision": "1b4387edc86ab87a91058d0980fae021"
  },
  {
    "url": "Policies/HS02Appendix01.html",
    "revision": "8994104045087f91e984131c5e5eb1e4"
  },
  {
    "url": "Policies/HS02Appendix02.html",
    "revision": "3cd78cd05914f1e90aea84836c9346e2"
  },
  {
    "url": "Policies/HS02Appendix03.html",
    "revision": "b4c9914c8ef2951e64c9f8b1dd2e5ba9"
  },
  {
    "url": "Policies/HS02Appendix04.html",
    "revision": "99f6fb703891549b4123f271d8a0189b"
  },
  {
    "url": "Policies/index.html",
    "revision": "faf97075f57a9b6ca1f5941dc53911b0"
  },
  {
    "url": "Policies/OP01.html",
    "revision": "2dbb3e91c07105299c719079b87e5618"
  },
  {
    "url": "Policies/OP01Appendix01.html",
    "revision": "9cba2bb8ec5d1de2135ed2cda25d85cc"
  },
  {
    "url": "Policies/OP01Appendix02.html",
    "revision": "667898ac6514f1b640247e1309cad537"
  },
  {
    "url": "Policies/OP01Appendix03.html",
    "revision": "7f15d951fdf30dd20eacb3761be0c2ad"
  },
  {
    "url": "Policies/OP02.html",
    "revision": "ed4bdc407a956e7ab18f9fc7ec842112"
  },
  {
    "url": "Policies/OP03.1.html",
    "revision": "6361e819d20a71dd2588a2826dc30a9c"
  },
  {
    "url": "Policies/OP03.1Appendix04.html",
    "revision": "ca35ce08851dc52d0465c53fdce20b22"
  },
  {
    "url": "Policies/OP03.1Appendix05.html",
    "revision": "0800e33fe5b69bd2241add1bc372d674"
  },
  {
    "url": "Policies/OP03.1Appendix06.html",
    "revision": "51054f0a446e105fe8196db89a8d4230"
  },
  {
    "url": "Policies/OP03.html",
    "revision": "7690f157e2c32dea02c64de07f4f1f76"
  },
  {
    "url": "Policies/OP03Appendix01.html",
    "revision": "fac4a42299f29793d31eb752134123fc"
  },
  {
    "url": "Policies/OP03Appendix02.html",
    "revision": "fcf70c64998c1f03c0dd37313d910e50"
  },
  {
    "url": "Policies/OP04.html",
    "revision": "f948309492002a5d2553319859da123f"
  },
  {
    "url": "Policies/OP04Appendix01.html",
    "revision": "c56dae0bafbd0913cdc2fc7da8a0c47c"
  },
  {
    "url": "Policies/OP04Appendix02.html",
    "revision": "40b96f71c0e071414dc8e6d05f4730a6"
  },
  {
    "url": "Policies/OP05.html",
    "revision": "c6eaa8e7652cd327068244c89a8b45d0"
  },
  {
    "url": "Policies/OP05Appendix01.html",
    "revision": "0d496c9a5189fc58026d876bb08c9b41"
  },
  {
    "url": "Policies/OP05Appendix02.html",
    "revision": "fd0e141ec7a85b58b67d2a5db64672cb"
  },
  {
    "url": "Policies/OP05Appendix03.html",
    "revision": "dab8bdf15ec9a89279a8d033bc8ae741"
  },
  {
    "url": "Policies/OP05Appendix04.html",
    "revision": "2d8b987e81f6fd3075c55bf6c77e2281"
  },
  {
    "url": "Policies/OP05Appendix05.html",
    "revision": "6ac0a29d3570cdcd0017d4b3b3e1c5c1"
  },
  {
    "url": "Policies/OP05Appendix06.html",
    "revision": "179d77dbf859fccad56e392aaf9313f0"
  },
  {
    "url": "Policies/OP05Appendix07.html",
    "revision": "a70d188977048d0938909d822a0844e5"
  },
  {
    "url": "Policies/OP06.html",
    "revision": "5abcb812aec67a444bf36bb487125238"
  },
  {
    "url": "Policies/OP06Appendix01.html",
    "revision": "ef067ba4703854ec219cbbd933901dae"
  },
  {
    "url": "Policies/OP06Appendix02.html",
    "revision": "4f8d2a9506aa31e675aa435180482634"
  },
  {
    "url": "Policies/OP06Appendix03.html",
    "revision": "5750b0045efb27d4104ff5551eaf1bd3"
  },
  {
    "url": "Policies/OP07.html",
    "revision": "02da299fbfe2bc554aa450bccf978838"
  },
  {
    "url": "Policies/OP07Appendix01.html",
    "revision": "3a66d57f5fb2f068908d88026305968f"
  },
  {
    "url": "Policies/OP07Appendix02.html",
    "revision": "04fd830a68f7e8df31e202ad23145d5e"
  },
  {
    "url": "Policies/OP07Appendix03.html",
    "revision": "c7efe717657f775c9b044abb06fc1a83"
  },
  {
    "url": "Policies/OP07Appendix04.html",
    "revision": "36390726def803989d3565e146ab9dcc"
  },
  {
    "url": "Policies/OP07Appendix05.html",
    "revision": "278f47519cd6e9d6ad2fc9fa69f82fbe"
  },
  {
    "url": "Policies/OP07Appendix06.html",
    "revision": "1f970528ec779577567ce5b330ae593f"
  },
  {
    "url": "Policies/OP09.html",
    "revision": "a112e1f9e32a1b075bcc8a1994de74f3"
  },
  {
    "url": "Policies/OP09Appendix01.html",
    "revision": "8107dbc6912300eddf7d67a58ffb8f6a"
  },
  {
    "url": "Policies/OP09Appendix02.html",
    "revision": "884cb407a6cce177b722f68b0f8e8ea3"
  },
  {
    "url": "Policies/OP09Appendix03.html",
    "revision": "4cb11c4e204e28bb992e2c78c9c20b74"
  },
  {
    "url": "Policies/OP09Appendix04.html",
    "revision": "30d8f9d8d2d6f36adb05b288eedab3d6"
  },
  {
    "url": "Policies/OP10.html",
    "revision": "5d24cc1b47457a83c078e308941da688"
  },
  {
    "url": "Policies/OP11.html",
    "revision": "26f2410b7ee2597d68bbf76e10b5bceb"
  },
  {
    "url": "Policies/OP12.html",
    "revision": "972e0d392bcfbdc93d36e39dfe0933cc"
  },
  {
    "url": "Policies/OP12Appendix01.html",
    "revision": "30943ecb96962f19316791df1a8c6084"
  },
  {
    "url": "Policies/OP12Appendix02.html",
    "revision": "a582aa7f0c97bdd118eec0f65e1a4118"
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
