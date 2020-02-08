import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#b55233',
        secondary: '#FF8661',
        accent: '#f2f3f5',
        error: '#b71c1c',
      },
    },
  },
  icons: {
    iconfont: 'fa'
  }
});
