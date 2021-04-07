<template>
  <div>
    <client-only>
      <div class="wrapper">
        <div class="imgHeader position-relative">
            <div class="carousel-inner">
                <b-carousel
                  id="carousel-fade"
                  style="text-shadow: 0px 0px 2px #000"
                  fade
                  :interval="4000"  
                >
              <b-carousel-slide :img-src="require(`~/assets/images/JobBanner/${Math.floor(Math.random() * 7) + 1}.jpg`)"></b-carousel-slide>
              <b-carousel-slide :img-src="require(`~/assets/images/JobBanner/${Math.floor(Math.random() * 7) + 1}.jpg`)"></b-carousel-slide>
              <b-carousel-slide :img-src="require(`~/assets/images/JobBanner/${Math.floor(Math.random() * 7) + 1}.jpg`)"></b-carousel-slide>
              <b-carousel-slide :img-src="require(`~/assets/images/JobBanner/${Math.floor(Math.random() * 7) + 1}.jpg`)"></b-carousel-slide>
              <b-carousel-slide :img-src="require(`~/assets/images/JobBanner/${Math.floor(Math.random() * 7) + 1}.jpg`)"></b-carousel-slide>
              <b-carousel-slide :img-src="require(`~/assets/images/JobBanner/${Math.floor(Math.random() * 7) + 1}.jpg`)"></b-carousel-slide>
              <b-carousel-slide :img-src="require(`~/assets/images/JobBanner/${Math.floor(Math.random() * 7) + 1}.jpg`)"></b-carousel-slide>
              </b-carousel>
            </div>
          <div class="position-absolute">
            <div class="container">
              <div class="row">
                <div class="col-12 section wow fadeInUp" data-wow-delay="0.7">
                  <h2>
                    <span style="font-weight: 500"
                      >INSPIRATION BEGINS WITH YOU</span
                    >
                  </h2>
                  <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <b-form-input
                      v-model.trim="search"
                      list="my-list-id"
                      class="text-dark form-control"
                      type="text"
                      placeholder="Find your KBTG job today!"
                      :state="getSearch"
                      @keyup.enter="keyupSearch()"
                    ></b-form-input>
                    <datalist id="my-list-id">
                      <option v-for="list in SERACH" :key="list">
                        {{ list }}
                      </option>
                    </datalist>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-line">
          <div class="container jobs">
            <div class="row">
              <div class="col-12">
                <div class="career">
                  <h4 class="section wow fadeInLeft" data-wow-delay="0.5">
                    WE ARE <span style="color: #62cbc9">HIRING!</span>
                  </h4>

                  <ul class="section wow fadeInUp" data-wow-delay="0.7">
                    <li class="txt-header">
                      <div class="title" style="font-weight: 700">
                        Job Title
                      </div>
                      <div class="level">
                        <div class="custom-select-wrapper">
                          <div
                            @click="toglleLevel"
                            :class="{
                              'custom-select': !status,
                              'custom-select opened': status,
                            }"
                          >
                            <span class="custom-select-trigger">Level</span>
                            <div class="custom-options">
                              <span
                                class="custom-option"
                                @click="selectLevels('All Levels')"
                                >All Levels</span
                              >
                              <span
                                class="custom-option"
                                @click="selectLevels('Junior – Middle')"
                                >Junior - Middle</span
                              >
                              <span
                                class="custom-option"
                                @click="selectLevels('Middle')"
                                >Middle</span
                              >
                              <span
                                class="custom-option"
                                @click="selectLevels('Middle - Senior')"
                                >Middle - Senior</span
                              >
                              <span
                                class="custom-option"
                                @click="selectLevels('Senior')"
                                >Senior</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li v-for="item in displayedPosts" :key="item">
                      <div class="title">
                        <nuxt-link :to="`/jobs-exe/${item.id}`">
                          {{ item.title }}
                          <span v-if="item.fresh_grad"
                            ><img src="~/assets/images/icon_fresh_grad.png"
                          /></span>
                        </nuxt-link>
                      </div>
                      <div class="level">{{ item.level }}</div>
                    </li>
                  </ul>
                </div>
                <div class="next">
                  <ul>
                    <li
                      class=""
                      :class="{ active: pageNumber == choose || (pageNumber > choose && pageNumber <= 1)} "
                        v-for="pageNumber in pages"
                        :key="pageNumber"
                        @click="selectNumber(pageNumber)"
                      >
                      <button class="btn rounded-0 sm button-h">
                        {{ pageNumber }}
                      </button>
                    </li>
                  </ul>
                  <!-- <ul>
                    <li>
                      <div class="title"></div>
                      <div class="level">
                        <button
                          v-if="page != 1"
                          type="btn b-number mr-2 sm rounded-0 "
                          class="sm mr-2 active"
                          @click="page--"
                        >
                          {{ page - 1 }}
                        </button>

                        <button
                          class="btn b-number mr-2 sm rounded-0"
                          type=" button"
                          v-for="pageNumber in pages.slice(page - 1, page + 10)"
                          :key="pageNumber"
                          @click="page = pageNumber"
                        >
                          <small style="font-size: 12px">{{
                            pageNumber
                          }}</small>
                        </button>

                        <button
                          class="btn-success sm mr-2"
                          type=" button"
                          @click="page++"
                          v-if="page < pages.length"
                        >
                          <small style="font-size: 12px">{{ page }}</small>
                        </button>
                      </div>
                    </li>
                  </ul> -->
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
      bodyAttrs:{
      class:"bg-all"
    }
  },
  data() {
    return {
      JOBS: [],
      search: null,
      SERACH: [],
      POSITION: [],
      opened: "custom-select opened",
      status: false,

      posts: [""],
      page: 1,
      perPage: 10,
      pages: [],
      before: 0,

      status_numer: false,
      choose: false,

      checkLevel: null,
    };
  },
  async mounted() {

    console.log("Loading...");
    await this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 2000);
    });

    await this.$axios.$get(`/jobs.json`).then((res) => {
      this.JOBS = res.jobs;
      this.posts = res.jobs;
    });

    for (let i in this.JOBS) {
      this.SERACH[i] = this.JOBS[i].title.toUpperCase();
      this.JOBS[i].title = this.posts[i].title.toUpperCase();
    }

    let div = Math.ceil(this.posts.length / 10)
    for(let i=1; i<=div; i++){
      this.pages.push(i)
        let start = i * 10 - 10;
        let stop = i * 10;
         for (start; start < div; start++) { 
          if (start == stop) { return; }
            this.posts.push({ id: this.JOBS[start].id, title: this.JOBS[start].title,level: this.JOBS[start].level,
          });
        }
    }

  },
  computed: {
    displayedPosts() {
      // return this.paginate(this.posts);
      return this.posts;
    },
    getSearch() {
      for (let i in this.JOBS) {
        if (this.search === this.JOBS[i].title) {
          this.posts = [];
          this.pages = [];
          this.posts.push({
            id: this.JOBS[i].id,
            title: this.JOBS[i].title,
            level: this.JOBS[i].level,
          });
          console.log("search>>", this.search);
        }
      }
    },
  },
  watch: {
    // posts() {
    //   this.setPages();
    // },
  },
  methods: {
      displayedPosts() {
      // return this.paginate(this.posts);
      return this.posts;
    },
    toglleLevel() {
      this.status = !this.status;
    },
    // setPages() {
    //   let numberOfPages = Math.ceil(this.posts.length / this.perPage);
    //   for (let index = 1; index <= numberOfPages; index++) {
    //     this.pages.push(index);
    //   }
    // },
    // paginate(posts) {
    //   let page = this.page;
    //   let perPage = this.perPage;
    //   let from = page * perPage - perPage;
    //   let to = page * perPage;
    //   return posts.slice(from, to);
    // },
    selectLevels(data) {
      this.checkLevel = data;
      this.posts = [];
      this.pages = [];
      if (data === "All Levels") {
        for (let i in this.JOBS) {
          this.posts.push({
            id: this.JOBS[i].id,
            title: this.JOBS[i].title,
            level: this.JOBS[i].level,
          });
        }
      } else {
        for (let i in this.JOBS) {
          if (this.JOBS[i].level === data) {
            this.posts.push({
              id: this.JOBS[i].id,
              title: this.JOBS[i].title,
              level: this.JOBS[i].level,
            });
          }
        }
      }
    },
    keyupSearch() {
      for (let i in this.JOBS) {
        if (this.search === this.JOBS[i].title) {
          this.posts = [];
          this.pages = [];
          this.posts.push({
            id: this.JOBS[i].id,
            title: this.JOBS[i].title,
            level: this.JOBS[i].level,
          });
          // console.log("keyup>>", this.posts[0].id);
          this.$router.push(`/jobs-exe/${this.posts[0].id}`);
        }
      }
    },
    selectNumber(data) {

      this.choose = data;
      /*
      this.posts = [];
      this.pages = [];

       let numberOfPages = Math.ceil(this.JOBS.length / 10);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
      
       if ( (Number(data) && this.checkLevel == null) || this.checkLevel == "All Levels") {
          let start = data * 10 - 10;
          let stop = data * 10;
         for (start; start < this.JOBS.length; start++) { 
          if (start == stop) { return; }
            this.posts.push({ id: this.JOBS[start].id, title: this.JOBS[start].title,level: this.JOBS[start].level,
          });
        }
      } 
      */
      // if ( (Number(data) && this.checkLevel == null) || this.checkLevel == "Middle - Senior") {
 
      //     for (let i in this.JOBS) {
      //     if (this.JOBS[i].level === checkLevel) {
      //       this.posts.push({
      //         id: this.JOBS[i].id,
      //         title: this.JOBS[i].title,
      //         level: this.JOBS[i].level,
      //       });
      //     }
      //   }
      // } 
    },
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