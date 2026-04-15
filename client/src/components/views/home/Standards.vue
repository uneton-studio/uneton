<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import { standards } from "./data";
import IconCard from "@/components/shared/IconCard.vue";
import TextCard from "@/components/shared/TextCard.vue";
</script>

<template>
  <section aria-labelledby="standards-title" class="standards">
    <div class="container">
      <SectionHeader
        :title="standards.title"
        heading-id="standards-title"
        theme="dark"
      />

      <div class="row align-items-stretch">
        <div class="col-3 d-flex">
          <TextCard
            :title="standards.card?.title"
            :description="standards.card?.description"
            :items="standards.card?.items"
            :button="standards.card?.button"
            class="w-100 h-100"
          />
        </div>

        <div class="col-3 d-flex">
          <div class="w-100 h-100">
            <img
              :src="standards.image"
              :alt="standards.imageAlt"
              class="w-100 h-100 d-block rounded-4 object-fit-cover"
            />
          </div>
        </div>

        <div class="col-6 d-flex">
          <div class="row row-cols-1 row-cols-md-2 gx-4 gy-3 w-100">
            <div
              class="col d-flex"
              v-for="item in standards.items"
              :key="item.id"
            >
              <IconCard
                :icon="item.icon"
                :title="item.title"
                :description="item.description"
                :theme="item.theme"
                class="w-100 h-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: var(--color-background-light);
}

.container > .row {
  margin-top: 7.5rem;
  padding-bottom: 13.5rem;
}
</style>
