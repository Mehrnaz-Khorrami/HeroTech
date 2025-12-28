import { fa } from "vuetify/locale";
import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";

const lightTheme = {
  dark: false,
  colors: {
    darkPink: "#E20054",
  },
};


export default defineVuetifyConfiguration({
  // vuetify options
  locale: {
    locale: "fa",
    messages: { fa },
    rtl: {
      fa: true,
    },
  },
  theme: {
    defaultTheme: "lightTheme",
    themes: {
      lightTheme,
    },
  },
});
