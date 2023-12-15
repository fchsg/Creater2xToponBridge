import ToponBridge from "../../Script/ToponBridge/ToponBridge";
import director = cc.director;

const {ccclass, property} = cc._decorator;

@ccclass
export default class NativeAd extends cc.Component {

    LoadAd()
    {
        ToponBridge.instance.NativeComp.LoadAd();
    }

    HasAdReady() : boolean
    {
        return ToponBridge.instance.NativeComp.HasAdReady();
    }

    CheckAdStatus()
    {
        return ToponBridge.instance.NativeComp.CheckAdStatus();
    }

    ShowAd()
    {
        ToponBridge.instance.NativeComp.ShowAd();
    }

    RemoveAd()
    {
        ToponBridge.instance.NativeComp.RemoveAd();
    }

    onBackClick()
    {
        director.loadScene('Startup');
    }
}
