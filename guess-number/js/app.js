let msg1 = document.querySelector('.msg1');
let msg2 = document.querySelector('.msg2');
let msg3 = document.querySelector('.msg3');
let gameDisplay = document.getElementById('gameDisplay');
let chance = 10;
let guessedNo = [];
let ans = Math.floor(Math.random() * 50) + 1;


msg2.textContent = "Number of chance to guess: " + chance;

function play() {
    let guessNumber = parseInt(document.getElementById('guessNumber').value);

    //number check 1 to 50
    if (guessNumber < 1 || guessNumber > 50) {

        alert("please enter between 1 to 50");
        document.getElementById('guessNumber').value = "";

    } else {

        //number check less than answer and greater than answer
        if (guessNumber < ans) {
            gameDisplay.classList.add('wrong');

            msg1.style.backgroundColor = "red";
            msg1.textContent = "Your Number is too low";
            chance--;

            msg2.textContent = "Number of chance to guess: " + chance;

            //message3
            guessedNo.push(guessNumber);
            msg3.textContent = "Guessed number are:: " + guessedNo;

            document.getElementById('guessNumber').value = "";
        } else {

            gameDisplay.classList.add('wrong');

            msg1.style.backgroundColor = "red";
            msg1.textContent = "Your Number is too high";
            chance--;

            msg2.textContent = "Number of chance to guess: " + chance;

            //message3 
            guessedNo.push(guessNumber);
            msg3.textContent = "Guessed number are: " + guessedNo;

            document.getElementById('guessNumber').value = "";
        }
    }

    //number check  guess number equal to ans number
    if (guessNumber === ans) {
        gameDisplay.classList.add('correct');

        msg1.style.backgroundColor = "whitesmoke";
        msg1.style.color = "green";
        msg1.textContent = "Congrats! You\'re Guessing Right!!!";
        document.querySelector('.btn-guess').disabled = true;
        document.querySelector('#guessNumber').disabled = true;
        document.querySelector('#guessNumber').value = guessNumber;

    }

    //chance check
    if (chance === 0) {
        alert("Game Over!! Restart the game");
        document.querySelector('.btn-guess').disabled = true;
        restart();
    }
}

function restart() {

    ans = Math.floor(Math.random() * 50) + 1;

    document.getElementById('guessNumber').value = "";
    gameDisplay.classList.remove('wrong');
    gameDisplay.classList.remove('correct');

    msg1.style.backgroundColor = "";
    msg1.style.color = "";
    msg1.textContent = "Your Game Succefully Restarted!!";

    chance = 10;
    msg2.textContent = "Number of chance to guess: " + chance;

    guessedNo = [];
    msg3.textContent = "Guessed number are: " + guessedNo;

    document.querySelector('.btn-guess').disabled = false;
    document.querySelector('#guessNumber').disabled = false;
}
