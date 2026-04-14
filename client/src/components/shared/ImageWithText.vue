<!-- ImageTextCard.vue -->
<template>
  <article class="image-text-card w-100">
    <img
      :src="image"
      :alt="imageAlt"
      class="w-100 d-block rounded-4 object-fit-cover"
      :style="imageStyle"
    />

    <div class="mt-5">
      <h3 class="h2 mb-0" :class="textClass">
        {{ title }}
      </h3>

      <p v-if="description" class="text-big mt-4 mb-0" :class="textClass">
        {{ description }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ThemeMode } from "@/app.constants";

interface Props {
  image: string;
  imageAlt?: string;
  title: string;
  description?: string;
  theme?: ThemeMode;
  imageHeight?: number;
  imagePosition?: string;
}

const props = withDefaults(defineProps<Props>(), {
  imageAlt: "",
  description: "",
  theme: "dark",
  imageHeight: 525,
  imagePosition: "center",
});

const textClass = computed(() =>
  props.theme === "light" ? "text-light" : "text-dark",
);

const imageStyle = computed(() => ({
  height: `${props.imageHeight}px`,
  objectPosition: props.imagePosition,
}));
</script>
