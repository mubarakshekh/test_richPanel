<template>
  <div id="app">
    <div class="for-response">
      <Home v-if="Loading" />
      <ContentLoader v-else />
      <modal name="permission" :width="300" :height="300" style>
        <div class="modal-contain">
          <div>Rich Panel need your location for weather details</div>
          <button class="btn btn-success margin-20" @click="hide">Allow</button>
          <button class="btn btn-danger margin-20" @click="justHide">Decline</button>
        </div>
      </modal>
    </div>
    <div class="for-not-supported">We're working for this screen size. Sorry For the inconvenience</div>
  </div>
</template>

<script>
import Home from "./page/home";
import ContentLoader from "./components/loaders/ContentLoader";
import { mapActions } from "vuex";
import { service } from "./service/permission";
export default {
  name: "App",
  components: {
    Home,
    ContentLoader
  },
  data() {
    return {
      latitude: "",
      longitude: "",
      Loading: false,
      city: ""
    };
  },
  created() {},

  methods: {
    ...mapActions(["getTemp"]),
    show() {
      this.$modal.show("permission");
    },
    justHide() {
      this.$modal.hide("permission");
    },

    hide: function() {
      service.permission().then(response => {
        if (response) {
          console.log(response.data);
          this.latitude = response.data.lat;
          this.longitude = response.data.lon;
          this.city = response.data.city;
          this.getTemp([this.latitude, this.longitude, this.city]);
          sessionStorage.setItem("currentlatitude", this.latitude);
          sessionStorage.setItem("currentlongitude", this.longitude);

          this.Loading = true;
          this.$modal.hide("permission");
        }
      });
    }
  },

  mounted() {
    const latitude = sessionStorage.getItem("currentlatitude");
    const longitude = sessionStorage.getItem("currentlongitude");

    if (latitude && longitude) {
      this.hide();
    } else {
      this.show();
    }
  }
};
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 20px;
}
.modal-contain {
  padding: 30px;
  font-size: 25px;
  text-align: center;
}

.margin-20 {
  margin: 20px;
}

.for-not-supported {
  display: none;
  position: absolute;
  top: 30%;
  text-align: center;
}

@media only screen and (max-width: 400px) {
  .for-response {
    display: none;
  }

  .for-not-supported {
    display: inline-block;
  }
}
</style>
