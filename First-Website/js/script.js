

window.onload = function () {

    thisDate();

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
    };
}