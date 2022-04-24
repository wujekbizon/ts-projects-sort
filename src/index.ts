import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([
  27, 10, 0, -3, -67, 45, 134, 6, 0.5,
]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
