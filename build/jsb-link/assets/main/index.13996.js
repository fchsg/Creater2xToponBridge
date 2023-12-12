window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  ATAndroidBannerJS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2d7725PXOFCX5tPSjJIzSZ9", "ATAndroidBannerJS");
    "use strict";
    var classJavaName = "com/anythink/cocosjs/ATBannerJSBridge";
    var ATAndroidBannerJS = ATAndroidBannerJS || {
      loadBanner: function loadBanner(placementId, settings) {
        cc.log("Android-loadBanner:" + settings);
        jsb.reflection.callStaticMethod(classJavaName, "load", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
      },
      setAdListener: function setAdListener(listener) {
        cc.log("Android-setAdListener");
        jsb.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
      },
      hasAdReady: function hasAdReady(placementId) {
        cc.log("Android-hasAdReady");
        return jsb.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
      },
      checkAdStatus: function checkAdStatus(placementId) {
        cc.log("Android-checkAdStatus:" + placementId);
        return jsb.reflection.callStaticMethod(classJavaName, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", placementId);
      },
      showAdInPosition: function showAdInPosition(placementId, position) {
        cc.log("Android-showAdInPosistion");
        jsb.reflection.callStaticMethod(classJavaName, "showWithPosition", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", placementId, position, "");
      },
      showAdInPositionAndScenario: function showAdInPositionAndScenario(placementId, position, scenario) {
        cc.log("Android-showAdInPositionAndScenario");
        jsb.reflection.callStaticMethod(classJavaName, "showWithPosition", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", placementId, position, scenario);
      },
      showAdInRectangle: function showAdInRectangle(placementId, showAdRect) {
        cc.log("Android-showAdInRectangle");
        jsb.reflection.callStaticMethod(classJavaName, "showWithRect", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", placementId, showAdRect, "");
      },
      showAdInRectangleAndScenario: function showAdInRectangleAndScenario(placementId, showAdRect, scenario) {
        cc.log("Android-showAdInRectangleAndScenario");
        jsb.reflection.callStaticMethod(classJavaName, "showWithRect", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", placementId, showAdRect, scenario);
      },
      removeAd: function removeAd(placementId) {
        cc.log("Android-removeAd");
        jsb.reflection.callStaticMethod(classJavaName, "remove", "(Ljava/lang/String;)V", placementId);
      },
      reShowAd: function reShowAd(placementId) {
        cc.log("Android-reShowAd");
        jsb.reflection.callStaticMethod(classJavaName, "reshow", "(Ljava/lang/String;)V", placementId);
      },
      hideAd: function hideAd(placementId) {
        cc.log("Android-hideAd");
        jsb.reflection.callStaticMethod(classJavaName, "hide", "(Ljava/lang/String;)V", placementId);
      }
    };
    module.exports = ATAndroidBannerJS;
    cc._RF.pop();
  }, {} ],
  ATAndroidInterstitialAutoAdJS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2c8ba7sIpNG7r4YPiIlZrD3", "ATAndroidInterstitialAutoAdJS");
    "use strict";
    var classJavaName = "com/anythink/cocosjs/ATInterstitialAutoAdJSBridge";
    var ATAndroidInterstitialAutoAdJS = ATAndroidInterstitialAutoAdJS || {
      setAdListener: function setAdListener(listener) {
        cc.log("Android-setAdListener");
        jsb.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
      },
      addPlacementIds: function addPlacementIds(placementIds) {
        cc.log("Android-addPlacementIds");
        jsb.reflection.callStaticMethod(classJavaName, "addPlacementIds", "(Ljava/lang/String;)V", placementIds);
      },
      removePlacementId: function removePlacementId(placementId) {
        cc.log("Android-removePlacementId");
        jsb.reflection.callStaticMethod(classJavaName, "removePlacementId", "(Ljava/lang/String;)V", placementId);
      },
      setAdExtraData: function setAdExtraData(placementId, settings) {
        cc.log("Android-setAdExtraData");
        jsb.reflection.callStaticMethod(classJavaName, "setAdExtraData", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
      },
      hasAdReady: function hasAdReady(placementId) {
        cc.log("Android-hasAdReady");
        return jsb.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
      },
      checkAdStatus: function checkAdStatus(placementId) {
        cc.log("Android-checkAdStatus:" + placementId);
        return jsb.reflection.callStaticMethod(classJavaName, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", placementId);
      },
      showAd: function showAd(placementId) {
        cc.log("Android-ivautoad_showAd:" + placementId);
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;)V", placementId);
      },
      showAdInScenario: function showAdInScenario(placementId, scenario) {
        cc.log("Android-ivautoad_showAdInScenario:" + placementId + "---" + scenario);
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
      },
      entryAdScenario: function entryAdScenario(placementId, scenario) {
        cc.log("Android-entryAdScenario:" + placementId + "---" + scenario);
        jsb.reflection.callStaticMethod(classJavaName, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
      }
    };
    module.exports = ATAndroidInterstitialAutoAdJS;
    cc._RF.pop();
  }, {} ],
  ATAndroidInterstitialJS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "101deT7//lHMZl0VciHRgLx", "ATAndroidInterstitialJS");
    "use strict";
    var classJavaName = "com/anythink/cocosjs/ATInterstitialJSBridge";
    var ATAndroidInterstitialJS = ATAndroidInterstitialJS || {
      loadInterstitial: function loadInterstitial(placementId, settings) {
        cc.log("Android-loadInterstitial");
        jsb.reflection.callStaticMethod(classJavaName, "load", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
      },
      setAdListener: function setAdListener(listener) {
        cc.log("Android-setAdListener");
        jsb.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
      },
      hasAdReady: function hasAdReady(placementId) {
        cc.log("Android-hasAdReady");
        return jsb.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
      },
      checkAdStatus: function checkAdStatus(placementId) {
        cc.log("Android-checkAdStatus:" + placementId);
        return jsb.reflection.callStaticMethod(classJavaName, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", placementId);
      },
      showAd: function showAd(placementId) {
        cc.log("Android-showAd:" + placementId);
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;)V", placementId);
      },
      showAdInScenario: function showAdInScenario(placementId, scenario) {
        cc.log("Android-showAdInScenario:" + placementId + "---" + scenario);
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
      },
      entryAdScenario: function entryAdScenario(placementId, scenario) {
        cc.log("Android-entryAdScenario:" + placementId + "---" + scenario);
        jsb.reflection.callStaticMethod(classJavaName, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
      }
    };
    module.exports = ATAndroidInterstitialJS;
    cc._RF.pop();
  }, {} ],
  ATAndroidJS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0773apTYa9EzbwqihsMSHr6", "ATAndroidJS");
    "use strict";
    var classJavaName = "com/anythink/cocosjs/ATJSBridge";
    var ATAndroidJS = ATAndroidJS || {
      printJsLog: function printJsLog(msg) {
        void 0 != msg && null != msg && jsb.reflection.callStaticMethod("android/util/Log", "i", "(Ljava/lang/String;Ljava/lang/String;)I", "AT-Cocos-JS", msg);
      },
      initSDK: function initSDK(appid, appkey) {
        jsb.reflection.callStaticMethod(classJavaName, "initSDK", "(Ljava/lang/String;Ljava/lang/String;)V", appid, appkey);
      },
      initCustomMap: function initCustomMap(customMap) {
        jsb.reflection.callStaticMethod(classJavaName, "initCustomMap", "(Ljava/lang/String;)V", customMap);
      },
      setPlacementCustomMap: function setPlacementCustomMap(placmentId, customMap) {
        jsb.reflection.callStaticMethod(classJavaName, "setPlacementCustomMap", "(Ljava/lang/String;Ljava/lang/String;)V", placmentId, customMap);
      },
      setGDPRLevel: function setGDPRLevel(level) {
        jsb.reflection.callStaticMethod(classJavaName, "setGDPRLevel", "(I)V", level);
      },
      getGDPRLevel: function getGDPRLevel() {
        return jsb.reflection.callStaticMethod(classJavaName, "getGDPRLevel", "()I");
      },
      getUserLocation: function getUserLocation(callbackMethod) {
        jsb.reflection.callStaticMethod(classJavaName, "getUserLocation", "(Ljava/lang/String;)V", callbackMethod);
      },
      showGDPRAuth: function showGDPRAuth() {
        jsb.reflection.callStaticMethod(classJavaName, "showGDPRAuth", "()V");
      },
      setLogDebug: function setLogDebug(debug) {
        jsb.reflection.callStaticMethod(classJavaName, "setLogDebug", "(Z)V", debug);
      },
      deniedUploadDeviceInfo: function deniedUploadDeviceInfo(deniedInfo) {
        jsb.reflection.callStaticMethod(classJavaName, "deniedUploadDeviceInfo", "(Ljava/lang/String;)V", deniedInfo);
      }
    };
    module.exports = ATAndroidJS;
    cc._RF.pop();
  }, {} ],
  ATAndroidNativeJS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "abc830eQLlAaq5iUE+858Gc", "ATAndroidNativeJS");
    "use strict";
    var classJavaName = "com/anythink/cocosjs/ATNativeJSBridge";
    var ATAndroidBannerJS = ATAndroidBannerJS || {
      loadNative: function loadNative(placementId, settings) {
        cc.log("Android-loadNative");
        jsb.reflection.callStaticMethod(classJavaName, "load", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
      },
      setAdListener: function setAdListener(listener) {
        cc.log("Android-setAdListener");
        jsb.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
      },
      hasAdReady: function hasAdReady(placementId) {
        cc.log("Android-hasAdReady");
        return jsb.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
      },
      checkAdStatus: function checkAdStatus(placementId) {
        cc.log("Android-checkAdStatus:" + placementId);
        return jsb.reflection.callStaticMethod(classJavaName, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", placementId);
      },
      showAd: function showAd(placementId, adViewProperty) {
        cc.log("Android-showAd");
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", placementId, adViewProperty, "");
      },
      showAdInScenario: function showAdInScenario(placementId, adViewProperty, scenario) {
        cc.log("Android-showAdInScenario");
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", placementId, adViewProperty, scenario);
      },
      removeAd: function removeAd(placementId) {
        cc.log("Android-removeAd");
        jsb.reflection.callStaticMethod(classJavaName, "remove", "(Ljava/lang/String;)V", placementId);
      },
      entryAdScenario: function entryAdScenario(placementId, scenario) {
        cc.log("Android-entryAdScenario:" + placementId + "---" + scenario);
        jsb.reflection.callStaticMethod(classJavaName, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
      }
    };
    module.exports = ATAndroidBannerJS;
    cc._RF.pop();
  }, {} ],
  ATAndroidRewardedVideoAutoAdJS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5a59czjJrhFeryy4dDHGqC2", "ATAndroidRewardedVideoAutoAdJS");
    "use strict";
    var classJavaName = "com/anythink/cocosjs/ATRewardedVideoAutoAdJSBridge";
    var ATAndroidRewardedVideoAutoAdJS = ATAndroidRewardedVideoAutoAdJS || {
      setAdListener: function setAdListener(listener) {
        cc.log("Android-setAdListener");
        jsb.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
      },
      addPlacementIds: function addPlacementIds(placementIds) {
        cc.log("Android-addPlacementIds");
        jsb.reflection.callStaticMethod(classJavaName, "addPlacementIds", "(Ljava/lang/String;)V", placementIds);
      },
      removePlacementId: function removePlacementId(placementId) {
        cc.log("Android-removePlacementId");
        jsb.reflection.callStaticMethod(classJavaName, "removePlacementId", "(Ljava/lang/String;)V", placementId);
      },
      setAdExtraData: function setAdExtraData(placementId, settings) {
        cc.log("Android-setAdExtraData");
        jsb.reflection.callStaticMethod(classJavaName, "setAdExtraData", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
      },
      hasAdReady: function hasAdReady(placementId) {
        cc.log("Android-hasAdReady");
        return jsb.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
      },
      checkAdStatus: function checkAdStatus(placementId) {
        cc.log("Android-checkAdStatus:" + placementId);
        return jsb.reflection.callStaticMethod(classJavaName, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", placementId);
      },
      showAd: function showAd(placementId) {
        cc.log("Android-rvautoad_showAd:" + placementId);
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;)V", placementId);
      },
      showAdInScenario: function showAdInScenario(placementId, scenario) {
        cc.log("Android-rvautoad_showAdInScenario:" + placementId + "---" + scenario);
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
      },
      entryAdScenario: function entryAdScenario(placementId, scenario) {
        cc.log("Android-entryAdScenario:" + placementId + "---" + scenario);
        jsb.reflection.callStaticMethod(classJavaName, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
      }
    };
    module.exports = ATAndroidRewardedVideoAutoAdJS;
    cc._RF.pop();
  }, {} ],
  ATAndroidRewardedVideoJS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bffd9H5UVNEFJn5K4z6pey1", "ATAndroidRewardedVideoJS");
    "use strict";
    var classJavaName = "com/anythink/cocosjs/ATRewardedVideoJSBridge";
    var ATAndroidRewardedVideoJS = ATAndroidRewardedVideoJS || {
      loadRewardedVideo: function loadRewardedVideo(placementId, settings) {
        cc.log("Android-loadRewardedVideo");
        jsb.reflection.callStaticMethod(classJavaName, "load", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
      },
      setAdListener: function setAdListener(listener) {
        cc.log("Android-setAdListener");
        jsb.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
      },
      hasAdReady: function hasAdReady(placementId) {
        cc.log("Android-hasAdReady");
        return jsb.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
      },
      checkAdStatus: function checkAdStatus(placementId) {
        cc.log("Android-checkAdStatus:" + placementId);
        return jsb.reflection.callStaticMethod(classJavaName, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", placementId);
      },
      showAd: function showAd(placementId) {
        cc.log("Android-rv_showAd:" + placementId);
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;)V", placementId);
      },
      showAdInScenario: function showAdInScenario(placementId, scenario) {
        cc.log("Android-rv_showAdInScenario:" + placementId + "---" + scenario);
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
      },
      entryAdScenario: function entryAdScenario(placementId, scenario) {
        cc.log("Android-entryAdScenario:" + placementId + "---" + scenario);
        jsb.reflection.callStaticMethod(classJavaName, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
      }
    };
    module.exports = ATAndroidRewardedVideoJS;
    cc._RF.pop();
  }, {} ],
  ATBannerJSSDK: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "966f8RL+kNFnZMh03w18dNB", "ATBannerJSSDK");
    "use strict";
    var ATAndroidBannerJS = require("./Android/ATAndroidBannerJS");
    var ATiOSBannerJS = require("./iOS/ATiOSBannerJS");
    var initPlatformBridge = function initPlatformBridge() {
      if (cc.sys.os === cc.sys.OS_IOS) return ATiOSBannerJS;
      if (cc.sys.os === cc.sys.OS_ANDROID) return ATAndroidBannerJS;
    };
    var platformBridge = initPlatformBridge();
    var ATBannerSDK = ATBannerSDK || {
      kATBannerAdLoadingExtraBannerAdSizeStruct: "banner_ad_size_struct",
      kATBannerAdShowingPositionTop: "top",
      kATBannerAdShowingPositionBottom: "bottom",
      kATBannerAdInlineAdaptiveWidth: "inline_adaptive_width",
      kATBannerAdInlineAdaptiveOrientation: "inline_adaptive_orientation",
      kATBannerAdInlineAdaptiveOrientationCurrent: 0,
      kATBannerAdInlineAdaptiveOrientationPortrait: 1,
      kATBannerAdInlineAdaptiveOrientationLandscape: 2,
      kATBannerAdAdaptiveWidth: "adaptive_width",
      kATBannerAdAdaptiveOrientation: "adaptive_orientation",
      kATBannerAdAdaptiveOrientationCurrent: 0,
      kATBannerAdAdaptiveOrientationPortrait: 1,
      kATBannerAdAdaptiveOrientationLandscape: 2,
      ATBannerListener: {
        developerCallback: null,
        onBannerAdLoaded: function onBannerAdLoaded(placementId) {
          null != this.developerCallback && null != this.developerCallback.onBannerAdLoaded && void 0 != this.developerCallback.onBannerAdLoaded && this.developerCallback.onBannerAdLoaded(placementId);
        },
        onBannerAdLoadFail: function onBannerAdLoadFail(placementId, errorInfo) {
          null != this.developerCallback && null != this.developerCallback.onBannerAdLoadFail && void 0 != this.developerCallback.onBannerAdLoadFail && this.developerCallback.onBannerAdLoadFail(placementId, errorInfo);
        },
        onBannerAdShow: function onBannerAdShow(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onBannerAdShow && void 0 != this.developerCallback.onBannerAdShow && this.developerCallback.onBannerAdShow(placementId, callbackInfo);
        },
        onBannerAdClick: function onBannerAdClick(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onBannerAdClick && void 0 != this.developerCallback.onBannerAdClick && this.developerCallback.onBannerAdClick(placementId, callbackInfo);
        },
        onBannerAdAutoRefresh: function onBannerAdAutoRefresh(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onBannerAdAutoRefresh && void 0 != this.developerCallback.onBannerAdAutoRefresh && this.developerCallback.onBannerAdAutoRefresh(placementId, callbackInfo);
        },
        onBannerAdAutoRefreshFail: function onBannerAdAutoRefreshFail(placementId, errorInfo) {
          null != this.developerCallback && null != this.developerCallback.onBannerAdAutoRefreshFail && void 0 != this.developerCallback.onBannerAdAutoRefreshFail && this.developerCallback.onBannerAdAutoRefreshFail(placementId, errorInfo);
        },
        onBannerAdCloseButtonTapped: function onBannerAdCloseButtonTapped(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onBannerAdCloseButtonTapped && void 0 != this.developerCallback.onBannerAdCloseButtonTapped && this.developerCallback.onBannerAdCloseButtonTapped(placementId, callbackInfo);
        },
        onAdSourceBiddingAttempt: function onAdSourceBiddingAttempt(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingAttempt && void 0 != this.developerCallback.onAdSourceBiddingAttempt && this.developerCallback.onAdSourceBiddingAttempt(placementId, callbackInfo);
        },
        onAdSourceBiddingFilled: function onAdSourceBiddingFilled(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFilled && void 0 != this.developerCallback.onAdSourceBiddingFilled && this.developerCallback.onAdSourceBiddingFilled(placementId, callbackInfo);
        },
        onAdSourceBiddingFail: function onAdSourceBiddingFail(placementId, errorInfo, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFail && void 0 != this.developerCallback.onAdSourceBiddingFail && this.developerCallback.onAdSourceBiddingFail(placementId, errorInfo, callbackInfo);
        },
        onAdSourceAttemp: function onAdSourceAttemp(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onAdSourceAttemp && void 0 != this.developerCallback.onAdSourceAttemp && this.developerCallback.onAdSourceAttemp(placementId, callbackInfo);
        },
        onAdSourceLoadFilled: function onAdSourceLoadFilled(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFilled && void 0 != this.developerCallback.onAdSourceLoadFilled && this.developerCallback.onAdSourceLoadFilled(placementId, callbackInfo);
        },
        onAdSourceLoadFail: function onAdSourceLoadFail(placementId, errorInfo, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFail && void 0 != this.developerCallback.onAdSourceLoadFail && this.developerCallback.onAdSourceLoadFail(placementId, errorInfo, callbackInfo);
        }
      },
      loadBanner: function loadBanner(placementId, settings) {
        void 0 === settings && (settings = {});
        if (void 0 != platformBridge && null != platformBridge) {
          if (settings.hasOwnProperty(ATBannerSDK.kATBannerAdLoadingExtraBannerAdSizeStruct)) {
            var loadAdSize = settings[ATBannerSDK.kATBannerAdLoadingExtraBannerAdSizeStruct];
            settings["width"] = loadAdSize["width"];
            settings["height"] = loadAdSize["height"];
          }
          platformBridge.loadBanner(placementId, JSON.stringify(settings));
        } else cc.log("You must run on Android or iOS.");
      },
      setAdListener: function setAdListener(listener) {
        var eventJSON = {};
        eventJSON[LoadedCallbackKey] = "ATBannerJSSDK.ATBannerListener.onBannerAdLoaded", 
        eventJSON[LoadFailCallbackKey] = "ATBannerJSSDK.ATBannerListener.onBannerAdLoadFail", 
        eventJSON[CloseCallbackKey] = "ATBannerJSSDK.ATBannerListener.onBannerAdCloseButtonTapped", 
        eventJSON[ClickCallbackKey] = "ATBannerJSSDK.ATBannerListener.onBannerAdClick", 
        eventJSON[ShowCallbackKey] = "ATBannerJSSDK.ATBannerListener.onBannerAdShow", eventJSON[RefreshCallbackKey] = "ATBannerJSSDK.ATBannerListener.onBannerAdAutoRefresh", 
        eventJSON[RefreshFailCallbackKey] = "ATBannerJSSDK.ATBannerListener.onBannerAdAutoRefreshFail", 
        eventJSON[BiddingAttempt] = "ATBannerJSSDK.ATBannerListener.onAdSourceBiddingAttempt", 
        eventJSON[BiddingFilled] = "ATBannerJSSDK.ATBannerListener.onAdSourceBiddingFilled", 
        eventJSON[BiddingFail] = "ATBannerJSSDK.ATBannerListener.onAdSourceBiddingFail", 
        eventJSON[Attemp] = "ATBannerJSSDK.ATBannerListener.onAdSourceAttemp", eventJSON[LoadFilled] = "ATBannerJSSDK.ATBannerListener.onAdSourceLoadFilled", 
        eventJSON[LoadFail] = "ATBannerJSSDK.ATBannerListener.onAdSourceLoadFail";
        void 0 != platformBridge && null != platformBridge ? platformBridge.setAdListener(JSON.stringify(eventJSON)) : cc.log("You must run on Android or iOS.");
        this.ATBannerListener.developerCallback = listener;
      },
      hasAdReady: function hasAdReady(placementId) {
        if (void 0 != platformBridge && null != platformBridge) return platformBridge.hasAdReady(placementId);
        cc.log("You must run on Android or iOS.");
        return false;
      },
      checkAdStatus: function checkAdStatus(placementId) {
        if (void 0 != platformBridge && null != platformBridge) return platformBridge.checkAdStatus(placementId);
        cc.log("You must run on Android or iOS.");
        return "";
      },
      showAdInPosition: function showAdInPosition(placementId, position) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.showAdInPosition(placementId, position) : cc.log("You must run on Android or iOS.");
      },
      showAdInPositionAndScenario: function showAdInPositionAndScenario(placementId, position, scenario) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.showAdInPosition(placementId, position, scenario) : cc.log("You must run on Android or iOS.");
      },
      showAdInRectangle: function showAdInRectangle(placementId, showAdRect) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.showAdInRectangle(placementId, JSON.stringify(showAdRect)) : cc.log("You must run on Android or iOS.");
      },
      showAdInRectangleAndScenario: function showAdInRectangleAndScenario(placementId, showAdRect, scenario) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.showAdInRectangle(placementId, JSON.stringify(showAdRect), scenario) : cc.log("You must run on Android or iOS.");
      },
      removeAd: function removeAd(placementId) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.removeAd(placementId) : cc.log("You must run on Android or iOS.");
      },
      reShowAd: function reShowAd(placementId) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.reShowAd(placementId) : cc.log("You must run on Android or iOS.");
      },
      hideAd: function hideAd(placementId) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.hideAd(placementId) : cc.log("You must run on Android or iOS.");
      },
      createLoadAdSize: function createLoadAdSize(width, height) {
        var loadAdSize = {};
        loadAdSize["width"] = width;
        loadAdSize["height"] = height;
        return loadAdSize;
      },
      createShowAdRect: function createShowAdRect(x, y, width, height) {
        var adRect = {};
        adRect["x"] = x;
        adRect["y"] = y;
        adRect["width"] = width;
        adRect["height"] = height;
        return adRect;
      }
    };
    var LoadedCallbackKey = "BannerLoaded";
    var LoadFailCallbackKey = "BannerLoadFail";
    var CloseCallbackKey = "BannerCloseButtonTapped";
    var ClickCallbackKey = "BannerClick";
    var ShowCallbackKey = "BannerShow";
    var RefreshCallbackKey = "BannerRefresh";
    var RefreshFailCallbackKey = "BannerRefreshFail";
    var BiddingAttempt = "BannerBiddingAttempt";
    var BiddingFilled = "BannerBiddingFilled";
    var BiddingFail = "BannerBiddingFail";
    var Attemp = "BannerAttemp";
    var LoadFilled = "BannerLoadFilled";
    var LoadFail = "BannerLoadFail";
    window.ATBannerJSSDK = ATBannerSDK;
    cc._RF.pop();
  }, {
    "./Android/ATAndroidBannerJS": "ATAndroidBannerJS",
    "./iOS/ATiOSBannerJS": "ATiOSBannerJS"
  } ],
  ATInterstitialAutoAdJSSDK: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e3beGTlu1PWpA5Dxw0L8BS", "ATInterstitialAutoAdJSSDK");
    "use strict";
    var ATAndroidInterstitialAutoAdJS = require("./Android/ATAndroidInterstitialAutoAdJS");
    var ATiOSInterstitialAutoAdJS = require("./iOS/ATiOSInterstitialAutoAdJS");
    var initPlatformBridge = function initPlatformBridge() {
      if (cc.sys.os === cc.sys.OS_IOS) return ATiOSInterstitialAutoAdJS;
      if (cc.sys.os === cc.sys.OS_ANDROID) return ATAndroidInterstitialAutoAdJS;
    };
    var platformBridge = initPlatformBridge();
    var ATInterstitialAutoAdSDK = ATInterstitialAutoAdSDK || {
      UseInterstitialAsInterstitial: "UseInterstitialAsInterstitial",
      ATInterstitialListener: {
        developerCallback: null,
        onInterstitialAdLoaded: function onInterstitialAdLoaded(placementId) {
          null != this.developerCallback && null != this.developerCallback.onInterstitialAdLoaded && void 0 != this.developerCallback.onInterstitialAdLoaded && this.developerCallback.onInterstitialAdLoaded(placementId);
        },
        onInterstitialAdLoadFail: function onInterstitialAdLoadFail(placementId, errorInfo) {
          null != this.developerCallback && null != this.developerCallback.onInterstitialAdLoadFail && void 0 != this.developerCallback.onInterstitialAdLoadFail && this.developerCallback.onInterstitialAdLoadFail(placementId, errorInfo);
        },
        onInterstitialAdShow: function onInterstitialAdShow(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onInterstitialAdShow && void 0 != this.developerCallback.onInterstitialAdShow && this.developerCallback.onInterstitialAdShow(placementId, callbackInfo);
        },
        onInterstitialAdStartPlayingVideo: function onInterstitialAdStartPlayingVideo(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onInterstitialAdStartPlayingVideo && void 0 != this.developerCallback.onInterstitialAdStartPlayingVideo && this.developerCallback.onInterstitialAdStartPlayingVideo(placementId, callbackInfo);
        },
        onInterstitialAdEndPlayingVideo: function onInterstitialAdEndPlayingVideo(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onInterstitialAdEndPlayingVideo && void 0 != this.developerCallback.onInterstitialAdEndPlayingVideo && this.developerCallback.onInterstitialAdEndPlayingVideo(placementId, callbackInfo);
        },
        onInterstitialAdFailedToPlayVideo: function onInterstitialAdFailedToPlayVideo(placementId, errorInfo) {
          null != this.developerCallback && null != this.developerCallback.onInterstitialAdFailedToPlayVideo && void 0 != this.developerCallback.onInterstitialAdFailedToPlayVideo && this.developerCallback.onInterstitialAdFailedToPlayVideo(placementId, errorInfo);
        },
        onInterstitialAdFailedToShow: function onInterstitialAdFailedToShow(placementId) {
          null != this.developerCallback && null != this.developerCallback.onInterstitialAdFailedToShow && void 0 != this.developerCallback.onInterstitialAdFailedToShow && this.developerCallback.onInterstitialAdFailedToShow(placementId);
        },
        onInterstitialAdClose: function onInterstitialAdClose(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onInterstitialAdClose && void 0 != this.developerCallback.onInterstitialAdClose && this.developerCallback.onInterstitialAdClose(placementId, callbackInfo);
        },
        onInterstitialAdClick: function onInterstitialAdClick(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onInterstitialAdClick && void 0 != this.developerCallback.onInterstitialAdClick && this.developerCallback.onInterstitialAdClick(placementId, callbackInfo);
        }
      },
      setAdExtraData: function setAdExtraData(placementId, settings) {
        void 0 === settings && (settings = {});
        void 0 != platformBridge && null != platformBridge ? platformBridge.setAdExtraData(placementId, JSON.stringify(settings)) : cc.log("You must run on Android or iOS.");
      },
      addPlacementIds: function addPlacementIds(placementIds) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.addPlacementIds(JSON.stringify(placementIds)) : cc.log("You must run on Android or iOS.");
      },
      removePlacementId: function removePlacementId(placementIds) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.removePlacementId(JSON.stringify(placementIds)) : cc.log("You must run on Android or iOS.");
      },
      setAdListener: function setAdListener(listener) {
        var eventJSON = {};
        eventJSON[LoadedCallbackKey] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdLoaded", 
        eventJSON[LoadFailCallbackKey] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdLoadFail", 
        eventJSON[PlayStartCallbackKey] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdStartPlayingVideo", 
        eventJSON[PlayEndCallbackKey] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdEndPlayingVideo", 
        eventJSON[PlayFailCallbackKey] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdFailedToPlayVideo", 
        eventJSON[CloseCallbackKey] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdClose", 
        eventJSON[ClickCallbackKey] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdClick", 
        eventJSON[ShowCallbackKey] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdShow";
        void 0 != platformBridge && null != platformBridge ? platformBridge.setAdListener(JSON.stringify(eventJSON)) : cc.log("You must run on Android or iOS.");
        this.ATInterstitialListener.developerCallback = listener;
      },
      hasAdReady: function hasAdReady(placementId) {
        if (void 0 != platformBridge && null != platformBridge) return platformBridge.hasAdReady(placementId);
        cc.log("You must run on Android or iOS.");
        return false;
      },
      checkAdStatus: function checkAdStatus(placementId) {
        if (void 0 != platformBridge && null != platformBridge) return platformBridge.checkAdStatus(placementId);
        cc.log("You must run on Android or iOS.");
        return "";
      },
      showAd: function showAd(placementId) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.showAd(placementId) : cc.log("You must run on Android or iOS.");
      },
      showAdInScenario: function showAdInScenario(placementId, scenario) {
        void 0 === scenario && (scenario = "");
        void 0 != platformBridge && null != platformBridge ? platformBridge.showAdInScenario(placementId, scenario) : cc.log("You must run on Android or iOS.");
      },
      entryAdScenario: function entryAdScenario(placementId, scenario) {
        void 0 === scenario && (scenario = "");
        void 0 != platformBridge && null != platformBridge ? platformBridge.entryAdScenario(placementId, scenario) : cc.log("You must run on Android or iOS.");
      }
    };
    var LoadedCallbackKey = "InterstitialAutoAdLoaded";
    var LoadFailCallbackKey = "InterstitialAutoAdLoadFail";
    var PlayStartCallbackKey = "InterstitialAutoAdPlayStart";
    var PlayEndCallbackKey = "InterstitialAutoAdPlayEnd";
    var PlayFailCallbackKey = "InterstitialAutoAdPlayFail";
    var CloseCallbackKey = "InterstitialAutoAdClose";
    var ClickCallbackKey = "InterstitialAutoAdClick";
    var ShowCallbackKey = "InterstitialAutoAdAdShow";
    window.ATInterstitialAutoAdJSSDK = ATInterstitialAutoAdSDK;
    cc._RF.pop();
  }, {
    "./Android/ATAndroidInterstitialAutoAdJS": "ATAndroidInterstitialAutoAdJS",
    "./iOS/ATiOSInterstitialAutoAdJS": "ATiOSInterstitialAutoAdJS"
  } ],
  ATInterstitialJSSDK: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "648b3o6HHJOPr8hXZ+6mlY2", "ATInterstitialJSSDK");
    "use strict";
    var ATiOSInterstitialJS = require("./iOS/ATiOSInterstitialJS");
    var ATAndroidInterstitialJS = require("./Android/ATAndroidInterstitialJS");
    var initPlatformBridge = function initPlatformBridge() {
      if (cc.sys.os === cc.sys.OS_IOS) return ATiOSInterstitialJS;
      if (cc.sys.os === cc.sys.OS_ANDROID) return ATAndroidInterstitialJS;
    };
    var platformBridge = initPlatformBridge();
    var ATInterstitialSDK = ATInterstitialSDK || {
      UseInterstitialAsInterstitial: "UseInterstitialAsInterstitial",
      ATInterstitialListener: {
        developerCallback: null,
        onInterstitialAdLoaded: function onInterstitialAdLoaded(placementId) {
          null != this.developerCallback && null != this.developerCallback.onInterstitialAdLoaded && void 0 != this.developerCallback.onInterstitialAdLoaded && this.developerCallback.onInterstitialAdLoaded(placementId);
        },
        onInterstitialAdLoadFail: function onInterstitialAdLoadFail(placementId, errorInfo) {
          null != this.developerCallback && null != this.developerCallback.onInterstitialAdLoadFail && void 0 != this.developerCallback.onInterstitialAdLoadFail && this.developerCallback.onInterstitialAdLoadFail(placementId, errorInfo);
        },
        onInterstitialAdShow: function onInterstitialAdShow(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onInterstitialAdShow && void 0 != this.developerCallback.onInterstitialAdShow && this.developerCallback.onInterstitialAdShow(placementId, callbackInfo);
        },
        onInterstitialAdStartPlayingVideo: function onInterstitialAdStartPlayingVideo(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onInterstitialAdStartPlayingVideo && void 0 != this.developerCallback.onInterstitialAdStartPlayingVideo && this.developerCallback.onInterstitialAdStartPlayingVideo(placementId, callbackInfo);
        },
        onInterstitialAdEndPlayingVideo: function onInterstitialAdEndPlayingVideo(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onInterstitialAdEndPlayingVideo && void 0 != this.developerCallback.onInterstitialAdEndPlayingVideo && this.developerCallback.onInterstitialAdEndPlayingVideo(placementId, callbackInfo);
        },
        onInterstitialAdFailedToPlayVideo: function onInterstitialAdFailedToPlayVideo(placementId, errorInfo) {
          null != this.developerCallback && null != this.developerCallback.onInterstitialAdFailedToPlayVideo && void 0 != this.developerCallback.onInterstitialAdFailedToPlayVideo && this.developerCallback.onInterstitialAdFailedToPlayVideo(placementId, errorInfo);
        },
        onInterstitialAdFailedToShow: function onInterstitialAdFailedToShow(placementId) {
          null != this.developerCallback && null != this.developerCallback.onInterstitialAdFailedToShow && void 0 != this.developerCallback.onInterstitialAdFailedToShow && this.developerCallback.onInterstitialAdFailedToShow(placementId);
        },
        onInterstitialAdClose: function onInterstitialAdClose(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onInterstitialAdClose && void 0 != this.developerCallback.onInterstitialAdClose && this.developerCallback.onInterstitialAdClose(placementId, callbackInfo);
        },
        onInterstitialAdClick: function onInterstitialAdClick(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onInterstitialAdClick && void 0 != this.developerCallback.onInterstitialAdClick && this.developerCallback.onInterstitialAdClick(placementId, callbackInfo);
        },
        onAdSourceBiddingAttempt: function onAdSourceBiddingAttempt(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingAttempt && void 0 != this.developerCallback.onAdSourceBiddingAttempt && this.developerCallback.onAdSourceBiddingAttempt(placementId, callbackInfo);
        },
        onAdSourceBiddingFilled: function onAdSourceBiddingFilled(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFilled && void 0 != this.developerCallback.onAdSourceBiddingFilled && this.developerCallback.onAdSourceBiddingFilled(placementId, callbackInfo);
        },
        onAdSourceBiddingFail: function onAdSourceBiddingFail(placementId, errorInfo, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFail && void 0 != this.developerCallback.onAdSourceBiddingFail && this.developerCallback.onAdSourceBiddingFail(placementId, errorInfo, callbackInfo);
        },
        onAdSourceAttemp: function onAdSourceAttemp(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onAdSourceAttemp && void 0 != this.developerCallback.onAdSourceAttemp && this.developerCallback.onAdSourceAttemp(placementId, callbackInfo);
        },
        onAdSourceLoadFilled: function onAdSourceLoadFilled(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFilled && void 0 != this.developerCallback.onAdSourceLoadFilled && this.developerCallback.onAdSourceLoadFilled(placementId, callbackInfo);
        },
        onAdSourceLoadFail: function onAdSourceLoadFail(placementId, errorInfo, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFail && void 0 != this.developerCallback.onAdSourceLoadFail && this.developerCallback.onAdSourceLoadFail(placementId, errorInfo, callbackInfo);
        }
      },
      loadInterstitial: function loadInterstitial(placementId, settings) {
        void 0 === settings && (settings = {});
        void 0 != platformBridge && null != platformBridge ? platformBridge.loadInterstitial(placementId, JSON.stringify(settings)) : cc.log("You must run on Android or iOS.");
      },
      setAdListener: function setAdListener(listener) {
        var eventJSON = {};
        eventJSON[LoadedCallbackKey] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdLoaded", 
        eventJSON[LoadFailCallbackKey] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdLoadFail", 
        eventJSON[PlayStartCallbackKey] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdStartPlayingVideo", 
        eventJSON[PlayEndCallbackKey] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdEndPlayingVideo", 
        eventJSON[PlayFailCallbackKey] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdFailedToPlayVideo", 
        eventJSON[CloseCallbackKey] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdClose", 
        eventJSON[ClickCallbackKey] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdClick", 
        eventJSON[ShowCallbackKey] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdShow", 
        eventJSON[ShowFailCallbackKey] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdFailedToShow", 
        eventJSON[BiddingAttempt] = "ATInterstitialJSSDK.ATInterstitialListener.onAdSourceBiddingAttempt", 
        eventJSON[BiddingFilled] = "ATInterstitialJSSDK.ATInterstitialListener.onAdSourceBiddingFilled", 
        eventJSON[BiddingFail] = "ATInterstitialJSSDK.ATInterstitialListener.onAdSourceBiddingFail", 
        eventJSON[Attemp] = "ATInterstitialJSSDK.ATInterstitialListener.onAdSourceAttemp", 
        eventJSON[LoadFilled] = "ATInterstitialJSSDK.ATInterstitialListener.onAdSourceLoadFilled", 
        eventJSON[LoadFail] = "ATInterstitialJSSDK.ATInterstitialListener.onAdSourceLoadFail";
        void 0 != platformBridge && null != platformBridge ? platformBridge.setAdListener(JSON.stringify(eventJSON)) : cc.log("You must run on Android or iOS.");
        this.ATInterstitialListener.developerCallback = listener;
      },
      hasAdReady: function hasAdReady(placementId) {
        if (void 0 != platformBridge && null != platformBridge) return platformBridge.hasAdReady(placementId);
        cc.log("You must run on Android or iOS.");
        return false;
      },
      checkAdStatus: function checkAdStatus(placementId) {
        if (void 0 != platformBridge && null != platformBridge) return platformBridge.checkAdStatus(placementId);
        cc.log("You must run on Android or iOS.");
        return "";
      },
      showAd: function showAd(placementId) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.showAd(placementId) : cc.log("You must run on Android or iOS.");
      },
      showAdInScenario: function showAdInScenario(placementId, scenario) {
        void 0 === scenario && (scenario = "");
        void 0 != platformBridge && null != platformBridge ? platformBridge.showAdInScenario(placementId, scenario) : cc.log("You must run on Android or iOS.");
      },
      entryAdScenario: function entryAdScenario(placementId, scenario) {
        void 0 === scenario && (scenario = "");
        void 0 != platformBridge && null != platformBridge ? platformBridge.entryAdScenario(placementId, scenario) : cc.log("You must run on Android or iOS.");
      }
    };
    var LoadedCallbackKey = "InterstitialLoaded";
    var LoadFailCallbackKey = "InterstitialLoadFail";
    var PlayStartCallbackKey = "InterstitialPlayStart";
    var PlayEndCallbackKey = "InterstitialPlayEnd";
    var PlayFailCallbackKey = "InterstitialPlayFail";
    var CloseCallbackKey = "InterstitialClose";
    var ClickCallbackKey = "InterstitialClick";
    var ShowCallbackKey = "InterstitialAdShow";
    var ShowFailCallbackKey = "InterstitialAdShowFail";
    var BiddingAttempt = "InterstitialBiddingAttempt";
    var BiddingFilled = "InterstitialBiddingFilled";
    var BiddingFail = "InterstitialBiddingFail";
    var Attemp = "InterstitialAttemp";
    var LoadFilled = "InterstitialLoadFilled";
    var LoadFail = "InterstitialLoadFail";
    window.ATInterstitialJSSDK = ATInterstitialSDK;
    cc._RF.pop();
  }, {
    "./Android/ATAndroidInterstitialJS": "ATAndroidInterstitialJS",
    "./iOS/ATiOSInterstitialJS": "ATiOSInterstitialJS"
  } ],
  ATJSSDK: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e6a7g1zFhLwpnQuQECQBxd", "ATJSSDK");
    "use strict";
    var ATAndroidJS = require("./Android/ATAndroidJS");
    var ATiOSJS = require("./iOS/ATiOSJS");
    var isDebugLog = false;
    var initPlatformBridge = function initPlatformBridge() {
      if (cc.sys.os === cc.sys.OS_IOS) return ATiOSJS;
      if (cc.sys.os === cc.sys.OS_ANDROID) return ATAndroidJS;
    };
    var platformBridge = initPlatformBridge();
    var ATSDK = ATSDK || {
      kATUserLocationUnknown: 0,
      kATUserLocationInEU: 1,
      kATUserLocationOutOfEU: 2,
      PERSONALIZED: 0,
      NONPERSONALIZED: 1,
      UNKNOWN: 2,
      OS_VERSION_NAME: "os_vn",
      OS_VERSION_CODE: "os_vc",
      APP_PACKAGE_NAME: "package_name",
      APP_VERSION_NAME: "app_vn",
      APP_VERSION_CODE: "app_vc",
      BRAND: "brand",
      MODEL: "model",
      DEVICE_SCREEN_SIZE: "screen",
      MNC: "mnc",
      MCC: "mcc",
      LANGUAGE: "language",
      TIMEZONE: "timezone",
      USER_AGENT: "ua",
      ORIENTATION: "orient",
      NETWORK_TYPE: "network_type",
      INSTALLER: "it_src",
      ANDROID_ID: "android_id",
      GAID: "gaid",
      MAC: "mac",
      IMEI: "imei",
      OAID: "oaid",
      IDFA: "idfa",
      IDFV: "idfv",
      ATSDKListener: {
        userLocationCallback: null,
        getUserLocationCallback: function getUserLocationCallback(userLocation) {
          void 0 != this.userLocationCallback && null != this.userLocationCallback && this.userLocationCallback(userLocation);
        }
      },
      initSDK: function initSDK(appId, appKey) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.initSDK(appId, appKey) : cc.log("You must run on Android or iOS.");
      },
      initCustomMap: function initCustomMap(customMap) {
        void 0 != platformBridge && null != platformBridge ? void 0 != customMap && null != customMap && platformBridge.initCustomMap(JSON.stringify(customMap)) : cc.log("You must run on Android or iOS.");
      },
      setPlacementCustomMap: function setPlacementCustomMap(placmentId, customMap) {
        void 0 != platformBridge && null != platformBridge ? void 0 != customMap && null != customMap && platformBridge.setPlacementCustomMap(placmentId, JSON.stringify(customMap)) : cc.log("You must run on Android or iOS.");
      },
      setGDPRLevel: function setGDPRLevel(level) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.setGDPRLevel(level) : cc.log("You must run on Android or iOS.");
      },
      getGDPRLevel: function getGDPRLevel() {
        if (void 0 != platformBridge && null != platformBridge) return platformBridge.getGDPRLevel();
        cc.log("You must run on Android or iOS.");
        return this.UNKNOWN;
      },
      getUserLocation: function getUserLocation(userLocationCallback) {
        this.ATSDKListener.userLocationCallback = userLocationCallback;
        void 0 != platformBridge && null != platformBridge ? platformBridge.getUserLocation(GetUserLocationJsCallback) : cc.log("You must run on Android or iOS.");
      },
      showGDPRAuth: function showGDPRAuth() {
        void 0 != platformBridge && null != platformBridge ? platformBridge.showGDPRAuth() : cc.log("You must run on Android or iOS.");
      },
      setLogDebug: function setLogDebug(debug) {
        isDebugLog = debug;
        void 0 != platformBridge && null != platformBridge ? platformBridge.setLogDebug(debug) : cc.log("You must run on Android or iOS.");
      },
      printLog: function printLog(msg) {
        void 0 != msg && null != msg && isDebugLog && null != platformBridge && (void 0 != platformBridge && null != platformBridge ? platformBridge.printJsLog(msg) : cc.log("You must run on Android or iOS."));
      },
      deniedUploadDeviceInfo: function deniedUploadDeviceInfo(deniedInfo) {
        if (void 0 != platformBridge && null != platformBridge) {
          if (null != deniedInfo) {
            var length = deniedInfo.length;
            var deniedInfoString = "";
            for (var i = 0; i < length; i++) {
              var info = deniedInfo[i];
              deniedInfoString = 0 == i ? info : deniedInfoString + "," + info;
            }
            cc.log("test__" + deniedInfoString);
            platformBridge.deniedUploadDeviceInfo(deniedInfoString);
          }
        } else cc.log("You must run on Android or iOS.");
      }
    };
    var GetUserLocationJsCallback = "ATJSSDK.ATSDKListener.getUserLocationCallback";
    window.ATJSSDK = ATSDK;
    cc._RF.pop();
  }, {
    "./Android/ATAndroidJS": "ATAndroidJS",
    "./iOS/ATiOSJS": "ATiOSJS"
  } ],
  ATNativeJSSDK: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d3f27a16q5OiZTVRZhIWF6Q", "ATNativeJSSDK");
    "use strict";
    var ATAndroidNativeJS = require("./Android/ATAndroidNativeJS");
    var ATiOSNativeJS = require("./iOS/ATiOSNativeJS");
    var initPlatformBridge = function initPlatformBridge() {
      if (cc.sys.os === cc.sys.OS_IOS) return ATiOSNativeJS;
      if (cc.sys.os === cc.sys.OS_ANDROID) return ATAndroidNativeJS;
    };
    var platformBridge = initPlatformBridge();
    var ATNativeSDK = ATNativeSDK || {
      ATNativeListener: {
        developerCallback: null,
        onNativeAdLoaded: function onNativeAdLoaded(placementId) {
          null != this.developerCallback && null != this.developerCallback.onNativeAdLoaded && void 0 != this.developerCallback.onNativeAdLoaded && this.developerCallback.onNativeAdLoaded(placementId);
        },
        onNativeAdLoadFail: function onNativeAdLoadFail(placementId, errorInfo) {
          null != this.developerCallback && null != this.developerCallback.onNativeAdLoadFail && void 0 != this.developerCallback.onNativeAdLoadFail && this.developerCallback.onNativeAdLoadFail(placementId, errorInfo);
        },
        onNativeAdShow: function onNativeAdShow(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onNativeAdShow && void 0 != this.developerCallback.onNativeAdShow && this.developerCallback.onNativeAdShow(placementId, callbackInfo);
        },
        onNativeAdClick: function onNativeAdClick(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onNativeAdClick && void 0 != this.developerCallback.onNativeAdClick && this.developerCallback.onNativeAdClick(placementId, callbackInfo);
        },
        onNativeAdVideoStart: function onNativeAdVideoStart(placementId) {
          null != this.developerCallback && null != this.developerCallback.onNativeAdVideoStart && void 0 != this.developerCallback.onNativeAdVideoStart && this.developerCallback.onNativeAdVideoStart(placementId);
        },
        onNativeAdVideoEnd: function onNativeAdVideoEnd(placementId) {
          null != this.developerCallback && null != this.developerCallback.onNativeAdVideoEnd && void 0 != this.developerCallback.onNativeAdVideoEnd && this.developerCallback.onNativeAdVideoEnd(placementId);
        },
        onNativeAdCloseButtonTapped: function onNativeAdCloseButtonTapped(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onNativeAdCloseButtonTapped && void 0 != this.developerCallback.onNativeAdCloseButtonTapped && this.developerCallback.onNativeAdCloseButtonTapped(placementId, callbackInfo);
        },
        onAdSourceBiddingAttempt: function onAdSourceBiddingAttempt(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingAttempt && void 0 != this.developerCallback.onAdSourceBiddingAttempt && this.developerCallback.onAdSourceBiddingAttempt(placementId, callbackInfo);
        },
        onAdSourceBiddingFilled: function onAdSourceBiddingFilled(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFilled && void 0 != this.developerCallback.onAdSourceBiddingFilled && this.developerCallback.onAdSourceBiddingFilled(placementId, callbackInfo);
        },
        onAdSourceBiddingFail: function onAdSourceBiddingFail(placementId, errorInfo, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFail && void 0 != this.developerCallback.onAdSourceBiddingFail && this.developerCallback.onAdSourceBiddingFail(placementId, errorInfo, callbackInfo);
        },
        onAdSourceAttemp: function onAdSourceAttemp(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onAdSourceAttemp && void 0 != this.developerCallback.onAdSourceAttemp && this.developerCallback.onAdSourceAttemp(placementId, callbackInfo);
        },
        onAdSourceLoadFilled: function onAdSourceLoadFilled(placementId, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFilled && void 0 != this.developerCallback.onAdSourceLoadFilled && this.developerCallback.onAdSourceLoadFilled(placementId, callbackInfo);
        },
        onAdSourceLoadFail: function onAdSourceLoadFail(placementId, errorInfo, callbackInfo) {
          null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFail && void 0 != this.developerCallback.onAdSourceLoadFail && this.developerCallback.onAdSourceLoadFail(placementId, errorInfo, callbackInfo);
        }
      },
      loadNative: function loadNative(placementId, settings) {
        void 0 === settings && (settings = {});
        void 0 != platformBridge && null != platformBridge ? platformBridge.loadNative(placementId, JSON.stringify(settings)) : cc.log("You must run on Android or iOS.");
      },
      setAdListener: function setAdListener(listener) {
        var eventJSON = {};
        eventJSON[LoadedCallbackKey] = "ATNativeJSSDK.ATNativeListener.onNativeAdLoaded", 
        eventJSON[LoadFailCallbackKey] = "ATNativeJSSDK.ATNativeListener.onNativeAdLoadFail", 
        eventJSON[CloseCallbackKey] = "ATNativeJSSDK.ATNativeListener.onNativeAdCloseButtonTapped", 
        eventJSON[ClickCallbackKey] = "ATNativeJSSDK.ATNativeListener.onNativeAdClick", 
        eventJSON[ShowCallbackKey] = "ATNativeJSSDK.ATNativeListener.onNativeAdShow", eventJSON[VideoStartKey] = "ATNativeJSSDK.ATNativeListener.onNativeAdVideoStart", 
        eventJSON[VideoEndKey] = "ATNativeJSSDK.ATNativeListener.onNativeAdVideoEnd", eventJSON[BiddingAttempt] = "ATNativeJSSDK.ATNativeListener.onAdSourceBiddingAttempt", 
        eventJSON[BiddingFilled] = "ATNativeJSSDK.ATNativeListener.onAdSourceBiddingFilled", 
        eventJSON[BiddingFail] = "ATNativeJSSDK.ATNativeListener.onAdSourceBiddingFail", 
        eventJSON[Attemp] = "ATNativeJSSDK.ATNativeListener.onAdSourceAttemp", eventJSON[LoadFilled] = "ATNativeJSSDK.ATNativeListener.onAdSourceLoadFilled", 
        eventJSON[LoadFail] = "ATNativeJSSDK.ATNativeListener.onAdSourceLoadFail";
        void 0 != platformBridge && null != platformBridge ? platformBridge.setAdListener(JSON.stringify(eventJSON)) : cc.log("You must run on Android or iOS.");
        this.ATNativeListener.developerCallback = listener;
      },
      hasAdReady: function hasAdReady(placementId) {
        if (void 0 != platformBridge && null != platformBridge) return platformBridge.hasAdReady(placementId);
        cc.log("You must run on Android or iOS.");
        return false;
      },
      checkAdStatus: function checkAdStatus(placementId) {
        if (void 0 != platformBridge && null != platformBridge) return platformBridge.checkAdStatus(placementId);
        cc.log("You must run on Android or iOS.");
        return "";
      },
      showAd: function showAd(placementId, adViewProperty) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.showAd(placementId, JSON.stringify(adViewProperty.getAdViewProperty())) : cc.log("You must run on Android or iOS.");
      },
      showAdInScenario: function showAdInScenario(placementId, adViewProperty, scenario) {
        void 0 === scenario && (scenario = "");
        void 0 != platformBridge && null != platformBridge ? platformBridge.showAdInScenario(placementId, JSON.stringify(adViewProperty.getAdViewProperty()), scenario) : cc.log("You must run on Android or iOS.");
      },
      entryAdScenario: function entryAdScenario(placementId, scenario) {
        void 0 === scenario && (scenario = "");
        void 0 != platformBridge && null != platformBridge ? platformBridge.entryAdScenario(placementId, scenario) : cc.log("You must run on Android or iOS.");
      },
      removeAd: function removeAd(placementId) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.removeAd(placementId) : cc.log("You must run on Android or iOS.");
      },
      createLoadAdSize: function createLoadAdSize(width, height) {
        var loadAdSize = {};
        loadAdSize["width"] = width;
        loadAdSize["height"] = height;
        return loadAdSize;
      },
      AdViewProperty: cc.Class({
        parent: null,
        appIcon: null,
        mainImage: null,
        title: null,
        desc: null,
        adLogo: null,
        cta: null,
        rating: null,
        dislike: null,
        elements: null,
        createItemViewProperty: function createItemViewProperty(x, y, width, height, backgroundColor, textColor, textSize, isCustomClick) {
          void 0 === isCustomClick && (isCustomClick = false);
          var itemProperty = {};
          itemProperty["x"] = x;
          itemProperty["y"] = y;
          itemProperty["width"] = width;
          itemProperty["height"] = height;
          itemProperty["backgroundColor"] = backgroundColor;
          itemProperty["textColor"] = textColor;
          itemProperty["textSize"] = textSize;
          itemProperty["isCustomClick"] = isCustomClick;
          return itemProperty;
        },
        getAdViewProperty: function getAdViewProperty() {
          var nativeViewProperty = {};
          null != this.parent && (nativeViewProperty["parent"] = this.parent);
          null != this.appIcon && (nativeViewProperty["icon"] = this.appIcon);
          null != this.mainImage && (nativeViewProperty["mainImage"] = this.mainImage);
          null != this.title && (nativeViewProperty["title"] = this.title);
          null != this.desc && (nativeViewProperty["desc"] = this.desc);
          null != this.adLogo && (nativeViewProperty["adLogo"] = this.adLogo);
          null != this.cta && (nativeViewProperty["cta"] = this.cta);
          null != this.rating && (nativeViewProperty["rating"] = this.rating);
          null != this.dislike && (nativeViewProperty["dislike"] = this.dislike);
          null != this.elements && (nativeViewProperty["elements"] = this.elements);
          return nativeViewProperty;
        }
      })
    };
    var LoadedCallbackKey = "NativeLoaded";
    var LoadFailCallbackKey = "NativeLoadFail";
    var CloseCallbackKey = "NativeCloseButtonTapped";
    var ClickCallbackKey = "NativeClick";
    var ShowCallbackKey = "NativeShow";
    var VideoStartKey = "NativeVideoStart";
    var VideoEndKey = "NativeVideoEnd";
    var BiddingAttempt = "NativeBiddingAttempt";
    var BiddingFilled = "NativeBiddingFilled";
    var BiddingFail = "NativeBiddingFail";
    var Attemp = "NativeAttemp";
    var LoadFilled = "NativeLoadFilled";
    var LoadFail = "NativeLoadFail";
    window.ATNativeJSSDK = ATNativeSDK;
    cc._RF.pop();
  }, {
    "./Android/ATAndroidNativeJS": "ATAndroidNativeJS",
    "./iOS/ATiOSNativeJS": "ATiOSNativeJS"
  } ],
  ATRewardedVideoAutoAdJSSDK: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6ba77BCGgxORIaPVx/w+Oap", "ATRewardedVideoAutoAdJSSDK");
    "use strict";
    var ATAndroidRewardedVideoAutoAdJS = require("./Android/ATAndroidRewardedVideoAutoAdJS");
    var ATiOSRewardedVideoAutoAdJS = require("./iOS/ATiOSRewardedVideoAutoAdJS");
    var initPlatformBridge = function initPlatformBridge() {
      if (cc.sys.os === cc.sys.OS_IOS) return ATiOSRewardedVideoAutoAdJS;
      if (cc.sys.os === cc.sys.OS_ANDROID) return ATAndroidRewardedVideoAutoAdJS;
    };
    var platformBridge = initPlatformBridge();
    var ATRewardedVideoAutoAdSDK = ATRewardedVideoAutoAdSDK || {
      userIdKey: "userID",
      userDataKey: "media_ext",
      ATRewardedVideoListener: {
        developerCallback: null,
        onRewardedVideoAdLoaded: function onRewardedVideoAdLoaded(placementId) {
          ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded(" + placementId + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdLoaded && void 0 != this.developerCallback.onRewardedVideoAdLoaded && this.developerCallback.onRewardedVideoAdLoaded(placementId);
        },
        onRewardedVideoAdFailed: function onRewardedVideoAdFailed(placementId, errorInfo) {
          ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdFailed(" + placementId + ", " + errorInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdFailed && void 0 != this.developerCallback.onRewardedVideoAdFailed && this.developerCallback.onRewardedVideoAdFailed(placementId, errorInfo);
        },
        onRewardedVideoAdPlayStart: function onRewardedVideoAdPlayStart(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayStart && void 0 != this.developerCallback.onRewardedVideoAdPlayStart && this.developerCallback.onRewardedVideoAdPlayStart(placementId, callbackInfo);
        },
        onRewardedVideoAdPlayEnd: function onRewardedVideoAdPlayEnd(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayEnd && void 0 != this.developerCallback.onRewardedVideoAdPlayEnd && this.developerCallback.onRewardedVideoAdPlayEnd(placementId, callbackInfo);
        },
        onRewardedVideoAdPlayFailed: function onRewardedVideoAdPlayFailed(placementId, errorInfo, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed(" + placementId + ", " + errorInfo + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayFailed && void 0 != this.developerCallback.onRewardedVideoAdPlayFailed && this.developerCallback.onRewardedVideoAdPlayFailed(placementId, errorInfo, callbackInfo);
        },
        onRewardedVideoAdClosed: function onRewardedVideoAdClosed(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdClosed(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdClosed && void 0 != this.developerCallback.onRewardedVideoAdClosed && this.developerCallback.onRewardedVideoAdClosed(placementId, callbackInfo);
        },
        onRewardedVideoAdPlayClicked: function onRewardedVideoAdPlayClicked(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayClicked && void 0 != this.developerCallback.onRewardedVideoAdPlayClicked && this.developerCallback.onRewardedVideoAdPlayClicked(placementId, callbackInfo);
        },
        onReward: function onReward(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onReward(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onReward && void 0 != this.developerCallback.onReward && this.developerCallback.onReward(placementId, callbackInfo);
        },
        onRewardedVideoAdAgainPlayStart: function onRewardedVideoAdAgainPlayStart(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayStart(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayStart && void 0 != this.developerCallback.onRewardedVideoAdAgainPlayStart && this.developerCallback.onRewardedVideoAdAgainPlayStart(placementId, callbackInfo);
        },
        onRewardedVideoAdAgainPlayEnd: function onRewardedVideoAdAgainPlayEnd(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayEnd(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayEnd && void 0 != this.developerCallback.onRewardedVideoAdAgainPlayEnd && this.developerCallback.onRewardedVideoAdAgainPlayEnd(placementId, callbackInfo);
        },
        onRewardedVideoAdAgainPlayFailed: function onRewardedVideoAdAgainPlayFailed(placementId, errorInfo, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayFailed(" + placementId + ", " + errorInfo + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayFailed && void 0 != this.developerCallback.onRewardedVideoAdAgainPlayFailed && this.developerCallback.onRewardedVideoAdAgainPlayFailed(placementId, errorInfo, callbackInfo);
        },
        onRewardedVideoAdAgainPlayClicked: function onRewardedVideoAdAgainPlayClicked(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayClicked(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayClicked && void 0 != this.developerCallback.onRewardedVideoAdAgainPlayClicked && this.developerCallback.onRewardedVideoAdAgainPlayClicked(placementId, callbackInfo);
        },
        onAgainReward: function onAgainReward(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onAgainReward(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onAgainReward && void 0 != this.developerCallback.onAgainReward && this.developerCallback.onAgainReward(placementId, callbackInfo);
        }
      },
      setAdExtraData: function setAdExtraData(placementId, settings) {
        void 0 === settings && (settings = {});
        void 0 != platformBridge && null != platformBridge ? platformBridge.setAdExtraData(placementId, JSON.stringify(settings)) : cc.log("You must run on Android or iOS.");
      },
      addPlacementIds: function addPlacementIds(placementIds) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.addPlacementIds(JSON.stringify(placementIds)) : cc.log("You must run on Android or iOS.");
      },
      removePlacementId: function removePlacementId(placementIds) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.removePlacementId(JSON.stringify(placementIds)) : cc.log("You must run on Android or iOS.");
      },
      setAdListener: function setAdListener(listener) {
        var eventJSON = {};
        eventJSON[LoadedCallbackKey] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded", 
        eventJSON[LoadFailCallbackKey] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdFailed", 
        eventJSON[PlayStartCallbackKey] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart", 
        eventJSON[PlayEndCallbackKey] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd", 
        eventJSON[PlayFailCallbackKey] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed", 
        eventJSON[CloseCallbackKey] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdClosed", 
        eventJSON[ClickCallbackKey] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked", 
        eventJSON[RewardCallbackKey] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onReward", 
        eventJSON[AgainPlayStartCallbackKey] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayStart", 
        eventJSON[AgainPlayEndCallbackKey] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayEnd", 
        eventJSON[AgainPlayFailCallbackKey] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayFailed", 
        eventJSON[AgainClickCallbackKey] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayClicked", 
        eventJSON[AgainRewardCallbackKey] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onAgainReward";
        if (void 0 != platformBridge && null != platformBridge) {
          platformBridge.setAdListener(JSON.stringify(eventJSON));
          platformBridge.set;
        } else cc.log("You must run on Android or iOS.");
        this.ATRewardedVideoListener.developerCallback = listener;
      },
      hasAdReady: function hasAdReady(placementId) {
        if (void 0 != platformBridge && null != platformBridge) return platformBridge.hasAdReady(placementId);
        cc.log("You must run on Android or iOS.");
        return false;
      },
      checkAdStatus: function checkAdStatus(placementId) {
        if (void 0 != platformBridge && null != platformBridge) return platformBridge.checkAdStatus(placementId);
        cc.log("You must run on Android or iOS.");
        return "";
      },
      showAd: function showAd(placementId) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.showAd(placementId) : cc.log("You must run on Android or iOS.");
      },
      showAdInScenario: function showAdInScenario(placementId, scenario) {
        void 0 === scenario && (scenario = "");
        void 0 != platformBridge && null != platformBridge ? platformBridge.showAdInScenario(placementId, scenario) : cc.log("You must run on Android or iOS.");
      },
      entryAdScenario: function entryAdScenario(placementId, scenario) {
        void 0 === scenario && (scenario = "");
        void 0 != platformBridge && null != platformBridge ? platformBridge.entryAdScenario(placementId, scenario) : cc.log("You must run on Android or iOS.");
      }
    };
    var LoadedCallbackKey = "RewardedVideoAutoAdLoaded";
    var LoadFailCallbackKey = "RewardedVideoAutoAdLoadFail";
    var PlayStartCallbackKey = "RewardedVideoAutoAdPlayStart";
    var PlayEndCallbackKey = "RewardedVideoAutoAdPlayEnd";
    var PlayFailCallbackKey = "RewardedVideoAutoAdPlayFail";
    var CloseCallbackKey = "RewardedVideoAutoAdClose";
    var ClickCallbackKey = "RewardedVideoAutoAdClick";
    var RewardCallbackKey = "RewardedVideoAutoAdReward";
    var AgainPlayStartCallbackKey = "RewardedVideoAutoAdAgainPlayStart";
    var AgainPlayEndCallbackKey = "RewardedVideoAutoAdAgainPlayEnd";
    var AgainPlayFailCallbackKey = "RewardedVideoAutoAdAgainPlayFail";
    var AgainClickCallbackKey = "RewardedVideoAutoAdAgainClick";
    var AgainRewardCallbackKey = "RewardedVideoAutoAdAgainReward";
    window.ATRewardedVideoAutoAdJSSDK = ATRewardedVideoAutoAdSDK;
    cc._RF.pop();
  }, {
    "./Android/ATAndroidRewardedVideoAutoAdJS": "ATAndroidRewardedVideoAutoAdJS",
    "./iOS/ATiOSRewardedVideoAutoAdJS": "ATiOSRewardedVideoAutoAdJS"
  } ],
  ATRewardedVideoJSSDK: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2fcawJmUBNYK1Sio978Itu", "ATRewardedVideoJSSDK");
    "use strict";
    var ATAndroidRewardedVideoJS = require("./Android/ATAndroidRewardedVideoJS");
    var ATiOSRewardedVideoJS = require("./iOS/ATiOSRewardedVideoJS");
    var initPlatformBridge = function initPlatformBridge() {
      if (cc.sys.os === cc.sys.OS_IOS) return ATiOSRewardedVideoJS;
      if (cc.sys.os === cc.sys.OS_ANDROID) return ATAndroidRewardedVideoJS;
    };
    var platformBridge = initPlatformBridge();
    var ATRewardedVideoSDK = ATRewardedVideoSDK || {
      userIdKey: "userID",
      userDataKey: "media_ext",
      ATRewardedVideoListener: {
        developerCallback: null,
        onRewardedVideoAdLoaded: function onRewardedVideoAdLoaded(placementId) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded(" + placementId + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdLoaded && void 0 != this.developerCallback.onRewardedVideoAdLoaded && this.developerCallback.onRewardedVideoAdLoaded(placementId);
        },
        onRewardedVideoAdFailed: function onRewardedVideoAdFailed(placementId, errorInfo) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdFailed(" + placementId + ", " + errorInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdFailed && void 0 != this.developerCallback.onRewardedVideoAdFailed && this.developerCallback.onRewardedVideoAdFailed(placementId, errorInfo);
        },
        onRewardedVideoAdPlayStart: function onRewardedVideoAdPlayStart(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayStart && void 0 != this.developerCallback.onRewardedVideoAdPlayStart && this.developerCallback.onRewardedVideoAdPlayStart(placementId, callbackInfo);
        },
        onRewardedVideoAdPlayEnd: function onRewardedVideoAdPlayEnd(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayEnd && void 0 != this.developerCallback.onRewardedVideoAdPlayEnd && this.developerCallback.onRewardedVideoAdPlayEnd(placementId, callbackInfo);
        },
        onRewardedVideoAdPlayFailed: function onRewardedVideoAdPlayFailed(placementId, errorInfo, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed(" + placementId + ", " + errorInfo + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayFailed && void 0 != this.developerCallback.onRewardedVideoAdPlayFailed && this.developerCallback.onRewardedVideoAdPlayFailed(placementId, errorInfo, callbackInfo);
        },
        onRewardedVideoAdClosed: function onRewardedVideoAdClosed(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdClosed(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdClosed && void 0 != this.developerCallback.onRewardedVideoAdClosed && this.developerCallback.onRewardedVideoAdClosed(placementId, callbackInfo);
        },
        onRewardedVideoAdPlayClicked: function onRewardedVideoAdPlayClicked(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayClicked && void 0 != this.developerCallback.onRewardedVideoAdPlayClicked && this.developerCallback.onRewardedVideoAdPlayClicked(placementId, callbackInfo);
        },
        onReward: function onReward(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onReward(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onReward && void 0 != this.developerCallback.onReward && this.developerCallback.onReward(placementId, callbackInfo);
        },
        onAdSourceBiddingAttempt: function onAdSourceBiddingAttempt(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceBiddingAttempt(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingAttempt && void 0 != this.developerCallback.onAdSourceBiddingAttempt && this.developerCallback.onAdSourceBiddingAttempt(placementId, callbackInfo);
        },
        onAdSourceBiddingFilled: function onAdSourceBiddingFilled(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceBiddingFilled(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFilled && void 0 != this.developerCallback.onAdSourceBiddingFilled && this.developerCallback.onAdSourceBiddingFilled(placementId, callbackInfo);
        },
        onAdSourceBiddingFail: function onAdSourceBiddingFail(placementId, errorInfo, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceBiddingFail(" + placementId + ", " + errorInfo + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFail && void 0 != this.developerCallback.onAdSourceBiddingFail && this.developerCallback.onAdSourceBiddingFail(placementId, errorInfo, callbackInfo);
        },
        onAdSourceAttemp: function onAdSourceAttemp(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceAttemp(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onAdSourceAttemp && void 0 != this.developerCallback.onAdSourceAttemp && this.developerCallback.onAdSourceAttemp(placementId, callbackInfo);
        },
        onAdSourceLoadFilled: function onAdSourceLoadFilled(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceLoadFilled(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFilled && void 0 != this.developerCallback.onAdSourceLoadFilled && this.developerCallback.onAdSourceLoadFilled(placementId, callbackInfo);
        },
        onAdSourceLoadFail: function onAdSourceLoadFail(placementId, errorInfo, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceLoadFail(" + placementId + ", " + errorInfo + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFail && void 0 != this.developerCallback.onAdSourceLoadFail && this.developerCallback.onAdSourceLoadFail(placementId, errorInfo, callbackInfo);
        },
        onRewardedVideoAdAgainPlayStart: function onRewardedVideoAdAgainPlayStart(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayStart(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayStart && void 0 != this.developerCallback.onRewardedVideoAdAgainPlayStart && this.developerCallback.onRewardedVideoAdAgainPlayStart(placementId, callbackInfo);
        },
        onRewardedVideoAdAgainPlayEnd: function onRewardedVideoAdAgainPlayEnd(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayEnd(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayEnd && void 0 != this.developerCallback.onRewardedVideoAdAgainPlayEnd && this.developerCallback.onRewardedVideoAdAgainPlayEnd(placementId, callbackInfo);
        },
        onRewardedVideoAdAgainPlayFailed: function onRewardedVideoAdAgainPlayFailed(placementId, errorInfo, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayFailed(" + placementId + ", " + errorInfo + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayFailed && void 0 != this.developerCallback.onRewardedVideoAdAgainPlayFailed && this.developerCallback.onRewardedVideoAdAgainPlayFailed(placementId, errorInfo, callbackInfo);
        },
        onRewardedVideoAdAgainPlayClicked: function onRewardedVideoAdAgainPlayClicked(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayClicked(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayClicked && void 0 != this.developerCallback.onRewardedVideoAdAgainPlayClicked && this.developerCallback.onRewardedVideoAdAgainPlayClicked(placementId, callbackInfo);
        },
        onAgainReward: function onAgainReward(placementId, callbackInfo) {
          ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAgainReward(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onAgainReward && void 0 != this.developerCallback.onAgainReward && this.developerCallback.onAgainReward(placementId, callbackInfo);
        }
      },
      loadRewardedVideo: function loadRewardedVideo(placementId, settings) {
        void 0 === settings && (settings = {});
        void 0 != platformBridge && null != platformBridge ? platformBridge.loadRewardedVideo(placementId, JSON.stringify(settings)) : cc.log("You must run on Android or iOS.");
      },
      setAdListener: function setAdListener(listener) {
        var eventJSON = {};
        eventJSON[LoadedCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded", 
        eventJSON[LoadFailCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdFailed", 
        eventJSON[PlayStartCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart", 
        eventJSON[PlayEndCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd", 
        eventJSON[PlayFailCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed", 
        eventJSON[CloseCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdClosed", 
        eventJSON[ClickCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked", 
        eventJSON[RewardCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onReward", 
        eventJSON[BiddingAttempt] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceBiddingAttempt", 
        eventJSON[BiddingFilled] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceBiddingFilled", 
        eventJSON[BiddingFail] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceBiddingFail", 
        eventJSON[Attemp] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceAttemp", 
        eventJSON[LoadFilled] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceLoadFilled", 
        eventJSON[LoadFail] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceLoadFail", 
        eventJSON[AgainPlayStartCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayStart", 
        eventJSON[AgainPlayEndCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayEnd", 
        eventJSON[AgainPlayFailCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayFailed", 
        eventJSON[AgainClickCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayClicked", 
        eventJSON[AgainRewardCallbackKey] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAgainReward";
        if (void 0 != platformBridge && null != platformBridge) {
          platformBridge.setAdListener(JSON.stringify(eventJSON));
          platformBridge.set;
        } else cc.log("You must run on Android or iOS.");
        this.ATRewardedVideoListener.developerCallback = listener;
      },
      hasAdReady: function hasAdReady(placementId) {
        if (void 0 != platformBridge && null != platformBridge) return platformBridge.hasAdReady(placementId);
        cc.log("You must run on Android or iOS.");
        return false;
      },
      checkAdStatus: function checkAdStatus(placementId) {
        if (void 0 != platformBridge && null != platformBridge) return platformBridge.checkAdStatus(placementId);
        cc.log("You must run on Android or iOS.");
        return "";
      },
      showAd: function showAd(placementId) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.showAd(placementId) : cc.log("You must run on Android or iOS.");
      },
      showAdInScenario: function showAdInScenario(placementId, scenario) {
        void 0 === scenario && (scenario = "");
        void 0 != platformBridge && null != platformBridge ? platformBridge.showAdInScenario(placementId, scenario) : cc.log("You must run on Android or iOS.");
      },
      entryAdScenario: function entryAdScenario(placementId, scenario) {
        void 0 === scenario && (scenario = "");
        void 0 != platformBridge && null != platformBridge ? platformBridge.entryAdScenario(placementId, scenario) : cc.log("You must run on Android or iOS.");
      }
    };
    var LoadedCallbackKey = "RewardedVideoLoaded";
    var LoadFailCallbackKey = "RewardedVideoLoadFail";
    var PlayStartCallbackKey = "RewardedVideoPlayStart";
    var PlayEndCallbackKey = "RewardedVideoPlayEnd";
    var PlayFailCallbackKey = "RewardedVideoPlayFail";
    var CloseCallbackKey = "RewardedVideoClose";
    var ClickCallbackKey = "RewardedVideoClick";
    var RewardCallbackKey = "RewardedVideoReward";
    var BiddingAttempt = "RewardedVideoBiddingAttempt";
    var BiddingFilled = "RewardedVideoBiddingFilled";
    var BiddingFail = "RewardedVideoBiddingFail";
    var Attemp = "RewardedVideoAttemp";
    var LoadFilled = "RewardedVideoLoadFilled";
    var LoadFail = "RewardedVideoLoadFail";
    var AgainPlayStartCallbackKey = "RewardedVideoAgainPlayStart";
    var AgainPlayEndCallbackKey = "RewardedVideoAgainPlayEnd";
    var AgainPlayFailCallbackKey = "RewardedVideoAgainPlayFail";
    var AgainClickCallbackKey = "RewardedVideoAgainClick";
    var AgainRewardCallbackKey = "RewardedVideoAgainReward";
    window.ATRewardedVideoJSSDK = ATRewardedVideoSDK;
    cc._RF.pop();
  }, {
    "./Android/ATAndroidRewardedVideoJS": "ATAndroidRewardedVideoJS",
    "./iOS/ATiOSRewardedVideoJS": "ATiOSRewardedVideoJS"
  } ],
  ATiOSBannerJS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f4c2bSvwxE9YzGIFJLW+bV", "ATiOSBannerJS");
    "use strict";
    var ATiOSJS = require("assets/Script/AnyThinkAds/iOS/ATiOSJS");
    var OC_WRAPPER_CLASS = "ATBannerAdWrapper";
    var ATiOSBannerJS = ATiOSBannerJS || {
      loadBanner: function loadBanner(placementId, extra) {
        ATiOSJS.printJsLog("ATiOSBannerJS::loadBanner(" + placementId + ", " + extra + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "loadBannerWithPlacementID:extra:", placementId, extra);
      },
      setAdListener: function setAdListener(listener) {
        ATiOSJS.printJsLog("ATiOSBannerJS::setAdListener(" + listener + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setDelegates:", listener);
      },
      hasAdReady: function hasAdReady(placementId) {
        ATiOSJS.printJsLog("ATiOSBannerJS::hasAdReady(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "bannerReadyForPlacementID:", placementId);
      },
      checkAdStatus: function checkAdStatus(placementId) {
        ATiOSJS.printJsLog("ATiOSBannerJS::checkAdStatus(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "bannerCheckAdStatusForPlacementID:", placementId);
      },
      showAdInPosition: function showAdInPosition(placementId, position) {
        ATiOSJS.printJsLog("ATiOSBannerJS::showAdInPosition(" + placementId + ", " + position + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showBannerWithPlacementID:scene:position:", placementId, null, position);
      },
      showAdInPositionAndScenario: function showAdInPositionAndScenario(placementId, position, scenario) {
        ATiOSJS.printJsLog("ATiOSBannerJS::showAdInPositionAndScenario(" + placementId + ", " + position + ", " + scenario + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showBannerWithPlacementID:scene:position:", placementId, scenario, position);
      },
      showAdInRectangle: function showAdInRectangle(placementId, showAdRect) {
        ATiOSJS.printJsLog("ATiOSBannerJS::showAdInRectangle(" + placementId + ", " + showAdRect + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showBannerWithPlacementID:scene:rect:", placementId, null, showAdRect);
      },
      showAdInRectangleAndScenario: function showAdInRectangleAndScenario(placementId, showAdRect, scenario) {
        ATiOSJS.printJsLog("ATiOSBannerJS::showAdInRectangleAndScenario(" + placementId + ", " + showAdRect + ", " + scenario + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showBannerWithPlacementID:scene:rect:", placementId, scenario, showAdRect);
      },
      removeAd: function removeAd(placementId) {
        ATiOSJS.printJsLog("ATiOSBannerJS::removeAd(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "removeAd:", placementId);
      },
      reShowAd: function reShowAd(placementId) {
        ATiOSJS.printJsLog("ATiOSBannerJS::reShowAd(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "reShowAd:", placementId);
      },
      hideAd: function hideAd(placementId) {
        ATiOSJS.printJsLog("ATiOSBannerJS::hideAd(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "hideAd:", placementId);
      }
    };
    module.exports = ATiOSBannerJS;
    cc._RF.pop();
  }, {
    "assets/Script/AnyThinkAds/iOS/ATiOSJS": void 0
  } ],
  ATiOSInterstitialAutoAdJS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7d838ecJpKzJSOb67Q+gt1", "ATiOSInterstitialAutoAdJS");
    "use strict";
    var ATiOSJS = require("assets/Script/AnyThinkAds/iOS/ATiOSJS");
    var OC_WRAPPER_CLASS = "ATInterstitialAutoAdWrapper";
    var ATiOSInterstitialAutoAdJS = ATiOSInterstitialAutoAdJS || {
      setAdListener: function setAdListener(listener) {
        ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::setAdListener(" + listener + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setDelegates:", listener);
      },
      setAdExtraData: function setAdExtraData(placementId, extra) {
        ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::setAdExtraData(" + placementId + ", " + extra + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setAutoLocalExtra:customDataJSONString:", placementId, extra);
      },
      addPlacementIds: function addPlacementIds(placementId) {
        ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::addPlacementIds(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "addAutoLoadAdPlacementID:", placementId);
      },
      removePlacementId: function removePlacementId(placementId) {
        ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::removePlacementId(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "removeAutoLoadAdPlacementID:", placementId);
      },
      hasAdReady: function hasAdReady(placementId) {
        ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::hasAdReady(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "autoLoadInterstitialAdReadyForPlacementID:", placementId);
      },
      checkAdStatus: function checkAdStatus(placementId) {
        ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::hasAdReady(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "checkAutoAdStatus:", placementId);
      },
      entryAdScenario: function entryAdScenario(placementId, scenario) {
        ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::entryAdScenario(" + placementId + ", " + scenario + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "entryAutoAdScenarioWithPlacementID:scenarioID:", placementId, scenario);
      },
      showAd: function showAd(placementId) {
        ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::showAd(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showAutoInterstitialAdWithPlacementID:scenarioID:", placementId, null);
      },
      showAdInScenario: function showAdInScenario(placementId, scenario) {
        ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::showAdInScenario(" + placementId + ", " + scenario + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showAutoInterstitialAdWithPlacementID:scenarioID:", placementId, scenario);
      }
    };
    module.exports = ATiOSInterstitialAutoAdJS;
    cc._RF.pop();
  }, {
    "assets/Script/AnyThinkAds/iOS/ATiOSJS": void 0
  } ],
  ATiOSInterstitialJS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b91f2eDh45BU62jONyRwc3p", "ATiOSInterstitialJS");
    "use strict";
    var ATiOSJS = require("assets/Script/AnyThinkAds/iOS/ATiOSJS");
    var OC_WRAPPER_CLASS = "ATInterstitialAdWrapper";
    var ATiOSInterstitialJS = ATiOSInterstitialJS || {
      loadInterstitial: function loadInterstitial(placementId, extra) {
        ATiOSJS.printJsLog("ATiOSInterstitialJS::loadInterstitial(" + placementId + ", " + extra + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "loadInterstitialWithPlacementID:extra:", placementId, extra);
      },
      setAdListener: function setAdListener(listener) {
        ATiOSJS.printJsLog("ATiOSInterstitialJS::setAdListener(" + listener + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setDelegates:", listener);
      },
      hasAdReady: function hasAdReady(placementId) {
        ATiOSJS.printJsLog("ATiOSInterstitialJS::hasAdReady(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "interstitialReadyForPlacementID:", placementId);
      },
      checkAdStatus: function checkAdStatus(placementId) {
        ATiOSJS.printJsLog("ATiOSInterstitialJS::checkAdStatus(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "checkAdStatus:", placementId);
      },
      setUserData: function setUserData(placementId, userId, userData) {
        cc.log("Android-setUserData");
      },
      showAd: function showAd(placementId) {
        ATiOSJS.printJsLog("ATiOSInterstitialJS::showAd(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showInterstitialWithPlacementID:scene:", placementId, null);
      },
      showAdInScenario: function showAdInScenario(placementId, scenario) {
        ATiOSJS.printJsLog("ATiOSInterstitialJS::showAd(" + placementId + ", " + scenario + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showInterstitialWithPlacementID:scene:", placementId, scenario);
      },
      entryAdScenario: function entryAdScenario(placementId, scenario) {
        ATiOSJS.printJsLog("ATiOSInterstitialJS::entryAdScenario(" + placementId + ", " + scenario + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "entryAdScenarioWithPlacementID:scene:", placementId, scenario);
      }
    };
    module.exports = ATiOSInterstitialJS;
    cc._RF.pop();
  }, {
    "assets/Script/AnyThinkAds/iOS/ATiOSJS": void 0
  } ],
  ATiOSJS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eab2bTKNClGy4V+1XWkf+mE", "ATiOSJS");
    "use strict";
    var OC_ATSDK_MANAGER_CLASS = "ATSDKManager";
    var OC_BIRDGE_CLASS = "ATJSBridge";
    var ATiOSJS = ATiOSJS || {
      initSDK: function initSDK(appid, appkey) {
        this.printJsLog("ATiOSJS::initSDK(" + appid + "," + appkey + ")");
        jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "startWithAppID:appKey:", appid, appkey);
      },
      initCustomMap: function initCustomMap(customMap) {
        this.printJsLog("ATiOSJS::initCustomMap(" + customMap + ")");
        jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setCustomData:", customMap);
      },
      setPlacementCustomMap: function setPlacementCustomMap(placmentId, customMap) {
        this.printJsLog("ATiOSJS::setPlacementCustomMap(" + placmentId + ", " + customMap + ")");
        jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setCustomData:forPlacementID:", customMap, placmentId);
      },
      setGDPRLevel: function setGDPRLevel(level) {
        this.printJsLog("ATiOSJS::setGDPRLevel(" + level + ")");
        jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setDataConsent:", level);
      },
      getGDPRLevel: function getGDPRLevel() {
        this.printJsLog("ATiOSJS::getGDPRLevel()");
        return jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "dataConsent");
      },
      getUserLocation: function getUserLocation(callbackMethod) {
        this.printJsLog("ATiOSJS::getUserLocation(" + callbackMethod + ")");
        jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "getUserLocationWithCallback:", callbackMethod);
      },
      showGDPRAuth: function showGDPRAuth() {
        this.printJsLog("ATiOSJS::showGDPRAuth()");
        jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "presentDataConsentDialog");
      },
      setLogDebug: function setLogDebug(debug) {
        this.printJsLog("ATiOSJS::setLogDebug(" + debug + ")");
        jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setDebugLog:", debug);
      },
      printJsLog: function printJsLog(msg) {
        void 0 != msg && null != msg && jsb.reflection.callStaticMethod(OC_BIRDGE_CLASS, "log:", msg);
      },
      deniedUploadDeviceInfo: function deniedUploadDeviceInfo(deniedInfo) {
        this.printJsLog("ATiOSJS::deniedUploadDeviceInfo(" + deniedInfo + ")");
        jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "deniedUploadDeviceInfo:", deniedInfo);
      }
    };
    module.exports = ATiOSJS;
    cc._RF.pop();
  }, {} ],
  ATiOSNativeJS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3f9cBkI79L45Icp9EOEfr4", "ATiOSNativeJS");
    "use strict";
    var ATiOSJS = require("assets/Script/AnyThinkAds/iOS/ATiOSJS");
    var OC_WRAPPER_CLASS = "ATNativeAdWrapper";
    var ATiOSNativeJS = ATiOSNativeJS || {
      loadNative: function loadNative(placementId, settings) {
        ATiOSJS.printJsLog("ATiOSBannerJS::loadNative(" + placementId + ", " + settings + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "loadNativeWithPlacementID:extra:", placementId, settings);
      },
      setAdListener: function setAdListener(listener) {
        ATiOSJS.printJsLog("ATiOSNativeJS::setAdListener(" + listener + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setDelegates:", listener);
      },
      hasAdReady: function hasAdReady(placementId) {
        ATiOSJS.printJsLog("ATiOSNativeJS::hasAdReady(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "nativeReadyForPlacementID:", placementId);
      },
      checkAdStatus: function checkAdStatus(placementId) {
        ATiOSJS.printJsLog("ATiOSNativeJS::checkAdStatus(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "nativeCheckAdStatusForPlacementID:", placementId);
      },
      showAd: function showAd(placementId, adViewProperty) {
        ATiOSJS.printJsLog("ATiOSNativeJS::showAd(" + placementId + ", " + adViewProperty + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showNativeWithPlacementID:scene:metrics:", placementId, null, adViewProperty);
      },
      showAdInScenario: function showAdInScenario(placementId, adViewProperty, scenario) {
        ATiOSJS.printJsLog("ATiOSNativeJS::showAdInScenario(" + placementId + ", " + adViewProperty + ", " + scenario + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showNativeWithPlacementID:scene:metrics:", placementId, scenario, adViewProperty);
      },
      removeAd: function removeAd(placementId) {
        ATiOSJS.printJsLog("ATiOSNativeJS::removeAd(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "removeNativeWithPlacementID:", placementId);
      },
      entryAdScenario: function entryAdScenario(placementId, scenario) {
        ATiOSJS.printJsLog("ATiOSInterstitialJS::entryAdScenario(" + placementId + ", " + scenario + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "entryAdScenarioWithPlacementID:scene:", placementId, scenario);
      }
    };
    module.exports = ATiOSNativeJS;
    cc._RF.pop();
  }, {
    "assets/Script/AnyThinkAds/iOS/ATiOSJS": void 0
  } ],
  ATiOSRewardedVideoAutoAdJS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c400aRhiuxPPqnKe1gvsgAa", "ATiOSRewardedVideoAutoAdJS");
    "use strict";
    var ATiOSJS = require("assets/Script/AnyThinkAds/iOS/ATiOSJS");
    var OC_RV_WRAPPER_CLASS = "ATRewardedVideoAutoAdWrapper";
    var ATiOSRewardedVideoAutoAdJS = ATiOSRewardedVideoAutoAdJS || {
      setAdListener: function setAdListener(listener) {
        ATiOSJS.printJsLog("ATiOSRewardedVideoAutoAdJS::setAdListener(" + listener + ")");
        jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "setDelegates:", listener);
      },
      setAdExtraData: function setAdExtraData(placementId, extra) {
        ATiOSJS.printJsLog("ATiOSRewardedVideoAutoAdJS::setAdExtraData(" + placementId + ", " + extra + ")");
        jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "setAutoLocalExtra:customDataJSONString:", placementId, extra);
      },
      addPlacementIds: function addPlacementIds(placementId) {
        ATiOSJS.printJsLog("ATiOSRewardedVideoAutoAdJS::addPlacementIds(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "addAutoLoadAdPlacementID:", placementId);
      },
      removePlacementId: function removePlacementId(placementId) {
        ATiOSJS.printJsLog("ATiOSRewardedVideoAutoAdJS::removePlacementId(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "removeAutoLoadAdPlacementID:", placementId);
      },
      hasAdReady: function hasAdReady(placementId) {
        ATiOSJS.printJsLog("ATiOSRewardedVideoAutoAdJS::hasAdReady(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "autoLoadRewardedVideoReadyForPlacementID:", placementId);
      },
      checkAdStatus: function checkAdStatus(placementId) {
        ATiOSJS.printJsLog("ATiOSRewardedVideoAutoAdJS::hasAdReady(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "checkAutoAdStatus:", placementId);
      },
      entryAdScenario: function entryAdScenario(placementId, scenario) {
        ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::entryAdScenario(" + placementId + ", " + scenario + ")");
        jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "entryAutoAdScenarioWithPlacementID:scenarioID:", placementId, scenario);
      },
      showAd: function showAd(placementId) {
        ATiOSJS.printJsLog("ATiOSRewardedVideoAutoAdJS::showAd(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "showAutoRewardedVideoWithPlacementID:scenarioID:", placementId, null);
      },
      showAdInScenario: function showAdInScenario(placementId, scenario) {
        ATiOSJS.printJsLog("ATiOSRewardedVideoAutoAdJS::showAdInScenario(" + placementId + ", " + scenario + ")");
        jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "showAutoRewardedVideoWithPlacementID:scenarioID:", placementId, scenario);
      }
    };
    module.exports = ATiOSRewardedVideoAutoAdJS;
    cc._RF.pop();
  }, {
    "assets/Script/AnyThinkAds/iOS/ATiOSJS": void 0
  } ],
  ATiOSRewardedVideoJS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "85f1chdcYBH5qVaK/doj323", "ATiOSRewardedVideoJS");
    "use strict";
    var ATiOSJS = require("assets/Script/AnyThinkAds/iOS/ATiOSJS");
    var OC_RV_WRAPPER_CLASS = "ATRewardedVideoWrapper";
    var ATiOSRewardedVideoJS = ATiOSRewardedVideoJS || {
      loadRewardedVideo: function loadRewardedVideo(placementId, extra) {
        ATiOSJS.printJsLog("ATiOSRewardedVideoJS::loadRewardedVideo(" + placementId + ", " + extra + ")");
        jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "loadRewardedVideoWithPlacementID:extra:", placementId, extra);
      },
      setAdListener: function setAdListener(listener) {
        ATiOSJS.printJsLog("ATiOSRewardedVideoJS::setAdListener(" + listener + ")");
        jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "setDelegates:", listener);
      },
      hasAdReady: function hasAdReady(placementId) {
        ATiOSJS.printJsLog("ATiOSRewardedVideoJS::hasAdReady(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "rewardedVideoReadyForPlacementID:", placementId);
      },
      checkAdStatus: function checkAdStatus(placementId) {
        ATiOSJS.printJsLog("ATiOSRewardedVideoJS::checkAdStatus(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "checkAdStatus:", placementId);
      },
      setUserData: function setUserData(placementId, userId, userData) {
        cc.log("Android-setUserData");
      },
      showAd: function showAd(placementId) {
        ATiOSJS.printJsLog("ATiOSRewardedVideoJS::showAd(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "showRewardedVideoWithPlacementID:scene:", placementId, null);
      },
      showAdInScenario: function showAdInScenario(placementId, scenario) {
        ATiOSJS.printJsLog("ATiOSRewardedVideoJS::showAdInScenario(" + placementId + ", " + scenario + ")");
        return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "showRewardedVideoWithPlacementID:scene:", placementId, scenario);
      },
      entryAdScenario: function entryAdScenario(placementId, scenario) {
        ATiOSJS.printJsLog("ATiOSInterstitialJS::entryAdScenario(" + placementId + ", " + scenario + ")");
        return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "entryAdScenarioWithPlacementID:scene:", placementId, scenario);
      }
    };
    module.exports = ATiOSRewardedVideoJS;
    cc._RF.pop();
  }, {
    "assets/Script/AnyThinkAds/iOS/ATiOSJS": void 0
  } ],
  RewardVideo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7b995I6pFNZ6mW8uP29vRh", "RewardVideo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.RewardVideo = void 0;
    var TopOnAdConfig_1 = require("./TopOnAdConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ATJSSDK = window.ATJSSDK;
    var ATRewardedVideoJSSDK = window.ATRewardedVideoJSSDK;
    var RewardVideo = function(_super) {
      __extends(RewardVideo, _super);
      function RewardVideo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.RewardedVideoListener = {
          onRewardedVideoAdLoaded: function(placementId) {
            ATJSSDK.printLog("AnyThinkRewardedVideoDemo::onRewardedVideoAdLoaded(" + placementId + ")");
          },
          onRewardedVideoAdFailed: function(placementId, errorInfo) {
            ATJSSDK.printLog("AnyThinkRewardedVideoDemo::onRewardedVideoAdFailed(" + placementId + ", " + errorInfo + ")");
          },
          onRewardedVideoAdPlayStart: function(placementId, callbackInfo) {
            ATJSSDK.printLog("AnyThinkRewardedVideoDemo::onRewardedVideoAdPlayStart(" + placementId + ", " + callbackInfo + ")");
          },
          onRewardedVideoAdPlayEnd: function(placementId, callbackInfo) {
            ATJSSDK.printLog("AnyThinkRewardedVideoDemo::onRewardedVideoAdPlayEnd(" + placementId + ", " + callbackInfo + ")");
          },
          onRewardedVideoAdPlayFailed: function(placementId, errorInfo, callbackInfo) {
            ATJSSDK.printLog("AnyThinkRewardedVideoDemo::onRewardedVideoAdPlayFailed(" + placementId + ", " + errorInfo + ", " + callbackInfo + ")");
          },
          onRewardedVideoAdClosed: function(placementId, callbackInfo) {
            ATJSSDK.printLog("AnyThinkRewardedVideoDemo::onRewardedVideoAdClosed(" + placementId + ", " + callbackInfo + ")");
          },
          onRewardedVideoAdPlayClicked: function(placementId, callbackInfo) {
            ATJSSDK.printLog("AnyThinkRewardedVideoDemo::onRewardedVideoAdPlayClicked(" + placementId + ", " + callbackInfo + ")");
          },
          onReward: function(placementId, callbackInfo) {
            ATJSSDK.printLog("AnyThinkRewardedVideoDemo::onReward(" + placementId + ", " + callbackInfo + ")");
          }
        };
        return _this;
      }
      RewardVideo.prototype.start = function() {};
      RewardVideo.prototype.placementID = function() {
        if (cc.sys.os === cc.sys.OS_IOS) return TopOnAdConfig_1.default.PlacementIDIos;
        if (cc.sys.os === cc.sys.OS_ANDROID) return TopOnAdConfig_1.default.PlacementIDAndroid;
      };
      RewardVideo.prototype.InitialAd = function() {
        ATJSSDK.setLogDebug(true);
        var customMap = {
          appCustomKey1: "appCustomValue1",
          appCustomKey2: "appCustomValue2"
        };
        ATJSSDK.initCustomMap(customMap);
        var customPlacementId = this.placementID();
        var placementCustomMap = {
          placementCustomKey1: "placementCustomValue1",
          placementCustomKey2: "placementCustomValue2"
        };
        ATJSSDK.setPlacementCustomMap(customPlacementId, placementCustomMap);
        var GDPRLevel = ATJSSDK.getGDPRLevel();
        ATJSSDK.initSDK(TopOnAdConfig_1.default.AppID, TopOnAdConfig_1.default.AppKey);
        ATJSSDK.getUserLocation(function(userLocation) {
          userLocation === ATJSSDK.kATUserLocationInEU && ATJSSDK.getGDPRLevel() === ATJSSDK.UNKNOWN && ATJSSDK.showGDPRAuth();
        });
      };
      RewardVideo.prototype.LoadRewardAd = function() {
        var setting = {};
        setting[ATRewardedVideoJSSDK.userIdKey] = "test_user_id";
        setting[ATRewardedVideoJSSDK.userDataKey] = "test_user_data";
        ATRewardedVideoJSSDK.loadRewardedVideo(this.placementID(), setting);
        ATRewardedVideoJSSDK.setAdListener(this.RewardedVideoListener);
      };
      RewardVideo.prototype.HasAdReady = function() {
        var b = ATRewardedVideoJSSDK.hasAdReady(this.placementID());
        b ? cc.log("reward ad is ready") : cc.log("reward ad not ready");
      };
      RewardVideo.prototype.CheckAdStatus = function() {
        var status = ATRewardedVideoJSSDK.checkAdStatus(this.placementID());
        cc.log("reward ad status:" + status);
      };
      RewardVideo.prototype.ShowAd = function() {
        cc.log("ShowAd Start");
        ATRewardedVideoJSSDK.showAd(this.placementID());
      };
      RewardVideo = __decorate([ ccclass() ], RewardVideo);
      return RewardVideo;
    }(cc.Component);
    exports.RewardVideo = RewardVideo;
    cc._RF.pop();
  }, {
    "./TopOnAdConfig": "TopOnAdConfig"
  } ],
  Startup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8a75cmKHFtJfaVeafimkuMv", "Startup");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var director = cc.director;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Startup = function(_super) {
      __extends(Startup, _super);
      function Startup() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Startup.prototype.OnRewardVideoClick = function() {
        director.loadScene("RewardVideoScene");
      };
      Startup = __decorate([ ccclass ], Startup);
      return Startup;
    }(cc.Component);
    exports.default = Startup;
    cc._RF.pop();
  }, {} ],
  TopOnAdConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b175aLrewdBgY6xR6FMIx40", "TopOnAdConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TopOnAdConfig = function() {
      function TopOnAdConfig() {}
      TopOnAdConfig.AppID = "a5aa1f9deda26d";
      TopOnAdConfig.AppKey = "4f7b9ac17decb9babec83aac078742c7";
      TopOnAdConfig.PlacementIDIos = "b5b72b21184aa8";
      TopOnAdConfig.PlacementIDAndroid = "b5b728e7a08cd4";
      return TopOnAdConfig;
    }();
    exports.default = TopOnAdConfig;
    cc._RF.pop();
  }, {} ]
}, {}, [ "ATBannerJSSDK", "ATInterstitialAutoAdJSSDK", "ATInterstitialJSSDK", "ATJSSDK", "ATNativeJSSDK", "ATRewardedVideoAutoAdJSSDK", "ATRewardedVideoJSSDK", "ATAndroidBannerJS", "ATAndroidInterstitialAutoAdJS", "ATAndroidInterstitialJS", "ATAndroidJS", "ATAndroidNativeJS", "ATAndroidRewardedVideoAutoAdJS", "ATAndroidRewardedVideoJS", "ATiOSBannerJS", "ATiOSInterstitialAutoAdJS", "ATiOSInterstitialJS", "ATiOSJS", "ATiOSNativeJS", "ATiOSRewardedVideoAutoAdJS", "ATiOSRewardedVideoJS", "RewardVideo", "Startup", "TopOnAdConfig" ]);