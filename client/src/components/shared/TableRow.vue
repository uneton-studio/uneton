<script setup lang="ts">
import type { ThemeMode } from "@/app.constants";
import { computed, type Component } from "vue";

interface Props {
  title: string;
  items: string[];
  description: string;
  icon: Component;
  withBottomBorder?: boolean;
  theme?: ThemeMode;
}

const props = withDefaults(defineProps<Props>(), {
  withBottomBorder: false,
  theme: "dark",
});

const textClass = computed(() =>
  props.theme === "light" ? "text-light" : "text-dark",
);
</script>

<template>
  <article
    class="service-row py-20"
    :class="{ 'border-b border-[#BEBEBE]': withBottomBorder }"
  >
    <div class="grid grid-cols-1 md:grid-cols-12 items-start">
      <div class="md:col-span-2">
        <component :is="icon" />
      </div>

      <div class="md:col-span-3">
        <h3
          class="text-xl leading-6.5 md:text-[3.375rem] md:leading-15"
          :class="textClass"
        >
          {{ title }}
        </h3>
      </div>

      <div class="md:col-span-3">
        <ul class="space-y-2">
          <li
            v-for="item in items"
            :key="item"
            class="text-[0.75rem] leading-4.5 md:text-[1.125rem] md:leading-7"
            :class="textClass"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="md:col-span-4">
        <p
          class="text-[0.75rem] leading-4.5 md:text-[1.125rem] md:leading-7"
          :class="textClass"
        >
          {{ description }}
        </p>
      </div>
    </div>
  </article>
</template>
