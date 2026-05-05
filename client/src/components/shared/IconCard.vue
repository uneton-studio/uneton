<script setup lang="ts">
import type { ThemeMode } from "@/app.constants";
import { computed, type Component } from "vue";

interface Props {
  icon?: Component;
  title: string;
  description?: string;
  theme?: ThemeMode;
}

const props = withDefaults(defineProps<Props>(), {
  icon: undefined,
  description: "",
  theme: "light",
});

const themeClass = computed(() =>
  props.theme === "dark" ? "bg-dark-mute" : "bg-light-soft",
);

const textClass = computed(() =>
  props.theme === "dark" ? "text-light" : "text-dark",
);
</script>

<template>
  <article class="icon-card rounded-2xl p-5" :class="themeClass">
    <div v-if="icon" class="mb-[1.5rem]">
      <component
        :is="icon"
        class="block w-[3.125rem] h-[3.125rem]"
        aria-hidden="true"
      />
    </div>

    <p
      class="text-base md:text-[1.25rem] leading-6 font-medium mb-[0.5rem]"
      :class="textClass"
    >
      {{ title }}
    </p>

    <p
      v-if="description"
      class="text-[0.875rem] leading-6 md:text-[1rem] md:leading-6"
      :class="textClass"
    >
      {{ description }}
    </p>
  </article>
</template>
