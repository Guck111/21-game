import Table from './Table';

export default class Game extends Table{

    countPoints () { // подсчет очков

        let point = document.getElementsByClassName('points');
        let players = []; // все игроки
        let points = []; // очки всех игроков

        for (let i = 0; i < this.persons; i++) {

            let temp = [];
            let priceCard = 0;
            let summCardPoints = 0;

            let player = document.getElementById(`player_${i}`);
            let tempPoints = [];

            players.push(player);

            for (let i of player.children) {

                if (i.classList.contains('card')) { // получаем цену карты
                    temp.push(i);
                    priceCard = +i.getAttribute('data-price');

                    if (priceCard) {
                        tempPoints.push(priceCard);
                        summCardPoints += priceCard; // получаем сумму карт на руках
                    }
                }

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

            point[i].innerText = summCardPoints;
            points.push(summCardPoints);

        }

        return points;
    }

    moreCard (player) { // еще карту

        player.appendChild(this.desck.removeChild(this.desck.lastChild));
        this.countPoints();
    }

    enough (enoughBtn) { // хватит карт

        enoughBtn.parentElement.classList.add('enough_cards');
    }

    winner () { // определение победителя

        let gamersPoints = this.countPoints();

        for (let i = 0; i < gamersPoints.length; i++) { // с перебором обнуляем очки

            let player = document.getElementById(`player_${i}`);

            if (gamersPoints[i] > 21) {

                if (player.classList.contains('winner')) {
                    player.classList.remove('winner');
                }

                player.classList.add('lost');
                player.firstChild.classList.add('enough_cards');
                gamersPoints[i] = 0;
            }

            if (gamersPoints[i] === 21) {

                player.firstChild.classList.add('enough_cards');
            }
        }

        let max = gamersPoints[0];

        for (let i = 1; i < gamersPoints.length; ++i) { // находим максимум по очкам
            if (gamersPoints[i] > max) max = gamersPoints[i];
        }

        for (let i = 0; i < gamersPoints.length; i++) { // добавляем класс победителю(лям) и проигравшим по очкам

            let player = document.getElementById(`player_${i}`);

            if (gamersPoints[i] != 0 && gamersPoints[i] == max) {

                if (player.classList.contains('lost')) {
                    player.classList.remove('lost');
                }

                player.classList.add('winner');

            } else if (gamersPoints[i] != 0 && gamersPoints[i] != max) {

                if (player.classList.contains('winner')) {
                    player.classList.remove('winner');
                }

                player.classList.add('lost');
            }
        }
    }

    endOfGame () {

        this.winner();

        let gamersPoints = this.countPoints();
        let enough = document.getElementsByClassName('enough_cards');

        if (gamersPoints.length === enough.length) {

            for (let i = 0; i < gamersPoints.length; i++) {

                let player = document.getElementById(`player_${i}`);

                player.classList.add('end');

            }

        }

    }

}