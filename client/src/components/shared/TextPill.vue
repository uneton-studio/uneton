<script setup lang="ts">
import type { ThemeMode } from "@/app.constants";
import { computed } from "vue";

interface Props {
  label: string;
  prefix?: string;
  theme?: ThemeMode;
  as?: "span" | "div" | "p";
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  prefix: "",
  theme: "dark",
  as: "span",
});

const textClass = computed(() =>
  props.theme === "dark" ? "text-light" : "text-dark",
);

const themeClass = computed(() =>
  props.theme === "dark" ? "bg-dark" : "bg-light",
);
</script>

<template>
  <component
    :is="as"
    class="text-pill text-base md:text-[1.25rem] leading-6 inline-flex items-center rounded-full px-4 py-2"
    :class="themeClass"
  >
    <span :class="textClass" class="mr-[0.25rem]">{{ prefix }}</span>
    <span :class="textClass">{{ label }}</span>
  </component>
</template>
