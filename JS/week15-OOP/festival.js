"use strict";

(function() {

    console.log("Hi");

    function Genre(name) {
        this.name = name;
        this.getData = function () {
            // console.log("ovo je name of the genre - " + this.name);
            // console.log(this.name[0].toUpperCase());
            // console.log(this.name[this.name.length-1].toUpperCase());
            // console.log(this.name[0].toUpperCase());
            // console.log(this.name[this.name.length-1].toUpperCase());
            var genreShort = this.name[0].toUpperCase() + this.name[this.name.length-1].toUpperCase();
            // console.log(genreShort);
            return genreShort;
            
        }
    }

    function Movie(title, genre, duration) {
        this.title = title;
        this.genre = new Genre(genre);
        this.duration = duration;
        this.getData = function() {
            return `${this.title}, ${this.duration}min, ${this.genre.getData()}`;
        }
        
    }

    function Program(date, listOfMovies, numberOfMovies) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.numberOfMovies = this.listOfMovies.lenght;
        this.addMovie = function(movie) {
            var addMovie = movie.getData();
            this.listOfMovies.push(addMovie);
        }
        this.getData = function() {
            var programLength = 0;
            
            for(var i = 0; i< this.listOfMovies.length; i++) {
                
                var movie = this.listOfMovies[i].split(", ");
                // console.log("ovo console" + movie);
                
                var parse = parseInt(movie[1]);
                // console.log(parse);
                
                programLength += parse;
            }

            var moviesString = "";
            for (movie of this.listOfMovies) {
                moviesString += `
                        ${movie}`
            }
            
            var nesto = `
                ${this.date}, program duration ${programLength}${moviesString}min.`;
            // return "\t" + this.date + ", " + "program duration "+ programLength + "\n" + this.listOfMovies;
            return nesto;
        }
    }

    function Festival(name, listOfPrograms, numberOfMovies) {
        this.name = name;
        this.listOfPrograms = [];
        // this.numberOfMovies = this.listOfPrograms.length;
        this.numberOfMovies = function() {
            var count = 0;
            for(var i = 0; i < this.listOfPrograms.length; i++) {
        
                var movies = this.listOfPrograms[i].length;
                count += movies;
                console.log(count);
            }
            return count;
        };
        this.addProgram = function(program) {
            var addPrograms = program.listOfMovies;
            var dataOfProgram = program.getData();
            this.listOfPrograms.push(dataOfProgram);
            // this.listOfPrograms.push(addPrograms);
        }
        this.getData = function() {
            return this.name + " has " + this.numberOfMovies() +  "movie titles" + 
             this.listOfPrograms;
        }
    }


    var movieOne = new Movie("The Shawshank Redemption","Action", 130);
    var movieTwo = new Movie("Superman", "Drama", 100);
    var movieThree = new Movie("Scream", "Horor", 70);
    var movieFour = new Movie("Black Panther", "Action", 160);
    var movieFive = new Movie("Avatar 2", "Action", 120);

    // console.log(movieOne.getData());
    // console.log(movieTwo.getData());
    // console.log(movieThree.getData());
    // console.log(movieFour.getData());
    // console.log(movieFive.getData());

    var program = new Program("02/01/2023");
    program.addMovie(movieOne);
    program.addMovie(movieTwo);
    program.addMovie(movieThree);

    var programOne = new Program("02/02/2023");
    programOne.addMovie(movieFour);
    programOne.addMovie(movieFive);
    // programOne.addMovie(movieTwo);

    // console.log(program.listOfMovies);
    // console.log(programOne.listOfMovies);
    // console.log(program.getData());


    var festival = new Festival("Weekend festival");
    festival.addProgram(program);
    festival.addProgram(programOne);

    console.log(festival);
    console.log(festival.numberOfMovies())
    console.log(festival.getData());

})()