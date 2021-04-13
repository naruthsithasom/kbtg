<template>
  <div v-if="loading" class="loading-page fade-in ">
    <img src="~/assets/images/logo.png" alt="">
   </div>
</template>

<script>
  export default {
    data:   () =>   ({
      loading: false
    }),
      methods: {
        start() {
        this.loading = true
      },
        finish() {
          this.loading = false
      }
    }
  }
</script>

<style scoped>

@font-face {
  font-family: 'Gotham-Book';
  src: url('~/assets/hco_fonts/woff/GothamSSm-Book_Web.woff') format('woff');
  font-weight: 600;
  font-style:'GB';
}
  .loading-page {
    position: relative;
    width: auto;
    height: 100vh;
    font-size: 30px;
    font-style:'GB';
    z-index: 1;
    background: rgba(255, 255, 255, 0.5); /* Black color with 50% alpha/opacity */
    /* animation: fadeWipe 1s ease-in-out   ; */
  }
  .loading-page > img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;

  }
  .fade-in {
	/* opacity: 1; */
	animation-name: fadeInOpacity;
	animation-iteration-count: 3;
 	animation-timing-function: ease-in;
	animation-duration: 3s;
}
 
@keyframes fadeInOpacity {
	   from {
      animation-timing-function:ease;
      opacity: 1;
    }
    50% {
      animation-timing-function: ease-out;
      opacity: 0;
    }
    to {
      animation-timing-function: ease-in-out;
      opacity: 1;
    }
}
 
</style>

