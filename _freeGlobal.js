import checkGlobal from './_checkGlobal.js';

/** Detect free variable `global` from Node.js. */
var freeGlobal = checkGlobal(typeof global == 'object' && global);

export default freeGlobal;
