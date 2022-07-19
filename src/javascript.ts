import { runTests, TestData } from './test-utils';
import { delimeterMsg, log, logF, logToHTML } from './utils';

function javasctiptQuestions() {
  logToHTML(`
    JavaScript questions:

    - What is a potential pitfall with using typeof bar === "object"?
      How can this pitfall be avoided?

    -> null and [] are objects
      "(bar !== null) && (typeof bar === "object") && (!Array.isArray(bar))"

    =========================================================
      
    - (function(){
        var a = b = 3;
      })();
      
      console.log("a defined? " + (typeof a !== 'undefined'));
      console.log("b defined? " + (typeof b !== 'undefined'));

    -> var a = b = 3; is actually shorthand for:
      b = 3;
      var a = b;

      if not strict mode: "a defined? false, b defined? true"
      in strict mode: "ReferenceError: b is not defined"

    =========================================================

    - console.log(0.1 + 0.2);
      console.log(0.1 + 0.2 == 0.3);

    -> You can't be sure. it might print out 0.3 and true, or it might not. Numbers in js are floats, e.g.
      0.30000000000000004
      false
      Solution: "Math.abs( num1 - num2 ) < Number.EPSILON;"

    =========================================================

    - console.log(sum(2,3));   // Outputs 5
      console.log(sum(2)(3));  // Outputs 5

    -> function sum(x) {
        if (arguments.length == 2) {
          return arguments[0] + arguments[1];
        } else {
          return function(y) { return x + y; };
        }
      }
      
      =========================================================
      
      - console.log(1 +  "2" + "2");
        console.log(1 +  +"2" + "2");
        console.log(1 +  -"1" + "2");
        console.log(+"1" +  "1" + "2");
        console.log( "A" - "B" + "2");
        console.log( "A" - "B" + 2);
  
      -> "122"
        "32"
        "02"
        "112"
        "NaN2"
        NaN
      
      =========================================================
      
      - 0 || 1 = 1
        1 || 2 = 1
        0 && 1 = 0
        1 && 2 = 2
  
      -> true
        true
        false
        true
      
      =========================================================
      
      - console.log(false == '0')
        console.log(false === '0')
  
      -> true
        false
      
      =========================================================
      
      - var hero = {
          _name: 'John Doe',
          getSecretIdentity: function (){
              return this._name;
          }
      };
      
      var stoleSecretIdentity = hero.getSecretIdentity;
      
      console.log(stoleSecretIdentity());
      console.log(hero.getSecretIdentity());
  
      -> undefined
        John Doe

      How to fix:
      var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

      =========================================================
      
      - Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents.
  
      -> function Traverse(p_element,p_callback) {
            p_callback(p_element);
            var list = p_element.children;
            for (var i = 0; i < list.length; i++) {
                Traverse(list[i],p_callback);  // recursive call
            }
        }

      =========================================================
      
      - What will be the output of the following function?
      (function () {
          try {
              throw new Error();
          } catch (x) {
              var x = 1, y = 2;
              console.log(x);
          }
          console.log(x);
          console.log(y);
      })();
  
      -> 1
        undefined
        2
        x and y are hoisted to the top of function scope without initialization, therefore the remaining x is undefined.
  

      =========================================================
      
      - var x = 21;
        var girl = function () {
            console.log(x);
            var x = 20;
        };
        girl ();
  
      -> undefined (hoisting without initialization)

      =========================================================
      
      - What will be the output of the following function?
      (function () {
          try {
              throw new Error();
          } catch (x) {
              var x = 1, y = 2;
              console.log(x);
          }
          console.log(x);
          console.log(y);
      })();
  
      -> 1
        undefined
        2
        x and y are hoisted to the top of function scope without initialization, therefore the remaining x is undefined.

      =========================================================
      
      - Explain hoisting
  
      -> Hoisting is a process of splitting the variable deslaration (moving to the top of the scope) and initialization (in the same place).
        "var a = 12" will be splitted to "var a" and "a = 12". "var a" will be moved to the top of the scope. 
      
      =========================================================
      
      - Classical vs Prototype Inheritance
  
      -> In classical inheritance, objects are created from blueprints (classes), inheritance is from class to subclass.
        In prototypal inheritance, objects are cloned from another objects, and inherit their values and prototypes, including prototype chain.
        When a property is requested, it is searched from own properties, then prototype, when inherited prototypes.
        Prototype inheritance example: Person -> Object -> null.
  
    `);
}

function interviewProblems() {
  logToHTML(`
    Interview problems:

    - Add spaces between chars in the string ${addSpaces()}
    - Wrap a console.log function in a custom function and print its arguments ${myLog()}
    - Use bind method to fix the indefined log ${useBindToFixLog()}
    - Implement myBind() ${myBind()}
    - Find top k passwords from list() ${topKPasswords()}
    `);
}

function addSpaces() {
  type InputData = { str: string };
  type ExpectedData = string;

  function alg({ str }: InputData): ExpectedData {
    if (!str || str.length < 2) return str;

    return str.split('').join(' ');

    // implementation on String prototype
    // String.prototype.addSpaces = function() {
    //   return this.split('').join(' ');
    // }
  }

  const testData: TestData<InputData, ExpectedData> = [
    { input: { str: 'hello' }, expected: 'h e l l o' },
    { input: { str: 'world' }, expected: 'w o r l d' },
  ];
  runTests(alg, testData);
}

function myLog() {
  function mylogUsingRest(...args: any[]) {
    const finalArgs = [44, ...args]; // 44 as example of customizing the output
    console.log(...finalArgs);
  }
  // mylogUsingRest(11, 22, 33);

  function myLogUsingArguments() {
    var args = Array.prototype.slice.call(arguments); // arguments is a array-like object
    args.unshift(44);
    console.log.apply(null, args); // call a function with an array of arguments
  }
}

function useBindToFixLog() {
  var obj = {
    count: 5,
    getCount: function () {
      console.log(this.count);
    },
  };
  obj.getCount();
  var func = obj.getCount;
  // func(); // fails
  const boundedfunc = func.bind({ count: 10 }); // or func.bind(obj);
  console.log(boundedfunc());
}

function myBind() {
  Function.prototype['mybind'] = function (ctx: any) {
    const fn = this;
    return function () {
      return fn.apply(ctx, arguments);
    };
  };
  delete Function.prototype['mybind']; // cleanup
}

function topKPasswords() {
  type InputData = { list: string[]; k: number };
  type ExpectedData = string[];

  function alg({ list, k }: InputData): ExpectedData {
    if (!list || list.length < 2 || k < 2) return list;

    const hash = {};
    list.forEach(pass => {
      if (!hash[pass]) {
        hash[pass] = 1;
      } else {
        hash[pass] = hash[pass] + 1;
      }
    });
    const topKValues: number[] = Object.values(hash);
    const sorted = topKValues.sort((a,b) => b - a).slice(0, k);
    const topKKeys = [];
    for (let [k, v] of Object.entries(hash)) {
      if (sorted.includes(<number>v)) {
        topKKeys.push(k);
      }
    }
    return topKKeys;

    // Theoretical question: is there are milliards of passwords, how do you process the function?
    // solution: break into smaller arrays and run on cloud, then use hashing (Interviewer explanation, need to dig further)

    // Explain Promise, what is it used for and why do we need it
    // is there another way to create a promise?

    // paralel([
    //   (done) => setTimeout(() => done('a'), 1000),
    //   (done) => setTimeout(() => done('b'), 300)
    //   ],
    //   (results) => console.log(results)
    //   );

    //   //fill in:
    //   function paralel(asyncFooArray, onAllDone) {
    //       asyncFooArray.forEach((foo) => foo(onAllDone))
    //       console.log("Me first log")
    //   }
  }

  const testData: TestData<InputData, ExpectedData> = [
    { input: { list: ['1', '1', '1', '2', '2', '3', '4'], k: 2 }, expected: ['1', '2'] },
    { input: { list: ['a', 'a', 'b', 'a', 'c', 'b', 'a', 'c', 'd'], k: 3 }, expected: ['a', 'b', 'c'] },
  ];
  runTests(alg, testData);
}

export default function javascript() {
  delimeterMsg('JAVASCRIPT');
  logF(javasctiptQuestions);
  logF(interviewProblems);
}
