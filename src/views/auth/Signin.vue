<template>
  <div id="main-wrapper" class="show py-0">
    <div class="authincation section-padding">
      <div class="container h-100">
        <div class="row justify-content-center h-100 align-items-center">
          <div class="col-xl-5 col-md-6">
            <auth-header :title="'Masuk Ke Cinta Bunda'" />
            <div class="auth-form card">
              <div class="card-body">
                <form
                  method="POST"
                  name="myform"
                  class="signin_validate row g-3"
                  @submit.prevent="onSubmit"
                >
                  <div class="col-12">
                    <span class="fw-bold">No Telephone:</span>
                    <input
                      type="username"
                      class="form-control"
                      placeholder="Masukan Nomer HP..."
                      name="nohp"
                      v-model="nohp"
                    />
                  </div>
                  <div class="col-12">
                    <span class="fw-bold">Password :</span>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Masukan Password..."
                      name="password"
                      v-model="password"
                    />
                    <div class="container m-0 p-0 bg-danger text-center text-light fs-5" id="falseUser" style="display: none;" >Password atau No Hp Salah</div> 
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-primarys btn-block">
                      <a href="" class="text-light" style="text-decoration: none;">Masuk</a> 
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
import router from "@/router";
import AuthHeader from "../../components/qCash/AuthHeader.vue";

export default {
  data() {
    return {
      nohp: '',
      password: ''
    }
  },
  components: { AuthHeader },
  methods: {
    onSubmit() {
      let formdata = new FormData();
      formdata.append("nomor_hp", this.nohp);
      formdata.append("password", this.password);

      const unauthorized = document.getElementById("falseUser");

      if(this.nohp === "" || this.password === "") {
        alert("Lengkapi Form");
      }
      else {
        fetch(`${this.url}owner/login`,{
          method: "POST",
          body: formdata,
        })
        .then(function(response) {
          if(response.status === 401 || response.status === 500) {
            unauthorized.style.display = "block";
          }
          else {
            return response.json();
          }
        })
        .then(function(data) {
          if(data.success === true) {
            localStorage.setItem('access_token', data.access_token);
            router.push('home');
          } 
        })
        .catch(error => {
          if(error.status !== "401") {
            console.log(error);
          }
        });
        }
    }
  },
};

</script>
