class Game {
    constructor(){

    }


    getState(){
        var gamestateRef = database.ref("gameState");
        gamestateRef.on("value",function(data){
            gameState=data.val();
        })
    }

    updateState(state){
        database.ref("/").update({
            gameState: state,
        })
    }

    startGame(){
        if(gameState===0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
    }
}