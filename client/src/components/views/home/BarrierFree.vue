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

      <div class="grid grid-cols-1 md:grid-cols-2 mt-[10.25rem] mb-[11.5rem]">
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
