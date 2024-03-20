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
                    <input class="form-check-input mt-2 text-success" type="checkbox" value="" id="chkRemem">
                    <label for="chkRemem" class="mt-1 ms-1">Ingat login Sayaa</label>
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
import AuthHeader from "../../components/qCash/AuthHeader.vue";
import axios from 'axios';

// var csrf = '{{csrf_token()}}';
// var formdata = new FormData();

// formdata.append('_token', csrf);

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
      const body = {
        nomer_hp: this.nohp,
        password: this.password
      } 
      const response = axios.post(`${this.url}member/loginowner`, body, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((result)=>{
          console.log(result)
          console.log(response)
      })
      .catch((error) => {
          console.log(error)
      });
      },
  },
};
</script>
