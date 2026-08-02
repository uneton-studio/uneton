<script setup lang="ts">
import type { ThemeMode } from "@/app.constants";
import type { Component } from "vue";

withDefaults(
  defineProps<{
    icon: Component;
    title: string;
    description: string;
    theme?: ThemeMode;
  }>(),
  {
    theme: "light",
  },
);
</script>

<template>
  <div class="flex items-center gap-5 md:gap-4 xl:gap-5">
    <div
      :class="[
        'flex h-8 w-8 md:h-6.5 md:w-6.5 shrink-0 items-center justify-center xl:h-8 xl:w-8',
        theme === 'light' ? 'text-light' : 'text-dark',
      ]"
    >
      <component :is="icon" class="h-8 w-8 md:h-6.5 md:w-6.5 xl:h-8 xl:w-8" />
    </div>

    <div>
      <p
        :class="[
          'font-body text-base md:text-sm font-medium xl:text-lg',
          theme === 'light' ? 'text-light' : 'text-dark',
        ]"
      >
        {{ title }}
      </p>

      <p
        :class="[
          'mt-1 text-xs md:text-[10px] xl:mt-1.5 xl:text-xs',
          theme === 'light' ? 'text-[#d6d6d6]' : 'text-[#4f4f4f]',
        ]"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
