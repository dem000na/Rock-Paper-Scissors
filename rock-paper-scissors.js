const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const choise = document.getElementById("choise");
const score = document.getElementById("score");

// compChoise = 0 rock
// compChoise = 1 paper
// compChoise = 2 scissors


let rps = ["✊", "🖐", "✌"];
let winCount = 0;
let looseCount = 0;
let tieCount = 0;


rock.onclick = function rock()
{
    let playerChoise = 0;
    let compChoise = Math.round(Math.random() * 2 );

    if ( playerChoise === compChoise )
    {
        result.textContent = "Its's a tie.";
        tieCount++;
    }

    else if ( compChoise === 1 )
    {
        result.textContent = "You loose.";
        looseCount++;
    }
    else
    {
        result.textContent = "You win."
        winCount++;
    }

    choise.textContent = `You ${rps[0]} ${rps[compChoise]} Computer`;

    // ‎ = empty space

    score.textContent = `Wins: ${winCount} ‎ ‎ Losses: ${looseCount} ‎ ‎ Ties: ${tieCount}`;
}

paper.onclick = function paper()
{
    let playerChoise = 1;
    let compChoise = Math.round(Math.random() * 2 );

    if ( playerChoise === compChoise )
    {
        result.textContent = "Its's a tie.";
        tieCount++;
    }

    else if ( compChoise === 2 )
    {
        result.textContent = "You loose.";
        looseCount++;
    }
    else
    {
        result.textContent = "You win."
        winCount++;
    }

    choise.textContent = `You ${rps[1]} ${rps[compChoise]} Computer`;

    // ‎ = empty space

    score.textContent = `Wins: ${winCount} ‎ ‎ Losses: ${looseCount} ‎ ‎ Ties: ${tieCount}`;
}


scissors.onclick = function scissors()
{
    let playerChoise = 2;
    let compChoise = Math.round(Math.random() * 2 );

    if ( playerChoise === compChoise )
    {
        result.textContent = "Its's a tie.";
        tieCount++;
    }

    else if ( compChoise === 0 )
    {
        result.textContent = "You loose.";
        looseCount++;
    }
    else
    {
        result.textContent = "You win."
        winCount++;
    }

    choise.textContent = `You ${rps[2]} ${rps[compChoise]} Computer`;

    // ‎ = empty space

    score.textContent = `Wins: ${winCount} ‎ ‎ Losses: ${looseCount} ‎ ‎ Ties: ${tieCount}`;
}