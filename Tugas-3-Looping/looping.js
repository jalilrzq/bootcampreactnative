// TUGAS No. 1 Looping (While) 
var love = 'I love coding';
var become = 'I will become a mobile developer'

var flag = 1;
console.log('LOOPING PERTAMA');
while(flag <= 20) {
  if (flag % 2 == 0){
    console.log(flag + ' - ' + love);
  } flag++;
}
console.log('LOOPING KEDUA');
while (flag > 0) {
  if (flag % 2 == 0) {
    console.log(flag + ' - ' + become);
  } flag--;
}


// TUGAS No. 2 Looping menggunakan for
// SYARAT:
// A. Jika angka ganjil maka tampilkan Santai
// B. Jika angka genap maka tampilkan Berkualitas
// C. Jika angka yang sedang ditampilkan adalah kelipatan 3 dan angka ganjil maka tampilkan I Love Coding.
for (var angka =1; angka <= 20; angka++) {
  if (angka % 2 == 1) {
    if (angka % 3 == 0) {
      console.log(angka + ' - I Love Coding');     
    } else {
      console.log(angka + ' - Santai');
    }
  } else if (angka % 2 == 0) {
    console.log(angka + ' - Berkualitas');
  }
}

// Tugas No. 3 Membuat Persegi Panjang #
for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 8; j++){
    process.stdout.write('#');
  }
  process.stdout.write('\n');
}

// Tugas No. 4 Membuat Tangga 
for (var i = 0; i < 7; i++) {
  for (var j = 0; j <= i; j++) {
    process.stdout.write('#');
  }
  process.stdout.write('\n');
}

// Tugas No. 5 Membuat Papan Catur
for (i = 0; i < 8; i++) {
  for (j = 0; j < 8; j++) {
    if ((i + j) % 2 == 1){
      process.stdout.write('#');
    } else {
      process.stdout.write(' ');
    }
  }
  process.stdout.write('\n');
}