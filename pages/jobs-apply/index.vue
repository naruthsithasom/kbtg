<template>
  <div class="wrapper">
      <noscript
        ><iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TZSXSC7"
          height="0"
          width="0"
          style="display: none; visibility: hidden"
        ></iframe
      ></noscript>
    <div class="imgHeader position-relative">
      <!-- <img src="~/assets/images/JobBanner/1.jpg" class="img-fluid" /> -->
      <div class="carousel-inner">
        <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade :interval="4000">
          <b-carousel-slide :img-src="require(`~/assets/images/JobBanner/R${Math.floor(Math.random() * 7) + 1}.jpg`) "></b-carousel-slide>
          <b-carousel-slide :img-src="require(`~/assets/images/JobBanner/R${Math.floor(Math.random() * 7) + 1}.jpg`) "></b-carousel-slide>
          <b-carousel-slide :img-src="require(`~/assets/images/JobBanner/R${Math.floor(Math.random() * 7) + 1}.jpg`) "></b-carousel-slide>
          <b-carousel-slide :img-src="require(`~/assets/images/JobBanner/R${Math.floor(Math.random() * 7) + 1}.jpg`) "></b-carousel-slide>
          <b-carousel-slide :img-src="require(`~/assets/images/JobBanner/R${Math.floor(Math.random() * 7) + 1}.jpg`) "></b-carousel-slide>
          <b-carousel-slide :img-src="require(`~/assets/images/JobBanner/R${Math.floor(Math.random() * 7) + 1}.jpg`) "></b-carousel-slide>
          <b-carousel-slide :img-src="require(`~/assets/images/JobBanner/R${Math.floor(Math.random() * 7) + 1}.jpg`) "></b-carousel-slide>
        </b-carousel>
      </div>
      <div class="position-absolute">
        <div class="container">
          <div class="row">
            <div class="col-12 section wow fadeInUp" data-wow-delay="0.7  ">
              <h2><span style="font-weight: 500">INSPIRATION BEGINS WITH YOU</span></h2>
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
              <h1 class="section wow fadeInLeft f-register-h1" data-wow-delay="0.5" style="border-bottom: 1px solid #62cbc9; padding-bottom: 10px">REGISTER<span class="back">
                <nuxt-link :to="`/jobs-exe/${getID}`" class="section wow fadeInRight" data-wow-delay="0.7">&lt; Back to job description</nuxt-link></span>
              </h1>
              <div class="register section wow fadeInUp" data-wow-delay="0.7">
                <h2>“Job Interview + Activities” Package</h2>
                <p :class="{ 'f-thai_job': switchLang === 'th' }">{{ $t("job1Detail") }}</p>
                 <p class="m-0" :class="{ 'f-thai_job': switchLang === 'th' }">1.&nbsp;&nbsp;&nbsp;{{ $t("job3-1") }}</p>
                <p class="m-0" :class="{ 'f-thai_job': switchLang === 'th' }">2.&nbsp;&nbsp;{{ $t("job1-2") }}</p>
                <div class="submit-b">
                    <a class="submit job" href="mailto:kbtginspire@kbtg.tech?subject=KBTG Inspire: Job Application">Apply Now</a>   
                </div>
              </div>
              <hr style=" border-top: 1px solid rgba(255, 255, 255, 0.5); margin: 5px 0;"/>
              <div class="register section wow fadeInUp" data-wow-delay="0.7">
                <h2>“Activities Only” Package</h2>
                <p :class="{ 'f-thai_job': switchLang === 'th' }">{{ $t("job2Detail") }} </p>
                <p class="m-0" :class="{ 'f-thai_job': switchLang === 'th' }">1.&nbsp;&nbsp;&nbsp;{{ $t("job2-1") }}</p>
                <p class="m-0" :class="{ 'f-thai_job': switchLang === 'th' }">2.&nbsp;&nbsp;{{ $t("job2-2") }}</p>
                <!-- <p class="m-0" :class="{ 'f-thai_job': switchLang === 'th' }">3.&nbsp;&nbsp;{{ $t("job2-3") }}</p> -->
                <div class="submit-b">
                    <a class="submit event"  href="mailto:kbtginspire@kbtg.tech?subject=KBTG Inspire: Event Only"> Apply Now</a>
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
              <h2> Referred by a Current Employee<span class="" ><img  class="img-sm-job" src="~/assets/images/Asset2.png"/></span></h2>
              <p :class="{ 'f-thai_job': switchLang === 'th' }">{{ $t("job3Detail") }}</p>
              <p class="m-0" :class="{ 'f-thai_job': switchLang === 'th' }">1.&nbsp;&nbsp;&nbsp;{{ $t("job3-1") }}</p>
              <p class="m-0" :class="{ 'f-thai_job': switchLang === 'th' }">2.&nbsp;&nbsp;{{ $t("job3-2") }}</p>
              <p class="m-0" :class="{ 'f-thai_job': switchLang === 'th' }">3.&nbsp;&nbsp;{{ $t("job3-3") }}</p>
              <div class="submit-b">
                <a class="submit refer" href="mailto:kbtginspire@kbtg.tech?subject=KBTG Inspire: Job Referral">Apply Now</a>
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
    title: "KBTG INSPIRE WE INSPIRE YOU WITH OUR INSIGHTS YOU INSPIRE US WITH YOUR TALENTS",
    meta: [{ description:"WE INSPIRE YOU WITH OUR INSIGHTS YOU INSPIRE US WITH YOUR TALENTS"}],
    script: [
      {
        async: true,
        type: "text/javascript",
        src: "/js/gtm.js",
      },
      {
        async: true,
        type: "text/javascript",
        src: "/gtm.js",
      },
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
  },

  data() {
    return {
      getTitle: "",
      getID: null,
      getDescription: "",
      switchLang: "en",
      jobApp:"KBTG Inspire: Job Application",
      eventOnly:"KBTG Inspire: Event Only",
      jobRefer:"KBTG Inspire: Job Referral",

    };
  },
  async mounted() {
    await this.$nextTick(() => {this.$nuxt.$loading.start();setTimeout(() => this.$nuxt.$loading.finish(), 2000);});

    // setTimeout(function () {$("#navmenu li").removeClass("active");$("#navmenu li:eq(1)").addClass("active");}, 1000);

    this.getID = this.$route.query.id;
    this.getData();

    this.switchLang = localStorage.getItem("lang");

    if (this.switchLang === null) {
      localStorage.setItem("lang", "en");
      this.switchLang = "en";
    }

    this.$router.push(this.switchLocalePath(this.switchLang));

    return (this.getID)
  },
  computed: {
    random() {
      return Math.floor(Math.random() * 7) + 1;
    },
  },
  methods: {
    async getData() {
      await this.$axios.$get(`/jobs.json`).then((res) => {
        this.getTitle = res.jobs[this.getID - 1].title;
        this.getDescription = res.description
      });
    },
  },
};
</script>
 
