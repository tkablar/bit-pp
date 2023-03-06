export function createShow(show) {

    $(`.list-of-movies`).append(`<div class="movie col-sm-3 col-lg-3 col-md-3 col-xl-2 col-xxl-2" id="div${show.id}"></div>`);
    $(`#div${show.id}`).append(`<img id="${show.id}image" src="${show.image}"></img>`);
    $(`#div${show.id}`).append(`<a class="linkShow" id="${show.id}show">${show.name}</a>`);

}

export function createSearchResult(show) {
    $("#search").append(`<li class="dropdown-item"><a id="${show.id}showList" class="linkShow">${show.name}</a></li><hr>`);
}

// infoPage -----------------------------------------------------------------------------

export function createShowInfo(show) {
    $("#image").append(`<img src="${show.image}"></img>`)
    $("#show-details").html(`${show.details}`)
    $("h1.info").text(show.name);
}

export function createSeasons(season) {
    let seasons = season.premiereDate + " - " + season.endDate;
    $("#seasons").append(`<li>${seasons}</li>`);
}

export function createCast(cast) {
    $("#cast").append(`<li>${cast.name}</li>`);
}

export function createCrew(crew) {
    $("#crew").append(`<li>${crew.name} - ${crew.type}</li>`);
}

export function createAkas(akas) {
    $("#akas").append(`<li>${akas.country} - ${akas.name}</li>`);
}

export function createEpisodes(episodes) {
    $("#episodes").append(`<li>Season: ${episodes.season} Episode: ${episodes.episode} <i>"${episodes.name}"</i> <a target="_blank" href="${episodes.url}">More Info</a></li>`);
}


export function clearInfo() {
    $("#episodes").html("");
    $("#akas").html("");
    $("#crew").html("");
    $("#cast").html("");
    $("#seasons").html("");
    $("#image").html("");
    $("#show-details").html("");
    $("h1.info").html("");

}