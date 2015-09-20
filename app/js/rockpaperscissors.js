
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getPlayerMove(move) {
if (move===null || move==='')
{
  getInput();
}

if (move=='rock'|| move=='scissors' || move=='paper')
{
    return move;
}
}
function getComputerMove(move) {

if (move===null || move==='')
{
  return randomPlay();
}

if (move=='rock'|| move=='scissors' || move=='paper')
{
    return move;
}
}

function getWinner(playerMove,computerMove) {
    var winner;

if (playerMove=='rock' && computerMove=='scissors')
{
 winner='player';
}

if (playerMove=='scissors' && computerMove=='rock')
{
 winner='computer';
}

if  (playerMove=='scissors' && computerMove=='paper')
{
winner='player';
}

if (playerMove=='paper' && computerMove=='scissors')
{
 winner='computer';
}

if  (playerMove=='paper' && computerMove=='rock')
{
winner='computer';
}

if (playerMove=='scissors' && computerMove=='paper')
{
 winner='player';
}

if  (playerMove=='paper' && computerMove=='rock')
{
winner='player';
}


if  (playerMove=='rock' && computerMove=='paper')
{
winner='computer';
}


if (playerMove=='scissors' && computerMove=='scissors')
{
 winner='tie';
}

if (playerMove=='paper' && computerMove=='paper')
{
 winner='tie';
}

if (playerMove=='rock' && computerMove=='rock')
{
 winner='tie';
}
    return winner;
}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
	
	while (playerWins<5 || computerWins<5)    
    {
     playerMove=getPlayerMove();
     computerMove=getComputerMove();
     var winner1=getWinner(playerMove, computerMove);
     if(winner1=='player')
     {
     playerWins+=1;
     }
     if(winner1=='computer')
     {
     computerWins+=1;
     }
    }
    return [playerWins, computerWins];
}
playToFive() ;



