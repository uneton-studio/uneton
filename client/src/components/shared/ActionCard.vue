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
    class="info-card rounded-3xl p-6 xl:p-15 flex flex-col min-h-70 xl:min-h-136"
    :class="themeClass"
  >
    <header>
      <div v-if="icon">
        <component
          :is="icon"
          class="info-card__icon block w-10 h-10 xl:w-20 xl:h-20"
          aria-hidden="true"
        />
      </div>
    </header>

    <div class="mt-auto">
      <h3
        class="text-[1.375rem] sm:text-2xl leading-6 mb-2 xl:text-[2.625rem] xl:leading-13.5 xl:mb-4"
        :class="textClass"
      >
        {{ title }}
      </h3>

      <p
        v-if="description"
        class="text-xs leading-4 max-w-132 mb-4 xl:text-lg xl:leading-7.5 xl:mb-6"
        :class="textClass"
      >
        {{ description }}
      </p>

      <footer v-if="$slots.default" class="flex gap-4">
        <slot />
      </footer>
    </div>
  </article>
</template>
