<template>
  <div id="main-wrapper" class="show">
    <div class="authincation section-padding">
      <div class="container h-100">
        <div class="row justify-content-center h-100 align-items-center">
          <div class="col-xl-5 col-md-6">
            <auth-header :title="'Sign in to Qash'" />
            <div class="auth-form card">
              <div class="card-body">
                <form @submit.prevent="onSubmit" class="identity-upload">
                  <div class="identity-content">
                    <span class="icon"><i class="icofont-email"></i></span>
                    <p>
                      We sent verification email to
                      <strong class="text-dark">example@email.com</strong>.
                      Click the link inside to get started!
                    </p>
                    <router-link to="/">Go to Dashboard</router-link>
                  </div>
                </form>
              </div>
              <div class="card-footer text-center">
                <router-link to="signup">Email didn't arrive?</router-link>
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
      this.$router.push("/verify-step-2");
    },
  },
};
</script>
