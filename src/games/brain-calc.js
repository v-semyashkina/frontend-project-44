import userInteraction from '../index.js';
import generateNumber from '../generate-number.js';

const rules = 'What is the result of the expression?';
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
      throw new Error(`Unknown sign: ${sign}!`);
  }
};

const generateConditions = () => {
  const result = [];
  const numOne = generateNumber(0, 10);
  const numTwo = generateNumber(0, 10);
  const operator = operators[generateNumber(0, 2)];
  const problem = `${numOne} ${operator} ${numTwo}`;
  result.push(problem);
  const solution = calculator(numOne, numTwo, operator).toString();
  result.push(solution);
  return result;
};

export default () => {
  userInteraction(generateConditions, rules);
};
