define(function(require){
  var firebase = require("firebase");
  var templates = require("get-templates");
  var $ = require("jquery");

  var myFirebaseRef = new Firebase("https://jesse-trippin.firebaseio.com/");
  
  myFirebaseRef.child("location_types").on("value", function(snapshot) {
    var location_types = snapshot.val();

    //This will hold the complete DOM string of locations
    var populatedTemplate = templates.locationTpl(location_types);

    //Insert the DOM string into the appropriate element
    $("#location-type").html(populatedTemplate);
  });

  //Listen for when anything changes on the "trips" key
  myFirebaseRef.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val();

    // //This will hold the complete DOM string of trips
    // var populatedTemplate = templates.tripTpl(trips);

    // //Insert the DOM string into the appropriate element
    // $("#list-of-trips").html(populatedTemplate);

    var showTrips = function(data) {
      $("list-of-trips").html(templates.tripTpl(data));
    };
    showTrips(trips);

    // var showWhat;
        // $("#show-visited").click(function() {
    //   showWhat = "visited";
    // });
    // $("#show-wished").click(function() {
    //   showWhat = "wished";
    // });
    // $("#show-all").click(function() {
    //   showWhat = "all";
    // });

  });
});

      // var showTrips = function(data) {
      // };
      //   require(['hbs!../templates/list-trips'], function(tripTpl) {
      //     dom.html(songTemplate(data));
      //   });
      // };
      // showSongs(snapshot.val());

// $(document).on("click", "#artists li a", function() {
//         artistSelection = $(this).text();
//       });
//       $(document).on("click", "#albums li a", function() {
//         albumSelection = $(this).text();
//       });//grab artist or album selection

//       $('#filter').click(function() {
//         var filteredSongs = {};
//         filteredSongs.songs = {};
//         for(var i in snapshot.val().songs) {
//           if (artistSelection === snapshot.val().songs[i].artist) {
//             filteredSongs.songs[i] = snapshot.val().songs[i];
//           }
//           if (albumSelection === snapshot.val().songs[i].album) {
//             filteredSongs.songs[i] = snapshot.val().songs[i];
//           }
//         }
//         showSongs(filteredSongs);
//         $('.clear').show();//show the clear filter button
//         artistSelection = "";
//         albumSelection = "";
//       });//filter songs for artist selection