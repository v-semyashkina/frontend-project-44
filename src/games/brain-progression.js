/* eslint-disable import/extensions */
/* eslint-disable no-console */
import { generateNumber, greeting, getUserAnswer } from '../index.js';

const generateProgression = () => {
  const firstNum = generateNumber(20) + 1;
  const step = generateNumber(5) + 1;
  const progression = [firstNum];
  let count = 0;
  while (count < 9) {
    const nextNum = progression[progression.length - 1] + step;
    progression.push(nextNum);
    count += 1;
  }
  return progression;
};

const gameQuestions = (name) => {
  let isCorrect = true;
  let tries = 0;
  while (tries < 3 && isCorrect) {
    const missingNum = generateNumber(10);
    const progressionArr = generateProgression();
    const solution = progressionArr[missingNum].toString();
    progressionArr[missingNum] = '..';
    const problem = progressionArr.join(' ');
    isCorrect = getUserAnswer(problem, solution, name);
    tries += 1;
  }
  if (tries === 3 && isCorrect) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default () => {
  const userName = greeting();
  console.log('What number is missing in the progression?');
  gameQuestions(userName);
};
