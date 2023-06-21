
const http = require('http');
const currentDateTime = require("./date.js");
http
    .createServer((req,res) => {
          res.end('hello world!' + currentDateTime.myDateTime());
        })
        .listen(8080);
        console.log('application running on port 8080');