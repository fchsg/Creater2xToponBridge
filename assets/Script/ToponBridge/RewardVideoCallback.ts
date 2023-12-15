export default class RewardVideoCallback {
    onRewardedVideoAdLoaded : Function = null;
    onRewardedVideoAdFailed : Function = null;
    onRewardedVideoAdPlayStart : Function = null;
    onRewardedVideoAdPlayEnd : Function = null;
    onRewardedVideoAdPlayFailed : Function = null;
    onRewardedVideoAdPlayClicked : Function = null;
    onRewardedVideoAdClosed : Function = null;
    onReward : Function = null;  //激励成功，开发者可在此回调中下发奖励，一般先于onRewardedVideoAdClosed回调，服务器激励则不一定
}
