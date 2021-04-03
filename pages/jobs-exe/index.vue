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
                    ></b-form-input>
                    <datalist id="my-list-id">
                      <option v-for="list in GET_TITLE" :key="list">
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
                        <div id="dd2" class="custom-select-wrapper">
                          <select
                            name="district"
                            class="custom-select"
                            id="dd2"
                            placeholder="Level"
                            style="display: none"
                          >
                            <option value="">Level</option>
                            <option value=""></option>
                          </select>
                          <div
                            id="dd2"
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
                                @click="selectLevels('all')"
                                >All Levels</span
                              >
                              <span
                                class="custom-option"
                                @click="selectLevels('Junior-Middle')"
                                >Junior - Middle</span
                              >
                              <span
                                class="custom-option"
                                @click="selectLevels('Middle')"
                                >Middle</span
                              >
                              <span
                                class="custom-option"
                                @click="selectLevels('Middle-Senior')"
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
                      <div class="level">{{ item.levels }}</div>
                    </li>
                    <!--<li>
                      <div class="title"></div>
                      <div class="level">
                        <button
                          type=" button"
                          class="btn b-number mr-2"
                          v-if="page != 1"
                          @click="page--"
                        >
                          <small style="font-size: 12px">&#60;</small>
                        </button>

                        <button
                          class="btn b-number mr-2 rounded-0"
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
                          class="btn b-number mr-2"
                          type=" button"
                          @click="page++"
                          v-if="page < pages.length"
                        >
                          <small style="font-size: 12px">&#62;</small>
                        </button>
                      </div>
                    </li> -->
                  </ul>
                </div>
                <div class="next">
                  <ul>
                    <li class="" :class="{'active': pageNumber == 1}"
                      v-for="pageNumber in pages"
                      :key="pageNumber"
                      @click="selectNumber(pageNumber)"
                    >
                      <button
                        class="btn rounded-0 b-number"
                      >
                        {{ pageNumber }}
                      </button>
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
  data() {
    return {
      JOBS: null,
      search: null,
      GET_TITLE: [],
      GET_IDTITE: [],
      GET_LEVELS: [],
      GET_REPAIRLEVEL: [],
      opened: "custom-select opened",
      status: false,

      posts: [""],
      page: 1,
      perPage: 10,
      pages: [],
      result: [],

      status_numer: false,
    };
  },
  async mounted() {
    await this.$axios.$get(`/jobs.json`).then((res) => {
      this.JOBS = res.jobs;
      this.posts = res.jobs;
    });

    for (let i in this.JOBS) {
      this.GET_TITLE[i] = this.JOBS[i].title;
      this.GET_IDTITE[i] = this.JOBS[i].id;
      this.GET_LEVELS[i] = this.JOBS[i].levels;
    }
    this.GET_REPAIRLEVEL = [...new Set(this.GET_LEVELS)];
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.posts);
    },
    getSearch() {
      console.log("search>>", this.search);
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
      console.log(this.status);
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
    selectLevels(level) {
      if (level === "all") {
        this.posts = [""];
        this.pages = [];

        for (let i in this.JOBS) {
          if (this.JOBS[i].levels === "All Levels") {
            this.posts.push({
              id: this.JOBS[i].id,
              title: this.JOBS[i].title,
              levels: this.JOBS[i].levels,
            });
          }
        }
      }
      if (level === "Junior-Middle") {
        this.posts = [""];
        this.pages = [];

        for (let i in this.JOBS) {
          if (this.JOBS[i].levels === "Junior – Middle") {
            this.posts.push({
              id: this.JOBS[i].id,
              title: this.JOBS[i].title,
              levels: this.JOBS[i].levels,
            });
          }
        }
      }
      if (level === "Middle") {
        this.posts = [""];
        this.pages = [];

        for (let i in this.JOBS) {
          if (this.JOBS[i].levels === "Middle") {
            this.posts.push({
              id: this.JOBS[i].id,
              title: this.JOBS[i].title,
              levels: this.JOBS[i].levels,
            });
          }
        }
      }
      if (level === "Middle-Senior") {
        this.posts = [""];
        this.pages = [];

        for (let i in this.JOBS) {
          if (this.JOBS[i].levels === "Middle - Senior") {
            this.posts.push({
              id: this.JOBS[i].id,
              title: this.JOBS[i].title,
              levels: this.JOBS[i].levels,
            });
          }
        }
      }
      if (level === "Senior") {
        this.posts = [""];
        this.pages = [];

        for (let i in this.JOBS) {
          if (this.JOBS[i].levels === "Senior") {
            this.posts.push({
              id: this.JOBS[i].id,
              title: this.JOBS[i].title,
              levels: this.JOBS[i].levels,
            });
          }
        }
      }
    },
    selectNumber(number) {
      console.log("test select number", number);
      if (number === 1) {
        this.status_numer = true;
      }
    },
  },
};
</script>
<style>
.b-number {
  color: #ffffff;
  font-size: 14px !important;
}
.b-active {
  border-bottom: 1px solid #62cbc9;
}
.offset {
  width: 500px !important;
  margin: 20px auto;
}
</style>