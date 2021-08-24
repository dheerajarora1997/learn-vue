new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        onGame: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.onGame = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits The Monster for ' + damage + ' points',
            })

            if (this.checkWin()) {
                return;
            }
            this.monsterAttack();

        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player Heals for 10 points',
            })

            this.monsterAttack();

        },
        splAttack: function () {
            damage = this.calculateDamage(10, 15);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits hard The Monster for ' + damage + ' points',
            })
            if (this.checkWin()) {
                return;
            }
            this.monsterAttack();

        },
        quit: function () {
            this.onGame = false;
        },
        monsterAttack: function () {
            damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits The Player for ' + damage + ' points',
            })
            this.checkWin();
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);

        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You win! New Game')) {
                    this.startGame();
                } else {
                    this.onGame = false;
                }
                this.onGame = false;
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You Lost! Start Game')) {
                    this.startGame();
                } else {
                    this.onGame = false;
                }
                return false;
            }

        }
    },
    watch: {

    }

});