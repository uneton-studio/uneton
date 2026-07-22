<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { hero } from "../data/index.ts";
import HeroContent from "./HeroContent.vue";
import HeroAnimation from "./HeroAnimation.vue";
import heroVideo from "@/assets/videos/hero_video.mp4";
import HeroIcons from "./HeroIcons.vue";

const videoWrapper = ref<HTMLElement | null>(null);
const isVideoExpanded = ref(false);

const handleScroll = () => {
  if (!videoWrapper.value) return;

  const rect = videoWrapper.value.getBoundingClientRect();

  isVideoExpanded.value = rect.top <= window.innerHeight * 0.5;
};

onMounted(() => {
  handleScroll();

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  window.addEventListener("resize", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleScroll);
});
</script>

<template>
  <section
    aria-labelledby="hero-title"
    class="relative block overflow-hidden min-h-auto xl:min-h-[70vh] pt-25 md:pt-35 xl:pt-55"
  >
    <div
      class="hidden md:block pointer-events-none absolute -top-120 -right-95 h-225 w-225 xl:h-300 xl:w-300 xl:-top-125 xl:-right-125 animate-[spin_90s_linear_infinite] z-0"
      aria-hidden="true"
    >
      <svg viewBox="0 0 1000 1000" class="h-full w-full" fill="none">
        <circle
          cx="500"
          cy="500"
          r="440"
          stroke="white"
          stroke-width="2"
          stroke-dasharray="14 18"
          opacity="0.9"
        />
      </svg>
    </div>
    <div
      class="container hidden min-h-auto xl:min-h-[70vh] md:flex justify-between items-end pb-36 gap-15"
    >
      <div class="flex flex-col self-stretch justify-between shrink-0">
        <HeroContent />
        <div class="hidden xl:flex">
          <HeroIcons :items="hero.items" />
        </div>
      </div>

      <div
        class="flex-1 min-w-0 md:max-w-110 xl:max-w-121 overflow-hidden rounded-2xl xl:rounded-3xl z-1"
      >
        <video
          :src="heroVideo"
          autoplay
          muted
          loop
          playsinline
          class="block w-full rounded-2xl xl:rounded-3xl"
        />
      </div>
    </div>
    <div class="container hidden md:block xl:hidden pb-8">
      <HeroIcons :items="hero.items" gap="gap-6" />
    </div>

    <div class="container md:hidden flex flex-col items-center justify-center">
      <HeroAnimation class="max-w-80" />
      <HeroContent class="mt-11 mb-16" />
    </div>
    <div class="container bg-light md:hidden py-12.5">
      <HeroIcons :items="hero.items" gap="gap-6" theme="dark" />
    </div>
    <div class="bg-light">
      <div
        ref="videoWrapper"
        :class="[
          'md:hidden overflow-hidden transition-all duration-700 ease-out',
          isVideoExpanded ? 'mx-0 rounded-none' : 'mx-10 rounded-2xl',
        ]"
      >
        <video
          :src="heroVideo"
          autoplay
          muted
          loop
          playsinline
          class="block h-auto w-full"
        />
      </div>
    </div>
  </section>
</template>
