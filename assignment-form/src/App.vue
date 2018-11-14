<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <input placeholder="Firstname" type="text" v-model="userData.firstname">
                    <input placeholder="Lastname" type="text" v-model="userData.lastname">
                    <input placeholder="E-Mail" type="text" v-model="userData.mail">
                    <input placeholder="Password" type="password" v-model="userData.password">
                    <label for="yes">
                        <input
                                type="radio"
                                id="yes"
                                value="yes"
                                v-model="storeData"> Yes
                    </label>

                    <label for="no">
                        <input
                                type="radio"
                                id="no"
                                value="no"
                                v-model="storeData"> No
                    </label>

                    <button @click.prevent.once="submitted=true">Submit</button>
                    <app-full-name v-model="fullName"></app-full-name>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{userData.firstname}} {{userData.lastname}}</p>
                        <p>Mail: {{userData.mail}}</p>
                        <p>Password: {{userData.password}}</p>
                        <p>Store in Database?: {{storeData}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './components/FullName.vue';

    export default {
        components: {
            'app-full-name':FullName
        },
        data(){
            return{
                fullName: 'Lukas Meier',
                userData: {
                    firstname: '',
                    lastname: '',
                    mail: '',
                    password: ''
                },
                storeData: "no",
                submitted: false
            }
        }
    }
</script>

<style>
</style>
