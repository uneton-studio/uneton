<script setup lang="ts">
interface Props {
  title: string;
  value: string;
  description: string;
  eyebrow?: string;
}

defineProps<Props>();
</script>

<template>
  <article
    class="flex items-end justify-between min-h-37.5 w-full px-10 py-6 rounded-3xl bg-white/85 text-dark backdrop-blur-xs"
  >
    <div class="flex flex-col">
      <h3 class="font-heading text-lg font-semibold">
        {{ title }}
      </h3>

      <p class="font-heading text-[2rem] font-medium">
        {{ value }}
      </p>

      <p class="font-heading text-xs text-[#A6A6A6]">
        {{ description }}
      </p>
    </div>

    <div class="flex flex-col items-center justify-center">
      <p v-if="eyebrow" class="font-heading text-xs font-medium">
        {{ eyebrow }}
      </p>

      <slot />
    </div>
  </article>
</template>
