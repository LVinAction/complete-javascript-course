let country = "USA";
let continent = "North America";
let population = "360";

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "English";

console.log(population / 2);
population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

//const description = country + " is in " + continent + ", and its " + population + " million people speak " + language +".";

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

console.log(description);

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}
/*
console.log("9" - "5"); // -> ?4
console.log("19" - "13" + "17"); // -> ? 617
console.log("19" - "13" + 17); // -> ? 23
console.log("123" < 57); // -> ? false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> ? 1143

const numNeighbours = Number(
  prompt("How many neighbour countries does your contry have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
*/
