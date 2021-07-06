class Game{

constructor(){

}

getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
        gameState = data.val();
    })
}

update(state) {
    database.ref('/').update({
        gameState: state
    });
}

async start() {
    if(gameState === 0) {
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if (playerCountRef.exists()) {
            playerCount = playerCount.val();
            player.getCount();
        }
        form = new Form();
        form.display();
    }

}

    play(){

    form.hide();
    Player.getPlayerInfo();

    player1 = createSprite(1000,600);
    player1.addImage(player1Image);

    player2 = createSprite(50,600);
    player2.addImage(player2Image);
    players = [player1,player2];

    tball = createSprite(600,300,50,50);
    tball.addImage(tballImage);
    tball.velocityX = 5;
    tball.velocityY = 6;

    for(var plr in allPlayers){

        index = index+1;
        x = 500-allPlayers[plr].distance;
        y=500;

        players[index-1].x = x;
        players[index -1].y = y;

        if(index === player.index){
            textSize("15")
            fill("blue");
            text(allPlayers[plr].name , x-25, y+25);
        }

    }

    
    if(keyDown(LEFT_ARROW)) {
        players.y = players.y-5;
    }

    if(keyDown(RIGHT_ARROW)) {
        players.y = players.y-5;
    }

    




    
    }
}