var express = require("express");
var app     = express();
var path    = require("path");

app.use ("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));
app.use("/img", express.static("public/img"));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

app.get('/portfolio',function(req,res){
  res.sendFile(path.join(__dirname+'/portfolio.html'));
});
app.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/contact.html'));
});


app.listen(3000);

console.log("Running at Port 3000");
