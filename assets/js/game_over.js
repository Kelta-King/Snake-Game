var Game_Over = {
	
	preload: function() {
		game.load.image('game_over', './assets/images/gameover.png');
	},
	
	create: function() {
		this.add.button(0, 0, 'game_over', this.startGame, this);
		
		game.add.text(235, 350, "LAST SCORE", { font: "bold 16px sans-serif", fill: "#000", align: "center"});
        	game.add.text(350, 348, score.toString(), { font: "bold 20px sans-serif", fill: "#000", align: "center" });
		
	},
	
	startGame: function() {
		this.state.start('Game');
	}
	
};
