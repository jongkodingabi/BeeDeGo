<template>
  <section class="bg-black py-8 lg:py-24 px-2" id="testimoni">
    <h1
      class="text-white text-center mt-10 text-4xl sm:text-6xl font-bold py-10 lg:py-20 mb-4"
      data-aos="zoom-in"
    >
      <span
        class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500"
        ><span class="relative text-white">Our</span></span
      >
      Testimonials
    </h1>
    <div class="relative w-full max-w-2xl mx-auto">
      <swiper
        :modules="[Autoplay, Pagination]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        class="swiper-container"
      >
        <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
          <div
            class="p-6 sm:mx-auto bg-black border border-violet-500 rounded-lg shadow-md shadow-pink-500 text-center"
          >
            <img
              class="rounded-full h-16 w-16 object-cover mx-auto mb-4"
              :src="testimonial.image"
              alt="avatar"
            />
            <p class="text-lg text-gray-400">{{ testimonial.text }}</p>
            <h3 class="mt-4 font-semibold text-gray-700">
              {{ testimonial.name }}
            </h3>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const testimonials = [
      {
        name: "Abisam Hazim",
        text: "Luar biasa! Desain yang dibuat sangat profesional dan sesuai dengan keinginan saya. Timnya juga responsif dan mudah diajak diskusi. Hasil akhirnya melebihi ekspektasi saya!",
        image: "/myPhoto.jpg",
      },
      {
        name: "Abisam Hazim",
        text: "'Sangat puas dengan jasa desain ini! Detailnya rapi, kreatif, dan sesuai dengan konsep yang saya inginkan. Pelayanan cepat dan hasilnya berkualitas tinggi. Highly recommended!''",
        image: "/myPhoto.jpg",
      },
      {
        name: "Abisam Hazim",
        text: "Jasa desain terbaik yang pernah saya gunakan! Tidak hanya hasilnya yang memukau, tetapi juga proses pengerjaannya cepat dan komunikasinya sangat baik. Pasti akan order lagi",
        image: "/myPhoto.jpg",
      },
    ];
    return { testimonials, Autoplay, Pagination };
  },
};
</script>

<style>
.swiper-container {
  width: 100%;
  padding-bottom: 20px;
}
.swiper-pagination-bullet-active {
  background: #4a5568 !important;
}
</style>
