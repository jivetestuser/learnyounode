var http =  require('http')

var URLs = [process.argv[2], process.argv[3], process.argv[4]]
var results = []
var count = 0

for (var i = 0; i < URLs.length; i++) {
	results[i] = ""
	http.get(URLs[i],function(response){
		var tempResult = ""
		response.on("data", function(data){
			tempResult = data.toString()
		})
		response.on("end", function(){
			results[i] = tempResult
			count = count + 1
		})
		response.on("error", function(error){
			console.log(error)
		})

		if (count == 3) {
			printResults()
		};
	})
};

function printResults(){
	for (var i = 0; i < URLs.length; i++) {
		console.log(results[i])
	};
}