'use strict';

function randomJoke() {

    $("#paragraph").empty();

    fetch("https://api.chucknorris.io/jokes/random").then(response => {
        console.log(response);
        return response.json();
    }).then(response => {
        $("#paragraph").append(`<p><i>${response.value}</i></p>`);
    }).catch(error => {
        console.log(error);
    });

}

export default randomJoke;

