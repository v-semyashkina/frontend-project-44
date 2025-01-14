/* eslint-disable no-console */
import { generateNumber, greeting, getUserAnswer } from '../index.js';

const getDivisor = (dividend, checkDivisor) => {
  const newDivisor = dividend % checkDivisor;
  if (newDivisor === 0) {
    return checkDivisor;
  }
  return getDivisor(checkDivisor, newDivisor);
};

const gameQuestions = (name) => {
  let isCorrect = true;
  let tries = 0;
  while (tries < 3 && isCorrect) {
    const numberOne = generateNumber(20) + 1;
    const numberTwo = generateNumber(20) + 1;
    const problem = `${numberOne} ${numberTwo}`;
    const solution =
      numberOne > numberTwo
        ? getDivisor(numberOne, numberTwo).toString()
        : getDivisor(numberTwo, numberOne).toString();
    isCorrect = getUserAnswer(problem, solution, name);
    tries += 1;
  }
  if (tries === 3 && isCorrect) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  gameQuestions(userName);
};
