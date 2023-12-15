//reference  https://newdocs.toponad.com/docs/DH8k84

import ToponBridge from "./ToponBridge";

//JS导入AnyThink SDK
// @ts-ignore
let ATJSSDK = window.ATJSSDK
// @ts-ignore
let ATBannerJSSDK = window.ATBannerJSSDK


export default class BannerComp  {

    LoadAd()
    {
        //width:Banner展示区域的宽度  height:Banner展示区域的高度
        var setting = {};
        setting[ATBannerJSSDK.kATBannerAdLoadingExtraBannerAdSizeStruct] = ATBannerJSSDK.createLoadAdSize(cc.view.getFrameSize().width, 150);
//只针对Admob的自适应banner
        setting[ATBannerJSSDK.kATBannerAdAdaptiveWidth] = cc.view.getFrameSize().width;
        setting[ATBannerJSSDK.kATBannerAdAdaptiveOrientation] = ATBannerJSSDK.kATBannerAdAdaptiveOrientationCurrent;
// setting[ATBannerJSSDK.kATBannerAdAdaptiveOrientation] = ATBannerJSSDK.kATBannerAdAdaptiveOrientationPortrait;
// setting[ATBannerJSSDK.kATBannerAdAdaptiveOrientation] = ATBannerJSSDK.kATBannerAdAdaptiveOrientationLandscape;
        ATBannerJSSDK.loadBanner(ToponBridge.instance.PlacementID(), setting);

        ATBannerJSSDK.setAdListener(this.BannerListener);
    }

    HasAdReady() : boolean
    {
       return ATBannerJSSDK.hasAdReady(ToponBridge.instance.PlacementID());
    }

    CheckAdStatus() : string
    {
        return ATBannerJSSDK.checkAdStatus(ToponBridge.instance.PlacementID());
    }

    ShowAd()
    {
        ATBannerJSSDK.showAdInPosition(ToponBridge.instance.PlacementID(), ATBannerJSSDK.kATBannerAdShowingPositionBottom);  //显示底部banner
  //   ATBannerJSSDK.showAdInRectangle(ToponBridge.instance.PlacementID(), ATBannerJSSDK.createShowAdRect(0, 0, cc.view.getFrameSize().width, 60 * cc.view.getFrameSize().height/800));
 //（v5.7.24新增） 使用广告场景时
 //ATBannerJSSDK.showAdInRectangleAndScenario(this.placementID(), ATBannerJSSDK.createShowAdRect(0, 0, cc.view.getFrameSize().width, 60 * cc.view.getFrameSize().height/800), <you scenario id>);
    }

    HideAd()
    {
        ATBannerJSSDK.hideAd(ToponBridge.instance.PlacementID());
    }

    RemoveAd()
    {
        ATBannerJSSDK.removeAd(ToponBridge.instance.PlacementID());
    }

    ReShowAd()
    {
        ATBannerJSSDK.reShowAd(ToponBridge.instance.PlacementID());
    }

    BannerListener = {
        //广告加载成功
        onBannerAdLoaded : function (placementId) {
            ATJSSDK.printLog("NX:onBannerAdLoaded(" + placementId + ")");
        },
        //广告加载失败
        onBannerAdLoadFail : function(placementId, errorInfo) {
            ATJSSDK.printLog("NX:onBannerAdLoadFail(" + placementId + ", " + errorInfo + ")");
        },
        //广告展示成功
        onBannerAdShow : function(placementId, callbackInfo) {
            ATJSSDK.printLog("NX:onBannerAdShow(" + placementId  + ", " + callbackInfo + ")");
        },
        //广告被点击
        onBannerAdClick : function(placementId, callbackInfo) {
            ATJSSDK.printLog("NX:onBannerAdClick(" + placementId  + ", " + callbackInfo + ")");
        },
        //广告自动刷新成功
        onBannerAdAutoRefresh : function(placementId, callbackInfo) {
            ATJSSDK.printLog("NX:onBannerAdAutoRefresh(" + placementId  + ", " + callbackInfo + ")");
        },
        //广告自动刷新失败
        onBannerAdAutoRefreshFail : function(placementId, errorInfo) {
            ATJSSDK.printLog("NX:onBannerAdAutoRefreshFail(" + placementId + ", " + errorInfo + ")");
        },
        //广告关闭按钮被点击
        onBannerAdCloseButtonTapped : function(placementId, callbackInfo) {
            ATJSSDK.printLog("NX:onBannerAdCloseButtonTapped(" + placementId  + ", " + callbackInfo + ")");
        }
    };

}
