<template>
  <div class="section-header d-flex justify-content-between">
    <div>
      <h2
        class="h1 mb-0"
        :id="headingId"
        :class="textClass"
        v-html="title"
      ></h2>

      <p
        v-if="description"
        class="text--extra-large mt-5 mb-0"
        :class="textClass"
      >
        {{ description }}
      </p>
    </div>

    <Dots :color="theme" class="mt-3" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Dots from "../icons/BlinkingDots.vue";
import type { ThemeMode } from "@/app.constants";

interface Props {
  title: string;
  description?: string;
  headingId?: string;
  theme?: ThemeMode;
}

const props = withDefaults(defineProps<Props>(), {
  description: "",
  headingId: "",
  theme: "dark",
});

const textClass = computed(() =>
  props.theme === "light" ? "text-light" : "text-dark",
);
</script>

<style scoped>
.section-header {
  padding-top: 5rem;
  @media only screen and (min-width: 768px) {
    padding-top: 11.25rem;
  }
}
</style>
