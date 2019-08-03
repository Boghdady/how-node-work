const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
	constructor() {
		super();
	}
}

const myEmitter = new Sales();

// listen to event
myEmitter.on('newSale', () => {
	console.log('There was a new sale!');
});

myEmitter.on('newSale', () => {
	console.log('Customer name is : ahmed boghdady');
});

// listen to event
myEmitter.on('newSale', (stock) => {
	console.log(`Threr are now ${stock} items in the stock`);
});

// add event like user click on button
myEmitter.emit('newSale', 9);

//*****---------emit event with arguments----------******************//

// myEmitter.emit('newSale', 9);

const server = http.createServer();

server.on('request', (req, res) => {
	console.log(req.url);
	console.log('Request recieved');
	res.end('Request recieved');
});

server.on('request', (req, res) => {
	console.log('Another request');
});

server.on('close', () => {
	console.log('srver close');
});

server.listen(8000, '127.0.0.1', () => {
	console.log('Server listen on port 8000');
});
