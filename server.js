var http = require("http"); 
var express =  require("express");
var app = express();
app.use(express.bodyParser());
app.use(app.router);
app.get("/index",function(req, res){
res.sendfile("./index.html");
});
app.post("/index",function(req, res){
var username=req.body.username;
var password=req.body.password;
res.send("Korisničko ime je:"+username+" i šifra: "+password);
});
http.createServer(app).listen(3000);