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
    "revision": "f2a8feba33e60b1a30f8db6a61155ab0"
  },
  {
    "url": "assets/css/1.styles.20452603.css",
    "revision": "bd2953ae21f32746ddb8402e019843e8"
  },
  {
    "url": "assets/css/2.styles.6b7569cb.css",
    "revision": "658262901bc10d9dfb2774a90d71fb81"
  },
  {
    "url": "assets/css/styles.0db7d8f7.css",
    "revision": "2b73208f0c3df4a8f6981ac468d1aac3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.20452603.js",
    "revision": "748a8fdcfd1d19a79b53c4cd78b6b83c"
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
    "url": "assets/js/24.3f4531ca.js",
    "revision": "a704d94daebb600669178c09ff4b5941"
  },
  {
    "url": "assets/js/25.8e442bf8.js",
    "revision": "194dbca93c604c2c217b006d8dacffff"
  },
  {
    "url": "assets/js/26.62f2e75d.js",
    "revision": "ae4202f8c5be2ace2aa52b08b04deb30"
  },
  {
    "url": "assets/js/27.30580785.js",
    "revision": "a9d10f15dfa31de192332094c9ee4167"
  },
  {
    "url": "assets/js/28.226f58c6.js",
    "revision": "4ce6539798e0e7ab22e77d0449f2eaba"
  },
  {
    "url": "assets/js/29.4f233419.js",
    "revision": "d032c4d3cc61fd74f3594e15e22ead53"
  },
  {
    "url": "assets/js/3.653a2e0d.js",
    "revision": "160906c331db3827e812519d7d22d73a"
  },
  {
    "url": "assets/js/30.de7c0840.js",
    "revision": "5e314832e5cd9d558acabdee69f6d548"
  },
  {
    "url": "assets/js/31.8b2a3c5c.js",
    "revision": "17159da524f604d3af5ab063aa3c8194"
  },
  {
    "url": "assets/js/32.ba7862fe.js",
    "revision": "449052fa3291d18bf4ff98bfa0a5fdc9"
  },
  {
    "url": "assets/js/33.dd3743b1.js",
    "revision": "48b111258c9fa6e3245ab4a7739e47a0"
  },
  {
    "url": "assets/js/34.41cadd38.js",
    "revision": "e2f4395813a49ed25ee5d31271d31fcc"
  },
  {
    "url": "assets/js/35.a0eaaca5.js",
    "revision": "9e4142161b2ef3a0112204a328919df7"
  },
  {
    "url": "assets/js/36.412d290d.js",
    "revision": "329c2fb1bbaa4822b118460e3c1d6a57"
  },
  {
    "url": "assets/js/37.a65ae5ef.js",
    "revision": "3c9c531fd377e4eab828582be2d1dc84"
  },
  {
    "url": "assets/js/38.81252114.js",
    "revision": "c12f41309dbc60306c2e4d6c09de610c"
  },
  {
    "url": "assets/js/39.3d627ff6.js",
    "revision": "937dc72486f1844bfcb4de5848981702"
  },
  {
    "url": "assets/js/4.724b1352.js",
    "revision": "fe708954affecf342fccceee05b62d60"
  },
  {
    "url": "assets/js/40.54859878.js",
    "revision": "7cae59868322dca11e8a4e5ae38dffad"
  },
  {
    "url": "assets/js/41.4155c8ec.js",
    "revision": "05a475e79d3ab303a1976b5c4ed7033b"
  },
  {
    "url": "assets/js/42.2a3f68e1.js",
    "revision": "4dec6b35e4f77242d3f7fa61eb3a5ef0"
  },
  {
    "url": "assets/js/43.e26d75fb.js",
    "revision": "976b7e1715fdd49c0b78580b301e375f"
  },
  {
    "url": "assets/js/44.0cc89374.js",
    "revision": "93bc394e4affcc93b49ee16b83036ff5"
  },
  {
    "url": "assets/js/45.db040f11.js",
    "revision": "268a2a78b5b5aecca086b39687e48e9d"
  },
  {
    "url": "assets/js/46.c12b5194.js",
    "revision": "f9a1140ee3479782cdd3713798ee5e36"
  },
  {
    "url": "assets/js/47.a2dae4b8.js",
    "revision": "0b87b0e490f5f914578c956683464201"
  },
  {
    "url": "assets/js/48.8b7bfaa0.js",
    "revision": "35833fcd842e878f8e51d5eeea27cffa"
  },
  {
    "url": "assets/js/49.40b2bafa.js",
    "revision": "f7ec8c01d1d276db5f901472080df3b6"
  },
  {
    "url": "assets/js/5.d95331b9.js",
    "revision": "825c188440daadd9f9134600fa678fda"
  },
  {
    "url": "assets/js/50.43e5f72e.js",
    "revision": "e5c7477e40e04c4187d90a74f9732956"
  },
  {
    "url": "assets/js/51.3d6683b5.js",
    "revision": "8b588bca8aa58fe107a1396f9f2b5b32"
  },
  {
    "url": "assets/js/52.fbe89d83.js",
    "revision": "ee14695fce51b7b77f08e38549181581"
  },
  {
    "url": "assets/js/53.26d78dc5.js",
    "revision": "e6023f4ed3924d324df51efa7371e121"
  },
  {
    "url": "assets/js/54.d759ab05.js",
    "revision": "24fd26400b1d37aa65ff5a6899f771f4"
  },
  {
    "url": "assets/js/55.f835b948.js",
    "revision": "3695bc272badb457270acf3bf03a1e7a"
  },
  {
    "url": "assets/js/56.dbea268b.js",
    "revision": "f358daaa3b185b5d45af4721283e877e"
  },
  {
    "url": "assets/js/57.cae6c11a.js",
    "revision": "72bfed9e7f6715b8b237b680a4336dca"
  },
  {
    "url": "assets/js/58.35a643d0.js",
    "revision": "4b3b05acb85dc2dfd3a28ce53a816cee"
  },
  {
    "url": "assets/js/59.5578754a.js",
    "revision": "2b8764a1c0be86e4044b4cf5bb995779"
  },
  {
    "url": "assets/js/6.16ac62fb.js",
    "revision": "4c1edee0d2fcca4e886f5fe44b185513"
  },
  {
    "url": "assets/js/60.cecf0950.js",
    "revision": "ae692b5107a0f6bc72337439b1045bc1"
  },
  {
    "url": "assets/js/61.d9a6a2c3.js",
    "revision": "c7c218b4233cbfb1876121b3a55a1563"
  },
  {
    "url": "assets/js/62.7ff712d0.js",
    "revision": "69baa4d4a592019c4f9910578f919559"
  },
  {
    "url": "assets/js/63.d6984400.js",
    "revision": "0bbd306862bd74ee0aca448f99080c17"
  },
  {
    "url": "assets/js/64.f402c761.js",
    "revision": "8ff07b6eb244c69eed09c1263a40d3b5"
  },
  {
    "url": "assets/js/65.ae935f31.js",
    "revision": "3e7760591203f507bb81ccf6b60ae601"
  },
  {
    "url": "assets/js/66.753b5079.js",
    "revision": "b4970d060d677b8100524f0f856cad5e"
  },
  {
    "url": "assets/js/67.7f1b5a4e.js",
    "revision": "402e7870372b0bee3ef0ef511af58719"
  },
  {
    "url": "assets/js/68.405ee5d3.js",
    "revision": "557ea69800ae73f141e7128e44582fdf"
  },
  {
    "url": "assets/js/69.adccc5a2.js",
    "revision": "fa3e9faf85ce74b3b0db320b84d36555"
  },
  {
    "url": "assets/js/7.c9864456.js",
    "revision": "ede27a7e104116960487bdd3ba9547d9"
  },
  {
    "url": "assets/js/70.8514d11d.js",
    "revision": "c5e8cb1e2862c8190a01bca43e33d926"
  },
  {
    "url": "assets/js/71.6cd21df8.js",
    "revision": "67cb8d13356369efdad065e0b57faaaf"
  },
  {
    "url": "assets/js/72.25b0de94.js",
    "revision": "1ac059aa5fee814c2d2b25699440a489"
  },
  {
    "url": "assets/js/73.28977773.js",
    "revision": "125dd8ed39d788aba51cea4d8c11d80a"
  },
  {
    "url": "assets/js/74.3cd9ba5d.js",
    "revision": "06d380a4646844903cb6fb6a75fc2faf"
  },
  {
    "url": "assets/js/75.f1a4f17e.js",
    "revision": "4a06c1a9782df5d074c0718d374b6388"
  },
  {
    "url": "assets/js/76.86bb4c5d.js",
    "revision": "639af4722c1d7c7686eac8442c9a9a05"
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
    "url": "assets/js/app.0db7d8f7.js",
    "revision": "b42bab14b79d9d49b829d01b08ae62b3"
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
    "url": "images/OP05Appendix04Pic1.png",
    "revision": "723b3d093a39556825c6fb0943bcdd8b"
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
    "revision": "f011517eecc2a8177bb0f7cffbb19cf0"
  },
  {
    "url": "Policies/G01.html",
    "revision": "d10c23e79583b1b4053690f863f31564"
  },
  {
    "url": "Policies/G02.html",
    "revision": "8a556663a403c8cb1153c203392666cb"
  },
  {
    "url": "Policies/G02Appendix01.html",
    "revision": "80f3287c72b0b58c0652a225e5f77bd9"
  },
  {
    "url": "Policies/G02Appendix02.html",
    "revision": "080f64913485f574c8a7a83a5b8e79e2"
  },
  {
    "url": "Policies/G03.html",
    "revision": "9a9761a696a445620d42334dfc38fcd1"
  },
  {
    "url": "Policies/G04.html",
    "revision": "207693150c9b34b0b0c008baff4ddf87"
  },
  {
    "url": "Policies/G05.html",
    "revision": "b0a5e014acbe5656b574f5772e59fd6b"
  },
  {
    "url": "Policies/G06.html",
    "revision": "a46b42c741985611e325eec918227fc7"
  },
  {
    "url": "Policies/HR01.html",
    "revision": "37cc2dd53dacc7ff0f7bc46ec021d7c5"
  },
  {
    "url": "Policies/HR01Appendix01.html",
    "revision": "68253efe87f3136196e6cf92caa37eaf"
  },
  {
    "url": "Policies/HR01Appendix02.html",
    "revision": "7674e95f2d9271d12c6d90d19eb8b946"
  },
  {
    "url": "Policies/HR01Appendix05.html",
    "revision": "98bcd9b0c26cf86d415f422e11f30d63"
  },
  {
    "url": "Policies/HR01Appendix06.html",
    "revision": "3c4074480a3fd24bcbdd35e5f413b0ae"
  },
  {
    "url": "Policies/HR01Appendix07.html",
    "revision": "e6e3580f9d44fc0492c516e48b140dc2"
  },
  {
    "url": "Policies/HR01Appendix08.html",
    "revision": "dc37b284eb909fcf0c3f289cc7d0f6c9"
  },
  {
    "url": "Policies/HR02.html",
    "revision": "7fcbb40c04c5ad1b5e20b04d05db52bd"
  },
  {
    "url": "Policies/HR02Appendix01.html",
    "revision": "4d00e795f83e1c1960856bb4157b21e0"
  },
  {
    "url": "Policies/HR02Appendix02.html",
    "revision": "167af5fbd081daee65a2ae7e2a9e513b"
  },
  {
    "url": "Policies/HR02Appendix03.html",
    "revision": "ea866fbd6ddfd7fa196cc7a3de0d6cbe"
  },
  {
    "url": "Policies/HR03.html",
    "revision": "daa5826357463f04ff88de1bb62dae1a"
  },
  {
    "url": "Policies/HS01.html",
    "revision": "d7192afb259f5b33254efc4ba5a27671"
  },
  {
    "url": "Policies/HS01Appendix01.html",
    "revision": "72b150d6887973c08aea3ca86c7e722a"
  },
  {
    "url": "Policies/HS01Appendix02.html",
    "revision": "8b9238f112138a9456133efecd686b72"
  },
  {
    "url": "Policies/HS01Appendix03.html",
    "revision": "90f2fce31b8d3061d91c0a7e668b498c"
  },
  {
    "url": "Policies/HS01Appendix04.html",
    "revision": "9bf07d41baa78e4cc637d09b48fce04f"
  },
  {
    "url": "Policies/HS01Appendix05.html",
    "revision": "41d43d40ceb5634c675622c317a272e9"
  },
  {
    "url": "Policies/HS02.html",
    "revision": "cedeaf545434f47e5a2347751d60640c"
  },
  {
    "url": "Policies/HS02Appendix01.html",
    "revision": "9a7ebbd0a655136a452eb143ea910ca6"
  },
  {
    "url": "Policies/HS02Appendix02.html",
    "revision": "dd8ec26ca3c275ade0802d0fa85f7dad"
  },
  {
    "url": "Policies/HS02Appendix03.html",
    "revision": "067932b0407d1b9651b60a690e8ceac3"
  },
  {
    "url": "Policies/HS02Appendix04.html",
    "revision": "65bc654e5e327d6597b52bb47b7aefe6"
  },
  {
    "url": "Policies/index.html",
    "revision": "5e811f7397d428bb5eec7d5ba1ead9e8"
  },
  {
    "url": "Policies/OP01.html",
    "revision": "a9d801649bd6abd0f1b1d2e02ef0e647"
  },
  {
    "url": "Policies/OP01Appendix01.html",
    "revision": "b11c0a220578250aaece04b1f785ea58"
  },
  {
    "url": "Policies/OP01Appendix02.html",
    "revision": "4000a698b3de8e9e6f0044fba6053c66"
  },
  {
    "url": "Policies/OP01Appendix03.html",
    "revision": "0b3015f3c5eca063d8c9771e35e7b94a"
  },
  {
    "url": "Policies/OP02.html",
    "revision": "93e3118352898c12b8900ac8e2ccc270"
  },
  {
    "url": "Policies/OP03.1.html",
    "revision": "4b1224c739828aa56340def838ffdbed"
  },
  {
    "url": "Policies/OP03.1Appendix04.html",
    "revision": "473ecb2e7a627491724714f210af52fa"
  },
  {
    "url": "Policies/OP03.1Appendix05.html",
    "revision": "b11218879db6968acc6cd5bc9a332e99"
  },
  {
    "url": "Policies/OP03.1Appendix06.html",
    "revision": "80aeefb7112117dae53d0caa50f2ec8e"
  },
  {
    "url": "Policies/OP03.html",
    "revision": "6e0635c7e0b80a0bf33620a174de986e"
  },
  {
    "url": "Policies/OP03Appendix01.html",
    "revision": "d1ed49c0be4c9d0984c06543653aa87f"
  },
  {
    "url": "Policies/OP03Appendix02.html",
    "revision": "23e202cc93ccc78426d8d9727676fc0f"
  },
  {
    "url": "Policies/OP04.html",
    "revision": "48c5963242ac0c5dc9b7544068b7548c"
  },
  {
    "url": "Policies/OP04Appendix01.html",
    "revision": "c7562d5dfd64d87a509addf4e995270a"
  },
  {
    "url": "Policies/OP04Appendix02.html",
    "revision": "e550f3c61d38c1b6b602d119008dac6b"
  },
  {
    "url": "Policies/OP05.html",
    "revision": "acca6d0a5774aa5f621c65766f3af21f"
  },
  {
    "url": "Policies/OP05Appendix01.html",
    "revision": "2a978d8075ba241690d3d36c1e3e180b"
  },
  {
    "url": "Policies/OP05Appendix02.html",
    "revision": "7a81aab6fe69f11ad4788a5aa9d6cf19"
  },
  {
    "url": "Policies/OP05Appendix03.html",
    "revision": "f58793851d0042eae2ca58f71066128c"
  },
  {
    "url": "Policies/OP05Appendix04.html",
    "revision": "2624cc0c9daa244750a298090a505fc0"
  },
  {
    "url": "Policies/OP05Appendix05.html",
    "revision": "80e93a26e21d9a0c1ab6dacf70d77819"
  },
  {
    "url": "Policies/OP06.html",
    "revision": "e357e135f367510952196fc58b7f7e4f"
  },
  {
    "url": "Policies/OP06Appendix01.html",
    "revision": "2b0fd639ec90b868f5847a44c622f8f2"
  },
  {
    "url": "Policies/OP06Appendix02.html",
    "revision": "9b4c201dd093cac2efc7802714af6bc6"
  },
  {
    "url": "Policies/OP06Appendix03.html",
    "revision": "846ccfe05c821e794155b39c6dbd5ff4"
  },
  {
    "url": "Policies/OP07.html",
    "revision": "8a85c1e58b9295fc1e4f72ea82ce26aa"
  },
  {
    "url": "Policies/OP07Appendix01.html",
    "revision": "77fad92a817f74d2d1fd64e27b13f389"
  },
  {
    "url": "Policies/OP07Appendix02.html",
    "revision": "5712bb94647ef8454e0f761222b12abb"
  },
  {
    "url": "Policies/OP07Appendix03.html",
    "revision": "40fa82e3a865a2caf4d79a935f3e8b1c"
  },
  {
    "url": "Policies/OP07Appendix04.html",
    "revision": "bdf04e8ecdce4a4323d3077f60c54034"
  },
  {
    "url": "Policies/OP07Appendix05.html",
    "revision": "95afd8ad8c068b6469862a40c6f5158b"
  },
  {
    "url": "Policies/OP07Appendix06.html",
    "revision": "126d665835cf0e4ac4d34c06e3a7d8c9"
  },
  {
    "url": "Policies/OP09.html",
    "revision": "0cea6748f20c175dc180e84cce843816"
  },
  {
    "url": "Policies/OP09Appendix01.html",
    "revision": "34ca94b8a2ec10cfc0b6463afacb0d37"
  },
  {
    "url": "Policies/OP09Appendix02.html",
    "revision": "684c46b05b6f8fa6114e9d77f3f54bf1"
  },
  {
    "url": "Policies/OP09Appendix03.html",
    "revision": "a154ec3f5c0d84fc769c55c9675b79b3"
  },
  {
    "url": "Policies/OP10.html",
    "revision": "dd723e1103ac752245da459581f11d0a"
  },
  {
    "url": "Policies/OP11.html",
    "revision": "5a8b57edc83c03351c479bd72db3221a"
  },
  {
    "url": "Policies/OP12.html",
    "revision": "985f3d3cffc89b09316710622d03c009"
  },
  {
    "url": "Policies/OP12Appendix01.html",
    "revision": "1776202cf762df21f48b5a65b49c4e90"
  },
  {
    "url": "Policies/OP12Appendix02.html",
    "revision": "2be5228915741020c6ce20bf1f36e84e"
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
