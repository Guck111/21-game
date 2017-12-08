import Game from './modules/Game';

const _deskPlaces = document.getElementById('players');
const _desck = document.getElementById('desck');

let game = new Game({
    places: _deskPlaces,
    desck: _desck
});

game.putDesck();

;(function () {

    function dealCards() { // раздать карты

        let dealCards = document.getElementById('deal_cards');
        let gamers = document.getElementById('gamers');

        dealCards.onclick = function(e){

            e.preventDefault();

            this.classList.add('no_active');

            game.persons = +gamers.value;

            game.distribution();
            game.winner();

            moreCard();
            enoughCard();

        };
    }

    function moreCard() {

        let more = document.getElementsByClassName('more');

        for (let i = 0, x = more.length; i < x; i++){

            more[i].onclick = function(e) {

                e.preventDefault();
                game.moreCard(more[i].parentElement.parentElement);

                game.endOfGame();
            }
        }
    }

    function enoughCard() {

        let enough = document.getElementsByClassName('enough');

        if (enough) {

            for (let i = 0; i < enough.length; i++){

                enough[i].onclick = function (e) {

                    e.preventDefault();

                    game.enough(enough[i]);
                    game.endOfGame();
                }
            }
        }
    }

    dealCards();

})();
