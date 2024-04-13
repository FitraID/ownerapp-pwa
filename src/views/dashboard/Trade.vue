<template >
  <layout :active="2">
    <div class="content-body">
      <div class="container">
        <listcabang />
      </div>
    </div>
    <!-- Modal -->
  </layout>
</template>

<script>
import Layout from "../../components/qCash/Layout.vue";
import listcabang from "../../components/qCash/home/ListCabangs.vue";

export default {
  components: { Layout, listcabang },
};
</script>
