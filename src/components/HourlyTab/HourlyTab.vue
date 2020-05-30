<template>
  <div class="hourly-container">
    <CurrentTemperature/>
    <HourlyChart/>
    <PressureHumidity/>

  </div>
</template>

<script>
// import axios from 'axios'
import CurrentTemperature from "./CurrentTemperature";
import HourlyChart from "./HourlyChart";
import PressureHumidity from "./PressureHumidity";

export default {
  name: 'HourlyTab',
  components: {
    CurrentTemperature,
    HourlyChart,
    PressureHumidity,


  },
  data(){
    return{
      hourly:{},

      

    }
  },


}
</script>

<style scopped> 
::-webkit-scrollbar {
  width: 1px;
}
.hourly-container{
  padding: 10px;
background-color: #fffdfd;
box-shadow: 0 0 10px #999;
border-radius: 15px;
}
</style>