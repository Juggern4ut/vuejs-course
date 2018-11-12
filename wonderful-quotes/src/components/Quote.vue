<template>
	<div>
		<div class="title">
			<slot name="title"></slot>
			<span>
				<slot name="subtitle">Default Span</slot>
			</span>
		</div>
		<hr />
		<div>
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style scoped>
	div{
		border: 1px solid #ccc;
		box-shadow: 2px 2px 10px rgba(0,0,0,0.6);
		padding: 30px;
		margin: 30px auto;
		text-align: center;
		max-width: 756px;
		font-family: sans-serif;
		color: #444;
		font-weight: lighter;
	}

	div.title{
		font-style: italic;
	}
</style>