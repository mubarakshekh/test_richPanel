<template>
  <div class="pressure-container">
    <div class="tab">
      <span class="tab-heading">Pressure</span>
      <span v-if="pressure !=''">{{pressure}} hpa</span>
      <Loading v-else/>
    </div>
    <div class="tab">
      <span class="tab-heading">Humidity</span>
      <span v-if="humidity !=''">{{humidity}} %</span>
      <Loading v-else/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from '../loaders/Loading'
export default {
  name: "PressureHumidity",
  components: {Loading},
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