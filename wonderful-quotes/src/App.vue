<template>
    <div class="container">
    	<app-header :amount="quotes.length" :max="maxQuotes"></app-header>
    	<app-new-quote></app-new-quote>
    	<app-quote-grid :quotes="quotes"></app-quote-grid>
    	<div><p>Info: Click a quote to delete it!</p></div>
    </div>
</template>

<script>

	import Header from "./components/Header.vue";
	import NewQuote from "./components/NewQuote.vue";
	import QuoteGrid from "./components/QuoteGrid.vue";
	import {dataBus} from './main.js';

    export default {
        data: function(){
        	return {
        		quotes: ['Just a quote to see something'],
        		maxQuotes: 10
        	}
        },
        components: {
        	"app-quote-grid":QuoteGrid,
        	"app-new-quote":NewQuote,
        	"app-header":Header
        }, 
        created(){
			dataBus.$on('quoteAdded', (newQuote)=>{
				if(newQuote.length == 0){
					return alert('Cannot add empty quote');
				}

				if(this.quotes.length >= 10){
					return alert("Too many quotes, please delete some!");
				}

				this.quotes.push(newQuote);
			});

			dataBus.$on('deleteQuote', (index)=>{
				this.quotes.splice(index, 1);
			});
		}
    }
</script>

<style>
	p{
		background-color: #42b983;
		padding: 10px;
		text-align: center;
		color: #FFF;
		font-family: consolas;
		font-size: 16px;
		font-weight: bold;
		border-radius: 5px;
		border: 2px solid #225f43;
		max-width: 500px;
		margin: 0px auto;
	}
</style>
