import { delimeterMsg, log, logF, logToHTML } from "./utils";

function arraysQuestions() {
  logToHTML(`
    Arrays questions:

    - Left rotation
    - Find missing number
    - Find pair with given sum
    - Find duplicates
    - Reverse an array
    - Find second max
    `);
}

export default function arrays() {
  delimeterMsg('ARRAYS');
  logF(arraysQuestions);
}