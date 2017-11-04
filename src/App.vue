<template>
  <div @click.capture="toggleAll" id="app">
    <div class="container">
      <h1>{{ msg }}</h1>
      <h2>Recent Jobs</h2>
      <ul class="newest__list">
        <li class="newest__list-item background--purple" :key="index" v-for="(job, index) in jobInfo">
          <div @click="showDetails(job)" class="newest__wrapper">
            <div class="newest__logo">
              <img :src="job.logo || imagePlaceholder" alt="" />
            </div>
            <div class="">
              <h4>{{job.title}}</h4>
              <h5 class="font--alert">{{job.firm}}</h5>
            </div>
            <div class="newest__details">
              <p>{{job.location}}</p>
              <p class="newest__badge">{{job.details}}</p>
            </div>
          </div>
          <div :class="{'active': job.clicked, 'newest__description': true}">
            <p>
              <span class="font--bold">Description:</span>
              <br/> {{job.description}}</p>
            <br/>
            <p class="newest__badge">
              <span class="font--bold">Responsibilities:</span>
              <br/> {{job.responsibilities}}</p>
            <br/>
            <p class="newest__badge">
              <span class="font--bold">Minimum qualifications:</span>
              <br/> {{job.minqualifications}}</p>
            <br/>
            <p class="newest__badge">
              <span class="font--bold">Preferable qualifications:</span>
              <br/> {{job.prefqualifications}}</p>
            <br/>

            <p class="newest__badge">
              <span class="font--bold">Benefits:</span>
              <br/> {{job.benefits}}</p>
          </div>
        </li>
      </ul>


      <ul v-if="testLocalStorage" class="newest__list">
        <li class="newest__list-item" :key="index" v-for="(job, index) in jobsAdded">
          <div @click="showDetails(job)" class="newest__wrapper">
            <div class="newest__logo">
              <img :src="job.logo || imagePlaceholder" alt="" />
            </div>
            <div class="">
              <h4>{{job.title}}</h4>
              <h5 class="font--alert">{{job.firm}}</h5>
            </div>
            <div class="newest__details">
              <p>{{job.location}}</p>
              <p class="newest__badge">{{job.details}}</p>
            </div>
          </div>
          <div :class="{'active': job.clicked, 'newest__description': true}">
            <p>
              <span class="font--bold">Description:</span>
              <br/> {{job.description}}</p>
            <br/>
            <p class="newest__badge">
              <span class="font--bold">Responsibilities:</span>
              <br/> {{job.responsibilities}}</p>
            <br/>
            <p class="newest__badge">
              <span class="font--bold">Minimum qualifications:</span>
              <br/> {{job.minqualifications}}</p>
            <br/>
            <p class="newest__badge">
              <span class="font--bold">Preferable qualifications:</span>
              <br/> {{job.prefqualifications}}</p>
            <br/>

            <p class="newest__badge">
              <span class="font--bold">Benefits:</span>
              <br/> {{job.benefits}}</p>
          </div>
        </li>
      </ul>
      <button class="button button-outline btn__medium">Browse all jobs</button>
    </div>




    <!-- NEW AD INPUT -->

    <button @click="showIt=!showIt" class="button button--postad">Post free ad</button>
    <transition>
      <section v-show="showIt" class="ad">
        <h2 class="ad__header">Post new ad</h2>
        <form action="" class="ad__form">
          <fieldset>
            <label for="titleField">Title</label>
            <input v-model="ADDtitle" type="text" placeholder="e.g 'Senior front-end developer'" id="titleField">
            <label for="nameFirm">Firm</label>
            <input v-model="ADDfirm" type="text" placeholder="e.g  'Alibaba.com'" id="nameFirm">
            <label for="Location">Location</label>
            <input v-model="ADDlocation" type="text" placeholder="e.g  'China'" id="Location">
            <label for="Location">Logo (url)</label>
            <input v-model="ADDlogo" type="text" placeholder="e.g  http://images.google.com/.../google.png" id="Location">
            <label for="ageRangeField">Job type</label>
            <select v-model="ADDdetails" id="ageRangeField">
              <option value="Permanent">Permanent</option>
              <option value="Temporary">Temporary</option>
              <option value="Contract">Contract</option>
              <option value="Part-time">Part-time</option>
            </select>
            <label for="description">Description</label>
            <textarea v-model="ADDdescription" placeholder="You will help XYZ build next-generation web applications like…" id="description"></textarea>
            <label for="Responsibilities">Responsibilities</label>
            <textarea v-model="ADDresponsibilities" placeholder="Build next-generation web applications..." id="Responsibilities"></textarea>
            <label for="minimumqualifications">Minimum qualifications</label>
            <textarea v-model="ADDminqualifications" placeholder="2 years of relevant work experience..." id="minimumqualifications"></textarea>
            <label for="preferredqualifications">Preferred qualifications</label>
            <textarea v-model="ADDprefqualifications" placeholder="Web application development experience..." id="preferredqualifications"></textarea>
            <label for="Benefits">Benefits</label>
            <textarea v-model="ADDbenefits" placeholder="$90,000 - $110,000 / year…" id="Benefits"></textarea>
            <div class="float-right">
              <input type="checkbox" id="confirmField">
              <label class="label-inline" for="confirmField">Send a copy to yourself</label>
            </div>
            <input @click.prevent="pushNewAdd" class="button-primary float-left" type="submit" value="Send">
          </fieldset>
        </form>
      </section>
    </transition>
  </div>
</template>


<script>
  export default {
    name: 'app',
    data() {
      return {

        // input binding

        ADDlogo: "",
        ADDtitle: "",
        ADDfirm: "",
        ADDlocation: "",
        ADDdetails: "",
        ADDurl: "",
        ADDdescription: '',
        ADDresponsibilities: '',
        ADDminqualifications: '',
        ADDprefqualifications: '',
        ADDbenefits: '',

        // input prototype
        imagePlaceholder: 'https://www.dropque.com/assets/placeholder-company-5f3438282f524800f1d49cd2921bb0a56101e1aa16097ebd313b64778fc7c4bd.png',
        showIt: false,
        msg: 'LATEST',
        jobInfo: [{
          logo: "http://thetheme.io/thejobs/assets/img/logo-google.jpg",
          title: "Full Stack Developer",
          firm: "Google",
          location: "Warsaw",
          details: "Full-Time",
          url: "http://google.com",
          description: 'An exciting permanent position for an experienced Front-end Developer (with JavaScript experience) for a telecommunications technology company in Buckinghamshire. You will form part of the development team providing new applications for touch-screen and traditional web deployment.',
          responsibilities: '** Extensive JavaScript Development, UI Development, Building real-time web applications, multi-platform and multi-media,applications.',
          minqualifications: ' HTML5, CSS, JavaScript, AngularJS, jQuery, PHP and MySQL are ideal but not essential',
          prefqualifications: 'Strong background in web product development plus hands on experience in JavaScript, Typescript, HTML and CSS Experienced in JavaScript frameworks like Angular JS, Angular 2 and React. Well versed in web based applications, applications servers, HTTP Protocol and web services. Skilled at debugging front end applications using cross browsing techniques.',
          benefits: 'The successful Front-end Developer will receive a fully comprehensive packet including: £40,000 - £50,000 basic salary - company benefits, including Stock Options, Pension contributions and Healthcare. Front-end Developer (JavaScript), Buckinghamshire, Permanent, £40,000 - £50,000 per annum.',
          clicked: false
        }, {
          logo: "https://cdn1.itcentralstation.com/vendors/logos/original/amazon.com_.png",
          title: "HTML/CSS Developer",
          firm: "Amazon",
          location: "Warsaw",
          details: "Full-Time",
          url: "http://google.com",
          description: 'An exciting permanent position for an experienced Front-end Developer (with JavaScript experience) for a telecommunications technology company in Buckinghamshire. You will form part of the development team providing new applications for touch-screen and traditional web deployment.',
          responsibilities: '** Extensive JavaScript Development, UI Development, Building real-time web applications, multi-platform and multi-media,applications.',
          minqualifications: ' HTML5, CSS, JavaScript, AngularJS, jQuery, PHP and MySQL are ideal but not essential',
          prefqualifications: 'Strong background in web product development plus hands on experience in JavaScript, Typescript, HTML and CSS Experienced in JavaScript frameworks like Angular JS, Angular 2 and React. Well versed in web based applications, applications servers, HTTP Protocol and web services. Skilled at debugging front end applications using cross browsing techniques.',
          benefits: 'The successful Front-end Developer will receive a fully comprehensive packet including: £40,000 - £50,000 basic salary - company benefits, including Stock Options, Pension contributions and Healthcare. Front-end Developer (JavaScript), Buckinghamshire, Permanent, £40,000 - £50,000 per annum.',
          clicked: false
        }],
        jobsAdded: []
      }
    },
    computed: {
      testLocalStorage: function () {
        if (localStorage.getItem('jobsAdded')) {
          return true;
        } else {
          return false;
        }
      }
    },
    methods: {
      pushNewAdd() {

        localStorage.setItem('jobsAdded', JSON.stringify({
          logo: this.ADDlogo,
          title: this.ADDtitle,
          firm: this.ADDfirm,
          location: this.ADDlocation,
          details: this.ADDdetails,
          url: this.ADDurl,
          description: this.ADDdescription,
          responsibilities: this.ADDresponsibilities,
          minqualifications: this.ADDminqualifications,
          prefqualifications: this.ADDprefqualifications,
          benefits: this.ADDbenefits,
          clicked: false
        }));

        this.jobsAdded.push({
          logo: this.ADDlogo,
          title: this.ADDtitle,
          firm: this.ADDfirm,
          location: this.ADDlocation,
          details: this.ADDdetails,
          url: this.ADDurl,
          description: this.ADDdescription,
          responsibilities: this.ADDresponsibilities,
          minqualifications: this.ADDminqualifications,
          prefqualifications: this.ADDprefqualifications,
          benefits: this.ADDbenefits,
          clicked: false
        });
      },
      showDetails(data) {
        this.jobInfo.forEach(function (entry) {
          entry.clicked = false;
        })
        data.clicked = !data.clicked;
      },
      toggleAll() {
        this.jobInfo.forEach(function (entry) {
          entry.clicked = false;
        })
      }
    },
    created: function () {


      this.jobsAdded.push(JSON.parse(localStorage.getItem('jobsAdded')));



      console.log(localStorage.getItem('this.jobsAdded'));
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
    outline: 1px solid #ca4d87;
    transition: .6s;
  }

  a {
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

  .font--bold {
    font-weight: bold;
    text-decoration: underline;
  }

  .background--purple {
    background: #f8edff;
  }

  .newest__list-item {
    border-bottom: 1px dotted lightgray;
    cursor: pointer;
  }

  .newest__details {
    margin-left: auto;
    padding: 6px;
  }

  .newest__logo {
    margin-right: 10px;
  }

  .newest__description {
    opacity: 0;
    height: 0;
    pointer-events: none;
  }

  .newest__wrapper {
    display: flex;
  }

  .active {
    margin-left: auto;
    padding: 6px;
    border-top: 1px dashed lightgray;
    text-align: left;
    max-width: 80%;
    opacity: 1;
    height: 100%;
    display: block;
    transition: opacity .3s;
  }

  @media screen and (max-width: 700px) {
    .container {
      min-width: 100%;
    }
  }

  @media screen and (max-width: 430px) {
    .button--postad {
      display: none;
    }
    .container {
      padding: 0;
    }
  }
</style>