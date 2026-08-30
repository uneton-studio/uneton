<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import { closing } from "./data";
import Button from "@/components/shared/Button.vue";
</script>

<template>
  <section
    aria-labelledby="closing-section-title"
    class="mission bg-light pb-20 sm:pb-30 xl:pb-52"
  >
    <div class="container">
      <SectionHeader
        :title="closing.title"
        heading-id="closing-section-title"
        theme="dark"
      ></SectionHeader>
      <p
        v-html="closing.body"
        class="text-dark font-heading font-light text-base leading-6 mt-4 sm:text-xl sm:leading-8 sm:mt-17.5 sm:max-w-145 xl:text-[2.625rem] xl:leading-17 xl:mt-30 xl:max-w-296"
      ></p>
      <div
        class="mt-6 flex gap-5 max-[430px]:flex-col sm:justify-start flex-wrap"
      >
        <Button
          v-for="button in closing.buttons"
          :key="button.label"
          :variant="button.variant"
          :href="button.href"
          tag="a"
          color="dark-mute"
          class="flex-1 whitespace-nowrap max-[430px]:w-full sm:flex-none"
        >
          {{ button.label }}
        </Button>
      </div>
    </div>
  </section>
</template>
