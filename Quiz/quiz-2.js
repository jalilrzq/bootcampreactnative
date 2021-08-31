// console.log('Starting!');
// setTimeout(() => {
//   console.log('Timer Completed!');
// }, 10);
// console.log('Finished');


// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Timer Completed!');
//   }, 1000);
// })
//   .then((text) => {throw new Error('Failed!') })
//   .catch(err => console.log(err))
//   .then(() => console.log('Does that execute?'));


async function wait() {
  try {
    const result = doSomething();
    console.log(result);
  } catch (error) {
    console.log('Error!');
  }
}

// // A
// function wait() {
//   doSomething()
//     .then((result) => {
//       console.log(result);
//     });
//     .catch((error) => {
//       console.log('error');
//     });
// }


// B
// function wait() {
//   doSomething().then((result) => {
//     try {
//       console.log(result);
//     } catch (error) {
//       console.log('error');
//     }
//   });
// }

// // C
// function wait() {
//   doSomething() 
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log('error');
//     });
// }


function doSomething() {
  console.log(1+1)
}
wait()