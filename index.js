// Code your solutions in this file
function writeCards(arr, word) {
    let cards = [];
    for (let i = 0; i < arr.length; i++) {
        cards.push(`Thank you, ${arr[i]}, for the wonderful ${word} gift!`)
    }
    return cards;
}



function countDown(num) {
    while (num > 0) {
        console.log(num);
        num -= 1;
    }
    console.log(num);
}