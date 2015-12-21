var playerName = "";

// introductions and story set up
function storySetup() {
    // ask, can you hear frodo?
    var canHear = prompt(setup.firstContact);

    // get answer to cusomize next function
    if (canHear === "yes") {
        didMakeContact("yes");
    } else if (canHear === "no") {
        didMakeContact("no");
    }
}

// start of chapter one, where the story will begin to unfold
function didMakeContact(setupResponse) {

    // decide which story comes next
    // uses small functions, pieced togeter to get to result
    chapterOneQuestions(setupResponse);

    function chapterOneQuestions(response) {
        if (response === "yes") {
            getPlayerName(chapterOne.canHearFrodo);
            missionQuestion(chapterOne.thankTheElves, playerName);
            helpFrodo(helpFrodoResponse);
        } else {
            getPlayerName(chapterOne.canRead);
            missionQuestion(chapterOne.youAreFamiliar, playerName);
            helpFrodo(helpFrodoResponse);
        }
    }

    // gets the player's name
    function getPlayerName(response) {
        playerName = prompt(response + chapterOne.nameQuestion);
        return playerName;
    }

    // asks whether to kill dragon or sneak by it
    function missionQuestion(response, name) {
        helpFrodoResponse = prompt(response + " " + name + "!\n\n" + chapterOne.missionExplanation);
    }

    // grabs player answer and moves onto next part
    function helpFrodo(playerAnswer) {
        if (playerAnswer === "kill") {
            killDragon();
        } else if (playerAnswer === "sneak") {
            sneakByDragon();
        }
    }
}

// chapter two: mid-story crisis
function sneakByDragon() {
    var distraction = prompt(chapterTwo.sneak.createDiversion);

    switch (distraction) {
        case "rock":
            seenByDragon();
            break;
        case "sing":
            alert(chapterTwo.dragonFallsAsleep);
            escapeTheCave(false);
            break;
        case "stomp":
            seenByDragon();
            break;
        default:
            seenByDragon();
    }

    function seenByDragon() {
        alert(chapterTwo.sneak.caughtByDragon);
        killDragon();
    }
}

function killDragon() {
    dragonBattle();
}

function escapeTheCave(dragonIsDead){
    if(!dragonIsDead){
        var response = prompt(chapterThree.rescueFrodo);
        if(response === "throw"){
            alert(chapterThree.threwTheRing);
            alert(chapterThree.youDied);
            return;
        } else{
            alert(chapterThree.goGetFrodo);
            enterTheVolcano();
        }
    } else {
        alert(chapterThree.leaveWithFrodo);
        enterTheVolcano();
    }
}

function enterTheVolcano(){
    alert(chapterFour.insideTheVolcano);
    alert(chapterFour.frodoGivesYouTheRing);
    var response = prompt(chapterFour.throwOrKeep);

    if(response === "throw"){
        alert(chapterFour.destroyTheRing);
        var theEnd = "All hail " + playerName + "!!!\n\nCongratulations on your sucess. You've saved Middle Earth.\n\nThe end.";
        alert(theEnd);
    } else{
        alert(chapterFour.keepTheRing);
    }
}
