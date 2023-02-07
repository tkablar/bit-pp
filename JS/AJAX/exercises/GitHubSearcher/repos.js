$(document).ready(function () {
    console.log(localStorage.getItem("repos"));

    var repo = JSON.parse(localStorage.getItem("repos"));
    console.log("ovo je object -",repo);

    for(var i = 0; i < repo.length; i++) {
        var name = repo[i].name;
        var description = repo[i].description;
        var stars = repo[i].stargazers_count;
        var language = repo[i].language;
        
        
        var name1 = $(`<td>${name}</td>`);
        var description1 = $(`<td>${description}</td>`);
        var stars1 = $(`<td>${stars}</td>`);
        var language1 = $(`<td>${language}</td>`);
        var table = $(`<tr></tr>`).append(name1).append(description1).append(stars1).append(language1);
        $("#repos tr:last").after(table);
    }
    
});