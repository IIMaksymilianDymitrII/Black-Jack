
let colorArr = ["♠️", "♥️", "♦️", "♣️"];

let figureArr = ["J", "Q", "K","A"];
for (let k = 9; k>1; k--) {figureArr.unshift(k);}


// sets of cards 
let mainDeck = [{figure:undefined, color:undefined, value:undefined}];
let playerDeck = [{figure:undefined, color:undefined, value:undefined}];
let otherDeck = [{figure:undefined, color:undefined, value:undefined}];


// create cards 
let index = 0;
colorArr.forEach(color => {
    figureArr.forEach(figure => {
        
        mainDeck[index].figure.push(figure);

        if (figure === "J" || figure === "Q" || figure === "K"){mainDeck.push = {figure: figure, color:color, value: 10}};
        if (figure === "A"){
            // A = 1  or a == 11
            mainDeck.push = {figure: figure, color:color, value: 1}
        }
        // have to set value for "value"
        else {mainDeck.push =  {figure: figure, color: color, value: value }}
    })
    ++index;
});

// give cards to players or to the other deck

const playerHand = document.querySelector("playerHand");

const Hit(player) => {
    let randomCardIndex = Math.random();
    
    if (player){
        playerdeck.push(mainDeck[randomCardIndex])
    };
    else {otherDeck.push(mainDeck[randomCardIndex])};
    
    const card = document.createElement("div")
    playerHand.appendChild(card);

    mainDeck.splice(index, randomCardIndex)
}

const Stand(player) => {
    player = false;
    Hit(player);
}

const HitOrStand() => {
    // Would you like to Hit or Stand

    // if (choice == hit)
    // hit() 
    // else stand()
}

const GameStatus(deck) =>{
    let cardValue = 0;

    deck.forEach(card =>
        cardValue += card
    )    
    cardValue = eval(cardValue)


    if (cardValue <= 21){
        // create a message in the middle of the screen saying YOU WIN
        // Would you like to play again
    }
    else {
        // Create a message in the middle of the screen saying YOU LOSE
        // Would you like to play again
    }

}

const StartGame(player) =>{
    for (const p = 0; p >= 2 ; p++){
        Hit(player);
        Hit(!player);   
    }
}


const playerTurn = true;

const Game() => {
    StartGame(playerTurn);
    
    // shows the other deck 
    // if stand the other cards hits between 0 to 2 times at random 
        
    GameStatus(playerdeck)
    GameStatus(otherDeck)
}

