<template>
	<div id="app">
		<button @click="currentView = 'app-quote'">Quote</button>
		<button @click="currentView = 'app-author'">Author</button>
		<button @click="currentView = 'app-new'">New</button>
		<p>{{currentView}}</p>
		<!--<app-quote>
		</app-quote>-->
		<keep-alive>
			<component :is="currentView">
				<h2 slot="title">{{quoteTitle}}</h2>
				<p slot="content">Fuck her right in the pu$$y</p>
				<p slot="subtitle">I overwrite the default span</p>
			</component>
		</keep-alive>
	</div>
</template> 

<script>

	import Quote from './components/Quote.vue'
	import Author from './components/Author.vue'
	import New from './components/New.vue'

	export default {
		data: function(){
			return {
				currentView: 'app-quote',
				quoteTitle: 'The Quote'
			}
		},
		components: {
			'app-quote': Quote,
			'app-author': Author,
			'app-new': New,
		}
	}

</script>

<style>

</style>
