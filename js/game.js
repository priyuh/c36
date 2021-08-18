class Game {
    constructor(){
    
    }
    getState(){
        var gameStateRef = database.ref("game state")
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })

    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            form=new Form()
            form.display()
        }
    }
}