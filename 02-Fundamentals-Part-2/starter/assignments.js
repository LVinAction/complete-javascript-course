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

const perUS = percentageOfWorld1(360);
const perCanada = percentageOfWorld1(39);
const perMexico = percentageOfWorld1(128);
console.log(`The US population percentage is ${perUS}.
The Canadian population percentage is ${perCanada}.
The Mexican population percentage is ${perMexico}.`);

const percentageOfWolrd2 = function (population) {
  return (population / 7900) * 100;
};
const perUS2 = percentageOfWolrd2(360);
const perCanada2 = percentageOfWolrd2(39);
const perMexico2 = percentageOfWolrd2(128);
console.log(perUS2, perCanada2, perMexico2);
