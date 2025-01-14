/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import { generateNumber, greeting, getUserAnswer } from '../index.js';

const operators = ['+', '-', '*'];

const calculator = (a, b, sign) => {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return a + b;
  }
};

const gameQuestions = (name) => {
  let isCorrect = true;
  let tries = 0;
  while (tries < 3 && isCorrect) {
    const numberOne = generateNumber(11);
    const numberTwo = generateNumber(11);
    const operator = operators[generateNumber(3)];
    const problem = `${numberOne} ${operator} ${numberTwo}`;
    const solution = calculator(numberOne, numberTwo, operator).toString();
    isCorrect = getUserAnswer(problem, solution, name);
    tries += 1;
  }
  if (tries === 3 && isCorrect) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default () => {
  const userName = greeting();
  console.log('What is the result of the expression?');
  gameQuestions(userName);
};
