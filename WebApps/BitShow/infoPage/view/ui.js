export function createShowInfo(show) {
    $("#image").append(`<img src="${show.image}"></img>`)
    $("#show-details").html(`${show.details}`)
    $("h1").text(show.name);
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