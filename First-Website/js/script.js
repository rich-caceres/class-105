

window.onload = function () {

    thisDate();
    showSlides();

}

function thisDate() {
    var one_day = 1000 * 60 * 60 * 24;
    let today = new Date;
    let gradDay = new Date(2020, 7, 31)
    let timeLeft;
    let year;
    if (gradDay.getTime() <= today.getTime()) {
        timeLeft = "(He has graduated! Congratulate him on a job well done.)"
        document.getElementById("date").innerHTML = timeLeft;
    } else {
        timeLeft = Math.ceil((gradDay.getTime() - today.getTime()) / (one_day));
        document.getElementById("date").innerHTML = "(" + timeLeft + " days left until graduation!)";
    }
    year = today.getFullYear();
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