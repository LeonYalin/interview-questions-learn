import arrays from './sections/arrays.test';
import javascript from './sections/javascript.test';
import linkedLists from './sections/linked-lists.test';
import nodejs from './sections/nodejs';
import queues from './sections/queues.test';
import react from './sections/react';
import recursion from './sections/recursion.test';
import stacks from './sections/stacks.test';
import strings from './sections/strings.test';

(function main() {
  arrays();
  strings();
  stacks();
  queues();
  linkedLists();
  recursion();
  javascript();
  react();
  nodejs();
})();
