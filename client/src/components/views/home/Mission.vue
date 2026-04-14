<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import { mission } from "./data/home";
</script>

<template>
  <section aria-labelledby="mission-title" class="mission">
    <div class="container">
      <SectionHeader
        :title="mission.title"
        heading-id="mission-title"
        theme="dark"
      ></SectionHeader>
      <p v-html="mission.body" class="text-dark h3 switzer-light"></p>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: var(--color-background-light-soft);
  padding-bottom: 17.25rem;
}

p {
  margin-top: 7.5rem;
  max-width: 74rem;
}
</style>
