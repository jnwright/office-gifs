var img_url;
var img_height;
var img_width;

var newGif = () =>
  $.ajax({
    async: false,
    url:
      "https://api.giphy.com/v1/gifs/random?api_key=0q0OIpukSxuKvThOHykOAH0SQD2QKYrg&tag=theoffice&rating=pg-13",
    type: "GET",
    success: function(result) {
      img_url = result.data.image_original_url;
      img_height = result.data.image_height;
      img_width = result.data.image_width;
      console.log(img_url); // works!
      console.log(img_height); // works
    }
  });

//populate first gif
newGif();
$(document).ready(function() {
  $("#gif").html('<img src="' + img_url + '"/>');
  $("#url").html("<p><h2>URL for embedding</h2> " + img_url + "</p>");
});

//populate new gifs on click
$(document).on("click", "#populate", function(e) {
  newGif();
  //show if meets specifications
  if (img_height <= 500 && img_width <= 500) {
    $("#gif").html('<img src="' + img_url + '"/>');
    $("#url").html("<p><h2>URL for embedding</h2> " + img_url + "</p>");
  } else {
    //reruns function if doesn't meet specifications
    newGif();
  }
});
