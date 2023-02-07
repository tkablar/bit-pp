function getDogImage() {
    $.ajax({
        url: 'https://dog.ceo/api/breeds/image/random',
        method: 'GET'
    }).done(function (response) {
        console.log(response);
        var img = $('<img/>').attr("src", response.message);
        $('div').html("")
        $('div').append(img);

    }).fail(function(response){
        console.log(response);
    }).always(function() {
        console.log('request finished');
    });
   
}

