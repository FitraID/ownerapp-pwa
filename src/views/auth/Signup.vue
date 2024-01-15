<template>
  <div id="main-wrapper" class="show">
    <div class="authincation section-padding">
      <div class="container h-100">
        <div class="row justify-content-center h-100 align-items-center">
          <div class="col-xl-5 col-md-6">
            <auth-header :title="'Sign in to Qash'" />
            <div class="auth-form card">
              <div class="card-body">
                <form
                  method="post"
                  @submit.prevent="onSubmit"
                  name="myform"
                  class="signin_validate row g-3"
                >
                  <div class="col-12">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                  <div class="col-12">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="hello@example.com"
                      name="email"
                    />
                  </div>
                  <div class="col-12">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <div class="col-12">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        I certify that I am 18 years of age or older, and agree
                        to the
                        <router-link to="#" class="text-primary"
                          >User Agreement</router-link
                        >
                        and
                        <router-link to="#" class="text-primary"
                          >Privacy Policy</router-link
                        >.
                      </label>
                    </div>
                  </div>

                  <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-block">
                      Create account
                    </button>
                  </div>
                </form>
                <div class="text-center">
                  <p class="mt-3 mb-0">
                    <router-link class="text-primary" to="signin"
                      >Sign in</router-link
                    >
                    to your account
                  </p>
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
import AuthHeader from "../../components/qCash/AuthHeader.vue";

export default {
  components: { AuthHeader },
  methods: {
    onSubmit() {
      this.$router.push("/verify-email");
    },
  },
};
</script>
