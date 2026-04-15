<template>
  <article class="icon-card rounded-4 p-5" :class="themeClass">
    <div v-if="icon" class="mb-4">
      <component
        :is="icon"
        class="icon-card__icon d-block"
        aria-hidden="true"
      />
    </div>

    <p class="text--large switzer-medium mb-2" :class="textClass">
      {{ title }}
    </p>

    <p v-if="description" class="text--medium mb-0" :class="textClass">
      {{ description }}
    </p>
  </article>
</template>

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

<style scoped lang="scss">
.icon-card__icon {
  width: 3.125rem;
  height: 3.125rem;
}
</style>
