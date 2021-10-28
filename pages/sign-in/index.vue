<template>
  <div>
      <section class="container-fluid wow fadeInDown">
      <div class="row">
          <div class="col-12 signin-bg">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-10 offset-lg-1 col-xxl-8 offset-xxl-2 signin-box">
                        <div class="row">
                            <div class="col-12 col-md-4 signin-img">
                                <img src="~/assets/images/SIGN-IN-REV2_02.jpg" alt="">
                            </div>
                            <form class="col-12 col-md-8 signin-form">
                                <hgroup>
                                    <h1>Join KBTG Inspire<img src="~/assets/images/i-quote-wc.svg" alt=""></h1>
                                    <h6>Sign in to your account</h6>
                                </hgroup>
                                <input type="text" placeholder="Email">
                                <input type="password" placeholder="Password">
                                <div class="staysignin_forget">
                                    <label><input type="checkbox"> Stay signed in</label>
                                    <a href="forgot-password.php" class="btn_forgot">Forget <span>Password?</span></a>
                                </div>
                                <div class="signin-captcha">
                                    <img src="~/assets/images/gcap.jpg" alt="">
                                </div>
                                <button class="signin-btn">SIGN IN</button>
                                <div class="signin-registertext">Don’t have an account? <a href="register.php">Register</a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
  </section>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
 </style>