import director = cc.director;
import ToponBridge from "../../Script/ToponBridge/ToponBridge";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Startup extends cc.Component {

    OnInitialToponClick()
    {
        ToponBridge.instance.InitialToponAd();
    }

    OnRewardVideoClick()
    {
        director.loadScene('RewardVideoScene');
    }

    OnInterstitialClick()
    {
        director.loadScene('InterstitialScene');
    }

    OnBannerClick()
    {
        director.loadScene('BannerScene');
    }

    OnNativeClick()
    {
        director.loadScene('NativeScene');
    }

}
