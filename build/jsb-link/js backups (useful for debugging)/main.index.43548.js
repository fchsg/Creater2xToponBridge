window.__require = function e(d, n, i) {
function t(a, l) {
if (!n[a]) {
if (!d[a]) {
var r = a.split("/");
r = r[r.length - 1];
if (!d[r]) {
var c = "function" == typeof __require && __require;
if (!l && c) return c(r, !0);
if (o) return o(r, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = r;
}
var A = n[a] = {
exports: {}
};
d[a][0].call(A.exports, function(e) {
return t(d[a][1][e] || e);
}, A, A.exports, e, d, n, i);
}
return n[a].exports;
}
for (var o = "function" == typeof __require && __require, a = 0; a < i.length; a++) t(i[a]);
return t;
}({
ATAndroidBannerJS: [ function(e, d) {
"use strict";
cc._RF.push(d, "2d7725PXOFCX5tPSjJIzSZ9", "ATAndroidBannerJS");
var n = "com/anythink/cocosjs/ATBannerJSBridge", i = i || {
loadBanner: function(e, d) {
cc.log("Android-loadBanner:" + d);
jsb.reflection.callStaticMethod(n, "load", "(Ljava/lang/String;Ljava/lang/String;)V", e, d);
},
setAdListener: function(e) {
cc.log("Android-setAdListener");
jsb.reflection.callStaticMethod(n, "setAdListener", "(Ljava/lang/String;)V", e);
},
hasAdReady: function(e) {
cc.log("Android-hasAdReady");
return jsb.reflection.callStaticMethod(n, "isAdReady", "(Ljava/lang/String;)Z", e);
},
checkAdStatus: function(e) {
cc.log("Android-checkAdStatus:" + e);
return jsb.reflection.callStaticMethod(n, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", e);
},
showAdInPosition: function(e, d) {
cc.log("Android-showAdInPosistion");
jsb.reflection.callStaticMethod(n, "showWithPosition", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e, d, "");
},
showAdInPositionAndScenario: function(e, d, i) {
cc.log("Android-showAdInPositionAndScenario");
jsb.reflection.callStaticMethod(n, "showWithPosition", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e, d, i);
},
showAdInRectangle: function(e, d) {
cc.log("Android-showAdInRectangle");
jsb.reflection.callStaticMethod(n, "showWithRect", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e, d, "");
},
showAdInRectangleAndScenario: function(e, d, i) {
cc.log("Android-showAdInRectangleAndScenario");
jsb.reflection.callStaticMethod(n, "showWithRect", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e, d, i);
},
removeAd: function(e) {
cc.log("Android-removeAd");
jsb.reflection.callStaticMethod(n, "remove", "(Ljava/lang/String;)V", e);
},
reShowAd: function(e) {
cc.log("Android-reShowAd");
jsb.reflection.callStaticMethod(n, "reshow", "(Ljava/lang/String;)V", e);
},
hideAd: function(e) {
cc.log("Android-hideAd");
jsb.reflection.callStaticMethod(n, "hide", "(Ljava/lang/String;)V", e);
}
};
d.exports = i;
cc._RF.pop();
}, {} ],
ATAndroidInterstitialAutoAdJS: [ function(e, d) {
"use strict";
cc._RF.push(d, "2c8ba7sIpNG7r4YPiIlZrD3", "ATAndroidInterstitialAutoAdJS");
var n = "com/anythink/cocosjs/ATInterstitialAutoAdJSBridge", i = i || {
setAdListener: function(e) {
cc.log("Android-setAdListener");
jsb.reflection.callStaticMethod(n, "setAdListener", "(Ljava/lang/String;)V", e);
},
addPlacementIds: function(e) {
cc.log("Android-addPlacementIds");
jsb.reflection.callStaticMethod(n, "addPlacementIds", "(Ljava/lang/String;)V", e);
},
removePlacementId: function(e) {
cc.log("Android-removePlacementId");
jsb.reflection.callStaticMethod(n, "removePlacementId", "(Ljava/lang/String;)V", e);
},
setAdExtraData: function(e, d) {
cc.log("Android-setAdExtraData");
jsb.reflection.callStaticMethod(n, "setAdExtraData", "(Ljava/lang/String;Ljava/lang/String;)V", e, d);
},
hasAdReady: function(e) {
cc.log("Android-hasAdReady");
return jsb.reflection.callStaticMethod(n, "isAdReady", "(Ljava/lang/String;)Z", e);
},
checkAdStatus: function(e) {
cc.log("Android-checkAdStatus:" + e);
return jsb.reflection.callStaticMethod(n, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", e);
},
showAd: function(e) {
cc.log("Android-ivautoad_showAd:" + e);
jsb.reflection.callStaticMethod(n, "show", "(Ljava/lang/String;)V", e);
},
showAdInScenario: function(e, d) {
cc.log("Android-ivautoad_showAdInScenario:" + e + "---" + d);
jsb.reflection.callStaticMethod(n, "show", "(Ljava/lang/String;Ljava/lang/String;)V", e, d);
},
entryAdScenario: function(e, d) {
cc.log("Android-entryAdScenario:" + e + "---" + d);
jsb.reflection.callStaticMethod(n, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", e, d);
}
};
d.exports = i;
cc._RF.pop();
}, {} ],
ATAndroidInterstitialJS: [ function(e, d) {
"use strict";
cc._RF.push(d, "101deT7//lHMZl0VciHRgLx", "ATAndroidInterstitialJS");
var n = "com/anythink/cocosjs/ATInterstitialJSBridge", i = i || {
loadInterstitial: function(e, d) {
cc.log("Android-loadInterstitial");
jsb.reflection.callStaticMethod(n, "load", "(Ljava/lang/String;Ljava/lang/String;)V", e, d);
},
setAdListener: function(e) {
cc.log("Android-setAdListener");
jsb.reflection.callStaticMethod(n, "setAdListener", "(Ljava/lang/String;)V", e);
},
hasAdReady: function(e) {
cc.log("Android-hasAdReady");
return jsb.reflection.callStaticMethod(n, "isAdReady", "(Ljava/lang/String;)Z", e);
},
checkAdStatus: function(e) {
cc.log("Android-checkAdStatus:" + e);
return jsb.reflection.callStaticMethod(n, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", e);
},
showAd: function(e) {
cc.log("Android-showAd:" + e);
jsb.reflection.callStaticMethod(n, "show", "(Ljava/lang/String;)V", e);
},
showAdInScenario: function(e, d) {
cc.log("Android-showAdInScenario:" + e + "---" + d);
jsb.reflection.callStaticMethod(n, "show", "(Ljava/lang/String;Ljava/lang/String;)V", e, d);
},
entryAdScenario: function(e, d) {
cc.log("Android-entryAdScenario:" + e + "---" + d);
jsb.reflection.callStaticMethod(n, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", e, d);
}
};
d.exports = i;
cc._RF.pop();
}, {} ],
ATAndroidJS: [ function(e, d) {
"use strict";
cc._RF.push(d, "0773apTYa9EzbwqihsMSHr6", "ATAndroidJS");
var n = "com/anythink/cocosjs/ATJSBridge", i = i || {
printJsLog: function(e) {
null != e && null != e && jsb.reflection.callStaticMethod("android/util/Log", "i", "(Ljava/lang/String;Ljava/lang/String;)I", "AT-Cocos-JS", e);
},
initSDK: function(e, d) {
jsb.reflection.callStaticMethod(n, "initSDK", "(Ljava/lang/String;Ljava/lang/String;)V", e, d);
},
initCustomMap: function(e) {
jsb.reflection.callStaticMethod(n, "initCustomMap", "(Ljava/lang/String;)V", e);
},
setPlacementCustomMap: function(e, d) {
jsb.reflection.callStaticMethod(n, "setPlacementCustomMap", "(Ljava/lang/String;Ljava/lang/String;)V", e, d);
},
setGDPRLevel: function(e) {
jsb.reflection.callStaticMethod(n, "setGDPRLevel", "(I)V", e);
},
getGDPRLevel: function() {
return jsb.reflection.callStaticMethod(n, "getGDPRLevel", "()I");
},
getUserLocation: function(e) {
jsb.reflection.callStaticMethod(n, "getUserLocation", "(Ljava/lang/String;)V", e);
},
showGDPRAuth: function() {
jsb.reflection.callStaticMethod(n, "showGDPRAuth", "()V");
},
setLogDebug: function(e) {
jsb.reflection.callStaticMethod(n, "setLogDebug", "(Z)V", e);
},
deniedUploadDeviceInfo: function(e) {
jsb.reflection.callStaticMethod(n, "deniedUploadDeviceInfo", "(Ljava/lang/String;)V", e);
}
};
d.exports = i;
cc._RF.pop();
}, {} ],
ATAndroidNativeJS: [ function(e, d) {
"use strict";
cc._RF.push(d, "abc830eQLlAaq5iUE+858Gc", "ATAndroidNativeJS");
var n = "com/anythink/cocosjs/ATNativeJSBridge", i = i || {
loadNative: function(e, d) {
cc.log("Android-loadNative");
jsb.reflection.callStaticMethod(n, "load", "(Ljava/lang/String;Ljava/lang/String;)V", e, d);
},
setAdListener: function(e) {
cc.log("Android-setAdListener");
jsb.reflection.callStaticMethod(n, "setAdListener", "(Ljava/lang/String;)V", e);
},
hasAdReady: function(e) {
cc.log("Android-hasAdReady");
return jsb.reflection.callStaticMethod(n, "isAdReady", "(Ljava/lang/String;)Z", e);
},
checkAdStatus: function(e) {
cc.log("Android-checkAdStatus:" + e);
return jsb.reflection.callStaticMethod(n, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", e);
},
showAd: function(e, d) {
cc.log("Android-showAd");
jsb.reflection.callStaticMethod(n, "show", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e, d, "");
},
showAdInScenario: function(e, d, i) {
cc.log("Android-showAdInScenario");
jsb.reflection.callStaticMethod(n, "show", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e, d, i);
},
removeAd: function(e) {
cc.log("Android-removeAd");
jsb.reflection.callStaticMethod(n, "remove", "(Ljava/lang/String;)V", e);
},
entryAdScenario: function(e, d) {
cc.log("Android-entryAdScenario:" + e + "---" + d);
jsb.reflection.callStaticMethod(n, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", e, d);
}
};
d.exports = i;
cc._RF.pop();
}, {} ],
ATAndroidRewardedVideoAutoAdJS: [ function(e, d) {
"use strict";
cc._RF.push(d, "5a59czjJrhFeryy4dDHGqC2", "ATAndroidRewardedVideoAutoAdJS");
var n = "com/anythink/cocosjs/ATRewardedVideoAutoAdJSBridge", i = i || {
setAdListener: function(e) {
cc.log("Android-setAdListener");
jsb.reflection.callStaticMethod(n, "setAdListener", "(Ljava/lang/String;)V", e);
},
addPlacementIds: function(e) {
cc.log("Android-addPlacementIds");
jsb.reflection.callStaticMethod(n, "addPlacementIds", "(Ljava/lang/String;)V", e);
},
removePlacementId: function(e) {
cc.log("Android-removePlacementId");
jsb.reflection.callStaticMethod(n, "removePlacementId", "(Ljava/lang/String;)V", e);
},
setAdExtraData: function(e, d) {
cc.log("Android-setAdExtraData");
jsb.reflection.callStaticMethod(n, "setAdExtraData", "(Ljava/lang/String;Ljava/lang/String;)V", e, d);
},
hasAdReady: function(e) {
cc.log("Android-hasAdReady");
return jsb.reflection.callStaticMethod(n, "isAdReady", "(Ljava/lang/String;)Z", e);
},
checkAdStatus: function(e) {
cc.log("Android-checkAdStatus:" + e);
return jsb.reflection.callStaticMethod(n, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", e);
},
showAd: function(e) {
cc.log("Android-rvautoad_showAd:" + e);
jsb.reflection.callStaticMethod(n, "show", "(Ljava/lang/String;)V", e);
},
showAdInScenario: function(e, d) {
cc.log("Android-rvautoad_showAdInScenario:" + e + "---" + d);
jsb.reflection.callStaticMethod(n, "show", "(Ljava/lang/String;Ljava/lang/String;)V", e, d);
},
entryAdScenario: function(e, d) {
cc.log("Android-entryAdScenario:" + e + "---" + d);
jsb.reflection.callStaticMethod(n, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", e, d);
}
};
d.exports = i;
cc._RF.pop();
}, {} ],
ATAndroidRewardedVideoJS: [ function(e, d) {
"use strict";
cc._RF.push(d, "bffd9H5UVNEFJn5K4z6pey1", "ATAndroidRewardedVideoJS");
var n = "com/anythink/cocosjs/ATRewardedVideoJSBridge", i = i || {
loadRewardedVideo: function(e, d) {
cc.log("Android-loadRewardedVideo");
jsb.reflection.callStaticMethod(n, "load", "(Ljava/lang/String;Ljava/lang/String;)V", e, d);
},
setAdListener: function(e) {
cc.log("Android-setAdListener");
jsb.reflection.callStaticMethod(n, "setAdListener", "(Ljava/lang/String;)V", e);
},
hasAdReady: function(e) {
cc.log("Android-hasAdReady");
return jsb.reflection.callStaticMethod(n, "isAdReady", "(Ljava/lang/String;)Z", e);
},
checkAdStatus: function(e) {
cc.log("Android-checkAdStatus:" + e);
return jsb.reflection.callStaticMethod(n, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", e);
},
showAd: function(e) {
cc.log("Android-rv_showAd:" + e);
jsb.reflection.callStaticMethod(n, "show", "(Ljava/lang/String;)V", e);
},
showAdInScenario: function(e, d) {
cc.log("Android-rv_showAdInScenario:" + e + "---" + d);
jsb.reflection.callStaticMethod(n, "show", "(Ljava/lang/String;Ljava/lang/String;)V", e, d);
},
entryAdScenario: function(e, d) {
cc.log("Android-entryAdScenario:" + e + "---" + d);
jsb.reflection.callStaticMethod(n, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", e, d);
}
};
d.exports = i;
cc._RF.pop();
}, {} ],
ATBannerJSSDK: [ function(e, d) {
"use strict";
cc._RF.push(d, "966f8RL+kNFnZMh03w18dNB", "ATBannerJSSDK");
var n = e("./Android/ATAndroidBannerJS"), i = e("./iOS/ATiOSBannerJS"), t = cc.sys.os === cc.sys.OS_IOS ? i : cc.sys.os === cc.sys.OS_ANDROID ? n : void 0, o = o || {
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
onBannerAdLoaded: function(e) {
null != this.developerCallback && null != this.developerCallback.onBannerAdLoaded && null != this.developerCallback.onBannerAdLoaded && this.developerCallback.onBannerAdLoaded(e);
},
onBannerAdLoadFail: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onBannerAdLoadFail && null != this.developerCallback.onBannerAdLoadFail && this.developerCallback.onBannerAdLoadFail(e, d);
},
onBannerAdShow: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onBannerAdShow && null != this.developerCallback.onBannerAdShow && this.developerCallback.onBannerAdShow(e, d);
},
onBannerAdClick: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onBannerAdClick && null != this.developerCallback.onBannerAdClick && this.developerCallback.onBannerAdClick(e, d);
},
onBannerAdAutoRefresh: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onBannerAdAutoRefresh && null != this.developerCallback.onBannerAdAutoRefresh && this.developerCallback.onBannerAdAutoRefresh(e, d);
},
onBannerAdAutoRefreshFail: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onBannerAdAutoRefreshFail && null != this.developerCallback.onBannerAdAutoRefreshFail && this.developerCallback.onBannerAdAutoRefreshFail(e, d);
},
onBannerAdCloseButtonTapped: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onBannerAdCloseButtonTapped && null != this.developerCallback.onBannerAdCloseButtonTapped && this.developerCallback.onBannerAdCloseButtonTapped(e, d);
},
onAdSourceBiddingAttempt: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingAttempt && null != this.developerCallback.onAdSourceBiddingAttempt && this.developerCallback.onAdSourceBiddingAttempt(e, d);
},
onAdSourceBiddingFilled: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFilled && null != this.developerCallback.onAdSourceBiddingFilled && this.developerCallback.onAdSourceBiddingFilled(e, d);
},
onAdSourceBiddingFail: function(e, d, n) {
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFail && null != this.developerCallback.onAdSourceBiddingFail && this.developerCallback.onAdSourceBiddingFail(e, d, n);
},
onAdSourceAttemp: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onAdSourceAttemp && null != this.developerCallback.onAdSourceAttemp && this.developerCallback.onAdSourceAttemp(e, d);
},
onAdSourceLoadFilled: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFilled && null != this.developerCallback.onAdSourceLoadFilled && this.developerCallback.onAdSourceLoadFilled(e, d);
},
onAdSourceLoadFail: function(e, d, n) {
null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFail && null != this.developerCallback.onAdSourceLoadFail && this.developerCallback.onAdSourceLoadFail(e, d, n);
}
},
loadBanner: function(e, d) {
void 0 === d && (d = {});
if (null != t && null != t) {
if (d.hasOwnProperty(o.kATBannerAdLoadingExtraBannerAdSizeStruct)) {
var n = d[o.kATBannerAdLoadingExtraBannerAdSizeStruct];
d.width = n.width;
d.height = n.height;
}
t.loadBanner(e, JSON.stringify(d));
} else cc.log("You must run on Android or iOS.");
},
setAdListener: function(e) {
var d = {};
d[a] = "ATBannerJSSDK.ATBannerListener.onBannerAdLoaded", d[l] = "ATBannerJSSDK.ATBannerListener.onBannerAdLoadFail", 
d[r] = "ATBannerJSSDK.ATBannerListener.onBannerAdCloseButtonTapped", d[c] = "ATBannerJSSDK.ATBannerListener.onBannerAdClick", 
d[A] = "ATBannerJSSDK.ATBannerListener.onBannerAdShow", d[s] = "ATBannerJSSDK.ATBannerListener.onBannerAdAutoRefresh", 
d[u] = "ATBannerJSSDK.ATBannerListener.onBannerAdAutoRefreshFail", d[S] = "ATBannerJSSDK.ATBannerListener.onAdSourceBiddingAttempt", 
d[h] = "ATBannerJSSDK.ATBannerListener.onAdSourceBiddingFilled", d[p] = "ATBannerJSSDK.ATBannerListener.onAdSourceBiddingFail", 
d[v] = "ATBannerJSSDK.ATBannerListener.onAdSourceAttemp", d[g] = "ATBannerJSSDK.ATBannerListener.onAdSourceLoadFilled", 
d[w] = "ATBannerJSSDK.ATBannerListener.onAdSourceLoadFail";
null != t && null != t ? t.setAdListener(JSON.stringify(d)) : cc.log("You must run on Android or iOS.");
this.ATBannerListener.developerCallback = e;
},
hasAdReady: function(e) {
if (null != t && null != t) return t.hasAdReady(e);
cc.log("You must run on Android or iOS.");
return !1;
},
checkAdStatus: function(e) {
if (null != t && null != t) return t.checkAdStatus(e);
cc.log("You must run on Android or iOS.");
return "";
},
showAdInPosition: function(e, d) {
null != t && null != t ? t.showAdInPosition(e, d) : cc.log("You must run on Android or iOS.");
},
showAdInPositionAndScenario: function(e, d, n) {
null != t && null != t ? t.showAdInPosition(e, d, n) : cc.log("You must run on Android or iOS.");
},
showAdInRectangle: function(e, d) {
null != t && null != t ? t.showAdInRectangle(e, JSON.stringify(d)) : cc.log("You must run on Android or iOS.");
},
showAdInRectangleAndScenario: function(e, d, n) {
null != t && null != t ? t.showAdInRectangle(e, JSON.stringify(d), n) : cc.log("You must run on Android or iOS.");
},
removeAd: function(e) {
null != t && null != t ? t.removeAd(e) : cc.log("You must run on Android or iOS.");
},
reShowAd: function(e) {
null != t && null != t ? t.reShowAd(e) : cc.log("You must run on Android or iOS.");
},
hideAd: function(e) {
null != t && null != t ? t.hideAd(e) : cc.log("You must run on Android or iOS.");
},
createLoadAdSize: function(e, d) {
var n = {};
n.width = e;
n.height = d;
return n;
},
createShowAdRect: function(e, d, n, i) {
var t = {};
t.x = e;
t.y = d;
t.width = n;
t.height = i;
return t;
}
}, a = "BannerLoaded", l = "BannerLoadFail", r = "BannerCloseButtonTapped", c = "BannerClick", A = "BannerShow", s = "BannerRefresh", u = "BannerRefreshFail", S = "BannerBiddingAttempt", h = "BannerBiddingFilled", p = "BannerBiddingFail", v = "BannerAttemp", g = "BannerLoadFilled", w = "BannerLoadFail";
window.ATBannerJSSDK = o;
cc._RF.pop();
}, {
"./Android/ATAndroidBannerJS": "ATAndroidBannerJS",
"./iOS/ATiOSBannerJS": "ATiOSBannerJS"
} ],
ATInterstitialAutoAdJSSDK: [ function(e, d) {
"use strict";
cc._RF.push(d, "0e3beGTlu1PWpA5Dxw0L8BS", "ATInterstitialAutoAdJSSDK");
var n = e("./Android/ATAndroidInterstitialAutoAdJS"), i = e("./iOS/ATiOSInterstitialAutoAdJS"), t = cc.sys.os === cc.sys.OS_IOS ? i : cc.sys.os === cc.sys.OS_ANDROID ? n : void 0, o = o || {
UseInterstitialAsInterstitial: "UseInterstitialAsInterstitial",
ATInterstitialListener: {
developerCallback: null,
onInterstitialAdLoaded: function(e) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdLoaded && null != this.developerCallback.onInterstitialAdLoaded && this.developerCallback.onInterstitialAdLoaded(e);
},
onInterstitialAdLoadFail: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdLoadFail && null != this.developerCallback.onInterstitialAdLoadFail && this.developerCallback.onInterstitialAdLoadFail(e, d);
},
onInterstitialAdShow: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdShow && null != this.developerCallback.onInterstitialAdShow && this.developerCallback.onInterstitialAdShow(e, d);
},
onInterstitialAdStartPlayingVideo: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdStartPlayingVideo && null != this.developerCallback.onInterstitialAdStartPlayingVideo && this.developerCallback.onInterstitialAdStartPlayingVideo(e, d);
},
onInterstitialAdEndPlayingVideo: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdEndPlayingVideo && null != this.developerCallback.onInterstitialAdEndPlayingVideo && this.developerCallback.onInterstitialAdEndPlayingVideo(e, d);
},
onInterstitialAdFailedToPlayVideo: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdFailedToPlayVideo && null != this.developerCallback.onInterstitialAdFailedToPlayVideo && this.developerCallback.onInterstitialAdFailedToPlayVideo(e, d);
},
onInterstitialAdFailedToShow: function(e) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdFailedToShow && null != this.developerCallback.onInterstitialAdFailedToShow && this.developerCallback.onInterstitialAdFailedToShow(e);
},
onInterstitialAdClose: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdClose && null != this.developerCallback.onInterstitialAdClose && this.developerCallback.onInterstitialAdClose(e, d);
},
onInterstitialAdClick: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdClick && null != this.developerCallback.onInterstitialAdClick && this.developerCallback.onInterstitialAdClick(e, d);
}
},
setAdExtraData: function(e, d) {
void 0 === d && (d = {});
null != t && null != t ? t.setAdExtraData(e, JSON.stringify(d)) : cc.log("You must run on Android or iOS.");
},
addPlacementIds: function(e) {
null != t && null != t ? t.addPlacementIds(JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
},
removePlacementId: function(e) {
null != t && null != t ? t.removePlacementId(JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
},
setAdListener: function(e) {
var d = {};
d[a] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdLoaded", 
d[l] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdLoadFail", 
d[r] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdStartPlayingVideo", 
d[c] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdEndPlayingVideo", 
d[A] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdFailedToPlayVideo", 
d[s] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdClose", 
d[u] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdClick", 
d[S] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdShow";
null != t && null != t ? t.setAdListener(JSON.stringify(d)) : cc.log("You must run on Android or iOS.");
this.ATInterstitialListener.developerCallback = e;
},
hasAdReady: function(e) {
if (null != t && null != t) return t.hasAdReady(e);
cc.log("You must run on Android or iOS.");
return !1;
},
checkAdStatus: function(e) {
if (null != t && null != t) return t.checkAdStatus(e);
cc.log("You must run on Android or iOS.");
return "";
},
showAd: function(e) {
null != t && null != t ? t.showAd(e) : cc.log("You must run on Android or iOS.");
},
showAdInScenario: function(e, d) {
void 0 === d && (d = "");
null != t && null != t ? t.showAdInScenario(e, d) : cc.log("You must run on Android or iOS.");
},
entryAdScenario: function(e, d) {
void 0 === d && (d = "");
null != t && null != t ? t.entryAdScenario(e, d) : cc.log("You must run on Android or iOS.");
}
}, a = "InterstitialAutoAdLoaded", l = "InterstitialAutoAdLoadFail", r = "InterstitialAutoAdPlayStart", c = "InterstitialAutoAdPlayEnd", A = "InterstitialAutoAdPlayFail", s = "InterstitialAutoAdClose", u = "InterstitialAutoAdClick", S = "InterstitialAutoAdAdShow";
window.ATInterstitialAutoAdJSSDK = o;
cc._RF.pop();
}, {
"./Android/ATAndroidInterstitialAutoAdJS": "ATAndroidInterstitialAutoAdJS",
"./iOS/ATiOSInterstitialAutoAdJS": "ATiOSInterstitialAutoAdJS"
} ],
ATInterstitialJSSDK: [ function(e, d) {
"use strict";
cc._RF.push(d, "648b3o6HHJOPr8hXZ+6mlY2", "ATInterstitialJSSDK");
var n = e("./iOS/ATiOSInterstitialJS"), i = e("./Android/ATAndroidInterstitialJS"), t = cc.sys.os === cc.sys.OS_IOS ? n : cc.sys.os === cc.sys.OS_ANDROID ? i : void 0, o = o || {
UseInterstitialAsInterstitial: "UseInterstitialAsInterstitial",
ATInterstitialListener: {
developerCallback: null,
onInterstitialAdLoaded: function(e) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdLoaded && null != this.developerCallback.onInterstitialAdLoaded && this.developerCallback.onInterstitialAdLoaded(e);
},
onInterstitialAdLoadFail: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdLoadFail && null != this.developerCallback.onInterstitialAdLoadFail && this.developerCallback.onInterstitialAdLoadFail(e, d);
},
onInterstitialAdShow: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdShow && null != this.developerCallback.onInterstitialAdShow && this.developerCallback.onInterstitialAdShow(e, d);
},
onInterstitialAdStartPlayingVideo: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdStartPlayingVideo && null != this.developerCallback.onInterstitialAdStartPlayingVideo && this.developerCallback.onInterstitialAdStartPlayingVideo(e, d);
},
onInterstitialAdEndPlayingVideo: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdEndPlayingVideo && null != this.developerCallback.onInterstitialAdEndPlayingVideo && this.developerCallback.onInterstitialAdEndPlayingVideo(e, d);
},
onInterstitialAdFailedToPlayVideo: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdFailedToPlayVideo && null != this.developerCallback.onInterstitialAdFailedToPlayVideo && this.developerCallback.onInterstitialAdFailedToPlayVideo(e, d);
},
onInterstitialAdFailedToShow: function(e) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdFailedToShow && null != this.developerCallback.onInterstitialAdFailedToShow && this.developerCallback.onInterstitialAdFailedToShow(e);
},
onInterstitialAdClose: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdClose && null != this.developerCallback.onInterstitialAdClose && this.developerCallback.onInterstitialAdClose(e, d);
},
onInterstitialAdClick: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdClick && null != this.developerCallback.onInterstitialAdClick && this.developerCallback.onInterstitialAdClick(e, d);
},
onAdSourceBiddingAttempt: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingAttempt && null != this.developerCallback.onAdSourceBiddingAttempt && this.developerCallback.onAdSourceBiddingAttempt(e, d);
},
onAdSourceBiddingFilled: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFilled && null != this.developerCallback.onAdSourceBiddingFilled && this.developerCallback.onAdSourceBiddingFilled(e, d);
},
onAdSourceBiddingFail: function(e, d, n) {
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFail && null != this.developerCallback.onAdSourceBiddingFail && this.developerCallback.onAdSourceBiddingFail(e, d, n);
},
onAdSourceAttemp: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onAdSourceAttemp && null != this.developerCallback.onAdSourceAttemp && this.developerCallback.onAdSourceAttemp(e, d);
},
onAdSourceLoadFilled: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFilled && null != this.developerCallback.onAdSourceLoadFilled && this.developerCallback.onAdSourceLoadFilled(e, d);
},
onAdSourceLoadFail: function(e, d, n) {
null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFail && null != this.developerCallback.onAdSourceLoadFail && this.developerCallback.onAdSourceLoadFail(e, d, n);
}
},
loadInterstitial: function(e, d) {
void 0 === d && (d = {});
null != t && null != t ? t.loadInterstitial(e, JSON.stringify(d)) : cc.log("You must run on Android or iOS.");
},
setAdListener: function(e) {
var d = {};
d[a] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdLoaded", d[l] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdLoadFail", 
d[r] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdStartPlayingVideo", 
d[c] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdEndPlayingVideo", 
d[A] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdFailedToPlayVideo", 
d[s] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdClose", d[u] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdClick", 
d[S] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdShow", d[h] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdFailedToShow", 
d[p] = "ATInterstitialJSSDK.ATInterstitialListener.onAdSourceBiddingAttempt", d[v] = "ATInterstitialJSSDK.ATInterstitialListener.onAdSourceBiddingFilled", 
d[g] = "ATInterstitialJSSDK.ATInterstitialListener.onAdSourceBiddingFail", d[w] = "ATInterstitialJSSDK.ATInterstitialListener.onAdSourceAttemp", 
d[R] = "ATInterstitialJSSDK.ATInterstitialListener.onAdSourceLoadFilled", d[T] = "ATInterstitialJSSDK.ATInterstitialListener.onAdSourceLoadFail";
null != t && null != t ? t.setAdListener(JSON.stringify(d)) : cc.log("You must run on Android or iOS.");
this.ATInterstitialListener.developerCallback = e;
},
hasAdReady: function(e) {
if (null != t && null != t) return t.hasAdReady(e);
cc.log("You must run on Android or iOS.");
return !1;
},
checkAdStatus: function(e) {
if (null != t && null != t) return t.checkAdStatus(e);
cc.log("You must run on Android or iOS.");
return "";
},
showAd: function(e) {
null != t && null != t ? t.showAd(e) : cc.log("You must run on Android or iOS.");
},
showAdInScenario: function(e, d) {
void 0 === d && (d = "");
null != t && null != t ? t.showAdInScenario(e, d) : cc.log("You must run on Android or iOS.");
},
entryAdScenario: function(e, d) {
void 0 === d && (d = "");
null != t && null != t ? t.entryAdScenario(e, d) : cc.log("You must run on Android or iOS.");
}
}, a = "InterstitialLoaded", l = "InterstitialLoadFail", r = "InterstitialPlayStart", c = "InterstitialPlayEnd", A = "InterstitialPlayFail", s = "InterstitialClose", u = "InterstitialClick", S = "InterstitialAdShow", h = "InterstitialAdShowFail", p = "InterstitialBiddingAttempt", v = "InterstitialBiddingFilled", g = "InterstitialBiddingFail", w = "InterstitialAttemp", R = "InterstitialLoadFilled", T = "InterstitialLoadFail";
window.ATInterstitialJSSDK = o;
cc._RF.pop();
}, {
"./Android/ATAndroidInterstitialJS": "ATAndroidInterstitialJS",
"./iOS/ATiOSInterstitialJS": "ATiOSInterstitialJS"
} ],
ATJSSDK: [ function(e, d) {
"use strict";
cc._RF.push(d, "9e6a7g1zFhLwpnQuQECQBxd", "ATJSSDK");
var n = e("./Android/ATAndroidJS"), i = e("./iOS/ATiOSJS"), t = !1, o = cc.sys.os === cc.sys.OS_IOS ? i : cc.sys.os === cc.sys.OS_ANDROID ? n : void 0, a = a || {
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
getUserLocationCallback: function(e) {
null != this.userLocationCallback && null != this.userLocationCallback && this.userLocationCallback(e);
}
},
initSDK: function(e, d) {
null != o && null != o ? o.initSDK(e, d) : cc.log("You must run on Android or iOS.");
},
initCustomMap: function(e) {
null != o && null != o ? null != e && null != e && o.initCustomMap(JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
},
setPlacementCustomMap: function(e, d) {
null != o && null != o ? null != d && null != d && o.setPlacementCustomMap(e, JSON.stringify(d)) : cc.log("You must run on Android or iOS.");
},
setGDPRLevel: function(e) {
null != o && null != o ? o.setGDPRLevel(e) : cc.log("You must run on Android or iOS.");
},
getGDPRLevel: function() {
if (null != o && null != o) return o.getGDPRLevel();
cc.log("You must run on Android or iOS.");
return this.UNKNOWN;
},
getUserLocation: function(e) {
this.ATSDKListener.userLocationCallback = e;
null != o && null != o ? o.getUserLocation(l) : cc.log("You must run on Android or iOS.");
},
showGDPRAuth: function() {
null != o && null != o ? o.showGDPRAuth() : cc.log("You must run on Android or iOS.");
},
setLogDebug: function(e) {
t = e;
null != o && null != o ? o.setLogDebug(e) : cc.log("You must run on Android or iOS.");
},
printLog: function(e) {
null != e && null != e && t && null != o && (null != o && null != o ? o.printJsLog(e) : cc.log("You must run on Android or iOS."));
},
deniedUploadDeviceInfo: function(e) {
if (null != o && null != o) {
if (null != e) {
for (var d = e.length, n = "", i = 0; i < d; i++) {
var t = e[i];
n = 0 == i ? t : n + "," + t;
}
cc.log("test__" + n);
o.deniedUploadDeviceInfo(n);
}
} else cc.log("You must run on Android or iOS.");
}
}, l = "ATJSSDK.ATSDKListener.getUserLocationCallback";
window.ATJSSDK = a;
cc._RF.pop();
}, {
"./Android/ATAndroidJS": "ATAndroidJS",
"./iOS/ATiOSJS": "ATiOSJS"
} ],
ATNativeJSSDK: [ function(e, d) {
"use strict";
cc._RF.push(d, "d3f27a16q5OiZTVRZhIWF6Q", "ATNativeJSSDK");
var n = e("./Android/ATAndroidNativeJS"), i = e("./iOS/ATiOSNativeJS"), t = cc.sys.os === cc.sys.OS_IOS ? i : cc.sys.os === cc.sys.OS_ANDROID ? n : void 0, o = o || {
ATNativeListener: {
developerCallback: null,
onNativeAdLoaded: function(e) {
null != this.developerCallback && null != this.developerCallback.onNativeAdLoaded && null != this.developerCallback.onNativeAdLoaded && this.developerCallback.onNativeAdLoaded(e);
},
onNativeAdLoadFail: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onNativeAdLoadFail && null != this.developerCallback.onNativeAdLoadFail && this.developerCallback.onNativeAdLoadFail(e, d);
},
onNativeAdShow: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onNativeAdShow && null != this.developerCallback.onNativeAdShow && this.developerCallback.onNativeAdShow(e, d);
},
onNativeAdClick: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onNativeAdClick && null != this.developerCallback.onNativeAdClick && this.developerCallback.onNativeAdClick(e, d);
},
onNativeAdVideoStart: function(e) {
null != this.developerCallback && null != this.developerCallback.onNativeAdVideoStart && null != this.developerCallback.onNativeAdVideoStart && this.developerCallback.onNativeAdVideoStart(e);
},
onNativeAdVideoEnd: function(e) {
null != this.developerCallback && null != this.developerCallback.onNativeAdVideoEnd && null != this.developerCallback.onNativeAdVideoEnd && this.developerCallback.onNativeAdVideoEnd(e);
},
onNativeAdCloseButtonTapped: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onNativeAdCloseButtonTapped && null != this.developerCallback.onNativeAdCloseButtonTapped && this.developerCallback.onNativeAdCloseButtonTapped(e, d);
},
onAdSourceBiddingAttempt: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingAttempt && null != this.developerCallback.onAdSourceBiddingAttempt && this.developerCallback.onAdSourceBiddingAttempt(e, d);
},
onAdSourceBiddingFilled: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFilled && null != this.developerCallback.onAdSourceBiddingFilled && this.developerCallback.onAdSourceBiddingFilled(e, d);
},
onAdSourceBiddingFail: function(e, d, n) {
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFail && null != this.developerCallback.onAdSourceBiddingFail && this.developerCallback.onAdSourceBiddingFail(e, d, n);
},
onAdSourceAttemp: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onAdSourceAttemp && null != this.developerCallback.onAdSourceAttemp && this.developerCallback.onAdSourceAttemp(e, d);
},
onAdSourceLoadFilled: function(e, d) {
null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFilled && null != this.developerCallback.onAdSourceLoadFilled && this.developerCallback.onAdSourceLoadFilled(e, d);
},
onAdSourceLoadFail: function(e, d, n) {
null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFail && null != this.developerCallback.onAdSourceLoadFail && this.developerCallback.onAdSourceLoadFail(e, d, n);
}
},
loadNative: function(e, d) {
void 0 === d && (d = {});
null != t && null != t ? t.loadNative(e, JSON.stringify(d)) : cc.log("You must run on Android or iOS.");
},
setAdListener: function(e) {
var d = {};
d[a] = "ATNativeJSSDK.ATNativeListener.onNativeAdLoaded", d[l] = "ATNativeJSSDK.ATNativeListener.onNativeAdLoadFail", 
d[r] = "ATNativeJSSDK.ATNativeListener.onNativeAdCloseButtonTapped", d[c] = "ATNativeJSSDK.ATNativeListener.onNativeAdClick", 
d[A] = "ATNativeJSSDK.ATNativeListener.onNativeAdShow", d[s] = "ATNativeJSSDK.ATNativeListener.onNativeAdVideoStart", 
d[u] = "ATNativeJSSDK.ATNativeListener.onNativeAdVideoEnd", d[S] = "ATNativeJSSDK.ATNativeListener.onAdSourceBiddingAttempt", 
d[h] = "ATNativeJSSDK.ATNativeListener.onAdSourceBiddingFilled", d[p] = "ATNativeJSSDK.ATNativeListener.onAdSourceBiddingFail", 
d[v] = "ATNativeJSSDK.ATNativeListener.onAdSourceAttemp", d[g] = "ATNativeJSSDK.ATNativeListener.onAdSourceLoadFilled", 
d[w] = "ATNativeJSSDK.ATNativeListener.onAdSourceLoadFail";
null != t && null != t ? t.setAdListener(JSON.stringify(d)) : cc.log("You must run on Android or iOS.");
this.ATNativeListener.developerCallback = e;
},
hasAdReady: function(e) {
if (null != t && null != t) return t.hasAdReady(e);
cc.log("You must run on Android or iOS.");
return !1;
},
checkAdStatus: function(e) {
if (null != t && null != t) return t.checkAdStatus(e);
cc.log("You must run on Android or iOS.");
return "";
},
showAd: function(e, d) {
null != t && null != t ? t.showAd(e, JSON.stringify(d.getAdViewProperty())) : cc.log("You must run on Android or iOS.");
},
showAdInScenario: function(e, d, n) {
void 0 === n && (n = "");
null != t && null != t ? t.showAdInScenario(e, JSON.stringify(d.getAdViewProperty()), n) : cc.log("You must run on Android or iOS.");
},
entryAdScenario: function(e, d) {
void 0 === d && (d = "");
null != t && null != t ? t.entryAdScenario(e, d) : cc.log("You must run on Android or iOS.");
},
removeAd: function(e) {
null != t && null != t ? t.removeAd(e) : cc.log("You must run on Android or iOS.");
},
createLoadAdSize: function(e, d) {
var n = {};
n.width = e;
n.height = d;
return n;
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
createItemViewProperty: function(e, d, n, i, t, o, a, l) {
void 0 === l && (l = !1);
var r = {};
r.x = e;
r.y = d;
r.width = n;
r.height = i;
r.backgroundColor = t;
r.textColor = o;
r.textSize = a;
r.isCustomClick = l;
return r;
},
getAdViewProperty: function() {
var e = {};
null != this.parent && (e.parent = this.parent);
null != this.appIcon && (e.icon = this.appIcon);
null != this.mainImage && (e.mainImage = this.mainImage);
null != this.title && (e.title = this.title);
null != this.desc && (e.desc = this.desc);
null != this.adLogo && (e.adLogo = this.adLogo);
null != this.cta && (e.cta = this.cta);
null != this.rating && (e.rating = this.rating);
null != this.dislike && (e.dislike = this.dislike);
null != this.elements && (e.elements = this.elements);
return e;
}
})
}, a = "NativeLoaded", l = "NativeLoadFail", r = "NativeCloseButtonTapped", c = "NativeClick", A = "NativeShow", s = "NativeVideoStart", u = "NativeVideoEnd", S = "NativeBiddingAttempt", h = "NativeBiddingFilled", p = "NativeBiddingFail", v = "NativeAttemp", g = "NativeLoadFilled", w = "NativeLoadFail";
window.ATNativeJSSDK = o;
cc._RF.pop();
}, {
"./Android/ATAndroidNativeJS": "ATAndroidNativeJS",
"./iOS/ATiOSNativeJS": "ATiOSNativeJS"
} ],
ATRewardedVideoAutoAdJSSDK: [ function(e, d) {
"use strict";
cc._RF.push(d, "6ba77BCGgxORIaPVx/w+Oap", "ATRewardedVideoAutoAdJSSDK");
var n = e("./Android/ATAndroidRewardedVideoAutoAdJS"), i = e("./iOS/ATiOSRewardedVideoAutoAdJS"), t = cc.sys.os === cc.sys.OS_IOS ? i : cc.sys.os === cc.sys.OS_ANDROID ? n : void 0, o = o || {
userIdKey: "userID",
userDataKey: "media_ext",
ATRewardedVideoListener: {
developerCallback: null,
onRewardedVideoAdLoaded: function(e) {
ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded(" + e + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdLoaded && null != this.developerCallback.onRewardedVideoAdLoaded && this.developerCallback.onRewardedVideoAdLoaded(e);
},
onRewardedVideoAdFailed: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdFailed(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdFailed && null != this.developerCallback.onRewardedVideoAdFailed && this.developerCallback.onRewardedVideoAdFailed(e, d);
},
onRewardedVideoAdPlayStart: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayStart && null != this.developerCallback.onRewardedVideoAdPlayStart && this.developerCallback.onRewardedVideoAdPlayStart(e, d);
},
onRewardedVideoAdPlayEnd: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayEnd && null != this.developerCallback.onRewardedVideoAdPlayEnd && this.developerCallback.onRewardedVideoAdPlayEnd(e, d);
},
onRewardedVideoAdPlayFailed: function(e, d, n) {
ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed(" + e + ", " + d + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayFailed && null != this.developerCallback.onRewardedVideoAdPlayFailed && this.developerCallback.onRewardedVideoAdPlayFailed(e, d, n);
},
onRewardedVideoAdClosed: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdClosed(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdClosed && null != this.developerCallback.onRewardedVideoAdClosed && this.developerCallback.onRewardedVideoAdClosed(e, d);
},
onRewardedVideoAdPlayClicked: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayClicked && null != this.developerCallback.onRewardedVideoAdPlayClicked && this.developerCallback.onRewardedVideoAdPlayClicked(e, d);
},
onReward: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onReward(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onReward && null != this.developerCallback.onReward && this.developerCallback.onReward(e, d);
},
onRewardedVideoAdAgainPlayStart: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayStart(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayStart && null != this.developerCallback.onRewardedVideoAdAgainPlayStart && this.developerCallback.onRewardedVideoAdAgainPlayStart(e, d);
},
onRewardedVideoAdAgainPlayEnd: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayEnd(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayEnd && null != this.developerCallback.onRewardedVideoAdAgainPlayEnd && this.developerCallback.onRewardedVideoAdAgainPlayEnd(e, d);
},
onRewardedVideoAdAgainPlayFailed: function(e, d, n) {
ATJSSDK.printLog("ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayFailed(" + e + ", " + d + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayFailed && null != this.developerCallback.onRewardedVideoAdAgainPlayFailed && this.developerCallback.onRewardedVideoAdAgainPlayFailed(e, d, n);
},
onRewardedVideoAdAgainPlayClicked: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayClicked(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayClicked && null != this.developerCallback.onRewardedVideoAdAgainPlayClicked && this.developerCallback.onRewardedVideoAdAgainPlayClicked(e, d);
},
onAgainReward: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onAgainReward(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onAgainReward && null != this.developerCallback.onAgainReward && this.developerCallback.onAgainReward(e, d);
}
},
setAdExtraData: function(e, d) {
void 0 === d && (d = {});
null != t && null != t ? t.setAdExtraData(e, JSON.stringify(d)) : cc.log("You must run on Android or iOS.");
},
addPlacementIds: function(e) {
null != t && null != t ? t.addPlacementIds(JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
},
removePlacementId: function(e) {
null != t && null != t ? t.removePlacementId(JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
},
setAdListener: function(e) {
var d = {};
d[a] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded", 
d[l] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdFailed", 
d[r] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart", 
d[c] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd", 
d[A] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed", 
d[s] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdClosed", 
d[u] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked", 
d[S] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onReward", d[h] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayStart", 
d[p] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayEnd", 
d[v] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayFailed", 
d[g] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayClicked", 
d[w] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onAgainReward";
if (null != t && null != t) {
t.setAdListener(JSON.stringify(d));
t.set;
} else cc.log("You must run on Android or iOS.");
this.ATRewardedVideoListener.developerCallback = e;
},
hasAdReady: function(e) {
if (null != t && null != t) return t.hasAdReady(e);
cc.log("You must run on Android or iOS.");
return !1;
},
checkAdStatus: function(e) {
if (null != t && null != t) return t.checkAdStatus(e);
cc.log("You must run on Android or iOS.");
return "";
},
showAd: function(e) {
null != t && null != t ? t.showAd(e) : cc.log("You must run on Android or iOS.");
},
showAdInScenario: function(e, d) {
void 0 === d && (d = "");
null != t && null != t ? t.showAdInScenario(e, d) : cc.log("You must run on Android or iOS.");
},
entryAdScenario: function(e, d) {
void 0 === d && (d = "");
null != t && null != t ? t.entryAdScenario(e, d) : cc.log("You must run on Android or iOS.");
}
}, a = "RewardedVideoAutoAdLoaded", l = "RewardedVideoAutoAdLoadFail", r = "RewardedVideoAutoAdPlayStart", c = "RewardedVideoAutoAdPlayEnd", A = "RewardedVideoAutoAdPlayFail", s = "RewardedVideoAutoAdClose", u = "RewardedVideoAutoAdClick", S = "RewardedVideoAutoAdReward", h = "RewardedVideoAutoAdAgainPlayStart", p = "RewardedVideoAutoAdAgainPlayEnd", v = "RewardedVideoAutoAdAgainPlayFail", g = "RewardedVideoAutoAdAgainClick", w = "RewardedVideoAutoAdAgainReward";
window.ATRewardedVideoAutoAdJSSDK = o;
cc._RF.pop();
}, {
"./Android/ATAndroidRewardedVideoAutoAdJS": "ATAndroidRewardedVideoAutoAdJS",
"./iOS/ATiOSRewardedVideoAutoAdJS": "ATiOSRewardedVideoAutoAdJS"
} ],
ATRewardedVideoJSSDK: [ function(e, d) {
"use strict";
cc._RF.push(d, "c2fcawJmUBNYK1Sio978Itu", "ATRewardedVideoJSSDK");
var n = e("./Android/ATAndroidRewardedVideoJS"), i = e("./iOS/ATiOSRewardedVideoJS"), t = cc.sys.os === cc.sys.OS_IOS ? i : cc.sys.os === cc.sys.OS_ANDROID ? n : void 0, o = o || {
userIdKey: "userID",
userDataKey: "media_ext",
ATRewardedVideoListener: {
developerCallback: null,
onRewardedVideoAdLoaded: function(e) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded(" + e + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdLoaded && null != this.developerCallback.onRewardedVideoAdLoaded && this.developerCallback.onRewardedVideoAdLoaded(e);
},
onRewardedVideoAdFailed: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdFailed(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdFailed && null != this.developerCallback.onRewardedVideoAdFailed && this.developerCallback.onRewardedVideoAdFailed(e, d);
},
onRewardedVideoAdPlayStart: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayStart && null != this.developerCallback.onRewardedVideoAdPlayStart && this.developerCallback.onRewardedVideoAdPlayStart(e, d);
},
onRewardedVideoAdPlayEnd: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayEnd && null != this.developerCallback.onRewardedVideoAdPlayEnd && this.developerCallback.onRewardedVideoAdPlayEnd(e, d);
},
onRewardedVideoAdPlayFailed: function(e, d, n) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed(" + e + ", " + d + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayFailed && null != this.developerCallback.onRewardedVideoAdPlayFailed && this.developerCallback.onRewardedVideoAdPlayFailed(e, d, n);
},
onRewardedVideoAdClosed: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdClosed(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdClosed && null != this.developerCallback.onRewardedVideoAdClosed && this.developerCallback.onRewardedVideoAdClosed(e, d);
},
onRewardedVideoAdPlayClicked: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayClicked && null != this.developerCallback.onRewardedVideoAdPlayClicked && this.developerCallback.onRewardedVideoAdPlayClicked(e, d);
},
onReward: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onReward(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onReward && null != this.developerCallback.onReward && this.developerCallback.onReward(e, d);
},
onAdSourceBiddingAttempt: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceBiddingAttempt(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingAttempt && null != this.developerCallback.onAdSourceBiddingAttempt && this.developerCallback.onAdSourceBiddingAttempt(e, d);
},
onAdSourceBiddingFilled: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceBiddingFilled(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFilled && null != this.developerCallback.onAdSourceBiddingFilled && this.developerCallback.onAdSourceBiddingFilled(e, d);
},
onAdSourceBiddingFail: function(e, d, n) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceBiddingFail(" + e + ", " + d + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFail && null != this.developerCallback.onAdSourceBiddingFail && this.developerCallback.onAdSourceBiddingFail(e, d, n);
},
onAdSourceAttemp: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceAttemp(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onAdSourceAttemp && null != this.developerCallback.onAdSourceAttemp && this.developerCallback.onAdSourceAttemp(e, d);
},
onAdSourceLoadFilled: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceLoadFilled(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFilled && null != this.developerCallback.onAdSourceLoadFilled && this.developerCallback.onAdSourceLoadFilled(e, d);
},
onAdSourceLoadFail: function(e, d, n) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceLoadFail(" + e + ", " + d + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFail && null != this.developerCallback.onAdSourceLoadFail && this.developerCallback.onAdSourceLoadFail(e, d, n);
},
onRewardedVideoAdAgainPlayStart: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayStart(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayStart && null != this.developerCallback.onRewardedVideoAdAgainPlayStart && this.developerCallback.onRewardedVideoAdAgainPlayStart(e, d);
},
onRewardedVideoAdAgainPlayEnd: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayEnd(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayEnd && null != this.developerCallback.onRewardedVideoAdAgainPlayEnd && this.developerCallback.onRewardedVideoAdAgainPlayEnd(e, d);
},
onRewardedVideoAdAgainPlayFailed: function(e, d, n) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayFailed(" + e + ", " + d + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayFailed && null != this.developerCallback.onRewardedVideoAdAgainPlayFailed && this.developerCallback.onRewardedVideoAdAgainPlayFailed(e, d, n);
},
onRewardedVideoAdAgainPlayClicked: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayClicked(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayClicked && null != this.developerCallback.onRewardedVideoAdAgainPlayClicked && this.developerCallback.onRewardedVideoAdAgainPlayClicked(e, d);
},
onAgainReward: function(e, d) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAgainReward(" + e + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onAgainReward && null != this.developerCallback.onAgainReward && this.developerCallback.onAgainReward(e, d);
}
},
loadRewardedVideo: function(e, d) {
void 0 === d && (d = {});
null != t && null != t ? t.loadRewardedVideo(e, JSON.stringify(d)) : cc.log("You must run on Android or iOS.");
},
setAdListener: function(e) {
var d = {};
d[a] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded", d[l] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdFailed", 
d[r] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart", 
d[c] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd", 
d[A] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed", 
d[s] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdClosed", d[u] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked", 
d[S] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onReward", d[h] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceBiddingAttempt", 
d[p] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceBiddingFilled", d[v] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceBiddingFail", 
d[g] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceAttemp", d[w] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceLoadFilled", 
d[R] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceLoadFail", d[T] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayStart", 
d[L] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayEnd", 
d[f] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayFailed", 
d[b] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayClicked", 
d[V] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAgainReward";
if (null != t && null != t) {
t.setAdListener(JSON.stringify(d));
t.set;
} else cc.log("You must run on Android or iOS.");
this.ATRewardedVideoListener.developerCallback = e;
},
hasAdReady: function(e) {
if (null != t && null != t) return t.hasAdReady(e);
cc.log("You must run on Android or iOS.");
return !1;
},
checkAdStatus: function(e) {
if (null != t && null != t) return t.checkAdStatus(e);
cc.log("You must run on Android or iOS.");
return "";
},
showAd: function(e) {
null != t && null != t ? t.showAd(e) : cc.log("You must run on Android or iOS.");
},
showAdInScenario: function(e, d) {
void 0 === d && (d = "");
null != t && null != t ? t.showAdInScenario(e, d) : cc.log("You must run on Android or iOS.");
},
entryAdScenario: function(e, d) {
void 0 === d && (d = "");
null != t && null != t ? t.entryAdScenario(e, d) : cc.log("You must run on Android or iOS.");
}
}, a = "RewardedVideoLoaded", l = "RewardedVideoLoadFail", r = "RewardedVideoPlayStart", c = "RewardedVideoPlayEnd", A = "RewardedVideoPlayFail", s = "RewardedVideoClose", u = "RewardedVideoClick", S = "RewardedVideoReward", h = "RewardedVideoBiddingAttempt", p = "RewardedVideoBiddingFilled", v = "RewardedVideoBiddingFail", g = "RewardedVideoAttemp", w = "RewardedVideoLoadFilled", R = "RewardedVideoLoadFail", T = "RewardedVideoAgainPlayStart", L = "RewardedVideoAgainPlayEnd", f = "RewardedVideoAgainPlayFail", b = "RewardedVideoAgainClick", V = "RewardedVideoAgainReward";
window.ATRewardedVideoJSSDK = o;
cc._RF.pop();
}, {
"./Android/ATAndroidRewardedVideoJS": "ATAndroidRewardedVideoJS",
"./iOS/ATiOSRewardedVideoJS": "ATiOSRewardedVideoJS"
} ],
ATiOSBannerJS: [ function(e, d) {
"use strict";
cc._RF.push(d, "5f4c2bSvwxE9YzGIFJLW+bV", "ATiOSBannerJS");
var n = e("ATiOSJS"), i = i || {
loadBanner: function(e, d) {
n.printJsLog("ATiOSBannerJS::loadBanner(" + e + ", " + d + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "loadBannerWithPlacementID:extra:", e, d);
},
setAdListener: function(e) {
n.printJsLog("ATiOSBannerJS::setAdListener(" + e + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "setDelegates:", e);
},
hasAdReady: function(e) {
n.printJsLog("ATiOSBannerJS::hasAdReady(" + e + ")");
return jsb.reflection.callStaticMethod("ATBannerAdWrapper", "bannerReadyForPlacementID:", e);
},
checkAdStatus: function(e) {
n.printJsLog("ATiOSBannerJS::checkAdStatus(" + e + ")");
return jsb.reflection.callStaticMethod("ATBannerAdWrapper", "bannerCheckAdStatusForPlacementID:", e);
},
showAdInPosition: function(e, d) {
n.printJsLog("ATiOSBannerJS::showAdInPosition(" + e + ", " + d + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "showBannerWithPlacementID:scene:position:", e, null, d);
},
showAdInPositionAndScenario: function(e, d, i) {
n.printJsLog("ATiOSBannerJS::showAdInPositionAndScenario(" + e + ", " + d + ", " + i + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "showBannerWithPlacementID:scene:position:", e, i, d);
},
showAdInRectangle: function(e, d) {
n.printJsLog("ATiOSBannerJS::showAdInRectangle(" + e + ", " + d + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "showBannerWithPlacementID:scene:rect:", e, null, d);
},
showAdInRectangleAndScenario: function(e, d, i) {
n.printJsLog("ATiOSBannerJS::showAdInRectangleAndScenario(" + e + ", " + d + ", " + i + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "showBannerWithPlacementID:scene:rect:", e, i, d);
},
removeAd: function(e) {
n.printJsLog("ATiOSBannerJS::removeAd(" + e + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "removeAd:", e);
},
reShowAd: function(e) {
n.printJsLog("ATiOSBannerJS::reShowAd(" + e + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "reShowAd:", e);
},
hideAd: function(e) {
n.printJsLog("ATiOSBannerJS::hideAd(" + e + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "hideAd:", e);
}
};
d.exports = i;
cc._RF.pop();
}, {
ATiOSJS: "ATiOSJS"
} ],
ATiOSInterstitialAutoAdJS: [ function(e, d) {
"use strict";
cc._RF.push(d, "a7d838ecJpKzJSOb67Q+gt1", "ATiOSInterstitialAutoAdJS");
var n = e("ATiOSJS"), i = "ATInterstitialAutoAdWrapper", t = t || {
setAdListener: function(e) {
n.printJsLog("ATiOSInterstitialAutoAdJS::setAdListener(" + e + ")");
jsb.reflection.callStaticMethod(i, "setDelegates:", e);
},
setAdExtraData: function(e, d) {
n.printJsLog("ATiOSInterstitialAutoAdJS::setAdExtraData(" + e + ", " + d + ")");
jsb.reflection.callStaticMethod(i, "setAutoLocalExtra:customDataJSONString:", e, d);
},
addPlacementIds: function(e) {
n.printJsLog("ATiOSInterstitialAutoAdJS::addPlacementIds(" + e + ")");
jsb.reflection.callStaticMethod(i, "addAutoLoadAdPlacementID:", e);
},
removePlacementId: function(e) {
n.printJsLog("ATiOSInterstitialAutoAdJS::removePlacementId(" + e + ")");
jsb.reflection.callStaticMethod(i, "removeAutoLoadAdPlacementID:", e);
},
hasAdReady: function(e) {
n.printJsLog("ATiOSInterstitialAutoAdJS::hasAdReady(" + e + ")");
return jsb.reflection.callStaticMethod(i, "autoLoadInterstitialAdReadyForPlacementID:", e);
},
checkAdStatus: function(e) {
n.printJsLog("ATiOSInterstitialAutoAdJS::hasAdReady(" + e + ")");
return jsb.reflection.callStaticMethod(i, "checkAutoAdStatus:", e);
},
entryAdScenario: function(e, d) {
n.printJsLog("ATiOSInterstitialAutoAdJS::entryAdScenario(" + e + ", " + d + ")");
jsb.reflection.callStaticMethod(i, "entryAutoAdScenarioWithPlacementID:scenarioID:", e, d);
},
showAd: function(e) {
n.printJsLog("ATiOSInterstitialAutoAdJS::showAd(" + e + ")");
jsb.reflection.callStaticMethod(i, "showAutoInterstitialAdWithPlacementID:scenarioID:", e, null);
},
showAdInScenario: function(e, d) {
n.printJsLog("ATiOSInterstitialAutoAdJS::showAdInScenario(" + e + ", " + d + ")");
jsb.reflection.callStaticMethod(i, "showAutoInterstitialAdWithPlacementID:scenarioID:", e, d);
}
};
d.exports = t;
cc._RF.pop();
}, {
ATiOSJS: "ATiOSJS"
} ],
ATiOSInterstitialJS: [ function(e, d) {
"use strict";
cc._RF.push(d, "b91f2eDh45BU62jONyRwc3p", "ATiOSInterstitialJS");
var n = e("ATiOSJS"), i = "ATInterstitialAdWrapper", t = t || {
loadInterstitial: function(e, d) {
n.printJsLog("ATiOSInterstitialJS::loadInterstitial(" + e + ", " + d + ")");
jsb.reflection.callStaticMethod(i, "loadInterstitialWithPlacementID:extra:", e, d);
},
setAdListener: function(e) {
n.printJsLog("ATiOSInterstitialJS::setAdListener(" + e + ")");
jsb.reflection.callStaticMethod(i, "setDelegates:", e);
},
hasAdReady: function(e) {
n.printJsLog("ATiOSInterstitialJS::hasAdReady(" + e + ")");
return jsb.reflection.callStaticMethod(i, "interstitialReadyForPlacementID:", e);
},
checkAdStatus: function(e) {
n.printJsLog("ATiOSInterstitialJS::checkAdStatus(" + e + ")");
return jsb.reflection.callStaticMethod(i, "checkAdStatus:", e);
},
setUserData: function() {
cc.log("Android-setUserData");
},
showAd: function(e) {
n.printJsLog("ATiOSInterstitialJS::showAd(" + e + ")");
return jsb.reflection.callStaticMethod(i, "showInterstitialWithPlacementID:scene:", e, null);
},
showAdInScenario: function(e, d) {
n.printJsLog("ATiOSInterstitialJS::showAd(" + e + ", " + d + ")");
return jsb.reflection.callStaticMethod(i, "showInterstitialWithPlacementID:scene:", e, d);
},
entryAdScenario: function(e, d) {
n.printJsLog("ATiOSInterstitialJS::entryAdScenario(" + e + ", " + d + ")");
return jsb.reflection.callStaticMethod(i, "entryAdScenarioWithPlacementID:scene:", e, d);
}
};
d.exports = t;
cc._RF.pop();
}, {
ATiOSJS: "ATiOSJS"
} ],
ATiOSJS: [ function(e, d) {
"use strict";
cc._RF.push(d, "eab2bTKNClGy4V+1XWkf+mE", "ATiOSJS");
var n = n || {
initSDK: function(e, d) {
this.printJsLog("ATiOSJS::initSDK(" + e + "," + d + ")");
jsb.reflection.callStaticMethod("ATSDKManager", "startWithAppID:appKey:", e, d);
},
initCustomMap: function(e) {
this.printJsLog("ATiOSJS::initCustomMap(" + e + ")");
jsb.reflection.callStaticMethod("ATSDKManager", "setCustomData:", e);
},
setPlacementCustomMap: function(e, d) {
this.printJsLog("ATiOSJS::setPlacementCustomMap(" + e + ", " + d + ")");
jsb.reflection.callStaticMethod("ATSDKManager", "setCustomData:forPlacementID:", d, e);
},
setGDPRLevel: function(e) {
this.printJsLog("ATiOSJS::setGDPRLevel(" + e + ")");
jsb.reflection.callStaticMethod("ATSDKManager", "setDataConsent:", e);
},
getGDPRLevel: function() {
this.printJsLog("ATiOSJS::getGDPRLevel()");
return jsb.reflection.callStaticMethod("ATSDKManager", "dataConsent");
},
getUserLocation: function(e) {
this.printJsLog("ATiOSJS::getUserLocation(" + e + ")");
jsb.reflection.callStaticMethod("ATSDKManager", "getUserLocationWithCallback:", e);
},
showGDPRAuth: function() {
this.printJsLog("ATiOSJS::showGDPRAuth()");
jsb.reflection.callStaticMethod("ATSDKManager", "presentDataConsentDialog");
},
setLogDebug: function(e) {
this.printJsLog("ATiOSJS::setLogDebug(" + e + ")");
jsb.reflection.callStaticMethod("ATSDKManager", "setDebugLog:", e);
},
printJsLog: function(e) {
null != e && null != e && jsb.reflection.callStaticMethod("ATJSBridge", "log:", e);
},
deniedUploadDeviceInfo: function(e) {
this.printJsLog("ATiOSJS::deniedUploadDeviceInfo(" + e + ")");
jsb.reflection.callStaticMethod("ATSDKManager", "deniedUploadDeviceInfo:", e);
}
};
d.exports = n;
cc._RF.pop();
}, {} ],
ATiOSNativeJS: [ function(e, d) {
"use strict";
cc._RF.push(d, "f3f9cBkI79L45Icp9EOEfr4", "ATiOSNativeJS");
var n = e("ATiOSJS"), i = i || {
loadNative: function(e, d) {
n.printJsLog("ATiOSBannerJS::loadNative(" + e + ", " + d + ")");
jsb.reflection.callStaticMethod("ATNativeAdWrapper", "loadNativeWithPlacementID:extra:", e, d);
},
setAdListener: function(e) {
n.printJsLog("ATiOSNativeJS::setAdListener(" + e + ")");
jsb.reflection.callStaticMethod("ATNativeAdWrapper", "setDelegates:", e);
},
hasAdReady: function(e) {
n.printJsLog("ATiOSNativeJS::hasAdReady(" + e + ")");
return jsb.reflection.callStaticMethod("ATNativeAdWrapper", "nativeReadyForPlacementID:", e);
},
checkAdStatus: function(e) {
n.printJsLog("ATiOSNativeJS::checkAdStatus(" + e + ")");
return jsb.reflection.callStaticMethod("ATNativeAdWrapper", "nativeCheckAdStatusForPlacementID:", e);
},
showAd: function(e, d) {
n.printJsLog("ATiOSNativeJS::showAd(" + e + ", " + d + ")");
jsb.reflection.callStaticMethod("ATNativeAdWrapper", "showNativeWithPlacementID:scene:metrics:", e, null, d);
},
showAdInScenario: function(e, d, i) {
n.printJsLog("ATiOSNativeJS::showAdInScenario(" + e + ", " + d + ", " + i + ")");
jsb.reflection.callStaticMethod("ATNativeAdWrapper", "showNativeWithPlacementID:scene:metrics:", e, i, d);
},
removeAd: function(e) {
n.printJsLog("ATiOSNativeJS::removeAd(" + e + ")");
jsb.reflection.callStaticMethod("ATNativeAdWrapper", "removeNativeWithPlacementID:", e);
},
entryAdScenario: function(e, d) {
n.printJsLog("ATiOSInterstitialJS::entryAdScenario(" + e + ", " + d + ")");
return jsb.reflection.callStaticMethod("ATNativeAdWrapper", "entryAdScenarioWithPlacementID:scene:", e, d);
}
};
d.exports = i;
cc._RF.pop();
}, {
ATiOSJS: "ATiOSJS"
} ],
ATiOSRewardedVideoAutoAdJS: [ function(e, d) {
"use strict";
cc._RF.push(d, "c400aRhiuxPPqnKe1gvsgAa", "ATiOSRewardedVideoAutoAdJS");
var n = e("ATiOSJS"), i = "ATRewardedVideoAutoAdWrapper", t = t || {
setAdListener: function(e) {
n.printJsLog("ATiOSRewardedVideoAutoAdJS::setAdListener(" + e + ")");
jsb.reflection.callStaticMethod(i, "setDelegates:", e);
},
setAdExtraData: function(e, d) {
n.printJsLog("ATiOSRewardedVideoAutoAdJS::setAdExtraData(" + e + ", " + d + ")");
jsb.reflection.callStaticMethod(i, "setAutoLocalExtra:customDataJSONString:", e, d);
},
addPlacementIds: function(e) {
n.printJsLog("ATiOSRewardedVideoAutoAdJS::addPlacementIds(" + e + ")");
jsb.reflection.callStaticMethod(i, "addAutoLoadAdPlacementID:", e);
},
removePlacementId: function(e) {
n.printJsLog("ATiOSRewardedVideoAutoAdJS::removePlacementId(" + e + ")");
jsb.reflection.callStaticMethod(i, "removeAutoLoadAdPlacementID:", e);
},
hasAdReady: function(e) {
n.printJsLog("ATiOSRewardedVideoAutoAdJS::hasAdReady(" + e + ")");
return jsb.reflection.callStaticMethod(i, "autoLoadRewardedVideoReadyForPlacementID:", e);
},
checkAdStatus: function(e) {
n.printJsLog("ATiOSRewardedVideoAutoAdJS::hasAdReady(" + e + ")");
return jsb.reflection.callStaticMethod(i, "checkAutoAdStatus:", e);
},
entryAdScenario: function(e, d) {
n.printJsLog("ATiOSInterstitialAutoAdJS::entryAdScenario(" + e + ", " + d + ")");
jsb.reflection.callStaticMethod(i, "entryAutoAdScenarioWithPlacementID:scenarioID:", e, d);
},
showAd: function(e) {
n.printJsLog("ATiOSRewardedVideoAutoAdJS::showAd(" + e + ")");
jsb.reflection.callStaticMethod(i, "showAutoRewardedVideoWithPlacementID:scenarioID:", e, null);
},
showAdInScenario: function(e, d) {
n.printJsLog("ATiOSRewardedVideoAutoAdJS::showAdInScenario(" + e + ", " + d + ")");
jsb.reflection.callStaticMethod(i, "showAutoRewardedVideoWithPlacementID:scenarioID:", e, d);
}
};
d.exports = t;
cc._RF.pop();
}, {
ATiOSJS: "ATiOSJS"
} ],
ATiOSRewardedVideoJS: [ function(e, d) {
"use strict";
cc._RF.push(d, "85f1chdcYBH5qVaK/doj323", "ATiOSRewardedVideoJS");
var n = e("ATiOSJS"), i = i || {
loadRewardedVideo: function(e, d) {
n.printJsLog("ATiOSRewardedVideoJS::loadRewardedVideo(" + e + ", " + d + ")");
jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "loadRewardedVideoWithPlacementID:extra:", e, d);
},
setAdListener: function(e) {
n.printJsLog("ATiOSRewardedVideoJS::setAdListener(" + e + ")");
jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "setDelegates:", e);
},
hasAdReady: function(e) {
n.printJsLog("ATiOSRewardedVideoJS::hasAdReady(" + e + ")");
return jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "rewardedVideoReadyForPlacementID:", e);
},
checkAdStatus: function(e) {
n.printJsLog("ATiOSRewardedVideoJS::checkAdStatus(" + e + ")");
return jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "checkAdStatus:", e);
},
setUserData: function() {
cc.log("Android-setUserData");
},
showAd: function(e) {
n.printJsLog("ATiOSRewardedVideoJS::showAd(" + e + ")");
return jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "showRewardedVideoWithPlacementID:scene:", e, null);
},
showAdInScenario: function(e, d) {
n.printJsLog("ATiOSRewardedVideoJS::showAdInScenario(" + e + ", " + d + ")");
return jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "showRewardedVideoWithPlacementID:scene:", e, d);
},
entryAdScenario: function(e, d) {
n.printJsLog("ATiOSInterstitialJS::entryAdScenario(" + e + ", " + d + ")");
return jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "entryAdScenarioWithPlacementID:scene:", e, d);
}
};
d.exports = i;
cc._RF.pop();
}, {
ATiOSJS: "ATiOSJS"
} ],
RewardVideo: [ function(e, d, n) {
"use strict";
cc._RF.push(d, "a7b995I6pFNZ6mW8uP29vRh", "RewardVideo");
var i, t = this && this.__extends || (i = function(e, d) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, d) {
e.__proto__ = d;
} || function(e, d) {
for (var n in d) Object.prototype.hasOwnProperty.call(d, n) && (e[n] = d[n]);
})(e, d);
}, function(e, d) {
i(e, d);
function n() {
this.constructor = e;
}
e.prototype = null === d ? Object.create(d) : (n.prototype = d.prototype, new n());
}), o = this && this.__decorate || function(e, d, n, i) {
var t, o = arguments.length, a = o < 3 ? d : null === i ? i = Object.getOwnPropertyDescriptor(d, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, d, n, i); else for (var l = e.length - 1; l >= 0; l--) (t = e[l]) && (a = (o < 3 ? t(a) : o > 3 ? t(d, n, a) : t(d, n)) || a);
return o > 3 && a && Object.defineProperty(d, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.RewardVideo = void 0;
var a = cc.sys, l = cc._decorator, r = l.ccclass, c = (l.property, function(e) {
t(d, e);
function d() {
var d = null !== e && e.apply(this, arguments) || this;
d.rewardvideo = void 0;
return d;
}
d.prototype.getPlacementID = function() {
return a.platform === a.IPHONE || a.platform === a.IPAD ? "b5b72b21184aa8" : a.ANDROID === a.platform ? "b5b728e7a08cd4" : void 0;
};
d.prototype.start = function() {
var e = this.getPlacementID();
if (e) {
this.rewardvideo = topon.toponService.getRewardVideo(e, {
onRewardedVideoAdLoaded: function() {
cc.log("RewardVideoListener", "onRewardedVideoAdLoaded");
},
onRewardedVideoAdFailed: function() {
cc.log("RewardVideoListener", "onRewardedVideoAdFailed");
},
onRewardedVideoAdPlayStart: function() {
cc.log("RewardVideoListener", "onRewardedVideoAdPlayStart");
},
onRewardedVideoAdPlayEnd: function() {
cc.log("RewardVideoListener", "onRewardedVideoAdPlayEnd");
},
onRewardedVideoAdPlayFailed: function() {
cc.log("RewardVideoListener", "onRewardedVideoAdPlayFailed");
},
onRewardedVideoAdClosed: function() {
cc.log("RewardVideoListener", "onRewardedVideoAdClosed");
},
onRewardedVideoAdPlayClicked: function() {
cc.log("RewardVideoListener", "onRewardedVideoAdPlayClicked");
},
onReward: function() {
cc.log("RewardVideoListener", "onReward");
}
});
this.rewardvideo.loadRewardVideo({
userID: "test_user_id",
media_ext: "test_user_data"
});
} else cc.log("Native", "TopOn ad only support Android or iOS.");
};
d.prototype.isAdReady = function() {
var e;
cc.log("RewardVideo", "isAdReady => " + ((null === (e = this.rewardvideo) || void 0 === e ? void 0 : e.isAdReady()) || !1));
};
d.prototype.checkAdStatus = function() {
var e;
cc.log("RewardVideo", "isAdReady => " + JSON.stringify(null === (e = this.rewardvideo) || void 0 === e ? void 0 : e.checkAdStatus()));
};
d.prototype.show = function() {
var e;
null === (e = this.rewardvideo) || void 0 === e || e.showAd();
};
return o([ r() ], d);
}(cc.Component));
n.RewardVideo = c;
cc._RF.pop();
}, {} ]
}, {}, [ "ATBannerJSSDK", "ATInterstitialAutoAdJSSDK", "ATInterstitialJSSDK", "ATJSSDK", "ATNativeJSSDK", "ATRewardedVideoAutoAdJSSDK", "ATRewardedVideoJSSDK", "ATAndroidBannerJS", "ATAndroidInterstitialAutoAdJS", "ATAndroidInterstitialJS", "ATAndroidJS", "ATAndroidNativeJS", "ATAndroidRewardedVideoAutoAdJS", "ATAndroidRewardedVideoJS", "ATiOSBannerJS", "ATiOSInterstitialAutoAdJS", "ATiOSInterstitialJS", "ATiOSJS", "ATiOSNativeJS", "ATiOSRewardedVideoAutoAdJS", "ATiOSRewardedVideoJS", "RewardVideo" ]);