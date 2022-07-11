import { delimeterMsg, log, logF, logToHTML } from "./utils";

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

export default function strings() {
  delimeterMsg('JAVASCRIPT');
  logF(javasctiptQuestions);
}