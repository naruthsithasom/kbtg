<template>
  <div>
    <client-only>
      <div class="wrapper">
        <div class="imgHeader position-relative">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="~/assets/images/banner1.png" class="img-fluid" />
              </div>
              <div class="carousel-item">
                <img src="~/assets/images/banner2.png" class="img-fluid" />
              </div>
              <div class="carousel-item">
                <img src="~/assets/images/banner3.png" class="img-fluid" />
              </div>
              <div class="carousel-item">
                <img src="~/assets/images/banner4.png" class="img-fluid" />
              </div>
              <div class="carousel-item">
                <img src="~/assets/images/banner5.png" class="img-fluid" />
              </div>
              <div class="carousel-item">
                <img src="~/assets/images/banner6.png" class="img-fluid" />
              </div>
              <div class="carousel-item">
                <img src="~/assets/images/banner7.png" class="img-fluid" />
              </div>
            </div>
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
                              <!-- <span
                                class="custom-option"
                                @click="selectLevels('Level')"
                                >All Levels</span
                              > -->
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
                  <!-- <ul>
                    <li
                      class=""
                      :class="{ active: pageNumber === choose }"
                      v-for="pageNumber in pages"
                      :key="pageNumber"
                      @click="selectNumber(pageNumber)"
                    >
                      <button class="btn rounded-0 sm button-h">
                        {{ pageNumber }}
                      </button>
                    </li>
                  </ul> -->
                  <ul>
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
    // script: [
    //   {
    //     async: true,
    //     type: "text/javascript",
    //     src: "js/jquery-3.3.1.slim.min.js",
    //   },
    //   {
    //     async: true,
    //     type: "text/javascript",
    //     src: "js/jquery.min.js",
    //   },
    //   {
    //     async: true,
    //     type: "text/javascript",
    //     src: "js/popper.min.js",
    //   },
    //   {
    //     async: true,
    //     type: "text/javascript",
    //     src: "js/bootstrap.min.js",
    //   },
    //   {
    //     async: true,
    //     type: "text/javascript",
    //     src: "flexslider/jquery.flexslider.js",
    //   },
    //   {
    //     async: true,
    //     type: "text/javascript",
    //     src: "flexslider/js/shCore.js",
    //   },
    //   {
    //     async: true,
    //     type: "text/javascript",
    //     src: "flexslider/js/shBrushJScript.js",
    //   },
    //   {
    //     async: true,
    //     type: "text/javascript",
    //     src: "WOW-master/dist/wow.js",
    //   },
    //   {
    //     async: true,
    //     type: "text/javascript",
    //     src: "js/wow.js",
    //   },
    // ],
  },
  data() {
    return {
      JOBS: null,
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
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.posts);
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
    posts() {
      this.setPages();
    },
  },
  methods: {
    toglleLevel() {
      this.status = !this.status;
    },
    setPages() {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    },
    selectLevels(data) {
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
    selectNumber(number) {
      this.choose = number;
      console.log(number);
    },
    upper(s) {
      let str = s.toUpperCase()
      return str;
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