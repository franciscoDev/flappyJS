var bootState = {
    init : function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload : function(){
        game.load.image('progressBar','./assets/sprites/progress.gif');
    },
    create : function (){
        //set physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start('load');
    },

};