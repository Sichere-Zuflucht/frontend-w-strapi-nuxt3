// plugins/vuetify.js
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const light: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#f9a825',
    accent: '#880E4F',
    secondary: '#F9A825', // amber.darken3,
    info: '#26A69A',
    warning: '#FFC107',
    error: '#DD2C00',
    success: '#00897B',
  },
}

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#E1BEE7',
    accent: '#424242',
    secondary: '#FF8F00',
    info: '#26A69A',
    warning: '#FFC107',
    error: '#DD2C00',
    success: '#00897B',
  },
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light,
        dark,
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})