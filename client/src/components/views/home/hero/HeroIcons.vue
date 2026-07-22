<script setup lang="ts">
import InfoWithIcon from "@/components/shared/InfoWithIcon.vue";
import type { HeroItem } from "../data";
import type { ThemeMode } from "@/app.constants";

withDefaults(
  defineProps<{
    items: HeroItem[] | undefined;
    gap?: string;
    theme?: ThemeMode;
  }>(),
  {
    gap: "gap-10",
    theme: "light",
  },
);
</script>

<template>
  <div v-if="items" :class="['flex flex-col md:flex-row', gap]">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :class="[
        'flex items-center',
        index < items.length - 1
          ? [
              'border-b pb-6 md:border-b-0 md:pb-0',
              theme === 'light' ? 'border-white/20' : 'border-black/20',
            ]
          : '',
      ]"
    >
      <InfoWithIcon
        :icon="item.icon"
        :title="item.title"
        :description="item.subtitle ?? ''"
        :theme="theme"
      />

      <p
        v-if="index < items.length - 1"
        :class="[
          'ml-10 hidden text-2xl md:block',
          theme === 'light' ? 'text-light' : 'text-dark',
        ]"
        aria-hidden="true"
      >
        |
      </p>
    </div>
  </div>
</template>
