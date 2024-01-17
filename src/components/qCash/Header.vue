<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="header-content">
            <div class="header-left">
              <div class="brand-logo">
                <router-link to="/home">
                  <img src="../../assets/cintabunda.png" alt="" />
                  <span>Cinta Bunda</span>
                </router-link>
              </div>
            </div>
            <div class="header-right">
              <!-- Notification -->
              <!-- <div
                class="notification dropdown"
                @click="activeDropDown('notification')"
                :class="active_ === 'notification' && 'show'"
              >
                <div class="notify-bell" data-toggle="dropdown">
                  <span><i class="icofont-alarm"></i></span>
                </div>
                <div
                  class="
                    dropdown-menu dropdown-menu-right
                    notification-list
                    mt-3
                  "
                  :class="active_ === 'notification' && 'show'"
                >
                  <h4>Announcements</h4>
                  <div class="lists">
                    <router-link to="#" class="">
                      <div class="d-flex align-items-center">
                        <span class="me-3 icon success"
                          ><i class="icofont-check"></i
                        ></span>
                        <div>
                          <p>Account created successfully</p>
                          <span>2020-11-04 12:00:23</span>
                        </div>
                      </div>
                    </router-link>
                    <router-link to="#" class="">
                      <div class="d-flex align-items-center">
                        <span class="me-3 icon fail"
                          ><i class="icofont-close"></i
                        ></span>
                        <div>
                          <p>2FA verification failed</p>
                          <span>2020-11-04 12:00:23</span>
                        </div>
                      </div>
                    </router-link>
                    <router-link to="#" class="">
                      <div class="d-flex align-items-center">
                        <span class="me-3 icon success"
                          ><i class="icofont-check"></i
                        ></span>
                        <div>
                          <p>Device confirmation completed</p>
                          <span>2020-11-04 12:00:23</span>
                        </div>
                      </div>
                    </router-link>
                    <router-link to="#" class="">
                      <div class="d-flex align-items-center">
                        <span class="me-3 icon pending"
                          ><i class="icofont-warning"></i
                        ></span>
                        <div>
                          <p>Phone verification pending</p>
                          <span>2020-11-04 12:00:23</span>
                        </div>
                      </div>
                    </router-link>

                    <router-link to="./settings-activity"
                      >More <i class="icofont-simple-right"></i
                    ></router-link>
                  </div>
                </div>
              </div> -->

              <div
                class="profile_log dropdown"
                @click="activeDropDown('profile')"
                :class="active_ && 'show'"
              >
                <div class="user" data-toggle="dropdown">
                  <span class="thumb"
                    ><img src="../../assets/user.png" alt=""
                  /></span>
                  <span class="arrow"><i class="icofont-angle-down"></i></span>
                </div>
                <div
                  class="dropdown-menu dropdown-menu-right mt-3"
                  :class="active_ === 'profile' && 'show'"
                >
                  <div class="user-email">
                    <div class="user">
                      <span class="thumb"
                        ><img src="../../assets/user.png" alt=""
                      /></span>
                      <div class="user-info">
                        <h5>Bu Siti</h5>
                        <span>08421852818</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- <router-link to="profile" class="dropdown-item">
                    <i class="icofont-ui-user"></i>Profile
                  </router-link>
                  <router-link to="wallet" class="dropdown-item">
                    <i class="icofont-wallet"></i>Wallet
                  </router-link>
                  <router-link to="settings-profile" class="dropdown-item">
                    <i class="icofont-ui-settings"></i> Setting
                  </router-link>
                  <router-link to="settings-activity" class="dropdown-item">
                    <i class="icofont-history"></i> Activity
                  </router-link>
                  <router-link to="lock" class="dropdown-item">
                    <i class="icofont-lock"></i>Lock
                  </router-link> -->
                  <router-link to="/" class="dropdown-item logout">
                    <i class="icofont-logout"></i> Logout
                  </router-link>
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
export default {
  name: "Header",
  data() {
    return {
      active_: "",
      themes: "",
    };
  },
  methods: {
    activeDropDown(value) {
      this.active_ = this.active_ === value ? "" : value;
    },
    themeToggle(value) {
      let element = document.body;
      let value_ = value && value.isOk;
      this.themes = this.themes !== "" ? "" : "dark-theme";
      element.classList = value_ ? value.theme : this.themes;
      localStorage.setItem("theme", value_ ? value.theme : this.themes);
    },
  },
  created() {
    let theme = localStorage.getItem("theme");
    this.themeToggle({ theme, isOk: true });
    this.themes = theme;
  },
};
</script>
