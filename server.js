var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;



app.use ("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));
app.use ("/img", express.static("public/img"));


app.get("/home" , function(req, res){
    res.sendFile(process.cwd() + "/views/home.html");
});

app.listen(PORT, function(){
  console.log("Listening on port %s", PORT);

});
