
const http = require('http');
const currentDateTime = require("./date.js");
const uc = require('upper-case');
http
    .createServer((req,res) => {
        const message = uc.upperCase('hello world!');
          res.end(message + currentDateTime.myDateTime());
        })
        .listen(8080);
        console.log('application running on port 8080');