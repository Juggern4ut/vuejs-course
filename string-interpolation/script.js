var app = new Vue({
	el: 'main',
	data: {
		name: 'Lukas',
		age: 24,
		title: 'Hello World!',
		link: 'https://www.google.com',
		imgLink: 'http://placekitten.com/200/300',
		finishedLink: '<a href="https://www.google.com">Google</a>'
	}, methods:{
		sayHello: function(){
			this.title = 'Hello!';
			return this.title;
		}
	}
});