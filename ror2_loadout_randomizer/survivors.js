import { acrid } from "./survivors/acrid.js";
import { artificer } from "./survivors/artificer.js";

let survivor_list = [
    acrid,
    artificer
];

export function randomizeSurvivor(seed) {

    // Get and clear the divs
    let skills_div = document.getElementById("skills");
    skills_div.innerHTML = "";
    let survivor_div = document.getElementById("survivor");
    survivor_div.innerHTML = "";

    // Create the random function for the current seed
    var seeded_rng = new alea(seed);

    // Pick a random survivor
    let random_index = Math.floor(seeded_rng() * survivor_list.length);
    let survivor = survivor_list[random_index];

    // Add the survivor element to the div
    survivor_div.innerHTML += `
        <div class="inside-meta">
            <img class="square-image big" src="` + survivor.img_dir + survivor.portrait + `">
            <div>
                <div class="text survivor side bold">
                    Survivor:
                </div>
                <div class="text survivor side bold" style="color: ` + survivor.color + `">
                    ` + survivor.name + `
                </div>
            </div>
        </div>`;

    // Pick random skills
    for (let s = 0; s < survivor.skills.length; s++) {
        let skill = survivor.skills[s]

        // Pick a random choice from skill choices
        let random_index = Math.floor(seeded_rng() * skill.choices.length);
        let choice = survivor.skills[s].choices[random_index];

        // Add the skill element to the div
        skills_div.innerHTML += `
            <div class="inside-meta">
                <img class="square-image" src="` + survivor.img_dir + choice.icon + `">
                <div>
                    <div class="text skill side">
                        ` + skill.type + `:
                    </div>
                    <div class="text skill side" style="color: ` + survivor.color + `">
                        ` + choice.name + `
                    </div>
                </div>
            </div>`;

    }

}




