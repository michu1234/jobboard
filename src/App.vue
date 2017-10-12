<template>
  <div id="app">
    <div class="container">
      <h1>{{ msg }}</h1>
      <h2>Recent Jobs</h2>
      <ul class="newest__list">
          <li class="newest__list-item" v-for="job in jobInfo">
           <a :href="job.url">
              <div class="newest__logo">
                <img :src="job.logo" alt="" />
              </div>
              <div class="">
                <h4>{{job.title}}</h4>
                <h5 class="font--alert">{{job.firm}}</h5>
              </div>
              <div class="newest__details">
                <p>{{job.location}}</p>
                <p class="newest__badge">{{job.details}}</p>
              </div>
              </a>
          </li>
      </ul>
      <button class="btn btn__medium">Browse all jobs</button>
    </div>
  </div>
</template>

<script>
  import {
    namesRef
  } from './firebase';


  export default {
    name: 'app',
    data() {
      return {
        msg: 'LATEST',
        jobInfo: [{
          logo: "http://thetheme.io/thejobs/assets/img/logo-google.jpg",
          title: "Full Stack Developer",
          firm: "Google",
          location: "Warsaw",
          details: "Full-Time",
          url: "http://google.com"
        }, {
          logo: "http://thetheme.io/thejobs/assets/img/logo-google.jpg",
          title: "Full Stack Developer",
          firm: "Google",
          location: "Warsaw",
          details: "Full-Time",
          url: "http://google.com"
        }]
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

  h4 {
    margin-bottom: 0;
  }

  h5 {
    font-size: 1.9rem;
    margin: 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0 10px;
    outline: 1px solid transparent;
  }

  li:hover {
    outline: 1px solid red;
    transition: .6s;
  }

  a {
   display: flex;
   width: 100%;
  }

  a:hover {
   text-decoration: none;
   border: none;
  }

  button {
    margin-top: 20px;
  }

  img {
    width: 70px;
    height: auto;
    margin-top: 10px;
  }

  .newest__list-item {
    border-bottom: 1px dotted lightgray;
  }

  .newest__details {
    margin-left: auto;
    padding: 6px;
  }
</style>