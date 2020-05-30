<template>
  <div>
    <span class="display-3">{{CurrentTemp | round}}&#8451;</span>
    <span>
      <img :src=" 'http://openweathermap.org/img/wn/' + dynamicIcon + '@2x.png' " alt="" srcset="">
    </span>
  </div>
</template>

<script>
// import axios from "axios";
import { mapGetters } from 'vuex'
export default {
  name: "CurrentTemperature",
  components: {},

  data() {
    return {

    };
  },

    computed: {
    ...mapGetters(["CurrentTemp",'dynamicIcon'])
  },

  created(){

  }

};
</script>

<style>
</style>