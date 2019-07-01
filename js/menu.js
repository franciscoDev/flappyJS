var menuState = {

    create : function(){
       
        this.background = game.add.sprite(0,0,'background');
        this.background.scale.setTo(1.5,1);
        var menu = game.add.image( 0,0,'menu');
        menu.alignIn(game.world.bounds, Phaser.CENTER);
        //listen event to mouse/tap click. 
        game.input.onTap.add(this.start, this);
    },

    start : function (){
        game.state.start('play');
    }


};