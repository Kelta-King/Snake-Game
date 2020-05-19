var snake, apple, squareSize, score, speed,
    updateDelay, direction, new_direction,
    addNew, cursors, scoreTextValue, speedTextValue, 
    textStyle_Key, textStyle_Value;
	
var Game = {
	
	preload: function() {
		game.load.image('snake', './assets/images/snake.png');
		game.load.image('apple', './assets/images/apple.png');
	},
	
	create: function() {
		
		snake = [];
		apple = {};
		squareSize = 15;
		score = 0;
		speed = 0;
		updateDelay = 0;
		direction = 'right';
		new_direction = null;
		addNew = false;
		
		cursors = game.input.keyboard.createCursorKeys();
		
		game.stage.backgroundColor = "#ffc901";
		
		for(let i=0;i<10;i++){
			snake[i] = game.add.sprite(150+i*squareSize, 150,'snake');
		}
		
		this.generateApple();
		
		textStyle_Key = { font: "bold 14px sans-serif", fill: "#106d13", align: "center" };
        textStyle_Value = { font: "bold 18px sans-serif", fill: "#106d13", align: "center" };

		// Score.
        game.add.text(30, 20, "SCORE", textStyle_Key);
        scoreTextValue = game.add.text(90, 18, score.toString(), textStyle_Value);
        // Speed.
        game.add.text(500, 20, "SPEED", textStyle_Key);
        speedTextValue = game.add.text(558, 18, speed.toString(), textStyle_Value);
		
	},
	
	update: function() {
		
		if((cursors.right.isDown && direction != 'left')){
			new_direction = 'right';
		}
