const readBooksPromise = require('./promise.js');

const books = [
  {name: 'LOTR', timeSpent: 3000}, 
  {name: 'Fidas', timeSpent: 2000}, 
  {name: 'Kalkulus', timeSpent: 4000}
]

let inputTime = 10000;
let i = 0;
// function reading() {
//   if (i < books.length - 1) {
//       readBooksPromise(inputTime, books[i])
//       .then((response) => {
//         inputTime = response;
//       })
//       .catch(function (err) {
//         console.log(`Sisa waktu saya hanya ${err}`);
//       });
//       i++;
//   } 
// }

async function reading() {
  for (let j = 0; j < books.length; j++) {
    await readBooksPromise(inputTime, books[i])
      .then((response) => {
        inputTime = response;
      })
      .catch(function (err) {
        console.log(`Sisa waktu saya hanya ${err}`);
      });
    i++;
  }
}

reading();
