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
  <article
    class="icon-card rounded-3xl xl:rounded-4xl px-6 py-6 sm:px-7 xl:px-9.5 xl:py-7"
    :class="themeClass"
  >
    <div v-if="icon" class="mb-5 xl:mb-6">
      <component
        :is="icon"
        class="block w-10 h-10 xl:w-12.5 xl:h-12.5"
        aria-hidden="true"
      />
    </div>

    <p
      class="text-base leading-4.5 xl:text-xl xl:leading-6 mb-1.5 xl:mb-2 font-medium"
      :class="textClass"
    >
      {{ title }}
    </p>

    <p
      v-if="description"
      class="text-xs leading-4 xl:text-sm xl:leading-6"
      :class="textClass"
    >
      {{ description }}
    </p>
  </article>
</template>
