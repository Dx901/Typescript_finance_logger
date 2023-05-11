"use strict";
let greet;
greet = () => {
    console.log("hello!!");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    // A typescript function returns a void value
    // when we do not return something
    // A complete lack of return value
    console.log(c);
};
add(6, 11);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
