const hands = ["rock", "paper", "scissors"];
function getHand()
{
    return hands[parseInt(Math.random()*10)%3];
}
let hand = getHand();
console.log(hand);