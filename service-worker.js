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
    "revision": "96d6e3f3af3fc4a7aa4e6d3137b80eef"
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
    "url": "assets/css/styles.b65b76e3.css",
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
    "url": "assets/js/10.4c7d0057.js",
    "revision": "adba1cc018d832b1f373dfaa5a904166"
  },
  {
    "url": "assets/js/11.20db0abb.js",
    "revision": "8f161a0d0244afb964362ab1c241d5d4"
  },
  {
    "url": "assets/js/12.a188ff3d.js",
    "revision": "d38423057d9eb3e4f31d6c007d9bd435"
  },
  {
    "url": "assets/js/13.db3708f1.js",
    "revision": "a1cca9dfb8c13e3a07de74c25319b0ef"
  },
  {
    "url": "assets/js/14.81c074b7.js",
    "revision": "1e5eba6db671d3c1c20b6d7afd89cdc3"
  },
  {
    "url": "assets/js/15.dcc42756.js",
    "revision": "330a2fae43a94f53a3671b77aff47c1d"
  },
  {
    "url": "assets/js/16.c73c574a.js",
    "revision": "5484d207b647834cbf2b56cc211fd760"
  },
  {
    "url": "assets/js/17.386f4e45.js",
    "revision": "5e2373e579a3fb76116ccd3b1af3e4c6"
  },
  {
    "url": "assets/js/18.ac4e8559.js",
    "revision": "01bca1a7f71e1dad4dd62ff9d14bbca5"
  },
  {
    "url": "assets/js/19.621a041b.js",
    "revision": "97fc96d90671f83778a095f23dad1d23"
  },
  {
    "url": "assets/js/2.6b7569cb.js",
    "revision": "fe333b391aa7529e7228c22d5c70f516"
  },
  {
    "url": "assets/js/20.c9f45c64.js",
    "revision": "6fe0484de5d2e3e69d35ce9077307262"
  },
  {
    "url": "assets/js/21.6db80e2e.js",
    "revision": "d9f83f8875947ec56db42b9271e6a332"
  },
  {
    "url": "assets/js/22.69248333.js",
    "revision": "34d1c3319be38d3a70b97bd7c6186727"
  },
  {
    "url": "assets/js/23.70327c7e.js",
    "revision": "e7cdac8c1f693cc0123e8feafe2c79b5"
  },
  {
    "url": "assets/js/24.e4c83fbf.js",
    "revision": "6de214a5eab0854dad33af5cd0c5363d"
  },
  {
    "url": "assets/js/25.ec3aa937.js",
    "revision": "d0b920cfbc37a5bba58a75fed644058b"
  },
  {
    "url": "assets/js/26.8cc9d60f.js",
    "revision": "9c53abc1825a8088ef7f91b1c2d55c8c"
  },
  {
    "url": "assets/js/27.2578e101.js",
    "revision": "04c46e976ce187564523ec2d0f793b85"
  },
  {
    "url": "assets/js/28.f7f771de.js",
    "revision": "bbc1477046f9906a31b964d256f06670"
  },
  {
    "url": "assets/js/29.d89da669.js",
    "revision": "9ae96600cbf101bd8611b3a54bb36ffa"
  },
  {
    "url": "assets/js/3.72556879.js",
    "revision": "bd5e2a6033436a1f2310df287d37dd30"
  },
  {
    "url": "assets/js/30.b46a09d0.js",
    "revision": "07d2e5d9ae4a102939e33cbb86739443"
  },
  {
    "url": "assets/js/31.1c2b3bff.js",
    "revision": "5033632a9a3d1213443e132bdfa5d487"
  },
  {
    "url": "assets/js/32.7a4ca244.js",
    "revision": "ba85c35cad0647ca13d3ff5d19345b06"
  },
  {
    "url": "assets/js/33.dedf1674.js",
    "revision": "d562bf71e2b6982e31de5669e3363c66"
  },
  {
    "url": "assets/js/34.050ca228.js",
    "revision": "d84da2eeec450f320bf07d03409e93d4"
  },
  {
    "url": "assets/js/35.36666521.js",
    "revision": "b5a9663031d201e2590bbae7600d9e72"
  },
  {
    "url": "assets/js/36.755343e9.js",
    "revision": "0f908e60063d32d0807bc7811548d13e"
  },
  {
    "url": "assets/js/37.cfaf961d.js",
    "revision": "17412c9b8d99636161dfcc0246863e59"
  },
  {
    "url": "assets/js/38.524b9ec2.js",
    "revision": "674f058b6aae6d01dab89b263f4d91cd"
  },
  {
    "url": "assets/js/39.c15269ab.js",
    "revision": "91ac417b07f2b28594f54b8fe1f56cb9"
  },
  {
    "url": "assets/js/4.5cc64cbe.js",
    "revision": "3b59b2ee638253bbbb98d2c79c825b45"
  },
  {
    "url": "assets/js/40.366def49.js",
    "revision": "3bfac027e5fd250db268d7d276354404"
  },
  {
    "url": "assets/js/41.1d1d902e.js",
    "revision": "4fccc3f1f897e6b4c6ef7965bea740da"
  },
  {
    "url": "assets/js/42.dfefbcf5.js",
    "revision": "7c88f5d45d09d09c74965baa173d8bc7"
  },
  {
    "url": "assets/js/43.d6f682a4.js",
    "revision": "16356347fb31af3b96ac088249b0e2ae"
  },
  {
    "url": "assets/js/44.abc41666.js",
    "revision": "e9f1176fadb8ec1b19e4d09031f8c010"
  },
  {
    "url": "assets/js/45.ad814128.js",
    "revision": "e1d24a2685f3850c4d3ec0404929d6e7"
  },
  {
    "url": "assets/js/46.b3cd38e1.js",
    "revision": "534568925832644053b25f4316d8f891"
  },
  {
    "url": "assets/js/47.0cf72409.js",
    "revision": "255a1c01f70aef21fd2e2bdff0cbbaa3"
  },
  {
    "url": "assets/js/48.14a729ae.js",
    "revision": "1e0c92a7bb4d95403656ab9b6f9b5475"
  },
  {
    "url": "assets/js/49.612343f4.js",
    "revision": "d2477d8be35e137f25e5b1aa1954941c"
  },
  {
    "url": "assets/js/5.e225a39c.js",
    "revision": "8c5751fd7dc328295b555e7d89e9505e"
  },
  {
    "url": "assets/js/50.63c7088e.js",
    "revision": "7621b2b6cc5f284bf13e4450fb7bdaa8"
  },
  {
    "url": "assets/js/51.e43333f0.js",
    "revision": "896bb885817a7d58f26c9349d6f72a53"
  },
  {
    "url": "assets/js/52.b71da9b6.js",
    "revision": "67c1ed93131e6d14bb3be39fc14b51e2"
  },
  {
    "url": "assets/js/53.949344c1.js",
    "revision": "d0786a7eb5742b3c575ed3604ad1a342"
  },
  {
    "url": "assets/js/54.7bd4173f.js",
    "revision": "b6bd13fdd51de3fa3ec6c8e496b183ba"
  },
  {
    "url": "assets/js/55.05ff76a5.js",
    "revision": "615742f59ad10aab14d5e233e8872d99"
  },
  {
    "url": "assets/js/56.5eda1936.js",
    "revision": "e1d5f864f5b17777dc84b65e8379ef3d"
  },
  {
    "url": "assets/js/57.a67d1bae.js",
    "revision": "f12b2e52e1445c451207592130facf46"
  },
  {
    "url": "assets/js/58.3117b023.js",
    "revision": "ba46b6a50bccc774ac280c4c8cdceaf0"
  },
  {
    "url": "assets/js/59.8f31abc7.js",
    "revision": "1ed9b102daedd4757562b1ba9e9b4147"
  },
  {
    "url": "assets/js/6.9dc3f8d2.js",
    "revision": "1b3086cab9f4d2fdeccfc6ca19294ddc"
  },
  {
    "url": "assets/js/60.d9f1df64.js",
    "revision": "019cdec6b37b6fcdef52b4228a0d56fb"
  },
  {
    "url": "assets/js/61.3964f8b7.js",
    "revision": "1ff5f3e25fc56fc450525406d6ff8927"
  },
  {
    "url": "assets/js/62.9d2bde55.js",
    "revision": "380a31b79dd18d40fc387ca3b6d30093"
  },
  {
    "url": "assets/js/63.8657cfee.js",
    "revision": "297e369f2c49bc727f3d87e8f95b8d01"
  },
  {
    "url": "assets/js/64.7129c904.js",
    "revision": "b27fadb179f1fe9dfaf1daafbdec5e2a"
  },
  {
    "url": "assets/js/65.62988d0d.js",
    "revision": "aaa3dc268dc73d80a5627fe4b63f0085"
  },
  {
    "url": "assets/js/66.3edcf946.js",
    "revision": "f526f28fccbf7e723f7bcdb476e98936"
  },
  {
    "url": "assets/js/67.79302862.js",
    "revision": "8e98b0dd703e6cb7ae6040e4682b26e3"
  },
  {
    "url": "assets/js/68.94a7a53e.js",
    "revision": "0bbd9bbf36ced364317fc46c375e7af9"
  },
  {
    "url": "assets/js/69.9bbf55ef.js",
    "revision": "ff2fb54d9043c1badc462f56a2009475"
  },
  {
    "url": "assets/js/7.9219165b.js",
    "revision": "8406ed48c2ff906a672463acc5b03a32"
  },
  {
    "url": "assets/js/70.ad19f8da.js",
    "revision": "03b0ace0cddb3e46db9bc2f767dc3acb"
  },
  {
    "url": "assets/js/71.83fe2048.js",
    "revision": "290fdfc5729be5a824c6a4574dc3bf4c"
  },
  {
    "url": "assets/js/8.f4639990.js",
    "revision": "2da1fa3723a704480433d319ae1f0b03"
  },
  {
    "url": "assets/js/9.07e8427e.js",
    "revision": "910aa03d437d90f832b6bec78bfed2ea"
  },
  {
    "url": "assets/js/app.b65b76e3.js",
    "revision": "12dbc6f1e863405ff5a3eaf60c4847e5"
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
    "revision": "0a58fe58cda749ed973ef5695ec0feb9"
  },
  {
    "url": "Policies/G01.html",
    "revision": "9706d62a8558637c57ed0a034626f5dd"
  },
  {
    "url": "Policies/G02.html",
    "revision": "0b6a442f180d03c925a08798a24e3bc1"
  },
  {
    "url": "Policies/G02Appendix01.html",
    "revision": "633c89ef93c7607de7560c9777cdf433"
  },
  {
    "url": "Policies/G02Appendix02.html",
    "revision": "63fd7a0965d5dde9bd684e2ec998bda5"
  },
  {
    "url": "Policies/G03.html",
    "revision": "0017d298eeef29690574f900d6555b60"
  },
  {
    "url": "Policies/G04.html",
    "revision": "ad9e42f2623b4dbe5221e771d5922fd1"
  },
  {
    "url": "Policies/G05.html",
    "revision": "e637d047c433a6b741e2a7569e1ccb15"
  },
  {
    "url": "Policies/G06.html",
    "revision": "069271fbb8825762c92fe00ed588804d"
  },
  {
    "url": "Policies/HR01.html",
    "revision": "1c41a782736961f0ee9536efc4bab2a2"
  },
  {
    "url": "Policies/HR01Appendix01.html",
    "revision": "6b220043698e295df0c5f0eea108bdee"
  },
  {
    "url": "Policies/HR01Appendix02.html",
    "revision": "f49006955663fcf58c2d6ec9d0f7c1d0"
  },
  {
    "url": "Policies/HR01Appendix05.html",
    "revision": "188f0daaba1ba7a9c2ddf52e375fbcaa"
  },
  {
    "url": "Policies/HR01Appendix06.html",
    "revision": "200cd15ab249d2974e08a84355745318"
  },
  {
    "url": "Policies/HR01Appendix07.html",
    "revision": "36d1fef101273b3bb97124b5258ba7aa"
  },
  {
    "url": "Policies/HR01Appendix08.html",
    "revision": "b14972a5d636f19722ae29288942f0fb"
  },
  {
    "url": "Policies/HR02.html",
    "revision": "a26e871c103eb0fed96020765afc4890"
  },
  {
    "url": "Policies/HR02Appendix01.html",
    "revision": "26979aa5d6dd6124c0dc0e7eec7a1912"
  },
  {
    "url": "Policies/HR02Appendix02.html",
    "revision": "d213a7c28e9d95f30929b5f1b9887ebc"
  },
  {
    "url": "Policies/HR02Appendix03.html",
    "revision": "bf03c0dcbbba29ca37115872fb5010fd"
  },
  {
    "url": "Policies/HR03.html",
    "revision": "a729684da1dd3506c2ffd0a5a95481a1"
  },
  {
    "url": "Policies/HS01.html",
    "revision": "f8846802f135a038e0020a76e0784625"
  },
  {
    "url": "Policies/HS01Appendix01.html",
    "revision": "9d07469e797b9bcee377603548e8f1c8"
  },
  {
    "url": "Policies/HS01Appendix02.html",
    "revision": "8ddc33b0b0199fa6275c13b13b2419f8"
  },
  {
    "url": "Policies/HS01Appendix03.html",
    "revision": "2625ff70e97fa0ea400a1234c0f46096"
  },
  {
    "url": "Policies/HS01Appendix04.html",
    "revision": "ed35f72a24bf79e93376ac4f4c0c9f8b"
  },
  {
    "url": "Policies/HS01Appendix05.html",
    "revision": "3af6213c9db1e6ee042d56f47fc3fecd"
  },
  {
    "url": "Policies/HS02.html",
    "revision": "a56e339702bba98962e2a0f40c4bce1d"
  },
  {
    "url": "Policies/HS02Appendix01.html",
    "revision": "9bfd097f3edf7b7012b0d380875bbec9"
  },
  {
    "url": "Policies/HS02Appendix02.html",
    "revision": "6b9999bddc907b083b2c6603238cbe61"
  },
  {
    "url": "Policies/HS02Appendix03.html",
    "revision": "99251fbf227fd24463c4a90a572a5b20"
  },
  {
    "url": "Policies/HS02Appendix04.html",
    "revision": "acd73606e40bea8cd093ec839e8a4c61"
  },
  {
    "url": "Policies/index.html",
    "revision": "ba49a037917c60dfcecaf9e75bb2da70"
  },
  {
    "url": "Policies/OP01.html",
    "revision": "31acc0f71ab0d453dce012c4933c96c8"
  },
  {
    "url": "Policies/OP01Appendix01.html",
    "revision": "c127fe94678c6bd108dedf611b4c836f"
  },
  {
    "url": "Policies/OP01Appendix02.html",
    "revision": "0ffda21ca55a0f0dfacb481924565573"
  },
  {
    "url": "Policies/OP01Appendix03.html",
    "revision": "6d5d18359b7d396494f380955543ff52"
  },
  {
    "url": "Policies/OP02.html",
    "revision": "666fe075c572329d8231b5e88c97d36a"
  },
  {
    "url": "Policies/OP03.1.html",
    "revision": "97aaff42f7274d22cff1ab852d9f0405"
  },
  {
    "url": "Policies/OP03.1Appendix04.html",
    "revision": "6c7feb94fedb4f78171be0559a8578ba"
  },
  {
    "url": "Policies/OP03.1Appendix05.html",
    "revision": "557c3df91d8b07dea8f2c04002b89c7b"
  },
  {
    "url": "Policies/OP03.1Appendix06.html",
    "revision": "6e6a2638abd807ef30ec031607de8d3b"
  },
  {
    "url": "Policies/OP03.html",
    "revision": "79b926aeef45895009acfbadea50cc15"
  },
  {
    "url": "Policies/OP03Appendix01.html",
    "revision": "3a8fef48b24fcbda9b6efb0ec9346063"
  },
  {
    "url": "Policies/OP03Appendix02.html",
    "revision": "17f07ee8743bef46f5a0b4786863052b"
  },
  {
    "url": "Policies/OP04.html",
    "revision": "6febac3aa46a8effa173f23c75b78abf"
  },
  {
    "url": "Policies/OP04Appendix01.html",
    "revision": "e550819c731789319316ed4a8e1d94bf"
  },
  {
    "url": "Policies/OP04Appendix02.html",
    "revision": "f632e1fa49fd8ff00673c53d9e638638"
  },
  {
    "url": "Policies/OP05.html",
    "revision": "f7d5eefab9f222c3b9deb17b2c892ef3"
  },
  {
    "url": "Policies/OP06.html",
    "revision": "77c11ae3489262c6261bf6632605be74"
  },
  {
    "url": "Policies/OP06Appendix01.html",
    "revision": "b326d9d62f6b3846e3bb35d6313c43ba"
  },
  {
    "url": "Policies/OP06Appendix02.html",
    "revision": "d5ce83de369ab306cb87018984eb4f03"
  },
  {
    "url": "Policies/OP06Appendix03.html",
    "revision": "ee3637d0d1131ed2f863383b588c60d2"
  },
  {
    "url": "Policies/OP07.html",
    "revision": "48a2fc0e33d91439f63715cc7b6d5a16"
  },
  {
    "url": "Policies/OP07Appendix01.html",
    "revision": "235600617f306a5557b0786d33bf225a"
  },
  {
    "url": "Policies/OP07Appendix02.html",
    "revision": "4f15971cfcb051613c16f8f761678343"
  },
  {
    "url": "Policies/OP07Appendix03.html",
    "revision": "63dc1711244e3e1720b79309bf3ae267"
  },
  {
    "url": "Policies/OP07Appendix04.html",
    "revision": "4d0f5d8cc3cdae710096ed2104285330"
  },
  {
    "url": "Policies/OP07Appendix05.html",
    "revision": "30db2493b3f1ef74060cded8a1bfa27d"
  },
  {
    "url": "Policies/OP07Appendix06.html",
    "revision": "df849483e928cd7ec7a845f59785f59e"
  },
  {
    "url": "Policies/OP09.html",
    "revision": "864c99a6cd959bb1673a4233d7f9ceb6"
  },
  {
    "url": "Policies/OP09Appendix01.html",
    "revision": "369e030a7fbbb6114b4c543b829389c0"
  },
  {
    "url": "Policies/OP09Appendix02.html",
    "revision": "835d3c47fbad428772b4f23cbb910a5d"
  },
  {
    "url": "Policies/OP09Appendix03.html",
    "revision": "106bf5e69b6db872bdaa37f7a496211f"
  },
  {
    "url": "Policies/OP10.html",
    "revision": "3166dd9f8b350847b20ebb5c3f0a08ce"
  },
  {
    "url": "Policies/OP11.html",
    "revision": "d6801b50952db5c44f4a10728fd930cc"
  },
  {
    "url": "Policies/OP12.html",
    "revision": "7209d16317801173a1f4950871d6fb94"
  },
  {
    "url": "Policies/OP12Appendix01.html",
    "revision": "0b446877093ed27ec74d5b2cead452be"
  },
  {
    "url": "Policies/OP12Appendix02.html",
    "revision": "7fe21c80f1e0f3562c0050cd5d502584"
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
