<template>
  <div class="wrapper">
    <div class="imgHeader position-relative">
      <img src="~/assets/images/banner1.png" class="img-fluid" />
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
            class="col-12 col-md-6 section wow fadeInLeft"
            data-wow-delay="0.7"
          >
            <h4>
              {{ GET_JOBS.title
              }}<span><img src="~/assets/images/fresh-b.png" /></span>
            </h4>
            <b>{{ GET_JOBS.levels }}</b>
            <p>
              {{ GET_JOBS.description }}
            </p>
            <button class="active">
               <nuxt-link
                :to="{ path:'/jobs-apply', query: { job: GET_JOBS.title,id: GET_JOBS.id } }"
                >Apply Now</nuxt-link
              >
            </button>
          </div>
          <div
            class="col-12 col-md-6 section wow fadeInRight"
            data-wow-delay="0.7"
          >
            <img src="~/assets/images/img-exe.png" class="img-fluid" />
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
                  :to="{ path:'/jobs-apply', query: { job: GET_JOBS.title } }"
                  >Apply Now</nuxt-link
                >
              </button>
              <nuxt to="/jobs-exe" class="backmore"
                >View more jobs<span
                  ><img src="~/assets/images/Asset15.png" /></span
              ></nuxt>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    script: [
      {
        defer: true,
        type: "text/javascript",
        src: "js/jquery-3.3.1.slim.min.js",
      },
      {
        defer: true,
        type: "text/javascript",
        src: "js/jquery.min.js",
      },
      {
        defer: true,
        type: "text/javascript",
        src: "js/popper.min.js",
      },
      {
        defer: true,
        type: "text/javascript",
        src: "js/bootstrap.min.js",
      },
      {
        defer: true,
        type: "text/javascript",
        src: "flexslider/jquery.flexslider.js",
      },
      {
        defer: true,
        type: "text/javascript",
        src: "flexslider/js/shCore.js",
      },
      {
        defer: true,
        type: "text/javascript",
        src: "flexslider/js/shBrushJScript.js",
      },
      {
        defer: true,
        type: "text/javascript",
        src: "WOW-master/dist/wow.js",
      },
      {
        defer: true,
        type: "text/javascript",
        src: "js/wow.js",
      },
    ],
  },
  async asyncData({ $axios, params }) {
    const json = await $axios.$get(`/jobs.json`);
    const GET_JOBS = json.jobs[params.id - 1];
    const GET_CARE = GET_JOBS.responsibilities;
    const GET_MERIT = GET_JOBS.qualifications;
    const GET_WORKPLACE = GET_JOBS.locations;
    //console.log("params>", GET_JOBS);
    return { GET_JOBS, GET_CARE, GET_MERIT, GET_WORKPLACE };
  },

  data() {
    return {};
  },
  methods: {
  },
};
</script>