define(function(require){
  var firebase = require("firebase");

  var myFirebaseRef = new Firebase("https://jesse-trippin.firebaseio.com/");

  //Listen for when anythign changes ont he "trips" key
  myFirebaseRef.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val();

    console.log(trips);
  });
});