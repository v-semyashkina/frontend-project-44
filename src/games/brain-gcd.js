import userInteraction from '../index.js';
import generateNumber from '../helpers.js';

const rules = 'Find the greatest common divisor of given numbers.';

const sortNumbers = (a, b) => {
  const result = [a, b];
  return result.sort();
};

const getDivisor = (numbers) => {
  const [dividend, checkDivisor] = numbers;
  const newDivisor = dividend % checkDivisor;
  if (newDivisor === 0) {
    return checkDivisor.toString();
  }
  const newNumbers = [checkDivisor, newDivisor];
  return getDivisor(newNumbers);
};

const generateConditions = () => {
  const result = [];
  const numOne = generateNumber();
  const numTwo = generateNumber();
  const problem = `${numOne} ${numTwo}`;
  result.push(problem);
  const sortedNumbers = sortNumbers(numOne, numTwo);
  const solution = getDivisor(sortedNumbers);
  result.push(solution);
  return result;
};

export default () => {
  userInteraction(generateConditions, rules);
};
