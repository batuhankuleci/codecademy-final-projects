// holds all the text for the story, which is pieced together in controllers/controller.js

// var errorMessages = {
// 	inputError: "You must choose one of the options in parenthesis. Let's try this again.",
// 	startChapterOver: "You must choose one of the options in parenthesis. Let's start this chapter over."
// };

var setup = {
	firstContact: "Hi, Hello? This is Frodo from the Shire, son of Bilbo, student of Gandolph.\n\n Can you hear me? (yes or no)"
};

var chapterOne = {
	nameQuestion: "Gandolph taught me a few powers of telekenesis and I have been sending out signals for help for what seems like days now.\n\nI'm so glad to have found you and that you can hear my thoughts.\n\nWhat is your name?",
	missionExplanation: "So, here's the situation:\n\nI have the ring of power (you know, the one that rules them all), and I was going to throw the evil ring into the fires of Mordor, inside Mount Doom, but on my way, a nasty dragon saw a glint of the ring, and decided to trap me.\n\nI need a brave soul to help me slay this dragon, or to help me sneak by the dragon to rescue me.\n\nWill you help me kill the dragon, or do you think you can sneak by him? (kill or sneak)",
	canHearFrodo: "Finally! Someone can hear me!\n\n",
	thankTheElves: "Thank the elves you can hear me,",
	canRead: "Well, if you can't hear me, at least you can read what I am saying!\n\n",
	youAreFamiliar: "I once knew a human named"
};

var chapterTwo = {
  sneak: {
    createDiversion: "You think you're sneaky? Okay.\n\nWe must distract the dragon by creating a diversion, but how..\n\nHow do you distract a dragon?! Perhaps you could:\n\n1. Throw a rock at it.\n\n2. Sing it a song in your best opera voice.\n\n3. Stomp on its toe with your boot.\n\n\nWhich will you choose to do? (rock, sing, or stomp)",
    caughtByDragon: "Oh no!! It didn't work. The dragon whipped it's head around and saw you! Your only option now is to fight it.\n\nAs you draw your sword, the dragon approaches..."
  },
  battle: {
    dragon: {
      hit: [
        "You whip your sword, like a true swordsman/woman, in the dragon's face, as you slice into its belly.",
        "You turn around, throwing your sword behind you. Miraculously, your sword boomerangs and slices the dragon on its way.",
        "After running up the dragon's tail (how Legolas of you), you stab the dragon in the back.",
        "You're a swashbuckling swordsman/woman!",
        "KAPOW! You made the dragon say OW!"
        ],
      missed: [
        "You went to stab the dragon between the eyes, but you missed as it ducked its head.",
        "While hiding behind a rock, you peaked out from the edge. Little did you know, the dragon was right behind you.",
        "The dragon flapped its wings, creating gusts of sand and rocks that hurt you.",
        "You got a little too big for your britches, and the dragon got you.",
        "OOF! You tripped and the dragon caught the tail end of your cape."
      ]
    }
  },
  deadDragon: "The dragon yelps as it falls to the ground with a mighty thud.\n\nYes. You've done it. You slew the dragon. --Now let's get out of here before the remains start to smell.",
  retreatFromDragon: "The dragon is mighty, and you are... not. You begin to back peddle, as the dragon draws near. The only thing to do now is...\n\nRUN!",
  dragonFallsAsleep: "You sing, which miraculously puts the dragon to sleep. Your quiet feet are near silent as your approach Frodo."
};

var chapterThree = {
	leaveWithFrodo: "Frodo gets up, and runs towards you. You both run out of the cave and up Mount Doom. As ash erupts from the volcano, you step inside the volcano's entrance, where you will destroy the ring.",
	rescueFrodo: "As the dragon approaches, you look over to Frodo. He starts to get up to run towards you, but trips and falls on his way.\n\nYou can ask Frodo to throw the ring to you so you can destroy it, or you can take a chance and rescue Frodo.\n\nWhich do you choose? (throw or rescue)",
	threwTheRing: "Frodo grabs the ring from his pocket, clutches it in his hand, and throws it to you.\n\nThe dragon flails and traps the ring on its wing, turning the dragon invisible.\n\nSuddenly, fire fills the cave. You try to run, but you can't make it.\n\nThe fire engulfs your body.",
	goGetFrodo: "You take the chance, and run inbetween the dragon's legs. As the dragon spins around, you grab Frodo and throw him over your shoulder.\n\nYou run like the wind of Chicago.\n\nAs you exit the cave, the dragon lets loose. As the fire is at your back, you narrowly escape.\n\nLike they say, team work makes the dream work!",
	youDied: "While your effort was valiant, you got smoked. Good try, but Middle Earth will never be freed from the grips of evil."
};

var chapterFour = {
	insideTheVolcano: "You and Frodo enter the volcano's entrance, and walk down the firey walkway toward the ledge. You look over the ledge at the boiling lava of Mount Doom.",
	frodoGivesYouTheRing: "Frodo looks at you, and explains that since you saved his life, you deserve to throw the ring into the fires of Mordor.",
	throwOrKeep: "With the ring of power in your posession, you start to have second thoughts.\n\nYou can throw the ring into the fires, and destroy the ring of power, or you can keep the ring for yourself, and become the ruler of Middle Earth.\n\nKeep the ring, or throw it into the fires of Mount Doom? (keep or throw)",
	destroyTheRing: "You throw the ring into the volcano, where it sizzles and burns. As it is destroyed, the darkness of Mount Doom lifts, as you collapse to the ground.\n\nYou've saved Middle Earth from evil, through your clever choices and wit.\n\nRejoice! Your name will be sung throughout Middle Earth for generations!",
	keepTheRing: "With the ring in your hand, you grasp it and run. Its power pulsates throughout your body, and you start to feel more powerful.\n\nYou use this power to start building your empire. The fate of Middle Earth rests in your hands. Your precious hands..."
};