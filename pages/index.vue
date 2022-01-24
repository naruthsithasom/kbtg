<template>
  <div>
    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-TZSXSC7"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div class="wrapper bg-white" v-if="!$nuxt.$loading.loading">
      <div class="imgHeader home position-relative wow fadeInUp">
        <div class="">
          <b-modal id="bv-modal-example" hide-footer>
            <div>
              <video
                autoplay=""
                loop=""
                id=""
                muted="false"
                width="100%"
                height="100%"
                controls
              >
                <source
                  src="~/assets/vdo/KBTG_Inspire_720-Broadband_High.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </b-modal>
        </div>
        <video autoplay="" loop="" id="video-background" muted="">
          <source
            src="~/assets/vdo/KBTG_Inspire_720-Broadband_High.mp4"
            type="video/mp4"
          />
        </video>
        <div class="position-absolute fadeOutHader" v-show="check">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="my-3 d-flex justify-content-start">
                  <h1 style="color: #62cbc9">KBTG</h1>
                  <h1 class="ml-3">INSPIRE</h1>
                </div>
                <h2 class="mt-2">WE INSPIRE YOU WITH OUR INSIGHTS,</h2>
                <h2 class="mt-2">YOU INSPIRE US WITH YOUR TALENTS</h2>
              </div>
            </div>
          </div>
        </div>
        <b-button
          class="btn-play border-0"
          data-wow-delay=""
          data-wow-duration=""
          id="show-btn"
          @click="$bvModal.show('bv-modal-example')"
        >
          <b-icon class="icon-play" icon="play-fill"></b-icon>PLAY</b-button
        >
        <div class="day-location">
          <div class="container pl-0">
            <div class="row">
              <div class="col-12 col-md-6 t-right">
                <div class="day" style="height: 17px">
                  <!-- <img src="~/assets/images/Asset13.svg" />
                  <span class="">21 August 2021</span> -->
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="location">
                  <!-- <img src="~/assets/images/Asset14.png" /><span
                    >Online Event</span
                  > -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="popup" :class="{ 'click-x': isCloseX }" v-if="showPopup">
          <span class="d-flex justify-content-end">
            <b-icon
              icon="x-circle-fill"
              variant="black"
              scale=""
              font-scale="2"
              class="icon-x"
              @click="closePopup"
            ></b-icon>
          </span>
          <img
            :src="require(`~/assets/images/${banner02}`)"
            class="img-popup"
          />
        </div>
      </div>
      <div class="content-about">
        <div class="container py-3">
          <div class="row">
            <div class="col-12 col-md-12">
              <h2
                class="section wow fadeInLeft text-white pt-3"
                data-wow-delay="200"
              >
                ABOUT KBTG INSPIRE
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6">
              <p
                class="section wow fadeInLeft"
                :class="{ 'f-thai': switchLang === 'th' }"
                data-wow-delay="0.5"
              >
                {{ $t("AboutKBTGInspire") }}
              </p>
              <div class="wrap-link">
                <a href="/jobs" class="section wow fadeInUp" data-wow-delay=""
                  >See Positions</a
                >
                <a
                  href="/activities"
                  class="section wow fadeInUp"
                  data-wow-delay=""
                  >View Activities</a
                >
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="section wow fadeInRight" data-wow-delay="200">
                <div class=""></div>
                <div class="">
                  <img src="~/assets/images/img-about.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="pb-3"></div>
          </div>
        </div>
      </div>
      <div class="item_slider">
        <img :src="require(`~/assets/images/${banner03}`)" class="img-fluid" />
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="content-job mb-4 pt-5">
              <div class="flex-content">
                <h2
                  class="section wow fadeInUp"
                  data-wow-duration=""
                  data-wow-delay=""
                >
                  JOBS AT <span style="color: #62cbc9">KBTG</span> INSPIRE
                </h2>
                <a href="/jobs" class="a-l1">View all Jobs</a>
              </div>
              <div class="row">
                <div
                  class="col-12 col-md-6 col-lg-4"
                  v-for="(job, index) in updateJobs"
                  :key="`job-${index}`"
                >
                  <div class="detail wow fadeInUp" v-if="index < 12">
                    <nuxt-link :to="`/jobs/${job.id}`" class="">
                      <h3>
                        {{ job.title
                        }}<span><img src="~/assets/images/Asset15.png" /></span>
                      </h3>
                    </nuxt-link>
                    <span class="location">{{
                      getLocation(job.location)
                    }}</span>
                    <p>
                      {{ job.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bgblack">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="content-find wow fadeInUp">
                <div class="flex-content">
                  <h2 class="section">FIND YOUR INSPIRATION</h2>
                  <a href="/activities" class="a-l1">View all Activities</a>
                </div>
                <ComponentFindYour />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div id="faq" class="bgblack-faq">
        <!-- <div class="bgblack-faq"> -->
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="content wow fadeInUp"
                data-wow-duration=""
                data-wow-delay=""
              >
                <h2 style="color: #fff">
                  FREQUENTLY ASKED QUESTIONS<span
                    style="color: #62cbc9; font-family: "
                  >
                    (FAQ)</span
                  >
                </h2>
                <div
                  class="accordion wow fadeInUp"
                  data-wow-duration="200"
                  data-wow-delay="200"
                >
                  <h4
                    @click="clickFaq('q1')"
                    v-b-toggle.l1
                    class="accordion-toggle"
                    :class="{
                      acvite: !status_q1,
                      active: status_q1,
                      'f-THaiH': switchLang === 'th',
                    }"
                  >
                    {{ $t("Q1") }}
                  </h4>
                  <b-collapse id="l1">
                    <p class="f-q" :class="{ 'f-thai': !switchLang !== 'en' }">
                      {{ $t("A1") }}
                    </p>
                  </b-collapse>
                  <h4
                    @click="clickFaq('q2')"
                    v-b-toggle.l2
                    class="accordion-toggle"
                    :class="{
                      acvite: !status_q2,
                      active: status_q2,
                      'f-THaiH': switchLang === 'th',
                    }"
                  >
                    {{ $t("Q2") }}
                  </h4>
                  <b-collapse id="l2">
                    <p class="f-q" :class="{ 'f-thai': !switchLang !== 'en' }">
                      {{ $t("A2") }}
                    </p>
                  </b-collapse>
                  <h4
                    @click="clickFaq('q3')"
                    v-b-toggle.l3
                    class="accordion-toggle"
                    :class="{
                      acvite: !status_q3,
                      active: status_q3,
                      'f-THaiH': switchLang === 'th',
                    }"
                  >
                    {{ $t("Q3") }}
                  </h4>
                  <b-collapse id="l3">
                    <p class="f-q" :class="{ 'f-thai': !switchLang !== 'en' }">
                      {{ $t("A3") }}
                      <a
                        style="color: #62cbc9"
                        target="_blank"
                        href="https://www.google.com/maps/place/Kasikorn+Business-Technology+Group/@13.9105859,100.5514879,15z/data=!4m5!3m4!1s0x0:0x80aa2eb924692e33!8m2!3d13.9105859!4d100.5514879"
                        >(Google Map)</a
                      >
                    </p>
                  </b-collapse>
                  <h4
                    @click="clickFaq('q5')"
                    v-b-toggle.l5
                    class="accordion-toggle"
                    :class="{
                      acvite: !status_q5,
                      active: status_q5,
                      'f-THaiH': switchLang === 'th',
                    }"
                  >
                    {{ $t("Q5") }}
                  </h4>

                  <b-collapse id="l5">
                    <p class="f-q" :class="{ 'f-thai': !switchLang !== 'en' }">
                      {{ $t("A5") }}
                    </p>
                  </b-collapse>

                  <h4
                    @click="clickFaq('q6')"
                    v-b-toggle.l6
                    class="accordion-toggle"
                    :class="{
                      acvite: !status_q6,
                      active: status_q6,
                      'f-THaiH': switchLang === 'th',
                    }"
                  >
                    {{ $t("Q6") }}
                  </h4>
                  <b-collapse id="l6">
                    <p class="f-q" :class="{ 'f-thai': !switchLang !== 'en' }">
                      {{ $t("A6") }}
                    </p>
                  </b-collapse>

                  <h4
                    @click="clickFaq('q7')"
                    v-b-toggle.l7
                    class="accordion-toggle"
                    :class="{
                      acvite: !status_q7,
                      active: status_q7,
                      'f-THaiH': switchLang === 'th',
                    }"
                  >
                    {{ $t("Q7") }}
                  </h4>
                  <b-collapse id="l7">
                    <p class="f-q" :class="{ 'f-thai': !switchLang !== 'en' }">
                      {{ $t("A7") }}
                    </p>
                  </b-collapse>

                  <h4
                    @click="clickFaq('q9')"
                    v-b-toggle.l9
                    class="accordion-toggle"
                    :class="{
                      acvite: !status_q9,
                      active: status_q9,
                      'f-THaiH': switchLang === 'th',
                    }"
                  >
                    {{ $t("Q9") }}
                  </h4>
                  <b-collapse id="l9">
                    <p class="f-q" :class="{ 'f-thai': !switchLang !== 'en' }">
                      {{ $t("A9") }}
                    </p>
                  </b-collapse>

                  <h4
                    @click="clickFaq('q10')"
                    v-b-toggle.l10
                    class="accordion-toggle"
                    :class="{
                      acvite: !status_q10,
                      active: status_q10,
                      'f-THaiH': switchLang === 'th',
                    }"
                  >
                    {{ $t("Q10") }}
                  </h4>
                  <b-collapse id="l10">
                    <p class="f-q" :class="{ 'f-thai': !switchLang !== 'en' }">
                      {{ $t("A10") }}
                    </p>
                  </b-collapse>

                  <h4
                    @click="clickFaq('q11')"
                    v-b-toggle.l11
                    class="accordion-toggle"
                    :class="{
                      acvite: !status_q11,
                      active: status_q11,
                      'f-THaiH': switchLang === 'th',
                    }"
                  >
                    {{ $t("Q11") }}
                  </h4>
                  <b-collapse id="l11">
                    <p class="f-q" :class="{ 'f-thai': !switchLang !== 'en' }">
                      {{ $t("A11") }}
                    </p>
                  </b-collapse>
                  <h4
                    @click="clickFaq('q12')"
                    v-b-toggle.l12
                    class="accordion-toggle"
                    :class="{
                      acvite: !status_q12,
                      active: status_q12,
                      'f-THaiH': switchLang === 'th',
                    }"
                  >
                    {{ $t("Q12") }}
                  </h4>
                  <b-collapse id="l12">
                    <p class="f-q" :class="{ 'f-thai': !switchLang !== 'en' }">
                      {{ $t("A12") }}
                    </p>
                  </b-collapse>
                  <h4
                    @click="clickFaq('q13')"
                    v-b-toggle.l13
                    class="accordion-toggle"
                    :class="{
                      acvite: !status_q13,
                      active: status_q13,
                      'f-THaiH': switchLang === 'th',
                    }"
                  >
                    {{ $t("Q13") }}
                  </h4>
                  <b-collapse id="l13">
                    <p class="f-q" :class="{ 'f-thai': !switchLang !== 'en' }">
                      {{ $t("A13") }}
                    </p>
                  </b-collapse>
                  <h4
                    @click="clickFaq('q14')"
                    v-b-toggle.l14
                    class="accordion-toggle"
                    :class="{
                      acvite: !status_q14,
                      active: status_q14,
                      'f-THaiH': switchLang === 'th',
                    }"
                  >
                    {{ $t("Q14") }}
                  </h4>
                  <b-collapse id="l14">
                    <p class="f-q" :class="{ 'f-thai': !switchLang !== 'en' }">
                      {{ $t("A14") }}
                    </p>
                  </b-collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { BIcon, BIconArrowUp, BIconArrowDown } from "bootstrap-vue";
import ComponentFindYour from "@/components/theFindYourInspiration";
export default {
  components: {
    BIcon,
    BIconArrowUp,
    BIconArrowDown,
    ComponentFindYour,
  },

  head: {
    title: "KBTG INSPIRE",
    meta: [
      {
        description:
          "WE INSPIRE YOU WITH OUR INSIGHTS YOU INSPIRE US WITH YOUR TALENTS",
      },
    ],
    script: [
      {
        async: true,
        type: "text/javascript",
        src: "/gtm.js",
      },
      {
        body: true,
        async: true,
        type: "text/javascript",
        src: "/js/jquery-3.3.1.slim.min.js",
      },
      {
        body: true,
        async: true,
        type: "text/javascript",
        src: "/js/jquery.min.js",
      },
      {
        body: true,
        async: true,
        type: "text/javascript",
        src: "/js/popper.min.js",
      },
      {
        body: true,
        async: true,
        type: "text/javascript",
        src: "/js/bootstrap.min.js",
      },
      {
        body: true,
        async: true,
        type: "text/javascript",
        src: "/flexslider/jquery.flexslider.js",
      },
      {
        body: true,
        async: true,
        type: "text/javascript",
        src: "/flexslider/js/shCore.js",
      },
      {
        body: true,
        async: true,
        type: "text/javascript",
        src: "/flexslider/js/shBrushJScript.js",
      },
      {
        body: true,
        async: true,
        type: "text/javascript",
        src: "/WOW-master/dist/wow.js",
      },
      {
        body: true,
        async: true,
        type: "text/javascript",
        src: "/js/wow.js",
      },
      {
        body: true,
        async: true,
        type: "text/javascript",
        src: "/js/agenda-tap.js",
      },
    ],

    bodyAttrs: {
      class: "bg-all",
    },
  },
  data() {
    return {
      res: [],
      updateJobs: [],
      status_q1: false,
      status_q2: false,
      status_q3: false,
      status_q4: false,
      status_q5: false,
      status_q6: false,
      status_q7: false,
      status_q8: false,
      status_q9: false,
      status_q10: false,
      status_q11: false,
      status_q12: false,
      status_q13: false,
      status_q14: false,
      status_q15: false,
      status_q16: false,
      switchLang: "",
      check: true,
      windowTop: 0,
      showPopup: false,
      isCloseX: false,
      banner02: "POP-UP-19JULY2021_EXE-01.jpg",
      banner03: "img-professional_02.f3f2208.jpg",
    };
  },
  methods: {
    clickFaq(data) {
      if (data === "q1") {
        this.status_q1 = !this.status_q1;
      }
      if (data === "q2") {
        this.status_q2 = !this.status_q2;
      }
      if (data === "q3") {
        this.status_q3 = !this.status_q3;
      }
      if (data === "q4") {
        this.status_q4 = !this.status_q4;
      }
      if (data === "q5") {
        this.status_q5 = !this.status_q5;
      }
      if (data === "q6") {
        this.status_q6 = !this.status_q6;
      }
      if (data === "q7") {
        this.status_q7 = !this.status_q7;
      }
      if (data === "q8") {
        this.status_q8 = !this.status_q8;
      }
      if (data === "q9") {
        this.status_q9 = !this.status_q9;
      }
      if (data === "q10") {
        this.status_q10 = !this.status_q10;
      }
      if (data === "q11") {
        this.status_q11 = !this.status_q11;
      }
      if (data === "q12") {
        this.status_q12 = !this.status_q12;
      }
      if (data === "q13") {
        this.status_q13 = !this.status_q13;
      }
      if (data === "q14") {
        this.status_q14 = !this.status_q14;
      }
      if (data === "q15") {
        this.status_q15 = !this.status_q15;
      }
      if (data === "q16") {
        this.status_q16 = !this.status_q16;
      }
    },
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
      if (this.windowTop > 370) {
        this.check = false;
      }
      //console.log({ top: this.windowTop });
    },
    closePopup() {
      this.isCloseX = true;
      setTimeout(() => {
        this.showPopup = false;
      }, 1000);
    },
    async fetchData() {
      const response = await this.$axios.$get("/jobs2022.json");
      this.res = [...response.jobs];
      //console.log(this.res)
      return this.res;
    },
    getLocation(local) {
      //console.log(local)
      let location = "";
      for (let i in local) {
        location = location + " " + local[i];
      }
      return location;
    },
    getUpdateJob() {
      return (this.updateJobs = this.res.filter(
        (x) => x.id != 9 && x.id != 19
      ));
    },
  },

  async mounted() {
    // 2204 Desktop
    //
    let width = window.innerWidth;
    let path = this.$router.currentRoute.name;
    //console.log('width ',width)
    //console.log(this.$router.currentRoute)
    window.addEventListener("scroll", this.onScroll);
    if (this.$router.currentRoute.hash === "#faq") {
      await setTimeout(() => {
        if ("index___th" === path && width < 500) {
          document.documentElement.scrollTop = 2811;
        } else if ("index___th" === path && width > 500) {
          document.documentElement.scrollTop = 2018;
        }

        if ("index___en" === path && width < 500) {
          document.documentElement.scrollTop = 2931;
        } else if ("index___en" === path && width > 500) {
          document.documentElement.scrollTop = 2018;
        }

        //console.log('frist',{top: this.windowTop });
      }, 200);

      // console.log('faq-mobile')
      return (this.showPopup = false), (this.check = false);
    }
    await this.fetchData();
    await this.getUpdateJob();
    window.addEventListener("scroll", this.onScroll);
    await setTimeout(() => {
      this.showPopup = true;
    }, 1500);
    await setTimeout(() => {
      this.check = false;
    }, 8000);
    this.switchLang = this.$router.app._i18n.localeProperties.code; // ห้ามลบ
    return this.switchLang; // ห้ามลบ
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>
<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}

.fadeOutHader {
  animation: fadeOut 12s ease-out;
  animation-iteration-count: 1;
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/* #faq{
position: relative;

} */
</style>

