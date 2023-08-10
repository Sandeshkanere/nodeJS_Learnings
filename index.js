const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}:${req.url} New request received!\n`;
  fs.appendFile("./log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("home page");
        break;
      case "/about":
        res.end("about page");
        break;
      case "/contact":
        res.end("contact page");
        break;

      default:
        res.end("404 not found");
    }
  });
});

myServer.listen(8000, () => console.log("Server started!"));
