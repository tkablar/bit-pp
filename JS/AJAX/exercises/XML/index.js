

function getCountryName() {
    $.ajax({
        url: 'http://www.geoplugin.net/xml.gp?ip=188.246.62.142',
        method: 'GET'
    }).done(function (response) {
        console.log(response);
        var countryName = response.querySelector('geoplugin_countryName');
        console.log(countryName);

    }).fail(function(response){
        console.log(response);
    }).always(function() {
        console.log('request finished');
    });
   
}

getCountryName()