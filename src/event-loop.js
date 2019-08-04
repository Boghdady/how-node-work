const fs = require('fs');
const crypto = require('crypto');

const startTime = Date.now();

// control in number of threads in thread pool
// process.env.UV_THREADPOOL_SIZE = 1;

// 3- expired timer callback
setTimeout(() => console.log('Timer 1 finished'), 0);

// 5- setImmediate callback
setImmediate(() => console.log('immediate 1 finished'));

// 4- I/O polling and callback
fs.readFile('test-file.txt', 'utf-8', () => console.log('I/O finished'));

// 1- top level code
console.log('Hello from the top level code');

// 2- nextTick running after top level code
process.nextTick(() => console.log('process.nextTick'));

// heavy task that will offloaded to pool thread (pool thread add by default 4 threads but i can increase it)
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
	console.log(Date.now() - startTime, 'password encrypted');
});
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
	console.log(Date.now() - startTime, 'password encrypted');
});
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
	console.log(Date.now() - startTime, 'password encrypted');
});
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
	console.log(Date.now() - startTime, 'password encrypted');
});
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
	console.log(Date.now() - startTime, 'password encrypted');
});
