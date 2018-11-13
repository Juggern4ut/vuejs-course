<template>
	<form @submit.prevent="addQuote">
		<textarea placeholder="Enter Quote here" v-model="newQuote">
			
		</textarea>
		<button>Add Quote</button>
	</form>
</template>

<script>

	import {dataBus} from './../main.js';

	export default{
		data: function(){
			return{
				newQuote: ''
			}
		}, methods: {
			addQuote(){
				dataBus.$emit('quoteAdded', this.newQuote);
				this.newQuote = '';
			}
		}
	}
</script>

<style>
	form{
		margin: 0px auto;
		max-width: 500px;
	}

	form textarea{
		width: calc(100% - 22px);
		margin-top: 10px;
		resize: none;
		height: 150px;
		padding: 10px;
		outline: none;
	}

	form button{
		background-color: #42b983;
		border: 1px solid #444;
		padding: 10px;
		width: 100%;
		position: relative;
		bottom: 5px;
		transition: .5s ease-out;
		outline: none;
		color: white;
		font-size: 17px;
		font-weight: bold;
	}

	form button:hover{
		cursor: pointer;
		background-color:#61eaac;
	}

</style>