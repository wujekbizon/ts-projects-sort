"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([
    27, 10, 0, -3, -67, 45, 134, 6, 0.5, 58,
]);
const charactersCollection = new CharactersCollection_1.Characterscollection('Grzegorz ma kota ');
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
const sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
