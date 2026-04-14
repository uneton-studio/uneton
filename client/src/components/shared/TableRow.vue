<template>
  <article class="service-row" :class="{ 'border-bottom': withBottomBorder }">
    <div class="row align-items-start">
      <div class="col-12 col-md-2">
        <component :is="icon" />
      </div>

      <div class="col-12 col-md-3">
        <h3 class="h2 mb-0" :class="textClass">
          {{ title }}
        </h3>
      </div>

      <div class="col-12 col-md-3">
        <ul class="service-row__list list-unstyled mb-0">
          <li
            v-for="item in items"
            :key="item"
            class="text-big"
            :class="textClass"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="col-12 col-md-4">
        <p class="text-big mb-0" :class="textClass">
          {{ description }}
        </p>
      </div>
    </div>
  </article>
</template>

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

<style scoped lang="scss">
article {
  padding: 5rem 0;
}

.service-row__list li + li {
  margin-top: 0.5rem;
}
</style>
