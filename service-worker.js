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
    "revision": "64eed1e47f9e2f303ac873ef25f7f1d0"
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
    "url": "assets/css/styles.d7111294.css",
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
    "url": "assets/js/39.4c6d84bc.js",
    "revision": "b3fbede621cbee3d52d1543d8aa0a523"
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
    "url": "assets/js/app.d7111294.js",
    "revision": "76076a5f663afa1203749b28ae701fec"
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
    "revision": "a1138a8fe3b39bba9e0d84a4e6f1aace"
  },
  {
    "url": "Policies/G01.html",
    "revision": "63f864e0db697b24e09414bfb7cd09e8"
  },
  {
    "url": "Policies/G02.html",
    "revision": "b169e7399de1c0d505f481e559d2c50e"
  },
  {
    "url": "Policies/G02Appendix01.html",
    "revision": "a0ab0acd1376304f119a6314be8a7c1f"
  },
  {
    "url": "Policies/G02Appendix02.html",
    "revision": "27f3577f02d1e955b0db01d0032637cc"
  },
  {
    "url": "Policies/G03.html",
    "revision": "fb26514e3bf6786843c066f65c361f6f"
  },
  {
    "url": "Policies/G04.html",
    "revision": "a2424f50ecfc2f59439a9563cd5ed6a0"
  },
  {
    "url": "Policies/G05.html",
    "revision": "bdc837e5f2de2dc20f97b9bc045cbc73"
  },
  {
    "url": "Policies/G06.html",
    "revision": "4aaf82d673b631a1107366feb6b77dde"
  },
  {
    "url": "Policies/HR01.html",
    "revision": "fd33ddecd834183c2a143941e5daa4bc"
  },
  {
    "url": "Policies/HR01Appendix01.html",
    "revision": "be5d84537bb755471c8a0dd019786873"
  },
  {
    "url": "Policies/HR01Appendix02.html",
    "revision": "5bf00cc42f31eec23daf24a48f88f98e"
  },
  {
    "url": "Policies/HR01Appendix05.html",
    "revision": "8d46550247e90d9a0285325c55d0acb6"
  },
  {
    "url": "Policies/HR01Appendix06.html",
    "revision": "502e1b8df2eb7fd67b8ed133951bc679"
  },
  {
    "url": "Policies/HR01Appendix07.html",
    "revision": "2a5b43444f0917ee8544f204542139ed"
  },
  {
    "url": "Policies/HR01Appendix08.html",
    "revision": "a5e3bfc3e968a8da38919f2b09a5b74f"
  },
  {
    "url": "Policies/HR02.html",
    "revision": "0ebc725637686c99b17659091955c4b6"
  },
  {
    "url": "Policies/HR02Appendix01.html",
    "revision": "5e9bce3eb005801d206a8c10c7bf2b89"
  },
  {
    "url": "Policies/HR02Appendix02.html",
    "revision": "f78f66a9efa45ad5132da439381139d9"
  },
  {
    "url": "Policies/HR02Appendix03.html",
    "revision": "b6524475fe2b8b2db6eb2eb3ad838e36"
  },
  {
    "url": "Policies/HR03.html",
    "revision": "d2cc0469641cd82a3a917634b14000d7"
  },
  {
    "url": "Policies/HS01.html",
    "revision": "f3943075dd5f378c48341d40c89afc90"
  },
  {
    "url": "Policies/HS01Appendix01.html",
    "revision": "f56fb0364ef8314a6ea2564ab2e5472b"
  },
  {
    "url": "Policies/HS01Appendix02.html",
    "revision": "46b57cd200d95cf56da5f51cfeacdf12"
  },
  {
    "url": "Policies/HS01Appendix03.html",
    "revision": "eb9e8b087aa95ea4ad43932d73a592c5"
  },
  {
    "url": "Policies/HS01Appendix04.html",
    "revision": "42cda04cd7be37d52ad2aa8e3812dc10"
  },
  {
    "url": "Policies/HS01Appendix05.html",
    "revision": "7c0e472d160e545ae8133aed4dc04af4"
  },
  {
    "url": "Policies/HS02.html",
    "revision": "ad152debef6250651c63245f5490527a"
  },
  {
    "url": "Policies/HS02Appendix01.html",
    "revision": "3d34c410e8769dffcdb66af079cba1dc"
  },
  {
    "url": "Policies/HS02Appendix02.html",
    "revision": "505d2a88bd044d29f78810897b1aba0e"
  },
  {
    "url": "Policies/HS02Appendix03.html",
    "revision": "77278525ce3f65fdf32a4ff2693e14e8"
  },
  {
    "url": "Policies/HS02Appendix04.html",
    "revision": "a09e7089af4d3b208b70b9b2fa2aacbb"
  },
  {
    "url": "Policies/index.html",
    "revision": "bb44a5203d99a617d43762a859d28bf9"
  },
  {
    "url": "Policies/OP01.html",
    "revision": "4962507b69267a787ccdf7c72d0d9d22"
  },
  {
    "url": "Policies/OP01Appendix01.html",
    "revision": "f024c05b31e06fd7ef8a2c88557ea0f8"
  },
  {
    "url": "Policies/OP01Appendix02.html",
    "revision": "0d2d324cdd6f983e0f27ff32eb99a8af"
  },
  {
    "url": "Policies/OP01Appendix03.html",
    "revision": "767a5fbfebe7314f5aa8314611acbd67"
  },
  {
    "url": "Policies/OP02.html",
    "revision": "837bda0c83b51985795c9076ecfa6c05"
  },
  {
    "url": "Policies/OP03.1.html",
    "revision": "2a078a4aa3b884533c712b2e1eca58e6"
  },
  {
    "url": "Policies/OP03.1Appendix04.html",
    "revision": "97ba34847d5e661c04cc4279e53854ff"
  },
  {
    "url": "Policies/OP03.1Appendix05.html",
    "revision": "e976d302e078a50b5d25aaaaa644ddec"
  },
  {
    "url": "Policies/OP03.1Appendix06.html",
    "revision": "f0531fbac88877a56e9af3a51e75b3fe"
  },
  {
    "url": "Policies/OP03.html",
    "revision": "fd99e2a53709c446578afef0f320c81a"
  },
  {
    "url": "Policies/OP03Appendix01.html",
    "revision": "1ff233df6249f75147eca34f3fea72bb"
  },
  {
    "url": "Policies/OP03Appendix02.html",
    "revision": "36f2b9589d7e69710424002240f3d292"
  },
  {
    "url": "Policies/OP04.html",
    "revision": "eb367650a0472d32cd7a3eec27fd18cd"
  },
  {
    "url": "Policies/OP04Appendix01.html",
    "revision": "456fd7e0cca05764f7896e56b675c691"
  },
  {
    "url": "Policies/OP04Appendix02.html",
    "revision": "1f5c26e7948b5ea1dbf99f001c20c0f5"
  },
  {
    "url": "Policies/OP05.html",
    "revision": "f36ad69c8878d8065e923b72e12e3fd7"
  },
  {
    "url": "Policies/OP05Appendix01.html",
    "revision": "feaeed54e4ecc52e361070d6f3c2214d"
  },
  {
    "url": "Policies/OP05Appendix02.html",
    "revision": "1aabb5366c5cfe3beb4e497b03e33251"
  },
  {
    "url": "Policies/OP05Appendix03.html",
    "revision": "bc2f945f174b26dc04f5730d83e5ffc5"
  },
  {
    "url": "Policies/OP05Appendix04.html",
    "revision": "8d9962b7a08ec52d3559c4c3d6de685f"
  },
  {
    "url": "Policies/OP05Appendix05.html",
    "revision": "126c86b7bc2edcab72f7e0fca8f0886a"
  },
  {
    "url": "Policies/OP06.html",
    "revision": "cee4e58c8f25c7fa1c02b017dbd4078b"
  },
  {
    "url": "Policies/OP06Appendix01.html",
    "revision": "7318ff98740b8ccb41750f21a27ff65e"
  },
  {
    "url": "Policies/OP06Appendix02.html",
    "revision": "c64b55deb8b37716deb593caebb2f0ed"
  },
  {
    "url": "Policies/OP06Appendix03.html",
    "revision": "bffd502d81bb8581f533ab8eb86d8724"
  },
  {
    "url": "Policies/OP07.html",
    "revision": "a81e46faf013ab85d514ef2133d2c0b2"
  },
  {
    "url": "Policies/OP07Appendix01.html",
    "revision": "60b44a01c827d602f8fb43047537e861"
  },
  {
    "url": "Policies/OP07Appendix02.html",
    "revision": "a016a42dae9c031ce56c8a1231056b6d"
  },
  {
    "url": "Policies/OP07Appendix03.html",
    "revision": "6934edbb3c027a1f127ddcafe85d0edd"
  },
  {
    "url": "Policies/OP07Appendix04.html",
    "revision": "21e1d70fc0450d4968b438b6b32441c1"
  },
  {
    "url": "Policies/OP07Appendix05.html",
    "revision": "1cc9b78880a8e4c1ef9306d05bc91658"
  },
  {
    "url": "Policies/OP07Appendix06.html",
    "revision": "11d3bf60cf07b0e7c040e713ab0c5bcc"
  },
  {
    "url": "Policies/OP09.html",
    "revision": "290148ff2e875929c7d7d769385d2b9d"
  },
  {
    "url": "Policies/OP09Appendix01.html",
    "revision": "26f6a64a75249179a0a8e6c5bf37ea52"
  },
  {
    "url": "Policies/OP09Appendix02.html",
    "revision": "728259f7d86d15085b81ffbc24f46e0e"
  },
  {
    "url": "Policies/OP09Appendix03.html",
    "revision": "013706e8dfe78e098399fc2dc08dc165"
  },
  {
    "url": "Policies/OP10.html",
    "revision": "23f279498f7b27e3961f22bfcbdb37d8"
  },
  {
    "url": "Policies/OP11.html",
    "revision": "73a96f97002452615d886919f27dbce1"
  },
  {
    "url": "Policies/OP12.html",
    "revision": "075b9f7d695546f6518c99785bd70ca7"
  },
  {
    "url": "Policies/OP12Appendix01.html",
    "revision": "50f0eaff6066e113b3a2c9401c59b2d6"
  },
  {
    "url": "Policies/OP12Appendix02.html",
    "revision": "1649a0e644b1f15ff3e402ddc55cffcf"
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
