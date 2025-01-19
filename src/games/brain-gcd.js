import userInteraction from '../index.js';
import generateNumber from '../generate-number.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getDivisor = (dividend, checkDivisor) => {
  const newDivisor = dividend % checkDivisor;
  if (newDivisor === 0) {
    return checkDivisor.toString();
  }
  return getDivisor(checkDivisor, newDivisor);
};

const generateConditions = () => {
  const result = [];
  const numOne = generateNumber(1, 20);
  const numTwo = generateNumber(1, 20);
  const problem = `${numOne} ${numTwo}`;
  result.push(problem);
  const solution = numOne > numTwo ? getDivisor(numOne, numTwo) : getDivisor(numTwo, numOne);
  result.push(solution);
  return result;
};

export default () => {
  userInteraction(generateConditions, rules);
};
