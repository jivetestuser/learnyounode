var fs = require('fs')
var path = require('path')

module.exports =  filterFiles

function filterFiles(dirName, ext, callback){
	fs.readdir(dirName, function(err, data){
		if (err)
			return callback(err)
		var dataArray = data.filter(function (file){
			return (path.extname(file) === '.' + ext)
		})
		callback(null, dataArray)
	})
}