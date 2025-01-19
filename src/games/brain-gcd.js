import userInteraction from '../index.js';
import generateNumber from '../generate-number.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getDivisor = (dividend, checkDivisor) => {
  const newDivisor = dividend % checkDivisor;
  if (newDivisor === 0) {
    return checkDivisor;
  }
  return getDivisor(checkDivisor, newDivisor);
};

const generateConditions = () => {
  const result = [];
  const numberOne = generateNumber(1, 20);
  const numberTwo = generateNumber(1, 20);
  const problem = `${numberOne} ${numberTwo}`;
  result.push(problem);
  const solution =
    numberOne > numberTwo
      ? getDivisor(numberOne, numberTwo).toString()
      : getDivisor(numberTwo, numberOne).toString();
  result.push(solution);
  return result;
};

export default () => {
  userInteraction(generateConditions, rules);
};
