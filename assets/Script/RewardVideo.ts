import sys = cc.sys;
import TopOnAdConfig from "./TopOnAdConfig";
const {ccclass, property} = cc._decorator;

//JS导入AnyThink SDK
// @ts-ignore
let ATJSSDK = window.ATJSSDK
// @ts-ignore
let ATRewardedVideoJSSDK = window.ATRewardedVideoJSSDK

@ccclass()
export class RewardVideo extends  cc.Component {

    start()
    {
      //  this.InitialAd();
    }

    placementID()
    {
        if (cc.sys.os === cc.sys.OS_IOS) {
            return TopOnAdConfig.PlacementIDIos;
        } else if (cc.sys.os === cc.sys.OS_ANDROID) {
            return TopOnAdConfig.PlacementIDAndroid;
        }
    }

    InitialAd()
    {
//打开SDK的Debug log，强烈建议在测试阶段打开，方便排查问题
     //   ATJSSDK.setLogDebug(true);

        // @ts-ignore
        ATJSSDK.setLogDebug(true)

        var customMap = {
            "appCustomKey1": "appCustomValue1",
            "appCustomKey2" : "appCustomValue2"
        };
//设置自定义的Map信息，可匹配后台配置的广告商顺序的列表（App纬度）（可选配置）
        ATJSSDK.initCustomMap(customMap);

        var customPlacementId = this.placementID();
        var placementCustomMap = {
            "placementCustomKey1": "placementCustomValue1",
            "placementCustomKey2" : "placementCustomValue2"
        };
//设置自定义的Map信息，可匹配后台配置的广告商顺序的列表（Placement纬度）（可选配置）
        ATJSSDK.setPlacementCustomMap(customPlacementId, placementCustomMap);

// 设置GDPR的等级：
// ATJSSDK.PERSONALIZED（允许上报个人信息）
// ATJSSDK.NONPERSONALIZED（不允许上报个人信息）
// ATJSSDK.setGDPRLevel(ATJSSDK.PERSONALIZED);

// 获取GDPR等级
        var GDPRLevel = ATJSSDK.getGDPRLevel();

// 初始化SDK
        ATJSSDK.initSDK(TopOnAdConfig.AppID, TopOnAdConfig.AppKey);  //appID, appKey

// 针对欧盟地区初始化时做的处理，按需求打开，不在欧盟地区发布的不用使用。
        ATJSSDK.getUserLocation(function (userLocation) {
            //如果处于欧盟地区且等级是UNKNOW时，就执行授权弹窗
            if (userLocation === ATJSSDK.kATUserLocationInEU) {
                if(ATJSSDK.getGDPRLevel() === ATJSSDK.UNKNOWN) {
                    ATJSSDK.showGDPRAuth();
                }
            }
        });
    }

    LoadRewardAd()
    {
        var setting = {};
//如果需要通过开发者的服务器进行奖励的下发（部分广告平台支持服务器激励），则需要传递下面两个key
//ATRewardedVideoJSSDK.userIdKey必传，用于标识每个用户;ATRewardedVideoJSSDK.userDataKey为可选参数，传入后将透传到开发者的服务器
        setting[ATRewardedVideoJSSDK.userIdKey] = "test_user_id";
        setting[ATRewardedVideoJSSDK.userDataKey] = "test_user_data";
        ATRewardedVideoJSSDK.loadRewardedVideo(this.placementID(), setting);
        ATRewardedVideoJSSDK.setAdListener(this.RewardedVideoListener);
    }

    HasAdReady()
    {
        let b = ATRewardedVideoJSSDK.hasAdReady(this.placementID());
        if(b)
        {
            cc.log('reward ad is ready');
        }
        else
        {
            cc.log('reward ad not ready')
        }
    }

    CheckAdStatus()
    {
        let status = ATRewardedVideoJSSDK.checkAdStatus(this.placementID());
        cc.log("reward ad status:" + status);
    }

    ShowAd()
    {
        cc.log("ShowAd Start");
        ATRewardedVideoJSSDK.showAd(this.placementID());
    }

     RewardedVideoListener = {
        //广告加载成功
        onRewardedVideoAdLoaded:function(placementId) {
            ATJSSDK.printLog("AnyThinkRewardedVideoDemo::onRewardedVideoAdLoaded(" + placementId + ")");
        },
        //广告加载失败
        onRewardedVideoAdFailed : function(placementId, errorInfo) {
            ATJSSDK.printLog("AnyThinkRewardedVideoDemo::onRewardedVideoAdFailed(" + placementId + ", " + errorInfo + ")");
        },
        //广告开始播放
        onRewardedVideoAdPlayStart : function(placementId, callbackInfo) {
            ATJSSDK.printLog("AnyThinkRewardedVideoDemo::onRewardedVideoAdPlayStart(" + placementId + ", " + callbackInfo + ")");
        },
        //广告播放结束
        onRewardedVideoAdPlayEnd : function(placementId, callbackInfo) {
            ATJSSDK.printLog("AnyThinkRewardedVideoDemo::onRewardedVideoAdPlayEnd(" + placementId + ", " + callbackInfo + ")");
        },
        //广告播放失败
        onRewardedVideoAdPlayFailed : function(placementId, errorInfo, callbackInfo) {
            ATJSSDK.printLog("AnyThinkRewardedVideoDemo::onRewardedVideoAdPlayFailed(" + placementId + ", " + errorInfo + ", " + callbackInfo + ")");
        },
        //广告被关闭
        onRewardedVideoAdClosed : function(placementId, callbackInfo) {
            ATJSSDK.printLog("AnyThinkRewardedVideoDemo::onRewardedVideoAdClosed(" + placementId + ", " + callbackInfo + ")");
        },
        //广告被点击
        onRewardedVideoAdPlayClicked : function(placementId, callbackInfo) {
            ATJSSDK.printLog("AnyThinkRewardedVideoDemo::onRewardedVideoAdPlayClicked(" + placementId + ", " + callbackInfo + ")");
        },
        //激励成功，开发者可在此回调中下发奖励，一般先于onRewardedVideoAdClosed回调，服务器激励则不一定
        onReward : function(placementId, callbackInfo) {
            ATJSSDK.printLog("AnyThinkRewardedVideoDemo::onReward(" + placementId + ", " + callbackInfo + ")");
        }
    }
}
