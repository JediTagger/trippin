define(function(require){
  var firebase = require("firebase");
  var templates = require("get-templates");
  var $ = require("jquery");

  var myFirebaseRef = new Firebase("https://jesse-trippin.firebaseio.com/");

  //Listen for when anythign changes ont he "trips" key
  myFirebaseRef.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val();

    //This will hold the complete DOM string of trips
    var populatedTemplate = templates.tripTpl(trips);

    //Insert the DOM string into the appropriate element
    $("#list-of-trips").html(populatedTemplate);
  });
});