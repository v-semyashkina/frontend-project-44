import userInteraction from '../index.js';
import generateNumber from '../generate-number.js';

const rules = 'What number is missing in the progression?';

const generateProgression = () => {
  const firstNum = generateNumber(1, 20);
  const step = generateNumber(1, 5);
  const progression = [firstNum];
  let count = 0;
  while (count < 9) {
    const nextNum = progression[progression.length - 1] + step;
    progression.push(nextNum);
    count += 1;
  }
  return progression;
};

const generateConditions = () => {
  const result = [];
  const missingNum = generateNumber(0, 9);
  const progressionArr = generateProgression();
  const solution = progressionArr[missingNum].toString();
  result.push(solution);
  progressionArr[missingNum] = '..';
  const problem = progressionArr.join(' ');
  result.unshift(problem);
  return result;
};

export default () => {
  userInteraction(generateConditions, rules);
};
