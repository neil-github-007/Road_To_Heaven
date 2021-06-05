class Form {

    constructor() {
      this.input = createInput('').attribute('placeholder', 'Enter Username');
      this.button = createButton('Proceed');
      
      this.title = createElement('h1');
      this.waitMessage = createElement('h3');

      this.level1 = createElement("h2");
      this.description = createElement("h3");
      this.controls = createElement("h3");
      this.play = createButton("play");

      this.welcome = createElement("h2");

      this.level1.hide();
      this.description.hide();
      this.controls.hide();
      this.play.hide();
      this.welcome.hide();
    }
  
    display(){
      this.title.html("Road to Heaven");
      this.title.position(displayWidth/2 - 300, 0);
      this.title.style("text:align: center");

      this.input.style('width', '300px');
      this.input.style('height', '50px');
      this.input.style('background', 'yellow');
      this.input.style('border-radius:20px');
      this.input.position(displayWidth/2 - 200 , displayHeight/2 - 80);
      this.input.style('font-size', "20px");

      this.button.position(displayWidth/2 + 150, displayHeight/2 - 75);
      this.button.style('width', '75px');
      this.button.style('height', '50px');
      this.button.style('background', 'yellow');
      this.button.style('border-radius:20px');
      this.button.style(BOLD);

      this.button.mousePressed(()=>{
        this.button.hide();
        this.input.hide();

        player.name = this.input.value();
        player.getCount();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);

        this.waitMessage.html("Waiting for other players to join");
        this.waitMessage.position(displayWidth/2 - 200, displayHeight/2- 100);

        button_sound.play();
      });
      
    }

    
      
  }
