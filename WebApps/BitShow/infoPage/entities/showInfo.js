export class ShowInfoBasic {
    constructor(name, image, details) {
        this.name = name;
        this.image = image;
        this.details = details;
    }
}

export class Seasons {
    constructor(premiereDate, endDate) {
        this.premiereDate = premiereDate;
        this.endDate = endDate;
    }
}

export class Cast {
    constructor(name) {
        this.name = name;
    }
}

export class Crew {
    constructor(name, type) {
        this.name = name;
        this.type = type
    }
}

export class Akas {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }
}

export class Episodes {
    constructor(season, episode, name, url) {
        this.season = season;
        this.episode = episode;
        this.name = name;
        this.url = url;
    }
}
