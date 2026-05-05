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
        class="grid grid-cols-1 md:grid-cols-4 items-stretch mt-[7.5rem] pb-[13.5rem]"
      >
        <div class="flex md:col-span-1">
          <TextCard
            :title="standards.card?.title"
            :description="standards.card?.description"
            :items="standards.card?.items"
            :button="standards.card?.button"
            class="w-full h-full"
          />
        </div>

        <div class="flex md:col-span-1">
          <div class="w-full h-full">
            <img
              :src="standards.image"
              :alt="standards.imageAlt"
              class="w-full h-full block rounded-2xl object-cover"
            />
          </div>
        </div>

        <div class="flex md:col-span-2">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 w-full">
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
