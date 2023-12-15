import ToponBridge from "../../Script/ToponBridge/ToponBridge";
import director = cc.director;

const {ccclass, property} = cc._decorator;

@ccclass
export default class InterstitialAd extends cc.Component {
    LoadAd()
    {
        ToponBridge.instance.InterstitialComp.LoadAd();
    }

    HasAdReady() : boolean
    {
        return ToponBridge.instance.InterstitialComp.HasAdReady();
    }

    CheckAdStatus()
    {
        return ToponBridge.instance.InterstitialComp.CheckAdStatus();
    }

    ShowAd()
    {
        ToponBridge.instance.InterstitialComp.ShowAd();
    }

    onBackClick()
    {
        director.loadScene('Startup');
    }
}
