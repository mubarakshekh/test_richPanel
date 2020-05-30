<template>
  <div class="model-contain">
    <div class="text-center">
      <span>{{OneDay.dt | weekday | weeknameshort}}</span>
   
    </div>
    <div class="text-center">
      <span>{{OneDay.temp.max | round }}&deg;</span>
      <span>{{OneDay.temp.min | round}}&deg;</span>
    </div>
    <div>
      <img :src="icon" />
    </div>
    <div class="text-center">
      <span>{{OneDay.weather[0].main}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DailyTab",

  data() {
    return {
      icon: `http://openweathermap.org/img/wn/${this.OneDay.weather[0].icon}@2x.png`
    };
  },
  props: ["OneDay"],

  mounted() {},

  Methods: {}
};
</script>


<style scoped>
span {
  padding: 5px;
  font-weight: bold;
}

.model-contain {
  /* border: 1px solid #000; */
  padding: 3px;
  margin: 3px;
  background-color: #e1feff;
  border-radius: 5px;
  box-shadow: 0px 0px 3px #000 ;
}
.model-contain:hover{
box-shadow: 0px 0px 3px #fff ;
}
</style>
