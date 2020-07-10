

window.onload = function () {

    thisDate();
    showSlides();

}

function thisDate() {
    
    var today = new Date();
    var gradDay = new Date("Aug 31, 2020 15:00:00").getTime();
 
    //sets interval to update the counter
    var countDown = setInterval(function () {
        //gets current time
        today = new Date().getTime();
        //calculates time left
        var timeLeft = gradDay - today;
        //equations to generate counter
        var day = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hour = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minute = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var second = Math.floor((timeLeft % (1000 * 60)) / 1000);

        //updates hours, minutes and seconds to show a 0 in front of them
        if (hour < 10) hour = "0" + hour;
        if (minute < 10) minute = "0" + minute;
        if (second < 10) second = "0" + second;

        //creates the message being generated under time left for graduation
        if (gradDay <= today) {
            clearInterval(countDown);
            timeLeft = "(He has graduated! Congratulate him on a job well done.)";
            document.getElementById("date").innerHTML = timeLeft;
        } else {
            document.getElementById("date").innerHTML = "(" + day + " days " + hour + ":" + minute + ":" + second + " left until graduation!)";
        }

    }, 1000);

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