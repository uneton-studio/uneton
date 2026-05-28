<!-- CurveProgress.vue -->
<script setup lang="ts">
import { computed } from "vue";

interface Props {
  progress?: number;
}

const props = withDefaults(defineProps<Props>(), {
  progress: 70,
});

const dotPosition = computed(() => {
  const t = props.progress / 100;

  const p0 = { x: 8, y: 48 };
  const p1 = { x: 48, y: 48 };
  const p2 = { x: 72, y: 36 };
  const p3 = { x: 76, y: 8 };

  const x =
    (1 - t) ** 3 * p0.x +
    3 * (1 - t) ** 2 * t * p1.x +
    3 * (1 - t) * t ** 2 * p2.x +
    t ** 3 * p3.x;

  const y =
    (1 - t) ** 3 * p0.y +
    3 * (1 - t) ** 2 * t * p1.y +
    3 * (1 - t) * t ** 2 * p2.y +
    t ** 3 * p3.y;

  return { x, y };
});
</script>

<template>
  <div class="relative h-14 w-24 mt-3">
    <svg viewBox="0 0 80 56" class="h-full w-full" fill="none">
      <path
        d="M8 48 C48 48, 72 36, 76 8"
        stroke="white"
        stroke-width="8"
        stroke-linecap="round"
        pathLength="100"
        opacity="0.9"
      />

      <path
        d="M8 48 C48 48, 72 36, 76 8"
        stroke="#0B5D64"
        stroke-width="8"
        stroke-linecap="round"
        pathLength="100"
        :stroke-dasharray="`${progress} 100`"
      />

      <circle :cx="dotPosition.x" :cy="dotPosition.y" r="4" fill="#DBCBFC" />
    </svg>
  </div>
</template>
