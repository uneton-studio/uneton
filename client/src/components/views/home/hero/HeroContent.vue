<script setup lang="ts">
import Button from "@/components/shared/Button.vue";
import { hero } from "../data/index.ts";
</script>

<template>
  <div class="max-w-100 xl:max-w-190">
    <h1
      id="hero-title"
      class="mb-2 text-[2rem] leading-8.5 font-medium md:mb-4 xl:mb-6 sm:text-[2.625rem] sm:leading-12 xl:text-[5rem] xl:leading-21.5 xl:font-normal text-white"
    >
      {{ hero.title }}
      <span class="font-light italic">{{ hero.subtitle }}</span>
    </h1>

    <p
      class="mb-6 text-sm leading-6 md:mb-8 xl:mb-10 xl:text-lg xl:leading-7.5"
    >
      {{ hero.description }}
    </p>

    <div class="flex gap-5 max-[430px]:flex-col sm:justify-start flex-wrap">
      <Button
        v-for="button in hero.buttons"
        :key="button.label"
        :variant="button.variant"
        :href="button.href"
        tag="a"
        color="white"
        class="flex-1 whitespace-nowrap max-[430px]:w-full sm:flex-none"
      >
        {{ button.label }}
      </Button>
    </div>
  </div>
</template>
