<template>
  <div id="main-wrapper" class="show">
    <Header />
    <side-bar :active="active" />
    <div class="content-body">
      <div class="container">
        <div class="row">
          <div class="col-xxl-12 col-xl-12">
            <div class="page-title">
              <h4>{{ title }}</h4>
            </div>
            <div class="card h-unset">
              <div class="card-header">
                <div class="settings-menu">
                  <router-link
                    to="settings-profile"
                    :class="activeSettingMenu === 1 && 'active'"
                    >Profile</router-link
                  >
                  <router-link
                    :class="activeSettingMenu === 2 && 'active'"
                    to="settings-application"
                    >Application</router-link
                  >
                  <router-link
                    :class="activeSettingMenu === 3 && 'active'"
                    to="settings-security"
                    >Security</router-link
                  >
                  <router-link
                    :class="activeSettingMenu === 4 && 'active'"
                    to="settings-activity"
                    >Activity</router-link
                  >
                  <router-link
                    :class="activeSettingMenu === 5 && 'active'"
                    to="settings-privacy"
                    >Privacy</router-link
                  >
                  <router-link
                    :class="activeSettingMenu === 6 && 'active'"
                    to="settings-payment-method"
                    >Payment Method</router-link
                  >
                  <router-link
                    :class="activeSettingMenu === 7 && 'active'"
                    to="settings-api"
                    >API</router-link
                  >
                  <router-link
                    :class="activeSettingMenu === 8 && 'active'"
                    to="settings-fees"
                    >Fees</router-link
                  >
                </div>
              </div>
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Header.vue";
import SideBar from "../SideBar.vue";
export default {
  components: { Header, SideBar },
  name: "Layout",
  props: {
    active: Number,
    title: String,
    activeSettingMenu: Number,
  },
};
</script>
