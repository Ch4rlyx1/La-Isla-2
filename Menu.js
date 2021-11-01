class Menu {

    constructor() {
      this.input = createInput("Name");
      this.input2 = createInput("Numero")
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.titleMenu = createElement('h2');
      this.titlepersonajes = createElement('h3');
      this.titleJuego = createElement('h3');
      this.titleMapas = createElement('h3');
      this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.input2.hide();
      this.title.hide();
      this.titleMenu.hide();
      this.titlepersonajes.hide();
      this.titleJuego.hide();
      this.titleMapas.hide();

    }
  
    display(){
      this.title.html("La Isla");
      this.title.position(displayWidth/2 - 50, 0);
      this.title.position(displayWidth/2 - 20, 50);
      this.title.position(displayWidth/2 - 70, 90);
      this.title.position(displayWidth/2 - 90, 120);
      this.title.position(displayWidth/2 - 120, 140);
      //agregar lista de mapas
      //agregar lista de modos de juego
       //agregar lista de seleccion 
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.input2.position( displayWidth/2 - 80 , displayHeight/2 - 100);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.input2.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
  
    }
  }
  