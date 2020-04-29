// CodeFlow Uebungen 13 - node.js

// No.1)

//console.log("Hello Node.js World!")

// No.2)

// var http = require("http");
// http.createServer(function (request, response) {

//    response.writeHead(200, {'Content-Type': 'text/plain'});
//    response.end('Hello Node.js World!\n');
// }).listen(8082);
// console.log('Server running at http://127.0.1.1:8082/');

// No.3)

// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();
// }).listen(7777);

// console.log('Server running at http://127.0.1.1:7777/')

// //No.xxxxx4
// var express = require('express');?????????????????

//No.5)

// var fs = require("fs");
// var data = fs.readFileSync('text.txt');

// console.log(data.toString());
// console.log("Exitus");

// var fs = require("fs");
// fs.readFile('text.txt', function (err, data) {
//    if (err) return console.error(err);
//    console.log(data.toString());
// });
// console.log("Exitus");

//No.6)

// var events = require('events');

// var eventEmitter = new events.EventEmitter();
// var connectHandler = function connected() {
// console.log('Verbunden mit EventEmitter');
   
// eventEmitter.emit('data_received');
// }
// eventEmitter.on('connection', connectHandler); //EventEmitter + connectHandler verbinden..
// eventEmitter.on('data_received', function(){

// console.log('data received succesfully.');});

// eventEmitter.emit('connection');

// console.log("Exitus");


// //No.7)

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// var listner1 = function listner1() {
//    console.log('listner1 is online...');
// }
// var listner2 = function listner2() {
//   console.log('listner2 is online...');
// }
// eventEmitter.addListener('connection', listner1);
// eventEmitter.on('connection', listner2);
// var eventListeners = require('events').EventEmitter.listenerCount
// (eventEmitter,'connection');
// console.log(eventListeners + " Listner(s) listening to my online connection event");

// eventEmitter.emit('connection');
// eventEmitter.removeListener('connection', listner1);
// console.log("Listner1 is offline...");
// console.log("Listner2 is offline...");

// eventEmitter.emit('connection');
// eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners + " Listner(s) listening to connection event");

//No.8)

buf = new Buffer(26);
let x =0;
for (var x = 0 ; x < 26 ; x++) {
  buf[x] = x + 97;
}
console.log( buf.toString('ascii'));       // abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // abcde
console.log( buf.toString('utf8',0,5));    // abcde
console.log( buf.toString(undefined,0,5));

//No.8-b)

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
} else if(result === 0) {
   console.log(buffer1 +" is same as " + buffer2);
} else {
   console.log(buffer1 +" comes after " + buffer2);
}