setTimeout(function(){

	var vm = new Vue({
		el: 'section',
		data: {
			title: 'First instance'
		},
		created: function(){
			alert('created instance');
		},
		beforeUpdate: function(){
			alert('about to update DOM');
		}
	});

}, 1000);

var vm2 = new Vue({
	el: 'aside',
	data: {
		title: 'Second instance',
	},
	methods:{
		a: function(){
			alert("a");
		}
	}
});

window.onload = function(){
	vm2.title = "Huehuehue";	
};