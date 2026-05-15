<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import { process } from "./data";
import ProcessAnimation from "./animations/ProcessAnimation.vue";
import AccordionItem from "@/components/shared/AccordionItem.vue";
</script>

<template>
  <section aria-labelledby="process-title" class="process">
    <div class="container">
      <SectionHeader
        :title="process.title"
        :description="process.description"
        heading-id="process-title"
        theme="light"
        class="mb-10 md:mb-28 xl:mb-20"
      ></SectionHeader>

      <ProcessAnimation class="mb-36 xl:mb-41 hidden md:block" />

      <div v-if="process.items" class="flex flex-col md:hidden mb-20">
        <AccordionItem
          v-for="(item, index) in process.items"
          :key="item.id"
          :title="item.title"
          :class="index !== process.items.length - 1 ? 'mb-4' : ''"
        >
          <p class="text-base leading-6 italic">
            {{ item.description }}
          </p>
        </AccordionItem>
      </div>
    </div>
  </section>
</template>
