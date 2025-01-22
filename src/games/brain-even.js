import userInteraction from '../index.js';
import generateNumber from '../helpers.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateConditions = () => {
  const result = [];
  const problem = generateNumber();
  result.push(problem);
  const solution = isEven(problem) ? 'yes' : 'no';
  result.push(solution);
  return result;
};

export default () => {
  userInteraction(generateConditions, rules);
};
