import React, { Component } from 'react';
import $ from 'jquery';

const BrostackContext = React.createContext();

export class Provider extends Component {
    SkillCategories = [
        {
            id: "developerRelated",
            title: "Developer Related",
            icons: [
                "fa fa-code fa-2x text-warning mr-2",
                "fa fa-database fa-2x text-warning ml-2"
            ],
            subCategories: [{
                id: "devConceptsTab",
                href: "#devConcepts",
                control: "devConcepts",
                text: "Concepts",
                items: [
                    <abbr title="Software Development Life Cycle">SDLC</abbr>,
                    <ul className="list-unstyled text-secondary d-flex justify-content-around">
                        <li>Waterfall</li>
                        <li>Incremental <abbr title="Software Development Life Cycle">SDLC</abbr></li>
                        <li>Agile</li>
                        <li>Extreme Programming</li>
                    </ul>,
                    "Version Control",
                    <abbr title="Content Management Websites">CMS</abbr>,
                    "Responsive Websites",
                    "Web Accessibility Compliant Websites",
                    "Database Design",
                    <abbr title="Entity Relationship Diagrams">ERD</abbr>,
                    "Database Management"
                ]
            },
            {
                id: "devLanguagesTab",
                href: "#devLanguages",
                control: "devLanguages",
                text: "Languages",
                items: [
                    <abbr title="Hypertext Markup Language">HTML</abbr>,
                    <abbr title="Cascading Tile Sheets">CSS</abbr>,
                    <abbr title="Syntactically Awesome StyleSheets">Sass</abbr>,
                    "Bootstrap",
                    "Java",
                    "JavaScript",
                    "jQuery",
                    "React",
                    "Ajax",
                    "Node JS",
                    "Visual Basic .NET",
                    "PHP",
                    "SQL"
                ]
            },
            {
                id: "devToolsTab",
                href: "#devTools",
                control: "devTools",
                text: "Tools",
                items: [
                    "Server Client FTP",
                    "Joomla",
                    "Wordpress",
                    "Toroise SVN",
                    "Git & GitHub",
                    "Visual Studio",
                    "Photoshop",
                    "MySQL Workbench",
                    "Heidi SQL",
                    "PHP My Admin"
                ]
            }
            ]
        },
        {
            id: "analysisRelated",
            title: "Analysis Related",
            icons: [
                "fas fa-project-diagram fa-2x text-warning"
            ],
            subCategories: [{
                id: "analysisConceptsTab",
                href: "#analysisConcepts",
                control: "analysisConcepts",
                text: "Concepts",
                items: [
                    <abbr title="Unified Modeling Language">UML</abbr>,
                    "Swimlane Modeling",
                    "Technical Writing and Verbal Communication",
                    "Process Improvement",
                    <abbr title="Information Systems Audit and Control">ISACA</abbr>,
                    "Cobit 5",
                    "Network Design and Troubleshooting"

                ]
            },
            {
                id: "analysisToolsTab",
                href: "#analysisTools",
                control: "analysisTools",
                text: "Concepts",
                items: [
                    "Microsoft Visio",
                    "Tableau",
                    "MS Office Suite",
                    "(Word, Excel, Access, Outlook)",
                    "Google Analytics"
                ]
            }
            ]
        }
    ];

    Projects = [
        {
            nav: {
                id: "quoteDisplay",
                button: "Quote Generator",
                link: "quoteLink",
                href: "#quoteDisplay"
            }
        },
        {
            nav: {
                id: "numberGuesserDisplay",
                button: "Number Guesser",
                link: "numberLink",
                href: "#numberGuesserDisplay"
            }
        },
        {
            nav: {
                id: "buttonAnimationDisplay",
                button: "Button Animation",
                link: "buttonAnimationLink",
                href: "#buttonAnimationDisplay"
            }
        },
        {
            nav: {
                id: "searchFlickrDisplay",
                button: "Search Flickr",
                link: "searchFlickrLink",
                href: "#searchFlickrDisplay"
            }
        },
        {
            nav: {
                id: "scoreboardDisplay",
                button: "Scoreboard",
                link: "scoreboardLink",
                href: "#scoreboardDisplay"
            }
        },
        {
            nav: {
                id: "clientDisplay",
                button: "Client Work",
                link: "clientLink",
                href: "#clientDisplay"
            }
        }
    ];

    state = {
        players: [
            {
                name: "Guil",
                score: 0,
                id: 1
            },
            {
                name: "Treasure",
                score: 0,
                id: 2
            },
            {
                name: "Ashley",
                score: 0,
                id: 3
            },
            {
                name: "James",
                score: 0,
                id: 4
            }
        ]
    };

    QuotGeneratorData = {
        images: [
            { src: 'images/coffee.jpg', alt: 'A coffee cup overlooking a rainforest' },
            { src: 'images/fishing.jpg', alt: 'A silhouette of a man fishing with an orange sky' },
            { src: 'images/roof.jpg', alt: 'A red geometric roof' },
            { src: 'images/ducks.jpg', alt: 'Ducks swimming in the National Mall in DC' }
        ],
        quotes: [
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
        ]
    }

    NumberGuesserData = {
        userNumber: 0,
        computerGuess: 0,
        prevComputerGuesses: [],
        computerNumber: Math.floor(Math.random() * 10) + 1,
        userGuess: 0,
        prevUserGuesses: [],
        counter: 0
    }

    // player id counter
    prevPlayerId = 4;

    handleScoreChange = (index, delta) => {
        this.setState(prevState => {
            return {
                score: prevState.players[index].score += delta
            };
        });
    }

    handleAddPlayer = (name) => {
        this.setState(prevState => {
            return {
                players: [
                    ...prevState.players,
                    {
                        name,
                        score: 0,
                        id: this.prevPlayerId += 1
                    }
                ]
            };

        });
    }

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
        });
    }

    getHighScore = () => {
        const scores = this.state.players.map(player => player.score);
        const highScore = Math.max(...scores);
        if (highScore) {
            return highScore;
        }
    }

    toggleProjectDisplay = (target) => {
        var projectButton = $(target);
        $(projectButton).toggleClass('active');

        // stores the index of the project button that was clicked and adds one to offset different indexing schemes
        var projectIndex = $(projectButton).parent().index() + 1;

        //slide toggle associated project of the button that was clicked
        $("#projectDisplay > div:nth-child(" + projectIndex + ")").slideToggle(

            //callback function executed after slide toggle finishes
            function () {

                //if  associated project is displayed scroll to it by clicking the child link of the project button
                if ($("#projectDisplay > div:nth-child(" + projectIndex + ")").css("display") === "block") {
                    $(projectButton).children()[0].click();
                }

                //if associted project isn't displayed scroll to top of project section
                else {

                    $('#quoteDisplay').children()[1].click();
                }
            }
        );

        //cycle through project display sibling elements
        $("#projectDisplay > div:nth-child(" + projectIndex + ")").siblings().each(function () {

            //if displayed
            if ($(this).css("display") === "block") {
                $(this).slideToggle();

                //cycle through the project buttons
                $("#projectNav > ul").children().each(function () {

                    // if a button has a matching ID of the button that was clicked and has an active class toggle it
                    if ($(this).children().attr("id") !== $(projectButton).attr("id") && $(this).children().hasClass("active")) {
                        $(this).children().toggleClass("active");
                    };
                });
            };
        });
    }

    //Close Project Display by clicking red x
    closeProjectDisplay = (target) => {
        //store the index of the project this x is a part of and add one to offset different indexing schemes
        var projectButtonIndex = $(target).parent().parent().index() + 1;
        //click associated button of the project of the x that was clicked
        $("#projectNav > ul li:nth-child(" + projectButtonIndex + ") button").click();
    }

    //Random Quote Generator Project
    getQuote = () => {
        const QuotGeneratorData = this.QuotGeneratorData;

        // Get a random index of the images array
        function getRandomImage() {
            return QuotGeneratorData.images[Math.floor(Math.random() * QuotGeneratorData.images.length)];
        };

        // Get a random index of the quotes array
        function getRandomQuote() {
            return QuotGeneratorData.quotes[Math.floor(Math.random() * QuotGeneratorData.quotes.length)];
        }

        // Main quote generator function calls the two random index functions sets the inner HTML of quoteText and quoteAuthor, sets the src for quoteCardImage and fades out and in for each new quote

        let RandomImage = getRandomImage();
        let randomQuote = getRandomQuote();

        $('.fade-me').fadeOut(400, function () {
            $('#quoteText').html(randomQuote.quote);
            $('#quoteAuthor').html(randomQuote.author);
            $('#quoteCardImage').attr('src', RandomImage.src);
            $('#quoteCardImage').attr('alt', RandomImage.alt);
        });

        $('.fade-me').fadeIn();

    }

    handleNumberGuesser = (target) => {
        const NumberGuesserData = this.NumberGuesserData;

        if (target.id === "submitNumber") {
            submitNumber();
        }
        else if (target.id === "next") {
            next();
        }
        else if (target.id === "submitGuess") {
            submitGuess();
        }
        else if (target.id === "playAgain") {
            playAgain();
        }

        function submitNumber() {

            // Sets the variable usernumber to the result of checkNumberInput and converts it to a number type
            NumberGuesserData.userNumber = parseInt(checkNumberInput("#userNumber", "#validateNumber", 1000));

            if (NumberGuesserData.userNumber !== 0) {

                // While loop to keep generating random numbers until computer guess is equal to user number
                while (NumberGuesserData.computerGuess !== NumberGuesserData.userNumber) {

                    // Checks to see if the random computer guess was guessed before, if it was, it generates a new guess
                    if (NumberGuesserData.prevComputerGuesses.includes(NumberGuesserData.computerGuess)) {
                        NumberGuesserData.computerGuess = Math.floor(Math.random() * 1000) + 1;
                    }

                    // If the random computer guess was never guessed before, it adds the number to the array, increases the counter by 1 and guesses again
                    else {
                        NumberGuesserData.prevComputerGuesses.push(NumberGuesserData.computerGuess);
                        NumberGuesserData.counter += 1;
                        NumberGuesserData.computerGuess = Math.floor(Math.random() * 1000) + 1;
                    }

                }

                //Set, Display and Hide the correct elements 
                $("#pickNumber").addClass("hidden");
                $("#pickNumberResults").html(`<p>Was your number <b> ${NumberGuesserData.userNumber} </b>? </p> <p>It only took me <b> ${NumberGuesserData.counter} </b> guesses!</p>`);
                $("#pickNumberResults").removeClass("hidden");
                $("#submitNumber").addClass("hidden");
                $("#next").removeClass("hidden");

            }
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

                return $(input).val();
            }

            //Input not within range
            else {

                //Displayed error message is faded out and in
                if (!$(validateStatement).hasClass("hidden")) {
                    $(validateStatement).fadeOut();
                    $(validateStatement).fadeIn();
                }

                //Display error message
                else {
                    $(validateStatement).removeClass("hidden");
                }

                $(input).focus();
                return 0;
            }

        }

        //Next Button
        //Set, Display and Hide the correct elements 
        function next() {
            $("#pickNumberResults").addClass("hidden");
            $("#guessNumber").removeClass("hidden");
            $("#next").addClass("hidden");
            $("#submitGuess").removeClass("hidden");
            $("#userGuess").focus();
        }

        //Submit Guess Button
        function submitGuess() {

            // Sets the variable userGuess to the result of checkNumberInput and converts it to a number type
            NumberGuesserData.userGuess = parseInt(checkNumberInput("#userGuess", "#validateGuess", 10));
            // Sets the variable userGuess to the result of checkNumberInput and converts it to a number type

            // //If a valid guess has been entered remove bottom margin from the input userguess
            if (NumberGuesserData.userGuess !== 0) {
                $("#userGuess").removeClass("mb-3");
            }
            // //If a valid guess has been entered remove bottom margin from the input userguess

            //Wrong guess entered
            if (NumberGuesserData.userGuess !== 0 && NumberGuesserData.userGuess !== NumberGuesserData.computerNumber) {

                //If wrong guess has never been guessed before store value in array and sort
                if (!NumberGuesserData.prevUserGuesses.includes(NumberGuesserData.userGuess)) {
                    NumberGuesserData.prevUserGuesses.push(NumberGuesserData.userGuess);
                    NumberGuesserData.prevUserGuesses.sort(function (a, b) { return a - b });
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
            else if (NumberGuesserData.userGuess !== 0 && NumberGuesserData.userGuess === NumberGuesserData.computerNumber) {
                $("#guessNumberResults").html("<p>That is correct!</p>");
                $("#guessNumberResults").removeClass("hidden");
                $("#submitGuess").addClass("hidden");
                $("#playAgain").removeClass("hidden");
            }
            //Correct guess entered

        }

        function setGuessNumberResults() {
            $("#guessNumberResults").html("<small>Sorry, that is incorrect. Try again!</small><br><small> Numbers you have tried: " + NumberGuesserData.prevUserGuesses + "</small>");
        }

        function playAgain() {
            $("#playAgain").addClass("hidden");
            $("#submitNumber").removeClass("hidden");
            $("#pickNumber").removeClass("hidden");
            $("#guessNumber").addClass("hidden");
            $("#guessNumberResults").addClass("hidden");
            $("#userNumber").val("");
            $("#userNumber").focus();
            $("#userGuess").val("");
            $("#userGuess").addClass("mb-3");
            NumberGuesserData.computerNumber = Math.floor(Math.random() * 10) + 1;
            NumberGuesserData.counter = 0;
            NumberGuesserData.prevComputerGuesses = [];
            NumberGuesserData.computerGuess = 0;
            NumberGuesserData.prevUserGuesses = [];
        }

    }

    render() {
        return (
            <BrostackContext.Provider value={{
                SkillCategories: this.SkillCategories,
                Projects: this.Projects,
                players: this.state.players,
                actions: {
                    changeScore: this.handleScoreChange,
                    removePlayer: this.handleRemovePlayer,
                    addPlayer: this.handleAddPlayer,
                    isHighScore: this.getHighScore(),
                    toggleProjectDisplay: this.toggleProjectDisplay,
                    closeProjectDisplay: this.closeProjectDisplay,
                    searchFlickr: this.searchFlickr,
                    getQuote: this.getQuote,
                    handleNumberGuesser: this.handleNumberGuesser
                }
            }}>
                {this.props.children}
            </BrostackContext.Provider>
        );
    }
}

export const Consumer = BrostackContext.Consumer;