import interactWithUser from '../index.js';
import generateNumber from '../helpers.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getSolution = (numberOne, numberTwo, sign) => {
  switch (sign) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      throw new Error(`Unknown sign: ${sign}!`);
  }
};

const generateConditions = () => {
  const numOne = generateNumber(0, 10);
  const numTwo = generateNumber(0, 10);
  const operator = operators[generateNumber(0, 2)];
  const problem = `${numOne} ${operator} ${numTwo}`;
  const solution = getSolution(numOne, numTwo, operator).toString();
  return [problem, solution];
};

export default () => {
  interactWithUser(generateConditions, rules);
};
