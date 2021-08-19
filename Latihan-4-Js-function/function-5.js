// Contoh Function 5: Inisialisasi parameter dengan nilai default
function tampilkanAngka(angka = 1) {
  return angka
}
 
console.log(tampilkanAngka(5)) // 5, sesuai dengan nilai parameter yang dikirim
console.log(tampilkanAngka()) // 1, karena default dari parameter adalah 1