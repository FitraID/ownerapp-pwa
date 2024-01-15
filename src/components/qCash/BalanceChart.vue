<template>
  <div style="height: 210px">
    <apexchart
      type="donut"
      height="210"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import apexchart from "vue-apexcharts";
export default {
  name: "BalanceChart",
  components: { apexchart },
  data() {
    return {
      series: [44, 55, 13, 33],
      chartOptions: {
        chart: {
          height: 210,
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        labels: ["Bitcoin", "Tether", "Tezos", "Monero"],
        fill: {
          colors: ["#F7931A", "#2CA07A", "#A6DF00", "#FF6600"],
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
        legend: {
          show: false,
          position: "right",
          offsetY: 0,
          height: 150,
        },
      },
    };
  },
};
</script>
