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
    "revision": "33e273f614639242d03d1a54e931b2cf"
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
    "url": "assets/css/styles.fb4c494b.css",
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
    "url": "assets/js/54.ef3f98c7.js",
    "revision": "31d41e03b20e3a2c05b2065ffabb882a"
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
    "url": "assets/js/app.fb4c494b.js",
    "revision": "cd2a51dcd9fe5d921c336123bb9d660b"
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
    "revision": "bf676f294a77f795c9783420dec98ac0"
  },
  {
    "url": "Policies/G01.html",
    "revision": "976e0d131f380ffe5549785ba14f9c98"
  },
  {
    "url": "Policies/G02.html",
    "revision": "93c31193c708f10d3ff6fb9d0d9a3f5c"
  },
  {
    "url": "Policies/G02Appendix01.html",
    "revision": "95ec026995a47539ff6a3bb6ae1847ce"
  },
  {
    "url": "Policies/G02Appendix02.html",
    "revision": "519789510b70c7615e6843904efb3853"
  },
  {
    "url": "Policies/G03.html",
    "revision": "85708e2561ea0bacc371dd9b2cfa12c1"
  },
  {
    "url": "Policies/G04.html",
    "revision": "d33d05254d21f9da8650c4bb40e090e9"
  },
  {
    "url": "Policies/G05.html",
    "revision": "7db48762d4d494fc61c4b8f7e188f20b"
  },
  {
    "url": "Policies/G06.html",
    "revision": "5d40e47e660b923d1c324535e0d5124c"
  },
  {
    "url": "Policies/HR01.html",
    "revision": "aca750a103f4228390ef968b51d65a93"
  },
  {
    "url": "Policies/HR01Appendix01.html",
    "revision": "0e023f8e7830a873ab3df0518385218f"
  },
  {
    "url": "Policies/HR01Appendix02.html",
    "revision": "faea0daaef1567fa318ddf1dc33d6ad1"
  },
  {
    "url": "Policies/HR01Appendix05.html",
    "revision": "c6a8b0f4c7da72520b1feb03f8ee1178"
  },
  {
    "url": "Policies/HR01Appendix06.html",
    "revision": "fbe687636f43b4b19f9beaf35943ab70"
  },
  {
    "url": "Policies/HR01Appendix07.html",
    "revision": "af8f111c52214f34d29628189038509b"
  },
  {
    "url": "Policies/HR01Appendix08.html",
    "revision": "8b8796b835dabdd0614667538f48f0f0"
  },
  {
    "url": "Policies/HR02.html",
    "revision": "ecd1d645dc00cb75113f3f76f10c9f29"
  },
  {
    "url": "Policies/HR02Appendix01.html",
    "revision": "a97a442aa90ea6d31741f17ae258b7e9"
  },
  {
    "url": "Policies/HR02Appendix02.html",
    "revision": "18547d0f25881170e5632478224b22fe"
  },
  {
    "url": "Policies/HR02Appendix03.html",
    "revision": "ffc691896cca8b3297d8b82d99c2bbe6"
  },
  {
    "url": "Policies/HR03.html",
    "revision": "06ecd223de220df7199de1d9b626e3c3"
  },
  {
    "url": "Policies/HS01.html",
    "revision": "0bba20cc3b59bebb8a69bf2e7b06c090"
  },
  {
    "url": "Policies/HS01Appendix01.html",
    "revision": "8251e5274039e9af5ed4261aa208ad7a"
  },
  {
    "url": "Policies/HS01Appendix02.html",
    "revision": "fb52d50923a89bafd39cc898ea45ae4e"
  },
  {
    "url": "Policies/HS01Appendix03.html",
    "revision": "a91d7bff6846f1fdf275a8e3c3ce2132"
  },
  {
    "url": "Policies/HS01Appendix04.html",
    "revision": "23278895af5cdba68945de42e823c2fd"
  },
  {
    "url": "Policies/HS01Appendix05.html",
    "revision": "2c633bb8702cca8abd4571c30b80f0df"
  },
  {
    "url": "Policies/HS02.html",
    "revision": "79c57e6c1fb526d72e37bb6888c24c6e"
  },
  {
    "url": "Policies/HS02Appendix01.html",
    "revision": "987f52ea408feb149a25401d30e87c95"
  },
  {
    "url": "Policies/HS02Appendix02.html",
    "revision": "a1ad0b0bc07043b7aedd2b8d503b53f2"
  },
  {
    "url": "Policies/HS02Appendix03.html",
    "revision": "fd4a350e733ff9bb0362e7f9aed785ba"
  },
  {
    "url": "Policies/HS02Appendix04.html",
    "revision": "585046623eb3117cf17cf1e6e707684e"
  },
  {
    "url": "Policies/index.html",
    "revision": "0ddc6324b0bf2d7aa465e980a5ec6bd0"
  },
  {
    "url": "Policies/OP01.html",
    "revision": "25dfa028424892b307165b0285ce84cd"
  },
  {
    "url": "Policies/OP01Appendix01.html",
    "revision": "8afd4ccc030dedfb882518664a91b1ff"
  },
  {
    "url": "Policies/OP01Appendix02.html",
    "revision": "a12b7f1454add882d1af71e66792d8c2"
  },
  {
    "url": "Policies/OP01Appendix03.html",
    "revision": "08ce5ef9a395f60e3a411b8709184264"
  },
  {
    "url": "Policies/OP02.html",
    "revision": "8cd10f5e7c2929c3e21f4f920a7ea5cc"
  },
  {
    "url": "Policies/OP03.1.html",
    "revision": "cdda24057a58a9524f045b4481fca40c"
  },
  {
    "url": "Policies/OP03.1Appendix04.html",
    "revision": "d43b137b075b70c03eaf6f1f5bfce666"
  },
  {
    "url": "Policies/OP03.1Appendix05.html",
    "revision": "485635e0dddc047c61f1b8cff1209359"
  },
  {
    "url": "Policies/OP03.1Appendix06.html",
    "revision": "51816726c21d427989b7216264ace304"
  },
  {
    "url": "Policies/OP03.html",
    "revision": "63f2166288731e4510ad9cf19d1ae5ad"
  },
  {
    "url": "Policies/OP03Appendix01.html",
    "revision": "db7eb708f7f2fb4ba1139cc091c7da33"
  },
  {
    "url": "Policies/OP03Appendix02.html",
    "revision": "dcaa3051c3e6392a09f2c96f5d5f6de1"
  },
  {
    "url": "Policies/OP04.html",
    "revision": "94fcf0b113e3040828473bc9a1e53d34"
  },
  {
    "url": "Policies/OP04Appendix01.html",
    "revision": "ddfd9d079855b958a253452eeb09428c"
  },
  {
    "url": "Policies/OP04Appendix02.html",
    "revision": "c347c7f974a1a034600ea129cd01cef0"
  },
  {
    "url": "Policies/OP05.html",
    "revision": "3ce9edfdf182e6456a5e4e85ca8c0d8a"
  },
  {
    "url": "Policies/OP05Appendix01.html",
    "revision": "30641a6b09e50fcadf2dcedab46d7a28"
  },
  {
    "url": "Policies/OP05Appendix02.html",
    "revision": "20cc8ac1a9f6c426f319c43e66183b21"
  },
  {
    "url": "Policies/OP05Appendix03.html",
    "revision": "bfa7065469b07c55d81251361af83aba"
  },
  {
    "url": "Policies/OP05Appendix04.html",
    "revision": "e826b501c8a0c30aa1d96c05553be096"
  },
  {
    "url": "Policies/OP05Appendix05.html",
    "revision": "daeaf1839858bda88cd654902467f54f"
  },
  {
    "url": "Policies/OP06.html",
    "revision": "3a2d9e8c19c2015b5b84a15d06db9152"
  },
  {
    "url": "Policies/OP06Appendix01.html",
    "revision": "8808daadb6386c0732a575a5252945b7"
  },
  {
    "url": "Policies/OP06Appendix02.html",
    "revision": "8beb077005dd7fe7f9bc240deab29c8e"
  },
  {
    "url": "Policies/OP06Appendix03.html",
    "revision": "50c2195d6d856ace89e75a61efb4d89f"
  },
  {
    "url": "Policies/OP07.html",
    "revision": "4d64d035f1c20a0a67e023d6fa594a63"
  },
  {
    "url": "Policies/OP07Appendix01.html",
    "revision": "2c1e8ede912e19a655b74cd24c58bacd"
  },
  {
    "url": "Policies/OP07Appendix02.html",
    "revision": "71ffcdbdc9c021eb0e2ade10f19943f0"
  },
  {
    "url": "Policies/OP07Appendix03.html",
    "revision": "f4291818f0aee4d3509d4166bfe4a7fb"
  },
  {
    "url": "Policies/OP07Appendix04.html",
    "revision": "565081dbe829736899448b8c9638f630"
  },
  {
    "url": "Policies/OP07Appendix05.html",
    "revision": "dc8d4fc72987fc66a06884aedcff7c5c"
  },
  {
    "url": "Policies/OP07Appendix06.html",
    "revision": "2a49ecb0897b3d2329ca9cedd04b9c3c"
  },
  {
    "url": "Policies/OP09.html",
    "revision": "37e4907343c147fe6f61f4b43fe5a552"
  },
  {
    "url": "Policies/OP09Appendix01.html",
    "revision": "901d2359097c5bd07d6b91a1b23e8c54"
  },
  {
    "url": "Policies/OP09Appendix02.html",
    "revision": "a255be516c919520227c620843ccecb7"
  },
  {
    "url": "Policies/OP09Appendix03.html",
    "revision": "5cef014bbed455691d3dc6a67a0e6453"
  },
  {
    "url": "Policies/OP10.html",
    "revision": "87dfe95828ffdbf4227fe007af0edb38"
  },
  {
    "url": "Policies/OP11.html",
    "revision": "05701647b5278e38ee14347b2743074c"
  },
  {
    "url": "Policies/OP12.html",
    "revision": "bb580001ac50134af5873927eaa781ed"
  },
  {
    "url": "Policies/OP12Appendix01.html",
    "revision": "9887df63946073cc69201d0b4e90d7b6"
  },
  {
    "url": "Policies/OP12Appendix02.html",
    "revision": "e04db4d723c389ee69402e109111187a"
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
