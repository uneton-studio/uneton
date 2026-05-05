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
  theme: "dark",
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
    class="info-card rounded-2xl p-5 md:p-8 flex flex-col min-h-[34rem]"
    :class="themeClass"
  >
    <header>
      <div v-if="icon">
        <component
          :is="icon"
          class="info-card__icon block w-[5rem] h-[5rem]"
          aria-hidden="true"
        />
      </div>
    </header>

    <div class="mt-auto">
      <h3
        class="text-xl leading-[1.625rem] md:text-[3.375rem] md:leading-[3.75rem] mb-[1rem]"
        :class="textClass"
      >
        {{ title }}
      </h3>

      <p
        v-if="description"
        class="text-[0.875rem] leading-6 md:text-[1.375rem] md:leading-8 mb-[1.5rem] max-w-[33rem]"
        :class="textClass"
      >
        {{ description }}
      </p>

      <footer v-if="$slots.default">
        <slot />
      </footer>
    </div>
  </article>
</template>
