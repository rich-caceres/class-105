// JavaScript source code

var magic8ball = {};
magic8ball.magicAnswer = ["It is certain", "As I see it yes", "Better not tell you now", "Don't count on it"];
$("#answer").hide();
magic8ball.quest = function (quest) {
    $("#answer").fadeIn(4000);
    //create random number
    var index = Math.floor(Math.random() *
        magic8ball.magicAnswer.length);

    
  
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    
    //use random number for answer
    var answer = magic8ball.magicAnswer[index];
    $("#answer").text(" 8 ball says: " + answer);


    $("#answer").fadeOut(4000);
    setTimeout(function () {
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    }, 7000);
};
$("#answer").hide();
var onClick = function () {

    var question = prompt("what is your question");
    magic8ball.quest(question);
    $("#8ball").effect("shake");
};

$("#questionButton").click(onClick);