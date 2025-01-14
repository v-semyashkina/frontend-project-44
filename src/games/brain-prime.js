/* eslint-disable no-console */
import { generateNumber, greeting, getUserAnswer } from '../index.js';

const checkPrime = (num) => {
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];
  return primes.indexOf(num) !== -1;
};

const gameQuestions = (name) => {
  let isCorrect = true;
  let tries = 0;
  while (tries < 3 && isCorrect) {
    const problem = generateNumber(100) + 1;
    const isPrime = checkPrime(problem);
    const solution = isPrime ? 'yes' : 'no';
    isCorrect = getUserAnswer(problem, solution, name);
    tries += 1;
  }
  if (tries === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  gameQuestions(userName);
};
