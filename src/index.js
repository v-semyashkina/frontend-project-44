import { question } from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getUserAnswer = (problem, rightAnswer, name) => {
  console.log(`Question: ${problem}`);
  const userGuess = question('Your answer: ');
  if (rightAnswer === userGuess) {
    console.log('Correct!');
  } else {
    console.log(
      `'${userGuess}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${name}!`,
    );
    return false;
  }
  return true;
};

export default (conditions, gameRules) => {
  const maxRounds = 3;
  let isRight = true;
  const userName = greeting();
  console.log(gameRules);
  for (let i = 0; i < maxRounds; i += 1) {
    if (!isRight) {
      break;
    }
    const [problem, solution] = conditions();
    isRight = getUserAnswer(problem, solution, userName);
  }
  if (isRight) {
    console.log(`Congratulations, ${userName}!`);
  }
};
