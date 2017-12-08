/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _deskPlaces = document.getElementById('players');

var _desck = document.getElementById('desck');

var game = new _Game.default({
  places: _deskPlaces,
  desck: _desck
});
game.putDesck();
;

(function () {
  function dealCards() {
    // раздать карты
    var dealCards = document.getElementById('deal_cards');
    var gamers = document.getElementById('gamers');

    dealCards.onclick = function (e) {
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
    // еще карту
    var more = document.getElementsByClassName('more');

    var _loop = function _loop(i, x) {
      more[i].onclick = function (e) {
        e.preventDefault();
        game.moreCard(more[i].parentElement.parentElement);
        game.endOfGame();
      };
    };

    for (var i = 0, x = more.length; i < x; i++) {
      _loop(i, x);
    }
  }

  function enoughCard() {
    // хватит карт
    var enough = document.getElementsByClassName('enough');

    if (enough) {
      var _loop2 = function _loop2(i) {
        enough[i].onclick = function (e) {
          e.preventDefault();
          game.enough(enough[i]);
          game.endOfGame();
        };
      };

      for (var i = 0; i < enough.length; i++) {
        _loop2(i);
      }
    }
  }

  dealCards();
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Table2 = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game =
/*#__PURE__*/
function (_Table) {
  _inherits(Game, _Table);

  function Game() {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
  }

  _createClass(Game, [{
    key: "countPoints",
    value: function countPoints() {
      // подсчет очков
      var point = document.getElementsByClassName('points');
      var players = []; // все игроки

      var points = []; // очки всех игроков

      for (var i = 0; i < this.persons; i++) {
        var temp = [];
        var priceCard = 0;
        var summCardPoints = 0;
        var player = document.getElementById("player_".concat(i));
        var tempPoints = [];
        players.push(player);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = player.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _i2 = _step.value;

            if (_i2.classList.contains('card')) {
              // получаем цену карты
              temp.push(_i2);
              priceCard = +_i2.getAttribute('data-price');

              if (priceCard) {
                tempPoints.push(priceCard); // массив из стоимостей всех карт на руках игрока

                summCardPoints += priceCard; // получаем сумму карт на руках
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        for (var key in tempPoints) {
          if (summCardPoints > 21 && tempPoints[key] === 11) {
            // если перебор, проверяем есть ли туз
            summCardPoints = 0;
            tempPoints[key] = 1; // стоимость туза - 1 при переборе

            for (var _key in tempPoints) {
              // получаем сумму карт на руках
              summCardPoints += tempPoints[_key];
            }
          }
        }

        point[i].innerText = summCardPoints;
        points.push(summCardPoints);
      }

      return points;
    }
  }, {
    key: "moreCard",
    value: function moreCard(player) {
      // еще карту
      player.appendChild(this.desck.removeChild(this.desck.lastChild));
      this.countPoints();
    }
  }, {
    key: "enough",
    value: function enough(enoughBtn) {
      // хватит карт
      enoughBtn.parentElement.classList.add('enough_cards');
    }
  }, {
    key: "winner",
    value: function winner() {
      // определение победителя
      var gamersPoints = this.countPoints();

      for (var i = 0; i < gamersPoints.length; i++) {
        var player = document.getElementById("player_".concat(i));

        if (gamersPoints[i] > 21) {
          // с перебором обнуляем очки и даем class lost
          if (player.classList.contains('winner')) {
            player.classList.remove('winner');
          }

          player.classList.add('lost');
          player.firstChild.classList.add('enough_cards');
          gamersPoints[i] = 0;
        }

        if (gamersPoints[i] === 21) {
          // если очко, делаем кнопки неактивными (еще, хватит)
          player.firstChild.classList.add('enough_cards');
        }
      }

      var max = gamersPoints[0];

      for (var _i3 = 1; _i3 < gamersPoints.length; ++_i3) {
        // находим максимум по очкам
        if (gamersPoints[_i3] > max) max = gamersPoints[_i3];
      }

      for (var _i4 = 0; _i4 < gamersPoints.length; _i4++) {
        // добавляем класс победителю(лям) и проигравшим по очкам
        var _player = document.getElementById("player_".concat(_i4));

        if (gamersPoints[_i4] != 0 && gamersPoints[_i4] == max) {
          if (_player.classList.contains('lost')) {
            _player.classList.remove('lost');
          }

          _player.classList.add('winner');
        } else if (gamersPoints[_i4] != 0 && gamersPoints[_i4] != max) {
          if (_player.classList.contains('winner')) {
            _player.classList.remove('winner');
          }

          _player.classList.add('lost');
        }
      }
    }
  }, {
    key: "endOfGame",
    value: function endOfGame() {
      this.winner();
      var gamersPoints = this.countPoints();
      var enough = document.getElementsByClassName('enough_cards');

      if (gamersPoints.length === enough.length) {
        for (var i = 0; i < gamersPoints.length; i++) {
          var player = document.getElementById("player_".concat(i));
          player.classList.add('end');
        }
      }
    }
  }]);

  return Game;
}(_Table2.default);

exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Cards2 = _interopRequireDefault(__webpack_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table =
/*#__PURE__*/
function (_Cards) {
  _inherits(Table, _Cards);

  function Table(options) {
    var _this;

    _classCallCheck(this, Table);

    _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this));
    _this.persons;
    _this.places = options.places;
    _this.desck = options.desck;
    return _this;
  }

  _createClass(Table, [{
    key: "shuffle",
    value: function shuffle() {
      // перетасовать карты
      var shuffleDesck = [];

      function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var _ref = [array[j], array[i]];
          array[i] = _ref[0];
          array[j] = _ref[1];
        }

        shuffleDesck = array;
      }

      shuffleArray(this.createCards());
      return shuffleDesck;
    }
  }, {
    key: "putDesck",
    value: function putDesck() {
      // выложить колоду на стол
      var desck = this.shuffle();

      for (var i = 0; i < desck.length; i++) {
        this.desck.appendChild(desck[i]);
      }
    }
  }, {
    key: "placement",
    value: function placement() {
      // рассадить игроков
      if (this.persons === 0) this.persons = Table.getPersonsDefoult();

      for (var i = 0; i < this.persons; i++) {
        var playerPlace = document.createElement('li');
        playerPlace.classList.add('player');
        playerPlace.id = "player_".concat(i);
        playerPlace.innerHTML = "<div class=\"options\">\n                <a href=\"#\" class=\"more\">\u0415\u0449\u0435</a>\n                <a href=\"#\" class=\"enough\">\u0425\u0432\u0430\u0442\u0438\u0442</a>\n                <span class=\"points\"></span>\n            </div>";
        this.places.appendChild(playerPlace);
      }
    }
  }, {
    key: "distribution",
    value: function distribution() {
      // раздать карты
      this.placement();

      for (var j = 0; j < 2; j++) {
        for (var i = 0; i < this.persons; i++) {
          var player = document.getElementById("player_".concat(i));
          player.appendChild(this.desck.removeChild(this.desck.lastChild));
        }
      }
    }
  }], [{
    key: "getPersonsDefoult",
    value: function getPersonsDefoult() {
      return 2;
    }
  }]);

  return Table;
}(_Cards2.default);

exports.default = Table;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cards =
/*#__PURE__*/
function () {
  function Cards() {
    _classCallCheck(this, Cards);

    this.cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'T'];
    this.cardSuit = {
      'пики': 'spades',
      'трефы': 'clubs',
      'червы': 'hearts',
      'бубны': 'diams'
    };
  }

  _createClass(Cards, [{
    key: "calcCardPrice",
    value: function calcCardPrice(elem, index) {
      // назначение стоимости карты
      var price;

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
  }, {
    key: "buildDeck",
    value: function buildDeck() {
      var _this = this;

      // сборка колоды
      var desck = [];

      var _loop = function _loop(i) {
        _this.cardValue.forEach(function (elem, index) {
          var oneCard = [].concat(_this.cardValue[index], _this.calcCardPrice(elem, index), _this.cardSuit[i]);
          desck.push(oneCard);
        });
      };

      for (var i in this.cardSuit) {
        _loop(i);
      }

      return desck;
    }
  }, {
    key: "createCards",
    value: function createCards() {
      // создание карт (HTML)
      var desck = this.buildDeck();
      var desckHTML = [];

      for (var i = 0; i < desck.length; i++) {
        var card = document.createElement('div');
        card.classList.add("card", "card__".concat(desck[i][2]));
        card.setAttribute("data-value", "".concat(desck[i][0]));
        card.setAttribute("data-price", "".concat(desck[i][1]));
        card.innerHTML = "<div class=\"suit\"></div>";
        desckHTML.push(card);
      }

      return desckHTML;
    }
  }]);

  return Cards;
}();

exports.default = Cards;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map