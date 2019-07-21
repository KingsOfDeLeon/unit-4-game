$(document).ready(function () {
    var crystalMaxValue = 12
    var TargetMaxValue = 111;
    var TargetValue = refreshTargetValue();
    var wins = 0;
    var losses = 0;
    var accumalatedScore = 0;
    var targetNumText = $("#targetNum");
    var playerNumText = $("#playerNum");
    var winNumText = $("#winCount");
    var loseNumText = $("#lossCount");
    targetNumText.text(TargetValue);

    function refreshCrystalValue() {
        var randomNum = Math.floor((Math.random() * crystalMaxValue) + 1);
        return randomNum;
    }

    function refreshTargetValue() {
        var randomNum = Math.floor((Math.random() * TargetMaxValue) + 19);
        return randomNum;
    }

    function refreshCrystalValues() {
        var newCrystalValue = $(".blueCrystal");
        var CrystalValue = refreshCrystalValue();
        newCrystalValue.attr("data-crystalValue", CrystalValue);

        newCrystalValue = $(".redCrystal");
        CrystalValue = refreshCrystalValue();
        newCrystalValue.attr("data-crystalValue", CrystalValue);

        newCrystalValue = $(".purpCrystal");
        CrystalValue = refreshCrystalValue();
        newCrystalValue.attr("data-crystalValue", CrystalValue);

        newCrystalValue = $(".yellowCrystal");
        CrystalValue = refreshCrystalValue();
        newCrystalValue.attr("data-crystalValue", CrystalValue);
    }

    function createCrystals() {
        for (var i = 0; i < 4; i++) {
            var CrystalValue = refreshCrystalValue()
            var imageCrystal = $("<img>");
            imageCrystal.addClass("crystal-image");
            imageCrystal.attr("data-crystalValue", CrystalValue);
            console.log("value assigned to crystal: " + CrystalValue);
            if (i === 0) {
                imageCrystal.attr("src", "./assets/images/Blue.png");
                imageCrystal.addClass("blueCrystal");
                imageCrystal.attr("width", "20%");
            } else if (i === 1) {
                imageCrystal.attr("src", "./assets/images/Red.png");
                imageCrystal.addClass("redCrystal");
                imageCrystal.attr("width", "20%");
            } else if (i === 2) {
                imageCrystal.attr("src", "./assets/images/Purp.png");
                imageCrystal.addClass("purpCrystal");
                imageCrystal.attr("width", "20%");
            } else {
                imageCrystal.attr("src", "./assets/images/Yellow.png");
                imageCrystal.addClass("yellowCrystal");
                imageCrystal.attr("width", "20%");
            }
            console.log(imageCrystal);
            $("#crystalContainer").append(imageCrystal);
        }
    }

    createCrystals();

    $(".crystal-image").on("click", function () {
        console.log($(this).attr("data-crystalValue"));
        var crystalVal = ($(this).attr("data-crystalValue"));
        var crystalVal = parseInt(crystalVal);
        accumalatedScore += crystalVal;
        console.log("this is your accumulated score: " + accumalatedScore);
        // targetNumText.text(accumalatedScore);
        playerNumText.text(accumalatedScore);
        if (accumalatedScore === TargetValue) {
            wins++;
            winNumText.text("Wins: " + wins);
            accumalatedScore = 0;
            playerNumText.text(accumalatedScore);
            TargetValue = refreshTargetValue();
            targetNumText.text(TargetValue);
            refreshCrystalValues();
        } else if (accumalatedScore >= TargetValue) {
            losses++;
            loseNumText.text("Losses: " + losses);
            accumalatedScore = 0;
            playerNumText.text(accumalatedScore);
            TargetValue = refreshTargetValue();
            targetNumText.text(TargetValue);
            refreshCrystalValues();


        }

    });

    $(".restart").on("click", function () {
        wins = 0;
        losses = 0;
        winNumText.text("Wins: " + wins);
        loseNumText.text("Losses: " + losses);
        accumalatedScore = 0;
        playerNumText.text(accumalatedScore);
        TargetValue = refreshTargetValue();
        targetNumText.text(TargetValue);
        refreshCrystalValues();

    });


});