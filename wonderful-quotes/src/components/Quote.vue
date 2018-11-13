<template>
	<div class="quote">
		<span>
			<slot></slot>
		</span>
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
		position: relative;
		background-color: #d9f1e6;
		transition: .2s ease-out;
	}

	.quote span{
		position: absolute;
		width: 100%;
		top: 50%;
		left: 0px;
		transform: translateY(-50%);
	}	

	.quote:hover{
		background-color: #ffe2e2;
	}
</style>