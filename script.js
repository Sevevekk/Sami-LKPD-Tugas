

console.log("=== EKSPERIMEN AKTIVITAS 1 ===");
let a1 = "10";
let b1 = "20";
console.log("Hasil 10 + 20 (String):", a1 + b1);

console.log("\n=== AKTIVITAS 2: MENEMUKAN TIPE DATA ===");
let nama = "Asep";
let umur = 16;
console.log("Tipe data 'nama':", typeof nama);
console.log("Tipe data 'umur':", typeof umur);

console.log("\n=== AKTIVITAS 3: KONVERSI STRING MENJADI NUMBER ===");
let a3 = "10";
let b3 = "20";
let hasil3 = Number(a3) + Number(b3);
console.log("Hasil Konversi & Penjumlahan:", hasil3);

console.log("\n=== AKTIVITAS 4: PROGRAM KASIR SEDERHANA ===");
let harga = Number(prompt("Masukkan harga: "));
let jumlah = Number(prompt("Masukkan jumlah: "));
let total = harga * jumlah;
console.log("Harga per unit:", harga);
console.log("Jumlah unit:", jumlah);
console.log("Total belanja = " + total);

console.log("\n=== AKTIVITAS TANTANGAN: PROGRAM HITUNG NILAI ===");
let tugas = Number(prompt("Masukkan nilai tugas: "));
let uts = Number(prompt("Masukkan nilai UTS: "));
let uas = Number(prompt("Masukkan nilai UAS: "));
let rataRata = (tugas + uts + uas) / 3;

console.log("Nilai Tugas:", tugas);
console.log("Nilai UTS:", uts);
console.log("Nilai UAS:", uas);
console.log("Nilai Rata-rata = " + rataRata);