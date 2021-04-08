<template>
  <div class="wrapper">
    <div class="imgHeader position-relative">
      <div class="carousel-inner">
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          :interval="2000"
        >
          <b-carousel-slide
            class="img-fluid"
            :img-src="
              require(`~/assets/images/JobBanner/${
                Math.floor(Math.random() * 7) + 1
              }.jpg`)
            "
          ></b-carousel-slide>
          <b-carousel-slide
            class="img-fluid"
            :img-src="
              require(`~/assets/images/JobBanner/${
                Math.floor(Math.random() * 7) + 1
              }.jpg`)
            "
          ></b-carousel-slide>
          <b-carousel-slide
            class="img-fluid"
            :img-src="
              require(`~/assets/images/JobBanner/${
                Math.floor(Math.random() * 7) + 1
              }.jpg`)
            "
          ></b-carousel-slide>
          <b-carousel-slide
            class="img-fluid"
            :img-src="
              require(`~/assets/images/JobBanner/${
                Math.floor(Math.random() * 7) + 1
              }.jpg`)
            "
          ></b-carousel-slide>
          <b-carousel-slide
            class="img-fluid"
            :img-src="
              require(`~/assets/images/JobBanner/${
                Math.floor(Math.random() * 7) + 1
              }.jpg`)
            "
          ></b-carousel-slide>
          <b-carousel-slide
            class="img-fluid"
            :img-src="
              require(`~/assets/images/JobBanner/${
                Math.floor(Math.random() * 7) + 1
              }.jpg`)
            "
          ></b-carousel-slide>
          <b-carousel-slide
            class="img-fluid"
            :img-src="
              require(`~/assets/images/JobBanner/${
                Math.floor(Math.random() * 7) + 1
              }.jpg`)
            "
          ></b-carousel-slide>
          <b-carousel-slide
            class="img-fluid"
            :img-src="
              require(`~/assets/images/JobBanner/${
                Math.floor(Math.random() * 7) + 1
              }.jpg`)
            "
          ></b-carousel-slide>
        </b-carousel>
      </div>
      <!-- <img :src="require(`~/assets/images/JobBanner/${Math.floor(Math.random() * 7)}.jpg`)" class="img-fluid" /> -->
      <div class="position-absolute">
        <div class="container">
          <div class="row">
            <div class="col-12 section wow fadeInUp" data-wow-delay="0.7">
              <h2>
                <span style="font-weight: 500"
                  >INSPIRATION BEGINS WITH YOU</span
                >
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-line">
      <div class="container jobs">
        <div class="row content-top">
          <div
            class="col-12 col-md-6 section wow fadeInLeft "
            data-wow-delay="0.7"
          >
            <div class="d-flex justify-content-between">
              <h4>
                {{ GET_JOBS.title.toUpperCase() }}
              </h4>
              <span class="" v-if="GET_FRESH"
                ><img src="~/assets/images/fresh-b.png"
              /></span>
            </div>
            <b>{{ GET_JOBS.levels }}</b>
            <p>
              {{ GET_JOBS.description }}
            </p>
            <div class="b-apply">
              <button class="active">
                <nuxt-link
                  :to="{ path: '/jobs-apply', query: { id: GET_JOBS.id } }"
                  >Apply Now</nuxt-link
                >
              </button>
            </div>
          </div>
          <div
            class="col-12 col-md-6 section wow fadeInRight"
            data-wow-delay="0.7"
          >
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
              :interval="5000"
            >
              <b-carousel-slide
                class="img-fluid"
                :img-src="
                  require(`~/assets/images/random/${
                    Math.floor(Math.random() * 13) + 1
                  }.jpg`)
                "
              ></b-carousel-slide>
              <b-carousel-slide
                class="img-fluid"
                :img-src="
                  require(`~/assets/images/random/${
                    Math.floor(Math.random() * 13) + 1
                  }.jpg`)
                "
              ></b-carousel-slide>
              <b-carousel-slide
                class="img-fluid"
                :img-src="
                  require(`~/assets/images/random/${
                    Math.floor(Math.random() * 13) + 1
                  }.jpg`)
                "
              ></b-carousel-slide>
              <b-carousel-slide
                class="img-fluid"
                :img-src="
                  require(`~/assets/images/random/${
                    Math.floor(Math.random() * 13) + 1
                  }.jpg`)
                "
              ></b-carousel-slide>
            </b-carousel>
            <!-- <img :src="require(`~/assets/images/random/${Math.floor(Math.random() * 13) + 1}.jpg`)" class="img-fluid" /> -->
          </div>
        </div>
        <hr style="border-bottom: 1px solid #62cbc9; margin: 0" />
        <div class="row">
          <div
            class="col-12 col-md-7 section wow fadeInLeft"
            data-wow-delay="0.5"
          >
            <div class="content-detail">
              <h5>RESPONSIBILITIES</h5>
              <ul>
                <li v-for="list in GET_CARE" :key="list">{{ list }}</li>
              </ul>
              <br />
              <h5>QUALIFICATIONS</h5>
              <ul>
                <li v-for="list in GET_MERIT" :key="list">{{ list }}</li>
              </ul>
            </div>
          </div>

          <div
            class="col-12 col-md-5 section wow fadeInRight"
            data-wow-delay="0.5"
          >
            <div class="content-detail skills">
              <h5>PREFERRED SKILLS</h5>
              <ul>
                <li>
                  {{ GET_JOBS.skills }}
                </li>
              </ul>
              <br />
              <h5>WORK LOCATION</h5>
              <ul>
                <li v-for="list in GET_WORKPLACE" :key="list">{{ list }}</li>
              </ul>
            </div>
          </div>
          <div class="col-12 section wow fadeInRight" data-wow-delay="0.5">
            <div class="content-detail" style="margin-top: 5px">
              <button class="active">
                <nuxt-link
                  :to="{ path: '/jobs-apply', query: { job: GET_JOBS.id } }"
                  >Apply Now</nuxt-link
                >
              </button>
              <a href="/jobs-exe" class="backmore"
                >View more jobs<span
                  ><img src="~/assets/images/Asset15.png" /></span
              ></a>
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
    console.log("Loading...");
    await this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });
  },
  async asyncData({ $axios, params }) {
    const json = await $axios.$get(`/jobs.json`);
    const GET_JOBS = json.jobs[params.id - 1];
    const GET_MERIT = GET_JOBS.qualification;
    const GET_CARE = GET_JOBS.responsibility;
    const GET_WORKPLACE = GET_JOBS.location;
    const GET_FRESH = GET_JOBS.fresh_grad;

    return { GET_JOBS, GET_CARE, GET_MERIT, GET_WORKPLACE, GET_FRESH };
  },
  validate({ params }) {
    const re = /^\d+$/;
    if (re.test(params.id)) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.f-bt {
  display: flex !important;
  flex-direction: row;
}
.d-flex > button {
  height: 100%;
}
.b-apply{
  position: absolute;
  bottom: 20px;
 }
</style>