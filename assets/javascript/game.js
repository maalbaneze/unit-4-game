$(document).ready(function () {

    var numberToGuess = Math.floor(Math.random() * 120) + 19;
    // $("#random-number").text(numberToGuess);

    var jewels = Math.floor(Math.random() * 12) + 1;
    // $("#score-text").text(jewels);

    var counter = 0;
    var wins = 0;
    var losses = 0;

    function startGame() {
        //var numberToGuess = Math.floor(Math.random() * 120) + 19;
        $("#random-number").text(numberToGuess);

        //var jewels = Math.floor(Math.random() * 12) + 1;
        $("#score").text(jewels);
    }
    startGame();

    var crystals = [".ruby", ".amethyst", ".diamond", ".emerald"];

    for (let i = 0; i < crystals.length; i++) {

        $(crystals[i]).on('click', function () {
            counter = counter + parseInt($(this).data('num'));
            console.log("crystal");
            $("#score").text(counter);
            if (counter == numberToGuess) {
                alert('You won!!!!');
                wins++;
                $("#wins").html(wins);
                counter = 0;
                $("#score").text(counter);
                // $("#score").html("");
                resetnumberToGuess();
                startGame();
            } else if (counter > numberToGuess) {
                alert('You lost!');
                losses++;
                $("#losses").html(losses);
                counter = 0;
                $("#score").text(counter);
                // $("#score").html("");
                resetnumberToGuess();
                startGame();
            }
        });
    }
});