$(document).ready(function () {
    showData(),
    showSeasons(),
    showCast(),
    showCrew(),
    showAkas(),
    showEpisodes()
});

function showData() {

    var showId = parseInt(localStorage.getItem("id"));
    console.log(showId);
    

    $.ajax({
        url: `http://api.tvmaze.com/shows/${showId}`,
        method: 'GET'
    }).done(function (response) {
        console.log(response);

        var imageUrl = response.image.original;
        // var imageUrl2 = response.image.medium;

        var nameOfShow = response.name;

        var showDetails = response.summary

        $("#image").append(`<img src="${imageUrl}"></img>`)
        $("#show-details").html(`${showDetails}`)
        $("h1").text(nameOfShow);
        
        
    }).fail(function(response){
        console.log("failed " + response);
    }).always(function() {
        console.log('request finished');
    });
   
}

function showSeasons() {

    var showId = parseInt(localStorage.getItem("id"));

    $.ajax({
        url: `https://api.tvmaze.com/shows/${showId}/seasons`,
        method: 'GET'
    }).done(function (response) {
        console.log(response);

        for(var i = 0; i < response.length; i++) {
            var season = response[i].premiereDate + " - " + response[i].endDate;
            $("#seasons").append(`<li>${season}</li>`);
        }
        
        
    }).fail(function(response){
        console.log(response);
    }).always(function() {
        console.log('request finished');
    });
   
}

function showCast() {

    var showId = parseInt(localStorage.getItem("id"));

    $.ajax({
        url: `https://api.tvmaze.com/shows/${showId}/cast`,
        method: 'GET'
    }).done(function (response) {
        console.log(response);

        for(var i = 0; i < response.length; i++) {
            var actor = response[i].person;
            var actor2 = actor.name;
            $("#cast").append(`<li>${actor2}</li>`);
        }
        
        
    }).fail(function(response){
        console.log(response);
    }).always(function() {
        console.log('request finished');
    });
    
    
}

function showCrew() {

    var showId = parseInt(localStorage.getItem("id"));

    $.ajax({
        url: `https://api.tvmaze.com/shows/${showId}/crew`,
        method: 'GET'
    }).done(function (response) {
        console.log(response);

        for(var i=0; i < response.length; i++) {
            var nameOfCrew = response[i].person.name;
            var type = response[i].type;
            $("#crew").append(`<li>${nameOfCrew} - ${type}</li>`);
        }
        
    }).fail(function(response){
        console.log(response);
    }).always(function() {
        console.log('request finished');
    });
    
}


function showAkas() {

    var showId = parseInt(localStorage.getItem("id"));

    $.ajax({
        url: `https://api.tvmaze.com/shows/${showId}/akas`,
        method: 'GET'
    }).done(function (response) {
        console.log(response);

        for(var i=0; i < response.length; i++) {
            var aka = response[i].name;
            var country = response[i].country.name;
            $("#akas").append(`<li>${country} - ${aka}</li>`);
        }
        
    }).fail(function(response){
        console.log(response);
    }).always(function() {
        console.log('request finished');
    });
    
}

function showEpisodes() {

    var showId = parseInt(localStorage.getItem("id"));

    $.ajax({
        url: `https://api.tvmaze.com/shows/${showId}/episodes`,
        method: 'GET'
    }).done(function (response) {
        console.log(response);

        for(var i=0; i < response.length; i++) {
            var airDate = response[i].airdate;
            var number = response[i].number;
            var name = response[i].name;
            var seasone = response[i].season;
            var url = response[i].url;
            $("#episodes").append(`<li>Season: ${seasone} Episode: ${number} <i>"${name}"</i> <a target="_blank" href="${url}">More Info</a></li>`);
        }
        
    }).fail(function(response){
        console.log(response);
    }).always(function() {
        console.log('request finished');
    });
    
}