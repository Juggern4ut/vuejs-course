<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFunction()">Reset name</button>
    </div>
</template>

<script>

	import {eventBus} from '../main';

	export default{
		props: {
			name: {
				type: String,
				required: true
			},
			resetFunction: Function,
			userAge: Number
		},
		methods: {
			resetName() {
				this.name = "Lukas"
				this.$emit('nameReset', this.name);
			}
		},
		created(){
			eventBus.on('ageWasEdited', (data)=>{
				this.userAge = data;
			});
		}
	};
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
