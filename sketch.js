var database; 
var playerCount = 0;
var gameState = 0;
var form, player, choose;
var chosenCount = 0;
var level1Count = 0;

var introImage, level1_bg;
var button_sound, hell_sound;

var character1, character2, character3;

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

    character1 = createSprite(200, displayHeight - 500, 50, 50);
    character1.shapeColor = "red";

    character2 = createSprite(700, displayHeight - 500, 50, 50);
    character2.shapeColor = "red";

    character3 = createSprite(1200, displayHeight - 500, 50, 50);
    character3.shapeColor = "red";

}

function draw() {
    if(playerCount === 3) {
        game.update(1);
    }
    if(gameState === 1) {
        game.choose();
    }
    if(chosenCount === 3) {
        game.update(2);
    }
    if(gameState === 2) {
        game.startLevel1();
    }
    if(gameState !== 2) {
        game.level1.hide();
        game.description.hide();
        game.controls.hide();
        game.play.hide();
    }

}

