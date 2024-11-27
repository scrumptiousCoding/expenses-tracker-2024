/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import persistedState from 'pinia-plugin-persistedstate'
import VueApexCharts from "vue3-apexcharts";
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

const pinia = createPinia()
pinia.use(persistedState)

const app = createApp(App).use(router).use(pinia)
app.use(VueApexCharts);
registerPlugins(app)

app.mount('#app')
