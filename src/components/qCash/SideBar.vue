<template>
  <div class="sidebar">
    <div class="menu">
      <ul>
        <li>
          <router-link
            to="home"
            data-toggle="tooltip"
            data-placement="right"
            title="Home"
            :class="active === 1 && 'active'"
          >
            <span><i class="icofont-ui-home"></i></span>
          </router-link>
        </li>
        <li>
          <router-link
            to="trade"
            data-toggle="tooltip"
            data-placement="right"
            title="Trade"
            :class="active === 2 && 'active'"
            @click="clearTable"
          >
            <span><i class="icofont-stack-exchange"></i></span>
          </router-link>
        </li>
        <li class="logout">
          <router-link
            to="/"
            data-toggle="tooltip"
            data-placement="right"
            title="Signout"
            @click="clearLog"
          >
            <span><i class="icofont-power"></i></span>
          </router-link>
        </li>
      </ul>

      <p class="copyright">&#169; <router-link to="#" style="font-size: 10px;">NustraStudio</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    active: Number,
  },
  methods: {
    clearLog() {
      localStorage.clear();
    },
    clearTable() {
      console.log("A");
    }
  }
};
</script>
