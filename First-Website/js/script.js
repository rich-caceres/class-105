

window.onload = function () {

    thisDate();

    function thisDate() {
        var one_day = 1000 * 60 * 60 * 24;
        let today = new Date;
        let gradDay = new Date(2020, 7, 31)
        let timeLeft = Math.ceil((gradDay.getTime() - today.getTime()) / (one_day));
        document.getElementById("date").innerHTML = "(" + timeLeft + " days left until graduation!)";
    };
}