import ToponBridge from "../../Script/ToponBridge/ToponBridge";
import director = cc.director;

const {ccclass, property} = cc._decorator;

@ccclass
export default class BannerAd extends cc.Component {

    LoadAd()
    {
        ToponBridge.instance.BannerComp.LoadAd();
    }

    HasAdReady() : boolean
    {
        return ToponBridge.instance.BannerComp.HasAdReady();
    }

    CheckAdStatus()
    {
        return ToponBridge.instance.BannerComp.CheckAdStatus();
    }

    ShowAd()
    {
        ToponBridge.instance.BannerComp.ShowAd();
    }

    HideAd()
    {
        return ToponBridge.instance.BannerComp.HideAd();
    }

    onBackClick()
    {
        director.loadScene('Startup');
    }

}
