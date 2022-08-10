// LECTURE: Values and Variables

/* let country = "USA";
let continent = "North America";
let population = 332403650;

console.log(country + " " + continent + " " + population);
 */

// LECTURE: Data Types

/* let isIsland = false;
let country = "USA";
let population = 332403650;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language); */

// LECTURE: let, const, and var

/* let language = "English";
const country = "USA";
const population = 332403650; */

// LECTURE: Basic Operators

/* 
let country = "USA";
const population = 332403650;
const halfPopulation = population / 2;

population++;

const finlandPopulation = 6000000;
console.log(population > finlandPopulation);
console.log(population > 33000000);
const description =
  "US is in America, and its 322 million people speak English."; */

// LECTURE: Strings and Template Literals

/* const country = "USA";
const population = 332;
const continent = "North America";
const language = "English";
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description); */

// LECTURE: Taking Decisions: if / else Statements

/* const countryPopulation = 332;
if (countryPopulation > 33) {
  console.log(`USA's population is above average`);
} else {
  console.log(
    `USA's population is ${33 - countryPopulation} million below average`
  );
}
 */

// LECTURE: Type Conversion and Coercion

/* console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false;
console.log(5 + 6 + "4" + 9 - 4 - 2); */
// 11 + "4" = 114 + (9 - 4 - 2) = "114" + (3) = 1143
