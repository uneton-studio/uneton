<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import { mission } from "./data";
</script>

<template>
  <section
    aria-labelledby="mission-title"
    class="mission bg-light-soft pb-20 sm:pb-30 xl:pb-52"
  >
    <div class="container">
      <SectionHeader
        :title="mission.title"
        heading-id="mission-title"
        theme="dark"
      ></SectionHeader>
      <p
        v-html="mission.body"
        class="text-dark font-heading font-light text-base leading-6 mt-4 sm:text-xl sm:leading-8 sm:mt-17.5 sm:max-w-145 xl:text-[2.625rem] xl:leading-17 xl:mt-30 xl:max-w-296"
      ></p>
    </div>
  </section>
</template>
