/* eslint-disable no-console */
import { question } from 'readline-sync';
import generateNumber from './generate-number.js';

let userName;

const getName = () => {
  userName = question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const gameQuestions = (name) => {
  let tries = 0;
  while (tries < 3) {
    const number = generateNumber(99);
    const isEven = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userGuess = question('Your answer: ');
    if (isEven === userGuess) {
      console.log('Correct!');
      tries += 1;
    } else {
      console.log(
        `'${userGuess}' is wrong answer ;(. Correct answer was '${isEven}'. \nLet's try again, ${name}!`,
      );
      tries = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default () => {
  console.log('Welcome to the Brain Games!');
  getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  gameQuestions(userName);
};
