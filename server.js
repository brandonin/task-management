var express = require("express");
var app = express();
app.set('views', __dirname+ 'views');
app.set('view engine', 'ejs')

app.use(express.static(__dirname + "/static"))
app.listen(8888, function(){
	console.log("listening on port 8888");
})