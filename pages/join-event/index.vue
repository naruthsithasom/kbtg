<template>
  <div class="wrapper bg-white mb-1" >
    <div class="imgHeader position-relative">
      <!-- <img src="~/assets/images/JobBanner/1.jpg" class="img-fluid" /> -->
      <div class="carousel-inner">
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          :interval="4000"
        >
          <b-carousel-slide
            :img-src="
              require(`~/assets/images/JobBanner/${
                Math.floor(Math.random() * 7) + 1
              }.jpg`)
            "
          ></b-carousel-slide>
          <b-carousel-slide
            :img-src="
              require(`~/assets/images/JobBanner/${
                Math.floor(Math.random() * 7) + 1
              }.jpg`)
            "
          ></b-carousel-slide>
          <b-carousel-slide
            :img-src="
              require(`~/assets/images/JobBanner/${
                Math.floor(Math.random() * 7) + 1
              }.jpg`)
            "
          ></b-carousel-slide>
          <b-carousel-slide
            :img-src="
              require(`~/assets/images/JobBanner/${
                Math.floor(Math.random() * 7) + 1
              }.jpg`)
            "
          ></b-carousel-slide>
          <b-carousel-slide
            :img-src="
              require(`~/assets/images/JobBanner/${
                Math.floor(Math.random() * 7) + 1
              }.jpg`)
            "
          ></b-carousel-slide>
          <b-carousel-slide
            :img-src="
              require(`~/assets/images/JobBanner/${
                Math.floor(Math.random() * 7) + 1
              }.jpg`)
            "
          ></b-carousel-slide>
          <b-carousel-slide
            :img-src="
              require(`~/assets/images/JobBanner/${
                Math.floor(Math.random() * 7) + 1
              }.jpg`)
            "
          ></b-carousel-slide>
        </b-carousel>
      </div>
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
              <h3
                class="section wow fadeInLeft f-register-h3"
                data-wow-delay="0.5"
                style="border-bottom: 1px solid #62cbc9; padding-bottom: 10px"
              >
                REGISTER<span class="back"
                  ><a
                    href="/jobs-exe"
                    class="section wow fadeInRight"
                    data-wow-delay="0.7"
                  >
                    &lt; Back to job description
                  </a></span
                >
              </h3>
              <div class="register section wow fadeInUp" data-wow-delay="0.7">
                <h5>“Job Interview + Activities” Package</h5>
                <p :class="{'f-thai_job': switchLang === 'th' }">
                  {{ $t('job1Detail') }}  
                </p>
                <p class="m-0">1.&nbsp;&nbsp;&nbsp;{{ $t("job1-1")}}</p>
                <p class="m-0" :class="{'f-thai_job_': switchLang === 'th' }">2.&nbsp;&nbsp;{{ $t("job1-2")}}</p>
                <div class="submit">
                  <button>
                    <a
                      class="submit job"
                      :href="`mailto:kbtginspire@kbtg.tech?subject=KBTG Inspire: Job Application`"
                      >Apply Now</a
                    >
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
                <h5>“Activities Only” Package</h5>
                <p :class="{'f-thai_job': switchLang === 'th' }">
                {{ $t('job2Detail')}}
                </p>
                <p class="m-0" :class="{'f-thai_job': switchLang === 'th' }">
                  1.&nbsp;&nbsp;{{$t('job2-1')}}
                </p>
                <p class="m-0" :class="{'f-thai_job': switchLang === 'th' }">
                  2.&nbsp;&nbsp;{{$t('job2-2')}}
                </p>
                <p class="m-0" :class="{'f-thai_job': switchLang === 'th' }">
                  3.&nbsp;&nbsp;{{ $t('job2-3')}}
                </p>
                <div class="submit">
                  <button>
                    <a
                      class="submit event"
                      :href="`mailto:kbtginspire@kbtg.tech?subject=KBTG Inspire: Event Only`"
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
    <div class="bg-line2">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="referred">
              <h5>
                Referred by a Current Employee<span class="ml-2"
                  ><img src="~/assets/images/Asset2.png"
                /></span>
              </h5>
              <p :class="{'f-thai_job': switchLang === 'th' }">
                {{$t('job3Detail')}}
              </p>
              <p class="m-0" :class="{'f-thai_job': switchLang === 'th' }">1.&nbsp;&nbsp;{{$t('job3-1')}}</p>
              <p class="m-0" :class="{'f-thai_job': switchLang === 'th' }">2.&nbsp;&nbsp;{{$t('job3-2')}}</p>
              <p class="m-0" :class="{'f-thai_job': switchLang === 'th' }">3.&nbsp;&nbsp;{{$t('job3-3')}}</p>
              <div class="submit">
                <button>
                  <a
                    class="submit refer"
                    :href="`mailto:kbtginspire@kbtg.tech?subject=KBTG Inspire: Job Referral`"
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
  head:{
    bodyAttrs:{
      class:"bg-all"
    },
  },
  // head: {
  //   script: [
  //     {
  //       async: true,
  //       type: "text/javascript",
  //       src: "js/jquery-3.3.1.slim.min.js",
  //     },
  //     {
  //       async: true,
  //       type: "text/javascript",
  //       src: "js/jquery.min.js",
  //     },
  //     {
  //       async: true,
  //       type: "text/javascript",
  //       src: "js/popper.min.js",
  //     },
  //     {
  //       async: true,
  //       type: "text/javascript",
  //       src: "js/bootstrap.min.js",
  //     },
  //     {
  //       async: true,
  //       type: "text/javascript",
  //       src: "flexslider/jquery.flexslider.js",
  //     },
  //     {
  //       async: true,
  //       type: "text/javascript",
  //       src: "flexslider/js/shCore.js",
  //     },
  //     {
  //       async: true,
  //       type: "text/javascript",
  //       src: "flexslider/js/shBrushJScript.js",
  //     },
  //     {
  //       async: true,
  //       type: "text/javascript",
  //       src: "WOW-master/dist/wow.js",
  //     },
  //     {
  //       async: true,
  //       type: "text/javascript",
  //       src: "js/wow.js",
  //     },
  //   ],
  // },
  data() {
    return {
      switchLang: ""
    };
  },
  // computed: {},
  // async mounted() {
  //   console.log("Loading...");
  //   await this.$nextTick(() => {
  //     this.$nuxt.$loading.start();
  //     setTimeout(() => this.$nuxt.$loading.finish(), 2000);
  //   });
  // },
    async mounted() {
    await this.$nextTick(() => {
      this.$nuxt.$loading.start();
      console.log("Loading...");
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });
     this.switchLang = this.$router.app._i18n.localeProperties.code;
     console.log('check',this.switchLang)
    if(this.switchLang === 'th') {
      console.log('>>>>>>>>sw:',this.switchLang)
    }
    return  this.switchLang 
  },
  methods: {},
};
</script>
<style>
</style>
