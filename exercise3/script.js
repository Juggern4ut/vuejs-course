var app = new Vue({
	el: 'main',
	data: {
		value: 0
	}, computed:{
		result: function(){
			return this.value >= 35 ? "Done!" : "Not there yet";
		}
	}, watch:{
		value: function(value){
			var vm = this;
			if(value >= 35){
				setTimeout(function(){
					vm.value = 0;
				}, 5000);
			}
		}
	}
});