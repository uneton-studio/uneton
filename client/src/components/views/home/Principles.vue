<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import ImageWithText from "@/components/shared/ImageWithText.vue";
import { principles } from "./data";
</script>

<template>
  <section aria-labelledby="principles-title" class="principles">
    <div class="container">
      <SectionHeader
        :title="principles.title"
        heading-id="principles-title"
        theme="dark"
      ></SectionHeader>
      <div class="row">
        <div
          class="col-4"
          v-for="principle in principles.items"
          :key="principle.id"
        >
          <ImageWithText
            :title="principle.title"
            :description="principle.description"
            :image="principle.image"
            :imageAlt="principle.imageAlt"
            :image-position="principle.imagePosition"
          ></ImageWithText>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: var(--color-background-light);
}

.row {
  margin-top: 7.5rem;
  padding-bottom: 11.25rem;
}
</style>
