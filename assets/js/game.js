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
		else if((cursors.left.isDown && direction != 'right')){
			new_direction = 'left';
		}
		else if((cursors.up.isDown && direction != 'down')){
			new_direction = 'up';
		}
		else if((cursors.down.isDown && direction != 'up')){
			new_direction = 'down';
		}
		
		speed = Math.min(12,Math.floor(score/5));
		speedTextValue = ""+speed;
		
		updateDelay++;
		
		if((updateDelay%(10 - speed)) == 0){
			
			let firstCell = snake[snake.length - 1];
			let lastCell = snake.shift();
			oldLastCellX = lastCell.x;
			oldLastCellY = lastCell.y;
			
			if(new_direction){
				direction = new_direction;
				new_direction = null;
			}
			
			if(direction == 'right'){
				lastCell.x = firstCell.x+squareSize;
				lastCell.y = firstCell.y;
			}
			else if(direction == 'left'){
				lastCell.x = firstCell.x-squareSize;
				lastCell.y = firstCell.y;
			}
			else if(direction == 'up'){
				lastCell.x = firstCell.x;
				lastCell.y = firstCell.y-squareSize;
			}
			else if(direction == 'down'){
				lastCell.x = firstCell.x;
				lastCell.y = firstCell.y+squareSize;
			}
			
			snake.push(lastCell);
			firstCell = lastCell;
			
