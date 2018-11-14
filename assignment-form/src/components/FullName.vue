<template>
	<div>
		<input type="text" @input="nameChanged(true, $event)" :value="firstName">
		<input type="text" @input="nameChanged(false, $event)" :value="lastName">
	</div>
</template>

<script>
	export default{
		props: ['value'],
		computed: {
			firstName(){
				return this.value.split(" ")[0];
			},
			lastName(){
				return this.value.split(" ")[1];
			}
		},
		methods : {
			nameChanged(isFirst, event){
				let name = '';
				if(isFirst){
					name = event.target.value + ' ' + this.lastName;
				}else{
					name = this.firstName + ' ' + event.target.value;
				}
				this.value = name;
				this.$emit('input', this.value);
			}
		}
	}
</script>