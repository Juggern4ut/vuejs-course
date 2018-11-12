<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="currentComponent = 'app-blue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="currentComponent = 'app-green'" class="btn btn-success">Load Green Template</button>
                <button @click="currentComponent = 'app-red'" class="btn btn-danger">Load Red Template</button>

                <hr>

                <component :is="currentComponent">
                    <h1>This is my Title</h1>
                    <p>And my Body</p>
                </component>
                
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function(){
            return {
                currentComponent: 'app-blue'
            }
        },
        components: {
            'app-blue': Blue,
            'app-green': Green,
            'app-red': Red
        }
    }
</script>

<style>
</style>
