<script setup lang="ts">
import Button from "@/components/shared/Button.vue";
import { hero } from "./data";
</script>

<template>
  <section aria-labelledby="hero-title" class="min-h-[70vh]">
    <div
      class="container flex justify-between gap-40 min-h-[70vh] items-end pb-22"
    >
      <div class="z-10 max-w-190">
        <h1
          id="hero-title"
          class="mb-2 md:mb-4 text-[1.75rem] leading-8 font-medium xl:text-[5rem] xl:leading-22 md:font-normal"
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
      <img
        src="../../../assets/images/fernsehturm.webp"
        alt="Low-angle view of Berlin's Fernsehturm TV Tower against a pale blue sky, framed by overhead power lines and a dark railing in the foreground."
        class="aspect-816/729 object-cover rounded-3xl hidden"
      />
    </div>
  </section>
</template>
