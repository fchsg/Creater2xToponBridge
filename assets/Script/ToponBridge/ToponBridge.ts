import TopOnAdConfig from "./TopOnAdConfig";
import RewardVideoComp from "./RewardVideoComp";
import InterstitialComp from "./InterstitialComp";
import BannerComp from "./BannerComp";
import NativeComp from "./NativeComp";

//JS导入AnyThink SDK
// @ts-ignore
let ATJSSDK = window.ATJSSDK

const {ccclass, property} = cc._decorator;

@ccclass
export default class ToponBridge{

    public static _instance : ToponBridge = null

    public RewardVideo : RewardVideoComp = null;
    public InterstitialComp : InterstitialComp = null;
    public BannerComp : BannerComp = null;
    public NativeComp : NativeComp = null;

    public static get instance() {
        if (null == this._instance) {
            this._instance = new ToponBridge();
        }
        return this._instance
    }

    constructor()
    {
        this.RewardVideo = new RewardVideoComp();
        this.InterstitialComp = new InterstitialComp();
        this.BannerComp = new BannerComp();
        this.NativeComp = new NativeComp();
    }

    InitialToponAd()
    {
        if (cc.sys.os === cc.sys.OS_IOS || cc.sys.os === cc.sys.OS_ANDROID)
        {
            if(TopOnAdConfig.IsDebug)
            {
                //打开SDK的Debug log，强烈建议在测试阶段打开，方便排查问题
                // @ts-ignore
                ATJSSDK.setLogDebug(true)
            }

            var customMap = {
                "appCustomKey1": "appCustomValue1",
                "appCustomKey2" : "appCustomValue2"
            };
//设置自定义的Map信息，可匹配后台配置的广告商顺序的列表（App纬度）（可选配置）
            ATJSSDK.initCustomMap(customMap);

            var customPlacementId = this.PlacementID();
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
        else
        {
            cc.log("NX:Only Support Android or iOS");
        }
    }

    PlacementID()
    {
        if (cc.sys.os === cc.sys.OS_IOS) {
            return TopOnAdConfig.PlacementIDIos;
        } else if (cc.sys.os === cc.sys.OS_ANDROID) {
            return TopOnAdConfig.PlacementIDAndroid;
        }
    }

}
