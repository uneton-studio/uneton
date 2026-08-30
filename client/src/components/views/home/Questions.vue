<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import { questions } from "./data";
import ActionCard from "@/components/shared/ActionCard.vue";
import Button from "@/components/shared/Button.vue";
import AccordionItem from "@/components/shared/AccordionItem.vue";
import { ref } from "vue";

const openItemId = ref<string | number | null>(null);
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
        class="grid grid-cols-1 xl:grid-cols-2 gap-5 items-stretch xl:mt-30 pb-15 sm:pb-37 xl:pb-56"
      >
        <div v-if="questions.card" class="hidden xl:flex">
          <ActionCard
            :title="questions.card.title"
            :description="questions.card.description"
            :icon="questions.card.icon"
            class="w-full"
          >
            <Button
              v-for="button in questions.card.buttons"
              :key="button.label"
              :variant="button.variant"
              :href="button.href"
              tag="a"
            >
              {{ button.label }}
            </Button>
          </ActionCard>
        </div>

        <div v-if="questions.card" class="block xl:hidden">
          <p class="mt-2 max-w-100 text-sm leading-5.5 sm:mt-4 mb-6">
            {{ questions.card.description }}
          </p>
          <div class="flex gap-4 flex-wrap">
            <Button
              v-for="button in questions.card.buttons"
              :key="button.label"
              :variant="button.variant"
              :href="button.href"
              tag="a"
            >
              {{ button.label }}
            </Button>
          </div>
        </div>

        <div v-if="questions.items" class="flex flex-col mt-5 sm:mt-8 xl:mt-0">
          <AccordionItem
            v-for="(item, index) in questions.items"
            :key="item.id"
            :title="item.title"
            :is-open="openItemId === item.id"
            :class="index !== questions.items.length - 1 ? 'mb-4' : ''"
            @toggle="openItemId = openItemId === item.id ? null : item.id"
          >
            <p
              class="text-sm leading-5 sm:text-base sm:leading-6 xl:text-lg xl:leading-7 italic"
            >
              {{ item.description }}
            </p>
          </AccordionItem>
        </div>
      </div>
    </div>
  </section>
</template>
