import interactWithUser from '../index.js';
import generateNumber from '../helpers.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateConditions = () => {
  const problem = generateNumber();
  const solution = isEven(problem) ? 'yes' : 'no';
  return [problem, solution];
};

export default () => {
  interactWithUser(generateConditions, rules);
};
