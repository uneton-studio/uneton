<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import TableRow from "@/components/shared/TableRow.vue";
import { services } from "./data";
import InfoWithGraphic from "@/components/shared/InfoWithGraphic.vue";
import Slider from "@/components/shared/Slider.vue";
</script>

<template>
  <section
    aria-labelledby="leistungen-title"
    class="services bg-light-soft pb-20 sm:pb-15 xl:pb-20"
  >
    <div class="container">
      <SectionHeader
        :title="services.title"
        heading-id="leistungen-title"
        theme="dark"
        class="xl:mb-10"
      ></SectionHeader>

      <div v-if="services?.items?.length" class="hidden xl:block">
        <TableRow
          v-for="(service, index) in services.items"
          :key="service.id"
          :title="service.title"
          :items="service.items"
          :description="service.description || ''"
          :icon="service.icon"
          :with-bottom-border="index !== services.items.length - 1"
          theme="dark"
        />
      </div>

      <div v-if="services?.items?.length" class="xl:hidden">
        <Slider aria-label="Leistungen slider" button-background="light">
          <div
            v-for="service in services.items"
            :key="service.id"
            class="slider-slide"
          >
            <InfoWithGraphic
              :title="service.title"
              :items="service.items"
              :description="service.description || ''"
              :icon="service.icon"
              theme="dark"
            />
          </div>
        </Slider>
      </div>
    </div>
  </section>
</template>
