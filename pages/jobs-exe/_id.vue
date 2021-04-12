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
            <div class="col-12 section wow fadeInUp" data-wow-delay="0.7"><h2><span style="font-weight: 500">INSPIRATION BEGINS WITH YOU</span></h2>
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
              <h4> {{ res.title.toUpperCase() }}</h4>
              <span class="" v-if="getFresh"><img class="imgMobileFresh" src="~/assets/images/fresh-b.png" /></span>
            </div>
            <b>{{ res.levels }}</b>
            <p>{{ res.description }}</p>
            <div class="btn-job-apply">
              <button class="active">
                <nuxt-link :to="{ path: '/jobs-apply', query: { id: res.id } }">Apply Now</nuxt-link>
              </button>
            </div>
          </div>
          <div class="col-12 col-md-6 section wow fadeInRight" data-wow-delay="0.7">
            <b-carousel id="carousel-2" :interval="3000" fade >
              <!-- <div v-for="list in loop2" :key="list"> -->
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/1.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/2.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/3.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/4.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/5.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/6.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/7.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/8.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/9.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/10.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/11.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/12.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/13.jpg`)"></b-carousel-slide>
                <!-- <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/${ Math.floor(Math.random() * 13) + 1}.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/${ Math.floor(Math.random() * 13) + 1}.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/${ Math.floor(Math.random() * 13) + 1}.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/${ Math.floor(Math.random() * 13) + 1}.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/${ Math.floor(Math.random() * 13) + 1}.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/${ Math.floor(Math.random() * 13) + 1}.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/${ Math.floor(Math.random() * 13) + 1}.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/${ Math.floor(Math.random() * 13) + 1}.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/${ Math.floor(Math.random() * 13) + 1}.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/${ Math.floor(Math.random() * 13) + 1}.jpg`)"></b-carousel-slide>
                <b-carousel-slide class="img-fluid" :img-src=" require(`~/assets/images/random/${ Math.floor(Math.random() * 13) + 1}.jpg`)"></b-carousel-slide> -->
              <!-- </div> -->
            </b-carousel>
           </div>
        </div>

        <hr style="border-bottom: 1px solid #62cbc9; margin: 0" />
        
        <div class="row">
          <div class="col-12 col-md-7 section wow fadeInLeft" data-wow-delay="0.5">
            <div class="content-detail">
              <h5>RESPONSIBILITIES</h5>
              <ul><li v-for="list in getCare" :key="list">{{ list }}</li></ul>
            <br />
              <h5>QUALIFICATIONS</h5>
              <ul><li v-for="list in getMerit" :key="list">{{ list }}</li></ul>
            </div>
          </div>

          <div class="col-12 col-md-5 section wow fadeInRight" data-wow-delay="0.5">
            <div class="content-detail skills">
              <h5>PREFERRED SKILLS</h5>
              <ul><li>{{ res.skills }}</li></ul>
            <br />
              <h5>WORK LOCATION</h5>
              <ul><li v-for="list in getWorkplace" :key="list">{{ list }}</li></ul>
            </div>
          </div>

          <div class="col-12 section wow fadeInRight" >
            <div class="content-detail" style="margin-top: 5px">
              <button class="active">
                <nuxt-link :to="{ path: '/jobs-apply', query: { id: res.id } }" class="btnApplyJpb">Apply Now</nuxt-link>
              </button>
              <a href="/jobs-exe" class="backmore" >View more jobs<span><img src="~/assets/images/Asset15.png" /></span></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {

  async mounted() {
    setTimeout(function(){ $("#navmenu li").removeClass('active');$("#navmenu li:eq(1)").addClass('active');}, 1000);
    console.log("/jobs-exe/_id");
    console.log('/job-exe: ',this.$router.currentRoute)      
    // await this.$nextTick(() => { this.$nuxt.$loading.start(); setTimeout(() => this.$nuxt.$loading.finish(), 3000); });
  },
  
  async asyncData({ $axios, params }) {

    const json = await $axios.$get(`/jobs.json`);
    const res = json.jobs[params.id - 1];
    const getMerit = res.qualification;
    const getCare = res.responsibility;
    const getWorkplace = res.location;
    const getFresh = res.fresh_grad;

    return { res, getCare, getMerit, getWorkplace, getFresh };
  },
  validate({ params }) {
    const re = /^\d+$/;
    if (re.test(params.id)) { return true; } 
    else {return false; }
  },
  computed:{
     random(){ return Math.floor(Math.random() * 7) + 1},
  },
  data() {
    return {
       slide: 0,
      sliding: null,
      loop:[0,1,2,3,4,5,6,7],
      loop2:[0,1,2,3,4,5,6,7,8,9,10,11,12]
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