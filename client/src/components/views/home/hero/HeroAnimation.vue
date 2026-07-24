<script setup lang="ts">
import { computed, type CSSProperties } from "vue";

const props = withDefaults(
  defineProps<{
    strokeColor?: string;
    outerDotColor?: string;
    middleDotColor?: string;
    innerDotColor?: string;
    outerDuration?: number;
    middleDuration?: number;
    innerDuration?: number;
  }>(),
  {
    strokeColor: "#ffffff",
    outerDotColor: "#DBCBFC",
    middleDotColor: "#A8E6D5",
    innerDotColor: "#CAE6FD",
    outerDuration: 90,
    middleDuration: 70,
    innerDuration: 50,
  },
);

const orbitStyles = computed(
  () =>
    ({
      "--orbit-stroke": props.strokeColor,
      "--outer-dot": props.outerDotColor,
      "--middle-dot": props.middleDotColor,
      "--inner-dot": props.innerDotColor,
      "--outer-duration": `${props.outerDuration}s`,
      "--middle-duration": `${props.middleDuration}s`,
      "--inner-duration": `${props.innerDuration}s`,
    }) as CSSProperties,
);
</script>

<template>
  <div
    class="pointer-events-none aspect-square w-full"
    :style="orbitStyles"
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 660 660"
      class="block h-full w-full overflow-visible"
      fill="none"
    >
      <g class="orbit orbit--outer">
        <circle
          cx="330"
          cy="330"
          r="270"
          pathLength="120"
          class="orbit__circle"
        />

        <circle cx="404" cy="70" r="18" fill="var(--outer-dot)" />
      </g>

      <g class="orbit orbit--middle">
        <circle
          cx="330"
          cy="330"
          r="205"
          pathLength="120"
          class="orbit__circle"
        />

        <circle cx="526" cy="270" r="16" fill="var(--middle-dot)" />
      </g>

      <g class="orbit orbit--inner">
        <circle
          cx="330"
          cy="330"
          r="140"
          pathLength="120"
          class="orbit__circle"
        />

        <circle cx="191" cy="349" r="15" fill="var(--inner-dot)" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.orbit {
  transform-box: view-box;
  transform-origin: 330px 330px;
  will-change: transform;
}

.orbit__circle {
  stroke: var(--orbit-stroke);
  stroke-width: 3;
  stroke-dasharray: 3 2;
  stroke-linecap: butt;
}

.orbit--outer {
  animation: rotate-orbit var(--outer-duration) linear infinite;
}

.orbit--middle {
  animation: rotate-orbit-reverse var(--middle-duration) linear infinite;
}

.orbit--inner {
  animation: rotate-orbit var(--inner-duration) linear infinite;
}

@keyframes rotate-orbit {
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotate-orbit-reverse {
  to {
    transform: rotate(-360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .orbit {
    animation: none;
  }
}
</style>
