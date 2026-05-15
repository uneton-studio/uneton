<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import { questions } from "./data";
import ActionCard from "@/components/shared/ActionCard.vue";
import Button from "@/components/shared/Button.vue";
import AccordionItem from "@/components/shared/AccordionItem.vue";
</script>

<template>
  <section aria-labelledby="questions-title" class="standards">
    <div class="container">
      <SectionHeader
        :title="questions.title"
        heading-id="questions-title"
        theme="light"
      ></SectionHeader>

      <div
        class="grid grid-cols-1 xl:grid-cols-2 gap-5 items-stretch mt-9 xl:mt-30 pb-15 sm:pb-37 xl:pb-56"
      >
        <div v-if="questions.card" class="flex">
          <ActionCard
            :title="questions.card.title"
            :description="questions.card.description"
            :icon="questions.card.icon"
            class="w-full"
          >
            <Button :variant="questions.card.button.variant" color="white">
              {{ questions.card.button.label }}
            </Button>
          </ActionCard>
        </div>

        <div v-if="questions.items" class="flex flex-col">
          <AccordionItem
            v-for="(item, index) in questions.items"
            :key="item.id"
            :title="item.title"
            :class="index !== questions.items.length - 1 ? 'mb-4' : ''"
          >
            <p class="text-base leading-6 xl:text-xl xl:leading-7.5 italic">
              {{ item.description }}
            </p>
          </AccordionItem>
        </div>
      </div>
    </div>
  </section>
</template>
