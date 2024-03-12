<template>
  <layout :active="1">
    <div class="content-body">
      <div class="container">
        <div class="row">
          <div class="col-xxl-8 col-xl-8">
            <div class="card home-chart">
              <div class="card-header">
                <h4 class="card-title home-chart">Laporan Harian Transaksi</h4>
              </div>
              <div class="card-body">
                <div class="home-chart-height">
                  <!-- <div id="chartx"></div> -->
                  <!-- <analytics-chart /> -->
                  <analytics-chart />
                  <div class="row">
                    <div
                      class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 mb-2"
                    >
                      <div class="chart-price-value">
                        <span>Penjualan minggu ini</span>
                        <h5>120 pcs</h5>
                      </div>
                    </div>
                    <div
                      class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 mb-2"
                    >
                      <div class="chart-price-value">
                        <span>Penjualan Hari ini</span>
                        <h5>20 pcs</h5>
                      </div>
                    </div>
                    <div
                      class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 mb-2"
                    >
                      <div class="chart-price-value">
                        <span>Omzet Hari ini</span> 
                        <h5>Rp.5.000.000</h5>
                      </div>
                    </div>
                    <div
                      class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 mb-2"
                    >
                      <div class="chart-price-value">
                        <span>Omzet minggu ini</span>
                        <h5>Rp.32.000.000</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-8 col-xl-8">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Top 10 Barang All Cabangs</h4>
              </div>
              <div class="card-body">
                <div class="table-responsive transaction-table">
                  <table class="table table-striped responsive-table" id="tableTop">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Barcode</th>
                        <th>Nama</th>
                        <th>Jumlah</th>
                      </tr>
                    </thead>
                    <table-top/>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>
<script>
import AnalyticsChart from "../../components/qCash/home/AnalyticsChart.vue";
import tableTop from "../../components/qCash/home/tableList.vue"
import Layout from "../../components/qCash/Layout";

export default {
  components: {
    Layout,
    AnalyticsChart,
    tableTop,
  },
  data() {
    return {
      message: "Nustra Studio",
      minggunini: tableTop.sortKey,
    };
  },
  methods: {
    doCopy: function () {
      this.$copyText(this.message).then(
        function () {
          alert("Copied");
        },
        function () {
          alert("Can not copy");
        }
      );
    },
  },
};
</script>
