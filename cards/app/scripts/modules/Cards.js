export default class Cards {

    constructor() {

        this.cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'T'];
        this.cardSuit = {
            'пики': 'spades',
            'трефы': 'clubs',
            'червы': 'hearts',
            'бубны': 'diams'
        };

    }

    calcCardPrice(elem, index) { // назначение стоимости карты

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

    }

    buildDeck () { // сборка колоды

        let desck = [];

        for (let i in this.cardSuit) {

            this.cardValue.forEach((elem, index) => {

                let oneCard = [].concat(this.cardValue[index],
                    this.calcCardPrice(elem, index),
                    this.cardSuit[i]);

                desck.push(oneCard);

            });
        }

        return desck;
    }

    createCards () { // создание карт (HTML)

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

    }

}