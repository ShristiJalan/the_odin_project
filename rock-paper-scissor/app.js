const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerElement = document.querySelector(".player-element");
        const computerElement = document.querySelector(".computer-element");

        //Computer Options
        const computerOptions = ['rock', 'paper', 'scissor'];

        options.forEach(option => {
            option.addEventListener("click", function () {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                //Here is where we call compare elements
                compareElements(this.textContent, computerChoice);

                //Update Images
                playerElement.src = `./image/${this.textContent}.png`; 
                computerElement.src = `./image/${computerChoice}.png`;
            });
        });
 
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareElements =(playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector('.winner');
        //Checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        };
        //Check for Rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissor'){
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for Paper
        if(playerChoice === 'Paper'){
            if(computerChoice === 'scissor'){
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
        }
        //Check for Scissor
        if(playerChoice === 'scissor'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player wins';
                pScore++;
                updateScore(); 
                return;
            } 
        }

    };


    //Is call all the inner function
    startGame();
    playMatch();
};

//start the game function
game();