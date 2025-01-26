import interactWithUser from '../index.js';
import generateNumber from '../helpers.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (start, step, length = 10) => {
  const progression = [start];
  for (let i = 1; i < length; i += 1) {
    const nextNum = progression[progression.length - 1] + step;
    progression.push(nextNum);
  }
  return progression;
};

const generateConditions = () => {
  const progressionStart = generateNumber(1, 20);
  const progressionStep = generateNumber(1, 5);
  const progressionLength = generateNumber(5, 10);
  const hiddenNum = generateNumber(0, progressionLength - 1);
  const progressionArr = generateProgression(progressionStart, progressionStep, progressionLength);
  const solution = progressionArr[hiddenNum].toString();
  progressionArr[hiddenNum] = '..';
  const problem = progressionArr.join(' ');
  return [problem, solution];
};

export default () => {
  interactWithUser(generateConditions, rules);
};
