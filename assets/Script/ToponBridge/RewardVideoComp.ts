//reference https://newdocs.toponad.com/docs/U0hT0x

import ToponBridge from "./ToponBridge";
import RewardVideoCallback from "./RewardVideoCallback";
//JS导入AnyThink SDK
// @ts-ignore
let ATJSSDK = window.ATJSSDK
// @ts-ignore
let ATRewardedVideoJSSDK = window.ATRewardedVideoJSSDK

export default class RewardVideoComp{

    public static RewardVideoCallBack : RewardVideoCallback = null;
    LoadAd()
    {
        var setting = {};
//如果需要通过开发者的服务器进行奖励的下发（部分广告平台支持服务器激励），则需要传递下面两个key
//ATRewardedVideoJSSDK.userIdKey必传，用于标识每个用户;ATRewardedVideoJSSDK.userDataKey为可选参数，传入后将透传到开发者的服务器
        setting[ATRewardedVideoJSSDK.userIdKey] = "test_user_id";
        setting[ATRewardedVideoJSSDK.userDataKey] = "test_user_data";
        ATRewardedVideoJSSDK.loadRewardedVideo(ToponBridge.instance.PlacementID(), setting);
        ATRewardedVideoJSSDK.setAdListener(this.RewardedVideoListener);
    }

    HasAdReady():boolean
    {
        let b = ATRewardedVideoJSSDK.hasAdReady(ToponBridge.instance.PlacementID());
        if(b)
        {
            cc.log('NX:Reward ad is Ready');
        }
        else
        {
            cc.log('NX:Reward ad not Ready')
        }
        return b;
    }

    CheckAdStatus():string
    {
        let status = ATRewardedVideoJSSDK.checkAdStatus(ToponBridge.instance.PlacementID());
        cc.log("NX:CheckAdStatus:" + status);
        return status;
    }

    ShowAd()
    {
        cc.log("NX:ShowAd Start");
        ATRewardedVideoJSSDK.showAd(ToponBridge.instance.PlacementID());
    }

    SetCallback(adClosed : Function, adReward : Function)
    {
        RewardVideoComp.RewardVideoCallBack = new RewardVideoCallback();   //广告奖励回调
        RewardVideoComp.RewardVideoCallBack.onRewardedVideoAdLoaded = adClosed;
        RewardVideoComp.RewardVideoCallBack.onReward = adReward;
    }

    RewardedVideoListener = {
        //广告加载成功
        onRewardedVideoAdLoaded:function(placementId) {
            ATJSSDK.printLog("NX:onRewardedVideoAdLoaded(" + placementId + ")");
        },
        //广告加载失败
        onRewardedVideoAdFailed : function(placementId, errorInfo) {
            ATJSSDK.printLog("NX:onRewardedVideoAdFailed(" + placementId + ", " + errorInfo + ")");
        },
        //广告开始播放
        onRewardedVideoAdPlayStart : function(placementId, callbackInfo) {
            ATJSSDK.printLog("NX:onRewardedVideoAdPlayStart(" + placementId + ", " + callbackInfo + ")");
        },
        //广告播放结束
        onRewardedVideoAdPlayEnd : function(placementId, callbackInfo) {
            ATJSSDK.printLog("NX:onRewardedVideoAdPlayEnd(" + placementId + ", " + callbackInfo + ")");
        },
        //广告播放失败
        onRewardedVideoAdPlayFailed : function(placementId, errorInfo, callbackInfo) {
            ATJSSDK.printLog("NX:onRewardedVideoAdPlayFailed(" + placementId + ", " + errorInfo + ", " + callbackInfo + ")");
        },
        //广告被关闭
        onRewardedVideoAdClosed : function(placementId, callbackInfo) {
            ATJSSDK.printLog("NX:onRewardedVideoAdClosed(" + placementId + ", " + callbackInfo + ")");

            if(RewardVideoComp.RewardVideoCallBack.onRewardedVideoAdClosed)
            {
                RewardVideoComp.RewardVideoCallBack.onRewardedVideoAdClosed(placementId, callbackInfo);
            }
        },
        //广告被点击
        onRewardedVideoAdPlayClicked : function(placementId, callbackInfo) {
            ATJSSDK.printLog("NX:onRewardedVideoAdPlayClicked(" + placementId + ", " + callbackInfo + ")");
        },
        //激励成功，开发者可在此回调中下发奖励，一般先于onRewardedVideoAdClosed回调，服务器激励则不一定
        onReward : function(placementId, callbackInfo) {
            ATJSSDK.printLog("NX:onReward(" + placementId + ", " + callbackInfo + ")");

            if(RewardVideoComp.RewardVideoCallBack.onReward)
            {
                RewardVideoComp.RewardVideoCallBack.onReward(placementId, callbackInfo);
            }
        }
    }
}
