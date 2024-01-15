<template>
  <layout :active="2">
    <div class="content-body">
      <div class="container">
        <div class="row">
          <listcabang />
        </div>
      </div>
    </div>
    <!-- Modal -->
    <buy-modal />
    <buy-successle-modal />
  </layout>
</template>

<script>
import BuyModal from "../../components/qCash/trade/BuyModal.vue";
import BuySuccessleModal from "../../components/qCash/trade/BuySuccessleModal.vue";
import Layout from "../../components/qCash/Layout.vue";
import listcabang from "../../components/qCash/home/ListCabangs.vue";

export default {
  components: { Layout, BuyModal, BuySuccessleModal, listcabang },
};
</script>
