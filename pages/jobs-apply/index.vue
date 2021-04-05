<template>
  <div class="wrapper bg-white">
    <div class="imgHeader position-relative">
      <img src="~/assets/images/banner1.png" class="img-fluid" />
      <div class="position-absolute">
        <div class="container">
          <div class="row">
            <div class="col-12 section wow fadeInUp" data-wow-delay="0.7  ">
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
        <div class="row">
          <div class="col-12">
            <div class="content">
              <h4
                class="section wow fadeInLeft"
                data-wow-delay="0.5"
                style="border-bottom: 1px solid #62cbc9; padding-bottom: 10px"
              >
                REGISTER<span class="back"
                  ><nuxt-link
                    :to="`/jobs-exe/${GET_ID}`"
                    class="section wow fadeInRight"
                    data-wow-delay="0.7"
                  >
                    &lt; Back to job description
                  </nuxt-link></span
                >
              </h4>
              <div class="register section wow fadeInUp" data-wow-delay="0.7">
                <h5>Apply Job:</h5>
                <p>
                  For those who are interested in joining KBTG Inspire and
                  interviewing for any of the job openings, please apply by
                  clicking the button below. Attach your CV and specify the role
                  you would like to apply for.
                </p>

                <div class="submit">
                  <button>
                    <a
                      class="submit job"
                      :href="`mailto:kbtginspire@kbtg.tech?subject=Apply Application`"
                      >Apply Now</a
                    >
                    <!-- <a
                      class="submit job"
                      :href="`mailto:kbtginspire@kbtg.tech?subject=${GET_TITLE}`"
                      >Apply Now</a
                    > -->
                  </button>
                </div>
              </div>
              <hr
                style="
                  border-top: 1px solid rgba(255, 255, 255, 0.5);
                  margin: 5px 0;
                "
              />
              <div class="register section wow fadeInUp" data-wow-delay="0.7">
                <h5>Join Event:</h5>
                <p>
                  For those who aren’t looking for a new job but would still
                  like to join KBTG Inspire, please apply by clicking the button
                  below to express your interest.
                </p>

                <div class="submit">
                  <button>
                    <a
                      class="submit event"
                      :href="`mailto:kbtginspire@kbtg.tech?subject=Event Only`"
                      >Apply Now</a
                    >
                    <!-- <a
                      class="submit event"
                      :href="`mailto:kbtginspire@kbtg.tech?subject=${GET_TITLE}`"
                      >Apply Now</a
                    > -->
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-line2">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="referred">
              <h5>
                Referred by a Current Employee:<span
                  ><img src="~/assets/images/Asset2.png"
                /></span>
              </h5>
              <p>
                For those who are interested in joining KBTG Inspire and
                interviewing for any of the job openings by having your friend
                who works at KBTG refer you, please apply by clicking the button
                below. Attach your CV, specify the role you would like to apply
                for, and include your friend’s information (full name, work
                email).
              </p>
              <div class="submit">
                <button>
                  <a
                    class="submit refer"
                    :href="`mailto:kbtginspire@kbtg.tech?subject=Job Referral`"
                    >Apply Now</a
                  >
                </button>
              </div>
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
  },

  data() {
    return {
      GET_TITLE: null,
      GET_ID: null,
      GET_INFO: null,
    };
  },
 async mounted() {
     console.log("Loading...");
    await this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 2000);
    });
    // console.log("parmas?", this.$route.params);
    //console.log("query>>", this.$route.query);
    // console.log("hash>>", this.$route.hash);
    this.GET_ID = this.$route.query.id;
    this.getData();
  },
  methods: {
    async getData() {
      await this.$axios.$get(`/jobs.json`).then((res) => {
        //console.log('res>>',JSON.stringify(res.jobs[this.GET_ID - 1]))
        this.GET_TITLE = res.jobs[this.GET_ID - 1].title;
        //  this.GET_INFO = res.map( x => x.id === this.GET_ID)
      });
      //console.log('Done>>>',this.GET_TITLE)
    },
  },
};
</script>
<style>
</style>
