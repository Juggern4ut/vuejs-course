var app = new Vue({
	el: 'main',
	data: {
		textField: '',
		textField2: ''
	}, methods:{
		alertMe: function(){
			alert();
		},
		updateParagraph: function(event){
			this.textField = event.target.value;
		},
		updateParagraph2: function(event){
			this.textField2 = event.target.value;
		}
	}
});