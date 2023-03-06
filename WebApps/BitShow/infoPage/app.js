import { ShowInfoBasic, Seasons, Cast, Crew, Akas, Episodes } from "./entities/showInfo.js";
import { getBasicInfo } from "./service/service.js";
import { createShowInfo, createSeasons, createCast, createCrew, createAkas, createEpisodes } from "./view/ui.js";


const showId = parseInt(localStorage.getItem("id"));
console.log(showId);
    
const url1 = `http://api.tvmaze.com/shows/${showId}`;

const url2 = `https://api.tvmaze.com/shows/${showId}/seasons`;

const url3 = `https://api.tvmaze.com/shows/${showId}/cast`;

const url4 = `https://api.tvmaze.com/shows/${showId}/crew`;

const url5 = `https://api.tvmaze.com/shows/${showId}/akas`;

const url6 = `https://api.tvmaze.com/shows/${showId}/episodes`



$(document).ready(function () {

    getBasicInfo(url1).then(response => {

        const show = new ShowInfoBasic(response.name, response.image.original, response.summary)
        createShowInfo(show);
    }).catch(error => {
        console.log(error)
    })


    getBasicInfo(url2).then(response => {
        // console.log("seasons response " + response);

        for(var i = 0; i < response.length; i++) {
            const seasons = new Seasons(response[i].premiereDate, response[i].endDate);
            createSeasons(seasons);
        }

    }).catch(error => {
        console.log(error);
    })

    getBasicInfo(url3).then(response => {
        // console.log("cast response > ", response);

        for(var i = 0; i < response.length; i++) { 
            const name2 = new Cast(response[i].person.name);

            createCast(name2);
        }

    }).catch(error => {
        console.log(error);
    })

    getBasicInfo(url4).then(response => {
        // console.log("ovo je crew response", response);

        for(var i = 0; i < response.length; i++) {
            const crew = new Crew(response[i].person.name, response[i].type);

            createCrew(crew);
        }
    }).catch(error => {
        console.log(error);
    });

    getBasicInfo(url5).then(response => {
        // console.log("ovo je akas response ", response);

        for(var i=0; i < response.length; i++) {
            const akas = new Akas(response[i].name, response[i].country.name);

            createAkas(akas)
        }
    }).catch(error => {
        console.log(error);
    });

    getBasicInfo(url6).then(response => {
        // console.log("ovo je episode response", response);

        for(var i=0; i < response.length; i++) {
            const episodes = new Episodes(response[i].season, response[i].number, response[i].name, response[i].url);

            createEpisodes(episodes);
        }

    }).catch(error => {
        console.log(error);
    });

    
});