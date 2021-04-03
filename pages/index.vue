<template>
  <div class="wrapper bg-white">
    <div class="imgHeader home position-relative">
      <video autoplay="" loop="" id="video-background" muted="">
        <source src="~/assets/vdo/KBTG_Inspire_50.mp4" type="video/mp4" />
      </video>
      <div class="position-absolute">
        <div class="container">
          <div class="row">
            <div class="col-12 section wow fadeInUp" data-wow-delay="1.0">
              <h1 class="h1-l1 "><span >KBTG</span> INSPIRE</h1>
              <h2 class="h2-l2">WE INSPIRE YOU WITH OUR INSIGHTS,</h2>
              <h2 class="h2-l2">YOU INSPIRE US WITH YOUR TALENTS</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="day-location">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-5 t-right">
              <div class="day">
                <img src="~/assets/images/Asset13.png" />
                <span class="mr-5">21 - 23 May, 2021</span
                >
              </div>
            </div>
            <div class="col-12 col-md-7">
              <div class="location">
                <img src="~/assets/images/Asset14.png" /><span
                  >KBTG Muang Thong Thani, Nonthaburi</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-about">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <h4 class="section wow fadeInLeft" data-wow-delay="500">
              ABOUT KBTG INSPIRE
            </h4>
            <p class="section wow fadeInUp" data-wow-delay="0.5">
              {{ $t("AboutKBTGInspire") }}
            </p>
            <a
              href="/jobs-exe"
              class="section wow fadeInUp a-apply"
              data-wow-delay="0.7"
              >Apply Now</a
            >
          </div>
          <div class="col-12 col-md-6">
            <div class="section wow fadeInRight" data-wow-delay="500">
              <div class="py-4"></div>
              <div class="">
                <img
                  src="~/assets/images/img-about.png"
                  class="img-fluid cropped1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="item_slider">
      <img src="~/assets/images/img-professional_1.png" class="img-fluid" />
    </div>
    <div class="container item-col3">
      <div class="row">
        <div class="col-12">
          <div class="content-job my-5">
            <h4
              class="section wow fadeInUp"
              data-wow-duration="200"
              data-wow-delay="200"
            >
              JOBS AT <span style="color: #62cbc9">KBTG</span> INSPIRE
              <nuxt-link to="/jobs-exe">View all Jobs</nuxt-link>
            </h4>
            <div class="row">
              <div class="col-12 col-md-6 col-lg-4">
                <div
                  class="detail wow fadeInUp"
                  data-wow-duration="400"
                  data-wow-delay="200"
                >
                  <h5>
                    <nuxt-link to="jobs-exe/1"
                      >Software Engineer<span
                        ><img src="~/assets/images/Asset15.png" /></span
                    ></nuxt-link>
                  </h5>
                  <span class="location">KBTG Building, K+ Building</span>
                  <p>
                    In this role, you will be responsible for the application
                    design and development of application components or multiple
                    application solutions to meet business and customer
                    requirements.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div
                  class="detail wow fadeInUp"
                  data-wow-duration="600"
                  data-wow-delay="200"
                >
                  <h5>
                    <nuxt-link to="jobs-exe/2"
                      >Test Manager/Test Engineer<span
                        ><img src="~/assets/images/Asset15.png" /></span
                    ></nuxt-link>
                  </h5>
                  <span class="location">KBTG Building</span>
                  <p>
                    In this role, you will be the key person to drive software
                    quality through test management strategy to ensure that
                    software delivered with quality and zero incident. If you
                    are experienced in software development, software testing,
                    test management, agile testing, test automation, testing
                    technology and tools, this is the role for you.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div
                  class="detail wow fadeInUp"
                  data-wow-duration="800"
                  data-wow-delay="200"
                >
                  <h5>
                    <nuxt-link to="jobs-exe/3"
                      >System Engineer - Server Management<span
                        ><img src="~/assets/images/Asset15.png"
                      /></span>
                    </nuxt-link>
                  </h5>
                  <span class="location">KBTG Building</span>
                  <p>
                    In this role, you will have fun working on various kinds of
                    database management, configuring and tuning middleware
                    software, managing vendor on day to day operation and so on.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div
                  class="detail wow fadeInUp"
                  data-wow-duration="1000"
                  data-wow-delay="200"
                >
                  <h5>
                    <nuxt-link to="jobs-exe/4"
                      >Data Scientist<span
                        ><img src="~/assets/images/Asset15.png" /></span
                    ></nuxt-link>
                  </h5>
                  <span class="location">KBTG Building</span>
                  <p>
                    In this role, you will enjoy working with rich data sets,
                    cutting-edge technology, and the ability to see your
                    insights turned into real impact on customers and society as
                    part of our Machine Learning and Data Science team .
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div
                  class="detail wow fadeInUp"
                  data-wow-duration="1200"
                  data-wow-delay="200"
                >
                  <h5>
                    <nuxt-link to="/jobs-exe/5"
                      >IT Operation - System Operator<span
                        ><img src="~/assets/images/Asset15.png" /></span
                    ></nuxt-link>
                  </h5>
                  <span class="location">KBTG Building</span>
                  <p>
                    In this role, you will utilize your passion for computer
                    operations/systems, strong problem solving skills and the
                    ability to troubleshoot computer problems to resolve any
                    malfunctions in IT operation.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div
                  class="detail wow fadeInUp"
                  data-wow-duration="1400"
                  data-wow-delay="200"
                >
                  <h5>
                    <nuxt-link to="/jobs-exe/6"
                      >Technology Research Engineer<span
                        ><img src="~/assets/images/Asset15.png" /></span
                    ></nuxt-link>
                  </h5>
                  <span class="location">KBTG Building</span>
                  <p>
                    In this role, you will be responsible for deploying and
                    debugging cloud stacks, educating teams on new cloud
                    initiatives, and ensuring the security of the cloud
                    infrastructure.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div
                  class="detail wow fadeInUp"
                  data-wow-duration="1600"
                  data-wow-delay="200"
                >
                  <h5>
                    <nuxt-link to="/jobs-exe/7"
                      >Business Analyst<span
                        ><img src="~/assets/images/Asset15.png" /></span
                    ></nuxt-link>
                  </h5>
                  <span class="location">KBTG Building</span>
                  <p>
                    In this role, you will be the liaison between the business
                    users and technical team to ensure the proper solutions is
                    developed and delivered according to the business needs.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div
                  class="detail wow fadeInUp"
                  data-wow-duration="1800"
                  data-wow-delay="200"
                >
                  <h5>
                    <nuxt-link to="/jobs-exe/9"
                      >Agile Coach<span
                        ><img src="~/assets/images/Asset15.png" /></span
                    ></nuxt-link>
                  </h5>
                  <span class="location">KBTG Building</span>
                  <p>
                    In this role, you will be a change agent to drive
                    change-welcoming culture and empower team to deliver
                    excellent software under the agility of Banking Industry
                    environment.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div
                  class="detail wow fadeInUp"
                  data-wow-duration="2000"
                  data-wow-delay="200"
                >
                  <h5>
                    <nuxt-link to="/jobs-exe/10"
                      >IT Infrastructure Project Manager<span
                        ><img src="~/assets/images/Asset15.png" /></span
                    ></nuxt-link>
                  </h5>
                  <span class="location">KBTG Building</span>
                  <p>
                    In this role, you will be responsible for the continued
                    availability and support of all infrastructure projects as a
                    part of our infrastructure team. The role will be expected
                    to work in a fast pace.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div
                  class="detail wow fadeInUp"
                  data-wow-duration="2200"
                  data-wow-delay="200"
                >
                  <h5>
                    <nuxt-link to="/jobs-exe/11"
                      >IT Security Architect<span
                        ><img src="~/assets/images/Asset15.png" /></span
                    ></nuxt-link>
                  </h5>
                  <span class="location">KBTG Building</span>
                  <p>
                    In this role, you will define bank's cybersecurity strategy,
                    enterprise security architecture and roadmap, including
                    developing relevant security requirements and standards for
                    Information Technology.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div
                  class="detail wow fadeInUp"
                  data-wow-duration="2400"
                  data-wow-delay="200"
                >
                  <h5>
                    <nuxt-link to="/jobs-exe/12"
                      >IT Security Architect (DevSecOps)<span
                        ><img src="~/assets/images/Asset15.png" /></span
                    ></nuxt-link>
                  </h5>
                  <span class="location">KBTG Building</span>
                  <p>
                    In this role, you will help development team deliver
                    software and product more quickly by shifting left security
                    processes into DevOps process.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div
                  class="detail wow fadeInUp"
                  data-wow-duration="2600"
                  data-wow-delay="200"
                >
                  <h5>
                    <nuxt-link to="/jobs-exe/13"
                      >IT &amp; Security Assurance<span
                        ><img src="~/assets/images/Asset15.png" /></span
                    ></nuxt-link>
                  </h5>
                  <span class="location">KBTG Building</span>
                  <p>
                    In this role, you will oversee all information security
                    policy and procedures to ensure that they follow the bank's
                    standard. Your work will also include developing and
                    maintaining security management and compliance dashboard to
                    detect and track all non-compliance issues.
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
            <div class="content-find">
              <h4
                class="wow fadeInUp"
                data-wow-duration="200"
                data-wow-delay="200"
              >
                FIND YOUR INSPIRATION<a href="/agenda">View all Agenda</a>
              </h4>
              <div class="row justify-content-center">
                <div class="col-12 col-md-6 col-lg-4">
                  <div
                    class="item wow fadeInUp"
                    data-wow-duration="400"
                    data-wow-delay="200"
                  >
                    <div class="img-find">
                      <img src="~/assets/images/img-find.png" />
                      <span class="icon"
                        ><img src="~/assets/images/Asset16.png"
                      /></span>
                    </div>
                    <h5>Job Interview (+Test)</h5>
                    <p>
                      {{ $t("JobInterview") }}
                    </p>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <div
                    class="item wow fadeInUp"
                    data-wow-duration="600"
                    data-wow-delay="200"
                  >
                    <div class="img-find">
                      <img src="~/assets/images/img-find1.png" />
                      <span class="icon"
                        ><img src="~/assets/images/Asset16.png"
                      /></span>
                    </div>
                    <h5>Agile Playground</h5>
                    <p>
                      {{ $t("AgilePlayground") }}
                    </p>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <div
                    class="item wow fadeInUp"
                    data-wow-duration="800"
                    data-wow-delay="200"
                  >
                    <div class="img-find">
                      <img src="~/assets/images/img-find2.png" />
                      <span class="icon"
                        ><img src="~/assets/images/Asset16.png"
                      /></span>
                    </div>
                    <h5>Inspire Talk</h5>
                    <p>
                      {{ $t("InspireTalk") }}
                    </p>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <div
                    class="item wow fadeInUp"
                    data-wow-duration="1000"
                    data-wow-delay="200"
                  >
                    <div class="img-find">
                      <img src="~/assets/images/img-find3.png" />
                      <span class="icon"
                        ><img src="~/assets/images/Asset16.png"
                      /></span>
                    </div>
                    <h5>1:1 Career Mentorship</h5>
                    <p>
                      {{ $t("1:1CareerMentorship") }}
                    </p>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <div
                    class="item wow fadeInUp"
                    data-wow-duration="1200"
                    data-wow-delay="200"
                  >
                    <div class="img-find">
                      <img src="~/assets/images/img-find4.png" />
                      <span class="icon"
                        ><img src="~/assets/images/Asset16.png"
                      /></span>
                    </div>
                    <h5>Fireside Chat</h5>
                    <p>
                      {{ $t("FiresideChat") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="faq" class="bgblack-faq">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div
              class="content wow fadeInLeft"
              data-wow-duration="200"
              data-wow-delay="200"
            >
              <h4 style="color: #fff">
                FREQUENTLY ASKED QUESTIONS
                <span style="color: #62cbc9">(FAQ)</span>
              </h4>
              <div
                class="accordion wow fadeInUp"
                data-wow-duration="200"
                data-wow-delay="200"
              >
                <h4
                  @click="clickFaq('q1')"
                  v-b-toggle.l1
                  class="accordion-toggle"
                  :class="{ acvite: !status_q1, active: status_q1 }"
                >
                  {{ $t("Q1") }}
                </h4>
                <b-collapse id="l1">
                  <p style="color: #62cbc9">{{ $t("A1") }}</p>
                </b-collapse>

                <h4
                  @click="clickFaq('q2')"
                  v-b-toggle.l2
                  class="accordion-toggle"
                  :class="{ acvite: !status_q2, active: status_q2 }"
                >
                  {{ $t("Q2") }}
                </h4>
                <b-collapse id="l2">
                  <p style="color: #62cbc9">{{ $t("A2") }}</p>
                </b-collapse>
                <h4
                  @click="clickFaq('q3')"
                  v-b-toggle.l3
                  class="accordion-toggle"
                  :class="{ acvite: !status_q3, active: status_q3 }"
                >
                  {{ $t("Q3") }}
                </h4>
                <b-collapse id="l3">
                  <p style="color: #62cbc9">{{ $t("A3") }}</p>
                </b-collapse>

                <h4
                  @click="clickFaq('q4')"
                  v-b-toggle.l4
                  class="accordion-toggle"
                  :class="{ acvite: !status_q4, active: status_q4 }"
                >
                  {{ $t("Q4") }}
                </h4>
                <b-collapse id="l4">
                  <p style="color: #62cbc9">
                    {{ $t("A4") }}
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
                  :class="{ acvite: !status_q5, active: status_q5 }"
                >
                  {{ $t("Q5") }}
                </h4>
                <b-collapse id="l5">
                  <p style="color: #62cbc9">{{ $t("A5") }}</p>
                </b-collapse>

                <h4
                  @click="clickFaq('q6')"
                  v-b-toggle.l6
                  class="accordion-toggle"
                  :class="{ acvite: !status_q6, active: status_q6 }"
                >
                  {{ $t("Q6") }}
                </h4>

                <b-collapse id="l6">
                  <p style="color: #62cbc9">{{ $t("A6") }}</p>
                </b-collapse>
                <h4
                  @click="clickFaq('q7')"
                  v-b-toggle.l7
                  class="accordion-toggle"
                  :class="{ acvite: !status_q7, active: status_q7 }"
                >
                  {{ $t("Q7") }}
                </h4>
                <b-collapse id="l7">
                  <p style="color: #62cbc9">{{ $t("A7") }}</p>
                </b-collapse>

                <h4
                  @click="clickFaq('q8')"
                  v-b-toggle.l8
                  class="accordion-toggle"
                  :class="{ acvite: !status_q8, active: status_q8 }"
                >
                  {{ $t("Q8") }}
                </h4>
                <b-collapse id="l8">
                  <p style="color: #62cbc9">{{ $t("A8") }}</p>
                </b-collapse>

                <h4
                  @click="clickFaq('q9')"
                  v-b-toggle.l9
                  class="accordion-toggle"
                  :class="{ acvite: !status_q9, active: status_q9 }"
                >
                  {{ $t("Q9") }}
                </h4>
                <b-collapse id="l9">
                  <p style="color: #62cbc9">{{ $t("A9") }}</p>
                </b-collapse>

                <h4
                  @click="clickFaq('q10')"
                  v-b-toggle.l10
                  class="accordion-toggle"
                  :class="{ acvite: !status_q10, active: status_q10 }"
                >
                  {{ $t("Q10") }}
                </h4>
                <b-collapse id="l10">
                  <p style="color: #62cbc9">{{ $t("A10") }}</p>
                </b-collapse>

                <h4
                  @click="clickFaq('q11')"
                  v-b-toggle.l11
                  class="accordion-toggle"
                  :class="{ acvite: !status_q11, active: status_q11 }"
                >
                  {{ $t("Q11") }}
                </h4>
                <b-collapse id="l11">
                  <p style="color: #62cbc9">{{ $t("A11") }}</p>
                </b-collapse>

                <h4
                  @click="clickFaq('q12')"
                  v-b-toggle.l12
                  class="accordion-toggle"
                  :class="{ acvite: !status_q12, active: status_q12 }"
                >
                  {{ $t("Q12") }}
                </h4>
                <b-collapse id="l12">
                  <p style="color: #62cbc9">{{ $t("A12") }}</p>
                </b-collapse>
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
  /*head: {
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
*/
  data() {
    return {
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
    },
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
 
</style>