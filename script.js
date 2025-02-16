// script.js
const story = {
    start: {
        text: "You are a master thief planning a diamond heist. What is your first move?",
        image: "images/background.webp",
        choices: [
            { text: "Hack the security system", next: "hack" },
            { text: "Cause a blackout in the city", next: "blackout" },
            { text: "Bribe an insider", next: "bribe" }
        ]
    },
    hack: {
        text: "The security is tougher than expected! Cops are alerted. What do you do?",
        image: "images/image1.webp",
        choices: [
            { text: "Escape through the vents", next: "escape" },
            { text: "Fight the security guards", next: "fight" },
            { text: "Disguise as a security officer", next: "disguise" }
        ]
    },

    escape: {
        text: "Bad luck! All the vents got automatically closed! You got trapped. Game Over",
        image: "images/ventsclosed.webp",
        choices:[]
    },

    fight: {
        text: "You decides to take it face to face!",
        image: "images/fightone.webp",
        choices: [
            { text: "Take all down singlehandedly", next:"single"},
            { text: "Call for backup and wait",next:"backupandwait"}
        ]
    },

    single: {
        text: "You are a Bollywood hero, Fighting is in your blood! You win",
        image: "images/thiefwin.webp",
        choices:[]
    },

    backupandwait: {
        text: "Its too late for your backup to arrive! You already got caught! Game over.",
        image: "images/gotcaught.webp",
        choices:[]
    },


    blackout: {
        text: "The blackout works! But the police get suspicious. What next?",
        image: "images/blackout.jpg",
        choices: [
            { text: "Quickly grab the diamonds and escape", next: "grab" },
            { text: "Create a fake diversion", next: "diversion" },
        ]
    },

    diversion: {
        text: "You break something else so that all attention goes there! But one of the cop notices you. What will you do?",
        image: "images/copnotice.webp",
        choices:[
            { text: "Knock him out before he calls for backup", next: "knockout"},
            { text: "Escape through vents", next: "escape"}
        ]
    },

    knockout:{
        text: "Now, that was a brave move! Now what's next?",
        image: "images/fightone.webp",
        choices: [
            { text: "Drag the unconscious cop into a closet and hide", next: "hide_cop" },
            { text: "Sprint towards the diamond vault before reinforcements arrive", next: "vault_rush" }
        ]
    },

    hide_cop: {
        text: "You hide the cop, but the security footage still shows you! What next?",
        image: "images/hidecop.webp",
        choices: [
            { text: "Hack the security footage to erase evidence", next: "hack_footage" },
            { text: "Blow up the control room to destroy all footage", next: "blow_control" }
        ]
    },


    blow_control: {
        text: "You throw an explosive into the control room, causing chaos! But now, security is in full lockdown!",
        image: "images/explosion.webp",
        choices: [
            { text: "Use the distraction to run to the vault", next: "vault_rush" },
            { text: "Escape through an air vent", next: "escape" }
        ]
    },

    hack_footage: {
        text: "You manage to erase yourself from the security footage! Now you have a clean slate. What next?",
        image: "images/erasefootage.webp",
        choices: [
            { text: "Sneak into the vault now", next: "vault_rush" },
            { text: "Find a hidden exit before more guards arrive", next: "escape" }
        ]
    },

    vault_rush: {
        text: "You made it to the vault, but you hear footsteps outside! You only have seconds to act!",
        image: "images/invault.webp",
        choices: [
            { text: "Blow the vault open", next: "vault_explosion" },
            { text: "Use a tool to unlock the vault silently", next: "silent_hack" }
        ]
    },

    vault_explosion: {
        text: "BOOM! The vault opens, but the explosion attracts every cop in the area!",
        image: "images/explosion.webp",
        choices: [
            { text: "Grab the diamonds and escape through the emergency exit", next: "grab" },
            { text: "Hold hostages to negotiate your escape", next: "hostage_situation" }
        ]
    },

    hostage_situation: {
        text: "The cops surround you, but you take a guard hostage! What now?",
        image: "images/hostage.webp",
        choices: [
            { text: "Demand a helicopter for your escape", next: "heli_escape" },
            { text: "Use the hostage as a shield and reach the getaway car", next: "car_escape" }
        ]
    },

    heli_escape: {
        text: "The cops agree! A helicopter arrives, but it's a trap! Snipers are aiming at you!",
        image: "images/helicopter.webp",
        choices: [
            { text: "Dodge and jump onto the helicopter!", next: "heli_jump" },
            { text: "Throw a smoke bomb and disappear!", next: "smoke_escape" }
        ]
    },

    smoke_escape: {
        text: "You vanish in the smoke and escape successfully! The perfect heist!",
        image: "images/smokebomb.webp",
        choices: []
    },

    heli_jump: {
        text: "You jump onto the helicopter! But you fail, Game Over",
        image: "images/helicopterfail.webp",
        choices: []
    },

    car_escape: {
        text: "You reach the getaway car, but a police chase begins!",
        image: "images/car.webp",
        choices: [
            { text: "Take a sharp turn into the city alleys", next: "shortcut" },
            { text: "Speed through the highway at full throttle", next: "highway" }
        ]
    },

    silent_hack: {
        text: "The vault opens silently! You grab the diamonds without alerting anyone! Now, what's the escape plan?",
        image: "images/thiefwin.webp",
        choices: [
            { text: "Escape through the underground sewers", next: "sewer_escape" },
            { text: "Disguise as a fireman and leave during the chaos", next: "fireman_disguise" }
        ]
    },

    sewer_escape: {
        text: "You crawl through the underground sewers, but suddenly, you hear a noise...",
        image: "images/sewer.webp",
        choices: [
            { text: "Keep moving fast", next: "run" },
            { text: "Hide in the dark and wait", next: "hide" }
        ]
    },

    fireman_disguise: {
        text: "Dressed as a fireman, you calmly exit the building. No one suspects a thing! The perfect escape!",
        image: "images/firemanwin.webp",
        choices: []
    },

    bribe: {
        text: "The insider takes your bribe, but betrays you! What will you do?",
        image: "images/bribe.webp",
        choices: [
            { text: "Threaten the insider", next: "threaten" },
            { text: "Take the insider hostage", next: "hostage_insider" }
        ]
    },

    threaten: {
        text: "You pull out a gun and threaten the insider. He hesitates, but security is already on high alert!",
        image: "images/gun.webp",
        choices: [
            { text: "Force him to disable the alarms", next: "disable_alarms" },
            { text: "Knock him out and proceed alone", next: "knockout_insider" }
        ]
    },

    disable_alarms: {
        text: "The insider disables the alarms, buying you time. But a guard patrol is approaching! What do you do?",
        image: "images/disablealarms.webp",
        choices: [
            { text: "Hide in the shadows and wait", next: "hide" },
            { text: "Fight the guards", next: "fight" }
        ]
    },

    knockout_insider: {
        text: "You knock out the insider, but a security camera captures the whole scene! The cops are coming!",
        image: "images/fightone.webp",
        choices: [
            { text: "Hack the security footage to erase evidence", next: "hack_footage" },
            { text: "Blow up the control room to destroy all footage", next: "blow_control" }
        ]
    },

    hostage_insider: {
        text: "You grab the insider and take him hostage! Security is hesitant to shoot. What next?",
        image: "images/hostage.webp",
        choices: [
            { text: "Negotiate your way into the vault", next: "negotiate" },
            { text: "Use the hostage as a human shield and move forward", next: "human_shield" }
        ]
    },

    negotiate: {
        text: "You convince security to let you pass but they secretly set another trap!",
        image: "images/convinceofficer.webp",
        choices: [
            { text: "Spot the trap and take another route to vault", next: "another_vault" },
            { text: "Trigger the trap and fight your way out", next: "fight" }
        ]
    },

    another_vault: {
        text: "You cleverly avoid the trap and take another hidden route to the vault. However, this path is heavily guarded by laser security systems!",
        image: "images/laser_security.webp",
        choices: [
            { text: "Use a mirror to redirect the lasers", next: "mirror_trick" },
            { text: "Disable the lasers using a hacking device", next: "hack_lasers" }
        ]
    },

    mirror_trick: {
        text: "You use a small mirror to redirect the lasers, clearing a path and you get the masterkey to the vault!",
        image: "images/motion_sensor.webp",
        choices: [
            { text: "Run to the vault using master key card", next: "keycard" },
            { text: "Hide and wait for security to check and leave", next: "hide" }
        ]
    },

    hack_lasers: {
        text: "You use a hacking device to disable the laser security! But the system logs the hack and alerts security!",
        image: "images/hacked_lasers.webp",
        choices: [
            { text: "Sprint to the vault before security arrives", next: "vault_rush" },
            { text: "Hide and wait for guards to calm down", next: "hide" }
        ]
    },

    human_shield: {
        text: "Using the insider as cover, you advance, but a sniper is waiting outside! What do you do?",
        image: "images/sniper_alert.webp",
        choices: [
            { text: "Throw a smoke grenade and escape to the vault", next: "smoke_escape" },
            { text: "Run for cover and plan your next move", next: "take_cover" }
        ]
    },

    disguise: {
        text: "Your disguise works! You are now inside the vault room. What next?",
        image: "images/disguised.webp",
        choices: [
            { text: "Drill the vault open", next: "drill" },
            { text: "Use a master key card", next: "keycard" }
        ]
    },
    hack_emergency: {
        text: "You disable all alarms! You now have extra time. What next?",
        choices: [
            { text: "Escape quietly", next: "escape" },
            { text: "Steal more valuables", next: "greedy" }
        ]
    },
    convince: {
        text: "The insider agrees! You get access to the vault. What next?",
        image: "images/invault.webp",
        choices: [
            { text: "Drill the vault open", next: "drill" },
            { text: "Use a master key card", next: "keycard" }
        ]
    },
    drill: {
        text: "Drilling makes noise! Cops are on their way! What do you do?",
        image: "images/drill.webp",
        choices: [
            { text: "Speed up and grab the diamonds", next: "grab" },
            { text: "Create an explosion as a distraction", next: "explosion" }
        ]
    },

    grab:{
        text: "You can't escape by grabbing the diamonds just like that. Game over",
        image: "images/escapefail.webp",
        choices:[]
    },

    keycard: {
        text: "The key card works! The diamonds are in your hands! Now what?",
        image: "images/keycard.webp",
        choices: [
            { text: "Escape through the underground tunnel", next: "tunnel" },
            { text: "Exit through the main door disguised as a guard", next: "disguise_exit" }
        ]
    },
    tunnel: {
        text: "You crawl through the tunnel but hear footsteps behind. What do you do?",
        image: "images/tunnel.webp",
        choices: [
            { text: "Run as fast as possible", next: "run" },
            { text: "Hide and wait", next: "hide" }
        ]
    },

    disguise_exit: {
        text: "Your disguise is working... until a guard questions you! What do you do?",
        image: "images/disguisedofficer.webp",
        choices: [
            { text: "Act confident and talk your way out", next: "talk_out" },
            { text: "Make a run for it!", next: "run" }
        ]
    },
    explosion: {
        text: "The explosion creates chaos! You now have a chance to escape!",
        image: "images/explosion.webp",
        choices: [
            { text: "Take a getaway bike", next: "bike_escape" },
            { text: "Hide inside the vault until things cool down", next: "hide" }
        ]
    },
    bike_escape: {
        text: "You speed away on a bike! The police are chasing you! What next?",
        image: "images/bike.webp",
        choices: [
            { text: "Take a shortcut through the alleys", next: "shortcut" },
            { text: "Ride at full speed on the highway", next: "highway" }
        ]
    },
    shortcut: {
        text: "The alleys work! You lose the cops and escape successfully!",
        image: "images/alley.webp",
        choices: []
    },
    highway: {
        text: "The cops catch up and you get arrested! Game Over!",
        image: "images/highway.webp",
        choices: []
    },
    hide: {
        text: "You hide successfully and wait for the right moment. What's next?",
        image: "images/hide.webp",
        choices: [
            { text: "Sneak out when no one's looking", next: "sneakout" },
            { text: "Call for backup", next: "backup" }
        ]
    },

    sneakout:{
        text: "By this time CCTVs will be activated again, you can't escape without help! Game over.",
        image: "images/gotcaught.webp",
        choices:[]
    },

    backup: {
        text: "Your backup arrives and helps you escape! You win!",
        image: "images/backup.webp",
        choices: []
    },
    talk_out: {
        text: "Your confidence works! The guard lets you go! You win!",
        image: "images/thiefwin.webp",
        choices: []
    },
    run: {
        text: "Running was a bad idea... the cops catch you! Game Over!",
        image: "images/run.webp",
        choices: []
    },

};

let timer;
let countdown;

function showStory(storyKey) {
    console.log("Current Story Key: ", storyKey);
    const currentStory = story[storyKey];

    console.log("Story Image Path: ", currentStory.image);

    document.getElementById("story-text").innerText = currentStory.text;
    
    // Update the story image
    const storyImage = document.getElementById("story-image");

    if (currentStory.image) {
        storyImage.src = currentStory.image;
        storyImage.style.display = "block";  // Ensure it's visible
    } else {
        console.error("Image not found for story:", storyKey);
        storyImage.style.display = "none";
    }
  
    const storyCard = document.getElementById("story-card");
    storyCard.style.display = "block";


    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";

    clearTimeout(timer);
    clearInterval(countdown);

    if (currentStory.choices.length === 0) {
        let restartButton = document.createElement("button");
        restartButton.innerText = "Restart Game";
        restartButton.onclick = showStartScreen;
        choicesContainer.appendChild(restartButton);
    } else {
        currentStory.choices.forEach(choice => {
            let button = document.createElement("button");
            button.innerText = choice.text;
            button.onclick = () => {
                clearTimeout(timer);
                clearInterval(countdown);
                showStory(choice.next);
            };
            choicesContainer.appendChild(button);
        });

        startTimer();
    }
}

function startTimer(){
    let timeLeft = 15;
    const timerElement = document.getElementById("timer");
    timerElement.innerText = timeLeft;
    timerElement.classList.remove("warning");

    countdown = setInterval(() => {
        timeLeft--;
        timerElement.innerText=timeLeft;

        if(timeLeft==5){
            timerElement.classList.add("warning");
        }

        if(timeLeft<=0){
            clearInterval(countdown);
            showStory("gameOver");
        }
    }, 1000);
}

function showStartScreen() {
    document.getElementById("start-screen").style.display = "block";
    document.getElementById("game-container").style.display = "none";
    document.getElementById("story-image").style.display = "none"; // Hide image on start screen
    document.getElementById("timer-container").style.display = "none";
    const music = document.getElementById("bg-music");
    music.play();
}

function startGame() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-container").style.display = "flex";
    document.getElementById("timer-container").style.display = "block";
    showStory("start");
}

window.onload = function () {
    showStartScreen();
};

story.gameOver = {
    text: "Time's up! You hesitated for too long. Game Over!",
    choices: []
};