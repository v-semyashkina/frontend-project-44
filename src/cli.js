import { question } from "readline-sync";

// Wait for user's response.
const getName = () => {
  var userName = question("May I have your name? ");
  console.log("Hello, " + userName + "!");
};

export { getName };
