import Vue from 'vue'
const filter = [
  Vue.filter('round', function (value) {
    if (!value) return ''
    return Math.round(value)
  }),
  Vue.filter('weeknameshort', function (value) {
    if (!value) return ''
    const shortval = value.substring(0, 3)
    return shortval;
  }),
  Vue.filter('weekday', function (value) {
    if (!value) return ' '
    return (new Date((value) * 1000)).toLocaleString('en-us', { weekday: 'long' })
  }),
  Vue.filter('time', function (value) {
    if (!value) return ''
    const hour = (new Date((value) * 1000).getHours())
    return hour + 1
  }),
  Vue.filter('hour', function (value) {
    if (!value) return ''
    const hour = (new Date((value)).getHours())
    if (hour == 0) {
      return 12
    }
    else if (hour == 12) {
      return hour
    }
    else if (hour < 12) {
      return hour
    }
    else {
      return hour - 12
    }
  }),
  Vue.filter('minute', function (value) {
    if (!value) return ''
    const hour = (new Date((value)).getHours())
    if (hour == 0) {
      return 12
    }
    else if (hour == 12) {
      return hour
    }
    else if (hour < 12) {
      return hour
    }
    else {
      return hour - 12
    }
  }),
]
export default filter;