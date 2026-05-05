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
  <div class="section-header flex justify-between pt-[5rem] md:pt-[11.25rem]">
    <div>
      <h2
        class="text-[1.75rem] leading-[2.125rem] md:text-[6rem] md:leading-[6.5rem]"
        :id="headingId"
        :class="textClass"
        v-html="title"
      ></h2>

      <p
        v-if="description"
        class="text-[0.875rem] leading-6 md:text-[1.375rem] md:leading-8 mt-[2rem] max-w-[61rem]"
        :class="textClass"
      >
        {{ description }}
      </p>
    </div>

    <Dots :color="theme" class="mt-[0.75rem]" />
  </div>
</template>
