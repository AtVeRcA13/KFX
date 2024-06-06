// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url"
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  imports: {
    autoImport: false
  },
  alias: {
    components: fileURLToPath(new URL('./components/', import.meta.url)),
    sections: fileURLToPath(
      new URL('./components/sections/', import.meta.url)
    ),
    common: fileURLToPath(new URL('./components/common', import.meta.url)),
    core: fileURLToPath(new URL('./components/core', import.meta.url)),
    popups: fileURLToPath(new URL('./components/popups', import.meta.url)),
    ui: fileURLToPath(new URL('./components/ui', import.meta.url)),
    icons: fileURLToPath(new URL('./components/icons', import.meta.url)),
    store: fileURLToPath(new URL('./store/', import.meta.url)),
    types: fileURLToPath(new URL('./types/', import.meta.url)),
    assets: fileURLToPath(new URL('./assets/', import.meta.url)),
    images: fileURLToPath(new URL('./assets/images/', import.meta.url))
  },
})
