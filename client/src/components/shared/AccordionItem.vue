<script setup lang="ts">
import type { ThemeMode } from "@/app.constants";
import { computed, nextTick, onMounted, ref, watch } from "vue";

interface Props {
  title: string;
  theme?: ThemeMode;
  initiallyOpen?: boolean;
  contentId?: string;
}

const props = withDefaults(defineProps<Props>(), {
  theme: "dark",
  initiallyOpen: false,
  contentId: undefined,
});

const isOpen = ref(props.initiallyOpen);
const contentRef = ref<HTMLElement | null>(null);
const maxHeight = ref("0px");

const generatedId = `accordion-content-${Math.random().toString(36).slice(2, 9)}`;
const panelId = computed(() => props.contentId ?? generatedId);

const themeClass = computed(() =>
  props.theme === "light" ? "bg-light-soft" : "bg-dark-mute",
);

const textClass = computed(() =>
  props.theme === "light" ? "text-dark" : "text-light",
);

const updateHeight = async () => {
  await nextTick();

  if (!contentRef.value) return;

  maxHeight.value = isOpen.value ? `${contentRef.value.scrollHeight}px` : "0px";
};

const toggle = async () => {
  isOpen.value = !isOpen.value;
  await updateHeight();
};

watch(isOpen, updateHeight);

onMounted(updateHeight);
</script>

<template>
  <article
    class="accordion-item-custom overflow-hidden rounded-2xl"
    :class="themeClass"
  >
    <button
      type="button"
      class="flex w-full cursor-pointer items-center justify-between border-0 p-4 text-left text-lg"
      :class="[textClass, themeClass]"
      :aria-expanded="isOpen"
      :aria-controls="panelId"
      @click="toggle"
    >
      <span class="pr-3" v-html="title"></span>

      <span
        class="accordion-item-custom__icon shrink-0"
        :class="{ 'is-open': isOpen }"
        aria-hidden="true"
      >
        <span class="accordion-item-custom__line"></span>
        <span
          class="accordion-item-custom__line accordion-item-custom__line--vertical"
        ></span>
      </span>
    </button>

    <div
      :id="panelId"
      class="accordion-item-custom__panel"
      role="region"
      :aria-hidden="!isOpen"
      :style="{ maxHeight }"
    >
      <div ref="contentRef">
        <slot />
      </div>
    </div>
  </article>
</template>

<style scoped>
.accordion-item-custom {
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.accordion-item-custom__icon {
  position: relative;
  display: flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
}

.accordion-item-custom__line {
  position: absolute;
  width: 1rem;
  height: 2px;
  border-radius: 9999px;
  background: currentColor;
  transition: opacity 0.2s ease;
}

.accordion-item-custom__line--vertical {
  transform: rotate(90deg);
}

.accordion-item-custom__icon.is-open .accordion-item-custom__line--vertical {
  opacity: 0;
}

.accordion-item-custom__panel {
  overflow: hidden;
  transition: max-height 0.3s ease;
}
</style>
