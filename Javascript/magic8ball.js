// JavaScript source code

var magic8ball = {};
magic8ball.magicAnswer = ["It is certain", "As I see it yes", "Better not tell you now", "Don't count on it"];

magic8ball.quest = function (quest) {
    //create random number
    var index = Math.floor(Math.random() *
        magic8ball.magicAnswer.length);

    //use random number for answer
    var answer = magic8ball.magicAnswer[index];
    $("#answer").text(" 8 ball says: " + answer);


};

var onClick = function () {

    var question = prompt("what is your question");
    magic8ball.quest(question);
};

//question to be asked in function
//magic8ball.question("Will I make millions?");
$("#questionButton").click(onClick);


