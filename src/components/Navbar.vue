<template>
  <header
    ref="header"
    class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 transition-all duration-300"
  >
    <div class="container">
      <div class="flex items-center justify-between relative">
        <div class="px-4">
          <a
            href="#home"
            class="z-[9999] font-bold text-lg text-primary py-6 bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent"
          >
            <img
              src="/public/image.png"
              alt="myLogo"
              class="w-30 h-full ml-4 sm:mt-3"
            />
          </a>
        </div>
        <div class="flex items-center px-4">
          <!-- Tombol Hamburger -->
          <button
            ref="hamburger"
            @click="toggleMenu"
            class="lg:hidden flex flex-col justify-center items-center space-y-1 w-10 h-10"
          >
            <span
              class="w-6 h-0.5 bg-linear-to-tl from-pink-500 to-violet-500 transition-all duration-300"
              :class="{ 'rotate-45 translate-y-2': isMenuOpen }"
            ></span>
            <span
              class="w-6 h-0.5 bg-gradient-to-tl from-pink-500 to-violet-500 transition-all duration-300"
              :class="{ 'opacity-0': isMenuOpen }"
            ></span>
            <span
              class="w-6 h-0.5 bg-gradient-to-tl from-pink-500 to-violet-500 transition-all duration-300"
              :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"
            ></span>
          </button>

          <nav
            ref="navMenu"
            class="z-[9999] absolute py-5 bg-gray-950 shadow-lg rounded-lg w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:shadow-none lg:rounded-none"
            :class="{ hidden: !isMenuOpen }"
          >
            <ul
              class="flex flex-col items-center lg:flex-row lg:space-x-4 lg:items-center lg:justify-end"
            >
              <li v-for="(menu, index) in menuItems" :key="index">
                <a
                  :href="menu.link"
                  class="block py-2 px-4 text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-gray-500 dark:hover:text-primary"
                >
                  {{ menu.name }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <!-- Tombol Kembali ke Atas -->
  <button
    ref="toTop"
    id="to-top"
    class="animate-bounce z-50 hidden fixed bottom-4 right-4 bg-linear-to-tl from-pink-500 to-violet-500 text-white p-4 rounded-full shadow-lg transition-all duration-300"
  >
    <a href="#home"> ↑ </a>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const hamburger = ref(null);
const navMenu = ref(null);
const header = ref(null);
const toTop = ref(null);

// Toggle menu saat hamburger diklik
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Menutup menu jika klik di luar hamburger & navMenu
const handleClickOutside = (event) => {
  if (
    isMenuOpen.value &&
    hamburger.value &&
    navMenu.value &&
    !hamburger.value.contains(event.target) &&
    !navMenu.value.contains(event.target)
  ) {
    isMenuOpen.value = false;
  }
};

// Tambahkan event listener saat mounted
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

// Hapus event listener saat unmounted
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

// Data menu
const menuItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Showcase", link: "#showcase" },
  { name: "Testimoni", link: "#testimoni" },
  { name: "Contact", link: "#contact" },
];

// Scroll ke atas
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Mengatur tampilan header saat scroll
const handleScroll = () => {
  if (window.scrollY > 100) {
    header.value.classList.add("fixed", "bg-zinc-950", "shadow-md");
    header.value.classList.remove("bg-transparent");

    if (toTop.value) {
      toTop.value.classList.remove("hidden");
      toTop.value.classList.add("block");
    }
  } else {
    header.value.classList.remove("fixed", "bg-zinc-950", "shadow-md");
    header.value.classList.add("bg-transparent");

    if (toTop.value) {
      toTop.value.classList.remove("block");
      toTop.value.classList.add("hidden");
    }
  }
};

// Pasang event listener untuk scroll
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
