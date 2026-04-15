<template>
  <article
    class="info-card rounded-4 p-5 p-md-6 d-flex flex-column"
    :class="themeClass"
  >
    <header>
      <div v-if="icon">
        <component
          :is="icon"
          class="info-card__icon d-block"
          aria-hidden="true"
        />
      </div>
    </header>

    <div class="mt-auto">
      <h3 class="h2 mb-3" :class="textClass">
        {{ title }}
      </h3>

      <p v-if="description" class="text--extra-large mb-4" :class="textClass">
        {{ description }}
      </p>

      <footer v-if="$slots.default">
        <slot />
      </footer>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, type Component } from "vue";

type ThemeMode = "dark" | "light";

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
  props.theme === "dark" ? "bg-dark" : "bg-light",
);

const textClass = computed(() =>
  props.theme === "dark" ? "text-light" : "text-dark",
);
</script>

<style scoped lang="scss">
.info-card {
  min-height: 34rem;

  &.bg-dark {
    background-color: var(--color-background-dark-mute) !important;
  }
}

.info-card__icon {
  width: 5rem;
  height: 5rem;
}

p {
  max-width: 33rem;
}
</style>
