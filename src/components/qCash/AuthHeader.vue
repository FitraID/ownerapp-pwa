<template>
  <div class="mini-logo text-center my-4">
    <router-link to="/intro"
      ><img src="../../assets/cintabunda.png" height="40%" width="40%" alt=""
    /></router-link>
    <h4 class="card-title mt-3">{{ title }}</h4>
  </div>
</template>

<script>
export default {
  name: "AuthHeader",
  props: {
    title: String,
  },
};
</script>
