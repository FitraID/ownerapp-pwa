<template>
  <div style="height: 330px">
    <apexchart
      ref="chart"
      type="area"
      height="300"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "AnalyticsChart",
  components: { apexchart: VueApexCharts },
  data: function() {
    return {
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
          categories: [],
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
      series: [{
        name: 'stok',
        data: [1,2]
      }],
    };
  },
  methods: {
    getHomeList() {
      fetch(`${this.url}owner/home?access_token=${localStorage.getItem('access_token')}`, {method: "GET"})
        .then(response => response.json())
        .then(data => {
          var arrStok = [];
          var arrDate = [];

          for(const date in data) {
            let totalStok = 0;
            for(const index in data[date]) {
                let num = parseInt(data[date][index], 10)
                totalStok += num;
            }
            arrStok.push(totalStok);
            arrDate.push(date);
          }
          this.series = [{
            name: 'terjual',
            data: arrStok
          }],
          this.chartOptions= {...this.chartOptions, ... {
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
            categories: arrDate,
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
          }}
          // console.log(this.series[0].data, this.chartOptions.xaxis.categories)
        })
        .catch((error) => {
          console.error(error);
        });
      },
  },
  
  mounted() {
    this.getHomeList()
  }
};
</script>
