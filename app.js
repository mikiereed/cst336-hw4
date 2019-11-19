const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"))
//routes
app.get("/", function(req, res) {
   res.render("index.html");
});

app.get("/windows", function(req, res) {
   res.render("windows.html");
});

app.get("/mac", function(req, res) {
   res.render("mac.html");
});

app.get("/linux", function(req, res) {
   res.render("linux.html");
});

//server listener
app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Express server is running....");
});
