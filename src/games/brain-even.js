import userInteraction from '../index.js';
import generateNumber from '../generate-number.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateConditions = () => {
  const result = [];
  const problem = generateNumber(1, 100);
  result.push(problem);
  const solution = problem % 2 === 0 ? 'yes' : 'no';
  result.push(solution);
  return result;
};

export default () => {
  userInteraction(generateConditions, rules);
};
