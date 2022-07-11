import { delimeterMsg, log, logF, logToHTML } from "./utils";

function recursionQuestions() {
  logToHTML(`
    Recursion questions:

    - Permutations
    - Fibonacci
    - Factorial
    `);
}

export default function recursion() {
  delimeterMsg('RECURSION');
  logF(recursionQuestions);
}