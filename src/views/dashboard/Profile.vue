<template>
  <layout>
    <div class="content-body">
      <div class="container">
        <div class="row">
          <div class="col-xxl-6 col-xl-6 col-lg-6">
            <div class="card welcome-profile">
              <div class="card-body">
                <img src="../../assets/images/profile/2.png" alt="" />
                <h4>Welcome, Jannatul Maowa!</h4>
                <p>
                  Looks like you are not verified yet. Verify yourself to use
                  the full potential of Qash.
                </p>

                <ul>
                  <li>
                    <router-link to="#">
                      <span class="verified"
                        ><i class="icofont-check-alt"></i
                      ></span>
                      Verify account
                    </router-link>
                  </li>
                  <li>
                    <router-link to="#">
                      <span class="not-verified"
                        ><i class="icofont-close-line"></i
                      ></span>
                      Two-factor authentication (2FA)
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Download App</h4>
              </div>
              <div class="card-body">
                <div class="app-link">
                  <h5>Get Verified On Our Mobile App</h5>
                  <p>
                    Verifying your identity on our mobile app more secure,
                    faster, and reliable.
                  </p>
                  <router-link to="#" class="btn btn-primary">
                    <img src="../../assets/images/android.svg" alt="" />
                  </router-link>
                  <br />
                  <div class="mt-3"></div>
                  <router-link to="#" class="btn btn-primary">
                    <img src="../../assets/images/apple.svg" alt="" />
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xxl-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Information</h4>
                <router-link to="/settings-profile" class="btn btn-primary"
                  >Edit</router-link
                >
              </div>
              <div class="card-body">
                <form class="row">
                  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <div class="user-info">
                      <span>USER ID</span>
                      <h4>818778</h4>
                    </div>
                  </div>
                  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <div class="user-info">
                      <span>EMAIL ADDRESS</span>
                      <h4>email@example.com</h4>
                    </div>
                  </div>
                  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <div class="user-info">
                      <span>COUNTRY OF RESIDENCE</span>
                      <h4>Bangladesh</h4>
                    </div>
                  </div>
                  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <div class="user-info">
                      <span>JOINED SINCE</span>
                      <h4>20/10/2020</h4>
                    </div>
                  </div>
                  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <div class="user-info">
                      <span>TYPE</span>
                      <h4>Personal</h4>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="col-xxl-8 col-xl-6">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">VERIFY & UPGRADE</h4>
              </div>
              <div class="card-body">
                <h5>
                  Account Status :
                  <span class="text-warning"
                    >Pending <i class="icofont-warning"></i
                  ></span>
                </h5>
                <p>
                  Your account is unverified. Get verified to enable funding,
                  trading, and withdrawal.
                </p>
                <router-link to="#" class="btn btn-primary">
                  Get Verified</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-6">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Earn 30% Commission</h4>
              </div>
              <div class="card-body">
                <p>Refer your friends and earn 30% of their trading fees.</p>
                <router-link to="#" class="btn btn-primary">
                  Referral Program</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../../components/qCash/Layout.vue";

export default {
  components: { Layout },
};
</script>
