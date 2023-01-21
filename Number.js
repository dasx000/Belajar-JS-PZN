// =_=_=_=  PROPERTIES  =_=_=_=_=_=_=

// (1)
console.log(Number.EPSILON); //Number.EPSILON adalah konstanta yang ditentukan dalam JavaScript yang mewakili jarak terkecil antara dua buah nilai yang berbeda yang masih dapat dianggap sebagai "sama" oleh mesin pengolah angka floating-point.

// (2)
console.log(
  Number.MAX_SAFE_INTEGER,
  String(Number.MAX_SAFE_INTEGER).split('').length + ' digit'
); //Number.MAX_SAFE_INTEGER adalah konstanta yang ditentukan dalam JavaScript yang merepresentasikan nilai terbesar yang dapat diakui sebagai bilangan bulat yang aman untuk digunakan dalam operasi matematika. jika angka diatas ini operasi matematika akan rancu.
console.log(Number.MAX_SAFE_INTEGER / 1000000000000 + ' T');

// (3)
console.log(
  Number.MIN_SAFE_INTEGER,
  String(Number.MIN_SAFE_INTEGER).replace('-', '').split('').length + ' digit'
); //Number.MIN_SAFE_INTEGER adalah konstanta yang ditentukan dalam JavaScript yang merepresentasikan nilai terkecil yang dapat diakui sebagai bilangan bulat yang aman untuk digunakan dalam operasi matematika.

// (4)
console.log(Number.MAX_VALUE); //Number.MAX_VALUE adalah konstanta yang ditentukan dalam JavaScript yang merepresentasikan nilai terbesar yang dapat diakui sebagai angka. Di atas angka ini akan dianggap infinity.

// (5)
console.log(Number.MIN_VALUE); //Number.MIN_VALUE adalah konstanta yang ditentukan dalam JavaScript yang merepresentasikan nilai terkecil yang dapat diakui sebagai angka. berbentuk positif number.

// (6)
console.log('6', Number.NEGATIVE_INFINITY); //Number.NEGATIVE_INFINITY adalah konstanta yang ditentukan dalam JavaScript yang merepresentasikan nilai negatif tak hingga. Kode ini akan menghasilkan nilai negative infinity : (-Number.MAX_VALUE * 2)

// (7)
console.log('7', Number.POSITIVE_INFINITY); //Number.POSITIVE_INFINITY adalah konstanta yang ditentukan dalam JavaScript yang merepresentasikan nilai positif tak hingga. Kode ini akan menghasilkan nilai positive infinity : (Number.MAX_VALUE * 2)

// (8)
console.log(Number.NaN); //Number.NaN adalah konstanta yang ditentukan dalam JavaScript yang merepresentasikan nilai yang bukan angka. Kode ini akan menghasilkan nilai NaN : (0 / 0)

// =_=_=_=  METHOD  =_=_=_=_=_=_=

// (1)
console.log('1', Number.isFinite(Number.MAX_VALUE)); //Number.isFinite() adalah fungsi yang ditentukan dalam JavaScript yang digunakan untuk menentukan apakah nilai yang diberikan adalah angka yang terbatas atau tidak. Jika nilai yang diberikan adalah angka INFINITY atau NaN, maka fungsi ini akan mengembalikan nilai false.

// (2)
console.log(
  '2',
  Number.isInteger(1),
  'true berarti bilangan bulat (bukan desimal)'
); //Number.isInteger() adalah fungsi yang ditentukan dalam JavaScript yang digunakan untuk menentukan apakah nilai yang diberikan adalah bilangan bulat atau bukan. Jika nilai yang diberikan adalah bilangan bulat, maka fungsi ini akan mengembalikan nilai true.

// (3)
console.log('3', Number.isNaN(0 / 0), 'jika true, maka bukan angka'); //Number.isNaN() adalah fungsi yang ditentukan dalam JavaScript yang digunakan untuk menentukan apakah nilai yang diberikan adalah NaN atau bukan. Jika nilai yang diberikan adalah NaN, maka fungsi ini akan mengembalikan nilai true.

// (4)
console.log('4', Number.isSafeInteger(1)); //Number.isSafeInteger() adalah fungsi yang ditentukan dalam JavaScript yang digunakan untuk menentukan apakah nilai yang diberikan adalah bilangan bulat yang aman atau tidak. Jika nilai yang diberikan adalah bilangan bulat yang aman, maka fungsi ini akan mengembalikan nilai true.

// (5)
console.log('5', Number.parseFloat('1.324234')); //Number.parseFloat() adalah fungsi yang ditentukan dalam JavaScript yang digunakan untuk mengubah string menjadi angka dengan desimal. Jika string yang diberikan tidak dapat diubah menjadi angka, maka fungsi ini akan mengembalikan nilai NaN.

// (6)
console.log('6', Number.parseInt('1.99999')); //Number.parseInt() adalah fungsi yang ditentukan dalam JavaScript yang digunakan untuk mengubah string menjadi angka bulat. Jika string yang diberikan tidak dapat diubah menjadi angka, maka fungsi ini akan mengembalikan nilai NaN.
// console.log();

// (7)
console.log('7', (32433).toExponential(2)); //Number.prototype.toExponential() adalah fungsi yang ditentukan dalam JavaScript yang digunakan untuk mengubah angka menjadi bentuk notasi ilmiah. Jika angka yang diberikan adalah 0, maka fungsi ini akan mengembalikan nilai 0. Jika angka yang diberikan adalah NaN, maka fungsi ini akan mengembalikan nilai NaN.

// (8)
console.log('8', (4.343334).toFixed(2)); //Number.prototype.toFixed() adalah fungsi yang ditentukan dalam JavaScript yang digunakan untuk mengubah angka menjadi bentuk desimal. Jika angka yang diberikan adalah NaN, maka fungsi ini akan mengembalikan nilai NaN.

// (9)
console.log('9', (23).toPrecision(4)); //Number.prototype.toPrecision() adalah fungsi yang ditentukan dalam JavaScript yang digunakan untuk mengubah angka menjadi bentuk desimal dengan jumlah digit yang ditentukan. Jika angka yang diberikan adalah NaN, maka fungsi ini akan mengembalikan nilai NaN.

// (10)
console.log('10', (23).toString(), typeof (23).toString()); //Number.prototype.toString() adalah fungsi yang ditentukan dalam JavaScript yang digunakan untuk mengubah angka menjadi bentuk string. Jika angka yang diberikan adalah NaN, maka fungsi ini akan mengembalikan nilai NaN.

// (11)
console.log('11', (232342134).valueOf()); //Number.prototype.valueOf() adalah fungsi yang ditentukan dalam JavaScript yang digunakan untuk mengembalikan nilai dari angka. Jika angka yang diberikan adalah NaN, maka fungsi ini akan mengembalikan nilai NaN.

// (12)
console.log('12', (324).toLocaleString('ar-EG')); // Mengubar number menjadi bahasa local
