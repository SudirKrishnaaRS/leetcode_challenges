/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    // Should use let instead of var
    // let: block scope
    // var: function scope
    let count = n;
    return function() {
       return count++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */