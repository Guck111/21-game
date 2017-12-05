'use strict';

const players = document.getElementById('players');

function Cards() {

    this.cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'T'];
    this.cardSuit = {
        'пики': '&spades;',
        'трефы': '&clubs;',
        'червы': '&hearts;',
        'бубны': '&diams;'
    };
    this.tPrice = '';

};

Cards.prototype.calcCardPrice = function (elem, index) { // назначение стоимости карты

    let price;

    if (elem != 'T') {
        price = index + 2;
    } else {
        this.tPrice = 1;
        price = 11;
    }

    return price;

};

Cards.prototype.buildDeck = function () { // сборка колоды

    let desck = [];

    for (let i in this.cardSuit) {

        this.cardValue.forEach((elem, index) => {

            let oneCard = [].concat(this.cardValue[index], this.calcCardPrice(elem, index), this.tPrice, this.cardSuit[i]);
            desck.push(oneCard);

        });
    }

    return desck;
};

function Table (persons, places) {

    Cards.apply(this, arguments);
    this.persons = persons;
    this.places = places;

}

Table.prototype = Object.create(Cards.prototype);
Table.prototype.constructor = Table;

Table.prototype.shuffle = function(){ // перетасовать карты

    let shuffleDesck = [];

    function shuffleArray(array) {

        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        shuffleDesck = array;

    }

    shuffleArray(this.buildDeck());
    console.log(shuffleDesck);
    return shuffleDesck;
};

Table.prototype.placement = function(){ // рассадить игроков

    for(let i = 0; i < this.persons; i++){
        let playerPlace = `<li><div class="player" id="player_${i}"></div></li>`;
        this.places.appendChild(playerPlace);
    }
};

Table.prototype.distribution = function(){ // раздать карты

    for(let i = 0; i < this.persons; i++){

        for(let j = 0; j < 2; j++){

        }
    }
};

let table = new Table(3, players);
table.shuffle();
table.placement();