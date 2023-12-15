// reward ad test

import director = cc.director;
import ToponBridge from "../../Script/ToponBridge/ToponBridge";
const {ccclass, property} = cc._decorator;

@ccclass()
export class RewardVideo extends  cc.Component {

    LoadRewardAd()
    {
        ToponBridge.instance.RewardVideo.LoadAd();
        ToponBridge.instance.RewardVideo.SetCallback((placementId, callbackInfo)=>{
            cc.log("NX: adClosed");
        }, (placementId, callbackInfo)=>{
            cc.log("NX: adReward");
        })
    }

    HasAdReady() : boolean
    {
       return ToponBridge.instance.RewardVideo.HasAdReady();
    }

    CheckAdStatus()
    {
        return ToponBridge.instance.RewardVideo.CheckAdStatus();
    }

    ShowAd()
    {
        ToponBridge.instance.RewardVideo.ShowAd();
    }

    onBackClick()
    {
        director.loadScene('Startup');
    }
}
