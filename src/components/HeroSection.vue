<template>
  <section
    id="home"
    class="z-1 relative bg-gradient-to-r from-zinc-950 to-gray-900 text-white h-screen flex flex-col items-center justify-center px-6"
  >
    <!-- <nav
      class="z-10 absolute top-0 w-full flex justify-between items-center py-5 px-10 bg-transparent bg-opacity-50"
    >
      <h1 class="text-xl font-bold">BeeDeGo</h1>
      <ul class="flex space-x-8">
        <li><a href="#" class="hover:text-gray-400">Home</a></li>
        <li><a href="#about" class="hover:text-gray-400">About</a></li>
        <li><a href="#service" class="hover:text-gray-400">Services</a></li>
        <li><a href="#" class="hover:text-gray-400">Showcase</a></li>
        <li><a href="#" class="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav> -->

    <!-- Hero Content -->
    <div
      class="absolute top-[13%] left-[15%] md:top-[20%] md:left-[25%] sm:top-[30%] sm:left-[5%] z-0"
      data-aos="fade-right"
      data-aos-duration="3000"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 200 200"
        width="80"
        height="80"
        class="animate-spin coolshapes star-9"
      >
        <g clip-path="url(#cs_clip_1_star-9)">
          <mask
            id="cs_mask_1_star-9"
            style="mask-type: alpha"
            width="200"
            height="200"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              d="M199.686.315C144.773 55.57 144.877 144.877 200 200c-55.123-55.123-144.432-55.229-199.686-.315C55.227 144.432 55.123 55.123 0 0c55.123 55.123 144.432 55.23 199.686.315z"
            ></path>
          </mask>
          <g mask="url(#cs_mask_1_star-9)">
            <path fill="#fff" d="M200 0H0v200h200V0z"></path>
            <path
              fill="url(#paint0_linear_${shapeId})"
              d="M200 0H0v200h200V0z"
            ></path>
            <g filter="url(#filter0_f_748_star-9)">
              <ellipse
                cx="143.777"
                cy="159.535"
                fill="#FF58E4"
                rx="91.994"
                ry="58.126"
                transform="rotate(-33.875 143.777 159.535)"
              ></ellipse>
              <ellipse
                cx="64.482"
                cy="49.587"
                fill="#00F0FF"
                rx="69.531"
                ry="47.75"
                transform="rotate(-26.262 64.482 49.587)"
              ></ellipse>
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_748_star-9"
            width="388.137"
            height="393.095"
            x="-81.372"
            y="-83.144"
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_748_star-9"
              stdDeviation="40"
            ></feGaussianBlur>
          </filter>
          <linearGradient
            id="paint0_linear_star-9"
            x1="158.5"
            x2="29"
            y1="12.5"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0E6FFF"></stop>
            <stop offset="1" stop-color="#00F0FF"></stop>
          </linearGradient>
          <clipPath id="cs_clip_1_star-9">
            <path fill="#fff" d="M0 0H200V200H0z"></path>
          </clipPath>
        </defs>
        <g style="mix-blend-mode: overlay" mask="url(#cs_mask_1_star-9)">
          <path
            fill="gray"
            stroke="transparent"
            d="M200 0H0v200h200V0z"
            filter="url(#cs_noise_1_star-9)"
          ></path>
        </g>
        <defs>
          <filter
            id="cs_noise_1_star-9"
            width="100%"
            height="100%"
            x="0%"
            y="0%"
            filterUnits="objectBoundingBox"
          >
            <feTurbulence
              baseFrequency="0.6"
              numOctaves="5"
              result="out1"
              seed="4"
            ></feTurbulence>
            <feComposite
              in="out1"
              in2="SourceGraphic"
              operator="in"
              result="out2"
            ></feComposite>
            <feBlend
              in="SourceGraphic"
              in2="out2"
              mode="overlay"
              result="out3"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
    <div class="relative z-10 text-center">
      <h2
        class="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
        data-aos="zoom-in-down"
      >
        <span class="text-white">TRANSFORM YOUR</span>
        <span class="text-white"> IDEA</span>
        <br />
        <span class="text-white">INTO </span>
        <span class="text-gray-300">STUNNING </span>
        <span class="text-gray-30" id="typed"></span>
      </h2>
      <p class="text-gray-400 text-lg mt-4" data-aos="zoom-out">
        "From Concept to Creation - We Design Your Success"
      </p>

      <button
        data-aos="zoom-in"
        class="mt-6 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl text-white text-lg font-semibold shadow-lg"
      >
        Explore
      </button>
    </div>
    <!-- Icons -->
    <div class="mt-12 flex space-x-12">
      <SoftwareCard
        data-aos="fade-right"
        iconSrc="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
        iconAlt="Photoshop Icon"
      />
      <SoftwareCard
        data-aos="fade-up"
        iconSrc="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
        iconAlt="Figma Icon"
      />
      <SoftwareCard
        iconSrc="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
        iconAlt="Adobe Illustrator"
        data-aos="fade-left"
      />
    </div>
    <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div
      class="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
      style="
        background-image: linear-gradient(
          to right top,
          rgba(79, 70, 229, 0.2) 0%,
          transparent 50%,
          transparent 100%
        );
        border-color: rgba(92, 79, 240, 0.2);
      "
    ></div>
    <div
      class="absolute bottom-0 right-0 z-0 h-1/3 w-full"
      style="
        background-image: linear-gradient(
          to left top,
          rgba(220, 38, 38, 0.2) 0%,
          transparent 50%,
          transparent 100%
        );
        border-color: rgba(92, 79, 240, 0.2);
      "
    ></div>
  </section>
</template>

<script setup>
import SoftwareCard from "./card/SoftwareCard.vue";
import Typed from "typed.js";
import { onMounted } from "vue";

onMounted(() => {
  const options = {
    strings: [" IDEA", " INOVATION", " CREATIVITY"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
  };

  new Typed("#typed", options);
});
</script>

<style scoped></style>
