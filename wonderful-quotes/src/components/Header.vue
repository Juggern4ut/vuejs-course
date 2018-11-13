<template>
	<header>
		<h1>Quotes</h1>
		<div class="progress-bar">
			{{amount}} / {{max}}
			<div :style="{width: amount/max*100+'%'}" class="progress"></div>
		</div>
	</header>

</template>

<script>

	export default{
		props: ['amount', 'max'],
		data: function(){
			return{
				percentage: this.amount/this.max*100
			}
		}
	}
	
</script>

<style>
	
	h1{
		text-align: center;
		font-family: sans-serif;
		color: #42b983;
		margin-bottom: 10px;
	}

	.progress-bar{
		border: 1px solid #333;
		max-width: 500px;
		margin: 0px auto;
		height: 20px;
		line-height: 20px;
		border-radius: 4px;
		text-align: center;
		position: relative;
		font-family: sans-serif;
		font-weight: bold;
	}

	.progress{
		top: 0px;
		left: 0px;
		position: absolute;
		background-color: #42b983;
		width: 0%;
		height: 100%;
		transition: .5s ease-out;
		z-index: -1;
		border-right: 2px solid #225f43;
	}
</style>