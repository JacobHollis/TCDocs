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
    "revision": "7f8a8b1c50949445f77d6b72d8492373"
  },
  {
    "url": "assets/css/1.styles.8b019237.css",
    "revision": "bd2953ae21f32746ddb8402e019843e8"
  },
  {
    "url": "assets/css/2.styles.6b7569cb.css",
    "revision": "658262901bc10d9dfb2774a90d71fb81"
  },
  {
    "url": "assets/css/styles.666623df.css",
    "revision": "2b73208f0c3df4a8f6981ac468d1aac3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.8b019237.js",
    "revision": "f8f986ad5c273ef87d06e240c268608d"
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
    "url": "assets/js/12.4404f638.js",
    "revision": "50114327094f71ff4fffd826ed86d5db"
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
    "url": "assets/js/17.06111c62.js",
    "revision": "7a4956d5098a47b5b7fc4460bbdadf96"
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
    "url": "assets/js/25.b4d1408d.js",
    "revision": "e97ca7be555758b6fefb230b37471c9b"
  },
  {
    "url": "assets/js/26.557ecb21.js",
    "revision": "c6ce26b109ff63c4af6d731c5175d40e"
  },
  {
    "url": "assets/js/27.eb27eceb.js",
    "revision": "a8ab08d736c3818f980989fabbec3e51"
  },
  {
    "url": "assets/js/28.4ba11b53.js",
    "revision": "4102e94e4515826efe85702dc770c7ea"
  },
  {
    "url": "assets/js/29.76ef06fe.js",
    "revision": "350e1d91b3be352cedfa5344f9f69c7b"
  },
  {
    "url": "assets/js/3.b11019d4.js",
    "revision": "39397130238ae9abab37e5420dd45b90"
  },
  {
    "url": "assets/js/30.3ce65b25.js",
    "revision": "cbf47cb1975462ec0f7915312fb52820"
  },
  {
    "url": "assets/js/31.89faf03b.js",
    "revision": "23a6554ca7568b5a784c56b07ea64726"
  },
  {
    "url": "assets/js/32.32d7a8cc.js",
    "revision": "a5cd21201dcf3ed6ed422234760f68f0"
  },
  {
    "url": "assets/js/33.49cb7c2c.js",
    "revision": "e5260ed44e0d4d1017b2ebfb3f0d24ed"
  },
  {
    "url": "assets/js/34.a8ef4d52.js",
    "revision": "f3f9819f3b62d279f06078928f913bb3"
  },
  {
    "url": "assets/js/35.6f56fc66.js",
    "revision": "a96fcb2e8d35b5f8c8d783b6c96e3a39"
  },
  {
    "url": "assets/js/36.572a3cf8.js",
    "revision": "b3a75714c080093f3a38bf00fababfca"
  },
  {
    "url": "assets/js/37.ba5acb4e.js",
    "revision": "30f5a1c1fa63696b084dc1cd629a79fd"
  },
  {
    "url": "assets/js/38.f7d20cc4.js",
    "revision": "e115dcbf05cff44140baacfbe55002f8"
  },
  {
    "url": "assets/js/39.b8a757ba.js",
    "revision": "d48aacae1330d44383deb3b3a0377c69"
  },
  {
    "url": "assets/js/4.ed630309.js",
    "revision": "e68514aa9fe0800541a787d035f8822e"
  },
  {
    "url": "assets/js/40.33464540.js",
    "revision": "0202c69a573902c2334913788d4c8a83"
  },
  {
    "url": "assets/js/41.66fee363.js",
    "revision": "dee6d71cda858acbfcf8cecbaa171d64"
  },
  {
    "url": "assets/js/42.73a998cf.js",
    "revision": "1a30904b761b8266c22a8eb67eb4407c"
  },
  {
    "url": "assets/js/43.f0aee5c1.js",
    "revision": "91a98dc0b955b450acd180dd88925cd5"
  },
  {
    "url": "assets/js/44.fe0c4c0a.js",
    "revision": "0fa54aeca0c18782d0fa84ab0cffcc7b"
  },
  {
    "url": "assets/js/45.64d482f0.js",
    "revision": "55c333f085f4214033e37d7fdfb6e050"
  },
  {
    "url": "assets/js/46.6d99e39a.js",
    "revision": "c0828d3c177e0fc66bce32779ddf174c"
  },
  {
    "url": "assets/js/47.61ad32b7.js",
    "revision": "57870ffc2c344870834ea362d46141d5"
  },
  {
    "url": "assets/js/48.557eb84a.js",
    "revision": "f93642e272affa4abeb773c1a02fa883"
  },
  {
    "url": "assets/js/49.6e923962.js",
    "revision": "bfe10fd68554d76234522a3f1cbaa7e4"
  },
  {
    "url": "assets/js/5.bbd4e421.js",
    "revision": "7dfe6cf88643cb1f41b73de35c0b0740"
  },
  {
    "url": "assets/js/50.323d9fe1.js",
    "revision": "ea7c7d5b099a84ce41cdc72cbdd95f1c"
  },
  {
    "url": "assets/js/51.4785b13c.js",
    "revision": "db5e66463132bc4498e7f705c02d64aa"
  },
  {
    "url": "assets/js/52.f32d762c.js",
    "revision": "cdd2fdc19380cb260f643ba08919c1c8"
  },
  {
    "url": "assets/js/53.550594ce.js",
    "revision": "425d934a2f11b8634a4fc6729dc4d0ec"
  },
  {
    "url": "assets/js/54.3a7028db.js",
    "revision": "898f371c485b5132910730de0d2012f9"
  },
  {
    "url": "assets/js/55.a002bd32.js",
    "revision": "1010913cbb70bc2a0bde73333059dba8"
  },
  {
    "url": "assets/js/56.e47983b0.js",
    "revision": "711c74612cd374280af0b3c647233546"
  },
  {
    "url": "assets/js/57.09d0ff1e.js",
    "revision": "aaeba7611491a053b01fc86440c9ddd3"
  },
  {
    "url": "assets/js/58.2c1a10fc.js",
    "revision": "c106707dec6b6b39eb2bf6d5b62192b6"
  },
  {
    "url": "assets/js/59.b7de909b.js",
    "revision": "3e1b6a1f7e8bfe3e5f92d09a8ebdff43"
  },
  {
    "url": "assets/js/6.71789e6e.js",
    "revision": "ce2f28c132da43816d1196af05d11147"
  },
  {
    "url": "assets/js/60.99267e86.js",
    "revision": "02d1c440c0d9cd4f7ed1f440175e4c3e"
  },
  {
    "url": "assets/js/61.d4179240.js",
    "revision": "8647392a9364280419183ab79ea7ffbd"
  },
  {
    "url": "assets/js/62.4015a2e5.js",
    "revision": "61bea2b3401cbbbf3234bfba3ba3fdd3"
  },
  {
    "url": "assets/js/63.3c1a617f.js",
    "revision": "5bc0581798ff48d9777317b567bbadeb"
  },
  {
    "url": "assets/js/64.0d651534.js",
    "revision": "ac4113747da984a81292104e72413be7"
  },
  {
    "url": "assets/js/65.578df27d.js",
    "revision": "83002b68d9e74c45b64d5698eb1725f8"
  },
  {
    "url": "assets/js/66.a1625715.js",
    "revision": "35c98bdcba259a41f8c78a64d8ee2d57"
  },
  {
    "url": "assets/js/67.0240746a.js",
    "revision": "bd5fb245136267e0f1241e2df85f2c81"
  },
  {
    "url": "assets/js/68.9c110e1a.js",
    "revision": "e98f3e4ac1b77671d5d6805b72d216d0"
  },
  {
    "url": "assets/js/69.c7b0a7a0.js",
    "revision": "1ccfbe3c65e5a9003d0c1af1c1f586cc"
  },
  {
    "url": "assets/js/7.e655be38.js",
    "revision": "05dfca1f15b5f79933970846532702bb"
  },
  {
    "url": "assets/js/70.5f5866b5.js",
    "revision": "cdbeeb57b0be7d19e2d72e283ac9b963"
  },
  {
    "url": "assets/js/71.e85bbeab.js",
    "revision": "55343fc4faaf2b26db48d5910d864e46"
  },
  {
    "url": "assets/js/72.40a43bf2.js",
    "revision": "da5035ff49e37e24b8e2f20c299bb40c"
  },
  {
    "url": "assets/js/73.285f8818.js",
    "revision": "893af7f4ec6e516a0039726a53d3998d"
  },
  {
    "url": "assets/js/74.9eacff2e.js",
    "revision": "00b2c3d5b17193af61393bad5768527c"
  },
  {
    "url": "assets/js/75.f3f0a3e5.js",
    "revision": "dba375ceece7fa706fedb64d6c85626b"
  },
  {
    "url": "assets/js/76.90d35aba.js",
    "revision": "c42af323f3c8f17c1040f13add5d8cde"
  },
  {
    "url": "assets/js/77.2b007318.js",
    "revision": "749dd176670d92c7ae394dc17490818d"
  },
  {
    "url": "assets/js/78.d88e3387.js",
    "revision": "51865ad235253a08bab8350fc790d573"
  },
  {
    "url": "assets/js/8.959aaa98.js",
    "revision": "227f0e8843fea973c88b7bc86a34b85a"
  },
  {
    "url": "assets/js/9.7db777a4.js",
    "revision": "1fa09326ade2c57f75d0eab10da063d6"
  },
  {
    "url": "assets/js/app.666623df.js",
    "revision": "4f45cf123be6095ad159801cfde3e7f5"
  },
  {
    "url": "Handbook/index.html",
    "revision": "72bc39e351fbee552ecfe26a0aa667e7"
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
    "revision": "b8c6b522a813fa3d28c5c8dd8ce8fcd1"
  },
  {
    "url": "Policies/G01.html",
    "revision": "a63e51c73af5a2d7190c8d42ce095f78"
  },
  {
    "url": "Policies/G02.html",
    "revision": "56b2a7fe37e95c695c24b37fd1ecf34e"
  },
  {
    "url": "Policies/G02Appendix01.html",
    "revision": "d48459cd2a05a409b0fecb5e6d95cbe9"
  },
  {
    "url": "Policies/G02Appendix02.html",
    "revision": "3d8895b3c87c0f70bac95341dfc00d3f"
  },
  {
    "url": "Policies/G03.html",
    "revision": "13686b97492c839b05b951765fdf36ba"
  },
  {
    "url": "Policies/G04.html",
    "revision": "ec2f70e49fb8ba815234e9ced78c8cec"
  },
  {
    "url": "Policies/G05.html",
    "revision": "01cf588356906595658bd55fc24fd09c"
  },
  {
    "url": "Policies/G06.html",
    "revision": "6c2deafd3553efa145fd3603ff1dcd3b"
  },
  {
    "url": "Policies/HR01.html",
    "revision": "43767649bde97e893bb8f394f6606ebf"
  },
  {
    "url": "Policies/HR01Appendix01.html",
    "revision": "59eabc5d17baeb7345758ce9593abb77"
  },
  {
    "url": "Policies/HR01Appendix02.html",
    "revision": "81b79c3aaa3c08297a3d9bc16f73c8ab"
  },
  {
    "url": "Policies/HR01Appendix05.html",
    "revision": "a2687edd3600479f2f594dfc849bf427"
  },
  {
    "url": "Policies/HR01Appendix06.html",
    "revision": "ac4e3fa0bfb09d3eaa709a24263c02a8"
  },
  {
    "url": "Policies/HR01Appendix07.html",
    "revision": "121b66587dccb2c54e03e659ee86b5be"
  },
  {
    "url": "Policies/HR01Appendix08.html",
    "revision": "d43d375750fe9a8e0184fd7ec26d3d45"
  },
  {
    "url": "Policies/HR02.html",
    "revision": "92b0280383dee01df3158a4649f1ff53"
  },
  {
    "url": "Policies/HR02Appendix01.html",
    "revision": "df931e38136414b44d82744ab2f75298"
  },
  {
    "url": "Policies/HR02Appendix02.html",
    "revision": "fe2ca9aacd9560801a0c09a05b6470e3"
  },
  {
    "url": "Policies/HR02Appendix03.html",
    "revision": "2c2ceada3cba7acafaa75c7183fc7597"
  },
  {
    "url": "Policies/HR03.html",
    "revision": "d451859650f3cb49b771bf853f982359"
  },
  {
    "url": "Policies/HS01.html",
    "revision": "16b5476a1adabdc5e21263534b96bb2a"
  },
  {
    "url": "Policies/HS01Appendix01.html",
    "revision": "048c2961ca10d4d51af134bcd438587d"
  },
  {
    "url": "Policies/HS01Appendix02.html",
    "revision": "0b5d7da9d514d62b0f9be691e7435da8"
  },
  {
    "url": "Policies/HS01Appendix03.html",
    "revision": "a921853a7a130a2006ccd6e57ebab783"
  },
  {
    "url": "Policies/HS01Appendix04.html",
    "revision": "9475ea1cb39e92d9228b3176123f344e"
  },
  {
    "url": "Policies/HS01Appendix05.html",
    "revision": "c9c0f2b1cd656090594d164748dd6dff"
  },
  {
    "url": "Policies/HS02.html",
    "revision": "f2710c87cb97552d8fb3be43a937df13"
  },
  {
    "url": "Policies/HS02Appendix01.html",
    "revision": "58192d6da0e284c7a970eca418138070"
  },
  {
    "url": "Policies/HS02Appendix02.html",
    "revision": "882981321178921cd1329b2234cb4af5"
  },
  {
    "url": "Policies/HS02Appendix03.html",
    "revision": "18ee216d55032562f3365824ce71f6ae"
  },
  {
    "url": "Policies/HS02Appendix04.html",
    "revision": "83b8ec8fb5f676495ea9b366426a4316"
  },
  {
    "url": "Policies/index.html",
    "revision": "61f6ee545c94af5c39a40c856e5e82a4"
  },
  {
    "url": "Policies/OP01.html",
    "revision": "2a71d2ead2094fad209d6d4bf95e3b99"
  },
  {
    "url": "Policies/OP01Appendix01.html",
    "revision": "b3c0c299ba5a8132fb5ac07bf7966d81"
  },
  {
    "url": "Policies/OP01Appendix02.html",
    "revision": "088b76cd4fc8d8e4a12bdd2798abd78f"
  },
  {
    "url": "Policies/OP01Appendix03.html",
    "revision": "1d8c26fecb27e95e4c397d44a22c80d0"
  },
  {
    "url": "Policies/OP02.html",
    "revision": "50b265851ee24febbdd53792a84e5ea2"
  },
  {
    "url": "Policies/OP03.1.html",
    "revision": "7c0adc3e7ec71be6ed262380476a4d9a"
  },
  {
    "url": "Policies/OP03.1Appendix04.html",
    "revision": "75b819a033783b92d84d74b872bd3af0"
  },
  {
    "url": "Policies/OP03.1Appendix05.html",
    "revision": "f1fa5a9251a12807b51ab76601858c11"
  },
  {
    "url": "Policies/OP03.1Appendix06.html",
    "revision": "3b5a8804d8769e6c7ee644c3a5779206"
  },
  {
    "url": "Policies/OP03.html",
    "revision": "df1425e4ab5f561692a2a7734e0d87b4"
  },
  {
    "url": "Policies/OP03Appendix01.html",
    "revision": "b4ca26cf29439868aa046a9d4131bdf0"
  },
  {
    "url": "Policies/OP03Appendix02.html",
    "revision": "60faeceb50497cf9a1a5e37dfb278fdf"
  },
  {
    "url": "Policies/OP04.html",
    "revision": "8577822f0057ef1afca72fc8b116b332"
  },
  {
    "url": "Policies/OP04Appendix01.html",
    "revision": "ad5eb0325c5ed418ebe09884d98204ff"
  },
  {
    "url": "Policies/OP04Appendix02.html",
    "revision": "558a6b806ad886ff669fd267cc0f6e27"
  },
  {
    "url": "Policies/OP05.html",
    "revision": "f621ee451214d60dfdb44e9d14158422"
  },
  {
    "url": "Policies/OP05Appendix01.html",
    "revision": "8faf5b44797aadb8591c2786f7079eed"
  },
  {
    "url": "Policies/OP05Appendix02.html",
    "revision": "a94ffa95f08a1669182cd6ff1b238b4c"
  },
  {
    "url": "Policies/OP05Appendix03.html",
    "revision": "d62b0d5d3d5131b86f00a0997c12484a"
  },
  {
    "url": "Policies/OP05Appendix04.html",
    "revision": "f14459052e6e990bfc5199564f6e71f7"
  },
  {
    "url": "Policies/OP05Appendix05.html",
    "revision": "78c5bbbf071a5b26013d8c36d3f73ac3"
  },
  {
    "url": "Policies/OP06.html",
    "revision": "50f78f14379992c50664e9c43f7410ad"
  },
  {
    "url": "Policies/OP06Appendix01.html",
    "revision": "ec17dbcd099aba437244622c97b3d20e"
  },
  {
    "url": "Policies/OP06Appendix02.html",
    "revision": "64a7f6eb8470c43648f35991a92a8cf1"
  },
  {
    "url": "Policies/OP06Appendix03.html",
    "revision": "7244f8091759cc275440d19580828a04"
  },
  {
    "url": "Policies/OP07.html",
    "revision": "b6347f1b84c2bfa0e43ea77dbca129f7"
  },
  {
    "url": "Policies/OP07Appendix01.html",
    "revision": "482c43cb836d61cb4f86e86bd9ad3dc0"
  },
  {
    "url": "Policies/OP07Appendix02.html",
    "revision": "6519cecf64fc659e9dd2ad806f81a3a1"
  },
  {
    "url": "Policies/OP07Appendix03.html",
    "revision": "795a37aa42f1686a0324a5cfcde140ca"
  },
  {
    "url": "Policies/OP07Appendix04.html",
    "revision": "45f25d67cba918c2f0e4a8634e64071f"
  },
  {
    "url": "Policies/OP07Appendix05.html",
    "revision": "a6e15e0d756e135a9ee93ece96b9895e"
  },
  {
    "url": "Policies/OP07Appendix06.html",
    "revision": "7c79d7fbd55f6623764fcb9daff67976"
  },
  {
    "url": "Policies/OP09.html",
    "revision": "0e1f9ed21f5cc5516da8513b95d6c482"
  },
  {
    "url": "Policies/OP09Appendix01.html",
    "revision": "070fb59e9a6d6e02c11295915b60a997"
  },
  {
    "url": "Policies/OP09Appendix02.html",
    "revision": "ed6a6624e60a1702cff37b8fdefa6fbb"
  },
  {
    "url": "Policies/OP09Appendix03.html",
    "revision": "5323d70a3236856c1933e159cdd4a1d3"
  },
  {
    "url": "Policies/OP09Appendix04.html",
    "revision": "c164b16e04d04c65171d362ac1966dc0"
  },
  {
    "url": "Policies/OP10.html",
    "revision": "911bea29a62ed8b63c40e736561ac5a6"
  },
  {
    "url": "Policies/OP11.html",
    "revision": "9ddeafc54447b81cf9f5c3df4e6255c5"
  },
  {
    "url": "Policies/OP12.html",
    "revision": "6e2fe84dfdf2910633870011cd7423b3"
  },
  {
    "url": "Policies/OP12Appendix01.html",
    "revision": "54fee80daf82a8e51f334218db03185c"
  },
  {
    "url": "Policies/OP12Appendix02.html",
    "revision": "c2599cad8db712ed21fab76548d7b7d3"
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
