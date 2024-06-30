// import getPort from 'get-port';
//const getPort = require('get-port');

//console.log(await getPort());
//console.log(await getPort({port: 3000}));

//import getPort from 'get-port';

const getPort = require('get-port');

const port = [3000, 3001, 3002];

console.log(await getPort({port}));
//=> 3000

console.log(await getPort({port}));
//=> 3001

// If you want the results to be unaffected by previous calls, clear the cache.
clearLockedPorts();

console.log(await getPort({port}));
//=> 3000
