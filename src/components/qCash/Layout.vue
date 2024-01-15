<template>
  <div id="main-wrapper" class="show">
    <Header />
    <side-bar :active="active" />
    <slot />
  </div>
</template>

<script>
import Header from "./Header.vue";
import SideBar from "./SideBar.vue";
export default {
  components: { Header, SideBar },
  name: "Layout",
  props: {
    active: Number,
  },
};
</script>
