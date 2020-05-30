<template>
  <div class="allDayContainer" style="  ">
    <div v-if="SevenDaysWeather">
      <div v-for="OneDay in SevenDaysWeather" :key="OneDay.day" style="display: inline-block; ">
        <DailyTab :OneDay="OneDay" />
      </div>
    </div>
    <div v-else><ContentLoader /></div>

  </div>
</template>

<script>
// import axios from "axios";
import DailyTab from "./DailyTab";
import ContentLoader from '../ContentLoader'
import { mapGetters } from "vuex";
export default {
  name: "WeeklyTabs",
  components: {
    DailyTab,
    ContentLoader,
  },

  props: [],
  computed: {
    ...mapGetters(["SevenDaysWeather"])
  }
};
</script>


<style scoped>
::-webkit-scrollbar {
  width: 1px;
}
.allDayContainer {
  text-align: center;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
</style>
