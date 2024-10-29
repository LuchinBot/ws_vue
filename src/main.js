import Vue from 'vue'
import App from './App.vue'
import router from './router';


Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap'; // Importa el JS de Bootstrap
// Importa tus archivos CSS
import "@/assets/css/app.css";
import "@/assets/css/index.css";
import "@/assets/css/default.css";
import "@/assets/css/header.css";
import "@/assets/css/footer.css";
import "@/assets/css/floats.css";
import "@/assets/css/responsive.css";

// Páginas específicas
import "@/assets/css/slider.css";
import "@/assets/css/services.css";
import "@/assets/css/institutional.css";
import "@/assets/css/process.css";
import "@/assets/css/events.css";
import "@/assets/css/news.css";
import "@/assets/css/contact.css";
import "@/assets/css/birthday.css";
import "@/assets/css/about.css";
import "@/assets/css/courses.css";
import "@/assets/css/mesa.css";

// Plugins de FontAwesome
import "@/assets/plugins/fontawesome/css/fontawesome.min.css";
import "@/assets/plugins/fontawesome/css/brands.min.css";
import "@/assets/plugins/fontawesome/css/solid.min.css";
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
