<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import ImageWithText from "@/components/shared/ImageWithText.vue";
import { principles } from "./data";
import Slider from "@/components/shared/Slider.vue";
</script>

<template>
  <section aria-labelledby="principles-title" class="principles bg-light">
    <div class="container">
      <SectionHeader
        :title="principles.title"
        heading-id="principles-title"
        theme="dark"
      ></SectionHeader>

      <div class="mt-10 sm:mt-10.5 xl:mt-30 pb-20 sm:pb-23 xl:pb-50">
        <Slider aria-label="Prinzipien Slider">
          <div
            v-for="principle in principles.items"
            :key="principle.id"
            class="slider-slide"
          >
            <ImageWithText
              :title="principle.title"
              :description="principle.description"
              :image="principle.image"
              :imageAlt="principle.imageAlt"
              :image-position="principle.imagePosition"
            />
          </div>
        </Slider>
      </div>
    </div>
  </section>
</template>
