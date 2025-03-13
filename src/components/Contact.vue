<template>
  <section id="contact">
    <div class="h-full bg-black py-6 flex flex-col justify-center sm:py-20">
      <div class="flex justify-center items-center mr-2">
        <div class="box mr-4 mb-2">
          <div class="green">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 200 200"
              width="300"
              height="300"
              class="coolshapes flower-3"
            >
              <g clip-path="url(#cs_clip_1_flower-3)">
                <mask
                  id="cs_mask_1_flower-3"
                  style="mask-type: alpha"
                  width="200"
                  height="200"
                  x="0"
                  y="0"
                  maskUnits="userSpaceOnUse"
                >
                  <path
                    fill="#fff"
                    d="M200 50c0-27.614-22.386-50-50-50s-50 22.386-50 50c0-27.614-22.386-50-50-50S0 22.386 0 50s22.386 50 50 50c-27.614 0-50 22.386-50 50s22.386 50 50 50 50-22.386 50-50c0 27.614 22.386 50 50 50s50-22.386 50-50c0-27.608-22.375-49.989-49.98-50C177.625 99.99 200 77.608 200 50z"
                  ></path>
                </mask>
                <g mask="url(#cs_mask_1_flower-3)">
                  <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                  <path
                    fill="url(#paint0_linear_748_4691)"
                    fill-opacity="0.55"
                    d="M200 0H0v200h200V0z"
                  ></path>
                  <g filter="url(#filter0_f_748_4691)">
                    <path fill="#18A0FB" d="M131 3H-12v108h143V3z"></path>
                    <path fill="#FF58E4" d="M190 109H0v116h190V109z"></path>
                    <ellipse
                      cx="153.682"
                      cy="64.587"
                      fill="#FFD749"
                      rx="83"
                      ry="57"
                      transform="rotate(-33.875 153.682 64.587)"
                    ></ellipse>
                  </g>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_748_4691"
                  width="361.583"
                  height="346.593"
                  x="-72"
                  y="-61.593"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_748_4691"
                    stdDeviation="30"
                  ></feGaussianBlur>
                </filter>
                <linearGradient
                  id="paint0_linear_748_4691"
                  x1="200"
                  x2="0"
                  y1="0"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF1F00"></stop>
                  <stop offset="1" stop-color="#FFD600"></stop>
                </linearGradient>
                <clipPath id="cs_clip_1_flower-3">
                  <path fill="#fff" d="M0 0H200V200H0z"></path>
                </clipPath>
              </defs>
              <g
                style="mix-blend-mode: overlay"
                mask="url(#cs_mask_1_flower-3)"
              >
                <path
                  fill="gray"
                  stroke="transparent"
                  d="M200 0H0v200h200V0z"
                  filter="url(#cs_noise_1_flower-3)"
                ></path>
              </g>
              <defs>
                <filter
                  id="cs_noise_1_flower-3"
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
        </div>
        <h1
          class="text-white text-center mt-10 text-4xl sm:text-6xl font-bold mb-20"
        >
          Contact
          <span
            class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500"
            ><span class="relative text-white">Us</span></span
          >
        </h1>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 25"
        widht="100"
        height="100"
        class="animate-bounce m-auto"
      >
        <path
          style="fill: #fff"
          d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z"
        />
      </svg>
      <div
        class="relative py-3 sm:max-w-lg mx-auto group mt-10 px-4 sm:px-0 mb-14"
      >
        <div
          class="group-hover:rotate-3 group-hover:scale-105 hover:border-indigo-500 absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl ease-in-out transition-all duration-300"
        ></div>
        <div
          class="text-white mx-auto relative px-6 py-10 bg-gray-950 shadow-lg sm:rounded-3xl sm:p-12"
        >
          <div class="text-center pb-6">
            <h1 class="text-2xl sm:text-3xl">Contact Us!</h1>
            <p class="text-gray-300 text-sm sm:text-base">
              Fill up the form below to send us a message.
            </p>
          </div>

          <form action="#">
            <input
              class="text-white shadow mb-4 border rounded w-full py-2 px-3 text-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
              name="name"
            />

            <input
              class="text-white shadow mb-4 border rounded w-full py-2 px-3 text-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
            />

            <input
              class="text-white shadow mb-4 border rounded w-full py-2 px-3 text-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Subject"
              name="_subject"
            />

            <textarea
              class="shadow mb-4 border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Type your message here..."
              name="message"
              style="height: 121px"
            ></textarea>

            <div class="flex flex-col sm:flex-row justify-between">
              <input
                class="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto mb-2 sm:mb-0"
                type="submit"
                value="Send"
              />
              <input
                class="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
                type="reset"
              />
            </div>

            <a
              href="https://veilmail.io/e/FkKh7o"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline block mt-4 text-center sm:text-left"
            >
              Or click here to reveal our protected email address
            </a>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Registrasi plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(".green", {
    rotation: 900,
    duration: 1,
    scrollTrigger: {
      trigger: ".box",
      scrub: 2,
      markers: false,
    },
  });
});
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.green {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
