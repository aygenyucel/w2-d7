/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/*
DATA TYPES
1. Number
    Include numbers between 2^-1074 and 2^1024. And their negative versions.
2. Strings
    Represent the textual data
3. Null & Undefined
    Null represent for empty value, Undefined is data type for values that nothing assigned yet
4. Boolean
    Boolean values are can be "true" and "false". Represent logical entity
STRUCTURAL DATA TYPES
1. Objects
    Collections of 'key-value' properties (exp: "name":"john", "age":"32")
*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/*---------------------------- 
We need some inputs to can develop the program. So if we want to see our input and use anytime that we need,
we need to create variables with naming to inputs
*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let sum = 12 + 20;

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let subtraction = 12 - x;

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";

let isEqual = name1 === name2;

let isEqualLowerCase = name1 === name2.toLowerCase();

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

let x = 2;
let literalValue =
  x == 1
    ? "one"
    : x == 2
    ? "two"
    : x == 3
    ? "three"
    : x == 4
    ? "four"
    : x == 5
    ? "five"
    : x == 6
    ? "six"
    : x == 7
    ? "seven"
    : x == 8
    ? "eight"
    : x == 9
    ? "nine"
    : x;

console.log(literalValue);

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */
