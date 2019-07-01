var loadState = {
    preload: function(){
        //Display the progress bar
        var progressBar = game.add.sprite(0,0,'progressBar');
        progressBar.alignIn(game.world.bounds, Phaser.CENTER);
        game.load.setPreloadSprite(progressBar);

        game.load.image('flappy','./assets/sprites/flappy.png');
        game.load.image('pipe-bottom','./assets/sprites/pipe-bottom.png');
        game.load.image('pipe-top','./assets/sprites/pipe-top.png');
        game.load.image('hole','./assets/sprites/hole.png');
        game.load.image('ground','./assets/sprites/base.png');
        game.load.image('background','./assets/sprites/background.png');
        game.load.image('gameover','./assets/sprites/gameover.png');
        game.load.image('menu','./assets/sprites/menu.png');
        game.load.audio('jump_sound', 'assets/sounds/jump.wav');
    },
    create : function(){
        game.state.start('menu');
    }

};