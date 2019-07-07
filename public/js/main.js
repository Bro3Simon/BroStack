//On small screens clicking a link in the main nav clicks the nav toggler, minimizing the menu
$(".click").click(function () {
  $(".navbar-toggler").click();
  return false;
});

//Scroll reveal animations
window.sr = ScrollReveal();
sr.reveal('#myName', {
  duration: 2000,
  delay: 1000,
  origin: 'bottom'
});
sr.reveal('#Iam', {
  duration: 4000,
  delay: 2000,
  origin: 'bottom',
  distance: '50%',
  rotate: {
    x: 90
  }
});
sr.reveal('#profileSummary, #developerRelated, #analysisRelated, #projects h2, #projectNav ul, #photography h2, #photography p, #photography .row, #contact h2, #contact form', {
  duration: 2000,
  viewFactor: 0.2,
  origin: 'bottom',
  scale: .3,
});

// Smooth Scroll 
// Select Navbar A elements
$('.navbar a').click(function () {
  // Store the href attribute value of whatever link is clicked
  var href = $.attr(this, 'href');
  // Select the html and body and animate them
  $('html, body').animate({
    // Scroll to the top of the area that has that href as an ID  
    scrollTop: $(href).offset().top
    // Set duration to 2 secs
  }, 2000);
  return false;
});

$('#searchFlickrForm').submit(function (event) {

  // stop the form from making us leave the page
  event.preventDefault();

  // Ajax Variables
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  var searchFLickrField = $("#flickrSearch").val();
  var flickrOptions = {
    tags: searchFLickrField,
    format: "json"
  };    
  // Ajax Variables

  function displayPhotos(data) {
    var photoHTML = "";
    $.each(data.items, function (i, photo) {
      photoHTML += '<div class="d-flex justify-content-center align-items-center m-2 col-5 col-lg-2">';
      photoHTML += '<a href="' + photo.link + '" target="_blank" rel="noopener">';
      photoHTML += '<img class="img-fluid" src="' + photo.media.m + '" alt="'+photo.title +'"></a></div>';
      console.log(photo.title);
    }); // end each
    $('#flickrPhotos').html(photoHTML);
  }
  $.getJSON(flickerAPI, flickrOptions, displayPhotos);

});