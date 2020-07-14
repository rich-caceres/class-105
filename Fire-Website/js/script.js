

window.onload = function () {

    thisDate();
    
}

function thisDate() {
    
    var today = new Date();
    //gets footer year
    var year = today.getFullYear();
   
    document.getElementById("footer").innerHTML = "Created by Rich C. Copyright " + year;
}

var slideIndex = 0;
function showSlides() {
    
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

