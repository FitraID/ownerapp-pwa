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
                        <span>Barang terjual <br> Hari ini</span>
                        <h5 class="text-success">
                        {{ this.stoktoday }} pcs</h5>
                      </div>
                    </div>
                    <div
                      class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 mb-2"
                    >
                      <div class="chart-price-value">
                        <span>Barang Terjual <br> Minggu ini</span>
                        <h5 class="text-success">{{ this.stokminggu }} pcs</h5>
                      </div>
                    </div>
                    <div
                      class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 mb-2"
                    >
                      <div class="chart-price-value">
                        <span>Omzet <br> Hari ini</span> 
                        <h5 class="text-success">Rp. {{ this.salehari }}</h5>
                      </div>
                    </div>
                    <div
                      class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 mb-2"
                    >
                      <div class="chart-price-value">
                        <span>Omzet <br> minggu ini</span>
                        <h5 class="text-success">Rp. {{ this.omzetweek }}</h5>
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
                <h4 class="card-title">Top 10 Barang Semua Cabangs</h4>
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
      stoktoday: 0,
      stokminggu: 0,
      salehari: "0",
      omzetweek: "0",
    };
  },
  computed: {
    dataitem() {return this.data()}
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
    getData() {
      fetch(`${this.url}owner/home?access_token=${localStorage.getItem('access_token')}`, {method: "GET"})
        .then(response => response.json())
        .then(data => {
          const date = new Date().toISOString().split('T')[0];
          let stokHari = 0;
          let stkMinggu = 0;
          let stokharionly = 0;
          let hjHari = 0;
          let hjWeek = 0;
          let saleweek = 0;
          for(const tgl in data) {  
            if(tgl === date) {
              for(const stok1 in data[tgl]) {
                let stk = parseInt(stok1, 10);
                  stokharionly += stk;  
                  hjHari += parseInt(data[tgl][stok1], 10);
                  if(hjHari !== 0) {
                    this.salehari = hjHari.toLocaleString();
                  }
              }
              if(stokharionly !== 0) {
                this.stoktoday = stokharionly.toLocaleString();
              }
            }
            for(const stok in data[tgl]) {
              let stk = parseInt(stok, 10);
              stokHari += stk;
              hjWeek += parseInt(data[tgl][stok]);
              // console.log(stokHari);
            }
            saleweek = hjWeek;
            stkMinggu = stokHari;
          }
          if(saleweek !== 0) {
            this.omzetweek = saleweek.toLocaleString();
          }
          if(stkMinggu !== 0) {
            this.stokminggu = stkMinggu.toLocaleString();
          }
        })
    }
  },
  mounted() {
    localStorage.removeItem('table');
    this.getData();
  }
};
</script>
