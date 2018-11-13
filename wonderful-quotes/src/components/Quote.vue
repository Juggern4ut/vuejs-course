<template>
	<div class="quote">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		props: ['quotes']
	}
</script>

<style>
	.quote{
		font-family: cursive;
		font-style: italic;
		font-weight: bold;
		color: #333;
		cursor: pointer;
		width: 300px;
		height: 150px;
		padding: 10px;
		border: 1px solid #888;
		display: inline-block;
		margin: 10px;
	}

	.quote:hover{
		background-color: #ffe2e2;
	}
</style>