<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import ActionCard from "@/components/shared/ActionCard.vue";
import Button from "@/components/shared/Button.vue";
import { barrierFree } from "./data";
</script>

<template>
  <section aria-labelledby="barrier-free-title" class="barrier-free">
    <div class="container">
      <SectionHeader
        :title="barrierFree.title"
        :description="barrierFree.description"
        heading-id="barrier-free-title"
        theme="light"
      ></SectionHeader>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-5 mt-10 sm:mt-14 xl:mt-42 mb-20 sm:mb-29 xl:mb-46"
      >
        <div v-for="item in barrierFree.items" :key="item.id">
          <ActionCard
            :title="item.title"
            :description="item.description"
            :icon="item.icon"
          >
            <Button
              v-for="button in item.buttons"
              :key="button.label"
              :href="button.href"
              :variant="button.variant"
              color="white"
            >
              {{ button.label }}
            </Button>
          </ActionCard>
        </div>
      </div>
    </div>
  </section>
</template>
