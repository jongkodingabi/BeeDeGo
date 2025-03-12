import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import PrimeVue from "primevue/config";

const app = createApp(App);

app.use(PrimeVue);
app.mount("#app");

// Inisialisasi AOS
AOS.init({
  // konfigurasi opsional, misalnya:
  duration: 1000, // animasi 1 detik
  once: true, // animasi hanya diputar sekali saat scroll
});
