/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import { generateNumber, greeting, getUserAnswer } from '../index.js';

const gameQuestions = (name) => {
  let isCorrect = true;
  let tries = 0;
  while (tries < 3 && isCorrect) {
    const number = generateNumber(101);
    const problem = number;
    const solution = number % 2 === 0 ? 'yes' : 'no';
    isCorrect = getUserAnswer(problem, solution, name);
    tries += 1;
  }
  if (tries === 3 && isCorrect) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  gameQuestions(userName);
};
