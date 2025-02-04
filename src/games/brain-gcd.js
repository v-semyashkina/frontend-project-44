import interactWithUser from '../index.js';
import generateNumber from '../helpers.js';

const rules = 'Find the greatest common divisor of given numbers.';

const sortNumbers = (a, b) => {
  const result = [a, b];
  return result.sort();
};

const getGCD = (numbers) => {
  const [dividend, checkDivisor] = numbers;
  const newDivisor = dividend % checkDivisor;
  if (newDivisor === 0) {
    return checkDivisor.toString();
  }
  const newNumbers = [checkDivisor, newDivisor];
  return getGCD(newNumbers);
};

const generateConditions = () => {
  const numOne = generateNumber();
  const numTwo = generateNumber();
  const problem = `${numOne} ${numTwo}`;
  const sortedNumbers = sortNumbers(numOne, numTwo);
  const solution = getGCD(sortedNumbers);
  return [problem, solution];
};

export default () => {
  interactWithUser(generateConditions, rules);
};
