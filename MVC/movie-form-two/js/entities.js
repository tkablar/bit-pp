function Movie(title, genre, duration){
    this.title = title,
    this.genre = genre,
    this.duration = duration,
    this.getData = function(){
        newMovie = `${this.title}, ${this.duration} min, ${this.genre[0].toUpperCase()}${this.genre[this.genre.length-1].toUpperCase()}`;
        return newMovie;
    }

}

function Program(date, listOfMovies, numberOfMovies) {
    this.date = new Date(date).toLocaleString().split(',')[0];
    this.id = this.date.replaceAll("/", "");
    this.listOfMovies = [];
    // this.numberOfMovies = this.listOfMovies.length;
    this.addMovie = function(movie) {
        // var addMovie = movie.getData();
        this.listOfMovies.push(movie);
        
    };
    this.getData = function() {
        var programLength = 0;
        
        for(var i = 0; i< this.listOfMovies.length; i++) {
            var movie = this.listOfMovies[i];
            programLength += +movie.duration;
        }

        var getData = `${this.date}, ${this.listOfMovies.length} movies, program duration ${programLength}min.`;
        
        return getData;
    }
}