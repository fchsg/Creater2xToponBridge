window.__require = function e(n, d, t) {
function i(l, a) {
if (!d[l]) {
if (!n[l]) {
var r = l.split("/");
r = r[r.length - 1];
if (!n[r]) {
var c = "function" == typeof __require && __require;
if (!a && c) return c(r, !0);
if (o) return o(r, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = r;
}
var A = d[l] = {
exports: {}
};
n[l][0].call(A.exports, function(e) {
return i(n[l][1][e] || e);
}, A, A.exports, e, n, d, t);
}
return d[l].exports;
}
for (var o = "function" == typeof __require && __require, l = 0; l < t.length; l++) i(t[l]);
return i;
}({
ATAndroidBannerJS: [ function(e, n) {
"use strict";
cc._RF.push(n, "2d7725PXOFCX5tPSjJIzSZ9", "ATAndroidBannerJS");
var d = "com/anythink/cocosjs/ATBannerJSBridge", t = t || {
loadBanner: function(e, n) {
cc.log("Android-loadBanner:" + n);
jsb.reflection.callStaticMethod(d, "load", "(Ljava/lang/String;Ljava/lang/String;)V", e, n);
},
setAdListener: function(e) {
cc.log("Android-setAdListener");
jsb.reflection.callStaticMethod(d, "setAdListener", "(Ljava/lang/String;)V", e);
},
hasAdReady: function(e) {
cc.log("Android-hasAdReady");
return jsb.reflection.callStaticMethod(d, "isAdReady", "(Ljava/lang/String;)Z", e);
},
checkAdStatus: function(e) {
cc.log("Android-checkAdStatus:" + e);
return jsb.reflection.callStaticMethod(d, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", e);
},
showAdInPosition: function(e, n) {
cc.log("Android-showAdInPosistion");
jsb.reflection.callStaticMethod(d, "showWithPosition", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e, n, "");
},
showAdInPositionAndScenario: function(e, n, t) {
cc.log("Android-showAdInPositionAndScenario");
jsb.reflection.callStaticMethod(d, "showWithPosition", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e, n, t);
},
showAdInRectangle: function(e, n) {
cc.log("Android-showAdInRectangle");
jsb.reflection.callStaticMethod(d, "showWithRect", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e, n, "");
},
showAdInRectangleAndScenario: function(e, n, t) {
cc.log("Android-showAdInRectangleAndScenario");
jsb.reflection.callStaticMethod(d, "showWithRect", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e, n, t);
},
removeAd: function(e) {
cc.log("Android-removeAd");
jsb.reflection.callStaticMethod(d, "remove", "(Ljava/lang/String;)V", e);
},
reShowAd: function(e) {
cc.log("Android-reShowAd");
jsb.reflection.callStaticMethod(d, "reshow", "(Ljava/lang/String;)V", e);
},
hideAd: function(e) {
cc.log("Android-hideAd");
jsb.reflection.callStaticMethod(d, "hide", "(Ljava/lang/String;)V", e);
}
};
n.exports = t;
cc._RF.pop();
}, {} ],
ATAndroidInterstitialAutoAdJS: [ function(e, n) {
"use strict";
cc._RF.push(n, "2c8ba7sIpNG7r4YPiIlZrD3", "ATAndroidInterstitialAutoAdJS");
var d = "com/anythink/cocosjs/ATInterstitialAutoAdJSBridge", t = t || {
setAdListener: function(e) {
cc.log("Android-setAdListener");
jsb.reflection.callStaticMethod(d, "setAdListener", "(Ljava/lang/String;)V", e);
},
addPlacementIds: function(e) {
cc.log("Android-addPlacementIds");
jsb.reflection.callStaticMethod(d, "addPlacementIds", "(Ljava/lang/String;)V", e);
},
removePlacementId: function(e) {
cc.log("Android-removePlacementId");
jsb.reflection.callStaticMethod(d, "removePlacementId", "(Ljava/lang/String;)V", e);
},
setAdExtraData: function(e, n) {
cc.log("Android-setAdExtraData");
jsb.reflection.callStaticMethod(d, "setAdExtraData", "(Ljava/lang/String;Ljava/lang/String;)V", e, n);
},
hasAdReady: function(e) {
cc.log("Android-hasAdReady");
return jsb.reflection.callStaticMethod(d, "isAdReady", "(Ljava/lang/String;)Z", e);
},
checkAdStatus: function(e) {
cc.log("Android-checkAdStatus:" + e);
return jsb.reflection.callStaticMethod(d, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", e);
},
showAd: function(e) {
cc.log("Android-ivautoad_showAd:" + e);
jsb.reflection.callStaticMethod(d, "show", "(Ljava/lang/String;)V", e);
},
showAdInScenario: function(e, n) {
cc.log("Android-ivautoad_showAdInScenario:" + e + "---" + n);
jsb.reflection.callStaticMethod(d, "show", "(Ljava/lang/String;Ljava/lang/String;)V", e, n);
},
entryAdScenario: function(e, n) {
cc.log("Android-entryAdScenario:" + e + "---" + n);
jsb.reflection.callStaticMethod(d, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", e, n);
}
};
n.exports = t;
cc._RF.pop();
}, {} ],
ATAndroidInterstitialJS: [ function(e, n) {
"use strict";
cc._RF.push(n, "101deT7//lHMZl0VciHRgLx", "ATAndroidInterstitialJS");
var d = "com/anythink/cocosjs/ATInterstitialJSBridge", t = t || {
loadInterstitial: function(e, n) {
cc.log("Android-loadInterstitial");
jsb.reflection.callStaticMethod(d, "load", "(Ljava/lang/String;Ljava/lang/String;)V", e, n);
},
setAdListener: function(e) {
cc.log("Android-setAdListener");
jsb.reflection.callStaticMethod(d, "setAdListener", "(Ljava/lang/String;)V", e);
},
hasAdReady: function(e) {
cc.log("Android-hasAdReady");
return jsb.reflection.callStaticMethod(d, "isAdReady", "(Ljava/lang/String;)Z", e);
},
checkAdStatus: function(e) {
cc.log("Android-checkAdStatus:" + e);
return jsb.reflection.callStaticMethod(d, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", e);
},
showAd: function(e) {
cc.log("Android-showAd:" + e);
jsb.reflection.callStaticMethod(d, "show", "(Ljava/lang/String;)V", e);
},
showAdInScenario: function(e, n) {
cc.log("Android-showAdInScenario:" + e + "---" + n);
jsb.reflection.callStaticMethod(d, "show", "(Ljava/lang/String;Ljava/lang/String;)V", e, n);
},
entryAdScenario: function(e, n) {
cc.log("Android-entryAdScenario:" + e + "---" + n);
jsb.reflection.callStaticMethod(d, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", e, n);
}
};
n.exports = t;
cc._RF.pop();
}, {} ],
ATAndroidJS: [ function(e, n) {
"use strict";
cc._RF.push(n, "0773apTYa9EzbwqihsMSHr6", "ATAndroidJS");
var d = "com/anythink/cocosjs/ATJSBridge", t = t || {
printJsLog: function(e) {
null != e && null != e && jsb.reflection.callStaticMethod("android/util/Log", "i", "(Ljava/lang/String;Ljava/lang/String;)I", "AT-Cocos-JS", e);
},
initSDK: function(e, n) {
jsb.reflection.callStaticMethod(d, "initSDK", "(Ljava/lang/String;Ljava/lang/String;)V", e, n);
},
initCustomMap: function(e) {
jsb.reflection.callStaticMethod(d, "initCustomMap", "(Ljava/lang/String;)V", e);
},
setPlacementCustomMap: function(e, n) {
jsb.reflection.callStaticMethod(d, "setPlacementCustomMap", "(Ljava/lang/String;Ljava/lang/String;)V", e, n);
},
setGDPRLevel: function(e) {
jsb.reflection.callStaticMethod(d, "setGDPRLevel", "(I)V", e);
},
getGDPRLevel: function() {
return jsb.reflection.callStaticMethod(d, "getGDPRLevel", "()I");
},
getUserLocation: function(e) {
jsb.reflection.callStaticMethod(d, "getUserLocation", "(Ljava/lang/String;)V", e);
},
showGDPRAuth: function() {
jsb.reflection.callStaticMethod(d, "showGDPRAuth", "()V");
},
setLogDebug: function(e) {
jsb.reflection.callStaticMethod(d, "setLogDebug", "(Z)V", e);
},
deniedUploadDeviceInfo: function(e) {
jsb.reflection.callStaticMethod(d, "deniedUploadDeviceInfo", "(Ljava/lang/String;)V", e);
}
};
n.exports = t;
cc._RF.pop();
}, {} ],
ATAndroidNativeJS: [ function(e, n) {
"use strict";
cc._RF.push(n, "abc830eQLlAaq5iUE+858Gc", "ATAndroidNativeJS");
var d = "com/anythink/cocosjs/ATNativeJSBridge", t = t || {
loadNative: function(e, n) {
cc.log("Android-loadNative");
jsb.reflection.callStaticMethod(d, "load", "(Ljava/lang/String;Ljava/lang/String;)V", e, n);
},
setAdListener: function(e) {
cc.log("Android-setAdListener");
jsb.reflection.callStaticMethod(d, "setAdListener", "(Ljava/lang/String;)V", e);
},
hasAdReady: function(e) {
cc.log("Android-hasAdReady");
return jsb.reflection.callStaticMethod(d, "isAdReady", "(Ljava/lang/String;)Z", e);
},
checkAdStatus: function(e) {
cc.log("Android-checkAdStatus:" + e);
return jsb.reflection.callStaticMethod(d, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", e);
},
showAd: function(e, n) {
cc.log("Android-showAd");
jsb.reflection.callStaticMethod(d, "show", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e, n, "");
},
showAdInScenario: function(e, n, t) {
cc.log("Android-showAdInScenario");
jsb.reflection.callStaticMethod(d, "show", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e, n, t);
},
removeAd: function(e) {
cc.log("Android-removeAd");
jsb.reflection.callStaticMethod(d, "remove", "(Ljava/lang/String;)V", e);
},
entryAdScenario: function(e, n) {
cc.log("Android-entryAdScenario:" + e + "---" + n);
jsb.reflection.callStaticMethod(d, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", e, n);
}
};
n.exports = t;
cc._RF.pop();
}, {} ],
ATAndroidRewardedVideoAutoAdJS: [ function(e, n) {
"use strict";
cc._RF.push(n, "5a59czjJrhFeryy4dDHGqC2", "ATAndroidRewardedVideoAutoAdJS");
var d = "com/anythink/cocosjs/ATRewardedVideoAutoAdJSBridge", t = t || {
setAdListener: function(e) {
cc.log("Android-setAdListener");
jsb.reflection.callStaticMethod(d, "setAdListener", "(Ljava/lang/String;)V", e);
},
addPlacementIds: function(e) {
cc.log("Android-addPlacementIds");
jsb.reflection.callStaticMethod(d, "addPlacementIds", "(Ljava/lang/String;)V", e);
},
removePlacementId: function(e) {
cc.log("Android-removePlacementId");
jsb.reflection.callStaticMethod(d, "removePlacementId", "(Ljava/lang/String;)V", e);
},
setAdExtraData: function(e, n) {
cc.log("Android-setAdExtraData");
jsb.reflection.callStaticMethod(d, "setAdExtraData", "(Ljava/lang/String;Ljava/lang/String;)V", e, n);
},
hasAdReady: function(e) {
cc.log("Android-hasAdReady");
return jsb.reflection.callStaticMethod(d, "isAdReady", "(Ljava/lang/String;)Z", e);
},
checkAdStatus: function(e) {
cc.log("Android-checkAdStatus:" + e);
return jsb.reflection.callStaticMethod(d, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", e);
},
showAd: function(e) {
cc.log("Android-rvautoad_showAd:" + e);
jsb.reflection.callStaticMethod(d, "show", "(Ljava/lang/String;)V", e);
},
showAdInScenario: function(e, n) {
cc.log("Android-rvautoad_showAdInScenario:" + e + "---" + n);
jsb.reflection.callStaticMethod(d, "show", "(Ljava/lang/String;Ljava/lang/String;)V", e, n);
},
entryAdScenario: function(e, n) {
cc.log("Android-entryAdScenario:" + e + "---" + n);
jsb.reflection.callStaticMethod(d, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", e, n);
}
};
n.exports = t;
cc._RF.pop();
}, {} ],
ATAndroidRewardedVideoJS: [ function(e, n) {
"use strict";
cc._RF.push(n, "bffd9H5UVNEFJn5K4z6pey1", "ATAndroidRewardedVideoJS");
var d = "com/anythink/cocosjs/ATRewardedVideoJSBridge", t = t || {
loadRewardedVideo: function(e, n) {
cc.log("Android-loadRewardedVideo");
jsb.reflection.callStaticMethod(d, "load", "(Ljava/lang/String;Ljava/lang/String;)V", e, n);
},
setAdListener: function(e) {
cc.log("Android-setAdListener");
jsb.reflection.callStaticMethod(d, "setAdListener", "(Ljava/lang/String;)V", e);
},
hasAdReady: function(e) {
cc.log("Android-hasAdReady");
return jsb.reflection.callStaticMethod(d, "isAdReady", "(Ljava/lang/String;)Z", e);
},
checkAdStatus: function(e) {
cc.log("Android-checkAdStatus:" + e);
return jsb.reflection.callStaticMethod(d, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", e);
},
showAd: function(e) {
cc.log("Android-rv_showAd:" + e);
jsb.reflection.callStaticMethod(d, "show", "(Ljava/lang/String;)V", e);
},
showAdInScenario: function(e, n) {
cc.log("Android-rv_showAdInScenario:" + e + "---" + n);
jsb.reflection.callStaticMethod(d, "show", "(Ljava/lang/String;Ljava/lang/String;)V", e, n);
},
entryAdScenario: function(e, n) {
cc.log("Android-entryAdScenario:" + e + "---" + n);
jsb.reflection.callStaticMethod(d, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", e, n);
}
};
n.exports = t;
cc._RF.pop();
}, {} ],
ATBannerJSSDK: [ function(e, n) {
"use strict";
cc._RF.push(n, "966f8RL+kNFnZMh03w18dNB", "ATBannerJSSDK");
var d = e("./Android/ATAndroidBannerJS"), t = e("./iOS/ATiOSBannerJS"), i = cc.sys.os === cc.sys.OS_IOS ? t : cc.sys.os === cc.sys.OS_ANDROID ? d : void 0, o = o || {
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
onBannerAdLoadFail: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onBannerAdLoadFail && null != this.developerCallback.onBannerAdLoadFail && this.developerCallback.onBannerAdLoadFail(e, n);
},
onBannerAdShow: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onBannerAdShow && null != this.developerCallback.onBannerAdShow && this.developerCallback.onBannerAdShow(e, n);
},
onBannerAdClick: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onBannerAdClick && null != this.developerCallback.onBannerAdClick && this.developerCallback.onBannerAdClick(e, n);
},
onBannerAdAutoRefresh: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onBannerAdAutoRefresh && null != this.developerCallback.onBannerAdAutoRefresh && this.developerCallback.onBannerAdAutoRefresh(e, n);
},
onBannerAdAutoRefreshFail: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onBannerAdAutoRefreshFail && null != this.developerCallback.onBannerAdAutoRefreshFail && this.developerCallback.onBannerAdAutoRefreshFail(e, n);
},
onBannerAdCloseButtonTapped: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onBannerAdCloseButtonTapped && null != this.developerCallback.onBannerAdCloseButtonTapped && this.developerCallback.onBannerAdCloseButtonTapped(e, n);
},
onAdSourceBiddingAttempt: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingAttempt && null != this.developerCallback.onAdSourceBiddingAttempt && this.developerCallback.onAdSourceBiddingAttempt(e, n);
},
onAdSourceBiddingFilled: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFilled && null != this.developerCallback.onAdSourceBiddingFilled && this.developerCallback.onAdSourceBiddingFilled(e, n);
},
onAdSourceBiddingFail: function(e, n, d) {
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFail && null != this.developerCallback.onAdSourceBiddingFail && this.developerCallback.onAdSourceBiddingFail(e, n, d);
},
onAdSourceAttemp: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onAdSourceAttemp && null != this.developerCallback.onAdSourceAttemp && this.developerCallback.onAdSourceAttemp(e, n);
},
onAdSourceLoadFilled: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFilled && null != this.developerCallback.onAdSourceLoadFilled && this.developerCallback.onAdSourceLoadFilled(e, n);
},
onAdSourceLoadFail: function(e, n, d) {
null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFail && null != this.developerCallback.onAdSourceLoadFail && this.developerCallback.onAdSourceLoadFail(e, n, d);
}
},
loadBanner: function(e, n) {
void 0 === n && (n = {});
if (null != i && null != i) {
if (n.hasOwnProperty(o.kATBannerAdLoadingExtraBannerAdSizeStruct)) {
var d = n[o.kATBannerAdLoadingExtraBannerAdSizeStruct];
n.width = d.width;
n.height = d.height;
}
i.loadBanner(e, JSON.stringify(n));
} else cc.log("You must run on Android or iOS.");
},
setAdListener: function(e) {
var n = {};
n[l] = "ATBannerJSSDK.ATBannerListener.onBannerAdLoaded", n[a] = "ATBannerJSSDK.ATBannerListener.onBannerAdLoadFail", 
n[r] = "ATBannerJSSDK.ATBannerListener.onBannerAdCloseButtonTapped", n[c] = "ATBannerJSSDK.ATBannerListener.onBannerAdClick", 
n[A] = "ATBannerJSSDK.ATBannerListener.onBannerAdShow", n[s] = "ATBannerJSSDK.ATBannerListener.onBannerAdAutoRefresh", 
n[u] = "ATBannerJSSDK.ATBannerListener.onBannerAdAutoRefreshFail", n[S] = "ATBannerJSSDK.ATBannerListener.onAdSourceBiddingAttempt", 
n[h] = "ATBannerJSSDK.ATBannerListener.onAdSourceBiddingFilled", n[p] = "ATBannerJSSDK.ATBannerListener.onAdSourceBiddingFail", 
n[v] = "ATBannerJSSDK.ATBannerListener.onAdSourceAttemp", n[g] = "ATBannerJSSDK.ATBannerListener.onAdSourceLoadFilled", 
n[w] = "ATBannerJSSDK.ATBannerListener.onAdSourceLoadFail";
null != i && null != i ? i.setAdListener(JSON.stringify(n)) : cc.log("You must run on Android or iOS.");
this.ATBannerListener.developerCallback = e;
},
hasAdReady: function(e) {
if (null != i && null != i) return i.hasAdReady(e);
cc.log("You must run on Android or iOS.");
return !1;
},
checkAdStatus: function(e) {
if (null != i && null != i) return i.checkAdStatus(e);
cc.log("You must run on Android or iOS.");
return "";
},
showAdInPosition: function(e, n) {
null != i && null != i ? i.showAdInPosition(e, n) : cc.log("You must run on Android or iOS.");
},
showAdInPositionAndScenario: function(e, n, d) {
null != i && null != i ? i.showAdInPosition(e, n, d) : cc.log("You must run on Android or iOS.");
},
showAdInRectangle: function(e, n) {
null != i && null != i ? i.showAdInRectangle(e, JSON.stringify(n)) : cc.log("You must run on Android or iOS.");
},
showAdInRectangleAndScenario: function(e, n, d) {
null != i && null != i ? i.showAdInRectangle(e, JSON.stringify(n), d) : cc.log("You must run on Android or iOS.");
},
removeAd: function(e) {
null != i && null != i ? i.removeAd(e) : cc.log("You must run on Android or iOS.");
},
reShowAd: function(e) {
null != i && null != i ? i.reShowAd(e) : cc.log("You must run on Android or iOS.");
},
hideAd: function(e) {
null != i && null != i ? i.hideAd(e) : cc.log("You must run on Android or iOS.");
},
createLoadAdSize: function(e, n) {
var d = {};
d.width = e;
d.height = n;
return d;
},
createShowAdRect: function(e, n, d, t) {
var i = {};
i.x = e;
i.y = n;
i.width = d;
i.height = t;
return i;
}
}, l = "BannerLoaded", a = "BannerLoadFail", r = "BannerCloseButtonTapped", c = "BannerClick", A = "BannerShow", s = "BannerRefresh", u = "BannerRefreshFail", S = "BannerBiddingAttempt", h = "BannerBiddingFilled", p = "BannerBiddingFail", v = "BannerAttemp", g = "BannerLoadFilled", w = "BannerLoadFail";
window.ATBannerJSSDK = o;
cc._RF.pop();
}, {
"./Android/ATAndroidBannerJS": "ATAndroidBannerJS",
"./iOS/ATiOSBannerJS": "ATiOSBannerJS"
} ],
ATInterstitialAutoAdJSSDK: [ function(e, n) {
"use strict";
cc._RF.push(n, "0e3beGTlu1PWpA5Dxw0L8BS", "ATInterstitialAutoAdJSSDK");
var d = e("./Android/ATAndroidInterstitialAutoAdJS"), t = e("./iOS/ATiOSInterstitialAutoAdJS"), i = cc.sys.os === cc.sys.OS_IOS ? t : cc.sys.os === cc.sys.OS_ANDROID ? d : void 0, o = o || {
UseInterstitialAsInterstitial: "UseInterstitialAsInterstitial",
ATInterstitialListener: {
developerCallback: null,
onInterstitialAdLoaded: function(e) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdLoaded && null != this.developerCallback.onInterstitialAdLoaded && this.developerCallback.onInterstitialAdLoaded(e);
},
onInterstitialAdLoadFail: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdLoadFail && null != this.developerCallback.onInterstitialAdLoadFail && this.developerCallback.onInterstitialAdLoadFail(e, n);
},
onInterstitialAdShow: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdShow && null != this.developerCallback.onInterstitialAdShow && this.developerCallback.onInterstitialAdShow(e, n);
},
onInterstitialAdStartPlayingVideo: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdStartPlayingVideo && null != this.developerCallback.onInterstitialAdStartPlayingVideo && this.developerCallback.onInterstitialAdStartPlayingVideo(e, n);
},
onInterstitialAdEndPlayingVideo: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdEndPlayingVideo && null != this.developerCallback.onInterstitialAdEndPlayingVideo && this.developerCallback.onInterstitialAdEndPlayingVideo(e, n);
},
onInterstitialAdFailedToPlayVideo: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdFailedToPlayVideo && null != this.developerCallback.onInterstitialAdFailedToPlayVideo && this.developerCallback.onInterstitialAdFailedToPlayVideo(e, n);
},
onInterstitialAdFailedToShow: function(e) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdFailedToShow && null != this.developerCallback.onInterstitialAdFailedToShow && this.developerCallback.onInterstitialAdFailedToShow(e);
},
onInterstitialAdClose: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdClose && null != this.developerCallback.onInterstitialAdClose && this.developerCallback.onInterstitialAdClose(e, n);
},
onInterstitialAdClick: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdClick && null != this.developerCallback.onInterstitialAdClick && this.developerCallback.onInterstitialAdClick(e, n);
}
},
setAdExtraData: function(e, n) {
void 0 === n && (n = {});
null != i && null != i ? i.setAdExtraData(e, JSON.stringify(n)) : cc.log("You must run on Android or iOS.");
},
addPlacementIds: function(e) {
null != i && null != i ? i.addPlacementIds(JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
},
removePlacementId: function(e) {
null != i && null != i ? i.removePlacementId(JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
},
setAdListener: function(e) {
var n = {};
n[l] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdLoaded", 
n[a] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdLoadFail", 
n[r] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdStartPlayingVideo", 
n[c] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdEndPlayingVideo", 
n[A] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdFailedToPlayVideo", 
n[s] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdClose", 
n[u] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdClick", 
n[S] = "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdShow";
null != i && null != i ? i.setAdListener(JSON.stringify(n)) : cc.log("You must run on Android or iOS.");
this.ATInterstitialListener.developerCallback = e;
},
hasAdReady: function(e) {
if (null != i && null != i) return i.hasAdReady(e);
cc.log("You must run on Android or iOS.");
return !1;
},
checkAdStatus: function(e) {
if (null != i && null != i) return i.checkAdStatus(e);
cc.log("You must run on Android or iOS.");
return "";
},
showAd: function(e) {
null != i && null != i ? i.showAd(e) : cc.log("You must run on Android or iOS.");
},
showAdInScenario: function(e, n) {
void 0 === n && (n = "");
null != i && null != i ? i.showAdInScenario(e, n) : cc.log("You must run on Android or iOS.");
},
entryAdScenario: function(e, n) {
void 0 === n && (n = "");
null != i && null != i ? i.entryAdScenario(e, n) : cc.log("You must run on Android or iOS.");
}
}, l = "InterstitialAutoAdLoaded", a = "InterstitialAutoAdLoadFail", r = "InterstitialAutoAdPlayStart", c = "InterstitialAutoAdPlayEnd", A = "InterstitialAutoAdPlayFail", s = "InterstitialAutoAdClose", u = "InterstitialAutoAdClick", S = "InterstitialAutoAdAdShow";
window.ATInterstitialAutoAdJSSDK = o;
cc._RF.pop();
}, {
"./Android/ATAndroidInterstitialAutoAdJS": "ATAndroidInterstitialAutoAdJS",
"./iOS/ATiOSInterstitialAutoAdJS": "ATiOSInterstitialAutoAdJS"
} ],
ATInterstitialJSSDK: [ function(e, n) {
"use strict";
cc._RF.push(n, "648b3o6HHJOPr8hXZ+6mlY2", "ATInterstitialJSSDK");
var d = e("./iOS/ATiOSInterstitialJS"), t = e("./Android/ATAndroidInterstitialJS"), i = cc.sys.os === cc.sys.OS_IOS ? d : cc.sys.os === cc.sys.OS_ANDROID ? t : void 0, o = o || {
UseInterstitialAsInterstitial: "UseInterstitialAsInterstitial",
ATInterstitialListener: {
developerCallback: null,
onInterstitialAdLoaded: function(e) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdLoaded && null != this.developerCallback.onInterstitialAdLoaded && this.developerCallback.onInterstitialAdLoaded(e);
},
onInterstitialAdLoadFail: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdLoadFail && null != this.developerCallback.onInterstitialAdLoadFail && this.developerCallback.onInterstitialAdLoadFail(e, n);
},
onInterstitialAdShow: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdShow && null != this.developerCallback.onInterstitialAdShow && this.developerCallback.onInterstitialAdShow(e, n);
},
onInterstitialAdStartPlayingVideo: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdStartPlayingVideo && null != this.developerCallback.onInterstitialAdStartPlayingVideo && this.developerCallback.onInterstitialAdStartPlayingVideo(e, n);
},
onInterstitialAdEndPlayingVideo: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdEndPlayingVideo && null != this.developerCallback.onInterstitialAdEndPlayingVideo && this.developerCallback.onInterstitialAdEndPlayingVideo(e, n);
},
onInterstitialAdFailedToPlayVideo: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdFailedToPlayVideo && null != this.developerCallback.onInterstitialAdFailedToPlayVideo && this.developerCallback.onInterstitialAdFailedToPlayVideo(e, n);
},
onInterstitialAdFailedToShow: function(e) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdFailedToShow && null != this.developerCallback.onInterstitialAdFailedToShow && this.developerCallback.onInterstitialAdFailedToShow(e);
},
onInterstitialAdClose: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdClose && null != this.developerCallback.onInterstitialAdClose && this.developerCallback.onInterstitialAdClose(e, n);
},
onInterstitialAdClick: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onInterstitialAdClick && null != this.developerCallback.onInterstitialAdClick && this.developerCallback.onInterstitialAdClick(e, n);
},
onAdSourceBiddingAttempt: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingAttempt && null != this.developerCallback.onAdSourceBiddingAttempt && this.developerCallback.onAdSourceBiddingAttempt(e, n);
},
onAdSourceBiddingFilled: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFilled && null != this.developerCallback.onAdSourceBiddingFilled && this.developerCallback.onAdSourceBiddingFilled(e, n);
},
onAdSourceBiddingFail: function(e, n, d) {
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFail && null != this.developerCallback.onAdSourceBiddingFail && this.developerCallback.onAdSourceBiddingFail(e, n, d);
},
onAdSourceAttemp: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onAdSourceAttemp && null != this.developerCallback.onAdSourceAttemp && this.developerCallback.onAdSourceAttemp(e, n);
},
onAdSourceLoadFilled: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFilled && null != this.developerCallback.onAdSourceLoadFilled && this.developerCallback.onAdSourceLoadFilled(e, n);
},
onAdSourceLoadFail: function(e, n, d) {
null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFail && null != this.developerCallback.onAdSourceLoadFail && this.developerCallback.onAdSourceLoadFail(e, n, d);
}
},
loadInterstitial: function(e, n) {
void 0 === n && (n = {});
null != i && null != i ? i.loadInterstitial(e, JSON.stringify(n)) : cc.log("You must run on Android or iOS.");
},
setAdListener: function(e) {
var n = {};
n[l] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdLoaded", n[a] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdLoadFail", 
n[r] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdStartPlayingVideo", 
n[c] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdEndPlayingVideo", 
n[A] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdFailedToPlayVideo", 
n[s] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdClose", n[u] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdClick", 
n[S] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdShow", n[h] = "ATInterstitialJSSDK.ATInterstitialListener.onInterstitialAdFailedToShow", 
n[p] = "ATInterstitialJSSDK.ATInterstitialListener.onAdSourceBiddingAttempt", n[v] = "ATInterstitialJSSDK.ATInterstitialListener.onAdSourceBiddingFilled", 
n[g] = "ATInterstitialJSSDK.ATInterstitialListener.onAdSourceBiddingFail", n[w] = "ATInterstitialJSSDK.ATInterstitialListener.onAdSourceAttemp", 
n[T] = "ATInterstitialJSSDK.ATInterstitialListener.onAdSourceLoadFilled", n[R] = "ATInterstitialJSSDK.ATInterstitialListener.onAdSourceLoadFail";
null != i && null != i ? i.setAdListener(JSON.stringify(n)) : cc.log("You must run on Android or iOS.");
this.ATInterstitialListener.developerCallback = e;
},
hasAdReady: function(e) {
if (null != i && null != i) return i.hasAdReady(e);
cc.log("You must run on Android or iOS.");
return !1;
},
checkAdStatus: function(e) {
if (null != i && null != i) return i.checkAdStatus(e);
cc.log("You must run on Android or iOS.");
return "";
},
showAd: function(e) {
null != i && null != i ? i.showAd(e) : cc.log("You must run on Android or iOS.");
},
showAdInScenario: function(e, n) {
void 0 === n && (n = "");
null != i && null != i ? i.showAdInScenario(e, n) : cc.log("You must run on Android or iOS.");
},
entryAdScenario: function(e, n) {
void 0 === n && (n = "");
null != i && null != i ? i.entryAdScenario(e, n) : cc.log("You must run on Android or iOS.");
}
}, l = "InterstitialLoaded", a = "InterstitialLoadFail", r = "InterstitialPlayStart", c = "InterstitialPlayEnd", A = "InterstitialPlayFail", s = "InterstitialClose", u = "InterstitialClick", S = "InterstitialAdShow", h = "InterstitialAdShowFail", p = "InterstitialBiddingAttempt", v = "InterstitialBiddingFilled", g = "InterstitialBiddingFail", w = "InterstitialAttemp", T = "InterstitialLoadFilled", R = "InterstitialLoadFail";
window.ATInterstitialJSSDK = o;
cc._RF.pop();
}, {
"./Android/ATAndroidInterstitialJS": "ATAndroidInterstitialJS",
"./iOS/ATiOSInterstitialJS": "ATiOSInterstitialJS"
} ],
ATJSSDK: [ function(e, n) {
"use strict";
cc._RF.push(n, "9e6a7g1zFhLwpnQuQECQBxd", "ATJSSDK");
var d = e("./Android/ATAndroidJS"), t = e("./iOS/ATiOSJS"), i = !1, o = cc.sys.os === cc.sys.OS_IOS ? t : cc.sys.os === cc.sys.OS_ANDROID ? d : void 0, l = l || {
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
initSDK: function(e, n) {
null != o && null != o ? o.initSDK(e, n) : cc.log("You must run on Android or iOS.");
},
initCustomMap: function(e) {
null != o && null != o ? null != e && null != e && o.initCustomMap(JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
},
setPlacementCustomMap: function(e, n) {
null != o && null != o ? null != n && null != n && o.setPlacementCustomMap(e, JSON.stringify(n)) : cc.log("You must run on Android or iOS.");
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
null != o && null != o ? o.getUserLocation(a) : cc.log("You must run on Android or iOS.");
},
showGDPRAuth: function() {
null != o && null != o ? o.showGDPRAuth() : cc.log("You must run on Android or iOS.");
},
setLogDebug: function(e) {
i = e;
null != o && null != o ? o.setLogDebug(e) : cc.log("You must run on Android or iOS.");
},
printLog: function(e) {
null != e && null != e && i && null != o && (null != o && null != o ? o.printJsLog(e) : cc.log("You must run on Android or iOS."));
},
deniedUploadDeviceInfo: function(e) {
if (null != o && null != o) {
if (null != e) {
for (var n = e.length, d = "", t = 0; t < n; t++) {
var i = e[t];
d = 0 == t ? i : d + "," + i;
}
cc.log("test__" + d);
o.deniedUploadDeviceInfo(d);
}
} else cc.log("You must run on Android or iOS.");
}
}, a = "ATJSSDK.ATSDKListener.getUserLocationCallback";
window.ATJSSDK = l;
cc._RF.pop();
}, {
"./Android/ATAndroidJS": "ATAndroidJS",
"./iOS/ATiOSJS": "ATiOSJS"
} ],
ATNativeJSSDK: [ function(e, n) {
"use strict";
cc._RF.push(n, "d3f27a16q5OiZTVRZhIWF6Q", "ATNativeJSSDK");
var d = e("./Android/ATAndroidNativeJS"), t = e("./iOS/ATiOSNativeJS"), i = cc.sys.os === cc.sys.OS_IOS ? t : cc.sys.os === cc.sys.OS_ANDROID ? d : void 0, o = o || {
ATNativeListener: {
developerCallback: null,
onNativeAdLoaded: function(e) {
null != this.developerCallback && null != this.developerCallback.onNativeAdLoaded && null != this.developerCallback.onNativeAdLoaded && this.developerCallback.onNativeAdLoaded(e);
},
onNativeAdLoadFail: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onNativeAdLoadFail && null != this.developerCallback.onNativeAdLoadFail && this.developerCallback.onNativeAdLoadFail(e, n);
},
onNativeAdShow: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onNativeAdShow && null != this.developerCallback.onNativeAdShow && this.developerCallback.onNativeAdShow(e, n);
},
onNativeAdClick: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onNativeAdClick && null != this.developerCallback.onNativeAdClick && this.developerCallback.onNativeAdClick(e, n);
},
onNativeAdVideoStart: function(e) {
null != this.developerCallback && null != this.developerCallback.onNativeAdVideoStart && null != this.developerCallback.onNativeAdVideoStart && this.developerCallback.onNativeAdVideoStart(e);
},
onNativeAdVideoEnd: function(e) {
null != this.developerCallback && null != this.developerCallback.onNativeAdVideoEnd && null != this.developerCallback.onNativeAdVideoEnd && this.developerCallback.onNativeAdVideoEnd(e);
},
onNativeAdCloseButtonTapped: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onNativeAdCloseButtonTapped && null != this.developerCallback.onNativeAdCloseButtonTapped && this.developerCallback.onNativeAdCloseButtonTapped(e, n);
},
onAdSourceBiddingAttempt: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingAttempt && null != this.developerCallback.onAdSourceBiddingAttempt && this.developerCallback.onAdSourceBiddingAttempt(e, n);
},
onAdSourceBiddingFilled: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFilled && null != this.developerCallback.onAdSourceBiddingFilled && this.developerCallback.onAdSourceBiddingFilled(e, n);
},
onAdSourceBiddingFail: function(e, n, d) {
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFail && null != this.developerCallback.onAdSourceBiddingFail && this.developerCallback.onAdSourceBiddingFail(e, n, d);
},
onAdSourceAttemp: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onAdSourceAttemp && null != this.developerCallback.onAdSourceAttemp && this.developerCallback.onAdSourceAttemp(e, n);
},
onAdSourceLoadFilled: function(e, n) {
null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFilled && null != this.developerCallback.onAdSourceLoadFilled && this.developerCallback.onAdSourceLoadFilled(e, n);
},
onAdSourceLoadFail: function(e, n, d) {
null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFail && null != this.developerCallback.onAdSourceLoadFail && this.developerCallback.onAdSourceLoadFail(e, n, d);
}
},
loadNative: function(e, n) {
void 0 === n && (n = {});
null != i && null != i ? i.loadNative(e, JSON.stringify(n)) : cc.log("You must run on Android or iOS.");
},
setAdListener: function(e) {
var n = {};
n[l] = "ATNativeJSSDK.ATNativeListener.onNativeAdLoaded", n[a] = "ATNativeJSSDK.ATNativeListener.onNativeAdLoadFail", 
n[r] = "ATNativeJSSDK.ATNativeListener.onNativeAdCloseButtonTapped", n[c] = "ATNativeJSSDK.ATNativeListener.onNativeAdClick", 
n[A] = "ATNativeJSSDK.ATNativeListener.onNativeAdShow", n[s] = "ATNativeJSSDK.ATNativeListener.onNativeAdVideoStart", 
n[u] = "ATNativeJSSDK.ATNativeListener.onNativeAdVideoEnd", n[S] = "ATNativeJSSDK.ATNativeListener.onAdSourceBiddingAttempt", 
n[h] = "ATNativeJSSDK.ATNativeListener.onAdSourceBiddingFilled", n[p] = "ATNativeJSSDK.ATNativeListener.onAdSourceBiddingFail", 
n[v] = "ATNativeJSSDK.ATNativeListener.onAdSourceAttemp", n[g] = "ATNativeJSSDK.ATNativeListener.onAdSourceLoadFilled", 
n[w] = "ATNativeJSSDK.ATNativeListener.onAdSourceLoadFail";
null != i && null != i ? i.setAdListener(JSON.stringify(n)) : cc.log("You must run on Android or iOS.");
this.ATNativeListener.developerCallback = e;
},
hasAdReady: function(e) {
if (null != i && null != i) return i.hasAdReady(e);
cc.log("You must run on Android or iOS.");
return !1;
},
checkAdStatus: function(e) {
if (null != i && null != i) return i.checkAdStatus(e);
cc.log("You must run on Android or iOS.");
return "";
},
showAd: function(e, n) {
null != i && null != i ? i.showAd(e, JSON.stringify(n.getAdViewProperty())) : cc.log("You must run on Android or iOS.");
},
showAdInScenario: function(e, n, d) {
void 0 === d && (d = "");
null != i && null != i ? i.showAdInScenario(e, JSON.stringify(n.getAdViewProperty()), d) : cc.log("You must run on Android or iOS.");
},
entryAdScenario: function(e, n) {
void 0 === n && (n = "");
null != i && null != i ? i.entryAdScenario(e, n) : cc.log("You must run on Android or iOS.");
},
removeAd: function(e) {
null != i && null != i ? i.removeAd(e) : cc.log("You must run on Android or iOS.");
},
createLoadAdSize: function(e, n) {
var d = {};
d.width = e;
d.height = n;
return d;
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
createItemViewProperty: function(e, n, d, t, i, o, l, a) {
void 0 === a && (a = !1);
var r = {};
r.x = e;
r.y = n;
r.width = d;
r.height = t;
r.backgroundColor = i;
r.textColor = o;
r.textSize = l;
r.isCustomClick = a;
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
}, l = "NativeLoaded", a = "NativeLoadFail", r = "NativeCloseButtonTapped", c = "NativeClick", A = "NativeShow", s = "NativeVideoStart", u = "NativeVideoEnd", S = "NativeBiddingAttempt", h = "NativeBiddingFilled", p = "NativeBiddingFail", v = "NativeAttemp", g = "NativeLoadFilled", w = "NativeLoadFail";
window.ATNativeJSSDK = o;
cc._RF.pop();
}, {
"./Android/ATAndroidNativeJS": "ATAndroidNativeJS",
"./iOS/ATiOSNativeJS": "ATiOSNativeJS"
} ],
ATRewardedVideoAutoAdJSSDK: [ function(e, n) {
"use strict";
cc._RF.push(n, "6ba77BCGgxORIaPVx/w+Oap", "ATRewardedVideoAutoAdJSSDK");
var d = e("./Android/ATAndroidRewardedVideoAutoAdJS"), t = e("./iOS/ATiOSRewardedVideoAutoAdJS"), i = cc.sys.os === cc.sys.OS_IOS ? t : cc.sys.os === cc.sys.OS_ANDROID ? d : void 0, o = o || {
userIdKey: "userID",
userDataKey: "media_ext",
ATRewardedVideoListener: {
developerCallback: null,
onRewardedVideoAdLoaded: function(e) {
ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded(" + e + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdLoaded && null != this.developerCallback.onRewardedVideoAdLoaded && this.developerCallback.onRewardedVideoAdLoaded(e);
},
onRewardedVideoAdFailed: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdFailed(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdFailed && null != this.developerCallback.onRewardedVideoAdFailed && this.developerCallback.onRewardedVideoAdFailed(e, n);
},
onRewardedVideoAdPlayStart: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayStart && null != this.developerCallback.onRewardedVideoAdPlayStart && this.developerCallback.onRewardedVideoAdPlayStart(e, n);
},
onRewardedVideoAdPlayEnd: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayEnd && null != this.developerCallback.onRewardedVideoAdPlayEnd && this.developerCallback.onRewardedVideoAdPlayEnd(e, n);
},
onRewardedVideoAdPlayFailed: function(e, n, d) {
ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed(" + e + ", " + n + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayFailed && null != this.developerCallback.onRewardedVideoAdPlayFailed && this.developerCallback.onRewardedVideoAdPlayFailed(e, n, d);
},
onRewardedVideoAdClosed: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdClosed(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdClosed && null != this.developerCallback.onRewardedVideoAdClosed && this.developerCallback.onRewardedVideoAdClosed(e, n);
},
onRewardedVideoAdPlayClicked: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayClicked && null != this.developerCallback.onRewardedVideoAdPlayClicked && this.developerCallback.onRewardedVideoAdPlayClicked(e, n);
},
onReward: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onReward(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onReward && null != this.developerCallback.onReward && this.developerCallback.onReward(e, n);
},
onRewardedVideoAdAgainPlayStart: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayStart(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayStart && null != this.developerCallback.onRewardedVideoAdAgainPlayStart && this.developerCallback.onRewardedVideoAdAgainPlayStart(e, n);
},
onRewardedVideoAdAgainPlayEnd: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayEnd(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayEnd && null != this.developerCallback.onRewardedVideoAdAgainPlayEnd && this.developerCallback.onRewardedVideoAdAgainPlayEnd(e, n);
},
onRewardedVideoAdAgainPlayFailed: function(e, n, d) {
ATJSSDK.printLog("ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayFailed(" + e + ", " + n + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayFailed && null != this.developerCallback.onRewardedVideoAdAgainPlayFailed && this.developerCallback.onRewardedVideoAdAgainPlayFailed(e, n, d);
},
onRewardedVideoAdAgainPlayClicked: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayClicked(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayClicked && null != this.developerCallback.onRewardedVideoAdAgainPlayClicked && this.developerCallback.onRewardedVideoAdAgainPlayClicked(e, n);
},
onAgainReward: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onAgainReward(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onAgainReward && null != this.developerCallback.onAgainReward && this.developerCallback.onAgainReward(e, n);
}
},
setAdExtraData: function(e, n) {
void 0 === n && (n = {});
null != i && null != i ? i.setAdExtraData(e, JSON.stringify(n)) : cc.log("You must run on Android or iOS.");
},
addPlacementIds: function(e) {
null != i && null != i ? i.addPlacementIds(JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
},
removePlacementId: function(e) {
null != i && null != i ? i.removePlacementId(JSON.stringify(e)) : cc.log("You must run on Android or iOS.");
},
setAdListener: function(e) {
var n = {};
n[l] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded", 
n[a] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdFailed", 
n[r] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart", 
n[c] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd", 
n[A] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed", 
n[s] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdClosed", 
n[u] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked", 
n[S] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onReward", n[h] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayStart", 
n[p] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayEnd", 
n[v] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayFailed", 
n[g] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayClicked", 
n[w] = "ATRewardedVideoAutoAdJSSDK.ATRewardedVideoListener.onAgainReward";
if (null != i && null != i) {
i.setAdListener(JSON.stringify(n));
i.set;
} else cc.log("You must run on Android or iOS.");
this.ATRewardedVideoListener.developerCallback = e;
},
hasAdReady: function(e) {
if (null != i && null != i) return i.hasAdReady(e);
cc.log("You must run on Android or iOS.");
return !1;
},
checkAdStatus: function(e) {
if (null != i && null != i) return i.checkAdStatus(e);
cc.log("You must run on Android or iOS.");
return "";
},
showAd: function(e) {
null != i && null != i ? i.showAd(e) : cc.log("You must run on Android or iOS.");
},
showAdInScenario: function(e, n) {
void 0 === n && (n = "");
null != i && null != i ? i.showAdInScenario(e, n) : cc.log("You must run on Android or iOS.");
},
entryAdScenario: function(e, n) {
void 0 === n && (n = "");
null != i && null != i ? i.entryAdScenario(e, n) : cc.log("You must run on Android or iOS.");
}
}, l = "RewardedVideoAutoAdLoaded", a = "RewardedVideoAutoAdLoadFail", r = "RewardedVideoAutoAdPlayStart", c = "RewardedVideoAutoAdPlayEnd", A = "RewardedVideoAutoAdPlayFail", s = "RewardedVideoAutoAdClose", u = "RewardedVideoAutoAdClick", S = "RewardedVideoAutoAdReward", h = "RewardedVideoAutoAdAgainPlayStart", p = "RewardedVideoAutoAdAgainPlayEnd", v = "RewardedVideoAutoAdAgainPlayFail", g = "RewardedVideoAutoAdAgainClick", w = "RewardedVideoAutoAdAgainReward";
window.ATRewardedVideoAutoAdJSSDK = o;
cc._RF.pop();
}, {
"./Android/ATAndroidRewardedVideoAutoAdJS": "ATAndroidRewardedVideoAutoAdJS",
"./iOS/ATiOSRewardedVideoAutoAdJS": "ATiOSRewardedVideoAutoAdJS"
} ],
ATRewardedVideoJSSDK: [ function(e, n) {
"use strict";
cc._RF.push(n, "c2fcawJmUBNYK1Sio978Itu", "ATRewardedVideoJSSDK");
var d = e("./Android/ATAndroidRewardedVideoJS"), t = e("./iOS/ATiOSRewardedVideoJS"), i = cc.sys.os === cc.sys.OS_IOS ? t : cc.sys.os === cc.sys.OS_ANDROID ? d : void 0, o = o || {
userIdKey: "userID",
userDataKey: "media_ext",
ATRewardedVideoListener: {
developerCallback: null,
onRewardedVideoAdLoaded: function(e) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded(" + e + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdLoaded && null != this.developerCallback.onRewardedVideoAdLoaded && this.developerCallback.onRewardedVideoAdLoaded(e);
},
onRewardedVideoAdFailed: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdFailed(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdFailed && null != this.developerCallback.onRewardedVideoAdFailed && this.developerCallback.onRewardedVideoAdFailed(e, n);
},
onRewardedVideoAdPlayStart: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayStart && null != this.developerCallback.onRewardedVideoAdPlayStart && this.developerCallback.onRewardedVideoAdPlayStart(e, n);
},
onRewardedVideoAdPlayEnd: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayEnd && null != this.developerCallback.onRewardedVideoAdPlayEnd && this.developerCallback.onRewardedVideoAdPlayEnd(e, n);
},
onRewardedVideoAdPlayFailed: function(e, n, d) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed(" + e + ", " + n + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayFailed && null != this.developerCallback.onRewardedVideoAdPlayFailed && this.developerCallback.onRewardedVideoAdPlayFailed(e, n, d);
},
onRewardedVideoAdClosed: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdClosed(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdClosed && null != this.developerCallback.onRewardedVideoAdClosed && this.developerCallback.onRewardedVideoAdClosed(e, n);
},
onRewardedVideoAdPlayClicked: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayClicked && null != this.developerCallback.onRewardedVideoAdPlayClicked && this.developerCallback.onRewardedVideoAdPlayClicked(e, n);
},
onReward: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onReward(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onReward && null != this.developerCallback.onReward && this.developerCallback.onReward(e, n);
},
onAdSourceBiddingAttempt: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceBiddingAttempt(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingAttempt && null != this.developerCallback.onAdSourceBiddingAttempt && this.developerCallback.onAdSourceBiddingAttempt(e, n);
},
onAdSourceBiddingFilled: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceBiddingFilled(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFilled && null != this.developerCallback.onAdSourceBiddingFilled && this.developerCallback.onAdSourceBiddingFilled(e, n);
},
onAdSourceBiddingFail: function(e, n, d) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceBiddingFail(" + e + ", " + n + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onAdSourceBiddingFail && null != this.developerCallback.onAdSourceBiddingFail && this.developerCallback.onAdSourceBiddingFail(e, n, d);
},
onAdSourceAttemp: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceAttemp(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onAdSourceAttemp && null != this.developerCallback.onAdSourceAttemp && this.developerCallback.onAdSourceAttemp(e, n);
},
onAdSourceLoadFilled: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceLoadFilled(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFilled && null != this.developerCallback.onAdSourceLoadFilled && this.developerCallback.onAdSourceLoadFilled(e, n);
},
onAdSourceLoadFail: function(e, n, d) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceLoadFail(" + e + ", " + n + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onAdSourceLoadFail && null != this.developerCallback.onAdSourceLoadFail && this.developerCallback.onAdSourceLoadFail(e, n, d);
},
onRewardedVideoAdAgainPlayStart: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayStart(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayStart && null != this.developerCallback.onRewardedVideoAdAgainPlayStart && this.developerCallback.onRewardedVideoAdAgainPlayStart(e, n);
},
onRewardedVideoAdAgainPlayEnd: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayEnd(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayEnd && null != this.developerCallback.onRewardedVideoAdAgainPlayEnd && this.developerCallback.onRewardedVideoAdAgainPlayEnd(e, n);
},
onRewardedVideoAdAgainPlayFailed: function(e, n, d) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayFailed(" + e + ", " + n + ", " + d + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayFailed && null != this.developerCallback.onRewardedVideoAdAgainPlayFailed && this.developerCallback.onRewardedVideoAdAgainPlayFailed(e, n, d);
},
onRewardedVideoAdAgainPlayClicked: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayClicked(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayClicked && null != this.developerCallback.onRewardedVideoAdAgainPlayClicked && this.developerCallback.onRewardedVideoAdAgainPlayClicked(e, n);
},
onAgainReward: function(e, n) {
ATJSSDK.printLog("ATRewardedVideoJSSDK.ATRewardedVideoListener.onAgainReward(" + e + ", " + n + ")");
null != this.developerCallback && null != this.developerCallback.onAgainReward && null != this.developerCallback.onAgainReward && this.developerCallback.onAgainReward(e, n);
}
},
loadRewardedVideo: function(e, n) {
void 0 === n && (n = {});
null != i && null != i ? i.loadRewardedVideo(e, JSON.stringify(n)) : cc.log("You must run on Android or iOS.");
},
setAdListener: function(e) {
var n = {};
n[l] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded", n[a] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdFailed", 
n[r] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart", 
n[c] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd", 
n[A] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed", 
n[s] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdClosed", n[u] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked", 
n[S] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onReward", n[h] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceBiddingAttempt", 
n[p] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceBiddingFilled", n[v] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceBiddingFail", 
n[g] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceAttemp", n[w] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceLoadFilled", 
n[T] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAdSourceLoadFail", n[R] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayStart", 
n[L] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayEnd", 
n[f] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayFailed", 
n[b] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayClicked", 
n[k] = "ATRewardedVideoJSSDK.ATRewardedVideoListener.onAgainReward";
if (null != i && null != i) {
i.setAdListener(JSON.stringify(n));
i.set;
} else cc.log("You must run on Android or iOS.");
this.ATRewardedVideoListener.developerCallback = e;
},
hasAdReady: function(e) {
if (null != i && null != i) return i.hasAdReady(e);
cc.log("You must run on Android or iOS.");
return !1;
},
checkAdStatus: function(e) {
if (null != i && null != i) return i.checkAdStatus(e);
cc.log("You must run on Android or iOS.");
return "";
},
showAd: function(e) {
null != i && null != i ? i.showAd(e) : cc.log("You must run on Android or iOS.");
},
showAdInScenario: function(e, n) {
void 0 === n && (n = "");
null != i && null != i ? i.showAdInScenario(e, n) : cc.log("You must run on Android or iOS.");
},
entryAdScenario: function(e, n) {
void 0 === n && (n = "");
null != i && null != i ? i.entryAdScenario(e, n) : cc.log("You must run on Android or iOS.");
}
}, l = "RewardedVideoLoaded", a = "RewardedVideoLoadFail", r = "RewardedVideoPlayStart", c = "RewardedVideoPlayEnd", A = "RewardedVideoPlayFail", s = "RewardedVideoClose", u = "RewardedVideoClick", S = "RewardedVideoReward", h = "RewardedVideoBiddingAttempt", p = "RewardedVideoBiddingFilled", v = "RewardedVideoBiddingFail", g = "RewardedVideoAttemp", w = "RewardedVideoLoadFilled", T = "RewardedVideoLoadFail", R = "RewardedVideoAgainPlayStart", L = "RewardedVideoAgainPlayEnd", f = "RewardedVideoAgainPlayFail", b = "RewardedVideoAgainClick", k = "RewardedVideoAgainReward";
window.ATRewardedVideoJSSDK = o;
cc._RF.pop();
}, {
"./Android/ATAndroidRewardedVideoJS": "ATAndroidRewardedVideoJS",
"./iOS/ATiOSRewardedVideoJS": "ATiOSRewardedVideoJS"
} ],
ATiOSBannerJS: [ function(e, n) {
"use strict";
cc._RF.push(n, "5f4c2bSvwxE9YzGIFJLW+bV", "ATiOSBannerJS");
var d = e("ATiOSJS"), t = t || {
loadBanner: function(e, n) {
d.printJsLog("ATiOSBannerJS::loadBanner(" + e + ", " + n + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "loadBannerWithPlacementID:extra:", e, n);
},
setAdListener: function(e) {
d.printJsLog("ATiOSBannerJS::setAdListener(" + e + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "setDelegates:", e);
},
hasAdReady: function(e) {
d.printJsLog("ATiOSBannerJS::hasAdReady(" + e + ")");
return jsb.reflection.callStaticMethod("ATBannerAdWrapper", "bannerReadyForPlacementID:", e);
},
checkAdStatus: function(e) {
d.printJsLog("ATiOSBannerJS::checkAdStatus(" + e + ")");
return jsb.reflection.callStaticMethod("ATBannerAdWrapper", "bannerCheckAdStatusForPlacementID:", e);
},
showAdInPosition: function(e, n) {
d.printJsLog("ATiOSBannerJS::showAdInPosition(" + e + ", " + n + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "showBannerWithPlacementID:scene:position:", e, null, n);
},
showAdInPositionAndScenario: function(e, n, t) {
d.printJsLog("ATiOSBannerJS::showAdInPositionAndScenario(" + e + ", " + n + ", " + t + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "showBannerWithPlacementID:scene:position:", e, t, n);
},
showAdInRectangle: function(e, n) {
d.printJsLog("ATiOSBannerJS::showAdInRectangle(" + e + ", " + n + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "showBannerWithPlacementID:scene:rect:", e, null, n);
},
showAdInRectangleAndScenario: function(e, n, t) {
d.printJsLog("ATiOSBannerJS::showAdInRectangleAndScenario(" + e + ", " + n + ", " + t + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "showBannerWithPlacementID:scene:rect:", e, t, n);
},
removeAd: function(e) {
d.printJsLog("ATiOSBannerJS::removeAd(" + e + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "removeAd:", e);
},
reShowAd: function(e) {
d.printJsLog("ATiOSBannerJS::reShowAd(" + e + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "reShowAd:", e);
},
hideAd: function(e) {
d.printJsLog("ATiOSBannerJS::hideAd(" + e + ")");
jsb.reflection.callStaticMethod("ATBannerAdWrapper", "hideAd:", e);
}
};
n.exports = t;
cc._RF.pop();
}, {
ATiOSJS: "ATiOSJS"
} ],
ATiOSInterstitialAutoAdJS: [ function(e, n) {
"use strict";
cc._RF.push(n, "a7d838ecJpKzJSOb67Q+gt1", "ATiOSInterstitialAutoAdJS");
var d = e("ATiOSJS"), t = "ATInterstitialAutoAdWrapper", i = i || {
setAdListener: function(e) {
d.printJsLog("ATiOSInterstitialAutoAdJS::setAdListener(" + e + ")");
jsb.reflection.callStaticMethod(t, "setDelegates:", e);
},
setAdExtraData: function(e, n) {
d.printJsLog("ATiOSInterstitialAutoAdJS::setAdExtraData(" + e + ", " + n + ")");
jsb.reflection.callStaticMethod(t, "setAutoLocalExtra:customDataJSONString:", e, n);
},
addPlacementIds: function(e) {
d.printJsLog("ATiOSInterstitialAutoAdJS::addPlacementIds(" + e + ")");
jsb.reflection.callStaticMethod(t, "addAutoLoadAdPlacementID:", e);
},
removePlacementId: function(e) {
d.printJsLog("ATiOSInterstitialAutoAdJS::removePlacementId(" + e + ")");
jsb.reflection.callStaticMethod(t, "removeAutoLoadAdPlacementID:", e);
},
hasAdReady: function(e) {
d.printJsLog("ATiOSInterstitialAutoAdJS::hasAdReady(" + e + ")");
return jsb.reflection.callStaticMethod(t, "autoLoadInterstitialAdReadyForPlacementID:", e);
},
checkAdStatus: function(e) {
d.printJsLog("ATiOSInterstitialAutoAdJS::hasAdReady(" + e + ")");
return jsb.reflection.callStaticMethod(t, "checkAutoAdStatus:", e);
},
entryAdScenario: function(e, n) {
d.printJsLog("ATiOSInterstitialAutoAdJS::entryAdScenario(" + e + ", " + n + ")");
jsb.reflection.callStaticMethod(t, "entryAutoAdScenarioWithPlacementID:scenarioID:", e, n);
},
showAd: function(e) {
d.printJsLog("ATiOSInterstitialAutoAdJS::showAd(" + e + ")");
jsb.reflection.callStaticMethod(t, "showAutoInterstitialAdWithPlacementID:scenarioID:", e, null);
},
showAdInScenario: function(e, n) {
d.printJsLog("ATiOSInterstitialAutoAdJS::showAdInScenario(" + e + ", " + n + ")");
jsb.reflection.callStaticMethod(t, "showAutoInterstitialAdWithPlacementID:scenarioID:", e, n);
}
};
n.exports = i;
cc._RF.pop();
}, {
ATiOSJS: "ATiOSJS"
} ],
ATiOSInterstitialJS: [ function(e, n) {
"use strict";
cc._RF.push(n, "b91f2eDh45BU62jONyRwc3p", "ATiOSInterstitialJS");
var d = e("ATiOSJS"), t = "ATInterstitialAdWrapper", i = i || {
loadInterstitial: function(e, n) {
d.printJsLog("ATiOSInterstitialJS::loadInterstitial(" + e + ", " + n + ")");
jsb.reflection.callStaticMethod(t, "loadInterstitialWithPlacementID:extra:", e, n);
},
setAdListener: function(e) {
d.printJsLog("ATiOSInterstitialJS::setAdListener(" + e + ")");
jsb.reflection.callStaticMethod(t, "setDelegates:", e);
},
hasAdReady: function(e) {
d.printJsLog("ATiOSInterstitialJS::hasAdReady(" + e + ")");
return jsb.reflection.callStaticMethod(t, "interstitialReadyForPlacementID:", e);
},
checkAdStatus: function(e) {
d.printJsLog("ATiOSInterstitialJS::checkAdStatus(" + e + ")");
return jsb.reflection.callStaticMethod(t, "checkAdStatus:", e);
},
setUserData: function() {
cc.log("Android-setUserData");
},
showAd: function(e) {
d.printJsLog("ATiOSInterstitialJS::showAd(" + e + ")");
return jsb.reflection.callStaticMethod(t, "showInterstitialWithPlacementID:scene:", e, null);
},
showAdInScenario: function(e, n) {
d.printJsLog("ATiOSInterstitialJS::showAd(" + e + ", " + n + ")");
return jsb.reflection.callStaticMethod(t, "showInterstitialWithPlacementID:scene:", e, n);
},
entryAdScenario: function(e, n) {
d.printJsLog("ATiOSInterstitialJS::entryAdScenario(" + e + ", " + n + ")");
return jsb.reflection.callStaticMethod(t, "entryAdScenarioWithPlacementID:scene:", e, n);
}
};
n.exports = i;
cc._RF.pop();
}, {
ATiOSJS: "ATiOSJS"
} ],
ATiOSJS: [ function(e, n) {
"use strict";
cc._RF.push(n, "eab2bTKNClGy4V+1XWkf+mE", "ATiOSJS");
var d = d || {
initSDK: function(e, n) {
this.printJsLog("ATiOSJS::initSDK(" + e + "," + n + ")");
jsb.reflection.callStaticMethod("ATSDKManager", "startWithAppID:appKey:", e, n);
},
initCustomMap: function(e) {
this.printJsLog("ATiOSJS::initCustomMap(" + e + ")");
jsb.reflection.callStaticMethod("ATSDKManager", "setCustomData:", e);
},
setPlacementCustomMap: function(e, n) {
this.printJsLog("ATiOSJS::setPlacementCustomMap(" + e + ", " + n + ")");
jsb.reflection.callStaticMethod("ATSDKManager", "setCustomData:forPlacementID:", n, e);
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
n.exports = d;
cc._RF.pop();
}, {} ],
ATiOSNativeJS: [ function(e, n) {
"use strict";
cc._RF.push(n, "f3f9cBkI79L45Icp9EOEfr4", "ATiOSNativeJS");
var d = e("ATiOSJS"), t = t || {
loadNative: function(e, n) {
d.printJsLog("ATiOSBannerJS::loadNative(" + e + ", " + n + ")");
jsb.reflection.callStaticMethod("ATNativeAdWrapper", "loadNativeWithPlacementID:extra:", e, n);
},
setAdListener: function(e) {
d.printJsLog("ATiOSNativeJS::setAdListener(" + e + ")");
jsb.reflection.callStaticMethod("ATNativeAdWrapper", "setDelegates:", e);
},
hasAdReady: function(e) {
d.printJsLog("ATiOSNativeJS::hasAdReady(" + e + ")");
return jsb.reflection.callStaticMethod("ATNativeAdWrapper", "nativeReadyForPlacementID:", e);
},
checkAdStatus: function(e) {
d.printJsLog("ATiOSNativeJS::checkAdStatus(" + e + ")");
return jsb.reflection.callStaticMethod("ATNativeAdWrapper", "nativeCheckAdStatusForPlacementID:", e);
},
showAd: function(e, n) {
d.printJsLog("ATiOSNativeJS::showAd(" + e + ", " + n + ")");
jsb.reflection.callStaticMethod("ATNativeAdWrapper", "showNativeWithPlacementID:scene:metrics:", e, null, n);
},
showAdInScenario: function(e, n, t) {
d.printJsLog("ATiOSNativeJS::showAdInScenario(" + e + ", " + n + ", " + t + ")");
jsb.reflection.callStaticMethod("ATNativeAdWrapper", "showNativeWithPlacementID:scene:metrics:", e, t, n);
},
removeAd: function(e) {
d.printJsLog("ATiOSNativeJS::removeAd(" + e + ")");
jsb.reflection.callStaticMethod("ATNativeAdWrapper", "removeNativeWithPlacementID:", e);
},
entryAdScenario: function(e, n) {
d.printJsLog("ATiOSInterstitialJS::entryAdScenario(" + e + ", " + n + ")");
return jsb.reflection.callStaticMethod("ATNativeAdWrapper", "entryAdScenarioWithPlacementID:scene:", e, n);
}
};
n.exports = t;
cc._RF.pop();
}, {
ATiOSJS: "ATiOSJS"
} ],
ATiOSRewardedVideoAutoAdJS: [ function(e, n) {
"use strict";
cc._RF.push(n, "c400aRhiuxPPqnKe1gvsgAa", "ATiOSRewardedVideoAutoAdJS");
var d = e("ATiOSJS"), t = "ATRewardedVideoAutoAdWrapper", i = i || {
setAdListener: function(e) {
d.printJsLog("ATiOSRewardedVideoAutoAdJS::setAdListener(" + e + ")");
jsb.reflection.callStaticMethod(t, "setDelegates:", e);
},
setAdExtraData: function(e, n) {
d.printJsLog("ATiOSRewardedVideoAutoAdJS::setAdExtraData(" + e + ", " + n + ")");
jsb.reflection.callStaticMethod(t, "setAutoLocalExtra:customDataJSONString:", e, n);
},
addPlacementIds: function(e) {
d.printJsLog("ATiOSRewardedVideoAutoAdJS::addPlacementIds(" + e + ")");
jsb.reflection.callStaticMethod(t, "addAutoLoadAdPlacementID:", e);
},
removePlacementId: function(e) {
d.printJsLog("ATiOSRewardedVideoAutoAdJS::removePlacementId(" + e + ")");
jsb.reflection.callStaticMethod(t, "removeAutoLoadAdPlacementID:", e);
},
hasAdReady: function(e) {
d.printJsLog("ATiOSRewardedVideoAutoAdJS::hasAdReady(" + e + ")");
return jsb.reflection.callStaticMethod(t, "autoLoadRewardedVideoReadyForPlacementID:", e);
},
checkAdStatus: function(e) {
d.printJsLog("ATiOSRewardedVideoAutoAdJS::hasAdReady(" + e + ")");
return jsb.reflection.callStaticMethod(t, "checkAutoAdStatus:", e);
},
entryAdScenario: function(e, n) {
d.printJsLog("ATiOSInterstitialAutoAdJS::entryAdScenario(" + e + ", " + n + ")");
jsb.reflection.callStaticMethod(t, "entryAutoAdScenarioWithPlacementID:scenarioID:", e, n);
},
showAd: function(e) {
d.printJsLog("ATiOSRewardedVideoAutoAdJS::showAd(" + e + ")");
jsb.reflection.callStaticMethod(t, "showAutoRewardedVideoWithPlacementID:scenarioID:", e, null);
},
showAdInScenario: function(e, n) {
d.printJsLog("ATiOSRewardedVideoAutoAdJS::showAdInScenario(" + e + ", " + n + ")");
jsb.reflection.callStaticMethod(t, "showAutoRewardedVideoWithPlacementID:scenarioID:", e, n);
}
};
n.exports = i;
cc._RF.pop();
}, {
ATiOSJS: "ATiOSJS"
} ],
ATiOSRewardedVideoJS: [ function(e, n) {
"use strict";
cc._RF.push(n, "85f1chdcYBH5qVaK/doj323", "ATiOSRewardedVideoJS");
var d = e("ATiOSJS"), t = t || {
loadRewardedVideo: function(e, n) {
d.printJsLog("ATiOSRewardedVideoJS::loadRewardedVideo(" + e + ", " + n + ")");
jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "loadRewardedVideoWithPlacementID:extra:", e, n);
},
setAdListener: function(e) {
d.printJsLog("ATiOSRewardedVideoJS::setAdListener(" + e + ")");
jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "setDelegates:", e);
},
hasAdReady: function(e) {
d.printJsLog("ATiOSRewardedVideoJS::hasAdReady(" + e + ")");
return jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "rewardedVideoReadyForPlacementID:", e);
},
checkAdStatus: function(e) {
d.printJsLog("ATiOSRewardedVideoJS::checkAdStatus(" + e + ")");
return jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "checkAdStatus:", e);
},
setUserData: function() {
cc.log("Android-setUserData");
},
showAd: function(e) {
d.printJsLog("ATiOSRewardedVideoJS::showAd(" + e + ")");
return jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "showRewardedVideoWithPlacementID:scene:", e, null);
},
showAdInScenario: function(e, n) {
d.printJsLog("ATiOSRewardedVideoJS::showAdInScenario(" + e + ", " + n + ")");
return jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "showRewardedVideoWithPlacementID:scene:", e, n);
},
entryAdScenario: function(e, n) {
d.printJsLog("ATiOSInterstitialJS::entryAdScenario(" + e + ", " + n + ")");
return jsb.reflection.callStaticMethod("ATRewardedVideoWrapper", "entryAdScenarioWithPlacementID:scene:", e, n);
}
};
n.exports = t;
cc._RF.pop();
}, {
ATiOSJS: "ATiOSJS"
} ],
Helloworld: [ function(e, n, d) {
"use strict";
cc._RF.push(n, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
var t, i = this && this.__extends || (t = function(e, n) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, n) {
e.__proto__ = n;
} || function(e, n) {
for (var d in n) Object.prototype.hasOwnProperty.call(n, d) && (e[d] = n[d]);
})(e, n);
}, function(e, n) {
t(e, n);
function d() {
this.constructor = e;
}
e.prototype = null === n ? Object.create(n) : (d.prototype = n.prototype, new d());
}), o = this && this.__decorate || function(e, n, d, t) {
var i, o = arguments.length, l = o < 3 ? n : null === t ? t = Object.getOwnPropertyDescriptor(n, d) : t;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, n, d, t); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (l = (o < 3 ? i(l) : o > 3 ? i(n, d, l) : i(n, d)) || l);
return o > 3 && l && Object.defineProperty(n, d, l), l;
};
Object.defineProperty(d, "__esModule", {
value: !0
});
var l = cc._decorator, a = l.ccclass, r = l.property, c = function(e) {
i(n, e);
function n() {
var n = null !== e && e.apply(this, arguments) || this;
n.label = null;
n.text = "hello";
return n;
}
n.prototype.start = function() {
this.label.string = this.text;
};
o([ r(cc.Label) ], n.prototype, "label", void 0);
o([ r ], n.prototype, "text", void 0);
return o([ a ], n);
}(cc.Component);
d.default = c;
cc._RF.pop();
}, {} ]
}, {}, [ "Helloworld", "ATBannerJSSDK", "ATInterstitialAutoAdJSSDK", "ATInterstitialJSSDK", "ATJSSDK", "ATNativeJSSDK", "ATRewardedVideoAutoAdJSSDK", "ATRewardedVideoJSSDK", "ATAndroidBannerJS", "ATAndroidInterstitialAutoAdJS", "ATAndroidInterstitialJS", "ATAndroidJS", "ATAndroidNativeJS", "ATAndroidRewardedVideoAutoAdJS", "ATAndroidRewardedVideoJS", "ATiOSBannerJS", "ATiOSInterstitialAutoAdJS", "ATiOSInterstitialJS", "ATiOSJS", "ATiOSNativeJS", "ATiOSRewardedVideoAutoAdJS", "ATiOSRewardedVideoJS" ]);