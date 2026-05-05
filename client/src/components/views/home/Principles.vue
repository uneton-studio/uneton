<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import ImageWithText from "@/components/shared/ImageWithText.vue";
import { principles } from "./data";
</script>

<template>
  <section aria-labelledby="principles-title" class="principles bg-light">
    <div class="container">
      <SectionHeader
        :title="principles.title"
        heading-id="principles-title"
        theme="dark"
      ></SectionHeader>

      <div class="grid grid-cols-1 md:grid-cols-3 mt-[7.5rem] pb-[11.25rem]">
        <div v-for="principle in principles.items" :key="principle.id">
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
