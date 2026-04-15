<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import { standards } from "./data/home";
</script>

<template>
  <section aria-labelledby="standards-title" class="standards">
    <div class="container">
      <SectionHeader
        :title="standards.title"
        heading-id="standards-title"
        theme="dark"
      ></SectionHeader>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: var(--color-background-light);
}
</style>
