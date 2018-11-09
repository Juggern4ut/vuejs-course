import Vue from 'vue';
import App from './App.vue';
import ServerStatus from './ServerStatus.vue';
import ServerFooter from './ServerFooter.vue';
import ServerList from './ServerList.vue';
import ServerItem from './ServerItem.vue';

Vue.component('my-server-status', ServerStatus);
Vue.component('my-server-footer', ServerFooter);
Vue.component('my-server-list', ServerList);
Vue.component('my-server-item', ServerItem);

new Vue({
	el: '#app',
	render: (h) => {
		return h(App);
	}
});