var app = new Vue({
	el: 'main',
	data: {
		className: "",
		className2: "",
		color: "red",
		width: 100,
		useMyClass: false,
		bgColor: 'gray',
		pbWidth: 0,
		hasClass: false,
		classes: ['fancy', 'border', 'big', {'red':false}]
	},
	computed:{

	},
	methods:{
		startEffect: function(){
			var vue = this;
			setInterval(function(){
				vue.hasClass = !vue.hasClass;
			}, 1000);
		},
		startProgressBar: function(){
			var vue = this;
			var tmp = setInterval(function(){
				vue.pbWidth += 10;
				if(vue.pbWidth >= 200){
					clearInterval(tmp);
				}
			}, 500);
		}
	}
});