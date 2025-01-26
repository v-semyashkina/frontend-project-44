import interactWithUser from '../index.js';
import generateNumber from '../helpers.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateConditions = () => {
  const problem = generateNumber();
  const prime = isPrime(problem);
  const solution = prime ? 'yes' : 'no';
  return [problem, solution];
};

export default () => {
  interactWithUser(generateConditions, rules);
};
