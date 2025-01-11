/* eslint-disable no-console */
import { question } from 'readline-sync';

const generateNumber = (top) => Math.floor(Math.random() * top);

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
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

export { generateNumber, greeting, getUserAnswer };
