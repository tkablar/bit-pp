'use strict';

import randomJoke from './functions.js';


$(document).ready(function () {

    // $("#next").on("click", randomJoke);

    $("#next").on("click", randomJoke);

    // fetch("https://api.chucknorris.io/jokes/random").then(response => {
    //     console.log(response);
    //     return response.json();
    // }).then(response => {
    //     $("#paragraph").append(`<p><i>${response.value}</i></p>`);
    // }).catch(error => {
    //     console.log(error);
    // });

});
