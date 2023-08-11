const http = require("http");
const express = require("express");
const app = express();

app.get("/",(req,res)=>{
  return res.send("Hello from home page" + " hey " + req.query.name + " And you are " + req.query.age);
});

app.get("/about",(req,res)=>{
  return res.send("Hello from about page");
});

const myServer = http.createServer(app);
myServer.listen(8000, () => console.log("Server started!"));
