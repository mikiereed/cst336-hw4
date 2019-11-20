const faker = require("faker");
const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"))
//routes
app.get("/", function(req, res) {
   res.render("index.html", { "fakeMultiParagraphData": faker.lorem.paragraphs() });
});

app.get("/windows", function(req, res) {
   res.render("windows.html", { "fakeParagraphData": faker.lorem.paragraph() });
});

app.get("/mac", function(req, res) {
   res.render("mac.html", { "fakeParagraphData": faker.lorem.paragraph() });
});

app.get("/linux", function(req, res) {
   res.render("linux.html", { "fakeParagraphData": faker.lorem.paragraph() });
});

//server listener
app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Express server is running....");
});
