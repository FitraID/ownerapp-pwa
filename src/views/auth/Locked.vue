<template>
  <div id="main-wrapper" class="show">
    <div class="authincation section-padding">
      <div class="container h-100">
        <div class="row justify-content-center h-100 align-items-center">
          <div class="col-xl-5 col-md-6">
            <auth-header :title="'Sign in to Qash'" />
            <div class="auth-form card">
              <div class="card-body">
                <form @submit.prevent="onSubmit" class="row g-3">
                  <div class="col-12">
                    <label class="form-label">Enter Password</label>

                    <input
                      type="password"
                      class="form-control"
                      placeholder="***********"
                    />
                  </div>
                  <div class="text-center mt-4">
                    <button type="submit" class="btn btn-primary btn-block">
                      Submit
                    </button>
                  </div>
                </form>
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
      this.$router.push("/");
    },
  },
};
</script>
