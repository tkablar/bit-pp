import { getData } from "./js/data.js";
const url = 'https://rickandmortyapi.com/api/character';
const pages = `${url}?page=`;

$(document).ready(function () {
    console.log("id iz local > ", localStorage.getItem("id"));

    getData(url).then(response => {
        const character = response.results;
        const charId = localStorage.getItem("id")
        character.forEach(element => {
            let divId = element.id;
            if(charId == divId) {
                const image = element.image;
                const name = element.name;
                const status = element.status;
                const species = element.species;
                const location = element.location.name;
                const origin = element.origin.name;

                $("#characterName").html(`${name}`)
                $("#image").append(`<img src="${image}">`)
                $("#info").append(`<li>Status: <i>${status}</i></li>`).append(`<li>Species: <i>${species}</i></li>`).append(`<li>Location: <i>${location}</i></li>`).append(`<li>Origin: <i>${origin}</i></li>`);
            }
        })
    })

    const pageNumber = localStorage.getItem("pageNum");

    getData(`${pages}${pageNumber}`).then(response => {
        const character = response.results;
        console.log("ovo mi treba > ",character)
        // let divId = response.results.id;
        const charId = localStorage.getItem("id")
        character.forEach(element => {
            let divId = element.id;
            if(charId == divId) {
                const image = element.image;
                const name = element.name;
                const status = element.status;
                const species = element.species;
                const location = element.location.name;
                const origin = element.origin.name;

                $("#characterName").html(`${name}`)
                $("#image").append(`<img src="${image}">`)
                $("#info").append(`<li>Status: <i>${status}</i></li>`).append(`<li>Species: <i>${species}</i></li>`).append(`<li>Location: <i>${location}</i></li>`).append(`<li>Origin: <i>${origin}</i></li>`);
            }
        })
    })
})