<template>
	<div>
		<h3>New</h3>
		<p>{{value}}</p>
		<button @click="value++">Increase</button>
	</div>
</template>

<script>
	export default{
		data: function(){
			return {
				value: 0
			}
		}, deactivated: function(){
			console.log("Unload Component 'new'");
		}, activated: function(){
			console.log("Load Component 'new'");
		}
	}

</script>