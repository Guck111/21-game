;(() => { // задание 1

	console.log('задание 1:');

	let summ = 0;

	for (let i = 0, x = 5; i < x; i++){

		let cube = Math.pow(i,3);
		summ += cube;

	}

	console.log(summ)

})();

(() => { // задание 2

	console.log('задание 2:');

	let string = 'Строка состоящая из нескольких слов';

	let arr = string.split(' ');

	for (let i = 0, x = arr.length; i < x; i++){
		console.log(arr[i]);
	}	

})();

(() => { // задание 3

	console.log('задание 3:');

	let arr = [];

	let random = Math.trunc(Math.random()*10);
	arr.length = random;

	for (let i = 0, x = arr.length; i < x; i++){
		arr[i] = Math.trunc(Math.random()*10);
	}

	console.log(arr)

})();

(() => { // задание 3.1

	console.log('задание 3.1:');

	let num = 0;

	for (let i = 0, x = Math.random()*10; i < x; i++){

		num = Math.trunc(Math.random()*10);

		console.log(num);

	}

})();

(() => { // задание 4

	console.log('задание 4:');

	let num = 0;

	for (let i = 0, x = Math.random()*10; i < x; i++){

		num = Math.trunc(Math.random()*10);

		console.log(num);

	}

})();

(() => { // задание 5

	console.log('задание 5:');

	let num = 1;
	let row = 1;
	let leng = 6;

	for (let i = 0, x = leng; i < x; i++){

		let arr = [];

		if(row <= 2){

			for (let i = 0; i < row; i++){

				arr.push(num);

			}

		} else {

			for (let i = 0; i < row; i++){

				let x = temp[i-1];
				let y = temp[i]

				if(x === undefined){
					x = 0
				}
				if(y === undefined){
					y = 0
				}

				arr.push(x + y);
			}

		}

		let temp = [...arr];

		let zeroLength = leng - arr.length;

		for(let i = 0; i < zeroLength; i++){

			if(i < zeroLength/2){

				arr.unshift('');

			} else {

				arr.push('');

			}
		}

		console.log(arr.join(' '))

		++row

	}

})();

(() => { // задание 6

	console.log('задание 6:');

	let eggs = 1;

	for(let i = 0; i == 0;){

		if(eggs % 2 === 1 && eggs % 3 === 1 && eggs % 4 === 1 && eggs % 5 === 1 && eggs % 6 === 1 && eggs % 7 === 0){
			
			console.log(eggs);

			return;

		} else {

			++eggs

		}

	}

})();

// (() => { // задание 7

// 	console.log('задание 7:');

// 	let arrOneRub = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
// 	arrOneKop = ['ноль', 'одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
// 	arrTen = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
// 	arrHundred = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

// 	let summ = prompt('Введите сумму', '');

// 	let rub = 0, kop = 0;
// 	let arrRub = [], arrKop = [];
// 	let stringRub = '', stringKop = '';

// 	function countMoney(summa){

// 		rub = Math.trunc(summa);
// 		kop = Math.round((summa - Math.trunc(summa)) * 100);

// 	}

// 	countMoney(summ);

// 	if(isNaN(kop) || rub + kop === 0){

// 		summ = prompt('Введите правильно! Разделитель точка, после точки только 2 символа!', '');
// 		countMoney(summ);

// 	}

// 	arrRub = String(rub).split('');
// 	arrKop = String(kop).split('');

// 	if(kop < 20){

// 		stringKop = arrOneKop[kop];

// 	} else if (kop >= 20 && kop < 100){

// 		stringKop = arrTen[+arrKop[0]] + ' ' + arrOneKop[+arrKop[1]];

// 	}

// 	if(rub < 20){

// 		stringRub = arrOneRub[rub];

// 	} else if (rub >= 20 && rub < 100){

// 		stringRub = arrTen[+arrRub[0]] + ' ' + arrOneRub[+arrRub[1]];

// 	} else if (rub >= 100){

// 		stringRub = arrHundred[+arrRub[0]] + ' ' + arrTen[+arrRub[1]] + ' ' + arrOneRub[+arrRub[2]];

// 	}

// 	console.log(stringRub + ' руб. ' + stringKop + ' коп.');

// })();

(() => { // задание 8

	console.log('задание 8:');

	let date = new Date(); // сегодня
	let oneDay = 1000 * 60 * 60 * 24; // один день в миллисек

	let yearBD = 2018;
	let monthBD = 4;
	let dayBD = 9;

	let happyBD = new Date(yearBD, monthBD, dayBD); // День Рождения

	let diff = happyBD - date; // разница между днем рождения и сегоднячним днем в миллисек

	console.dir('До Дня Рождения осталось: ' + Math.trunc(diff / oneDay));

})();

(() => { // фильтр

	console.log('Фильтр:');

	let inp = document.getElementById('filter');
	let item = document.getElementsByClassName('block__item');

	let items = [...item];

	inp.addEventListener('keyup', () => {

		let lettersInInputArr = inp.value.toUpperCase().split('');

		for (let j = 0; j < items.length; j++){

			let letters = [...items[j].innerHTML.toUpperCase()];

			if(inp.value.length === 0){

				for (let i = 0; i < items.length; i++){
					items[i].classList.remove('hidden');
				}

			} else {

				let lettersInInputStr = lettersInInputArr.join('');
				let lettersInItemStr = items[j].innerHTML.split('').slice(0, lettersInInputArr.length).join('').toUpperCase();

				if(lettersInInputStr != lettersInItemStr){
					items[j].classList.add('hidden');
				} else {
					items[j].classList.remove('hidden');
				}

			}

		}
	})

})();

// (() => {
// 	let promise = new Promise((res, rej) => {

// 		let a = Math.floor(Math.random()*10);
// 		console.log(a)

// 		setTimeout(() => {
// 			if(a < 5) {
// 				res()
// 			} else {
// 				rej()
// 			}
// 		}, 3000)
// 	});
// 	console.log(promise)
// 	promise.then(() => {
// 		return console.log(2)
// 	}, () => {
// 		return console.log(3)
// 	})  
// })();





(() => {

	new Promise((res, rej) => {

		setTimeout(() => {res()}, Math.floor(Math.random()*1000))
		setTimeout(() => {rej()}, Math.floor(Math.random()*1000))


	})
	.then((str) => {
		console.log('str1')
	},
	(str) => {
		console.log('err')
	})
	.then((str) => {
		return new Promise((res, rej) => {

			setTimeout(() => {res('ok')}, Math.floor(Math.random()*1000))
			setTimeout(() => {rej()}, Math.floor(Math.random()*1000))

		})
	})
	.then((str) => {
		console.log('str2')
	})
	.then((str) => {
		console.log('str3')
	})
	.then((str) => {
		console.log('str4')
	})
	.catch((str) => {
		console.log('str5')
	});

})();









































