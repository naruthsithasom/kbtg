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
                  >INSPIRATION BEGINS WITH YOU
                </span>
              </h2>
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
              <h3
                class="wow fadeInUp"
                data-wow-duration="200"
                data-wow-delay="200"
              >
                FIND YOUR INSPIRATION
              </h3>
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
                    <p  :class="{ 'f-thai': switchLang === 'th' }">
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
                    <p :class="{ 'f-thai': switchLang === 'th' }">
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
                    <p  :class="{ 'f-thai': switchLang === 'th' }">
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
                    <p  :class="{ 'f-thai': switchLang === 'th' }">
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
                    <p  :class="{ 'f-thai': switchLang === 'th' }">
                      {{ $t("FiresideChat") }}
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
                      <img src="~/assets/images/img-find5.png" />
                      <span class="icon"
                        ><img src="~/assets/images/Asset16.png"
                      /></span>
                    </div>
                    <h5>Upskill Workshop</h5>
                    <p  :class="{ 'f-thai': switchLang === 'th' }">
                      {{ $t("Upskill") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="talk_speaker">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3 f-h3-act
               
              class="wow fadeInUp text-white mt-5"
              data-wow-duration="200"
              data-wow-delay="200"
            >
              WELCOME TALK SPEAKER
            </h3>
            <div class="row">
              <div class="col-12 col-md-4 col-lg-4">
                <div
                  class="item wow fadeInUp"
                  data-wow-duration="400"
                  data-wow-delay="200"
                >
                  <img
                    src="~/assets/images/talk-speaker1.png"
                    class="img-fluid"
                  />
                  <h5 :class="{ 'f-thai': switchLang === 'th'  }" >{{ $t("CharassriPhaholyotin") }}</h5>
                  <p class="text-center">Chief IT Operation Officer</p>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4">
                <div
                  class="item wow fadeInUp"
                  data-wow-duration="600"
                  data-wow-delay="200"
                >
                  <img
                    src="~/assets/images/talk-speaker2.png"
                    class="img-fluid"
                  />
                  <h5  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t("ChutimarKasemkornkit") }}</h5>
                  <p class="text-center">Deputy Managing Director</p>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4">
                <div
                  class="item wow fadeInUp"
                  data-wow-duration="800"
                  data-wow-delay="200"
                >
                  <img
                    src="~/assets/images/talk-speaker3.png"
                    class="img-fluid"
                  />
                  <h5  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t("ChetaphanSiridanupath") }}</h5>
                  <p class="text-center">Senior Principal Visionary Architect</p>
                </div>
              </div>
              <div class="col-12">
                <!-- <h4
                  class="wow fadeInUp"
                  data-wow-duration="200"
                  data-wow-delay="200"
                  style="width: 100%; color: #252525"
                >
                  INSPIRE TALK SPEAKER
                </h4> -->
              </div>
              <!-- <div class="col-12 col-md-4 col-lg-4">
                <div
                  class="item wow fadeInUp"
                  data-wow-duration="1000"
                  data-wow-delay="200"
                >
                  <img
                    src="~/assets/images/talk-speaker4.png"
                    class="img-fluid"
                  />
                  <h5>{{ $t("WikanesThongmee") }}</h5>
                  <p>Head of DevOps</p>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4">
                <div
                  class="item wow fadeInUp"
                  data-wow-duration="1200"
                  data-wow-delay="200"
                >
                  <img
                    src="~/assets/images/talk-speaker5.png"
                    class="img-fluid"
                  />
                  <h5>{{ $t("PanuwatKenchat") }}</h5>
                  <p>Advanced Software Engineer</p>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4">
                <div
                  class="item wow fadeInUp"
                  data-wow-duration="1600"
                  data-wow-delay="200"
                >
                  <img
                    src="~/assets/images/talk-speaker6.png"
                    class="img-fluid"
                  />
                  <h5>{{ $t("PaweenPiyasil") }}</h5>
                  <p>Senior Software Engineer</p>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4">
                <div
                  class="item wow fadeInUp"
                  data-wow-duration="1800"
                  data-wow-delay="200"
                >
                  <img
                    src="~/assets/images/talk-speaker7.png"
                    class="img-fluid"
                  />
                  <h5>{{ $t("UnyamaneeKetcharoen") }}</h5>
                  <p>PMO Professional</p>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4">
                <div
                  class="item wow fadeInUp"
                  data-wow-duration="2000"
                  data-wow-delay="200"
                >
                  <img
                    src="~/assets/images/talk-speaker8.png"
                    class="img-fluid"
                  />
                  <h5>{{ $t("PhitsineeSincharoenpong") }}</h5>
                  <p>Business Analyst</p>
                </div>
              </div>
              <div class="col-12 col-md-4 col-lg-4">
                <div
                  class="item wow fadeInUp"
                  data-wow-duration="2000"
                  data-wow-delay="200"
                >
                  <img
                    src="~/assets/images/talk-speaker9.png"
                    class="img-fluid"
                  />
                  <h5>{{ $t("ChayaponSaepung") }}</h5>
                  <p>Advanced System Engineer - Server Management</p>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="schedule">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div
              class="date_schedule wow fadeInUp"
              data-wow-duration="200"
              data-wow-delay="200"
            >
              <h3 class="f-h3-act mb-5"><span class="f-kbtg-h3">KBTG</span> INSPIRE SCHEDULE</h3>
              <div class="event-wrap ew nt w-100">
                <div class="row">
                  <div class="col-md-12 col-sm-12 col-lg-3">
                    <ul class="nav nav-tabs" >
                      <li @click="clickTap(1)" class="item-tabs " :class="{'active': status_tap === 1? true : false }">
                        <a
                          :href="`${eventTap1}`"
                          class="nav-link " :class="{'active': status_tap === 1? true : false,'day1-tap1-th': switchLang === 'th' && status_tap === 1}"
                          data-toggle="tab"
                           >Day 1<span>May 21, 2021</span></a
                        >
                      </li>
                      <li @click="clickTap(2)" class="item-tabs" :class="{'active ': status_tap === 2? true : false }">
                        <a
                          
                          :href="`${eventTap2}`"
                          class="nav-link day2 " :class="{'active': status_tap === 2? true : false,'day2-tap2-en': status_tap === 2 && switchLang === 'en'}"
                          data-toggle="tab"
                           >Day 2<span>May 22, 2021</span></a
                        >
                      </li>
                      <li @click="clickTap(3)" class="item-tabs" :class="{'active': status_tap === 3? true : false }">
                        <a
                          href="#event-tab3"
                          class="nav-link day2 " :class="{'active': status_tap === 3? true : false }"
                          data-toggle="tab"
                          title=""
                          >Day 3<span>May 23, 2021</span></a
                        >
                      </li>
                    </ul>
                  </div>
                  <!-- -----------------------------------Day 1 ---------------------------------------->
                  <div class="col-md-12 col-sm-12 col-lg-9">
                    <div class="tab-content">
                      <div class="tab-pane fade" :class="{'active show': status_tap === 1? true : false }" id="event-tab1" >
                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">09:30 - 10:30 AM.</span>
                          </div>
                          <div class="event-info f-date-h3">
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
                              <li  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t("RuangrojPoonpolCharassriPhaholyotin") }}</li>
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
                            <p class="mb-0"  :class="{ 'f-thai': switchLang === 'th'  }"> {{ $t("text1") }}</p>
                          </div>
                        </div>
                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">11:30 - 12:00 PM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Fireside Chat</h3>
                            <ul class="event-org mb-0 list-unstyled">
                              <li  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t("by1") }}</li>
                            </ul>
                            <p class="mb-0"  :class="{ 'f-thai': switchLang === 'th'  }">
                              {{ $t("text2") }}
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
                            <h3 class="mb-0 pt-2">Agile Playgroundd</h3>
                            <ul class="event-org mb-0 list-unstyled">
                              <li>KBTG Team</li>
                            </ul>
                            <p class="mb-0"  :class="{ 'f-thai': switchLang === 'th'  }">
                              {{ $t("text3") }}
                            </p>
                            <br />
                            <h3 class="mb-0">Upskill Workshop</h3>
                            <ul class="event-org mb-0 list-unstyled">
                              <li>KBTG Team</li>
                            </ul>
                              <p class="mb-0">- How to Manage Projects Valued > 1 Billion Baht?</p>
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
                      </div>
                      <!-- -----------------------------------Day 2 ---------------------------------------->
                      <div class="tab-pane fade" :class="{'active show': status_tap === 2? true : false }" id="event-tab2">
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
                              <li  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t("RuangrojPoonpolCharassriPhaholyotin") }}</li>
                            </ul>
                            <p  :class="{ 'f-thai': switchLang === 'th'  }">{{$t('kickoffDay3')}}</p>
                          </div>
                        </div>
                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">11:00 - 11:30 AM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Inspire Talk</h3>
                            <ul class="event-org mb-0 list-unstyled">
                              <li>
                                 Guest Speaker
                              </li>
                            </ul>
                            <p class="mb-0"  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t("immerDay2") }}</p>
                          </div>
                        </div>
                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">11:30 - 12:00 PM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Fireside Chat</h3>
                            <ul class="event-org mb-0 list-unstyled">
                              <li  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t('PanuwatKenchatPhitsineeSincharoenpong') }}</li>
                            </ul>
                            <p class="mb-0"  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t('connectDay2') }}</p>
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
                            <p class="mb-0"  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t("text3") }}</p>
                            <br />
                            <h3 class="mb-0">Upskill Workshop</h3>
                            <ul class="event-org mb-0 list-unstyled">
                              <li>KBTG Team</li>
                            </ul>
                            <p class="mb-0">- {{$t('day2Jouney')}}</p>
                            <p class="mb-0">- {{$t('day2How')}}</p>
                            <p class="mb-0">- {{$t('day2Ob')}}</p>
                            <!-- <ul class=" mb-0 list-unstyled   " > 
                              <li>{{$t('day2Jouney')}}</li>
                              <li>{{$t('day2How')}}</li>
                              <li>{{$t('day2Ob')}}</li>
                            </ul> -->
                            <br/>
                            <h3 class="mb-0">1:1 Career Mentorship</h3>
                            <br />
                            <h3 class="mb-0">Interview + Final Interview</h3>
                            <p class="mb-0">- Business Analyst</p>
                            <p class="mb-0">- Software Engineer (Testing)</p>
                            <p class="mb-0">- Data Scientist (MLE) (Testing)</p>
                            <p class="mb-0">- New Grad Business Analyst (Testing)</p>
                            <p class="mb-0">- Agile Coach (Testing)</p>
                          </div>
                        </div>
                      </div>
                       <!-- -----------------------------------Day 3 ---------------------------------------->
                      <div class="tab-pane fade" :class="{'active show': status_tap === 3? true : false }" id="event-tab3">
                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">09:30 - 10:30 AM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">
                              <!-- <span  :class="{ 'f-thai': switchLang === 'th'  }" title="">{{ $t("Register") }}</span> -->
                              Register
                            </h3>
                          </div>
                        </div>
                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">10:30 - 11:00 AM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Welcome to KBTG and KBTG Beyond</h3>
                            <ul class="event-org mb-0 list-unstyled">
                              <li  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t("RuangrojPoonpolChetaphanSiridanupath") }}</li>
                            </ul>
                            <p  :class="{ 'f-thai': switchLang === 'th'  }">{{$t('kickoffDay3')}}</p>
                          </div>
                        </div>
                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">11:00 - 11:30 AM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Inspire Talk</h3>
                            <ul class="event-org mb-0 list-unstyled">
                              <li>
                                Guest Speaker
                              </li>
                            </ul>
                            <p class="mb-0"  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t("immerDay3") }}</p>
                          </div>
                        </div>
                        <div class="event-style1 w-100">
                          <div class="event-meta text-right">
                            <span class="d-block">11:30 - 12:00 PM.</span>
                          </div>
                          <div class="event-info">
                            <h3 class="mb-0 pt-2">Fireside Chat</h3>
                            <ul class="event-org mb-0 list-unstyled">
                              <li  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t("PaweenPiyasilChayaponSaepung") }}</li>
                            </ul>
                            <p class="mb-0"  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t("connectDay3") }}</p>
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
                            <p class="mb-0"  :class="{ 'f-thai': switchLang === 'th'  }">{{ $t("text3") }}</p>
                            <br />
                            <h3 class="mb-0">Upskill Workshop</h3>
                            <ul class="event-org mb-0 list-unstyled">
                              <li>KBTG Team</li>
                            </ul>
                            <p class="mb-0">- Let's Understand Enterprise Architecture in the Innovation World</p>
                            <p class="mb-0">- How to Handle High Volume Transaction Infrastructure in Crisis Situation</p>
                            <!-- <p class="p-0 m-0" >- {{$t('letunderDay3')}}</p>
                            <p class="p-0 m-0">- {{$t('howDay3')}}</p> -->
                            <br />
                            <h3 class="mb-0">1:1 Career Mentorship</h3>
                            <br />
                            <h3 class="mb-3">Interview + Final Interview</h3>
                            <p class="mb-0">- IT Security Engineer</p>
                            <p class="mb-0">- IT Security Operation</p>
                            <p class="mb-0">- Enterprise Architect</p>
                            <p class="mb-0">- Test Manager/Test Engineer</p>
                            <p class="mb-0">- Network and Security</p>
                            <p class="mb-0">- Server Management</p>
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
    <div class="bottom bg-line">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h4>
              FIND A JOB THAT SUITS YOU<span
                ><img src="~/assets/images/Asset15.png"
              /></span>
            </h4>
            <p>
              Show off your personality and capability for a chance to join
              KASIKORN Business-Technology Group, Thailand’s top tech company
            </p>
            <button><a href="/jobs-exe">See Positions</a></button>
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
     bodyAttrs: {
      class: "bg-all",
    },
  },
    data() {
      return {
        status_tap: 1,
        switchLang: 'en',
        storage: 'en',
        eventTap1: '#event-tab1',
        eventTap2: '#event-tab2',
       };
    },
  async mounted() {
      await this.$nextTick(() => {this.$nuxt.$loading.start();setTimeout(() => this.$nuxt.$loading.finish(), 2000);});
      //setTimeout(function(){ $("#navmenu li").removeClass('active');$("#navmenu li:eq(2)").addClass('active');}, 1000);
      console.log("Loading... /activites");

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
    },
  },
};
</script>
<style>
.cus-tap1{
  margin-bottom: 1195px !important;
}
.cus-tap2{
  margin-bottom: 1054px !important;
}
.list-ul {
  list-style-type: none;
}

.list-ul li:before {
  content: "-";
  position: absolute;
  margin-left: 0px;
}
</style>
