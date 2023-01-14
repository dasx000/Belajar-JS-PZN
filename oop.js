const h1 = document.querySelector('h1');

h1.innerHTML = 'Hello World';

console.log('Hello World');
console.log(
  '------------------------------------------------------------------'
);
console.log('CONSTRUCTOR FUNCTION');

// OOP => SUDUT PANDANG BERKONSEP OBJEK PADA BAHASA PEMROGRAMAN, JS SEBENARNYA ADALAH BAHASA YANG PROSEDURAL.

// CONSTRUCTOR FUNCTION => DIGUNAKAN UNTUK MEMBUAT OBJEK, OOP VERSI LAMA (SEBELUM ECMA SCRIPT 6). Huruf pertama ditulis dengan huruf BESAR

// function Person() {
//   // untuk membuat variabel dalam constructur function harus diawali dengan this. agar bisa diakses oleh objek lainnya
//   this.firstName = '';
//   this.lastName = '';
//   this.sayHelo = (name) => {
//     console.info(`helo ${name}, my name is ${this.firstName}`);
//   };
// }

// // untuk membuat objek baru caranya dengan new + nama constructor function
// const diky = new Person();
// diky.firstName = 'Diky';
// diky.lastName = 'adi';
// diky.sayHelo('JOKO');

// const adi = new Person();
// adi.firstName = 'adi';
// adi.lastName = 'saputra';
// adi.sayHelo('joko');

// console.log(diky);
// console.log(adi);

// ==_= cara gampang
function Person(firstName, lastName) {
  //parameter name tidak bisa dikirim lewat sini
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.sayHello = (name) => {
      console.info(`Hello ${name}, my name is ${firstName}`);
    });
}

const diky = new Person('Diky', 'Adi');
diky.sayHello('joko');

// cara memanggil constructor function Person ke dalam function lain
function Manager(age, firstName, lastName) {
  (this.age = age),
    // panggil funtion Person menggunakan call, dengan parameter this + parameter function target
    Person.call(this, firstName, lastName);
}

const eko = new Manager('20', 'Diky', 'Adisaputra');
console.log(eko);

console.log(
  '------------------------------------------------------------------'
);
console.log('PROTOTYPE');

// PROTOTYPE => UNTUK MENAMBAHKAN FUNGSI YANG SAMA PADA SEMUA OBJEK YANG DIBUAT DENGAN CONSTRUCTOR FUNCTION

// kasus perjumlahan
function Nilai(nilai1, nilai2) {
  this.nilai1 = nilai1;
  this.nilai2 = nilai2;
}

// tambahkan prototype
Nilai.prototype.jumlah = function () {
  return this.nilai1 + this.nilai2;
};

const joko = new Nilai(76, 88);
console.log(joko);
console.log(joko.jumlah());

const saya = new Nilai(90, 100);
console.log(saya);
console.log(saya.jumlah());

console.log(
  '----------------------- PROTOTYPE INHERITENCE -----------------------------'
);

// ini constructor function angka yg memiliki prototype dari constructor function nilai
function Angka(angka1, angka2) {
  this.nilai1 = angka1;
  this.nilai2 = angka2;
}

// prototype dari constructor function angka adalah constructor function nilai
Angka.prototype = Object.create(Nilai.prototype);
const dikyAngka = new Angka(10, 20);
console.log(dikyAngka);
console.log(dikyAngka.jumlah());

// menambahkan prototype baru pada constructor function angka
Angka.prototype.kali = function () {
  return this.nilai1 * this.nilai2;
};
console.log(dikyAngka.kali());

console.log('----------------------- CLASS -----------------------------');

// membuat class baru
class Mtk {
  // membuat constructor dan parameter
  constructor(nilai1, nilai2) {
    this.nilai1 = nilai1;
    this.nilai2 = nilai2;
    this.hasil = nilai1 / nilai2;
    console.log(this.hasil);
  }
}

// membuat objek baru
const bagi = new Mtk(20, 100);
console.log(bagi);

//cara akses properti constructor dalam class
console.log(bagi.hasil);

console.log(
  '------------------------------------------------------------------'
);
