import interactWithUser from '../index.js';
import generateNumber from '../helpers.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (start, step, length = 10) => {
  const progression = [start];
  let count = 1;
  while (count < length) {
    const nextNum = progression[progression.length - 1] + step;
    progression.push(nextNum);
    count += 1;
  }
  return progression;
};

const generateConditions = () => {
  const progressionStart = generateNumber(1, 20);
  const progressionStep = generateNumber(1, 5);
  const progressionLength = generateNumber(5, 10);
  const missingNum = generateNumber(0, progressionLength - 1);
  const progressionArr = generateProgression(progressionStart, progressionStep, progressionLength);
  const solution = progressionArr[missingNum].toString();
  progressionArr[missingNum] = '..';
  const problem = progressionArr.join(' ');
  return [problem, solution];
};

export default () => {
  interactWithUser(generateConditions, rules);
};
