//Bottom-Up - How you can build solution for one case off of the previous case
//Top-Down- How you can divide the problem for case N into sub problem
//Half and Half (Binary Search, Merge Sort) - Divide data in 2 sets
//Dynamic Programming - Find recursive algorithm, find over lapping sub problems, cache those results for future recursive calls.

//Recursive Solution O(2^n)
var Fib = function (num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return Fib(n-1) + Fib(n-2);
};


//Iterative Solution 
var Fib = function(num) {
  var prev1=1;
  var prev2=1; 
  if (num === 0) {
      return 0;
  }
  if (num === 1 || num === 2) {
    return 1;
  } 
  for (var i=3; i<=num; i++) {
    var a = prev1;
    prev1 += prev2;
    prev2 = a;
  }
  return prev1;
}


//Memo Solution
var Fib = function() {
  var memo = {};
  return function f(num) {
    var value;
    if (num in memo) {
      return memo[num]
    } else {
      if(num === 0 || num === 1 ) {
        return num;
      } else {
        value = f(num-1) + f(num-2)
        memo[num] = value;
        return value;
      };
    };
  };
};

//nth way to climb stairs with 1,2,3 steps
var waysToClimb = function (num) {
  var result;
  if (num < 0) {
    return 0;
  };
  if (num === 0) {
    return 1;
  } else {
    return waysToClimb(num-1) + waysToClimb(num-2) + waysToClimb(num-3)
  };
};



