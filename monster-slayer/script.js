var app = new Vue({
	el: '#app',
	data: {
		gameIsRunning: false,
		playerHp: 100,
		monsterHp: 100,
		log: []
	}, methods:{
		attack: function(isSpecial){
			var playerDamage = Math.floor(Math.random() * 12);
			var monsterDamage = isSpecial 	? Math.floor(Math.random() * 16) 
											: Math.floor(Math.random() * 10);
			
			this.log.unshift({
				player: `The Player did ${monsterDamage} ${isSpecial ? 'special-' : ''}damage`,
				monster: `The Monster did ${playerDamage} damage`
			});

			this.playerHp -= playerDamage;
			this.monsterHp -= monsterDamage;
			this.checkState();
		},
		heal: function(){
			var playerDamage = Math.floor(Math.random() * 10);
			var playerHeal = Math.floor(Math.random() * 13);

			this.log.unshift({
				player: `The Player healed ${playerHeal} HP`,
				monster: `The Monster did ${playerDamage} damage`
			});

			this.playerHp += playerHeal-playerDamage;
			this.playerHp = this.playerHp > 100 ? 100 : this.playerHp;
			this.checkState();
		},
		reset: function(){
			this.gameIsRunning = false;
			this.playerHp = 100;
			this.monsterHp = 100;
			this.log = [];
		},
		checkState: function(){
			if(this.monsterHp <= 0){
				alert('You won!');
				return this.reset();
			}

			if(this.playerHp <= 0){
				alert('You died!');
				return this.reset();
			}
		}
	}
});