<template>
  <div class="pressure-container">
    <div class="tab">
      <span class="tab-heading">Pressure</span>
      <span >{{pressure}} hpa</span>
    </div>
    <div class="tab">
      <span class="tab-heading">Humidity</span>
      <span >{{humidity}} %</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PressureHumidity",
  components: {},
  computed: {
    ...mapGetters(["humidity", "pressure"])
  }
};
</script>

<style scopped>
.pressure-container{
  margin: 10px;
  padding: 10px;
  position: relative;
  text-align: center;
}
.tab{
  display: inline-block;
  text-align: center;
  /* border: 1px solid #000; */
  width: 40%;
  padding: 10px;
  margin: 10px;
  background-color: #e1feff;
  box-sizing: border-box;

}

.tab-heading{
  display:block;
  font-weight: bold;
  font-size: 20px;
}


</style>