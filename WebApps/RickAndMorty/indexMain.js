import { getData } from "./js/data.js";
const url = 'https://rickandmortyapi.com/api/character';
const page = `${url}?page=`;


$(document).ready(function () {

    let list = localStorage.getItem("idListLiked");
    if (!list) {
        localStorage.setItem("idListLiked", JSON.stringify([]));
    }
    

    setCards(url,true),

    jQuery(document).on('click', '.link', (event)=> {
        console.log(event.target.id)
        const url = 'https://rickandmortyapi.com/api/character';
        const pages = `${url}?page=`;

        const pageNum = event.target.id;
        localStorage.setItem("pageNum", pageNum)
        console.log("page number > " + pageNum);
        setCards(`${pages}${pageNum}`, false);

    });

    $(document).on("click", "button", (event) => {
        console.log("usli");
        console.log(event);
        const target = event.target;
        console.log(target);
        
        $(target).addClass("liked");

        let list = JSON.parse(localStorage.getItem("idListLiked"));
        console.log(list)
        
        console.log(list)
        let shouldAdd = true;
        for(let i = 0; i < list.length; i++) {
            if(list[i] == parseInt(event.target.id) ) {
                shouldAdd = false;
                break;
            }
        }

        if (shouldAdd) {
            list.push(parseInt(event.target.id));
        }

        localStorage.setItem("idListLiked", JSON.stringify(list));

        
    });

   

    $(document).on("click", ".character", (event) => {
    
        const characterId1 = event.target.id;
        console.log("character event target > ", characterId1);
        localStorage.setItem("id", characterId1);

        // const infoPage = $(`#${characterId1}`).attr("href");
        // window.open(infoPage, "_self");
        const url = 'https://rickandmortyapi.com/api/character';
        const pages = `${url}?page=`;
        const pageNum = localStorage.getItem("pageNum")

        
    })

    

});


function setCards(url, isInitial) {

    getData(url).then(response=> {
        const char = response.results;
        console.log(char);
        // container.html('');
        $('#cardContainer').empty()
        char.forEach(element => {
            let divId = element.id;
            let image = element.image;
            let name = element.name;
            const container = $('#cardContainer');
            // container.html('');
            container.append(`<div class="character" id="${divId}character"></div>`);
            $(`#${divId}character`).append(`<img src="${image}"></img>`).append(`<a class="character" href="./infoPage.html" id="${divId}">${name}</a>`).append(`<button id="${divId}like">Like</button>`);
        
            const buttonLiked = JSON.parse(localStorage.getItem("idListLiked"));
            console.log(buttonLiked);
            for(let i = 0; i < buttonLiked.length; i++) {
                if( buttonLiked[i]  == divId) {
                    $(`#${buttonLiked[i]}like`).addClass("liked");
                }
            }
            
        });

        if(isInitial) {
            // add page numbers

            const totalPages = response.info.pages;
            for(let i = 1; i<=totalPages; i++) {
                //add divs for page numbers
                // url = pages + i
                const divContainer = $("#pageContainer");
                divContainer.append(`<li><a class="link" id="${i}">${i}</a></div>`);
            }
        }
    })
   
}

