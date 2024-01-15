<template>
  <div id="main-wrapper" class="show">
    <!-- Header -->
    <div class="header landing">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <nav class="navbar">
              <div class="brand-logo">
                <router-link to="index.html">
                  <img src="../assets/images/logo.png" alt="" />
                  <span>Qash</span>
                </router-link>
              </div>
              <router-link to="" class="btn btn-success">Support</router-link>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Intro -->
    <div class="intro" id="intro" data-scroll-index="0">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-xl-6 col-md-6">
            <div class="intro-content pb-5">
              <h1>Qash - Crypto Exchange Dashboard Vue App</h1>
              <p>
                Qash is the complete UI Kit for cryptocurrency exchange. Sign
                in, Signup, Phone and ID card verification, One time password
                verify and add bank, debit card settings and profile etc pages
                included.
              </p>
              <div class="intro-btn">
                <router-link
                  to="#"
                  class="btn btn-primary me-3"
                  data-scroll-nav="1"
                  >View Demo</router-link
                >
                <router-link to="#" class="btn btn-outline-primary"
                  >Buy</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-md-6 py-md-5">
            <div class="intro-demo_img">
              <img
                src="../assets/images/demo/dashboard.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Slot -->
    <slot />
  </div>
</template>

<script>
export default {
  name: "Landing",
};
</script>
