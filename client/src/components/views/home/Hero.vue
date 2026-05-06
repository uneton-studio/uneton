<script setup lang="ts">
import Button from "@/components/shared/Button.vue";
import { hero } from "./data";
</script>

<template>
  <section
    aria-labelledby="hero-title"
    class="relative min-h-[70vh] overflow-hidden"
  >
    <div class="container flex min-h-[70vh] items-end pb-22">
      <div class="relative z-10 max-w-160">
        <h1
          id="hero-title"
          class="mb-2 md:mb-4 text-[1.75rem] leading-8 font-medium md:text-8xl md:leading-26 md:font-normal"
        >
          {{ hero.title }}
        </h1>

        <p
          class="mb-6 md:mb-8 text-[0.875rem] leading-6 md:text-[1.375rem] md:leading-8"
        >
          {{ hero.description }}
        </p>

        <div class="flex gap-5 max-[430px]:flex-col sm:justify-start">
          <Button
            v-for="button in hero.buttons"
            :key="button.label"
            :variant="button.variant"
            color="white"
            class="flex-1 whitespace-nowrap max-[430px]:w-full sm:flex-none"
          >
            {{ button.label }}
          </Button>
        </div>
      </div>
    </div>

    <img
      src="../../../assets/images/hero-graphic.png"
      alt=""
      class="pointer-events-none absolute right-0 bottom-0 max-h-[85vh] w-auto object-contain hidden md:block"
    />
  </section>
</template>

<style scoped>
/* section {
  margin-bottom: 7.5rem;
} */
</style>
