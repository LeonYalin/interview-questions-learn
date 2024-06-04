





import { delimeterMsg, logToHTML } from './utils';

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

function typeCoercion() {
  logToHTML(`

  Examples

  =========================================================

  true + false             // 1
  12 / "6"                 // 2
  "number" + 15 + 3        // 'number153'
  15 + 3 + "number"        // '18number'
  [1] > null               // true
  "foo" + + "bar"          // 'fooNaN'
  'true' == true           // false
  false == 'false'         // false
  null == ''               // false
  !!"false" == !!"true"    // true
  ['x'] == 'x'             // true 
  [] + null + 1            // 'null1'
  [1,2,3] == [1,2,3]       // false
  {}+[]+{}+[1]             // '0[object Object]1'
  !+[]+[]+![]              // 'truefalse'
  new Date(0) - 0          // 0
  new Date(0) + 0          // 'Thu Jan 01 1970 02:00:00(EET)0'

  =========================================================

  true + false
  ==> 1 + 0
  ==> 1

  =========================================================
  
  12 / '6'
  ==> 12 / 6
  ==>> 2
  
  =========================================================
  
  “number” + 15 + 3 
  ==> "number15" + 3 
  ==> "number153"

  =========================================================
  
  15 + 3 + "number" 
  ==> 18 + "number" 
  ==> "18number"
  
  =========================================================
  
  [1] > null
  ==> '1' > 0
  ==> 1 > 0
  ==> true
  
  =========================================================
  
  "foo" + + "bar" 
  ==> "foo" + (+"bar") 
  ==> "foo" + NaN 
  ==> "fooNaN"

  =========================================================
  
  'true' == true
  ==> NaN == 1
  ==> false
  
  false == 'false'   
  ==> 0 == NaN
  ==> false

  =========================================================
  
  null == ''
  ==> false
  
  =========================================================
  
  !!"false" == !!"true"  
  ==> true == true
  ==> true

  =========================================================
  
  ['x'] == 'x'  
  ==> 'x' == 'x'
  ==>  true

  =========================================================
  
  [] + null + 1  
  ==>  '' + null + 1  
  ==>  'null' + 1  
  ==> 'null1'

  =========================================================

  0 || "0" && {}  
  ==>  (0 || "0") && {}
  ==> (false || true) && true  // internally
  ==> "0" && {}
  ==> true && true             // internally
  ==> {}

  =========================================================
  
  [1,2,3] == [1,2,3]
  ==>  false
  
  =========================================================
  
  {}+[]+{}+[1]
  ==> +[]+{}+[1]
  ==> 0 + {} + [1]
  ==> 0 + '[object Object]' + [1]
  ==> '0[object Object]' + [1]
  ==> '0[object Object]' + '1'
  ==> '0[object Object]1'

  =========================================================
  
  !+[]+[]+![]  
  ==> (!+[]) + [] + (![])
  ==> !0 + [] + false
  ==> true + [] + false
  ==> true + '' + false
  ==> 'truefalse'

  =========================================================
  
  new Date(0) - 0
  ==> 0 - 0
  ==> 0

  =========================================================
  
  new Date(0) + 0
  ==> 'Thu Jan 01 1970 02:00:00 GMT+0200 (EET)' + 0
  ==> 'Thu Jan 01 1970 02:00:00 GMT+0200 (EET)0'

  =========================================================

  console.log(1);

  setTimeout(() => console.log(2));

  Promise.resolve().then(() => console.log(3));

  Promise.resolve().then(() => setTimeout(() => console.log(4)));

  Promise.resolve().then(() => console.log(5));

  setTimeout(() => console.log(6));

  console.log(7);

  ==> 1,7,3,5,2,6,4

  =========================================================

  function foo() {
    const x = 10;
    return {
      x: 20,
      bar: () => {
        console.log(this.x);
      },
      baz: function () {
        console.log(this.x);
      }
    }
  }
  
  const obj1 = foo();
  obj1.bar(); //?
  obj1.baz(); //?
  
  const obj2 = foo.call({ x: 30 });
  let y = obj1.bar;
  let z = obj1.baz;
  y(); //?
  z(); //?
  
  obj2.bar(); //?
  obj2.baz(); //?

  ==> undefined,20,undefined,undefined,30,20

  =========================================================

  Promise
  .reject('a')
  .then(p => p + '1', p => p + '2')
  .catch(p => p + 'b')
  .catch(p => p + 'c')
  .then(p => p + 'd1')
  .then('d2')
  .then(p => p + 'd3')
  .catch(p => p + 'b')
  .finally(p => p + 'e')
  .then(p => console.log(p))

  ==> 'a2d1d3'

  =========================================================

  Promise.reject('a')
  .catch(p => {
    console.log('catch 1', p);
    return p + 'b';
  })
  .catch(p => {
    console.log('catch 2', p);
    return p + 'c';
  })
  .then(p => {
    console.log('then 1', p);
    return p + 'd';
  })
  .finally(p => {
    console.log('finally 1', p);
    return p + 'e';
  })
  .then(p => {
    console.log('then 2', p);
    console.log(p);
  });

  ==> 'abd'
  
  `);

  function videoInterview() {
    logToHTML(`
      Video:
      https://www.youtube.com/watch?v=p4PmANxsckA

      Likns to learn more:
      https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
      https://www.freecodecamp.org/news/coercion-and-type-conversion-in-javascript/
      https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/
      https://www.freecodecamp.org/news/what-is-hoisting-in-javascript/
      https://www.freecodecamp.org/news/prototypes-and-inheritance-in-javascript/
      https://www.linkedin.com/pulse/unraveling-javascript-event-loop-comprehensive-guide-michael-baker/
      https://javascript.plainenglish.io/solid-principle-in-javascript-part-1-4f67d8f9a31f
      https://www.freecodecamp.org/news/how-to-use-currying-and-composition-in-javascript/
    `);
  }
}

describe('JavaScript questions', () => {
  it('Add spaces between chars in the string', () => {
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

    const testData = [
      { input: { str: 'hello' }, expected: 'h e l l o' },
      { input: { str: 'world' }, expected: 'w o r l d' },
    ];
    testData.forEach((data) => expect(alg(data.input)).toEqual(data.expected));
  });

  it('Wrap a console.log function in a custom function and print its arguments', () => {
    function mylogUsingRest(...args: any[]) {
      const finalArgs = [44, ...args]; // 44 as example of customizing the output
      console.log(...finalArgs);
    }
    // mylogUsingRest(11, 22, 33);

    function myLogUsingArguments() {
      // eslint-disable-next-line prefer-rest-params
      const args = Array.prototype.slice.call(arguments); // arguments is a array-like object
      args.unshift(44);
      console.log.apply(null, args); // call a function with an array of arguments
    }

    expect(true).toEqual(true);
  });
});

it('Use bind method to fix the indefined log', () => {
  // eslint-disable-next-line no-var
  var obj = {
    count: 5,
    getCount: function () {
      console.log(this.count);
    },
  };
  obj.getCount();
  // eslint-disable-next-line no-var
  var func = obj.getCount;
  // func(); // fails
  const boundedfunc = func.bind({ count: 10 }); // or func.bind(obj);
  console.log(boundedfunc());

  expect(true).toEqual(true);
});

it('Implement myBind()', () => {
  Function.prototype['mybind'] = function (ctx: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const fn = this;
    return function () {
      // eslint-disable-next-line prefer-rest-params
      return fn.apply(ctx, arguments);
    };
  };
  delete Function.prototype['mybind']; // cleanup

  expect(true).toEqual(true);
});

it('Find top k passwords from list()', () => {
  type InputData = { list: string[]; k: number };
  type ExpectedData = string[];

  function alg({ list, k }: InputData): ExpectedData {
    if (!list || list.length < 2 || k < 2) return list;

    const hash = {};
    list.forEach((pass) => {
      if (!hash[pass]) {
        hash[pass] = 1;
      } else {
        hash[pass] = hash[pass] + 1;
      }
    });
    const topKValues: number[] = Object.values(hash);
    const sorted = topKValues.sort((a, b) => b - a).slice(0, k);
    const topKKeys = [];
    for (const [k, v] of Object.entries(hash)) {
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

  const testData = [
    {
      input: { list: ['1', '1', '1', '2', '2', '3', '4'], k: 2 },
      expected: ['1', '2'],
    },
    {
      input: { list: ['a', 'a', 'b', 'a', 'c', 'b', 'a', 'c', 'd'], k: 3 },
      expected: ['a', 'b', 'c'],
    },
  ];
  testData.forEach((data) => expect(alg(data.input)).toEqual(data.expected));
});

export default function javascript() {
  delimeterMsg('JAVASCRIPT');
}
