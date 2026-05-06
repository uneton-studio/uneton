<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import { mission } from "./data";
</script>

<template>
  <section
    aria-labelledby="mission-title"
    class="mission bg-light-soft pb-20 md:pb-52"
  >
    <div class="container">
      <SectionHeader
        :title="mission.title"
        heading-id="mission-title"
        theme="dark"
      ></SectionHeader>
      <p
        v-html="mission.body"
        class="text-dark font-heading font-light text-base md:text-5xl leading-6 md:leading-17 mt-4 md:mt-30 max-w-296"
      ></p>
    </div>
  </section>
</template>
