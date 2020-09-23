
var shirtsInStock = new Date(2020, 9, 1, 0, 00, 00, 000);

var shirtCountdown = setInterval(function () {
    //gets current time and updates it every second
    today = new Date();

    //calculate time left until holloween
    var shirtInStock;
    shirtInStock = shirtsInStock.getTime() - today.getTime();

    if (shirtInStock == today) {
        clearInterval(shirtCountdown);
    document.getElementById("shirtInStock").innerHTML = "The following shirts are in stock!";
} else {
    document.getElementById("shirtInStock").innerHTML = Math.floor(shirtInStock / (1000 * 60 * 60 * 24)) + " days left until shirts are in stock.";
}

    }, 1000);
