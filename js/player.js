class Player {
    constructor(){
      this.index = null;
      
      this.name = null;
      
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }

    getChosenCount() {
      var playerCountRef = database.ref('choosenCount');
      playerCountRef.on("value",(data)=>{
        chosenCount = data.val();
      })
    }

    updateChosenCount(count) {
      database.ref('/').update({
        choosenCount:count
      });
    }

    getLevel1Count() {
      var playerCountRef = database.ref('level1Count');
      playerCountRef.on("value",(data)=>{
        level1Count = data.val();
      })
    }

    updateLevel1Count(count) {
      database.ref('/').update({
        level1Count:count
      });
    }

  }