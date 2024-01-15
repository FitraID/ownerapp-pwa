<template>
  <layout :active="4">
    <div class="content-body">
      <div class="container">
        <div class="row">
          <div
            class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6"
            v-for="(priceData, index) in priceDatas"
            :key="index"
          >
            <div class="price-widget" :class="`bg-${priceData.bg}`">
              <router-link to="price-details">
                <div class="price-content">
                  <div class="icon-title">
                    <i
                      class="cc"
                      :class="`${priceData.bg.toUpperCase()}-alt`"
                    ></i>
                    <span>{{ priceData.title }}</span>
                  </div>
                  <h5>$ 11,785.10</h5>
                </div>
                <currency-chart />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </layout>
</template>

<script>
import CurrencyChart from "../../components/qCash/CurrencyChart.vue";
import Layout from "../../components/qCash/Layout.vue";
export default {
  data() {
    return {
      priceDatas: [
        { bg: "btc", title: "Bitcoin" },
        { bg: "eth", title: "Ethereum" },
        { bg: "usdt", title: "Tether" },
        { bg: "xrp", title: "Ripple" },
        { bg: "ltc", title: "Litecoin" },
        { bg: "ada", title: "Cardano" },
        { bg: "eos", title: "EOS" },
        { bg: "xmr", title: "Monero" },
        { bg: "xtz", title: "Tezos" },
        { bg: "xem", title: "NEM" },
        { bg: "neo", title: "NEO" },
        { bg: "dash", title: "Dash" },
        { bg: "etc", title: "Ethereum Classic" },
        { bg: "dgb", title: "DigiByte" },
        { bg: "dcr", title: "Decred" },
      ],
    };
  },
  components: { Layout, CurrencyChart },
};
</script>
