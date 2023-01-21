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
    // menggunkan this, agar bisa diakses oleh objek lainnya
    this.nilai1 = nilai1;
    this.nilai2 = nilai2;
    console.log(`nilai 1 adalah ${nilai1} dan nilai 2 adalah ${nilai2}`);

    //  tidak direkomendasikan untuk membuat method di constructor
  }

  // membuat method di class, method akan masuk ke dalam prototype
  tambah() {
    console.log('hasil penjumlahannya adalah : ' + (this.nilai1 + this.nilai2));
  }

  kali(caption) {
    // caption adalah parameter tambahan
    console.log(
      `hasil perkaliannya adalah: ${this.nilai1 * this.nilai2} ` + caption
    );
  }
}

// membuat objek baru
const bagi = new Mtk(20, 100);
console.log(bagi);
console.log(bagi.hasOwnProperty('nilai1'));

//variabel tidak bisa diakses dari luar class
// console.log('nilai 1:' + this.nilai1);

//cara akses properti yg benar
console.log('nilai 1 = ' + bagi.nilai1);

//cara akses method dalam class
bagi.tambah();
bagi.kali('mantap');

console.log(
  '-------------------------- CLASS INHERITANCE -------------------------------'
);

// class member
class Member {
  constructor(name) {
    this.name = name;
    console.log(`nama  saya adalah ${name}`);
  }

  //method
  sendMessage() {
    return true;
  }

  kickMember() {
    return false;
  }

  coba() {
    console.log('coba');
  }
}

// class admin, semua yang dimiliki oleh member akan dimiliki oleh admin
class Admin extends Member {
  // apila ada constructor, maka constructor parent harus dipanggil
  constructor(name) {
    console.log(
      '----------------------SUPER CONSTRUCTOR----------------------------------'
    );
    // panggil constructor parent, dengan parameter sesuai constructor parent
    super(name + ' (admin)');
    // this.name tidak perlu dibuat karena sudah ada di constructor parent
    // this.name = name;
    //   console.log(`nama admin adalah ${name}`);

    console.log(
      '----------------------SUPER METHOD----------------------------------'
    );
    // panggil method parent
    console.log(super.kickMember());
    // ini memanggil method kickMember() pada class admin jika tidak ada akan memanggil method kickMember() pada class member
    console.log(this.kickMember());
  }
  // ini akan menimpa method kickMember() pada class member
  kickMember() {
    return true;
  }
}

const member1 = new Member('diky');
console.log(
  member1,
  member1.kickMember() ? 'bisa kick member' : 'tidak bisa kick member'
);

const admin1 = new Admin('adi');
console.log(
  admin1,
  admin1.kickMember() ? 'bisa kick member' : 'tidak bisa kick member'
);

console.log(
  '----------------------GETTER & SETTER----------------------------------'
);

class Student {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  // get dan set masuk ke dalam prototype
  // get berfungsi untuk mengambil nilai dari properti
  get fullname() {
    return `${this.first} ${this.last}`;
  }

  set fullname(value) {
    let res = value.split(' ');
    this.first = res[0];
    this.last = res[1];
  }
}

// coba method get
const student1 = new Student('diky', 'adisaputra');
console.log(student1);
console.log(student1.fullname);

// coba method set, ini akan menimpa variabel first dan last
student1.fullname = 'lionel messi';
console.log(student1.fullname);
console.log(student1);

console.log(
  '----------------------PUBLIC & PRIVATE CLASS FIELD & METHOD----------------------------------'
);

class Murid {
  // public class field (dapat diakses dari luar class)
  name;
  age;

  // private class field (tidak dapat diakses dari luar class)
  #nilai = 0;

  tambah(x) {
    this.#nilai += x;
  }

  kurang(x) {
    this.#nilai -= x;
  }

  getRerata(x) {
    return this.#rerata(x);
  }
  // private method (tidak dapat diakses dari luar class)
  #rerata(x) {
    return (this.#nilai + x) / 2;
  }
}

const murid1 = new Murid();
murid1.name = 'diky';
console.log(murid1.tambah(10));
console.log(murid1.kurang(5));
console.log(murid1);
console.log(murid1.nilai); // hasilkan akan undefined
console.log(murid1.getRerata(10));

//instanceof = digunakan apakah object tertentu merupakan instance dari class tertentu
console.log(murid1 instanceof Murid);

console.log(
  '----------------------STATIC FIELD & METHOD----------------------------------'
);

class Static {
  // static field = adalah field yang dimiliki oleh class, bukan object
  static name = 'diky';
  static age = 20;

  // static method = adalah method yang dimiliki oleh class, bukan object
  static sum(...numbers) {
    let res = 0;
    numbers.forEach((number) => {
      res += number;
    });
    return res;
  }
}

const static1 = new Static();
console.log(static1); // tidak akan memiliki static field
console.log(Static.name); // cara akses field static
console.log(Static.sum(32, 2343, 3, 3, 3, 43, 3, 4, -343)); // cara akses method static
console.log(
  '------------------------------------------------------------------'
);
