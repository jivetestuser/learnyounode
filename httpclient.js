var http = require('http')
var URL = process.argv[2]

http.get(URL, function(res){
	res.setEncoding("utf8")
	res.on("data", function(data){
		console.log(data)
	})
})