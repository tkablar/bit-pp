import { Show } from "./entities/shows.js";
import { getData } from "./service/service.js";
import { createShow } from "./view/ui.js";

import { SearchShow } from "./entities/searchShow.js";
import { getResults } from "./service/service.js";
import { createSearchResult } from "./view/ui.js";

import { ShowInfoBasic } from "./entities/showInfoBasic.js";

import { Cast } from "./entities/cast.js";

import { Crew } from "./entities/crew.js";

import { Akas } from "./entities/akas.js";

import { Seasons } from "./entities/seasons.js";

import { Episodes } from "./entities/episodes.js";

import { createShowInfo, createSeasons, createCast, createCrew, createAkas, createEpisodes } from "./view/ui.js"

import { clearInfo } from "./view/ui.js";

const showUrl = `http://api.tvmaze.com/shows`;
const searchUrl = `http://api.tvmaze.com/search/shows?q=`



$(document).ready(function () {

    // localStorage.clear();
    

    $(".infoPage").hide();

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
        console.log( "on a click >", showId)
        localStorage.setItem("id", showId);
    });


    $(document).on('click', '.linkShow', function (event) {

        const indexPage = $(".firstPage").hide();

        const infoPage = $(".infoPage").show();

        const showId = parseInt(localStorage.getItem("id"));

        // info page

        getInfoPage()
        
    });
    


    // infoPage --------------------------------------------------------------------------



    
// const showId = parseInt(localStorage.getItem("id"));
// console.log(showId);

// console.log("local storage > ", localStorage)
    
// const url1 = `http://api.tvmaze.com/shows/${showId}`;

// const url2 = `https://api.tvmaze.com/shows/${showId}/seasons`;

// const url3 = `https://api.tvmaze.com/shows/${showId}/cast`;

// const url4 = `https://api.tvmaze.com/shows/${showId}/crew`;

// const url5 = `https://api.tvmaze.com/shows/${showId}/akas`;

// const url6 = `https://api.tvmaze.com/shows/${showId}/episodes`;


//     getData(url1).then(response => {

//         const show = new ShowInfoBasic(response.name, response.image.original, response.summary)
//         createShowInfo(show);
//     }).catch(error => {
//         console.log(error)
//     })


//     getBasicInfo(url2).then(response => {
//         // console.log("seasons response " + response);

//         for(var i = 0; i < response.length; i++) {
//             const seasons = new Seasons(response[i].premiereDate, response[i].endDate);
//             createSeasons(seasons);
//         }

//     }).catch(error => {
//         console.log(error);
//     })

//     getBasicInfo(url3).then(response => {
//         // console.log("cast response > ", response);

//         for(var i = 0; i < response.length; i++) { 
//             const name2 = new Cast(response[i].person.name);

//             createCast(name2);
//         }

//     }).catch(error => {
//         console.log(error);
//     })

//     getData(url4).then(response => {
//         // console.log("ovo je crew response", response);

//         for(var i = 0; i < response.length; i++) {
//             const crew = new Crew(response[i].person.name, response[i].type);

//             createCrew(crew);
//         }
//     }).catch(error => {
//         console.log(error);
//     });

//     getData(url5).then(response => {
//         // console.log("ovo je akas response ", response);

//         for(var i=0; i < response.length; i++) {
//             const akas = new Akas(response[i].name, response[i].country.name);

//             createAkas(akas)
//         }
//     }).catch(error => {
//         console.log(error);
//     });

//     getData(url6).then(response => {
//         // console.log("ovo je episode response", response);

//         for(var i=0; i < response.length; i++) {
//             const episodes = new Episodes(response[i].season, response[i].number, response[i].name, response[i].url);

//             createEpisodes(episodes);
//         }

//     }).catch(error => {
//         console.log(error);
//     });

    $(document).on('click', '#logoP', function (event) {


        const infoPage = $(".infoPage").hide();

        const indexPage = $(".firstPage").show();

        
       
    });


   
})

function getInfoPage() {

        clearInfo()

        const showId = parseInt(localStorage.getItem("id"));
        
        console.log(showId);

        console.log("local storage > ", localStorage)
            
        const url1 = `http://api.tvmaze.com/shows/${showId}`;

        const url2 = `https://api.tvmaze.com/shows/${showId}/seasons`;

        const url3 = `https://api.tvmaze.com/shows/${showId}/cast`;

        const url4 = `https://api.tvmaze.com/shows/${showId}/crew`;

        const url5 = `https://api.tvmaze.com/shows/${showId}/akas`;

        const url6 = `https://api.tvmaze.com/shows/${showId}/episodes`;


            getData(url1).then(response => {

                const show = new ShowInfoBasic(response.name, response.image.original, response.summary)
                createShowInfo(show);
            }).catch(error => {
                console.log(error)
            })


            getData(url2).then(response => {
                console.log("seasons response " + response);

                for(var i = 0; i < response.length; i++) {
                    const seasons = new Seasons(response[i].premiereDate, response[i].endDate);
                    createSeasons(seasons);
                }

            }).catch(error => {
                console.log(error);
            })

            getData(url3).then(response => {
                // console.log("cast response > ", response);

                for(var i = 0; i < response.length; i++) { 
                    const name2 = new Cast(response[i].person.name);

                    createCast(name2);
                }

            }).catch(error => {
                console.log(error);
            })

            getData(url4).then(response => {
                // console.log("ovo je crew response", response);

                for(var i = 0; i < response.length; i++) {
                    const crew = new Crew(response[i].person.name, response[i].type);

                    createCrew(crew);
                }
            }).catch(error => {
                console.log(error);
            });

            getData(url5).then(response => {
                // console.log("ovo je akas response ", response);

                for(var i=0; i < response.length; i++) {
                    const akas = new Akas(response[i].name, response[i].country.name);

                    createAkas(akas)
                }
            }).catch(error => {
                console.log(error);
            });

            getData(url6).then(response => {
                // console.log("ovo je episode response", response);

                for(var i=0; i < response.length; i++) {
                    const episodes = new Episodes(response[i].season, response[i].number, response[i].name, response[i].url);

                    createEpisodes(episodes);
                }

            }).catch(error => {
                console.log(error);
            });
}