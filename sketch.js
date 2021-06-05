var database; 
var playerCount = 0;
var gameState = 0;
var form, player;

var level1Count = 0;

var introImage, level1_bg;
var button_sound, hell_sound;



function preload() {
    introImage = loadImage("images/intro.jpg");
    level1_bg = loadImage("images/1670.jpg");


    button_sound = loadSound("sounds/button_click.wav");
    hell_sound = loadSound("sounds/hell_sound.wav");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    player = new Player();
    
    
}

function draw() {
    if (playerCount === 3) {
        game.update(1)
    }
}
