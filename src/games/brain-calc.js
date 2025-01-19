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
  const numberOne = generateNumber(0, 10);
  const numberTwo = generateNumber(0, 10);
  const operator = operators[generateNumber(0, 2)];
  const problem = `${numberOne} ${operator} ${numberTwo}`;
  result.push(problem);
  const solution = calculator(numberOne, numberTwo, operator).toString();
  result.push(solution);
  return result;
};

export default () => {
  userInteraction(generateConditions, rules);
};
