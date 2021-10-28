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
      <img src="~/assets/images/banner1.png" class="img-fluid" />
      <div class="position-absolute">
        <div class="container">
          <div class="row">
            <div class="col-12 section" data-wow-delay="">
              <h1 class="headActivite wow fadeInUp">
                INSPIRATION BEGINS WITH YOU
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-line pb30">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="content-find">
              <h2
                class="wow fadeInUp"
                data-wow-duration=""
                data-wow-delay=""
              >
                FIND YOUR INSPIRATION
              </h2>
            <!-- Component -->
            <ComponentFindYour />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box4">
      <div class="box4-1">
        <img src="~/assets/images/Activities01-01.jpg" class="" />
      </div>
      <div class="box4-2  wow fadeInUp">
          <div class="d-flex justify-content-start">
            <h1 style="color: #62cbc9">KBTG</h1>
            <h1 class="ml-3">INSPIRE</h1>
          </div>
            <h2 class="mt-2">WE INSPIRE YOU WITH OUR INSIGHTS,</h2>
            <h2 class="mt-2">YOU INSPIRE US WITH YOUR TALENTS</h2>
            <hr class="line-box4-2">
      </div>
    </div>

    <div class="talk_speaker">
      <!-- <div class="container-fluid bg-primary p-0">
        <img src="~/assets/images/Activities05-01.jpg"  class="img-fluid" />
      </div> -->
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2
              class="wow fadeInUp  mt-5 f-h2-act"
              data-wow-duration="200"
              data-wow-delay="200"
            >
              WELCOME TALK SPEAKER
            </h2>
            <div class="row">
                  <div class="col-12 col-md-4 col-lg-4">
                <div
                  class="item wow fadeInUp"
                  data-wow-duration="800"
                  data-wow-delay="200"
                >
                  <img
                    src="~/assets/images/Activities04-01.png"
                    class="img-fluid"
                  />
                  <h3  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t("TawanJithavech") }}</h3>
                  <p class="">Managing Director</p>
                  <p class="">Infrastructure Expert</p>
                </div>
              </div>

              <div class="col-12 col-md-4 col-lg-4">
                <div
                  class="item wow fadeInUp"
                  data-wow-duration="400"
                  data-wow-delay="200"
                >
                  <img
                    src="~/assets/images/Activities-04.png"
                    class="img-fluid"
                  />
                  <h3 :class="{ 'f-thai': switchLang === 'th'  }" >{{ $t("ChutimarKasemkornkit") }}</h3>
                  <p class="">Deputy Managing Director</p>
                  <p class="">People Expert</p>
                </div>
              </div>

              <div class="col-12 col-md-4 col-lg-4">
                <div
                  class="item wow fadeInUp"
                  data-wow-duration="800"
                  data-wow-delay="200"
                >
                  <img
                    src="~/assets/images/Activities03-01.png"
                    class="img-fluid"
                  />
                  <h3  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t("ChetaphanSiridanupath") }}</h3>
                  <p class="">Senior Principal Visionary Architect</p>
                  <p class="">Innovation Expert</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="schedule">
      <div class="container">
        <div id="t1"></div>
        <div id="t2"></div>
        <div id="t3"></div>
        <div class="row">
          <div class="col-12">
            <div
              class="date_schedule wow fadeInUp"
              data-wow-duration=""
              data-wow-delay=""
            >
             
              <div class="d-flex justify-content-start"><h1 class="f-kbtg-h1 mr-2">KBTG</h1> <h1 class="f-h1-act ">INSPIRE SCHEDULE</h1> </div>
                <h3 class="mb-5">21 August 2021 </h3>
              <div class="event-wrap ew nt w-100">
                <div class="row">
                  <div class="col-md-12 col-sm-12 col-lg-3">
                    <ul class="nav nav-tabs" >
                    <li @click="clickTap(1)" class="item-tabs " :class="{'active': status_tap === 1? true : false }">
                        <nuxt-link
                          to="#t1"
                          class="nav-link p-0" :class="{'active': status_tap === 1? true : false,'day1-tap1-th': switchLang === 'th' && status_tap === 1}"
                          data-toggle="tab"
                           >
                            <p class="tab-text1">Upskill</p>
                            <p class="tab-text2">Workshop</p>
                           </nuxt-link
                        >
                      </li>
                      <li @click="clickTap(2)" class="item-tabs" :class="{'active ': status_tap === 2? true : false }">
                        <nuxt-link
                          to="#t2"
                          class="nav-link p-0" :class="{'active': status_tap === 2? true : false,'day2-tap2-th': status_tap === 2 && switchLang === 'th','day2-tap2-en': status_tap === 2 && switchLang === 'en'}"
                          data-toggle="tab"
                           >
                            <p class="tab-text1">Agile</p>
                            <p class="tab-text2">Playground</p>
                           </nuxt-link
                        >
                      </li>
                      <li @click="clickTap(3)" class="item-tabs" :class="{'active': status_tap === 3? true : false,'day3-tap3-en-th':status_tap === 3 && (switchLang === 'en' ||  switchLang === 'th')}">
                        <nuxt-link
                          to="#t3"
                          class="nav-link p-0" :class="{'active': status_tap === 3? true : false }"
                          data-toggle="tab"
                          title=""
                          >
                           <p class="tab-text1">1:1 Career</p>
                           <p class="tab-text2">Mentorship</p>
                          </nuxt-link
                        >
                      </li> 
                    </ul>
                  </div>
                  <!-- -----------------------------------Day 1 ---------------------------------------->
                  <div class="col-md-12 col-sm-12 col-lg-9">
                    <div class="tab-content">
                      <div class="tab-pane fade " :class="{'active show': status_tap === 1? true : false }" id="" >
                        
                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">10:00 - 10:30 AM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Welcome to KBTG Inspire</h3>

                            <ul class="event-org list-unstyled">
                              <li  :class="{ 'f-thai-name': switchLang === 'th'  }">
                                {{ $t("TawanJithavech") }}
                                <div class="f-en">Managing Director</div>
                              </li>
                            </ul>

                            <ul class="event-org mb-0 list-unstyled">
                              <li  :class="{ 'f-thai-name': switchLang === 'th'  }">
                                {{ $t("ChutimarKasemkornkit") }}
                                <div class="f-en">Deputy Managing Director</div>
                              </li>
                            </ul>

                            <ul class="event-org list-unstyled">
                              <li  :class="{ 'f-thai-name': switchLang === 'th'  }">
                                {{ $t("ChetaphanSiridanupath") }}
                                <div class="f-en">Senior Principal Visionary Architect</div>
                              </li>
                            </ul>
                           <p  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t('txt1-day1')}}</p>                         
                          </div>
                        </div>

                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">10:30 - 12:00 PM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Ideation Workshop - Jam Your Thoughts With FigJam</h3>
                            <p class="mb-0"  :class="{ 'f-thai': switchLang === 'th'  }"> {{ $t("txt2-day1") }}</p>
                          </div>
                        </div>

                        <div class="event-style1 w-100 bg-gray">
                          <div class="event-meta text-right">
                            <span class="d-block">12:00 - 01:00 PM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Lunch Break</h3>
                          </div>
                        </div>
                        
                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">01:00 - 02:30 PM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">A Journey of Test Automation: When Quality Is Driven by Technology and Team</h3>
                            <p class="mb-0"  :class="{ 'f-thai': switchLang === 'th'  }"> {{ $t("txt3-day1") }}</p>
                          </div>
                        </div>

                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">02:30 - 04:00 PM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">The Data Evolution Powered by Data Engineers</h3>
                            <p class="mb-0"  :class="{ 'f-thai': switchLang === 'th'  }"> {{ $t("txt4-day1") }}</p>
                          </div>
                        </div>

                      </div>
                      <!-- <div class="tab-pane fade " :class="{'active show': status_tap === 1? true : false }" id="" >
                         <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">09:30 - 10:30 AM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 py-2">Register</h3>
                          </div>
                        </div>
                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">10:30 - 11:00 AM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Welcome to KBTG and KBTG Beyond</h3>
                            <ul class="event-org mb-0 list-unstyled">
                              <li  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t("RuangrojPoonpolChutimarKasemkornkit") }}</li>
                            </ul>
                           <p  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t('txt1-day1')}}</p>                         
                          </div>
                        </div>
                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">11:00 - 11:30 AM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Inspire Talk</h3>
                            <ul class="event-org mb-0 list-unstyled">
                              <li class="">Guest Speaker</li>
                            </ul>
                            <p class="mb-0"  :class="{ 'f-thai': switchLang === 'th'  }"> {{ $t("day1-1100-1130-text1") }}</p>
                          </div>
                        </div>
                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">11:30 - 12:00 PM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Fireside Chat</h3>
                            <ul class="event-org mb-0 list-unstyled">
                              <li>KBTG Team</li>
                            </ul>
                            <p class="mb-0"  :class="{ 'f-thai': switchLang === 'th'  }">
                              {{ $t("day1-1130-1200-text2") }}
                            </p>
                          </div>
                        </div>
                        <div class="event-style1 w-100 bg-gray">
                          <div class="event-meta text-right">
                            <span class="d-block">12:00 - 01:00 PM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Lunch Break</h3>
                          </div>
                        </div>
                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">01:00 - 06:00 PM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Agile Playground</h3>
                            <ul class="event-org mb-0 list-unstyled">
                              <li>KBTG Team</li>
                            </ul>
                            <p class="mb-0"  :class="{ 'f-thai': switchLang === 'th'  }">
                              {{ $t("day1-3-text3") }}
                            </p>
                            <br />
                            <h3 class="mb-0">Upskill Workshop</h3>
                            <ul class="event-org mb-0 list-unstyled">
                              <li>KBTG Team</li>
                            </ul>
                              <p class="mb-0">- How to Manage Projects Valued > 1 Billion Baht</p>
                              <p class="mb-0">- Business Analyst in Agile World</p>
                              <p class="mb-0">- How to Secure Your Smart Contract</p>
                            <br/>
                            <h3 class="mb-0">1:1 Career Mentorship</h3>
                            <br />
                            <h3 class="mb-0">Interview + Final Interview</h3>
                              <p class="mb-0">- Project Management Officer</p>
                              <p class="mb-0">- Project Manager</p>
                              <p class="mb-0">- IT Operation</p>
                              <p class="mb-0">- UX/UI Designer</p>
                              <p class="mb-0">- Senior DeFi Frontend Engineer</p>
                              <p class="mb-0">- DeFi / Blockchain Venture Architect</p>
                              <p class="mb-0">- DeFi / Blockchain Tech Lead</p>
                              <p class="mb-0">- DevX</p>
                              <p class="mb-0">- Business Analyst</p>
                          </div>
                        </div>
                      </div> -->
                      <!-- -----------------------------------Day 2 ---------------------------------------->
                      
                      <div class="tab-pane fade" :class="{'active show': status_tap === 2? true : false }" id="">
                        
                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">10:00 - 10:30 AM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Welcome to KBTG Inspire</h3>
                            <ul class="event-org list-unstyled">
                              <li  :class="{ 'f-thai-name': switchLang === 'th'  }">
                                {{ $t("TawanJithavech") }}
                                <div class="f-en">Managing Director</div>
                              </li>
                            </ul>
                            <ul class="event-org mb-0 list-unstyled">
                              <li  :class="{ 'f-thai-name': switchLang === 'th'  }">
                                {{ $t("ChutimarKasemkornkit") }}
                                <div class="f-en">Deputy Managing Director</div>
                              </li>
                            </ul>
                            <ul class="event-org list-unstyled">
                              <li  :class="{ 'f-thai-name': switchLang === 'th'  }">
                                {{ $t("ChetaphanSiridanupath") }}
                                <div class="f-en">Senior Principal Visionary Architect</div>
                              </li>
                            </ul>
                           <p  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t('txt1-day2')}}</p>                         
                          </div>
                        </div>


                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">10:30 - 12:00 PM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Agile Playground (Group 1)</h3>
                            <p class="mb-0"  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t("txt2-day2") }}</p>
                          </div>
                        </div>
                        
                        <div class="event-style1 w-100 bg-gray">
                          <div class="event-meta text-right">
                            <span class="d-block">12:00 - 01:00 PM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Lunch Break</h3>
                          </div>
                        </div>

                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">01:00 - 02:30 PM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Agile Playground (Group 2)</h3>
                            <p class="mb-0"  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t("txt2-day2") }}</p>
                          </div>
                        </div>

                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">03:00 - 04:30 PM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Agile Playground (Group 3)</h3>
                            <p class="mb-0"  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t("txt2-day2") }}</p>
                          </div>
                        </div>


                      </div>
                       <!-- -----------------------------------Day 3 ---------------------------------------->
                      <div class="tab-pane fade" :class="{'active show': status_tap === 3? true : false }" id="">

                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">10:30 - 05:00 PM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">1:1 Career Mentorship</h3>
                            <br />
                                <p class="mb-0">- Business Analyst</p>
                                <p class="mb-0">- Blockchain / Defi</p>
                                <p class="mb-0">- Blockchain Research Engineer   </p>                             
                                <p class="mb-0">- Data Engineer</p>
                                <p class="mb-0">- Data Scientist</p>             
                                <p class="mb-0">- Research Engineer</p>
                                <p class="mb-0">- Machine Learning Engineer</p>
                                <p class="mb-0">- Enterprise Architect</p>
                                <p class="mb-0">- IT Infrastructure Project Manager</p>
                                <p class="mb-0">- Innovation Product Manager</p>
                                <p class="mb-0">- Kubix Operation &amp; Risk Management</p>
                                <p class="mb-0">- Project Manager</p>
                                <p class="mb-0">- Security Infrastructure Engineer</p>
                                <p class="mb-0">- Software Engineer</p>
                                <p class="mb-0">- System Engineer</p>
                                <p class="mb-0">- Test Engineer</p>
                                <p class="mb-0">- UX/UI Designer</p>
                                <p class="mb-0">- KBTG Recruitment </p>
                                <p class="mb-0">-  KBTG Culture</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="bottom bg-line  wow fadeInUp">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>FIND A JOB THAT SUITS YOU<span><img src="~/assets/images/Asset15.png"/></span></h2>
            <p  :class="{ 'f-thai': switchLang === 'th'  }">
             {{$t('findajob')}}
            </p>
            <button><a href="/jobs">See Positions</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ComponentFindYour from "@/components/theFindYourInspiration"
export default {
  components: {ComponentFindYour},
  head: {
  title: "KBTG INSPIRE",
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
      {
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
        status_tap: 1,
        switchLang: 'en',
        storage: 'en',
        eventt1: '#event-tab1',
        eventTap2: '#event-tab2',
        tap2: '',
       };
    },
  async mounted() {
      await this.$nextTick(() => {this.$nuxt.$loading.start();setTimeout(() => this.$nuxt.$loading.finish(), 2000);});

      this.switchLang = localStorage.getItem('lang');

      if(this.switchLang === null){ 
        localStorage.setItem('lang', 'en');
        this.switchLang = 'en'
      } 

      this.$router.push(this.switchLocalePath(this.switchLang))

   },
   
  methods: {
    clickTap(data) {
      this.status_tap = data;
      if(this.tap2 === data){}
    },
  },
};
</script>
<style scoped>
html{
  scroll-behavior: smooth !important;
}
#t1, #t2, #t3{
position: absolute;
top: 0;
 }
</style>

