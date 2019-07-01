var playState = {

    create : function(){
        //set-up audio sprite for jump.
        this.jump_sound = game.add.audio('jump_sound');
        this.jump_sound.addMarker('jump');

        this.background = game.add.sprite(0,0,'background');
        this.background.scale.setTo(1.5,1);
       //score for flappy.
        this.score = 0;
        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

        //  The Text is positioned at 0,0
        this.textScore = game.add.text(0, 0,  this.score , style);
        this.textScore.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
 
        //show player
        this.bird = game.add.sprite(100,245,'flappy');
        //add physics to the bird
        game.physics.arcade.enable(this.bird);
        //add gravity to the bird
        this.bird.body.gravity.y = 1000;
        this.bird.body.collideWorldBounds = true;
       
        //crreate empty group for pipes.
         this.pipes = game.add.group();
        //executes each 3s the function 'addPippes'.
         this.timer = game.time.events.loop(3000, this.addPipes, this); 
        //holes group for flappy score. 
        this.holes = game.add.group();
        //ground
        this.ground = game.add.sprite(0,460,'ground');
        this.ground.scale.setTo(1.5,1);
        //add physics to the ground
        game.physics.arcade.enable(this.ground);
        this.ground.body.enable = true;
        this.ground.body.immovable = true;
        // click/tap event.
        game.input.onTap.add(this.jump, this);
    },
    update : function (){
         // This function is called 60 times per second    
        //collisions between 'flappy/pipes','flappy/ground',flappy/holes'.
        game.physics.arcade.collide(this.bird, this.pipes,this.restarGame, null, this);
        game.physics.arcade.collide(this.bird, this.ground,this.restarGame, null, this);
        game.physics.arcade.overlap(this.bird,  this.holes,this.incrementScore, null, this);
    },

    jump : function(){
        this.bird.body.velocity.y = -350;
        this.bird.body.velocity.x = 4;  
        this.jump_sound.play('jump');    
    },
    restarGame : function(){
       game.time.events.remove(this.timer);
       //show game over screen.
       game.state.start('gameOver');
    },

    addPipe : function ( x , y , isTop ){
        var pipePosition = (isTop)? 'pipe-top':'pipe-bottom';
        var pipe = game.add.sprite(x,y,pipePosition);
        game.physics.arcade.enable(pipe);
        pipe.body.enable = true;
        pipe.body.velocity.x = -150;
        pipe.checkWorldBounds = true ;
        pipe.outOfBoundsKill = true ; 
        pipe.body.immovable = true;
        this.pipes.add(pipe);
         
    },
    addHole : function( x , y ){
        var hole = game.add.sprite(x,y,'hole');
        game.physics.arcade.enable(hole);
        hole.body.velocity.x =-150;
        hole.body.setSize(10, 100,75);   
        hole.checkWorldBounds = true ;
        hole.outOfBoundsKill = true ;  
        this.holes.add(hole);    
    },
    addPipes : function(){
        var PIPE_IMAGE_HEIGHT = 320;
        var INITIAL_POSITION_X = 400;
        
        var topPipePosition = this.getRndInteger(-200,0);
        var holePosition_y =   PIPE_IMAGE_HEIGHT + topPipePosition  ;
        var bottomPipePosition = holePosition_y + 110;
        //top pipe
        this.addPipe(INITIAL_POSITION_X , topPipePosition ,true);
        //hole
        this.addHole(INITIAL_POSITION_X, holePosition_y); 
        //bottom pipe
        this.addPipe(INITIAL_POSITION_X, bottomPipePosition,false);   
    },
    incrementScore : function ( obj1, obj2){
        obj2.kill();
        this.score++;
        this.textScore.setText(this.score);
    },
    getRndInteger: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
};