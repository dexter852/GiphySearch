/* 1. Grab the input value */
var button = document.querySelector(".js-go");
document.querySelector(".js-go").addEventListener('click', function() {
var input = document.querySelector("input").value;
getInput(input);
});

document.querySelector(".js-userinput").addEventListener('keyup', function(e) {
    var input = document.querySelector("input").value;

    if (e.which === 13) {
        pushToDOM(input);
    }
});


/* 2. do the data stuff with the API */
function getInput(item) {
    var query = item.split(' ').join('+');
var url= "https://api.giphy.com/v1/gifs/search?q="+ query + "&api_key=SDEsWMHoj4DO7LFMxWFHlVJVkElcDm8h";

var giphyAJAXCall = new XMLHttpRequest();
giphyAJAXCall.open( 'GET', url );
giphyAJAXCall.send();

giphyAJAXCall.addEventListener('load', function(e) {
    var data = e.target.response;
    pushToDOM(data);
});

}

/* 3. Show me the GIFs */
function pushToDOM(input){

    var response = JSON.parse(input);
    var f = document.querySelector(".js-container");
    var imageUrls = response.data;
    clear(f);
    clear(result);

    var imageUrls = response.data;

    imageUrls.forEach(function(image){
        var src = image.images.fixed_height.url;

    result.innerHTML = src.length + " results found";
    f.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
    });
}
