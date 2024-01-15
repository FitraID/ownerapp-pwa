<template>
  <div style="height: 330px">
    <apexchart
      type="area"
      height="300"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    
  </div>
</template>

<script>
import axios from 'axios'
import VueApexCharts from "vue-apexcharts";
var pertama = "2022-09-08";
export default {
  name: "AnalyticsChart",
  components: { apexchart: VueApexCharts },
  data() {
    return {
      pertama : this.pertama,
      totalSales : "200",
      series: [],
      chartOptions: {
        animations: {
          enabled: false,
        },
        height: "300",
        chart: {
          type: "area",
          toolbar: {
            show: false,
          },
        },
        colors: ["#00A056"],
        dataLabels: {
          enabled: false,
        },
        grid: {
          show: false,
          borderColor: "#F1F1F1",
        },
        xaxis: {
          type: 'date',
          categories: [pertama],
          tickPlacement: 'Between',
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "#00A056",
            },
            formatter: function (y) {
              return y.toFixed(0) + "";
            },
          },
        },
      },
    };
  },
  methods: {
    getHomeList() {
      axios
        .get(this.urlcloud +  "owner/home")
        .then((response) => {
          const tanggal = [];
          const data = [];
          const listObject = [];

          let first = 0
          for (const date in response.data) {
            if(first === 0) {
              this.pertama = date;
              first++
            }
            else {
              tanggal.push(date);
            }
            listObject.push(response.data[date])
            //console.log(this.chartOptions.xaxis.categories)
          }

          let penjualan = 0;
          for(const item of listObject) {
            data.push(item)
            penjualan += item;
          }
          this.totalSales = penjualan;
          for(const itm in tanggal) {
            this.chartOptions.xaxis.categories.push(tanggal[itm])
          }

          console.log(this.pertama)
          this.series = [{ name: "Barangs", data }];
          //console.log(this.chartOptions.xaxis.categories)
          // this.chartOptions.xaxis.categories = tanggal.map(item => item.categories)
          
          return tanggal;
        })
        .catch((error) => {
          console.error(error);
        });
      },
  },
  beforeMount() {
    this.getHomeList()
  }
};
</script>
