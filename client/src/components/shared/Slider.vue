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
    <div class="slider-bleed">
      <div
        ref="sliderRef"
        class="no-scrollbar grid w-full auto-cols-[100%] grid-flow-col overflow-x-auto scroll-smooth snap-x snap-mandatory sm:auto-cols-[50%] xl:grid-flow-row xl:auto-cols-auto xl:grid-cols-3 xl:overflow-visible xl:snap-none xl:gap-5"
        tabindex="0"
      >
        <slot />
      </div>
    </div>

    <div class="mt-10 flex justify-end gap-4 xl:hidden">
      <button
        type="button"
        class="flex size-10 items-center justify-center rounded-full transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
        :class="buttonClass"
        aria-label="Previous slide"
        @click="scroll('prev')"
      >
        <svg
          aria-hidden="true"
          class="size-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>

      <button
        type="button"
        class="flex size-10 items-center justify-center rounded-full transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
        :class="buttonClass"
        aria-label="Next slide"
        @click="scroll('next')"
      >
        <svg
          aria-hidden="true"
          class="size-6 rotate-180"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
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

.slider-bleed {
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}

:deep(.slider-slide) {
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

@media (min-width: 600px) {
  .slider-bleed {
    margin-left: -2rem;
    margin-right: -2rem;
  }

  :deep(.slider-slide) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 1280px) {
  .slider-bleed {
    margin-left: 0;
    margin-right: 0;
  }

  :deep(.slider-slide) {
    padding-left: 0;
    padding-right: 0;
    scroll-snap-align: none;
  }
}
</style>
