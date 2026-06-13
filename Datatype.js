// Primitive Data types //

// 1. Number => 2 *53 range//
let num = 123;
console.log("num:", num);

// 2. BigInt => represents integers with arbitrary precision//
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log("bigIntValue:", bigIntValue);
// 3. String => sequence of characters//
let str = "Hello, World!";
console.log("string:", str);

// 4. Boolean => true or false//
let bool = true;
console.log("bool:", bool);
// 5. Null => represents the intentional absence of any object value//
let nullValue = null;
console.log(nullValue);     

// 6. Undefined => represents the absence of a value//
let undefinedValue;
console.log(undefinedValue);

// 7. Symbol => represents a unique identifier//
let sym1 = Symbol("sym");
let sym2 = Symbol("sym");
console.log("sym1:", sym1);
console.log("sym2:", sym2);
console.log("sym1 === sym2:", sym1 === sym2); // false, each symbol is unique




//object//

let age = 25;
console.log(typeof age);