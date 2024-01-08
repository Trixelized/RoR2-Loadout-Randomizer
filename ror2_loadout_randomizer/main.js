import { randomizeSurvivor } from './survivors.js';
import { randomizeArtifacts } from './artifacts.js';

console.log("Here be dragons ...!");

function randomizeFully() {
    let seed = Math.random();
    randomizeSurvivor(seed);
    randomizeArtifacts(seed);
}

window.addEventListener("keydown", function (e) {
    // If we press spacebar
    if (e.key === " ") {
        // Reroll, and don't scroll
        randomizeFully();
        e.preventDefault();
    }
});


// Do it once on load
randomizeFully();
