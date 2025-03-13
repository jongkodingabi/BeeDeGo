<script setup>
import About from "./components/About.vue";
import HeroSection from "./components/HeroSection.vue";
import Service from "./components/Service.vue";
import Navbar from "./components/Navbar.vue";
import Showcase from "./components/Showcase.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Testimoni from "./components/Testimoni.vue";
</script>

<template>
  <Navbar />
  <HeroSection />
  <About />
  <Service />
  <Showcase />
  <Testimoni />
  <Contact />
  <Footer></Footer>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
