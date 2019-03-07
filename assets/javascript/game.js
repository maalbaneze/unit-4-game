$(document).ready(function () {

    var counter = 0;
    var wins = 0;
    var losses = 0;

    function startGame() {
        var numberToGuess = Math.floor(Math.random() * 120) + 19;
        $("#random-number").text(numberToGuess);

        var jewelValue = Math.floor(Math.random() * 12) + 1;
        $("#score-text").text(jewelValue);
    }

    var jewels = [".ruby", ".amethyst", ".diamond", ".emerald"];

    $(jewels).on('click', function () {
        counter = counter + parseInt($(this).data('num'));

        $("#score-text").text(counter);
        if (counter == numberToGuess) {
            alert('You won!!!!');
            wins++;
            $("#wins").html(wins);
            counter = 0;
            $("#score-text").text(counter);
            $("#score").html("");
            resetnumberToGuess();
            startGame();
        } else if (counter > numberToGuess) {
            alert('You lost!');
            losses++;
            $("#losses").html(losses);
            counter = 0;
            $("#score-text").text(counter);
            $("#score").html("");
            resetnumberToGuess();
            startGame();
        }
    });
});