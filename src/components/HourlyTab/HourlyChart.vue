<template>
  <div>
    <div class="chart-container">
      <div class="chart-scrollable">
      <line-chart v-if="loaded" :height = '130' :chart-data="datacollection"></line-chart>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LineChart from "../../chart/lineChart";
export default {
  name: "HourlyChart",
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: null,
      loaded: true,
      temperature: [],
      time: []
    };
  },

  mounted() {
    this.fillData();
    this.getChartData();
  },

  methods: {
    fillData() {
      this.datacollection = {
        labels: this.time,
        datasets: [
          {
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderColor: "red",
            pointBackgroundColor: "",
            data: this.temperature
          }
        ]
      };
    },
    getChartData() {
      var results = this.HourLabel;
      console.log(this.HourLabel, "results");
      var tem = [];
      var tim = [];
      for (var i = 0; i <= results.length - 1; i++) {
        var te = results[i].temp;
        var ti = new Date(results[i].dt * 1000).getHours() + "HH";
        tem.push(te);
        tim.push(ti);
      }
      this.temperature = tem;
      this.time = tim;
      this.fillData();
    }
  },
  computed: {
    ...mapGetters(["HourLabel", "latitude", "longitude"])
  },
  watch: {
    HourLabel: function() {
      this.getChartData();
    }
  }
};
</script>

<style scopped>
.chart-container {
  text-align: center;
  
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.chart-scrollable{
min-width: 1000px;

}
</style>