<template>
  <div>
    <span v-if="CurrentTemp !=0" class="display-3">{{CurrentTemp | round}}&#8451;</span>
    <span v-else ><Loading/></span>
    <span>
      <img :src=" 'http://openweathermap.org/img/wn/' + dynamicIcon + '@2x.png' " alt="" srcset="">
    </span>
  </div>
</template>
<script>
import Loading from '../loaders/Loading'
import { mapGetters } from 'vuex'
export default {
  name: "CurrentTemperature",
  components: {Loading},
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