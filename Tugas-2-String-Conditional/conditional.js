// Tugas Conditional (if-else)
var nama = 'Junaedi';
var peran = 'Werewolf';

if (nama == '' && peran == ''){
  console.log('Nama harus diisi!');
} else if (nama == 'John' && peran==''){
  console.log('Halo John, Pilih peranmu untuk memulai game!');
} else if (nama == 'Jane' && peran=='Penyihir'){
  console.log('Selamat datang di Dunia Werewolf, Jane');
  console.log('Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!');
} else if (nama == 'Jenita' && peran=='Guard'){
  console.log('Selamat datang di Dunia Werewolf, Jenita');
  console.log('Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.');
} else if (nama == 'Junaedi' && peran=='Werewolf'){
  console.log('Selamat datang di Dunia Werewolf, Junaedi');
  console.log('Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!');
} else {
  console.log('Error! Periksa lagi nama dan peran mu!');
}


// Tugas Conditional (switch-cae)
var tanggal = 17;
var bulan = 8;
var tahun = 1945;

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

console.log(tanggal.toString() + ' ' + bulan + ' ' + tahun.toString());