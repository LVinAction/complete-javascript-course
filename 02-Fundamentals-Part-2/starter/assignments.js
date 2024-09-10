"use strict";

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
// }
// const unitedStates = describeCountry("United States", 360, "Washington DC");
// const canada = describeCountry("Canada", 39, "Ottawa");
// const mexico = describeCountry("Mexico", 128, "Mexico City");
// console.log(unitedStates, canada, mexico);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// const perUS = percentageOfWorld1(360);
// const perCanada = percentageOfWorld1(39);
// const perMexico = percentageOfWorld1(128);
// console.log(`The US population percentage is ${perUS}.
// The Canadian population percentage is ${perCanada}.
// The Mexican population percentage is ${perMexico}.`);

// const percentageOfWolrd2 = function (population) {
//   return (population / 7900) * 100;
// };
// const perUS2 = percentageOfWolrd2(360);
// const perCanada2 = percentageOfWolrd2(39);
// const perMexico2 = percentageOfWolrd2(128);
// console.log(perUS2, perCanada2, perMexico2);

// const percentageOfWorld3 = (population) => (population / 7900) * 100;
// const perUS3 = percentageOfWorld3(332);
// const perCanada3 = percentageOfWorld3(39);
// const perMexico3 = percentageOfWorld3(128);
// console.log(perUS3, perCanada3, perMexico3);

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage} of the world.`;
  console.log(description);
}

describePopulation("Portugal", 10);
describePopulation("China", 1441);
describePopulation("USA", 332);

const populations = [10, 1441, 332, 83];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

const neighbours = ["Canada", "Mexico", "Russia"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log(`'Probably not a central european country :D'`);
}

console.log(neighbours.indexOf("Mexico"));
neighbours[1] = "Republic of Mexico";
console.log(neighbours);

const myCountry = {
  country: "USA",
  capital: "Washington DC",
  language: "English",
  population: 330,
  neighbors: ["Canada", "Mexico", "Russia"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbors.length === 0 ? true : false;
  },
};

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry["population"] -= 2;
// console.log(myCountry.population);

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
