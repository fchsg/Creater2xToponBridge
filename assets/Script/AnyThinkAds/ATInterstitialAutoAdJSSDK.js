var ATAndroidInterstitialAutoAdJS = require("./Android/ATAndroidInterstitialAutoAdJS");
var ATiOSInterstitialAutoAdJS = require("./iOS/ATiOSInterstitialAutoAdJS");//todo change iOS file...

var initPlatformBridge = function () {
    if (cc.sys.os === cc.sys.OS_IOS) {
        return ATiOSInterstitialAutoAdJS;
    } else if (cc.sys.os === cc.sys.OS_ANDROID) {
        return ATAndroidInterstitialAutoAdJS;
    }
};

var platformBridge = initPlatformBridge();


var ATInterstitialAutoAdSDK = ATInterstitialAutoAdSDK || {
    
    UseInterstitialAsInterstitial: "UseInterstitialAsInterstitial",

    ATInterstitialListener: {
        developerCallback: null,

        onInterstitialAdLoaded : function (placementId) {
            if(this.developerCallback != null && this.developerCallback.onInterstitialAdLoaded != null && undefined != this.developerCallback.onInterstitialAdLoaded) {
                this.developerCallback.onInterstitialAdLoaded(placementId);
            }
        },

        onInterstitialAdLoadFail : function(placementId, errorInfo) {
          if(this.developerCallback != null && this.developerCallback.onInterstitialAdLoadFail != null && undefined != this.developerCallback.onInterstitialAdLoadFail) {
                this.developerCallback.onInterstitialAdLoadFail(placementId, errorInfo);
            }
        },

        onInterstitialAdShow : function(placementId, callbackInfo) {
           if(this.developerCallback != null && this.developerCallback.onInterstitialAdShow != null && undefined != this.developerCallback.onInterstitialAdShow) {
                this.developerCallback.onInterstitialAdShow(placementId, callbackInfo);
            }
        },

        onInterstitialAdStartPlayingVideo : function(placementId, callbackInfo) {
            if(this.developerCallback != null && this.developerCallback.onInterstitialAdStartPlayingVideo != null && undefined != this.developerCallback.onInterstitialAdStartPlayingVideo) {
                this.developerCallback.onInterstitialAdStartPlayingVideo(placementId, callbackInfo);
            }
        },

        onInterstitialAdEndPlayingVideo : function(placementId, callbackInfo) {
            if(this.developerCallback != null && this.developerCallback.onInterstitialAdEndPlayingVideo != null && undefined != this.developerCallback.onInterstitialAdEndPlayingVideo) {
                this.developerCallback.onInterstitialAdEndPlayingVideo(placementId, callbackInfo);
            }
        },

        onInterstitialAdFailedToPlayVideo : function(placementId, errorInfo) {
            if(this.developerCallback != null && this.developerCallback.onInterstitialAdFailedToPlayVideo != null && undefined != this.developerCallback.onInterstitialAdFailedToPlayVideo) {
                this.developerCallback.onInterstitialAdFailedToPlayVideo(placementId, errorInfo);
            }
        },

        onInterstitialAdFailedToShow : function(placementId) {
            if(this.developerCallback != null && this.developerCallback.onInterstitialAdFailedToShow != null && undefined != this.developerCallback.onInterstitialAdFailedToShow) {
                this.developerCallback.onInterstitialAdFailedToShow(placementId);
            }
        },

        onInterstitialAdClose : function(placementId, callbackInfo) {
            if(this.developerCallback != null && this.developerCallback.onInterstitialAdClose != null && undefined != this.developerCallback.onInterstitialAdClose) {
                this.developerCallback.onInterstitialAdClose(placementId, callbackInfo);
            }
        },

        onInterstitialAdClick : function(placementId, callbackInfo) {
            if(this.developerCallback != null && this.developerCallback.onInterstitialAdClick != null && undefined != this.developerCallback.onInterstitialAdClick) {
                this.developerCallback.onInterstitialAdClick(placementId, callbackInfo);
            }
        }
    },

    setAdExtraData: function (placementId, settings = {}) {

        if (undefined != platformBridge && platformBridge != null) {
            platformBridge.setAdExtraData(placementId, JSON.stringify(settings));
        } else {
            cc.log("You must run on Android or iOS.");
        }
    },

    addPlacementIds : function (placementIds){

        if (undefined != platformBridge && platformBridge != null) {
            platformBridge.addPlacementIds(JSON.stringify(placementIds));
        } else {
            cc.log("You must run on Android or iOS.");
        }
    },

    removePlacementId : function (placementIds){

        if (undefined != platformBridge && platformBridge != null) {
            platformBridge.removePlacementId(JSON.stringify(placementIds));
        } else {
            cc.log("You must run on Android or iOS.");
        }
    },

    setAdListener: function (listener) {
        var eventJSON = {};
        eventJSON[LoadedCallbackKey]="ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdLoaded",
        eventJSON[LoadFailCallbackKey]= "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdLoadFail",
        eventJSON[PlayStartCallbackKey]= "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdStartPlayingVideo",
        eventJSON[PlayEndCallbackKey]= "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdEndPlayingVideo",
        eventJSON[PlayFailCallbackKey]= "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdFailedToPlayVideo",
        eventJSON[CloseCallbackKey]= "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdClose",
        eventJSON[ClickCallbackKey]= "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdClick",
        eventJSON[ShowCallbackKey]= "ATInterstitialAutoAdJSSDK.ATInterstitialListener.onInterstitialAdShow"
        
        if (undefined != platformBridge && platformBridge != null) {
            platformBridge.setAdListener(JSON.stringify(eventJSON));
        } else {
            cc.log("You must run on Android or iOS.");
        }

        this.ATInterstitialListener.developerCallback = listener;
    },

    hasAdReady: function (placementId) {
        if (undefined != platformBridge && platformBridge != null) {
            return platformBridge.hasAdReady(placementId);
        } else {
            cc.log("You must run on Android or iOS.");
        }
        return false;
    },

    checkAdStatus: function (placementId) {
        if (undefined != platformBridge && platformBridge != null) {
            return platformBridge.checkAdStatus(placementId);
        } else {
            cc.log("You must run on Android or iOS.");
        }
        return "";
    },

    showAd: function (placementId) {
        if (undefined != platformBridge && platformBridge != null) {
            platformBridge.showAd(placementId);
        } else {
            cc.log("You must run on Android or iOS.");
        }
    },

    showAdInScenario: function (placementId, scenario = "") {
        if (undefined != platformBridge && platformBridge != null) {
            platformBridge.showAdInScenario(placementId, scenario);
        } else {
            cc.log("You must run on Android or iOS.");
        }
    },

    entryAdScenario: function (placementId, scenario = "") {
        if (undefined != platformBridge && platformBridge != null) {
            platformBridge.entryAdScenario(placementId, scenario);
        } else {
            cc.log("You must run on Android or iOS.");
        }
    }

};

const LoadedCallbackKey = "InterstitialAutoAdLoaded";
const LoadFailCallbackKey = "InterstitialAutoAdLoadFail";
const PlayStartCallbackKey = "InterstitialAutoAdPlayStart";
const PlayEndCallbackKey = "InterstitialAutoAdPlayEnd";
const PlayFailCallbackKey = "InterstitialAutoAdPlayFail";
const CloseCallbackKey = "InterstitialAutoAdClose";
const ClickCallbackKey = "InterstitialAutoAdClick";
const ShowCallbackKey = "InterstitialAutoAdAdShow";

window.ATInterstitialAutoAdJSSDK = ATInterstitialAutoAdSDK;