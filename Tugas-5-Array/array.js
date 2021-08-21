// Tugas No. 1 (Range)
// function range(startNum, finishNum) {
//   var angka = [];
//   if (startNum < finishNum) {
//     for (i = startNum; i <= finishNum; i++) {
//       angka.push(i);
//     }
//   } else if (startNum > finishNum) {
//     for (i = startNum; i >= finishNum; i--) {
//       angka.push(i);
//     }
//   } else {
//     angka = -1;
//   }
//   return angka;
// }
// console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(1)) // -1
// console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
// console.log(range(54, 50)) // [54, 53, 52, 51, 50]
// console.log(range()) // -1 


// Tugas No. 2 (Range with Step)
// function rangeWithStep(startNum, finishNum, step) {
//   var angka = [];
//   if (startNum < finishNum) {
//     for (i = startNum; i <= finishNum; i+= step) {
//       angka.push(i);
//     }
//   } else if (startNum > finishNum) {
//     for (i = startNum; i >= finishNum; i-= step) {
//       angka.push(i);
//     }
//   } else {
//     angka = -1;
//   }
//   return angka;
// }
// console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
// console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
// console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
// console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 


// Tugas No. 3 (Sum of Range)
// function sum(startNum = 0, finishNum = 0, step = 1) {
//   var angka = [];
//   if (startNum < finishNum) {
//     for (i = startNum; i <= finishNum; i += step) {
//       angka.push(i);
//     }
//   } else if (startNum > finishNum) {
//     for (i = startNum; i >= finishNum; i -= step) {
//       angka.push(i);
//     }
//   }
//   var total = 0;
//   for (i = 0; i < angka.length; i++){
//     total = total + angka[i];
//   }
//   return total;
// }

// console.log(sum(1,10)) // 55
// console.log(sum(5, 50, 2)) // 621
// console.log(sum(15,10)) // 75
// console.log(sum(20, 10, 2)) // 90
// console.log(sum(1)) // 1
// console.log(sum()) // 0 


// Tugas Node.4 Array Multidimensi
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

var biodata = ['Nomor ID: ', 'Nama Lengkap: ', 'Tempat: ', 'TTL: ', 'Hobi: ']

console.log(input.length)
function dataHandling () {
  var text = '';
  for (var i = 0; i < (input.length); i++){
    for (var j = 0; j <= (input[i].length-1); j++) {
      text += biodata[j] + input[i][j] + '\n';
    }
    text += '\n';
  }
  return text;
}

console.log(dataHandling())