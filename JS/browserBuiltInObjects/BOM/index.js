//window.navigator

function printInfo() {
    console.log(window.navigator.platform);
    console.log(window.navigator.appVersion);
    console.log(window.navigator.vendor);
   
}

printInfo()

function isOnline() {
    if(window.navigator.onLine == true) {
        console.log("online")
    } else {
        console.log("offline")
    }
}

isOnline()

//window.screen

function printInfoSizes() {
    console.log(window.screen.availWidth);
    console.log(window.screen.availHeight);
    console.log(window.screen.height);

}

printInfoSizes()

//window.location

function printUrlInfo() {
    console.log(window.location.href);
    console.log(window.location.hostname);
    console.log(window.location.protocol);
    console.log(window.location.search)
}

printUrlInfo()

function reloadThePage() {
    window.location.reload()
}

function openWebSite() {
    window.location.assign("https://www.w3schools.com/js/js_window_location.asp")
}

// openWebSite()

// reloadThePage()


//window.localStorage

function storeData() {
    localStorage.setItem("name", "Tamara Kablar");
    
}
storeData()

function readAndPrintData() {
    var name = localStorage.getItem('name');

    console.log(`Name from local storage: ` + name);
}

readAndPrintData()

function clearData() {
    localStorage.clear();
    sessionStorage.clear();
}

clearData()