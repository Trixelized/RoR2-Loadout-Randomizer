import { randomizeSurvivor } from './survivors.js';

console.log("Here be dragons ...!");

function randomizeFully() {
    let seed = Math.random();
    randomizeSurvivor(seed);
}

randomizeFully();
