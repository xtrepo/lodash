define(['./_checkGlobal'], function(checkGlobal) {

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = checkGlobal(typeof global == 'object' && global);

  return freeGlobal;
});
