<template>
  <div class="d-grid blink-dots" :style="gridStyle" aria-hidden="true">
    <span
      v-for="(dot, index) in dots"
      :key="index"
      class="rounded-circle blink-dots__dot"
      :class="{ 'blink-dots__dot--active': dot }"
      :style="getDotStyle()"
    />
  </div>
</template>

<script setup lang="ts">
import type { ThemeMode } from "@/app.constants";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

interface Props {
  rows?: number;
  cols?: number;
  size?: number;
  gap?: number;
  interval?: number;
  minActive?: number;
  maxActive?: number;
  color?: ThemeMode;
}

const props = withDefaults(defineProps<Props>(), {
  rows: 3,
  cols: 10,
  size: 16,
  gap: 8,
  interval: 1000,
  minActive: 10,
  maxActive: 15,
  color: "dark",
});

const totalDots = computed(() => props.rows * props.cols);
const dots = ref<boolean[]>(Array(totalDots.value).fill(false));

let timer: number | null = null;

const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${props.cols}, ${props.size}px)`,
  gridTemplateRows: `repeat(${props.rows}, ${props.size}px)`,
  columnGap: `${props.gap}px`,
  rowGap: "4px",
  width: "fit-content",
}));

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIndexes(total: number, count: number): number[] {
  const pool = Array.from({ length: total }, (_, i) => i);
  const result: number[] = [];

  for (let i = 0; i < count && pool.length > 0; i += 1) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    const picked = pool[randomIndex];

    if (picked !== undefined) {
      result.push(picked);
      pool.splice(randomIndex, 1);
    }
  }

  return result;
}

function updatePattern() {
  const nextDots = Array(totalDots.value).fill(false);

  const activeCount = randomInt(
    Math.min(props.minActive, totalDots.value),
    Math.min(props.maxActive, totalDots.value),
  );

  const activeIndexes = getRandomIndexes(totalDots.value, activeCount);

  activeIndexes.forEach((index) => {
    nextDots[index] = true;
  });

  dots.value = nextDots;
}

function getDotStyle() {
  return {
    width: `${props.size}px`,
    height: `${props.size}px`,
    backgroundColor: props.color === "light" ? "#ffffff" : "#000000",
  };
}

onMounted(() => {
  updatePattern();
  timer = window.setInterval(updatePattern, props.interval);
});

onBeforeUnmount(() => {
  if (timer !== null) {
    window.clearInterval(timer);
  }
});
</script>

<style scoped lang="scss">
.blink-dots {
  justify-content: start;
  align-items: start;
  line-height: 0;
}

.blink-dots__dot {
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: scale(0.7);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.blink-dots__dot--active {
  opacity: 1;
  transform: scale(1);
}
</style>
