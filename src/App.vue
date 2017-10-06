<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Recent Jobs</h2>
    <ul>
      <li>
      <img src="" alt=""/>
      <h4></h4>
      <h5></h5>
      <p></p>
      </li>
    </ul>
    <button>Browse all jobs</button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'LATEST'
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
