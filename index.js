function receivesAFunction(cb) {
  return cb();
}

function returnsANamedFunction() {
  return function heyThere() {
    return "returned a name function!";
  }
}

function returnsAnAnonymousFunction() {
  return function () { return "returned an anonymous function!"}
}