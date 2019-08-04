const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
	// Problem 1: this a problem beecause the file has large text, this will make memory busy
	// fs.readFile('test-file.txt', (error, data) => {
	// 	if (error) return console.log(error);
	// 	res.end(data);
	// });

	// Solution 2: useing streams
	// const readable = fs.createReadStream('test-file.txt');
	// // data is event fires to get data as a chunks
	// readable.on('data', (chunk) => {
	// 	res.write(chunk);
	// });
	// // end is event fires when there is no data
	// readable.on('end', () => {
	// 	res.end();
	// });
	// // error is event fires when there is an error
	// readable.on('error', (err) => {
	// 	res.statusCode = 500;
	// 	console.log(err);
	// 	res.end('File Not Found');
	// });

	/* 
    Solution 3: there is problem in solution 2 where the read data from the file 
    is faster than write data over the internet and this called (backpressure) problem,
    to solve this problem we use pip method
    */
	const readable = fs.createReadStream('test-file.txt');
	// readableSource.pip(writeableDest)
	readable.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
	console.log('Server listen on port 8000');
});
