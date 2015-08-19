define(function(require){
  var $ = require("jquery");

  var visited = false;

  $("#visited").click(function() {
    visited = true;
  });

  $("#wish-list").click(function() {
    visited = false;
  });

  $("#add-location").click(function() {
    var newLocation = {
      location: $("#title").val(),
      location_type: $("#location").val() || "city",
      visited: visited
    };

    console.log("newLocation is: ", newLocation);

    $.ajax({
      url: "https://jesse-trippin.firebaseio.com/trips.json",
      method: "POST",
      data: JSON.stringify(newLocation)
    })
    .done(function(newData) {
      console.log("newData is: ", newData);
    })
    .fail(function(xhr, status, error) {
      console.log("errer is: ", error);
    });

  });
});