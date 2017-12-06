;(function () {

    function dealCards() { // раздать карты

        let dealCards = document.getElementById('deal_cards');
        let gamers = document.getElementById('gamers');

        dealCards.onclick = function(e){

            e.preventDefault();

            this.classList.add('no_active');

            game.persons = +gamers.value;

            game.distribution();
            game.countPoints();

        };

    }

    dealCards();

})();
