class Game {
    constructor(){
      
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
          form = new Form()
          player = new Player()
          form.display();
        if(gameState === 0){
     
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          image(introImage, 0, 0, displayWidth, displayHeight);
          hell_sound.loop();
         
        }
  
        else if(gameState === 1){
          var playerCountRef = await database.ref('level1Count').once("value");
          if(playerCountRef.exists()){
            level1Count = playerCountRef.val();
            player.getLevel1Count();
          }
  
        form.waitMessage.hide();
        form.title.hide();
  
  
        form.welcome.html("Hello " + player.name + " !")
        form.welcome.position(displayWidth/2 - 225, 80);
        form.welcome.show();
  
        image(level1_bg, 0, 0, displayWidth, displayHeight);
        form.level1.html("LEVEL 1");
        form.level1.position(displayWidth/2 - 200, 150);
        
        form.description.html("You and 2 others are stuck in hell. You have to be the first one to reach heaven to win");
        form.description.position(displayWidth/2 - 400, 300);
  
        form.controls.html("Use arrow keys to move and space to jump");
        form.controls.position(displayWidth/2 - 200, 350);
  
        form.play.position(displayWidth/2 - 100, 400);
        form.play.style('width', '75px');
        form.play.style('height', '50px');
        form.play.style('background', 'yellow');
        form.play.style('border-radius:20px');
  
        form.level1.show();
        form.description.show();
        form.controls.show();
        form.play.show();
  
        form.play.mousePressed(()=>{
            form.level1.hide();
            form.description.hide();
            form.controls.hide();
            form.play.hide();
            form.greeting.hide();
  
            player.getLevel1Count();
            level1Count++;
            player.updateLevel1Count(level1Count);
  
        })

      }  
    }

    
  }
