#!/usr/bin/node
'use strict';
let const = process.argv[2];
function factorial (const) {
  if (isNaN(const) || const === 1) {
    return (1);
  } else {
    return (const * factorial(const- 1));
  }
}
console.log(factorial(parseInt(const)));
