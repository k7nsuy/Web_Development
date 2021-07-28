var buttonColors = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animation(userChosenColour);

})

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

  animation(randomChosenColour);

}

function playSound(name) {
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animation(name) {
  $("."+name).addClass("pressed");
   setTimeout(function() {
       $("."+name).removeClass('pressed');
   }, 100);
}
