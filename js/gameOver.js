var gameOverState = {

    create : function(){
       
        this.background = game.add.sprite(0,0,'background');
        this.background.scale.setTo(1.5,1);
        var gameover = game.add.image( 0,0,'gameover');
        gameover.alignIn(game.world.bounds, Phaser.CENTER);
        
        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        //  The Text is positioned at 0,0
        this.textScore = game.add.text(0, 0,  playState.score , style);
        this.textScore.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

        //listen event to mouse/tap click. 
        game.input.onTap.add(this.showMenu, this);
    },

    showMenu : function (){
        game.state.start('menu');
    }

};