var ref = new Firebase('https://ducky.firebaseio.com/users/ducky')

ref.on("value", function(snapshot){
	console.log(JSON.stringify(snapshot.val()),1)
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

ref.on("child_added", function(snapshot) {
	editor.setValue(snapshot.val().content,1)
	editor.clearSelection();
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
ref.on("child_changed", function(snapshot) {
	editor.setValue(snapshot.val().content,1);
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
