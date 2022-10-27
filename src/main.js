import { createApp } from 'vue'
import App from './App.vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Sidebar from './components/side-bar.vue'
import Dashboard from './components/dash-board.vue'


// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import VueApexCharts from 'vue-apexcharts'
import VueApexCharts from "vue3-apexcharts";



const app=createApp(App);
app.component('apex-chart', VueApexCharts)
app.component('side-bar',Sidebar);
app.component('dash-board',Dashboard);

// // Make BootstrapVue available throughout your project
// app.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// app.use(IconsPlugin)
app.mount('#app')
