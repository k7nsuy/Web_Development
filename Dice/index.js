function dice() {
    var player1 = Math.round(Math.random() * 6); // 0.000000001~0.999999999
    var player2 = Math.round(Math.random() * 6);

    var randomImage1 = "images/dice"+player1+".png";
    var randomImage2 = "images/dice"+player2+".png";

    document.querySelectorAll("img")[0].setAttribute("src",randomImage1);
    document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

    if ( player1 > player2) {
        document.querySelector("h1").innerHTML = "🚩Player1 Win!";
    } else if ( player1 === player2) {
        document.querySelector("h1").innerHTML = "🚩Player1 & player2 Draw!";
    } else {
        document.querySelector("h1").innerHTML = "🚩Player2 Win!";
    }
}
dice();
