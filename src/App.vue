<template>
  <div id="app">
    <div id="preloader" v-show="isLoading"><i>.</i><i>.</i><i>.</i></div>
    <!-- <router-link to="/">>Home</router-link> |
    <router-link to="/about">About</router-link> -->

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isLoading: true,
      time: 100,
      show: 1,
      appUrl : 'https://inventory.cinta-bunda.com/api/',
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>
