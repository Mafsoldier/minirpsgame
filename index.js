// Wijzigen plaatjes naar keuze

function rock(i) {
  document.getElementById(i).src = "images/Rock.png";

}

function paper(i) {
  document.getElementById(i).src = "images/Paper.png";
}

function scissor(i) {
  document.getElementById(i).src = "images/Scissor.png";
}


//keuze van de computer speler

var randomNumberPcSpeler = 0;
var pcSpelerKeus;
var computerPlayerNamePicture = "pcPlayerpicture";

function pcSpeler() {

  randomNumberPcSpeler = Math.floor(Math.random() * 3 + 1);
  if (randomNumberPcSpeler === 1) {
    pcSpelerKeus = "Rock";
    rock(computerPlayerNamePicture);
  } else if (randomNumberPcSpeler === 2) {
    pcSpelerKeus = "Paper";
    paper(computerPlayerNamePicture);
  } else if (randomNumberPcSpeler === 3) {
    pcSpelerKeus = "Scissor";
    scissor(computerPlayerNamePicture);

  }
  return randomNumberPcSpeler;
}

// keuze van de Human player

var humanPlayerNamePicture = "humanPlayerPicture";
var i = 0;

function humanChoise(i) {

  if (i === 1) {
    pcSpelerKeus = "Rock";
    rock(humanPlayerNamePicture);
  } else if (i === 2) {
    pcSpelerKeus = "Paper";
    paper(humanPlayerNamePicture);
  } else if (i === 3) {
    pcSpelerKeus = "Scissor";
    scissor(humanPlayerNamePicture);

  }
return i;
}


// wie wint er?
var humanScore = 0;
var computerScore = 0;
var humanChoiseNumber = 0;
var pcPlayerChoiseNumber=0;

// 1 = rock
// 2 = paper
// 3 = scissor

function score(humanChoiseNumber, pcPlayerChoiseNumber) {

  if (humanChoiseNumber === pcPlayerChoiseNumber) {
      alert("Draw!");
  }

  else if (humanChoiseNumber == 1) {
    if (pcPlayerChoiseNumber == 2) {
      alert("Computer wins!");
      computerScore++;
    }if (pcPlayerChoiseNumber ==3){
      alert("Human wins!");
      humanScore++;

    }
  }

  else if (humanChoiseNumber == 2) {
    if (pcPlayerChoiseNumber == 1) {
      alert("Human wins!");
      humanScore++;
    }if (pcPlayerChoiseNumber == 3) {
      alert("Computer wins!");
      computerScore++;
  }
}



else if (humanChoiseNumber == 3) {
    if (pcPlayerChoiseNumber == 1) {
      alert("computer wins!");
      computerScore++;
    }if (pcPlayerChoiseNumber == 2) {
      alert("Human wins!");
      humanScore++;
  }
  }

}

// Spel spelen

  function playGame(i) {
  score(humanChoise(i), pcSpeler());

}