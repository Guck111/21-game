import Cards from './Cards';

export default class Table extends Cards {

    constructor(options) {

        super();

        this.persons;
        this.places = options.places;
        this.desck = options.desck;

    }

    shuffle() { // перетасовать карты

        let shuffleDesck = [];

        function shuffleArray(array) {

            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }

            shuffleDesck = array;

        }

        shuffleArray(this.createCards());

        return shuffleDesck;

    }

    putDesck() { // выложить колоду на стол

        let desck = this.shuffle();

        for (let i = 0; i < desck.length; i++) {

            this.desck.appendChild(desck[i]);

        }
    }

    placement() { // рассадить игроков

        if(this.persons === 0) this.persons = Table.getPersonsDefoult();

        for (let i = 0; i < this.persons; i++) {

            let playerPlace = document.createElement('li');
            playerPlace.classList.add('player');
            playerPlace.id = `player_${i}`;
            playerPlace.innerHTML =
                `<div class="options">
                <a href="#" class="more">Еще</a>
                <a href="#" class="enough">Хватит</a>
                <span class="points"></span>
            </div>`;

            this.places.appendChild(playerPlace);
        }
    }

    distribution() { // раздать карты

        this.placement();

        for (let j = 0; j < 2; j++) {

            for (let i = 0; i < this.persons; i++) {

                let player = document.getElementById(`player_${i}`);
                player.appendChild(this.desck.removeChild(this.desck.lastChild));

            }
        }
    }

    static getPersonsDefoult() {
        return 2;
    }
}