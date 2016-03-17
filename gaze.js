var Gaze = require('gaze').Gaze;
var Firebase = require('firebase');
var fs = require('fs');
var ref = new Firebase('https://ducky.firebaseio.com/users')
var gaze = new Gaze('**/*');
var path = require('path');

var rootPath = path.join(__dirname, "../");
// Files have all started watching
gaze.on('ready', function(watcher) { });

// A file has been added/changed/deleted has occurred
gaze.on('all', function(event, filepath) {
	console.log(event)
	var url= filepath.split(rootPath).join('').split('.')
	console.log(url)
	fs.readFile(filepath, 'utf-8', function (err, data) {
		ref.child(url[0]).set({type:url[1], content:data})
	});
});

