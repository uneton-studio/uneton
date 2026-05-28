<script setup lang="ts">
interface Props {
  progress?: number;
}

withDefaults(defineProps<Props>(), {
  progress: 85,
});
</script>

<template>
  <div class="relative h-2 w-24 rounded-full bg-white mt-7.5">
    <div
      class="h-full rounded-full bg-[#0B5D64]"
      :style="{ width: `${progress}%` }"
    ></div>

    <div
      class="absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-[#DBCBFC]"
      :style="{ left: `calc(${progress}% - 0.5rem)` }"
    ></div>
  </div>
</template>
