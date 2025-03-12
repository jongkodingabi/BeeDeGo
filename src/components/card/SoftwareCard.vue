<template>
  <div
    class="z-10 bg-gray-700 rounded-2xl shadow-lg flex flex-col items-center justify-center hover:scale-110 transition-all shadow-gray-900 hover:shadow-xl hover:shadow-gray-800"
  >
    <!-- Icon Software -->
    <img :src="iconSrc" :alt="iconAlt" class="w-16 h-16n p-1 px-3" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  iconSrc: {
    type: String,
    required: true,
  },
  iconAlt: {
    type: String,
    default: "Software Icon",
  },
});
</script>
<style scoped></style>
