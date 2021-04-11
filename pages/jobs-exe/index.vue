<template>
  <div>
    <client-only>
      <div class="wrapper">
        <div class="imgHeader position-relative">
           <!-- <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item"><img src="~/assets/images/JobBanner/R1.jpg" /></div>
                </div>
           </div> -->
             <b-carousel style="text-shadow: 0px 0px 2px #000" fade :interval="4000">
              <b-carousel-slide class="  img-banner-job" :img-src="require(`~/assets/images/JobBanner/R${random}.jpg`)"></b-carousel-slide>
              <!-- <b-carousel-slide class="img-fluid" :img-src="require(`~/assets/images/JobBanner/R${random}.jpg`)"></b-carousel-slide>
              <b-carousel-slide class="img-fluid" :img-src="require(`~/assets/images/JobBanner/R${random}.jpg`)"></b-carousel-slide> -->
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
                      <!-- :state="getSearch"
                      @keyup.enter="keyupSearch()" -->
                    <b-form-input v-model.trim="search" :state="getSearch" list="my-list-id" class="text-dark form-control" type="text" placeholder="Find your KBTG job today!"></b-form-input>
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
                              <span @click="groupLevels(`Junior - Middle`)" class="custom-option" >Junior - Middle</span>
                              <span @click="groupLevels('M')" class="custom-option"  >Middle</span>
                              <span @click="groupLevels('MS')" class="custom-option" >Middle - Senior</span>
                              <span @click="groupLevels('S')" class="custom-option" >Senior</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li v-for="item in displays.slice(listFirst,listLast)" :key="item.id">
                      <div class="title" v-if="item.id" >
                        <nuxt-link :to="`/jobs-exe/${item.id}`">{{ item.title }}<span v-if="item.fresh_grad"><img v-if="item.id" class="imgMobileFresh" src="~/assets/images/icon_fresh_grad.svg"/></span></nuxt-link>
                      </div>
                      <div v-if="item.id" class="level">{{ item.level }}</div>
                    </li>
                  </ul>
                </div>
                <div class="next">
                  <ul>
                    <li :class="{ active: list == choose || (list > choose && list <= 1)}"
                      v-for="list in Pages" :key="list.id" @click="selectNumber(list)">
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
        src: "js/jquery-3.3.1.slim.min.js",
      },
      {
        async: true,
        type: "text/javascript",
        src: "js/jquery.min.js",
      },
      {
        async: true,
        type: "text/javascript",
        src: "js/popper.min.js",
      },
      {
        async: true,
        type: "text/javascript",
        src: "js/bootstrap.min.js",
      },
      {
        async: true,
        type: "text/javascript",
        src: "flexslider/jquery.flexslider.js",
      },
      {
        async: true,
        type: "text/javascript",
        src: "flexslider/js/shCore.js",
      },
      {
        async: true,
        type: "text/javascript",
        src: "flexslider/js/shBrushJScript.js",
      },
      {
        async: true,
        type: "text/javascript",
        src: "WOW-master/dist/wow.js",
      },
      {
        async: true,
        type: "text/javascript",
        src: "js/wow.js",
      },
    ],
    bodyAttrs: {
      class: "bg-all",
    },
  },
  data() {
    return {
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
      watcDisply:"",
      A:"All levels",
      JM:"Junior - Middle",
      listFirst:0,
      listLast:10,
  
    };
  },
 
  async mounted() {

    await this.$nextTick(() => {this.$nuxt.$loading.start();setTimeout(() => this.$nuxt.$loading.finish(), 2000);});
    // setTimeout(function(){ $("#navmenu li").removeClass('active');$("#navmenu li:eq(1)").addClass('active');}, 1000);
    
    this.switchLang = this.$router.app._i18n.localeProperties.code;
    
    console.log("Loading... jobs-exe-");
    console.log("/job-exe/lang: ", this.switchLang);

    console.log('/job-exe: ',this.$router.currentRoute.name)
    //await this.fetchData()
    await this.fetchData()
  //  await this.create() 
    //await this.create()
    // const res =  await this.$axios.$get('/jobs.json')
    // this.res = res
    //.then((res) => { res.jobs
    // this.res = [...res.jobs];
    // return res.jobs
    //this.GET_fresh_grad = res.jobs.fresh_grad
    // });

    // let div = Math.ceil(this.posts.length / 10);
    // for (let i = 1; i <= div; i++) {
    //   this.pages.push(i);
    // }

    // for(let i in this.JOBS){
    //   if(11 === this.JOBS[i].id){ return false}
    //   this.display.push({
    //     id: this.JOBS[i].id,
    //     title: this.JOBS[i].title,
    //     fresh_grad: this.JOBS[i].fresh_grad,
    //     level: this.JOBS[i].level
    //   })
    // }
    //  for (let i in this.JOBS) {
    //    this.JOBS[i].title = this.posts[i].title.toUpperCase();
    // }
  },
  computed: {
    
    random(){
      return Math.floor(Math.random() * 7) + 1
    },
    getSearch() {
      //let data = []
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
      //console.log('serach>>',this.search.length + "arr"+data.length)
     },
  },
 
  methods: {
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
      console.log('displays:',this.displays.length)
      return (this.displays)
    },
    groupLevels(level){
      let data = []
      this.displays = []
      this.Pages = []
      for(let i=0; i<this.res.length; i++){
        if(level === this.res[i].level){
          data[i] = this.res[i]
          console.log(data[i])
        }
      }
      // console.log(this.res[0].level)
    },
    Pagination(count){
       for (let i = 1; i <= count; i++) {
        this.Pages.push(i);
      }
    },
    toglleLevel() {
      this.status = !this.status;
    },
    keyupSearch() {
      // for (let i in this.JOBS) {
      //   if (this.search === this.JOBS[i].title) {
      //     this.display = [];
      //      this.display.push({
      //       id: this.JOBS[i].id,
      //       title: this.JOBS[i].title,
      //       level: this.JOBS[i].level,
      //     });
      //      this.$router.push(`/jobs-exe/${this.display[0].id}`);
      //   }
      // }
    },
    selectNumber(data) {
      console.log(data);
      this.choose = data;
      
      if(data === 1){  this.listFirst = (data * 10) -10}
      else{  this.listFirst = (data * 10) - 9 }
      this.listLast = data * 10
      console.log('first',this.listFirst )
      console.log('last',this.listLast )
    
    
      // this.display = [];
      // this.pages = [];

      // let numberOfPages = Math.ceil(this.JOBS.length / 10);
      // for (let index = 1; index <= numberOfPages; index++) {
      //   this.pages.push(index);
      // }

      // if (
      //   (Number(data) && this.checkLevel == null) ||
      //   this.checkLevel == "All Levels"
      // ) {
      //   if (1 === data) {
      //     for (let i = 0; i < 10; i++) {
      //       this.display[i] = {
      //         id: this.JOBS[i].id,
      //         title: this.JOBS[i].title,
      //         fresh_grad: this.JOBS[i].fresh_grad,
      //         level: this.JOBS[i].level,
      //       };
      //     }
      //     return this.display;
      //   }
      //   if (2 === data) {
      //     let x = data * 10 - 10;
      //     let y = 0
      //      for (let i = 0; i < 10; i++) {
      //        this.display[i] = {
      //         id: this.JOBS[x+i].id,
      //         title: this.JOBS[x+i].title,
      //         fresh_grad: this.JOBS[x+i].fresh_grad,
      //         level: this.JOBS[x+i].level,
      //       };
      //     }
      //   }
      //      if (3 === data) {
      //     let x = (data * 10) - 10;
      //     let y = 0
      //      for (let i = 0; i < 10; i++) {
      //         if((x+i) === this.JOBS.length) { return}
      //         this.display[i] = {
      //         id: this.JOBS[x+i].id,
      //         title: this.JOBS[x+i].title,
      //         fresh_grad: this.JOBS[x+i].fresh_grad,
      //         level: this.JOBS[x+i].level,
      //       };
      //     }
      //   }
      // }
    },
    clearSet(){
      this.displays = []
      this.Pages = []
    }
  },
};
</script>
<style>
.sm {
  color: #ffffff;
  font-size: 14px !important;
}
.b-active {
  border-bottom: 1px solid #62cbc9;
}
.sm:hover {
  background-color: #393536;
  color: #ffffff;
}
.sm:focus {
  outline: none;
  box-shadow: none;
}
.offset {
  width: 500px !important;
  margin: 20px auto;
}
</style>