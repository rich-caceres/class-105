// JavaScript source code
var D = new Date();
var time_of_day = D.getHours();
var messageText = "";
var message = document.getElementById('timeEvent');
var lolCatImage = document.getElementById('lolcat');
var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
var lunchTimeSelector = document.getElementById('lunchTimeSelector');
var napTimeSelector = document.getElementById('napTimeSelector');
var image = "";
var wakeUp = 8;
var lunch = 12;
var nap = 15;
var party = 17;
var partyTime = false;
var partyButton = document.getElementById('partyTimeButton');


var wakeUpEvent = function () {
    wakeUp = wakeUpTimeSelector.value;

};

var napEvent = function () {
    nap = napTimeSelector.value;

};
var lunchEvent = function () {
    lunch = lunchTimeSelector.value;

};


var timeUpdate = function () {

    if (time_of_day == wakeUp) {
        image = "https://e1.365dm.com/18/11/768x432/skysports-f1-sebastian-vettel_4482614.jpg?20181110143402";
        messageText = "Wake-up with SPEED!";
    }
    else if (time_of_day < 12) {
        image = "https://media.wired.com/photos/59323b2c44db296121d69cd0/4:3/w_1000,c_limit/LaFerrari007.jpg";
        messageText = "Hello and Good Morning!";
    }

    else if (time_of_day == lunch) {
        image = "https://i.pinimg.com/736x/b3/5a/b4/b35ab4b138a3ff5ffa312794ff144aff--ferrari-party-race-party.jpg";
        messageText = "lunch time";
    }
    else if (time_of_day > 12) {
        image = "https://media.wired.com/photos/59323b2c44db296121d69cd0/4:3/w_1000,c_limit/LaFerrari007.jpg";
        messageText = "Good Afternoon, bring some speed!";
    }

    else if (time_of_day == nap) {
        image = "https://i.pinimg.com/originals/a7/b8/01/a7b801bb2fda89cce0c3fef0ac67af26.png";
        messageText = "Nap time!";
    }

    else if (time_of_day > party < 17) {
        image = "https://i.ytimg.com/vi/CaC3jJgtDOE/maxresdefault.jpg";
        messageText = "Party time!";
    }
    else {
        messageText = "Hello and Good day!";
    }


    message.innerText = messageText;
    lolCatImage.src = image;
    currentTime();
    partyButton.addEventListener('click', partyEvent);
    wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
    lunchTimeSelector.addEventListener('change', lunchEvent);
    napTimeSelector.addEventListener('change', napEvent);

};

var currentTime = function () {
    var clock = document.getElementById('clock');

    var nD = new Date();
    var h = nD.getHours();
    var m = nD.getMinutes();
    var s = nD.getSeconds();
    var oneSecond = 1000; //incremental clock value
    var meridian = "am";

    if (h >= 12) {
        meridian = "pm";

    }

    if (h > 12) {

        h = h - 12;

    }

    if (m < 10) {
        m = "0" + m;

    }

    if (s < 10) {

        s = "0" + s;

    }

    var time = h + ":" + m + ":" + s + " " + meridian;
    setInterval(currentTime, oneSecond); //interval set for incremental clock
    clock.innerText = time;
};


var partyEvent = function () {


    if (partyTime === false) {
        partyTime = true;
        time_of_day = party;
        partyButton.innerText = "Its party Time!";

    }

    else {

        partyTime = false;
        time_of_day = new Date().getHours();
        partyButton.innerText = "no party :(";

    }

};



timeUpdate(); //lolcat function is called




