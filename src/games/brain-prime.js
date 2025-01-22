import userInteraction from '../index.js';
import generateNumber from '../helpers.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateConditions = () => {
  const result = [];
  const problem = generateNumber();
  result.push(problem);
  const isPrime = checkPrime(problem);
  const solution = isPrime ? 'yes' : 'no';
  result.push(solution);
  return result;
};

export default () => {
  userInteraction(generateConditions, rules);
};
