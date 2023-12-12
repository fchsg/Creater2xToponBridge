import director = cc.director;

const {ccclass, property} = cc._decorator;

@ccclass
export default class Startup extends cc.Component {

    OnRewardVideoClick()
    {
        director.loadScene('RewardVideoScene');
    }

}
