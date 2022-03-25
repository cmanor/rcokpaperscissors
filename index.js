const hands = ["rock", "paper", "scissors"];

const r = hands[0];
const p = hands[1];
const s = hands[2];
const w = "wins!";

function getHand()
{
    let index = parseInt(Math.random()*10)%3;
    return hands[index];
}

let p1 = 
{
    name: "deez",
    getHand: getHand
}

let p2 = 
{
    name: "assignments",
    getHand: getHand
}

const n1 = p1.name;
const n2 = p2.name;

function playRound(p1, p2)
{
    let p1h = p1.getHand();
    let p2h = p2.getHand();
    console.log(n1 + " chose " + p1h);
    console.log(n2 + " chose " + p2h)
    if (p1h===p2h)
    {
        console.log("it's a tie!");
    } else if ((p1h == r && p2h == s) || (p1h == p && p2h == r) || (p1h == s && p2h == p)){
        console.log(p1.name + " wins!");
    } else {
        console.log(p2.name + " wins!")
    }
}

// function testResult(p1h, p2h)
// {
//     if (p1h===p2h)
//     {
//         console.log("it's a tie!");
//     } else if ((p1h == r && p2h == s) || (p1h == p && p2h == r) || (p1h == s && p2h == r)){
//         console.log("Player 1 win!");
//     } else {
//         console.log("Player 2 wins!")
//     }
// }

playRound(p1,p2);