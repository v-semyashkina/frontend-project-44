import { question } from 'readline-sync';

// Wait for user's response.
export default function getName() {
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}
