import { question } from 'readline-sync';

let userName;
let isCorrect = true;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
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
    isCorrect = false;
  }
};

export default (conditions, gameRules) => {
  greeting();
  console.log(gameRules);
  let tries = 0;
  while (tries < 3 && isCorrect) {
    const [problem, solution] = conditions();
    getUserAnswer(problem, solution, userName);
    tries += 1;
  }
  if (tries === 3 && isCorrect) {
    console.log(`Congratulations, ${userName}!`);
  }
};
