let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let newCardEl = document.getElementById("newCard-el")
let cards = []
let sum = 0
let playerEl = document.getElementById("player-el")

let player = {
    name: "Per",
    chips: 145
}
playerEl.textContent = player.name + ": $" + player.chips

console.log(cards)
function getRadomCard(){
    let randommCard = Math.floor(Math.random() * 13 )+1
    if (randommCard >10){
        return 10}
        else if (randommCard ===1){
            return 11
        }
        else{
    return randommCard
        }
}
//console.log(randomCard + "rand")

function startGame(){
    isAlive = true
    let firstCard = getRadomCard()
    let secondCard = getRadomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    //cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1] + cards[3]
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    
        sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    //console.log(message)  
    messageEl.textContent = message  
}
messageEl.textContent = " Do you want to draw a new card?"


function newCard(){
    if (isAlive === true && hasBlackJack === false)
{
     let card = getRadomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}
   
}
 