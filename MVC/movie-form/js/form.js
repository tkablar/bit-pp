$(document).ready(function(){
 console.log("Hello World")
});

function Movie(title, genre, duration){
    this.title = title,
    this.genre = genre,
    this.duration = duration,
    this.getData = function(){
        newMovie = `${this.title}, ${this.duration} min, ${this.genre[0].toUpperCase()}${this.genre[this.genre.length-1].toUpperCase()}`;
        return newMovie;
    }

}


function createMovie() {

    var title = document.getElementById("movie-title").value;
    var genre = document.getElementById("genre-select").value;
    var length = document.getElementById("movie-length").value;
    

    var firstMovie = new Movie(title, genre, length);
    var secondTry = firstMovie.getData()

    if(!title) {
        $("#movie-error").append(`<p id="error">Enter title!</p>`)
    }
    if(!genre) {
        $("#movie-error").append(`<p id="error">Select genre!</p>`)
    }
    if(!length) {
        $("#movie-error").append(`<p id="error">Enter length!</p>`)
    } else {
        $("#list").append(`<li>${secondTry}</li>`);
        $("#movie-title").val("");
        $("#genre-select").val("-");
        $("#movie-length").val("");
        $("#select-movie").append(`<option>${secondTry}</option>`)
    }

    
}

function Program(date, listOfMovies, numberOfMovies) {
    this.date = new Date(date).toLocaleString().split(',')[0];
    this.listOfMovies = [];
    this.numberOfMovies = 0;
    this.addMovie = function(movie) {
        var addMovie = movie.getData();
        this.listOfMovies.push(addMovie);
    };
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

        // console.log(this);
        // console.log(this.date);
        // console.log(date);
        
        var getData = `${this.date}, ${this.numberOfMovies} movies, program duration ${programLength}${moviesString}min.`;
        
        return getData;
    }
}

function createProgram() {
    

    var dateOfProgram = document.getElementById("dateOfProgram").value;
    
    var movie = $("#select-movie").value;

     
    var program = new Program(dateOfProgram);
    // console.log(program.getData());

    var id = program.getData().substring(0, program.getData().indexOf(',')).replaceAll('/', '');
    $("#movies-in-program").append(`<li id="li-${id}">${program.getData()}</li>`);
    $("#select-program").append(`<option>${program.getData()}</option>`);
    $("#movies-in-program li:last").append(`<ol id="ol-${id}"></ol>`);
    // $("#dateOfProgram").val(null);
 

}

function addMovieToProgram() {
    var movie = $("#select-movie").val();
    var movieLength = movie.split(', ')[1].split(' ')[0];
    console.log(movie);
    console.log(movieLength);
    var idOfList = document.getElementById("dateOfProgram").value;
    console.log(idOfList);
    var program = $("#select-program").val();
    var programList = program.split(', ');
    console.log(programList)
    
    var id = programList[0].replaceAll('/', '');
    var count = +programList[1].split(" ")[0];
    var allMoviesLengthString = programList[2].split(" ")[2];
    var allMoviesLength = allMoviesLengthString.substring(0, allMoviesLengthString.indexOf('m'));
    console.log(programList);
    console.log(allMoviesLength);
    //count++;
    //allMoviesLength += +movieLength;
    programList[1] = programList[1].replace(count, `${+count + 1}`);
    programList[2] = programList[2].replace(allMoviesLength, `${+allMoviesLength + +movieLength}`);
    console.log(programList);

    var orderedList = $(`#ol-${id}`).append(`<li>${movie}</li>`);
    $("#select-movie").val("-");
    $("#select-program").val("-");



    // var dateOfProgram = document.getElementById("select-program").value;
    // var programTwo = new Program();
    // programTwo.addMovie(movie);
    // console.log("program stampaj - " + programTwo.getData())
    var newProgramText = `${programList.join(", ")}`;
    $(`select option:contains("${program}")`).text(newProgramText);
    $(`#li-${id}`).text(newProgramText).append(orderedList);

}