<script setup lang="ts">
withDefaults(
  defineProps<{
    fullscreen?: boolean;
  }>(),
  {
    fullscreen: true,
  },
);

const dots = [
  { col: 2, row: 1, delay: "-0.4s", duration: "1.8s" },
  { col: 3, row: 1, delay: "-1.2s", duration: "2.3s" },
  { col: 4, row: 1, delay: "-0.8s", duration: "1.6s" },

  { col: 1, row: 2, delay: "-1.6s", duration: "2.1s" },
  { col: 2, row: 2, delay: "-0.2s", duration: "1.7s" },
  { col: 3, row: 2, delay: "-1.1s", duration: "2.5s" },
  { col: 4, row: 2, delay: "-0.7s", duration: "1.9s" },
  { col: 5, row: 2, delay: "-1.8s", duration: "2.2s" },

  { col: 1, row: 3, delay: "-0.9s", duration: "2.4s" },
  { col: 2, row: 3, delay: "-1.5s", duration: "1.8s" },
  { col: 3, row: 3, delay: "-0.3s", duration: "2.1s" },
  { col: 4, row: 3, delay: "-1.9s", duration: "1.6s" },
  { col: 5, row: 3, delay: "-0.6s", duration: "2.3s" },

  { col: 1, row: 4, delay: "-1.3s", duration: "1.9s" },
  { col: 2, row: 4, delay: "-0.5s", duration: "2.5s" },
  { col: 3, row: 4, delay: "-1.7s", duration: "1.7s" },
  { col: 4, row: 4, delay: "-0.1s", duration: "2.2s" },
  { col: 5, row: 4, delay: "-1s", duration: "2s" },

  { col: 2, row: 5, delay: "-0.7s", duration: "1.8s" },
  { col: 3, row: 5, delay: "-1.4s", duration: "2.4s" },
  { col: 4, row: 5, delay: "-0.3s", duration: "2.1s" },
];
</script>

<template>
  <div
    :class="
      fullscreen ? 'fixed inset-0 z-9999 min-h-screen' : 'min-h-screen w-full'
    "
    class="flex items-center justify-center bg-dark-soft"
    role="status"
    aria-live="polite"
    aria-label="Seite wird geladen"
  >
    <div class="grid grid-cols-5 grid-rows-5 gap-3" aria-hidden="true">
      <span
        v-for="(dot, index) in dots"
        :key="index"
        class="loader-dot h-5 w-5 rounded-full bg-white"
        :style="{
          gridColumn: dot.col,
          gridRow: dot.row,
          animationDelay: dot.delay,
          animationDuration: dot.duration,
        }"
      />
    </div>

    <span class="sr-only"> Seite wird geladen … </span>
  </div>
</template>

<style scoped>
.loader-dot {
  animation-name: dot-fade;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes dot-fade {
  0%,
  100% {
    opacity: 0.15;
  }

  35% {
    opacity: 1;
  }

  65% {
    opacity: 0.45;
  }
}

@media (prefers-reduced-motion: reduce) {
  .loader-dot {
    animation: none;
    opacity: 0.75;
  }
}
</style>
