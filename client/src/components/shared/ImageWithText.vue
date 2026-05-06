<script setup lang="ts">
import { computed } from "vue";
import type { ThemeMode } from "@/app.constants";

interface Props {
  image: string;
  imageAlt?: string;
  title: string;
  description?: string;
  theme?: ThemeMode;
  imagePosition?: string;
}

const props = withDefaults(defineProps<Props>(), {
  imageAlt: "",
  description: "",
  theme: "dark",
  imagePosition: "center",
});

const textClass = computed(() =>
  props.theme === "light" ? "text-light" : "text-dark",
);

const imageStyle = computed(() => ({
  objectPosition: props.imagePosition,
}));
</script>

<template>
  <article class="w-full">
    <img
      :src="image"
      :alt="imageAlt"
      class="aspect-99/89 w-full rounded-2xl object-cover"
      :style="imageStyle"
    />

    <div class="mt-6 md:mt-15">
      <h3
        class="text-2xl leading-6 md:text-[3.375rem] md:leading-12"
        :class="textClass"
      >
        {{ title }}
      </h3>

      <p
        v-if="description"
        class="mt-2 text-xs leading-5 md:mt-4 md:text-xl md:leading-8"
        :class="textClass"
      >
        {{ description }}
      </p>
    </div>
  </article>
</template>
