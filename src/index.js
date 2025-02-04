import { question } from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default (getConditions, gameRules) => {
  const maxRounds = 3;
  let userTries = 0;
  const userName = greetUser();
  console.log(gameRules);
  for (let i = userTries; i < maxRounds; i += 1) {
    const [problem, solution] = getConditions();
    console.log(`Question: ${problem}`);
    const userGuess = question('Your answer: ');
    if (solution === userGuess) {
      console.log('Correct!');
      userTries += 1;
    } else {
      console.log(
        `'${userGuess}' is wrong answer ;(. Correct answer was '${solution}'. \nLet's try again, ${userName}!`,
      );
      break;
    }
  }
  if (userTries === maxRounds) {
    console.log(`Congratulations, ${userName}!`);
  }
};
