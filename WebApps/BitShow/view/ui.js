export function createShow(show) {

    $(`.list-of-movies`).append(`<div class="movie col-sm-3 col-lg-3 col-md-3 col-xl-2 col-xxl-2" id="div${show.id}"></div>`);
    $(`#div${show.id}`).append(`<img id="${show.id}image" src="${show.image}"></img>`);
    $(`#div${show.id}`).append(`<a id="${show.id}show" href="./infoPage/infoPage.html">${show.name}</a>`);

}

export function createSearchResult(show) {
    $("#search").append(`<li class="dropdown-item"><a id="${show.id}"  href="./infoPage/infoPage.html">${show.name}</a></li><hr>`);
}

