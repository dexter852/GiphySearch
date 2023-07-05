"use strict";

/* 1. Grab the input value */
document.querySelector(".js-go").addEventListener('click', function () {
  var input = document.querySelector("input").value;
  pushToDOM(input);
});
document.querySelector(".js-userinput").addEventListener('keyup', function (e) {
  var input = document.querySelector("input").value;

  if (e.which === 13) {
    pushToDOM(input);
  }
});
/* 2. do the data stuff with the API */

var url = "https://api.giphy.com/v1/gifs/search?q=new&api_key=My_Key";
var giphyAJAXCall = new XMLHttpRequest();
giphyAJAXCall.open('GET', url);
giphyAJAXCall.send();
giphyAJAXCall.addEventListener('load', function (e) {
  var data = e.target.response;
  pushToDOM(data);
});
/* 3. Show me the GIFs */

function pushToDOM(input) {
  var response = JSON.parse(input);
  var imageUrls = response.data;
  imageUrls.forEach(function (image) {
    var src = image.images.fixed_height.url;
    console.log(src);
    var container = document.querySelector(".js-container");
    container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
  });
}