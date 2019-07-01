// Initialize Phaser, and create a 400px by 500px game
var game = new Phaser.Game(400, 500);

// Add all states of game.
game.state.add('boot', bootState); 
game.state.add('load', loadState); 
game.state.add('menu', menuState); 
game.state.add('play', playState); 
game.state.add('gameOver', gameOverState); 

// Start the state to actually start the game
game.state.start('boot');