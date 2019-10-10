import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#C2185B',
        secondary: '#3366ff',
        tertiary: '#C2185B',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  }
});
