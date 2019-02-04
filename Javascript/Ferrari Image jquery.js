// JavaScript source code
$(document).ready(function () {
    var picture = document.getElementById("lolcatButton");
    var ferrariImage = document.getElementById("lolcatImage");
    var image = "http://corporate.ferrari.com/sites/ferrari15ipo/files/home_slide_images/img_ferrari_6_5.jpg";

    var ferrari = function () {

        prompt("want to see this Ferrari?");
        ferrariImage.src = image;

    };

    //picture.addEventListener("click", ferrari);

    $("#lolcatButton").click(ferrari);
});