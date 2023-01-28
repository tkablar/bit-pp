// Create constructor functions with properties representing the following:
//      WebApp: name, url, technologies, licence, stars
//      MobileApp: name, platforms, licence, stars
 
// All web applications should inherit methods: 
//      getData which prints out all the information
//      reactBased which checks if one of the used technologies is React
 
// All mobile applications should inherit methods:
//      getData which prints out all the informations
//      forAndroid which checks if one of the platforms the application is developed for is Android

// Both web and mobile applications should inherit methods:
//      isCCLicence  which checks if the licence of the application is CC (Creative Commons) 
//      like which increases the number of stars by one
//      showStars which prints out the number of stars 


class WebApp {
    constructor(name, url, technologies, licence, stars)

    getData() {
        return `${this.name} ${this.url} ${this.technologies} ${this.licence} ${this.stars}`;
    }

    reactBased() {
        if(this.technologies.includes("React")) {
            return "One of the used technologies is React";
        } else {
            return "Not used React!";
        }  
    }

    isCCLicence() {
        if(this.licence.includes("CC")) {
            return "Creative Commons";
        } else {
            return this.licence;
        }
    }
}

class MobileApp {
    constructor(name, platforms, licence, stars)

    getData() {
        return `${this.name} ${this.platforms} ${this.licence} ${this.stars}`;
    }

    forAndroid() {
        if(this.platforms.includes("Android")) {
            return "One of the platforms the application is developed for is Android";
        } else {
            return "Not developed for Android";
        }
    }

    isCCLicence() {
        return super.licence + this.licence;
    }
    
}