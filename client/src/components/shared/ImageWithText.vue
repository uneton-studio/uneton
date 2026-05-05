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

<template>
  <article class="image-text-card w-full">
    <img
      :src="image"
      :alt="imageAlt"
      class="w-full block rounded-2xl object-cover"
      :style="imageStyle"
    />

    <div class="mt-[2rem]">
      <h3
        class="text-xl leading-[1.625rem] md:text-[3.375rem] md:leading-[3.75rem]"
        :class="textClass"
      >
        {{ title }}
      </h3>

      <p
        v-if="description"
        class="text-[0.75rem] leading-[1.125rem] md:text-[1.125rem] md:leading-[1.75rem] mt-[1rem]"
        :class="textClass"
      >
        {{ description }}
      </p>
    </div>
  </article>
</template>
