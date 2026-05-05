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
        class="grid grid-cols-1 md:grid-cols-2 items-stretch mt-[7.5rem] pb-[14rem]"
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
            :class="index !== questions.items.length - 1 ? 'mb-[1rem]' : ''"
          >
            <p
              class="text-[0.875rem] leading-6 md:text-[1rem] md:leading-6 px-4 pb-4"
            >
              {{ item.description }}
            </p>
          </AccordionItem>
        </div>
      </div>
    </div>
  </section>
</template>
