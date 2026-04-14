<template>
  <div
    class="research-strategy-circles"
    :style="wrapperStyle"
    aria-hidden="true"
  >
    <svg
      :width="width"
      :height="height"
      :viewBox="`0 0 ${width} ${height}`"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="orbit-circles__svg"
    >
      <g
        class="orbit orbit--left"
        :style="{ animationDuration: `${durationLeft}s` }"
        :transform-origin="`${leftCx}px ${cy}px`"
      >
        <circle
          :cx="leftCx"
          :cy="cy"
          :r="radius"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          fill="none"
          stroke-linecap="round"
        />
        <circle
          :cx="leftCx"
          :cy="cy - radius"
          :r="dotRadius"
          fill="currentColor"
        />
      </g>

      <g
        class="orbit orbit--center"
        :style="{ animationDuration: `${durationCenter}s` }"
        :transform-origin="`${centerCx}px ${cy}px`"
      >
        <circle
          :cx="centerCx"
          :cy="cy"
          :r="radius"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          fill="none"
          :stroke-dasharray="dashArray"
          stroke-linecap="round"
        />
        <circle
          :cx="centerCx"
          :cy="cy - radius"
          :r="dotRadius"
          fill="currentColor"
        />
      </g>

      <g
        class="orbit orbit--right"
        :style="{ animationDuration: `${durationRight}s` }"
        :transform-origin="`${rightCx}px ${cy}px`"
      >
        <circle
          :cx="rightCx"
          :cy="cy"
          :r="radius"
          stroke="currentColor"
          :stroke-width="strokeWidth"
          fill="none"
          stroke-linecap="round"
        />
        <circle
          :cx="rightCx"
          :cy="cy - radius"
          :r="dotRadius"
          fill="currentColor"
        />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  size?: number;
  color?: string;
  strokeWidth?: number;
  dotRadius?: number;
  overlap?: number;
  durationLeft?: number;
  durationCenter?: number;
  durationRight?: number;
  clockwise?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 110,
  color: "#000000",
  strokeWidth: 2,
  dotRadius: 4.5,
  overlap: 0.42,
  durationLeft: 9,
  durationCenter: 12,
  durationRight: 10,
  clockwise: true,
});

const radius = computed(() => props.size / 2);
const cy = computed(() => radius.value + props.strokeWidth);
const leftCx = computed(() => radius.value + props.strokeWidth);
const centerCx = computed(() => leftCx.value + radius.value * props.overlap);
const rightCx = computed(() => centerCx.value + radius.value * props.overlap);

const width = computed(() => rightCx.value + radius.value + props.strokeWidth);
const height = computed(() => props.size + props.strokeWidth * 2);
const dashArray = computed(() => `${props.size * 0.08} ${props.size * 0.06}`);

const wrapperStyle = computed(() => ({
  color: props.color,
  width: `${width.value}px`,
  height: `${height.value}px`,
}));
</script>

<style scoped lang="scss">
.research-strategy-circles {
  display: inline-flex;
}

.research-strategy-circles__svg {
  display: block;
  overflow: visible;
}

.orbit {
  transform-box: fill-box;
  transform-origin: center;
  animation-name: orbit-spin;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.orbit--center {
  animation-direction: reverse;
}

@keyframes orbit-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .orbit {
    animation: none;
  }
}
</style>
