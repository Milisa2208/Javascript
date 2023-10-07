// Contoh penggunaan javascript if-else
var bilangan = 8;

// Pengecekan apakah bilangan positif atau negatif
if (bilangan > 2) {
  console.log("Bilangan " + bilangan + " adalah positif.");
} else if (bilangan < 2) {
  console.log("Bilangan " + bilangan + " adalah negatif.");
} else {
  console.log("Bilangan " + bilangan + " adalah dua.");
}


// Contoh penggunaan javascript nested if
var umur = 18;

if (umur >= 18) {
    console.log("Anak - anak");
  } else if (umur >= 25) {
    console.log("Dewasa");
  } else if (umur >= 50) {
    console.log("Lanjut usia");
} else {
  console.log("Usia tidak valid");
}


// Contoh penggunaan javascript switch case
var NomorHari = 6;

switch(NomorHari) {
  case 2 :
    console.log("Rabu");
    break;
  case 3:
    console.log("kamis");
    break;
  case 4:
    console.log("jumat");
    break;
  case 5:
    console.log("sabtu");
    break;
default :
    console.log("Nomor hari tidak valid");
    break;
}

// Contoh penggunaan javascript for statement
for (var i = 1; i <= 10; i++) {
  console.log("List ke-" + i);
}

// Contoh penggunaan javascript while
var count = 0;
while (count < 6) {
  console.log("Pengulangan ke-" + (count + 1));
  count++;
}

// Contoh penggunaan javascript do while
var angka = 1;
do {
  console.log("Menampilkan Angka: " + angka);
  angka++;
} while (angka <= 20);

// Contoh penggunaan javascript function
function kurang(x, y) {
  return x - y;
}

var hasil = kurang(15, 9);
console.log("Hasil pengurangan: " + hasil);


