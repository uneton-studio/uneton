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
      <div class="row align-items-stretch">
        <div class="col-12 col-md-6 d-flex" v-if="questions.card">
          <ActionCard
            :title="questions.card.title"
            :description="questions.card.description"
            :icon="questions.card.icon"
            class="w-100"
          >
            <Button :variant="questions.card.button.variant" color="white">{{
              questions.card.button.label
            }}</Button>
          </ActionCard>
        </div>
        <div class="col-12 col-md-6 d-flex flex-column" v-if="questions.items">
          <AccordionItem
            v-for="(item, index) in questions.items"
            :key="item.id"
            :title="item.title"
            :class="index !== questions.items.length - 1 ? 'mb-3' : ''"
          >
            <p class="text--medium px-4 pb-4">{{ item.description }}</p>
          </AccordionItem>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container > .row {
  margin-top: 7.5rem;
  padding-bottom: 14rem;
}
</style>
