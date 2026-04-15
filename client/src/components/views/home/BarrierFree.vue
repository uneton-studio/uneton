<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import { barrierFree } from "./data/home";
import ActionCard from "@/components/shared/ActionCard.vue";
import Button from "@/components/shared/Button.vue";
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
      <div class="row row-cols-1 row-cols-md-2">
        <div
          class="col"
          v-for="item in barrierFree.barrierFreeItems"
          :key="item.id"
        >
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
              {{ button.label }}</Button
            >
          </ActionCard>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.row {
  margin-top: 10.25rem;
  margin-bottom: 11.5rem;
}
</style>
