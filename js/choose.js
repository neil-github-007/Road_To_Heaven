class Choose{
    constructor() {
        this.proceed_button = createButton("Play");
        this.waitMessage = createElement("h3");
        this.greeting = createElement('h2');
        this.welcome = createElement("h2");
    }   

    display() {

    
        this.greeting.html("Hello " + form.input.value() + " !");
        this.greeting.position(displayWidth/2 - 250, 0);

        this.welcome.html("Welcome to Hell!");
        this.welcome.position(displayWidth/2 - 350, displayHeight/2 - 350);

        this.waitMessage.html("Wait for other payers to choose their characters!");
        this.waitMessage.position(displayWidth/2- 300, 500);

        this.proceed_button.position(displayWidth/2, displayHeight/2 + 100);
        this.proceed_button.style('width', '75px');
        this.proceed_button.style('height', '50px');
        this.proceed_button.style('background', 'yellow');
        this.proceed_button.style('border-radius:20px');
        
        this.proceed_button.mousePressed(()=>{
            this.welcome.hide();
            this.proceed_button.hide();
            this.waitMessage.show();
            this.greeting.hide();
            image(level1_bg, 0, 0, displayWidth, displayHeight);
            
           
            button_sound.play();
      

            chosenCount+=1;
            //player.update();
            player.updateChosenCount(chosenCount);
          })

       
    }
}    