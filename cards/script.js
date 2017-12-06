'use strict';

const _deskPlaces = document.getElementById('players');
const _desck = document.getElementById('desck');

function Cards() {

    this.cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'T'];
    this.cardSuit = {
        'пики': 'spades',
        'трефы': 'clubs',
        'червы': 'hearts',
        'бубны': 'diams'
    };

};

Cards.prototype.calcCardPrice = function (elem, index) { // назначение стоимости карты

    let price;

    if (elem === 'T') {
        price = 11;
    } else if (elem === 'J') {
        price = 2;
    } else if (elem === 'Q') {
        price = 3;
    } else if (elem === 'K') {
        price = 4;
    } else {
        price = index + 2;
    }

    return price;

};

Cards.prototype.buildDeck = function () { // сборка колоды

    let desck = [];

    for (let i in this.cardSuit) {

        this.cardValue.forEach((elem, index) => {

            let oneCard = [].concat(this.cardValue[index],
                this.calcCardPrice(elem, index),
                this.cardSuit[i]);

            desck.push(oneCard);

        });
    }
    console.log(desck);
    return desck;
};

Cards.prototype.createCards = function () { // создание карт (HTML)

    let desck = this.buildDeck();
    let desckHTML = [];

    for (let i = 0; i < desck.length; i++) {

        let card = document.createElement('div');
        card.classList.add(`card`, `card__${desck[i][2]}`);
        card.setAttribute(`data-value`, `${desck[i][0]}`);
        card.setAttribute(`data-price`, `${desck[i][1]}`);
        card.innerHTML = `<div class="suit"></div>`;

        desckHTML.push(card);

    }

    return desckHTML;

};

function Table(options) {

    Cards.apply(this, arguments);
    this.persons = options.persons;
    this.places = options.places;
    this.desck = options.desck;

}

Table.prototype = Object.create(Cards.prototype);
Table.prototype.constructor = Table;

Table.prototype.shuffle = function () { // перетасовать карты

    let shuffleDesck = [];

    function shuffleArray(array) {

        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        shuffleDesck = array;

    }

    shuffleArray(this.createCards());
    console.log(shuffleDesck);
    return shuffleDesck;

};

Table.prototype.putDesck = function () { // выложить колоду на стол

    let desck = this.shuffle();

    for (let i = 0; i < desck.length; i++) {

        this.desck.appendChild(desck[i]);

    }
};

Table.prototype.placement = function () { // рассадить игроков

    for (let i = 0; i < this.persons; i++) {

        let playerPlace = document.createElement('li');
        playerPlace.classList.add('player');
        playerPlace.id = `player_${i}`;
        playerPlace.innerHTML =
            `<div class="options">
                <a href="#" class="more" id="more">Еще</a>
                <a href="#" class="enough" id="enough">Хватит</a>
            </div>`;

        this.places.appendChild(playerPlace);
    }
};

Table.prototype.distribution = function () { // раздать карты

    this.placement();

    for (let j = 0; j < 2; j++) {

        for (let i = 0; i < this.persons; i++) {

            let player = document.getElementById(`player_${i}`);
            player.appendChild(this.desck.removeChild(this.desck.lastChild));

        }
    }
};

function Game(options) {

    Table.apply(this, arguments);

}

Game.prototype = Object.create(Table.prototype);
Game.prototype.constructor = Game;

Game.prototype.countPoints = function () { // подсчет очков

    let temp;
    let priceCard;
    let sumPriceCard;

    for (let i = 0; i < this.persons; i++) {

        temp = [];
        priceCard = 0;
        sumPriceCard = 0;

        let player = document.getElementById(`player_${i}`);
        let tempPoints = [];

        for (let i of player.children) {

            if (i.classList.contains('card')) { // получаем цену карты
                temp.push(i);
                priceCard = +i.getAttribute('data-price');

                if (priceCard) {
                    tempPoints.push(priceCard);
                }
            }

        }

        let summCardPoints = 0;

        for (let key in tempPoints) {  // получаем сумму карт на руках

            summCardPoints += tempPoints[key];
        }

        for (let key in tempPoints) {

            if (summCardPoints > 21 && tempPoints[key] === 11) { // если перебор, проверяем есть ли туз

                summCardPoints = 0;

                tempPoints[key] = 1; // стоимость туза - 1 при переборе

                for (let key in tempPoints) { // получаем сумму карт на руках

                    summCardPoints += tempPoints[key];
                }
            }
        }

        let point = document.createElement('span');
        point.classList.add('points');
        point.innerHTML = summCardPoints;

        player.firstChild.appendChild(point);

    }
};

// let table = new Table();

let game = new Game({
    persons: 3,
    places: _deskPlaces,
    desck: _desck
});

game.putDesck();