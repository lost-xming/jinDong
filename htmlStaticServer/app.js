var express = require("express");
var app = express();

app.use(express.static("/wwl-daWang/dist/"));
app.get("/", function(req, res) {
	res.send("Hello jinDong!");
});
var server = app.listen(8083, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);
});
