// Code your solutions in this file

let cards = (["Guadalupe", "Ollie", "Aki"]);
let userEvent = "surprise";

function writeCards(cards, userEvent) {
    let newCards = cards.slice();
    let newArray = [];
    for (let i = 0; i < newCards.length; i++) {
        newArray.push(`Thank you, ${newCards[i]}, for the wonderful ${userEvent} gift!`);       
    }  
    return newArray;
}

let number = 10;

function countDown(number) {
    let countDown = number;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}