'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

;(function () {
	// задание 1

	console.log('задание 1:');

	var summ = 0;

	for (var i = 0, x = 5; i < x; i++) {

		var cube = Math.pow(i, 3);
		summ += cube;
	}

	console.log(summ);
})();

(function () {
	// задание 2

	console.log('задание 2:');

	var string = 'Строка состоящая из нескольких слов';

	var arr = string.split(' ');

	for (var i = 0, x = arr.length; i < x; i++) {
		console.log(arr[i]);
	}
})();

(function () {
	// задание 3

	console.log('задание 3:');

	var arr = [];

	var random = Math.trunc(Math.random() * 10);
	arr.length = random;

	for (var i = 0, x = arr.length; i < x; i++) {
		arr[i] = Math.trunc(Math.random() * 10);
	}

	console.log(arr);
})();

(function () {
	// задание 3.1

	console.log('задание 3.1:');

	var num = 0;

	for (var i = 0, x = Math.random() * 10; i < x; i++) {

		num = Math.trunc(Math.random() * 10);

		console.log(num);
	}
})();

(function () {
	// задание 4

	console.log('задание 4:');

	var num = 0;

	for (var i = 0, x = Math.random() * 10; i < x; i++) {

		num = Math.trunc(Math.random() * 10);

		console.log(num);
	}
})();

(function () {
	// задание 5

	console.log('задание 5:');

	var num = 1;
	var row = 1;
	var leng = 6;

	for (var i = 0, x = leng; i < x; i++) {

		var arr = [];

		if (row <= 2) {

			for (var _i = 0; _i < row; _i++) {

				arr.push(num);
			}
		} else {

			for (var _i2 = 0; _i2 < row; _i2++) {

				var _x = temp[_i2 - 1];
				var y = temp[_i2];

				if (_x === undefined) {
					_x = 0;
				}
				if (y === undefined) {
					y = 0;
				}

				arr.push(_x + y);
			}
		}

		var temp = [].concat(arr);

		var zeroLength = leng - arr.length;

		for (var _i3 = 0; _i3 < zeroLength; _i3++) {

			if (_i3 < zeroLength / 2) {

				arr.unshift('');
			} else {

				arr.push('');
			}
		}

		console.log(arr.join(' '));

		++row;
	}
})();

(function () {
	// задание 6

	console.log('задание 6:');

	var eggs = 1;

	for (var i = 0; i == 0;) {

		if (eggs % 2 === 1 && eggs % 3 === 1 && eggs % 4 === 1 && eggs % 5 === 1 && eggs % 6 === 1 && eggs % 7 === 0) {

			console.log(eggs);

			return;
		} else {

			++eggs;
		}
	}
})();

(function () {
	// задание 7

	console.log('задание 7:');

	var arrOneRub = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
	    arrOneKop = ['ноль', 'одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
	    arrTen = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
	    arrHundred = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

	var summ = prompt('Введите сумму', '');

	var rub = 0,
	    kop = 0;
	var arrRub = [],
	    arrKop = [];
	var stringRub = '',
	    stringKop = '';

	function countMoney(summa) {

		rub = Math.trunc(summa);
		kop = Math.round((summa - Math.trunc(summa)) * 100);
	}

	countMoney(summ);

	if (isNaN(kop) || rub + kop === 0) {

		summ = prompt('Введите правильно! Разделитель точка, после точки только 2 символа!', '');
		countMoney(summ);
	}

	arrRub = String(rub).split('');
	arrKop = String(kop).split('');

	if (kop < 20) {

		stringKop = arrOneKop[kop];
	} else if (kop >= 20 && kop < 100) {

		stringKop = arrTen[+arrKop[0]] + ' ' + arrOneKop[+arrKop[1]];
	}

	if (rub < 20) {

		stringRub = arrOneRub[rub];
	} else if (rub >= 20 && rub < 100) {

		stringRub = arrTen[+arrRub[0]] + ' ' + arrOneRub[+arrRub[1]];
	} else if (rub >= 100) {

		stringRub = arrHundred[+arrRub[0]] + ' ' + arrTen[+arrRub[1]] + ' ' + arrOneRub[+arrRub[2]];
	}

	console.log(stringRub + ' руб. ' + stringKop + ' коп.');
})();

(function () {
	// задание 8

	console.log('задание 8:');

	var date = new Date(); // сегодня
	var oneDay = 1000 * 60 * 60 * 24; // один день в миллисек

	var yearBD = 2018;
	var monthBD = 4;
	var dayBD = 9;

	var happyBD = new Date(yearBD, monthBD, dayBD); // День Рождения

	var diff = happyBD - date; // разница между днем рождения и сегоднячним днем в миллисек

	console.dir('До Дня Рождения осталось: ' + Math.trunc(diff / oneDay));
})();

(function () {
	// фильтр

	console.log('Фильтр:');

	var inp = document.getElementById('filter');
	var item = document.getElementsByClassName('block__item');

	var items = [].concat(_toConsumableArray(item));

	inp.addEventListener('keyup', function () {

		var lettersInInputArr = inp.value.toUpperCase().split('');

		for (var j = 0; j < items.length; j++) {

			var letters = [].concat(_toConsumableArray(items[j].innerHTML.toUpperCase()));

			if (inp.value.length === 0) {

				for (var i = 0; i < items.length; i++) {
					items[i].classList.remove('hidden');
				}
			} else {

				var lettersInInputStr = lettersInInputArr.join('');
				var lettersInItemStr = items[j].innerHTML.split('').slice(0, lettersInInputArr.length).join('').toUpperCase();

				if (lettersInInputStr != lettersInItemStr) {
					items[j].classList.add('hidden');
				} else {
					items[j].classList.remove('hidden');
				}
			}
		}
	});
})();