<template>
  <section class="w-full overflow-hidden">
    <div
      class="mx-auto flex w-full max-w-full items-center justify-center px-4"
      :style="{
        '--circle-size': circleSize,
        '--overlap': overlap,
      }"
    >
      <div class="flex w-full items-center justify-center py-4">
        <div
          v-for="(item, index) in items"
          :key="item.label"
          class="relative aspect-square shrink min-w-0 basis-(--circle-size)"
          :class="index !== 0 ? 'ml-(--overlap)' : ''"
        >
          <div
            class="relative size-full rounded-full border-2 border-white"
            :class="[
              index % 2 === 0 ? 'border-solid' : 'border-dashed',
              index % 2 === 0
                ? 'animate-spin-clockwise'
                : 'animate-spin-counter',
            ]"
            :style="{ '--dot-angle': item.dotAngle }"
          >
            <span class="circle-dot absolute rounded-full bg-white"></span>
          </div>

          <p
            class="pointer-events-none absolute inset-0 flex items-center justify-center font-heading text-sm leading-5 text-white xl:text-[2rem] xl:leading-12"
          >
            {{ item.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  { label: "Discover", dotAngle: "65deg" },
  { label: "Define", dotAngle: "305deg" },
  { label: "Develop", dotAngle: "5deg" },
  { label: "Growth", dotAngle: "330deg" },
];

const circleSize = "min(405px, calc((100vw - 32px) / 3.58))";
const overlap = "calc(var(--circle-size) * -0.14)";
</script>

<style scoped>
.circle-dot {
  --dot-size: clamp(9px, 1vw, 15px);

  width: var(--dot-size);
  height: var(--dot-size);

  left: 100%;
  top: 50%;

  transform: translate(-50%, -50%) rotate(var(--dot-angle));
  transform-origin: calc((var(--circle-size) * -0.5) + (var(--dot-size) / 2))
    50%;
}

.animate-spin-clockwise {
  animation: spin-clockwise 18s linear infinite;
}

.animate-spin-counter {
  animation: spin-counter 22s linear infinite;
}

@keyframes spin-clockwise {
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-counter {
  to {
    transform: rotate(-360deg);
  }
}
</style>
