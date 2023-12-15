//reference  https://newdocs.toponad.com/docs/0ZnBFk

import ToponBridge from "./ToponBridge";

//JS导入AnyThink SDK
// @ts-ignore
let ATJSSDK = window.ATJSSDK
// @ts-ignore
let ATNativeJSSDK = window.ATNativeJSSDK

export default class NativeComp extends cc.Component {

    LoadAd()
    {
        // 加载原生广告时需要传入广告展示的宽高
        // 特别说明：如果是原生模板广告，传入的size跟后面展示的 nativeAdViewProperty.parent = size最好要一致，不然可能出现裁剪或显示不全的问题。
        ATNativeJSSDK.loadNative(ToponBridge.instance.PlacementID(), ATNativeJSSDK.createLoadAdSize(cc.view.getFrameSize().width, cc.view.getFrameSize().width * 4/5));
        ATNativeJSSDK.setAdListener(this.NativeAdListner);
    }

    HasAdReady() : boolean
    {
        return ATNativeJSSDK.hasAdReady(ToponBridge.instance.PlacementID());
    }

    CheckAdStatus() : string
    {
        return ATNativeJSSDK.checkAdStatus(ToponBridge.instance.PlacementID());
    }

    ShowAd()
    {
        var frameSize = cc.view.getFrameSize();
        var frameWidth = frameSize.width;
        var frameHeight = frameSize.height;
        var padding = frameSize.width / 35;

        var parentWidth = frameWidth;
        var parentHeight = frameWidth * 4/5;
        var appIconSize = frameWidth/7;


        var nativeAdViewProperty = new ATNativeJSSDK.AdViewProperty();
        nativeAdViewProperty.parent = nativeAdViewProperty.createItemViewProperty(0, frameHeight - parentHeight,parentWidth,parentHeight,"#ffffff","",0);

        nativeAdViewProperty.appIcon = nativeAdViewProperty.createItemViewProperty(0 ,parentHeight - appIconSize, appIconSize ,appIconSize ,"","",0);

        nativeAdViewProperty.cta = nativeAdViewProperty.createItemViewProperty(parentWidth-appIconSize*2 ,parentHeight - appIconSize ,appIconSize*2 ,appIconSize ,"#2095F1" ,"#ffffff" , appIconSize/3);

        nativeAdViewProperty.mainImage = nativeAdViewProperty.createItemViewProperty(padding ,padding, parentWidth-2*padding ,parentHeight - appIconSize - 2*padding,"#ffffff","#ffffff",14);

        nativeAdViewProperty.title = nativeAdViewProperty.createItemViewProperty(appIconSize + padding ,parentHeight - appIconSize , parentWidth - 3* appIconSize -2 * padding ,appIconSize/2 ,"" ,"#000000" , appIconSize/3);

        nativeAdViewProperty.desc = nativeAdViewProperty.createItemViewProperty(appIconSize + padding ,parentHeight - appIconSize/2 , parentWidth - 3* appIconSize -2 * padding ,appIconSize/2 ,"#ffffff" ,"#000000" , appIconSize/4);

// nativeAdViewProperty.adLogo = nativeAdViewProperty.createItemViewProperty(0,0,0,0,"#ffffff","#ffffff",14);
        nativeAdViewProperty.elements = nativeAdViewProperty.createItemViewProperty(0, parentHeight - appIconSize/2, parentWidth, appIconSize/2,"#7f000000", "#ffffff",14)

//Show Ad
        ATNativeJSSDK.showAd(ToponBridge.instance.PlacementID(), nativeAdViewProperty);

//使用广告场景时调用以下代码：
// ATNativeJSSDK.showAdInScenario(this.placementID(), nativeAdViewProperty, <you scenario id>);
    }

    RemoveAd()
    {
        ATNativeJSSDK.removeAd(ToponBridge.instance.PlacementID());
    }

    NativeAdListner = {
        //广告加载成功
        onNativeAdLoaded : function (placementId) {
            ATJSSDK.printLog("NX::onNativeAdLoaded(" + placementId + ")");
        },
        //广告加载失败
        onNativeAdLoadFail : function(placementId, errorInfo) {
            ATJSSDK.printLog("NX::onNativeAdLoadFail(" + placementId + ", " + errorInfo + ")");
        },
        //广告展示成功
        onNativeAdShow : function(placementId, callbackInfo) {
            ATJSSDK.printLog("NX::onNativeAdShow(" + placementId + ", " + callbackInfo + ")");
        },
        //广告被点击
        onNativeAdClick : function(placementId, callbackInfo) {
            ATJSSDK.printLog("NX::onNativeAdClick(" + placementId + ", " + callbackInfo + ")");
        },
        //广告视频开始播放，部分广告平台有此回调
        onNativeAdVideoStart : function(placementId) {
            ATJSSDK.printLog("NX::onNativeAdVideoStart(" + placementId + ")");
        },
        //广告视频结束播放，部分广告平台有此回调
        onNativeAdVideoEnd : function(placementId) {
            ATJSSDK.printLog("NX:onNativeAdVideoEnd(" + placementId + ")");
        },
        //广告关闭按钮被点击，部分广告平台有此回调
        onNativeAdCloseButtonTapped : function(placementId, callbackInfo) {
            ATJSSDK.printLog("NX::onNativeAdCloseButtonTapped(" + placementId + ", " + callbackInfo + ")");
        }
    }
}
