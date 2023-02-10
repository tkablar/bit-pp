var movies = [];
var programs = [];

function getMovieByTitle(title) {
    for (const movie of movies) {
        if (movie.title === title) {
            return movie;
        }
    }
}

function getProgramById(id) {
    for (const program of programs) {
        if (program.id === id) {
            return program;
        }
    }
}

function createMovie() {

    var title = document.getElementById("movie-title").value;
    var genre = document.getElementById("genre-select").value;
    var length = document.getElementById("movie-length").value;
    

    var firstMovie = new Movie(title, genre, length);
    var movieData = firstMovie.getData()
    
    movies.push(firstMovie);
    console.log(movies);

    if(!title) {
        $("#movie-error").append(`<p id="error">Enter title!</p>`)
    }
    if(!genre) {
        $("#movie-error").append(`<p id="error">Select genre!</p>`)
    }
    if(!length) {
        $("#movie-error").append(`<p id="error">Enter length!</p>`)
    } else {
        $("#list").append(`<li>${movieData}</li>`);
        $("#movie-title").val("");
        $("#genre-select").val("-");
        $("#movie-length").val("");
        $("#select-movie").append(`<option value="${firstMovie.title}">${movieData}</option>`)
    }

}

function createProgram() {
    
    var date = document.getElementById("dateOfProgram").value;
    var program = new Program(date);

    programs.push(program);
    console.log(programs);

    $("#movies-in-program").append(`<li id="li-${program.id}">${program.getData()}</li>`);
    $("#select-program").append(`<option value="${program.id}">${program.getData()}</option>`);
    $("input[type=date]").val("")
}

function addMovieToProgram() {
    var movieTitle = $("#select-movie").val();
    var programId = $("#select-program").val();
    console.log(movieTitle, programId)

    var movie = getMovieByTitle(movieTitle)
    var program = getProgramById(programId)

    var oldProgramData = program.getData();

    program.addMovie(movie)
    console.log(movie, program)
    console.log(program.getData())
    $(`#li-${program.id}`).text(program.getData());
    $(`select option:contains("${oldProgramData}")`).text(program.getData());
    $("#select-movie").val("-");
    $("#select-program").val("-");

}