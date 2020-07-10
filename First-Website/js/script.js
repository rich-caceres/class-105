

window.onload = function () {

    thisDate();
    showSlides();

}

function thisDate() {
    
    var today = new Date();
    var gradDay = new Date("Aug 31, 2020 15:00:00").getTime();
    


    var countDown = setInterval(function () {
        today = new Date().getTime();
        var timeLeft = gradDay - today;
        var day = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hour = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minute = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var second = Math.floor((timeLeft % (1000 * 60)) / 1000);

        if (minute < 10) minute = "0" + minute;
        if (second < 10) second = "0" + second;

        if (gradDay <= today) {
            clearInterval(countDown);
            timeLeft = "(He has graduated! Congratulate him on a job well done.)";
            document.getElementById("date").innerHTML = timeLeft;
        } else {
            document.getElementById("date").innerHTML = "(" + day + " days " + hour + ":" + minute + ":" + second + " left until graduation!)";
        }

    }, 1000);


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