

var db
var player, form, game, playerCount, gameState = 0

function setup(){
    createCanvas(500,500);
    //creating database
    db = firebase.database()
    game = new Game()
  game.getState()
  game.start()

}

function draw(){
    background("white");
 
    
}




