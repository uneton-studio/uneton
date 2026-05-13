<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import { standards } from "./data";
import IconCard from "@/components/shared/IconCard.vue";
import TextCard from "@/components/shared/TextCard.vue";
</script>

<template>
  <section aria-labelledby="standards-title" class="standards bg-light">
    <div class="container">
      <SectionHeader
        :title="standards.title"
        heading-id="standards-title"
        theme="dark"
      />

      <div
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-5 mt-10 sm:mt-16 xl:mt-30 pb-20 sm:pb-28 xl:pb-54"
      >
        <div class="flex md:col-span-1">
          <TextCard
            :title="standards.card?.title"
            :description="standards.card?.description"
            :items="standards.card?.items"
            :button="standards.card?.button"
          />
        </div>

        <div class="flex md:col-span-1">
          <div>
            <img
              :src="standards.image"
              :alt="standards.imageAlt"
              class="block rounded-3xl object-cover xl:h-full"
            />
          </div>
        </div>

        <div class="flex sm:col-span-2">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 xl:gap-x-5 xl:gap-y-4 w-full"
          >
            <div class="flex" v-for="item in standards.items" :key="item.id">
              <IconCard
                :icon="item.icon"
                :title="item.title"
                :description="item.description"
                :theme="item.theme"
                class="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
