
function searching(event) {
    
    if(event.keyCode===13) {
        $("input").keypress(function() {
            $("main").empty();
        });
        searchUsers();
    }
}

function searchUsers() {
    var enter = document.getElementById("input").value;
    
    $.ajax({
        url: `https://api.github.com/search/users?q=${enter}`,
        method: 'GET'
    }).done(function (response) {
        console.log(response);
        // console.log(response.items[0].login);
        // console.log(response.items[0].avatar_url);
        // var username = $("<p/>").attr(response.items[0].login);
        // var image = $("<img/>").attr("src", response.items[0].avatar_url);


        for(var i = 0; i < response.items.length; i++) {
            var username = response.items[i].login;
            // var image = response.items[i].avatar_url;
            // var img = $('<img/>').attr("src", response.items[i].avatar_url);
            // var divId = "div"+i;
            var profile = response.items[i].html_url;
            var repos = response.items[i].repos_url;

            console.log(repos);
            
            // $("main").append(`<div id="${divId}"></div>`);
            // $(`#${divId}`).append(img);
            // $(`#${divId}`).append(`<p>${username}</p>`);

            var button = $(`<button><a target="_blank" href="${profile}">Profile</button>`);
            var button2 = $(`<button><a id="${username}" onclick="getRepo(this.id)">Repos</button>`);
            var usernameP = $("<p></p>").html(username);
            var img1 = $('<img id="${username}""></img>').attr("src", response.items[i].avatar_url);
            var userDiv = $(`<div></div>`).append(img1).append(usernameP).append(button).append(button2);
            $("main").append(userDiv);

            
        }


    }).fail(function(response){
        console.log(response);
    }).always(function() {
        console.log('request finished');
    });
   
}



function getRepo(input) {
    console.log("nesto => ", this.id);
    
    $.ajax({
        url: `https://api.github.com/users/${input}/repos`,
        method: 'GET'
    }).done(function (response) {

        // $("main").empty();

        // for(var i =0; i < response.length; i++) {
        //     // console.log(response[i].name);
        //     // console.log(response[i]);
        //     var name = response[i].name;
        //     var description = response[i].description;
        //     var stars = response[i].stargazers_count;
        //     // var language = response[i].language;

        //     // var repoP = $("<p></p>").html(name);

        //     var row = $("<tr></tr>").append()
        // }
        localStorage.setItem("repos", JSON.stringify(response));
        console.log("Uspesno ", response);
        console.log("local storage => ", localStorage.getItem("repos"));

        window.open("repos.html");

    }).fail(function(response){
        console.log(response);
    }).always(function() {
        console.log('second finished');
    });
    
}
