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
    "revision": "77868cea589442a08e298171623c3bcb"
  },
  {
    "url": "assets/css/1.styles.6a915f26.css",
    "revision": "bd2953ae21f32746ddb8402e019843e8"
  },
  {
    "url": "assets/css/2.styles.6b7569cb.css",
    "revision": "658262901bc10d9dfb2774a90d71fb81"
  },
  {
    "url": "assets/css/styles.bf595af1.css",
    "revision": "2b73208f0c3df4a8f6981ac468d1aac3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.6a915f26.js",
    "revision": "765123e84340c0dc69c72a3a4018b514"
  },
  {
    "url": "assets/js/10.741b980e.js",
    "revision": "448e0e654df657e12838e35a2bfb7e66"
  },
  {
    "url": "assets/js/11.127108ad.js",
    "revision": "92b767987f8adae4407acc7574959355"
  },
  {
    "url": "assets/js/12.6cfc4503.js",
    "revision": "660643f776fccbffd809eea13e01889c"
  },
  {
    "url": "assets/js/13.dca82bec.js",
    "revision": "78f4c554a1f04dd0d14e49285d93c3e5"
  },
  {
    "url": "assets/js/14.85e9265b.js",
    "revision": "a13f4d760b2927a991f4dcc3efe18b1d"
  },
  {
    "url": "assets/js/15.e071a9c3.js",
    "revision": "64f37badf4d9856634b971f976521b2c"
  },
  {
    "url": "assets/js/16.37b45aa5.js",
    "revision": "b27867f89353907c55b137c54429168b"
  },
  {
    "url": "assets/js/17.64540ead.js",
    "revision": "d5a9f504e66b1ffd164acd59636120a9"
  },
  {
    "url": "assets/js/18.c712c865.js",
    "revision": "1223576d14fef245a39787033184f293"
  },
  {
    "url": "assets/js/19.4373e8f1.js",
    "revision": "7caf7329234b69be8dbd685d831edb23"
  },
  {
    "url": "assets/js/2.6b7569cb.js",
    "revision": "fe333b391aa7529e7228c22d5c70f516"
  },
  {
    "url": "assets/js/20.46ed6809.js",
    "revision": "f4a6c919f59d132c1ab6de693d14f7ba"
  },
  {
    "url": "assets/js/21.82d816ca.js",
    "revision": "2b505d2a7879e2161e6f3f720af45a03"
  },
  {
    "url": "assets/js/22.2f0e7b11.js",
    "revision": "e7d56152b498dd6ef982b9da704cbd33"
  },
  {
    "url": "assets/js/23.4fdb674f.js",
    "revision": "db2180039b8ee69a1a54f8c7413dfb25"
  },
  {
    "url": "assets/js/24.620bb395.js",
    "revision": "4fa25e09d5cbd0401195fbaf096a203c"
  },
  {
    "url": "assets/js/25.e2a41884.js",
    "revision": "1847973640a05af339c037204ac8d24a"
  },
  {
    "url": "assets/js/26.7c0939c1.js",
    "revision": "3382ca5d59fb516d5e5cd5f080c5a7c2"
  },
  {
    "url": "assets/js/27.62986a22.js",
    "revision": "6370bc0bd05acecbd5b3ccd522c1c328"
  },
  {
    "url": "assets/js/28.a77716af.js",
    "revision": "0300072dd6a2a7c29c5daa5ac03c1262"
  },
  {
    "url": "assets/js/29.86ad3a8f.js",
    "revision": "5fcb47a60702a4e441f8460f28de4223"
  },
  {
    "url": "assets/js/3.6f4dbedb.js",
    "revision": "187adf847376255159e1011e705d915e"
  },
  {
    "url": "assets/js/30.f9a57912.js",
    "revision": "fa83823c8d430b5a30acb91d86debb39"
  },
  {
    "url": "assets/js/31.c82ec1c7.js",
    "revision": "e3f172d283ec698c7f336b71a2321bfa"
  },
  {
    "url": "assets/js/32.e961b72d.js",
    "revision": "1dea56aebb0d1277ecd2f3f60bab94c4"
  },
  {
    "url": "assets/js/33.819da064.js",
    "revision": "d93f73b6eec5de14cc260785ca98f323"
  },
  {
    "url": "assets/js/34.02c042ea.js",
    "revision": "e9f217eac4f80d38943da1668abb368b"
  },
  {
    "url": "assets/js/35.a2e12e80.js",
    "revision": "cf6d98faacbfceb937c40d29dbc65c0b"
  },
  {
    "url": "assets/js/36.3a1ef1c2.js",
    "revision": "79794bbfe91437da87cd8b7eeb9a7fa6"
  },
  {
    "url": "assets/js/37.468aa7f2.js",
    "revision": "a943504f7945984b50c96e59cc0e4e7d"
  },
  {
    "url": "assets/js/38.bd5fb755.js",
    "revision": "f3855c80aa8e1c56b07e70cddc0ea0ea"
  },
  {
    "url": "assets/js/39.791116da.js",
    "revision": "7d564a0e4cc3414a8945f02dfadd1138"
  },
  {
    "url": "assets/js/4.182fc513.js",
    "revision": "cd3134baba8c185739d6740b549371ac"
  },
  {
    "url": "assets/js/40.e9fd9ccc.js",
    "revision": "0d09eece5dd8410cf3347c050b4fdc12"
  },
  {
    "url": "assets/js/41.d058747a.js",
    "revision": "07c5b358b66c7757db5ffcbf33b77863"
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
    "url": "assets/js/49.5b92a727.js",
    "revision": "916ce6914d332233e4a105dcbbe92b88"
  },
  {
    "url": "assets/js/5.512a2fff.js",
    "revision": "e0aa2ee1e3c04030eb2f1326d64ad73d"
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
    "url": "assets/js/54.48254e22.js",
    "revision": "a694356b2d00be667ddbb4ff3bf8b787"
  },
  {
    "url": "assets/js/55.c264e7dc.js",
    "revision": "4287c5562d316e027ad41ec00838cab5"
  },
  {
    "url": "assets/js/56.7cbba71a.js",
    "revision": "12f213bb0fc5d13ad4b227d5a19b7be0"
  },
  {
    "url": "assets/js/57.dc23db5e.js",
    "revision": "adcb27970a463ff2a1d5b0c38973e6f7"
  },
  {
    "url": "assets/js/58.bef0cce7.js",
    "revision": "86d376cee34f202048269abfbe04bfee"
  },
  {
    "url": "assets/js/59.0b72ea1b.js",
    "revision": "683d0b48254af2d2f04e00203375e37a"
  },
  {
    "url": "assets/js/6.c9731032.js",
    "revision": "027efd7963ede3802ee687c0bee480bf"
  },
  {
    "url": "assets/js/60.869be5c4.js",
    "revision": "f11fb61e978bd2671315ee94098a6820"
  },
  {
    "url": "assets/js/61.75f15e8f.js",
    "revision": "7fed1a178a41d7a484f33c3eac08f053"
  },
  {
    "url": "assets/js/62.f3cf24d7.js",
    "revision": "2cd182548ddd9ec623794b2f9a9bcee2"
  },
  {
    "url": "assets/js/63.3096ab14.js",
    "revision": "8389a0a3f8afa75a80bf31b5be497862"
  },
  {
    "url": "assets/js/64.43bdb77d.js",
    "revision": "51251030418439ee587df9a2d1cd3bab"
  },
  {
    "url": "assets/js/65.bcea3a5d.js",
    "revision": "e62a397b701583518d0538e531a09d7c"
  },
  {
    "url": "assets/js/66.19c52b5a.js",
    "revision": "85898ecef3861c1a31fa875ff34da39f"
  },
  {
    "url": "assets/js/67.df3b02d5.js",
    "revision": "a93f080961ad12a459f3eb3b67ee1eb3"
  },
  {
    "url": "assets/js/68.47d76b46.js",
    "revision": "d3772c79d4628a8773406aaf7fe02b7f"
  },
  {
    "url": "assets/js/69.f0bf777c.js",
    "revision": "cfbd54880d9057e53d89e98c55f1e54e"
  },
  {
    "url": "assets/js/7.e078bdf9.js",
    "revision": "00e141ce13496be018e233f3a8e048af"
  },
  {
    "url": "assets/js/70.a01cccd4.js",
    "revision": "380b18cbe0bc9bdd6b407b26caa85c6d"
  },
  {
    "url": "assets/js/71.30a02910.js",
    "revision": "ce57370ac128dd37fffef12b9b9842c3"
  },
  {
    "url": "assets/js/72.f1388d59.js",
    "revision": "06a7e481c7043f6e88fb58913b707f64"
  },
  {
    "url": "assets/js/73.fefe59f4.js",
    "revision": "d4f5b44177c68cb3ea6a153eda11ff08"
  },
  {
    "url": "assets/js/74.23a71117.js",
    "revision": "ea3dad46dfd7a42c01b114c70927b23c"
  },
  {
    "url": "assets/js/75.b4835526.js",
    "revision": "a26269d089e803e4aac13a075a65f187"
  },
  {
    "url": "assets/js/8.b1c1e693.js",
    "revision": "57dc561c6d4604358c65e58e0e45b2ab"
  },
  {
    "url": "assets/js/9.54f982a8.js",
    "revision": "ff97df6e16f69ba34a61125d10256ac7"
  },
  {
    "url": "assets/js/app.bf595af1.js",
    "revision": "12fdb94bc7932b22faf789b4ed46e08f"
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
    "revision": "58e91c01d39ca0ba6e1542896a531188"
  },
  {
    "url": "Policies/G01.html",
    "revision": "9ef824ad6ae77db2179905613cb71dd8"
  },
  {
    "url": "Policies/G02.html",
    "revision": "8fc35a1bf3d5aa69f406acabf572a695"
  },
  {
    "url": "Policies/G02Appendix01.html",
    "revision": "080c916aaced3604f1ece0a71d5b57fe"
  },
  {
    "url": "Policies/G02Appendix02.html",
    "revision": "98e05a339cfa4b98f5014b8019b297fe"
  },
  {
    "url": "Policies/G03.html",
    "revision": "8752f72336562bf67b77dc3c8a1cd9c6"
  },
  {
    "url": "Policies/G04.html",
    "revision": "a16f749e328f8878f87e55b8abe02ace"
  },
  {
    "url": "Policies/G05.html",
    "revision": "db95c17b73d877be94adb131a4178537"
  },
  {
    "url": "Policies/G06.html",
    "revision": "682e7f30a9bb29292603db5c58d7f73c"
  },
  {
    "url": "Policies/HR01.html",
    "revision": "b9589051fbb995e8cb152e55bc53aedc"
  },
  {
    "url": "Policies/HR01Appendix01.html",
    "revision": "f14210bfe26a18255505baab76e1dcfe"
  },
  {
    "url": "Policies/HR01Appendix02.html",
    "revision": "ed4f110b9587d21cff2d159cfae7cbfc"
  },
  {
    "url": "Policies/HR01Appendix05.html",
    "revision": "de41094f053307f765333088b00db88a"
  },
  {
    "url": "Policies/HR01Appendix06.html",
    "revision": "e1ded108fd6c59977fd2d63fa6afc069"
  },
  {
    "url": "Policies/HR01Appendix07.html",
    "revision": "c94b39eca5816f0f8879a9f4c0c02e43"
  },
  {
    "url": "Policies/HR01Appendix08.html",
    "revision": "c1ee3b5c431957188fb76e2fd14df358"
  },
  {
    "url": "Policies/HR02.html",
    "revision": "73f71cbdb5146c1f899ee05c6d4f475d"
  },
  {
    "url": "Policies/HR02Appendix01.html",
    "revision": "d7dfc3275031770c867b4dd84d3db8ee"
  },
  {
    "url": "Policies/HR02Appendix02.html",
    "revision": "c1c725a4d410035053e09a6e342f9a6a"
  },
  {
    "url": "Policies/HR02Appendix03.html",
    "revision": "8914ac2f0fc03719d8c38f0e562697ed"
  },
  {
    "url": "Policies/HR03.html",
    "revision": "8e956d922eae1fed7fc5323ac4fe4f3d"
  },
  {
    "url": "Policies/HS01.html",
    "revision": "9e5a957bb3772b1c2ff86c41497ba580"
  },
  {
    "url": "Policies/HS01Appendix01.html",
    "revision": "3c5226390174bdc4b04987f0052b492f"
  },
  {
    "url": "Policies/HS01Appendix02.html",
    "revision": "c2ab1b12c59f70c58d26e215be017123"
  },
  {
    "url": "Policies/HS01Appendix03.html",
    "revision": "8ff0d4295f2f6c6b74bde0c58c7cd850"
  },
  {
    "url": "Policies/HS01Appendix04.html",
    "revision": "1f59a76c7b1f0013bc390fedaf70cb60"
  },
  {
    "url": "Policies/HS01Appendix05.html",
    "revision": "e4fb6a30c237bde4343d767ad1055d51"
  },
  {
    "url": "Policies/HS02.html",
    "revision": "56c12f87bd281c95fe160605053bdf63"
  },
  {
    "url": "Policies/HS02Appendix01.html",
    "revision": "60b85a73d87b07c28dabca9c23453580"
  },
  {
    "url": "Policies/HS02Appendix02.html",
    "revision": "59490e522926e0ab24925412e22bf6ac"
  },
  {
    "url": "Policies/HS02Appendix03.html",
    "revision": "61b5f285b6271ac6b949f655e79bdd12"
  },
  {
    "url": "Policies/HS02Appendix04.html",
    "revision": "7a1a0f3258726a474f64265c90f7c4a9"
  },
  {
    "url": "Policies/index.html",
    "revision": "c2cb07e0b903ed3552d460d4c8928dee"
  },
  {
    "url": "Policies/OP01.html",
    "revision": "720ebfe556e3ea7dd0fdfeef32a60c2e"
  },
  {
    "url": "Policies/OP01Appendix01.html",
    "revision": "3a7a6061289c2d7b400b77ab61ca80d4"
  },
  {
    "url": "Policies/OP01Appendix02.html",
    "revision": "ee0830d28c1c9ec1664a01219e28841d"
  },
  {
    "url": "Policies/OP01Appendix03.html",
    "revision": "3301ec3718a1571ded6ce1ba7071b2d4"
  },
  {
    "url": "Policies/OP02.html",
    "revision": "0084f0f8bab8532b4e018595c79195b4"
  },
  {
    "url": "Policies/OP03.1.html",
    "revision": "a484b38d29ec802601b7db9dd28eea2d"
  },
  {
    "url": "Policies/OP03.1Appendix04.html",
    "revision": "bac5fd37ecc6fede0a073fc6eb02964c"
  },
  {
    "url": "Policies/OP03.1Appendix05.html",
    "revision": "f604655417be698583b2901a9e8f6bcc"
  },
  {
    "url": "Policies/OP03.1Appendix06.html",
    "revision": "10969976879e4592fa13d6d00d1c7d4c"
  },
  {
    "url": "Policies/OP03.html",
    "revision": "e36d6c3d3cc440b41d9fded674d7a7ce"
  },
  {
    "url": "Policies/OP03Appendix01.html",
    "revision": "7c9f45ff7b085a879d2ce7adc9e0d0bc"
  },
  {
    "url": "Policies/OP03Appendix02.html",
    "revision": "b30d061d772c24709e8b3552714fb9e9"
  },
  {
    "url": "Policies/OP04.html",
    "revision": "851674b6c0913803b54ff7f3db0b19f1"
  },
  {
    "url": "Policies/OP04Appendix01.html",
    "revision": "ed3dbe3f9991ede88a30f514795907ab"
  },
  {
    "url": "Policies/OP04Appendix02.html",
    "revision": "5818dacac802fba4f21af00f4e6593d3"
  },
  {
    "url": "Policies/OP05.html",
    "revision": "a2c9685f32c64ae0d3e77aea871ba194"
  },
  {
    "url": "Policies/OP05Appendix01.html",
    "revision": "3ff03a0f4d2714c8b34f82b1fd647496"
  },
  {
    "url": "Policies/OP05Appendix02.html",
    "revision": "a11fac21c979b0be3661e92657335232"
  },
  {
    "url": "Policies/OP05Appendix03.html",
    "revision": "0724b5601e4adf95adb056667eac3493"
  },
  {
    "url": "Policies/OP05Appendix04.html",
    "revision": "0f8df55c7fb64d935ff71230ba8578f3"
  },
  {
    "url": "Policies/OP06.html",
    "revision": "931bf31a2fe3b5078a0cf1218ea190ca"
  },
  {
    "url": "Policies/OP06Appendix01.html",
    "revision": "4b3ed1b6ec39559fab2dd8855cf5c04e"
  },
  {
    "url": "Policies/OP06Appendix02.html",
    "revision": "4811ad849e84a05f0e8149f6c2646e6b"
  },
  {
    "url": "Policies/OP06Appendix03.html",
    "revision": "56755a178aa54c9395d9c4d394d9c6df"
  },
  {
    "url": "Policies/OP07.html",
    "revision": "5f35ac3773b37ed9bead1fb68882beae"
  },
  {
    "url": "Policies/OP07Appendix01.html",
    "revision": "32a07d190ff3e20d63f59ddb9f34b183"
  },
  {
    "url": "Policies/OP07Appendix02.html",
    "revision": "a10c5adb8869f624529a0afd2431b68a"
  },
  {
    "url": "Policies/OP07Appendix03.html",
    "revision": "9324f9f680267f42291947944fcd0c23"
  },
  {
    "url": "Policies/OP07Appendix04.html",
    "revision": "ec4e9b4d85e3bd2292eb4f52713ce2ee"
  },
  {
    "url": "Policies/OP07Appendix05.html",
    "revision": "7691ebc43e7842d86f928e17c13933dd"
  },
  {
    "url": "Policies/OP07Appendix06.html",
    "revision": "a77c9c4a9f1b593340d8afa4eb2a190d"
  },
  {
    "url": "Policies/OP09.html",
    "revision": "fccc08d1b23405c5ef87ab89892d7992"
  },
  {
    "url": "Policies/OP09Appendix01.html",
    "revision": "77b4c71bc7f08cbd8438e919effb2fd1"
  },
  {
    "url": "Policies/OP09Appendix02.html",
    "revision": "bef87528426b50315bcbfa0702d52173"
  },
  {
    "url": "Policies/OP09Appendix03.html",
    "revision": "22dcf1b1e7d643b08a81bead011d9819"
  },
  {
    "url": "Policies/OP10.html",
    "revision": "b9df91958f3a7fcc4b07888eb7e0c17b"
  },
  {
    "url": "Policies/OP11.html",
    "revision": "82df7dc91d8c4c8993a11445db7522b8"
  },
  {
    "url": "Policies/OP12.html",
    "revision": "0fa1a82191713e200237a87c55c6615c"
  },
  {
    "url": "Policies/OP12Appendix01.html",
    "revision": "2c3d7ba20f1dc8c5bdcb6a35b399d3ec"
  },
  {
    "url": "Policies/OP12Appendix02.html",
    "revision": "e089a374882347af128b05078c2c6456"
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
