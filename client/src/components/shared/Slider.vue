<script setup lang="ts">
import { computed, ref } from "vue";

type ButtonBackground = "light" | "light-soft";

const props = withDefaults(
  defineProps<{
    buttonBackground?: ButtonBackground;
    ariaLabel?: string;
  }>(),
  {
    buttonBackground: "light-soft",
    ariaLabel: "Slider",
  },
);

const sliderRef = ref<HTMLElement | null>(null);

const buttonClass = computed(() =>
  props.buttonBackground === "light" ? "bg-light" : "bg-light-soft",
);

const scroll = (direction: "prev" | "next") => {
  if (!sliderRef.value) return;

  sliderRef.value.scrollBy({
    left:
      direction === "next"
        ? sliderRef.value.clientWidth
        : -sliderRef.value.clientWidth,
    behavior: "smooth",
  });
};
</script>

<template>
  <section class="relative w-full" :aria-label="ariaLabel">
    <div
      ref="sliderRef"
      class="no-scrollbar grid w-full auto-cols-[100%] grid-flow-col gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory md:auto-cols-[calc((100%-1rem)/2)] lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-3 lg:overflow-visible lg:snap-none"
      tabindex="0"
    >
      <slot />
    </div>

    <div class="mt-5 flex justify-end gap-3 lg:hidden">
      <button
        type="button"
        class="flex size-10 items-center justify-center rounded-full transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
        :class="buttonClass"
        aria-label="Previous slide"
        @click="scroll('prev')"
      >
        <span aria-hidden="true" class="chevron chevron-left" />
      </button>

      <button
        type="button"
        class="flex size-10 items-center justify-center rounded-full transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
        :class="buttonClass"
        aria-label="Next slide"
        @click="scroll('next')"
      >
        <span aria-hidden="true" class="chevron chevron-right" />
      </button>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar {
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

:deep(*) {
  scroll-snap-align: start;
}

@media (min-width: 1024px) {
  :deep(*) {
    scroll-snap-align: none;
  }
}

.chevron {
  width: 10px;
  height: 10px;
  border-top: 2px solid #001b1e;
  border-right: 2px solid #001b1e;
}

.chevron-left {
  transform: rotate(-135deg);
}

.chevron-right {
  transform: rotate(45deg);
}
</style>
