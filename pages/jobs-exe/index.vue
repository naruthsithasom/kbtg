<template>
  <div>
    <client-only>
      <div class="wrapper">
        <div class="imgHeader position-relative">
          <b-carousel id="carousel-1" v-model="slide" :interval="4000" @sliding-start="onSlideStart" @sliding-end="onSlideEnd" >
             <div v-for="list in loop" :key="list">
              <b-carousel-slide :img-src=" require(`~/assets/images/JobBanner/R1.jpg`)"></b-carousel-slide>
              <b-carousel-slide :img-src=" require(`~/assets/images/JobBanner/R4.jpg`)"></b-carousel-slide>
              <b-carousel-slide :img-src=" require(`~/assets/images/JobBanner/R5.jpg`)"></b-carousel-slide>
              <b-carousel-slide :img-src=" require(`~/assets/images/JobBanner/R${ Math.floor(Math.random() * 7) + 1 }.jpg`)"></b-carousel-slide>
              </div>
          </b-carousel>      
          <div class="position-absolute">
            <div class="container">
              <div class="row">
                <div class="col-12 section wow fadeInUp" data-wow-delay="0.7">
                  <h2>
                    <span style="font-weight: 500">INSPIRATION BEGINS WITH YOU</span>
                  </h2>

                  <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <b-form-input v-model.trim="search" :state="getSearch"  @keyup.enter="keyupSearch()" list="my-list-id" class="text-dark form-control" type="text" placeholder="Find your KBTG job today!"></b-form-input>
                    <datalist id="my-list-id"><option v-for="list in res" :key="list.id">{{ list.title }}</option></datalist>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-line-job">
          <div class="container jobs">
            <div class="row">
              <div class="col-12">
                <div class="career">
                  <h3 class="section wow fadeInLeft f-job-h3 mb-4" data-wow-delay="0.5">WE ARE <span style="color: #62cbc9">HIRING!</span></h3>
                  <ul class="section wow fadeInUp" data-wow-delay="0.7">
                   
                    <li class="txt-header">
                      <div class="title" style="font-weight: 700">Job Title</div>
                      <div class="level">
                        <div class="custom-select-wrapper">
                          <div @click="toglleLevel" :class="{ 'custom-select': !status,'custom-select opened': status,}">
                            <span class="custom-select-trigger">Level</span>
                            <div class="custom-options">
                              <span @click="groupLevels(A)" class="custom-option" >All Levels</span>
                              <span @click="groupLevels(JM)" class="custom-option" >Junior - Middle</span>
                              <span @click="groupLevels(M)" class="custom-option"  >Middle</span>
                              <span @click="groupLevels(MS)" class="custom-option" >Middle - Senior</span>
                              <span @click="groupLevels(S)" class="custom-option" >Senior</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li v-for="item in displays.slice(listFirst,listLast)" :key="item.id" >
                      <div class="title" v-if="item.id" :class="{'effectList1':item.id > 0}">
                        <nuxt-link :to="`/jobs-exe/${item.id}`">{{ item.title }}<span v-if="item.fresh_grad"><img v-if="item.id" class="imgMobileFresh" src="~/assets/images/icon_fresh_grad.svg"/></span></nuxt-link>
                      </div>
                      <div v-if="item.id" class="level" :class="{'effectList1':item.id > 0}">{{ item.level }}</div>
                    </li>
                  </ul>
                </div>
                <div class="next">
                  <ul>
                    <li :class="{ active: list == choose || (list > choose && list <= 1)}" v-for="list in Pages" :key="list.id" @click="selectNumber(list)">
                      <button class="btn rounded-0 sm button-h">{{ list }}</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>
<script>
 export default {
   head: {
    script: [
      {
        async: true,
        type: "text/javascript",
        src: "/js/jquery-3.3.1.slim.min.js",
      },
      {
        async: true,
        type: "text/javascript",
        src: "/js/jquery.min.js",
      },
      {
        async: true,
        type: "text/javascript",
        src: "/js/popper.min.js",
      },
      {
        async: true,
        type: "text/javascript",
        src: "/js/bootstrap.min.js",
      },
      {
        async: true,
        type: "text/javascript",
        src: "/flexslider/jquery.flexslider.js",
      },
      {
        async: true,
        type: "text/javascript",
        src: "/flexslider/js/shCore.js",
      },
      {
        async: true,
        type: "text/javascript",
        src: "/flexslider/js/shBrushJScript.js",
      },
      {
        async: true,
        type: "text/javascript",
        src: "/WOW-master/dist/wow.js",
      },
      {
        async: true,
        type: "text/javascript",
        src: "/js/wow.js",
      },
    ],
    bodyAttrs: {
      class: "bg-all",
    },
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      loop:[0,1,2,3,4,5,6,7],
      JOBS: [],
      posts: [],
      Pages: [],
      displays: [],
      GET_fresh_grad: [],
      res:[],
      search: "",
      opened: "custom-select opened",
      status: false,
      choose: 0,
      checkLevel: "",
      switchLang: "",
      A:"All Levels",
      JM:"Junior – Middle",
      M:"Middle",
      MS:"Middle - Senior",
      S:"Senior",
      listFirst:0,
      listLast:10,
      notFound:["{id: 1, title: 'ไม่พบตำแหน่งนี้!!!'}"],
      effectList1: "effectList1",
    };
  },
 
  async mounted() {

    setTimeout(function(){ $("#navmenu li").removeClass('active');$("#navmenu li:eq(1)").addClass('active');}, 1000);
 
    // await this.$nextTick(() => {this.$nuxt.$loading.start();setTimeout(() => this.$nuxt.$loading.finish(), 2000);});
    
    this.switchLang = this.$router.app._i18n.localeProperties.code;
    
    console.log("Loading... jobs-exe-");
    console.log("/job-exe/lang: ", this.switchLang);
    console.log('/job-exe: ',this.$router.currentRoute.name)
    
    await this.fetchData()
  },
  computed: {
    
    random(){
      return Math.floor(Math.random() * 7) + 1
    },
    getSearch() {
       if(this.search != ""){
         let data =  this.res.filter( x => x.title === this.search )
        if(data.length !== 0){ 
          this.displays = []
          this.Pages = []
          this.displays.push(data[0])
          this.Pagination(1)
        }
        if(data.length === 0) { 
          this.create()
          this.Pagination(3)
        }
      }
     },
  },
 
  methods: {
    onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
     async fetchData(){
        const response =  await this.$axios.$get('/jobs.json')
        this.res = [...response.jobs]
        for(let i in this.res){
          this.displays.push({id: response.jobs[i].id, title: response.jobs[i].title, fresh_grad: response.jobs[i].fresh_grad, level: response.jobs[i].level})
        }
        this.Pagination(3)
       
        return (this.res)
     },
      create() {
        this.displays = []
        this.Pages = []
       for(let i in this.res){
          this.displays.push({id: this.res[i].id, title: this.res[i].title, fresh_grad: this.res[i].fresh_grad, level: this.res[i].level})
        }
      // console.log('displays:',this.displays.length)
      return (this.displays)
    },
    groupLevels(level) {

      let data = []
      this.clearSet()

      if(level === this.A) { 
        data = this.res.filter( x => x)
        let page = Math.ceil(data.length / 10)
        this.Pagination(page)
      }
      else {
        data = this.res.filter(x => x.level === level)
        let page = Math.ceil(data.length / 10);
        this.Pagination(page)
      }

      for(let i in data){
        this.displays.push(data[i])
      }

    },
    Pagination(count){
       for (let i = 1; i <= count; i++) {
        this.Pages.push(i);
      }
    },
    toglleLevel() {
      this.status = !this.status;
    },
    async keyupSearch() {

     let data  =  this.res.filter( x => x.title === this.search)
    if( data.length === 0 ){ return } 
    else { this.$router.push(`/jobs-exe/${data[0].id}`) }
    },
    selectNumber(data) {
      // console.log(data);
      this.choose = data;
      if(data === 1){  this.listFirst = (data * 10) -10}
      else{  this.listFirst = (data * 10) - 9 }
      this.listLast = data * 10
    },
    clearSet(){
      this.choose = 1
      this.displays = []
      this.Pages = []
      this.listFirst = 0
      this.listLast = 10
     }
  },
};
</script>
<style>
 .effectList1{
   animation: kf1  500ms ease-in-out forwards;
 }
 @keyframes kf1{
   from { opacity: 0;}
   to { opacity: 1;}
 }
</style>