<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <h1>Built in directives</h1>
    <p v-text="'Some text'" />
    <p v-html="'<strong>Strong Text</strong>'" />

    <hr>

    <h1 @click="scream">Custom directives</h1>
    <p v-highlight:background.delayed="'red'">Color this</p>

  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    scream () {
      alert('a')
    }
  }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

hr{
    border: 0px;
    border-bottom: 1px solid #2c3e50;
    width: calc(100% - 200px);
    max-width: 1024px;
    margin: 0px auto;
}
</style>
