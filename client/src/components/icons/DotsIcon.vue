<script setup lang="ts">
defineProps<{
  open?: boolean;
}>();
</script>

<template>
  <div class="relative flex items-center gap-1" aria-hidden="true">
    <span
      class="size-1.25 rounded-full bg-white transition-all duration-300 ease-out"
      :class="open ? 'translate-y-1.5 translate-x-1' : ''"
    />

    <span
      class="size-1.25 rounded-full bg-white transition-all duration-300 ease-out"
      :class="open ? 'scale-0 opacity-0' : ''"
    />

    <span
      class="size-1.25 rounded-full bg-white transition-all duration-300 ease-out"
      :class="open ? '-translate-y-1.5 -translate-x-1' : ''"
    />
  </div>
</template>
