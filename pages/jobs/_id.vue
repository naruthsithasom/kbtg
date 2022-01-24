<template>
  <div class="wrapper">
    <div class="imgHeader position-relative">
          <b-carousel id="carousel-1" v-model="slide" :interval="5000" @sliding-start="onSlideStart" @sliding-end="onSlideEnd" >
             <div v-for="list in loop" :key="list">
              <b-carousel-slide :img-src=" require(`~/assets/images/JobBanner/R${ Math.floor(Math.random() * 7) + 1 }.jpg`)"></b-carousel-slide>
              </div>
          </b-carousel> 
       <div class="position-absolute">
        <div class="container">
          <div class="row">
            <div class="col-12 section wow fadeInUp" data-wow-delay="0.7"><h1>INSPIRATION BEGINS WITH YOU</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-line">
      <div class="container jobs">
        <div class="row content-top">
          <div class="col-12 col-md-6 section wow fadeInLeft " data-wow-delay="0.7">
            <div class="d-flex justify-content-between">
              <h2> {{ getPosition.toUpperCase() }}</h2>
              <span class="" v-if="getFresh"><img class="imgMobileFresh" src="~/assets/images/fresh-b.png" /></span>
            </div>
            <b>{{ getLevel }}</b>
            <p>{{ getDescription }}</p>
            <div class="btn-job-apply">
              <button class="active">
                <nuxt-link :to="{ path: '/jobs-apply', query: { id: $route.params.id } }">Apply Now</nuxt-link>
              </button>
            </div>
          </div>
          <div class="col-12 col-md-6 section wow fadeInRight" data-wow-delay="0.7">
            <b-carousel id="carousel-2" :interval="3000" fade >
                 <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/1.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/3.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/6.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/7.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/8.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/9.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/10.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/11.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/13.jpg`)"></b-carousel-slide>
               
            </b-carousel>
           </div>
        </div>

        <hr style="border-bottom: 1px solid #62cbc9; margin: 0" />
        
        <div class="row">
          <div class="col-12 col-md-7 section wow fadeInLeft" data-wow-delay="0.5">
            <div class="content-detail">
              <h3>RESPONSIBILITIES</h3>
              <ul><li v-for="list in getCare" :key="list">{{ list }}</li></ul>
            <br />
              <h3>QUALIFICATIONS</h3>
              <ul><li v-for="list in getMerit" :key="list">{{ list }}</li></ul>
            </div>
          </div>

          <div class="col-12 col-md-5 section wow fadeInRight" data-wow-delay="0.5">
            <div class="content-detail skills">
              <h3>PREFERRED SKILLS</h3>
              <ul  v-for="list in getSkill" :key="list"><li>{{ list }}</li></ul>
            <br />
              <h3>WORK LOCATION</h3>
              <ul><li v-for="list in getWorkplace" :key="list">{{ list }}</li></ul>
            </div>
          </div>

          <div class="col-12 section wow fadeInRight" >
            <div class="content-detail" style="margin-top: 5px">
              <button class="active">
                <nuxt-link :to="{ path: '/jobs-apply', query: { id: $route.params.id } }" class="btnApplyJpb">Apply Now</nuxt-link>
              </button>
              <a href="/jobs" class="backmore" >View more jobs<span><img src="~/assets/images/Asset15.png" /></span></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
    head() {
      return{
        title: `Apply Job for ${this.getPosition} at KBTG Inspire`,
        meta: [{ description: `${this.getDescription}`}],
      }
  },
  async mounted() {
    
    setTimeout(function(){ 
      $("#navmenu li").removeClass('active');
      $("#navmenu li:eq(1)").addClass('active');}, 1000);

    const response =  await this.$axios.$get('/jobs2022.json')
    const res = response.jobs[this.$route.params.id - 1]

    this.getPosition = res.title
    this.getLevel = res.level
    this.getDescription = res.description
    this.getMerit = res.qualification
    this.getCare = res.responsibility
    this.getSkill = res.skill
    this.getWorkplace = res.location
    this.getFresh = res.fresh_grad

    return ( 
      this.getPosition,
      this.getLevel,
      this.description,
      this.getMerit,
      this.getCare,
      this.getSkill,
      this.getWorkplace,
      this.getFresh )

  },
  
  validate({ params }) {
    const re = /^\d+$/;
    if (re.test(params.id)) { 
       return true; 
     } 
    else {
       return false;
      }
  },
  computed:{
     random(){ return Math.floor(Math.random() * 7) + 1},
  },
  data() {
    return {
       slide: 0,
      sliding: null,
      loop:[0,1,2,3,4,5,6,7],
      loop2:[0,1,2,3,4,5,6,7,8,9,10,11,12],
      res: [],
      id: this.$route.params.id,
      getMerit: [],
      getFresh: [],
      getCare: [],
      getWorkplace: [],
      getSkill: [],
      getPosition: "",
      getLevel:"",
      getDescription: ""
    };
  },
  methods: {
     onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
  },
};
</script>
<style  >
</style>