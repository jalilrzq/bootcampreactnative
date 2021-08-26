const readBooks = require('./callback.js');

const books = [
  {name: 'LOTR', timeSpent: 3000},
  {name: 'Fidas', timeSpent: 2000},
  {name: 'Kalkulus', timeSpent: 4000}
];

let inputTime = 10000;
let i = 0;
function reading(time) {
  if (i < books.length - 1 && time > 0) {
    if (time !== inputTime) {
      inputTime = time;
      i++;
      readBooks(inputTime, books[i], reading);
    } else console.log(`sisa waktu : ${time}`);
  } 
}

readBooks(inputTime, books[i], reading);