<script setup lang="ts">
import type { ThemeMode } from "@/app.constants";
import { computed, type Component } from "vue";

interface Props {
  title: string;
  items: string[];
  description: string;
  icon: Component;
  theme?: ThemeMode;
}

const props = withDefaults(defineProps<Props>(), {
  theme: "dark",
});

const textClass = computed(() =>
  props.theme === "light" ? "text-light" : "text-dark",
);
</script>

<template>
  <article class="info-with-graphic pt-15">
    <div>
      <div class="flex items-center justify-center">
        <component :is="icon" />
      </div>

      <div>
        <h3 class="text-xl leading-6.5 mt-8 mb-2" :class="textClass">
          {{ title }}
        </h3>
      </div>

      <div>
        <p class="text-sm leading-5.5 mb-6" :class="textClass">
          {{ description }}
        </p>
      </div>

      <div>
        <ul>
          <li
            v-for="item in items"
            :key="item"
            class="text-sm leading-4.5 py-3.5 first:border-t first:border-[#D9D9D9] border-b border-[#D9D9D9]"
            :class="textClass"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>
