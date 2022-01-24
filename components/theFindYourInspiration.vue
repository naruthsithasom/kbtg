<template>
  <div class="row justify-content-center">
       <div class="col-12 col-md-6 col-lg-4">
      <div class="item wow fadeInUp" data-wow-duration="" data-wow-delay="">
        <div class="img-find">
          <img src="~/assets/images/img-find5.288c838.png" />
          <span class="icon"><img src="~/assets/images/Asset16.png" /></span>
        </div>
        <h3>Upskill Workshop</h3>
        <p :class="{ 'f-thai': switchLang === 'th' }">
          {{ $t("Upskill") }}
        </p>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="item wow fadeInUp" data-wow-duration="" data-wow-delay="">
        <div class="img-find">
          <img src="~/assets/images/img-find1.png" />
          <span class="icon"><img src="~/assets/images/Asset16.png" /></span>
        </div>
        <h3>Agile Playground</h3>
        <p :class="{ 'f-thai': switchLang === 'th' }">
          {{ $t("AgilePlayground") }}
        </p>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <!-- <div
        class="item wow fadeInUp"
        data-wow-duration="1000"
        data-wow-delay="200"
      > -->
      <div class="item wow fadeInUp" data-wow-duration="" data-wow-delay="">
        <div class="img-find">
          <img src="~/assets/images/img-find3.png" />
          <span class="icon"><img src="~/assets/images/Asset16.png" /></span>
        </div>

        <h3>1:1 Career Mentorship</h3>
        <p :class="{ 'f-thai': switchLang === 'th' }">
          {{ $t("1:1CareerMentorship") }}
        </p>
      </div>
    </div>
   </div>
</template>
<script>
export default {
  data(){
    return{
        switchLang: 'en',
        storage: 'en',
    }
  },
    async mounted() {
      //await this.$nextTick(() => {this.$nuxt.$loading.start();setTimeout(() => this.$nuxt.$loading.finish(), 2000);});

      this.switchLang = localStorage.getItem('lang');

      if(this.switchLang === null){ 
        localStorage.setItem('lang', 'en');
        this.switchLang = 'en'
      } 

      this.$router.push(this.switchLocalePath(this.switchLang))

   },
}
</script>