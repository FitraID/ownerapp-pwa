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
        data: [0,0]
      }],
    };
  },
  methods: {
    getHomeList() {
      let urlAll = "";
      
      console.log(localStorage.getItem('table'));
      if(localStorage.getItem('table') === null || localStorage.getItem('table') === "") {
        urlAll = `${this.url}owner/home?access_token=${localStorage.getItem('access_token')}`;
      }
      else {
        urlAll = `${this.url}owner/laporan?access_token=${localStorage.getItem('access_token')}&database=${localStorage.getItem('table')}`;
      }
 
      fetch(urlAll, {method: "GET"})
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          var arrStok = [];
          var arrDate = [];

          for(const date in data) {
            let totalStok = 0;
            for(const index in data[date]) {

                let num = parseInt(data[date][index].stok, 10)
                totalStok += num;
            }

            const formatter = new Intl.DateTimeFormat('en', { month: 'short' });

            const tgl = new Date(date);

            const bulan = formatter.format(tgl);
            const hari = tgl.getDate();

            const tanggal = `${bulan}-${hari}`;

            arrStok.push(totalStok);
            arrDate.push(tanggal);
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
