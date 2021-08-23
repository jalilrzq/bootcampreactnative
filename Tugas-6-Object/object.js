// Soal No.1 (Array to Object)
function arrayToObject(data = '') {
  if (data != '') {
    var now = new Date();
    var thisYear = now.getFullYear();
    var dataLength = data.length;
    var people = {};

    for (var i = 0; i < dataLength; i++) {
      var name = data[i][0] + ' ' + data [i][1];
      var firstName = data[i][0];
      var lastName = data[i][1];
      var gender = data[i][2];
      if (thisYear > data[i][3]) {
        var age = thisYear - data[i][3];
      } else {
        var age = 'Invalid Birth Year'
      }

      people[(i + 1) + '. ' + name] = {
        'firstName' : firstName,
        'lastName' : lastName,
        'gender' : gender,
        'age' : age
      }
    }
    console.log(people);
  } else {
    console.log('""')
  }
}
console.log('----------------------------------------------------------------------');
console.log('Jawaban Soal No.1 (Array to Object)');
console.log('----------------------------------------------------------------------');

// Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ];
arrayToObject(people);
console.log('');
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ];
arrayToObject(people2);
console.log('');
arrayToObject([])



// Soal No. 2 (Shopping Time)
function shoppingTime(memberId = '', money) {
  var barang = [
    ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'],
    [1500000, 500000, 250000, 175000, 50000]
  ]
  var belanja = [];
  var barangLength = barang[0].length;
  if (memberId != '') {
    if (money >= 50000) {
      var kembalian = money;
      for (var i = 0; i < barangLength; i++) {
        if (kembalian >= barang[1][i]) {
          kembalian = kembalian - barang[1][i];
          belanja.push(barang[0][i]);
        }
      }
      notaBelanja = {
        memberId : memberId,
        money : money,
        listPurchased : belanja,
        changeMoney : kembalian

      }
      return notaBelanja;
    } else {
      return 'Mohon maaf, uang tidak cukup'
    }
  } else if (memberId = null) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }
}
console.log('----------------------------------------------------------------------');
console.log('----------------------------------------------------------------------');
console.log('Jawaban Soal No. 2 (Shopping Time)');
console.log('----------------------------------------------------------------------');
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log('');
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log('');
console.log(shoppingTime('', 2475000));
console.log('');
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log('');
console.log(shoppingTime());


// Soal No. 3 (Naik Angkot)
function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var penumpangLength = arrPenumpang.length; 
  var angkot = [];

  for (var i = 0; i < penumpangLength; i++) {
    var listPenumpang = {
      penumpang : arrPenumpang[i][0],
      naikDari : arrPenumpang[i][1],
      tujuan : arrPenumpang[i][2],
    }
    var bayar = 0;
    var numNaikDari = rute.indexOf(arrPenumpang[i][1]) + 1;
    var numTujuan = rute.indexOf(arrPenumpang[i][2]); 
    for (var j = numNaikDari; j <= numTujuan; j++) {
      bayar = bayar + 2000;
    }
    listPenumpang.bayar = bayar;

    angkot.push(listPenumpang);
  }
  return angkot;
}

console.log('----------------------------------------------------------------------');
console.log('----------------------------------------------------------------------');
console.log('Jawaban Soal No. 3 (Naik Angkot)');
console.log('----------------------------------------------------------------------');
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
console.log(naikAngkot([]));