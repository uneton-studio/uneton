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

<template>
  <div class="section-header flex justify-between pt-20 sm:pt-25 xl:pt-45">
    <div>
      <h2
        class="text-[1.75rem] leading-8 font-medium sm:text-[2.625rem] sm:leading-12 xl:text-8xl xl:leading-24 xl:font-normal"
        :id="headingId"
        :class="textClass"
        v-html="title"
      ></h2>

      <p
        v-if="description"
        class="mt-2 max-w-100 text-sm leading-5.5 sm:mt-4 xl:mt-8 xl:text-xl xl:leading-7.5 xl:max-w-244"
        :class="textClass"
      >
        {{ description }}
      </p>
    </div>

    <Dots :color="theme" class="xl:mt-4 hidden md:grid" />
  </div>
</template>
