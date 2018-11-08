var app = new Vue({
	el: 'main',
	data: {
		attachRed: false,
		color: "red",
		width: 100
	},
	computed:{
		divClasses: function(){
			return {
				red: this.attachRed,
				blue: !this.attachRed
			};
		},
		myStyle: function(){
			return {
				'background-color':this.color,
				'width':this.width+'px'
			}
		}
	}
});