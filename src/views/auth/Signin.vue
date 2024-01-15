<template>
  <div id="main-wrapper" class="show">
    <div class="authincation section-padding">
      <div class="container h-100">
        <div class="row justify-content-center h-100 align-items-center">
          <div class="col-xl-5 col-md-6">
            <auth-header :title="'Masuk Ke Cinta Bunda'" />
            <div class="auth-form card">
              <div class="card-body">
                <form
                  method="post"
                  name="myform"
                  class="signin_validate row g-3"
                  action="otp-2"
                  @submit.prevent="onSubmit"
                >
                  <div class="col-12">
                    <input
                      type="username"
                      class="form-control"
                      placeholder="Masukan Username...."
                      name="username"
                    />
                  </div>
                  <div class="col-12">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Masukan Password..."
                      name="password"
                    />
                  </div>
                  
                  <div class="text-center">
                    <button type="submit" class="btn btn-primarys btn-block">
                      Masuk 
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
      this.$router.push("/otp-2");
    },
  },
};
</script>
