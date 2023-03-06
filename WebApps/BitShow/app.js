import { Show } from "./entities/shows.js";
import { getData } from "./service/service.js";
import { createShow } from "./view/ui.js";
import { SearchShow } from "./entities/shows.js";
import { getResults } from "./service/service.js";
import { createSearchResult } from "./view/ui.js";

const showUrl = `http://api.tvmaze.com/shows`;
const searchUrl = `http://api.tvmaze.com/search/shows?q=`

$(document).ready(function () {

    getData(showUrl).then(response => {

        for (let i = 0; i < 50; i++) {
            const show = new Show(response[i].name, response[i].image.medium, response[i].id);
            createShow(show);
        }

    }).catch(error => {
        console.log(error);
    });

    $("input").on("input", function() {

        $("#search").html('');
        let input = $(`#dropdownMenuLink`).val();

        getResults(`${searchUrl}${input}`).then(response => {
            
            for(var i = 0; i < 10; i++) {

                if(response[i] && response[i].show) {
                    const show = new SearchShow(response[i].show.name, response[i].show.id);

                    createSearchResult(show);
                } 
            }
        }).catch(error => {
            console.log(error)
        });
    });

    $(document).on('click', 'a', function (event) {
        const showId = parseInt(event.target.id);
        localStorage.setItem("id", showId);
    });

    $(document).on('click', 'img', function (event) {

        const showId = parseInt(event.target.id);
        // console.log("image click",showId);
        localStorage.setItem("id", showId);

        const infoPage = $(`#${showId}show`).attr("href");
        window.open(infoPage, "_self");
    });
    
})