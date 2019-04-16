//On small screens clicking a link in the main nav clicks the nav toggler, minimizing the menu
$(".click").click(function () {
  $(".navbar-toggler").click();
  return false;
});
//On small screens clicking a link in the main nav clicks the nav toggler, minimizing the menu


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
//Scroll reveal animations



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
// Smooth Scroll 


//Toggle Project Display
$('#projectNav button').click(function () {

  var projectButton = $(this);
  //adds active class to the button that was clicked
  $(projectButton).toggleClass('active');
  //adds active class to the button that was clicked

  //stores the index of the project button that was clicked and adds one to offset different indexing schemes
  var projectIndex = $(projectButton).parent().index() + 1;
  //stores the index of the project button that was clicked and adds one to offset different indexing schemes

  //slide toggle associated project of the button that was clicked
  $("#projectDisplay > div:nth-child(" + projectIndex + ")").slideToggle(

    //callback function executed after slide toggle finishes
    function () {

      //if  associated project is displayed scroll to it by clicking the child link of the project button
      if ($("#projectDisplay > div:nth-child(" + projectIndex + ")").css("display") === "block") {
        $(projectButton).children()[0].click();
      }
      //if  associated project is displayed scroll to it by clicking the child link of the project button

      //if associted project isn't displayed scroll to top of project section
      else {
        $('#projectLink').click();
      }
      //if associted project isn't displayed scroll to top of project section


    }
    //callback function executed after slide toggle finishes
  );
  //slide toggle associated project of the button that was clicked

  //cycle through project display sibling elements
  $("#projectDisplay > div:nth-child(" + projectIndex + ")").siblings().each(function () {

    //if displayed
    if ($(this).css("display") === "block") {
      $(this).slideToggle();

      //cycle through the project buttons
      $("#projectNav > ul").children().each(function () {

        // if a button has a matching ID of the button that was clicked and has an active class toggle it
        if ($(this).children().attr("id") != $(projectButton).attr("id") && $(this).children().hasClass("active")) {
          $(this).children().toggleClass("active");
        };
        // if a button has a matching ID of the button that was clicked and has an active class toggle it

      });
      //cycle through the project buttons

    };
    //if displayed
  });
  //cycle through project display sibling elements 

});
//Toggle Project Display

//Close Project by clicking red x
//target each element with the class close-project
$(".close-project").each(function () {
  $(this).click(function () {

    //store the index of the project this x is a part of and add one to offset different indexing schemes
    var projectButtonIndex = $(this).parent().parent().index() + 1;
    //store the index of the project this x is a part of and add one to offset different indexing schemes

    //click associated button of the project of the x that was clicked 
    $("#projectNav > ul li:nth-child(" + projectButtonIndex + ") button").click();
    //click associated button of the project of the x that was clicked 

  });
});
//target each element with the class close-project
//Close Project by clicking red x

//Random Quote Generator Project
const images = [
  { src: 'images/coffee.jpg', alt: 'A coffee cup overlooking a rainforest' },
  { src: 'images/fishing.jpg', alt: 'A silhouette of a man fishing with an orange sky' },
  { src: 'images/roof.jpg', alt: 'A red geometric roof' },
  { src: 'images/ducks.jpg', alt: 'Ducks swimming in the National Mall in DC' }
];
const quotes = [
  { author: "~ St. Jerome", quote: "Good, better, best. Never let it rest. 'Til your good is better and your better is best." },
  { author: "~ Nelson Mandela", quote: "It always seems impossible until it's done." },
  { author: "~ Rabindranath Tagore", quote: "You can't cross the sea merely by standing and staring at the water." },
  { author: "~Jim Rohn", quote: "Motivation is what gets you started. Habit is what keeps you going." },
  { author: "~Napoleon Hill", quote: "Remember that your real wealth can be measured not by what you have, but by what you are." },
  { author: "~John Wooden", quote: "Ability may get you to the top, but it takes character to keep you there." },
  { author: "~Brian Tracy", quote: "It doesn’t matter where you are coming from. All that matters is where you are going." },
  { author: "~Napoleon Hill", quote: "Patience, persistence and perspiration make an unbeatable combination for success." },
  { author: "~Tony Robbins", quote: "Setting goals is the first step in turning the invisible into the visible." },
  { author: "~Willie Nelson", quote: "When I started counting my blessings, my whole life turned around." },
  { author: "~Albert Einstein", quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle." },
  { author: "~Herman Cain", quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." },
  { author: "~Jack Canfield", quote: "Taking the first step is the difference between actually pursuing your passion and just dreaming about it." },
  { author: "~Wayne Dyer", quote: "Change the way you look at things and the things you look at change." },
  { author: "~Paulo Coelho", quote: "The act of discovering who we are will force us to accept that we can go further than we think." },
  { author: "~Robert H. Schuller", quote: "What would you attempt to do if you knew you could not fail?" },
  { author: "~Maya Angelou", quote: "If you don’t like something, change it. If you can’t change it, change your attitude." },
  { author: "~Walt Disney", quote: "All our dreams can come true, if we have the courage to pursue them." },
  { author: "~Jim Rohn", quote: "Happiness is not something you postpone for the future; it is something you design for the present." },
  { author: "~Zig Ziglar", quote: "You can have everything in life you want, if you will just help other people get what they want" }
];
$('#quoteNew').click(getQuote);

// Get a random index of the images array
function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
};

// Get a random index of the quotes array
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Main quote generator function calls the two random index functions sets the inner HTML of quoteText and quoteAuthor, sets the src for quoteCardImage and fades out and in for each new quote
function getQuote() {
  let RandomImage = getRandomImage();
  let randomQuote = getRandomQuote();

  $('.fade-me').fadeOut(400, function () {
    $('#quoteText').html(randomQuote.quote);
    $('#quoteAuthor').html(randomQuote.author);
    $('#quoteCardImage').attr('src', RandomImage.src);
    $('#quoteCardImage').attr('alt', RandomImage.alt);
  });

  $('.fade-me').fadeIn();
};

//Number Guesser
var userNumber = 0;
var computerGuess = 0;
var prevComputerGuesses = [];
var computerNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = 0;
var prevUserGuesses = [];
var counter = 0;

//Submit Number Button
$("#submitNumber").click(function () {

  // Sets the variable usernumber to the result of checkNumberInput and converts it to a number type
  userNumber = parseInt(checkNumberInput("#userNumber", "#validateNumber", 1000));
  // Sets the variable usernumber to the result of checkNumberInput and converts it to a number type

  if (userNumber !== 0) {

    // While loop to keep generating random numbers until computer guess is equal to user number
    while (computerGuess !== userNumber) {

      // Checks to see if the random computer guess was guessed before, if it was, it generates a new guess
      if (prevComputerGuesses.includes(computerGuess)) {
        computerGuess = Math.floor(Math.random() * 1000) + 1;
      }
      // Checks to see if the random computer guess was guessed before, if it was, it generates a new guess

      // If the random computer guess was never guessed before, it adds the number to the array, increases the counter by 1 and guesses again
      else {
        prevComputerGuesses.push(computerGuess);
        counter += 1;
        computerGuess = Math.floor(Math.random() * 1000) + 1;
      }
      // If the random computer guess was never guessed before, it adds the number to the array, increases the counter by 1 and guesses again

    }
    // While loop to keep generating random numbers until computer guess is equal to user number

    //Set, Display and Hide the correct elements 
    $("#pickNumber").addClass("hidden");
    $("#pickNumberResults").html("<p>Was your number <b>" + userNumber + "</b>? </p>" + "<p>It only took me <b>" + counter + "</b> guesses!</p>");
    $("#pickNumberResults").removeClass("hidden");
    $("#submitNumber").addClass("hidden");
    $("#next").removeClass("hidden");
    //Set, Display and Hide the correct elements 

  }
});

//Next Button
//Set, Display and Hide the correct elements 
$("#next").click(function () {
  $("#pickNumberResults").addClass("hidden");
  $("#guessNumber").removeClass("hidden");
  $("#next").addClass("hidden");
  $("#submitGuess").removeClass("hidden");
  $("#userGuess").focus();
});
//Set, Display and Hide the correct elements 

//Submit Guess Button
$("#submitGuess").click(function () {

  // Sets the variable userGuess to the result of checkNumberInput and converts it to a number type
  userGuess = parseInt(checkNumberInput("#userGuess", "#validateGuess", 10));
  // Sets the variable userGuess to the result of checkNumberInput and converts it to a number type

  // //If a valid guess has been entered remove bottom margin from the input userguess
  if (userGuess !== 0) {
    $("#userGuess").removeClass("mb-3");
  }
  // //If a valid guess has been entered remove bottom margin from the input userguess

  //Wrong guess entered
  if (userGuess !== 0 && userGuess !== computerNumber) {

    //If wrong guess has never been guessed before store value in array and sort
    if (!prevUserGuesses.includes(userGuess)) {
      prevUserGuesses.push(userGuess);
      prevUserGuesses.sort(function (a, b) { return a - b });
    }

    //1st guess
    //Set and display results
    if ($("#guessNumberResults").hasClass("hidden")) {
      $("#guessNumberResults").removeClass("hidden");
      setGuessNumberResults();
    }
    //Set and display elements
    //1st guess


    //2nd+ guess
    //fade elements out and in
    else {
      $("#guessNumberResults").fadeOut(setGuessNumberResults);
      $("#guessNumberResults").fadeIn();
    }
    //fade elements out and in
    //2nd+ guess

    //Clear input and focus on it
    $("#userGuess").val("");
    $("#userGuess").focus();
    //Clear input and focus on it

  }
  //Wrong guess entered

  //Correct guess entered
  else if (userGuess !== 0 && userGuess == computerNumber) {
    $("#guessNumberResults").html("<p>That is correct!</p>");
    $("#guessNumberResults").removeClass("hidden");
    $("#submitGuess").addClass("hidden");
    $("#playAgain").removeClass("hidden");
  }
  //Correct guess entered

});
//Submit Guess Button

//Play Again Button, reset elements and variables to original state
$("#playAgain").click(function () {
  $("#playAgain").addClass("hidden");
  $("#submitNumber").removeClass("hidden");
  $("#pickNumber").removeClass("hidden");
  $("#guessNumber").addClass("hidden");
  $("#guessNumberResults").addClass("hidden");
  $("#userNumber").val("");
  $("#userNumber").focus();
  $("#userGuess").val("");
  $("#userGuess").addClass("mb-3");
  computerNumber = Math.floor(Math.random() * 10) + 1;
  counter = 0;
  prevComputerGuesses = [];
  computerGuess = 0;
  prevUserGuesses = [];
});

function setGuessNumberResults() {
  $("#guessNumberResults").html("<small>Sorry, that is incorrect. Try again!</small><br><small> Numbers you have tried: " + prevUserGuesses + "</small>");
}

//Validates input is within range, if not displays error
function checkNumberInput(input, validateStatement, upper) {

  //Input within range
  if ($(input).val() >= 1 && $(input).val() <= upper) {

    //Displayed error message is hidden because a valid number was entered
    if (!$(validateStatement).hasClass("hidden")) {
      $(validateStatement).addClass("hidden");
      return $(input).val();
    }
    //Displayed error message is hidden because a valid number was entered

    return $(input).val();
  }
  //Input within range

  //Input not within range
  else {

    //Displayed error message is faded out and in
    if (!$(validateStatement).hasClass("hidden")) {
      $(validateStatement).fadeOut();
      $(validateStatement).fadeIn();
    }
    //Displayed error message is faded out and in

    //Display error message
    else {
      $(validateStatement).removeClass("hidden");
    }
    //Display error message

    $(input).focus();
    return 0;
  }
  //Input not within range

}
//Validates input is within range, if not displays error

// Search Flickr
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

}); // end click

// Search Flickr