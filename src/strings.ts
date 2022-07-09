import { delimeterMsg, log, logF, logToHTML } from "./utils";

function stringsQuestions() {
  logToHTML(`
    Strings questions:

    - Anagram
    - Palimdrome
    - Permutations
    `);

  log('find duplicates');
}

export default function strings() {
  delimeterMsg('STRINGS');
  logF(stringsQuestions);
}