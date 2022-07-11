import { delimeterMsg, log, logF, logToHTML } from "./utils";

function stringsQuestions() {
  logToHTML(`
    Strings questions:

    - Anagram
    - Palindrome
    `);
}

export default function strings() {
  delimeterMsg('STRINGS');
  logF(stringsQuestions);
}