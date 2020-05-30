<template>
  <div>
    <!-- <div style="position:relative">
      <vue-bootstrap-typeahead
        class="input-padding"
        v-model="query"
        :data="cities"
        :minMatchingChars="1"
      />
      <i class="fa fa-search search-icon" aria-hidden="true"></i>
      <i class="fa fa-map-marker location-icon" aria-hidden="true"></i>
    </div> -->
    <div class="">
      <form class="form-inline" @submit.prevent="getWeather">
        <input class="form-control col-4" type="number" placeholder="latitude (0-90)" min="0" max="90" step="0.000001" v-model="latitude" />
        <input class="form-control col-4" type="number" placeholder="longitude (0-180)" min="0" max="180" step="0.000001" v-model="longitude" />
        <input class="form-control col-4 btn btn-success" type="submit" value="Get Data" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import VueBootstrapTypeahead from "vue-bootstrap-typeahead";

export default {
  name: "SearchBox",
  components: {
    // VueBootstrapTypeahead
  },

  data() {
    return {
      // query: "",
      // cities: ["Canada", "USA", "Mexico"],
      latitude: "",
      longitude: ""
    };
  },

  methods: {
    ...mapActions(["getTemp"]),
    getWeather() {
      if (this.latitude && this.latitude) {
        this.getTemp([this.latitude, this.longitude]);
     
        sessionStorage.setItem('currentlatitude', this.latitude)
        sessionStorage.setItem('currentlongitude', this.longitude)
      }

    }
  },

  computed: {
    ...mapGetters(["city"])
  }
};
</script>

<style scopped>
.input-padding {
  padding-left: 5% !important;
}
.search-icon {
  position: absolute;
  right: 2%;
  top: 30%;
}
.location-icon {
  position: absolute;
  left: 2%;
  top: 30%;
}
</style>