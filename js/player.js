class Player {
    constructor(){

    }
    getCount(){
        var playerRef = database.ref("playerCount");
        playerRef.on("value",function(data){
            playerCount=data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount:count,
        })
    }

    update(name){
        var playerIndex="player"+playerCount;
        database.ref(playerIndex).set({
            name:name
        })

    }
}