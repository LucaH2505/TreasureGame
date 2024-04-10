/*********************************************************************
* Author: Luca Hanssen
* Date: 20240410
* Description: Javascript Adventure Game
* Version: 0.0.1
* Usage: node index.js
**********************************************************************/

// CommonJS require
const readline = require('readline');
const inquirer = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const win = `
      ___________
     '._==_==_=_.' 
     .-\\:      /-.
    | (|:.     |) |
     '-|:. Win |-'
       \\::.    /
        '::. .'
          ) (
        _.' '._
       \`\"\"\"\"\"\"\"
`;

console.log("Welcome to the Quest for the Lost Amulet!\n");
console.log("      _______");
console.log("     //  $$ /|");
console.log("    // $$  / |");
console.log("   //_____/  |");
console.log("  |          |");
console.log("  |   __   |");
console.log("  |  |__|  |");
console.log("  |________|\n\n");

console.log("You are a brave adventurer seeking the legendary Lost Amulet, said to bestow its wielder with immense power.\n");
console.log("You stand at the crossroads of a mysterious forest. Before you, two paths diverge:");

inquirer.question("Please choose 1, 2, 3, 4, or 5: ", userChoice => {

    if (userChoice == 1) {
        console.log("You decide to take the overgrown path, hacking through tangled vines and dodging lurking shadows.\n");
        console.log("After a while, you stumble upon a crumbling ruin. Do you explore the ruins or press on?");
        console.log("1. Explore the ruins.");
        console.log("2. Press on.");

        inquirer.question("Please choose 1 or 2: ", userChoice => {
            if (userChoice == 1) {
                console.log("As you cautiously explore the ruins, you discover a hidden chamber. Inside, you find the Lost Amulet glittering in the dim light!\n");
                console.log(win);
            } else if (userChoice == 2) {
                console.log("You press on, determined to reach your goal. As you delve deeper into the forest, you encounter a mystical guardian blocking your path.\n");
                console.log("Do you attempt to reason with the guardian or engage in combat?");
                console.log("1. Reason with the guardian.");
                console.log("2. Engage in combat.");

                inquirer.question("Please choose 1 or 2: ", userChoice => {
                    if (userChoice == 1) {
                        console.log("You speak with the guardian, convincing it of your noble intentions. Impressed by your bravery and wisdom, the guardian grants you passage.\n");
                        console.log("You continue your journey and eventually find the Lost Amulet hidden beneath a magical waterfall!");
                        console.log(win);
                    } else if (userChoice == 2) {
                        console.log("You draw your weapon and prepare for battle. The guardian, however, proves to be too powerful, and you are forced to retreat.\n");
                        console.log("Defeated, you return home empty-handed. The legend of the Lost Amulet remains just that - a legend.");
                    }
                });
            }
        });
    } else if (userChoice == 2) {
        console.log("You opt for the well-trodden path, following the footsteps of those who came before you.\n");
        console.log("After some time, you come across a deep ravine. Do you attempt to cross it or search for an alternate route?");
        console.log("1. Attempt to cross the ravine.");
        console.log("2. Search for an alternate route.");

        inquirer.question("Please choose 1 or 2: ", userChoice => {
            if (userChoice == 1) {
                console.log("You cautiously attempt to cross the ravine, using your wit and agility to navigate the treacherous terrain.\n");
                console.log("Miraculously, you make it to the other side unscathed. Onward, you continue your quest!");
                console.log(win);
            } else if (userChoice == 2) {
                console.log("You search for an alternate route, scouring the surroundings for any signs of a safer path.\n");
                console.log("Unfortunately, your search proves fruitless, and you are forced to turn back, defeated.\n");
                console.log("The Lost Amulet remains hidden, its secrets shrouded in mystery for eternity.");
            }
        });
    } else if (userChoice == 3) {
        console.log("You follow the path illuminated by fireflies, drawn by their ethereal glow.\n");
        console.log("Along the way, you encounter a series of puzzles. Do you rely on your intellect to solve them or use your magic to bypass them?");
        console.log("1. Use your intellect to solve the puzzles.");
        console.log("2. Use your magic to bypass the puzzles.");

        inquirer.question("Please choose 1 or 2: ", userChoice => {
            if (userChoice == 1) {
                console.log("You carefully analyze each puzzle, unraveling their mysteries one by one. With patience and ingenuity, you overcome the challenges.\n");
                console.log("As a reward, the forest spirits offer you a magical artifact that can aid you on your quest!");
                console.log(win);
            } else if (userChoice == 2) {
                console.log("Frustrated by the complexity of the puzzles, you resort to using your magic to forcefully overcome them. However, your reckless actions disturb the balance of the forest, attracting the attention of a powerful guardian.\n");
                console.log("Do you attempt to reason with the guardian or prepare for a confrontation?");
                console.log("1. Attempt to reason with the guardian.");
                console.log("2. Prepare for a confrontation.");

                inquirer.question("Please choose 1 or 2: ", userChoice => {
                    if (userChoice == 1) {
                        console.log("You try to reason with the guardian, explaining your actions and apologizing for the disturbance. The guardian, sensing your sincerity, offers you a chance to redeem yourself.\n");
                        console.log("You accept the guardian's challenge and embark on a quest to restore the balance of the forest.");
                    } else if (userChoice == 2) {
                        console.log("You prepare for a confrontation, bracing yourself for the inevitable battle. As you face off against the guardian, you realize the folly of your actions.\n");
                        console.log("Defeated and humbled, you vow to never again misuse your magic.");
                    }
                });
            }
        });
    } else if (userChoice == 4) {
        console.log("You choose the path veiled in shadows, drawn to the mysteries lurking within.\n");
        console.log("In the darkness, you encounter a group of shadowy creatures, whispering temptations of power and forbidden knowledge. Do you resist their allure or succumb to their promises?");
        console.log("1. Resist their allure.");
        console.log("2. Succumb to their promises.");

        inquirer.question("Please choose 1 or 2: ", userChoice => {
            if (userChoice == 1) {
                console.log("You resist the temptations of the shadowy creatures, reaffirming your commitment to your quest.\n");
                console.log("Impressed by your strength of will, the creatures vanish into the darkness, leaving behind a trail of glowing orbs that lead you closer to the Lost Amulet.");
                console.log(win);
            } else if (userChoice == 2) {
                console.log("Seduced by the promises of power, you strike a deal with the shadowy creatures, accepting their aid in exchange for a part of your own essence.\n");
                console.log("Empowered by their dark magic, you press onward. However, the whispers of doubt gnaw at your conscience.");
                console.log("Do you continue to rely on their assistance or seek redemption for your folly?");
                console.log("1. Continue to rely on their assistance.");
                console.log("2. Seek redemption for your folly.");

                inquirer.question("Please choose 1 or 2: ", userChoice => {
                    if (userChoice == 1) {
                        console.log("You continue to rely on the assistance of the shadowy creatures, embracing the darkness within.\n");
                        console.log("However, as you grow more powerful, you become consumed by the darkness, losing sight of your original quest.");
                    } else if (userChoice == 2) {
                        console.log("Realizing the error of your ways, you seek redemption for your folly.\n");
                        console.log("You embark on a journey to undo the damage caused by your deal with the shadowy creatures, determined to set things right.");
                    }
                });
            }
        });
    } else if (userChoice == 5) {
        console.log("You choose the path illuminated by starlight, guided by the celestial glow above.\n");
        console.log("Along the way, you encounter ancient spirits who challenge you to prove your worthiness through trials of wisdom and compassion. Do you embrace their teachings or challenge their authority?");
        console.log("1. Embrace the teachings of the spirits.");
        console.log("2. Challenge the authority of the spirits.");

        inquirer.question("Please choose 1 or 2: ", userChoice => {
            if (userChoice == 1) {
                console.log("Humbly accepting the guidance of the ancient spirits, you embark on a transformative journey of self-discovery.\n");
                console.log("Through introspection and empathy, you gain a deeper understanding of the magic that flows through the forest, unlocking new abilities within yourself.");
                console.log(win);
            } else if (userChoice == 2) {
                console.log("Refusing to bow to the demands of the ancient spirits, you assert your independence and forge your own path through the forest.\n");
                console.log("However, your defiance draws the ire of the spirits, who unleash their wrath upon you in a test of strength and resolve.");
                console.log("Do you stand your ground against the spirits or seek a way to appease them?");
                console.log("1. Stand your ground against the spirits.");
                console.log("2. Seek a way to appease them.");

                inquirer.question("Please choose 1 or 2: ", userChoice => {
                    if (userChoice == 1) {
                        console.log("You stand your ground against the spirits, refusing to yield to their authority.\n");
                        console.log("Though the battle is fierce, you emerge victorious, earning the respect of the ancient spirits.");
                    } else if (userChoice == 2) {
                        console.log("Realizing the futility of your defiance, you seek a way to appease the spirits and make amends for your actions.\n");
                        console.log("Through humility and sincerity, you mend your relationship with the ancient spirits, earning their forgiveness and guidance.");
                        console.log(win);
                    }
                });
            }
        });
    }
});
