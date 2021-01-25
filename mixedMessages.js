//array of different game titles
const computerGame = ['Modern Warfare', 'Cyberpunk 2077', 'Red Dead Redemption', 'Fifa 21', 'Forza 5', 'Witcher 3', 'Skyrim'];

//create a random number based on the array
const randomNum = Math.floor(Math.random()*computerGame.length);

const randomGame = computerGame[randomNum];

//create empty string
let msg = '';

//switch statement with messages about each game
switch (randomGame) {
    case 'Modern Warfare':
        msg = 'the best game of 2020!';
        break;
    case 'Cyperpunk 2077':
        msg = 'completely broken on consoles.';
        break;
    case 'Red Dead Redemption':
        msg = 'one of the best game sequels ever!';
        break;
    case 'Fifa 21':
        msg = 'the biggest waste of money.';
        break;
    case 'Forza 5':
        msg = 'surprisingly a fun game to play';
        break;
    case 'Witcher 3':
        msg = 'probably the best rpg game ever made.';
        break;
    case 'Skyrim':
        msg = 'the game I have lost the most hours of my life to.';
        break;
};

console.log(`The game ${randomGame} is ${msg}.`);