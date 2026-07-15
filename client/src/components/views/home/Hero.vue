<script setup lang="ts">
import { hero } from "./data";
import HeroContent from "./HeroContent.vue";
import HeroAnimation from "./animations/HeroAnimation.vue";
</script>

<template>
  <section
    aria-labelledby="hero-title"
    class="min-h-screen flex flex-column items-center md:block md:min-h-auto xl:min-h-[70vh]"
  >
    <div
      class="container hidden min-h-screen md:min-h-auto xl:min-h-[70vh] items-end gap-20 2xl:gap-40 pb-22 xl:flex"
    >
      <div class="min-w-0 flex-1">
        <HeroContent />
      </div>

      <div class="relative shrink-0">
        <img
          src="../../../assets/images/fernsehturm.webp"
          alt="..."
          class="aspect-75/67 h-auto rounded-3xl object-cover xl:w-2xl 2xl:w-auto 2xl:max-w-204"
        />

        <div class="absolute right-5 bottom-3"></div>
      </div>
    </div>

    <div class="block md:items-center md:justify-center md:flex xl:hidden">
      <div class="hidden items-center justify-center md:hidden">
        <HeroAnimation />
      </div>
      <div class="md:w-1/2 container md:pt-20">
        <HeroContent class="mt-14 md:mt-0" />
      </div>

      <div class="w-1/2 hidden md:block">
        <img
          src="../../../assets/images/fernsehturm.webp"
          alt="Low-angle view of Berlin's Fernsehturm TV Tower against a pale blue sky, framed by overhead power lines and a dark railing in the foreground."
          class="object-cover"
        />
      </div>
    </div>
  </section>
</template>
