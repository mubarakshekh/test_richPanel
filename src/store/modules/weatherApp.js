import axios from "axios";
const state = {
  SevenDaysWeather: [],
  CurrentTemp: '',
  dynamicIcon: '',
  pressure: '',
  humidity: '',
  city: '',
  HourLabel: [],
  latitude: '',
  longitude: '',
};
const getters = {
  SevenDaysWeather: (state) => state.SevenDaysWeather,
  CurrentTemp: (state) => state.CurrentTemp,
  dynamicIcon: (state) => state.dynamicIcon,
  pressure: (state) => state.pressure,
  humidity: (state) => state.humidity,
  city: (state) => state.city,
  HourLabel: (state) => state.HourLabel,
  latitude: (state) => state.latitude,
  longitude: (state) => state.longitude,
};
const actions = {
  getTemp: ({ commit }, [latitude, longitude, city]) => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=d5ac011e33629e7ff9c4152049410059&units=metric`)
      .then(response => {
        console.log(response)
        commit('SET_WEEKLY', [
          response.data.daily,
          response.data.current.temp,
          response.data.current.weather[0].icon,
          response.data.current.pressure,
          response.data.current.humidity,
          city,
          response.data.hourly.slice(0, 24),
          latitude,
          longitude,
        ]);
      }
      )
  },
};
const mutations = {
  SET_WEEKLY: (state, [SevenDaysWeather, CurrentTemp, dynamicIcon, pressure, humidity, city, HourLabel, latitude, longitude]) => {
    state.SevenDaysWeather = SevenDaysWeather,
      state.CurrentTemp = CurrentTemp,
      state.dynamicIcon = dynamicIcon,
      state.pressure = pressure,
      state.humidity = humidity,
      state.city = city,
      state.HourLabel = HourLabel,
      state.latitude = latitude,
      state.longitude = longitude
  },
};
export default {
  state,
  getters,
  actions,
  mutations
}