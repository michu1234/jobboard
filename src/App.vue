<template>
  <div id="app">
    <div class="container">
      <h1>{{ msg }}</h1>
      <h2>Recent Jobs</h2>
      <ul class="newest__list">
        <li class="newest__list-item" v-for="job in jobInfo">
        <img :src="job.logo" alt=""/>
        <div class="">
          <h4>{{job.title}}</h4>
          <h5>{{job.firm}}</h5>
        </div>
        <div class="newest__details">
          <p>{{job.location}}</p>
           <p>{{job.details}}</p>
        </div>
        </li>
      </ul>
      <button class="btn btn__medium">Browse all jobs</button>
    </div>
  </div>
</template>

<script>

import {namesRef} from './firebase';


  export default {
    name: 'app',
    data() {
      return {
        msg: 'LATEST',
        jobInfo: [{logo: "http://thetheme.io/thejobs/assets/img/logo-google.jpg", title: "Full Stack Developer", firm: "Google", location: "Warsaw", details: "Full-Time"}, {logo: "http://thetheme.io/thejobs/assets/img/logo-google.jpg", title: "Full Stack Developer", firm: "Google", location: "Warsaw", details: "Full-Time"}]
      }
    }
  }
</script>



<style scoped lang="scss">
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
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

img {
width: 70px;
height: auto;
}

  .newest__list-item {
    display:  flex;
    border-bottom: 1px dotted lightgray;
  }

  .newest__details {
    margin-left: auto;
  }
</style>
