// Tugas No. 1 (Range)
function range(startNum, finishNum) {
  var angka = [];
  if (startNum < finishNum) {
    for (i = startNum; i <= finishNum; i++) {
      angka.push(i);
    }
  } else if (startNum > finishNum) {
    for (i = startNum; i >= finishNum; i--) {
      angka.push(i);
    }
  } else {
    angka = -1;
  }
  return angka;
}
console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 


// Tugas No. 2 (Range with Step)
function rangeWithStep(startNum, finishNum, step) {
  var angka = [];
  if (startNum < finishNum) {
    for (i = startNum; i <= finishNum; i+= step) {
      angka.push(i);
    }
  } else if (startNum > finishNum) {
    for (i = startNum; i >= finishNum; i-= step) {
      angka.push(i);
    }
  } else {
    angka = -1;
  }
  return angka;
}
console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 


// Tugas No. 3 (Sum of Range)
function sum(startNum = 0, finishNum = 0, step = 1) {
  var angka = [];
  if (startNum < finishNum) {
    for (i = startNum; i <= finishNum; i += step) {
      angka.push(i);
    }
  } else if (startNum > finishNum) {
    for (i = startNum; i >= finishNum; i -= step) {
      angka.push(i);
    }
  }
  var total = 0;
  for (i = 0; i < angka.length; i++){
    total = total + angka[i];
  }
  return total;
}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 


// Tugas Node.4 Array Multidimensi
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling (input) {
  var text = '';
  for (var i = 0; i < (input.length); i++){
    text += 'Nomor ID: ' + input[i][0] + '\n' +
    'Nama Lengkap: ' + input[i][1] + '\n' +
    'TTL: ' + input[i][2] + ' ' + input[i][3] + '\n' +
    'Hobi: ' + input[i][4] + '\n\n';
  }
  return text;
}

console.log(dataHandling(input));


//Tugas No.5 Balik Kata
function balikKata(text) {
  var currentText = text;
  var newText = '';
  for (let i = text.length - 1; i >= 0; i--) {
   newText = newText + currentText[i];
  }
  return newText;
}
console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 

//Tugas No.6 Metode Array
function dataHandling2 (input) {
  // Memodifikasi variabel menggunakan 'splice'
  input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung')
  console.log (input);

  // Memisahkan tanggal, bulan, dan tahun kelahiran dengan 'split' dan mengganti angka bulan dengan switch case
  lahir = input[3].split('/');
  var bulan = parseInt(lahir[1]);
  switch(bulan) {
    case 1: {
      bulan = 'Januari'; 
      break;
    }
    case 2: {
      bulan = 'Februari'; 
      break;
    }
    case 3: {
      bulan = 'Maret'; 
      break;
    }
    case 4: {
      bulan = 'April'; 
      break;
    }
    case 5: {
      bulan = 'Mei'; 
      break;
    }
    case 6: {
      bulan = 'Juni'; 
      break;
    }
    case 7: {
      bulan = 'Juli'; 
      break;
    }
    case 8: {
      bulan = 'Agustus'; 
      break;
    }
    case 9: {
      bulan = 'September'; 
      break;
    }
    case 10: {
      bulan = 'Oktober'; 
      break;
    }
    case 11: {
      bulan = 'November'; 
      break;
    }
      case 12: {
        bulan = 'Desember'; 
        break;
    }
  }
  console.log(bulan);

  
  // Sort desending waktu kelahiran
  lahir2 = input[3].split('/');
  lahir2 = lahir2.sort(function(a, b){return b - a});
  console.log(lahir2);

  // Gabungkan element waktu kelahiran dengan 'join'
  lahir3 = input[3].split('/');
  lahir3 = lahir.join('-');
  console.log(lahir3);

  // Membatasi element Nama sebanyak 15 karakter dengan slice
  var Nama = input[1].slice(0,15);
  console.log(Nama);
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);