import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { Characterscollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([
  27, 10, 0, -3, -67, 45, 134, 6, 0.5, 58,
]);
const charactersCollection = new Characterscollection('Grzegorz ma kota ');

// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
