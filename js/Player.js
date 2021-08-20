class Player {
  //this => player
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({ // "/" the root in the database
      playerCount: count
    });
  }

  //player.update()
  update(){
    var playerIndex = "players/player" + this.index; //players/player1, players/player2....player4
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      rank: this.rank
    });
  }

  //static functions are functions that can be called by the Class - "P"layer in this case
  //Player.getPlayerInfo()
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getCarsAtEnd(){
    database.ref('CarsAtEnd').on("value",(data)=>{
     this.rank = data.val();
    })
  }

  static updateCarsAtEnd(rank){
    database.ref('/').update({
      CarsAtEnd: rank
    })
  }
}
