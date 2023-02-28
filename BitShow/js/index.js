$(document).ready(function() {
    previewShows(),
    
    jQuery(document).on('click', 'a', function () {
        var showId1 = $(this).attr('id');
        localStorage.setItem("id", showId1);
        // console.log("ovo je to sto trebam " + showId1);
    });

    
});

function previewShows() {

    $.ajax({
        url: `http://api.tvmaze.com/shows`,
        method: 'GET'
    }).done(function (response) {
        console.log(response);

        for(var i = 0; i < response.length; i++) {

            var linkOfShow = response[i].url;
            var nameOfShow = response[i].name;
            var poster = response[i].image.medium;

            var divId = "div" + i;
            var showId = response[i].id + "show";

            if(i >= 51 ) {
                break;
            } else {
                
                $(`.list-of-movies`).append(`<div class="movie col-sm-3 col-lg-3 col-md-3 col-xl-2 col-xxl-2" id="${divId}"></div>`);
                $(`#${divId}`).append(`<img src="${poster}"></img>`);
                $(`#${divId}`).append(`<a id="${showId}" href="./infoPage.html">${nameOfShow}</a>`); 
                
            } 

        }
         
    }).fail(function(response){
        console.log(response);
    }).always(function() {
        console.log('request finished');
    });
   
}

$("input").on("input", function() {

    $("#search").html('');

    var input = $(`#dropdownMenuLink`).val();

    $.ajax({
        url: `http://api.tvmaze.com/search/shows?q=${input}`,
        method: 'GET'
    }).done(function (response) {

        for(var i = 0; i < 10; i++) {

            if(response[i] && response[i].show) {
                var nameOfShow = response[i].show.name;

            $("#search").append(`<li class="dropdown-item"><a id="${response[i].show.id}"  href="./infoPage.html">${nameOfShow}</a></li> <hr>`);
            }
            
        }
        
    }).fail(function(response){
        console.log(response);
    }).always(function() {
        console.log('request finished');
    });
 });




