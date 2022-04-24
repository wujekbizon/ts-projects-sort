import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { Characterscollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([
  27, 10, 0, -3, -67, 45, 134, 6, 0.5, 58,
]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new Characterscollection('Grzegorz ma kota ');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);
// linkedList.add(44);

// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();
