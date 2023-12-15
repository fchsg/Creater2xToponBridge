//reference  https://newdocs.toponad.com/docs/iWF7Ct

import ToponBridge from "./ToponBridge";
//JS导入AnyThink SDK
// @ts-ignore
let ATJSSDK = window.ATJSSDK
// @ts-ignore
let ATInterstitialJSSDK = window.ATInterstitialJSSDK
export default class InterstitialComp  {
    LoadAd()
    {
        var setting = {};
        //setting[ATInterstitialJSSDK.UseRewardedVideoAsInterstitial] = false;    //v5.6.8新增，只针对Sigmob平台，Sigmob的激励视频广告源当做插屏使用
        //setting[ATInterstitialJSSDK.UseRewardedVideoAsInterstitial] = true;
        ATInterstitialJSSDK.loadInterstitial(ToponBridge.instance.PlacementID(), setting);
        ATInterstitialJSSDK.setAdListener(this.InterstitialListener);
    }
    HasAdReady() : boolean
    {
        return ATInterstitialJSSDK.hasAdReady(ToponBridge.instance.PlacementID());
    }
    CheckAdStatus() : string
    {
        return ATInterstitialJSSDK.checkAdStatus(ToponBridge.instance.PlacementID());
    }
    ShowAd()
    {
        ATInterstitialJSSDK.showAd(ToponBridge.instance.PlacementID());
    }

     InterstitialListener = {
        //广告加载成功
        onInterstitialAdLoaded : function (placementId) {
            ATJSSDK.printLog("NX:onInterstitialAdLoaded(" + placementId + ")");
        },
        //广告加载失败
        onInterstitialAdLoadFail : function(placementId, errorInfo) {
            ATJSSDK.printLog("NX:onInterstitialAdLoadFail(" + placementId + ", " + errorInfo + ")");
        },
        //广告展示成功
        onInterstitialAdShow : function(placementId, callbackInfo) {
            ATJSSDK.printLog("NX:onInterstitialAdShow("  + placementId + ", " + callbackInfo + ")");
        },
        //广告视频开始播放，部分平台有此回调
        onInterstitialAdStartPlayingVideo : function(placementId, callbackInfo) {
            ATJSSDK.printLog("NX:onInterstitialAdStartPlayingVideo("  + placementId + ", " + callbackInfo + ")");
        },
        //广告视频播放结束，部分广告平台有此回调
        onInterstitialAdEndPlayingVideo : function(placementId, callbackInfo) {
            ATJSSDK.printLog("NX:onInterstitialAdEndPlayingVideo("  + placementId + ", " + callbackInfo + ")");
        },
        //广告视频播放失败，部分广告平台有此回调
        onInterstitialAdFailedToPlayVideo : function(placementId, errorInfo) {
            ATJSSDK.printLog("NX:onInterstitialAdFailedToPlayVideo(" + placementId + ", " + errorInfo + ")");
        },
        //广告展示失败
        onInterstitialAdFailedToShow : function(placementId) {
            ATJSSDK.printLog("NX:onInterstitialAdFailedToShow(" + placementId + ")");
        },
        //广告被关闭
        onInterstitialAdClose : function(placementId, callbackInfo) {
            ATJSSDK.printLog("NX:onInterstitialAdClose("  + placementId + ", " + callbackInfo + ")");
        },
        //广告被点击
        onInterstitialAdClick : function(placementId, callbackInfo) {
            ATJSSDK.printLog("NX:onInterstitialAdClick("  + placementId + ", " + callbackInfo + ")");
        }
    };
}
