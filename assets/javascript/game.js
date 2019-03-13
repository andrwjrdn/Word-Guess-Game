/* 
================================
           WORDS    
================================ 
*/
var AllStars = ["KOBE" + "BRYANT", "MICHAEL" + "JORDAN", "LEBRON" + "JAMES", "KEVIN" + "DURANT", "STEPH" + "CURRY", "JAMES" + "HARDEN", "RUSSELL" + "WESTBROOK", "PAUL" + "GEORGE"];

var maxGuess = 8; // MAX GUESSES
var LettersGuessed = []; // STORE GUESSED LETTERS
var PlayerArray = []; // CORRECT LETTER GUESS REPLACES "_"
var GuessesLeft = 0; // NUMBER OF GUESSES LEFT
var Wins = 0; // WIN TOTAL
var Losses = 0; // LOSS TOTAL
var Restart = false; // RESTARTS GAME AFTER COMPLETION
var Word; // WORD THAT IS BEING PLAYED

/* 
================================
        START/RESTART   
================================ 
*/

function setup() {

/* 
================================
           RANDOM WORD      
================================ 
*/
    Word = AllStars[Math.floor(Math.random() * AllStars.length)];

    PlayerArray= [];


    for (var i = 0; i < Word.length; i++) {
        PlayerArray[i] = "_";
    }

/* 
================================
           RESET VARIABLE     
================================ 
*/ 

    GuessesLeft = maxGuess;
    LettersGuessed = [];

    
    document.getElementById("Pictures").src = "";
  
    document.getElementById("GuessesLeft").style.color = "";

    
    updateScreen();
};

/* 
================================
           HTML UPDATE     
================================ 
*/

function updateScreen() {
    document.getElementById("Wins").innerText = Wins;
    document.getElementById("Losses").innerText = Losses;
    document.getElementById("GuessesLeft").innerText = GuessesLeft;
    document.getElementById("PlayerArray").innerText = PlayerArray.join("");
    document.getElementById("LettersGuessed").innerText = LettersGuessed;

};

/* 
================================
        PRESSED KEY FUNCTION   
================================ 
*/

function checkGuess(letter) {
    
    if (LettersGuessed.indexOf(letter) === -1) {
        LettersGuessed.push(letter);

        if (Word.indexOf(letter) === -1) {
            GuessesLeft--;
            
            if (GuessesLeft <=3) {
                document.getElementById("GuessesLeft").style.color = "#e12d2e";
            }
            
        } else { 
            for (var i = 0; i < Word.length; i++) {
                if (letter === Word[i]) {
                    PlayerArray[i] = letter;
                } 
            }                
        }
    }

}; 

/* 
================================
        WINNER FUNCTION  
================================ 
*/

function isWinner() {
    
    if (PlayerArray.indexOf("_") === -1) {
        Wins++;
        Restart = true;
        
        document.getElementById("WINS").style.color = "gold"
        
        if(Word === "JAMES" + "HARDEN") {
            document.getElementById("Pictures").src = "assets/images/HARDEN.jpg";
        } else if (Word === "MICHAEL" + "JORDAN") {
            document.getElementById("Pictures").src = "assets/images/GOAT.jpg";
        } else if (Word === "PAUL" + "GEORGE") {
            document.getElementById("Pictures").src = "assets/images/PG13.jpg";
        } else if (Word === "STEPH" + "CURRY") {
            document.getElementById("Pictures").src = "assets/images/CURRY.jpg";
        } else if (Word === "LEBRON" + "JAMES") {
            document.getElementById("Pictures").src = "assets/images/LEBRON.jpg";
        } else if (Word === "KOBE" + "BRYANT") {
            document.getElementById("Pictures").src = "assets/images/KOBE.jpg";
        } else if (Word === "RUSSELL" + "WESTBROOK") {
            document.getElementById("Pictures").src = "assets/images/WESTBROOK.jpg";
        } else if (Word === "KEVIN" + "DURANT") {
            document.getElementById("Pictures").src = "assets/images/KD.jpg";
        }
            
    }
};
/* 
================================
        LOSER FUNCTION 
================================ 
*/
function isLoser() {
    
    if(GuessesLeft <= 0) {
        Losses++;
        Restart = true;
        
        document.getElementById("Pictures").src = "assets/images/SUCKER.jpg";
        document.getElementById("Losses").style.color = "red";
    }

};

/* 
================================
        EVENT LISTENER   
================================ 
*/

document.onkeyup = function(event) {
    
    if (Restart) {
        setup();
        Restart = false;
    } else {
      
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            checkGuess(event.key.toUpperCase()); 
            updateScreen();
            isWinner();
            isLoser();
        }
    }
};


setup();
updateScreen();

console.log(Word);
