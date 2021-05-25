class Game {
    constructor(){
      this.level1 = createElement("h2");
      this.description = createElement("h3");
      this.controls = createElement("h3");
      this.play = createButton("play");
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      });
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();

          image(introImage, 0, 0, displayWidth, displayHeight);
          hell_sound.loop();
        }
    }

    async choose() {

      if(gameState === 1) {
        choose = new Choose();
        var chosenCountRef = await database.ref('choosenCount').once("value");
        if(chosenCountRef.exists()) {
          chosenCount = chosenCountRef.val();
          player.getChosenCount();
        }
      }
      form.waitMessage.hide();
      form.title.hide();

      

     

      choose.display();

      drawSprite(character1);
      drawSprite(character2);
      drawSprite(character3);

      choose.proceed_button.hide();
      choose.waitMessage.hide();

      if(mousePressedOver(character1)) {
         choose.proceed_button.show();
      }

      if(mousePressedOver(character2)) {
        choose.proceed_button.show();
     }

     if(mousePressedOver(character3)) {
      choose.proceed_button.show();
     }

     
  }

    startLevel1() {

      image(level1_bg, 0, 0, displayWidth, displayHeight);
      this.level1.html("LEVEL 1");
      this.level1.position(displayWidth/2 - 200, 150);
      
      this.description.html("You and 2 others are stuck in hell. You have to be the first one to reach heaven to win");
      this.description.position(displayWidth/2 - 400, 300);

      this.controls.html("Use arrow keys to move and space to jump");
      this.controls.position(displayWidth/2 - 200, 350);

      this.play.position(displayWidth/2 - 100, 400);
      this.play.style('width', '75px');
      this.play.style('height', '50px');
      this.play.style('background', 'yellow');
      this.play.style('border-radius:20px');


      this.level1.show();
      this.description.show();
      this.controls.show();
      this.play.show();

      this.play.mousePressed(()=>{
          this.level1.hide();
          this.description.hide();
          this.controls.hide();
          this.play.hide();

          player.getLevel1Count();
          level1Count++;
          player.updateLevel1Count(level1Count);

      })
    }

    

    
}