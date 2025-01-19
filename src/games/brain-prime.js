import userInteraction from '../index.js';
import generateNumber from '../generate-number.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (num) => {
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];
  return primes.indexOf(num) !== -1;
};

const generateConditions = () => {
  const result = [];
  const problem = generateNumber(1, 100);
  result.push(problem);
  const isPrime = checkPrime(problem);
  const solution = isPrime ? 'yes' : 'no';
  result.push(solution);
  return result;
};

export default () => {
  userInteraction(generateConditions, rules);
};
