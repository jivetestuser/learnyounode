var http = require('http')
var URL = process.argv[2]

http.get(URL, function(response){
	var result = ""
	response.on("data", function(data){
		result += data
	})
	response.on("end", function(){
		console.log(result.length)
		console.log(result)
	})
})