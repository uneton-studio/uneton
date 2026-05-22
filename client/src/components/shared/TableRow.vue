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
    <div class="grid grid-cols-12 items-start gap-5">
      <div class="col-span-2">
        <component :is="icon" />
      </div>

      <div class="col-span-3">
        <h3 class="text-5xl leading-12" :class="textClass">
          {{ title }}
        </h3>
      </div>

      <div class="col-span-3">
        <ul>
          <li
            v-for="item in items"
            :key="item"
            class="text-sm leading-7.5"
            :class="textClass"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="col-span-4">
        <p class="text-sm leading-6" :class="textClass">
          {{ description }}
        </p>
      </div>
    </div>
  </article>
</template>
