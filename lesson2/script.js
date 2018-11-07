var app = new Vue({
	el: 'main',
	data: {
		counter: 0
	}, methods:{
		increase: function(){
			this.counter++;
		}
	}
});