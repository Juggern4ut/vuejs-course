<template>
	<div class="quote-grid">
		<hr />
		<app-quote @click.native="deleteQuote(index)" v-for="(quote, index) in quotes">
			{{quote}}
		</app-quote>
	</div>
</template>

<script>
	import Quote from './Quote.vue';
	import {dataBus} from './../main.js';

	export default{
		props: ['quotes'],
		components: {
			'app-quote':Quote
		}, methods:{
			deleteQuote(index){
				dataBus.$emit('deleteQuote', index);
			}
		}
	}
</script>

<style>
	.quote-grid{
		max-width: 1200px;
		margin: 0px auto;
		text-align: center;
	}
</style>