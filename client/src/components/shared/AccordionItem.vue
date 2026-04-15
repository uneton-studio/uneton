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

  if (isOpen.value) {
    maxHeight.value = `${contentRef.value.scrollHeight}px`;
  } else {
    maxHeight.value = "0px";
  }
};

const toggle = async () => {
  isOpen.value = !isOpen.value;
  await updateHeight();
};

watch(isOpen, updateHeight);

onMounted(() => {
  updateHeight();
});
</script>

<template>
  <article
    class="accordion-item-custom rounded-4 overflow-hidden"
    :class="themeClass"
  >
    <button
      type="button"
      class="cursor-pointer p-4 text--large w-100 border-0 d-flex align-items-center justify-content-between text-start"
      :class="textClass + ' ' + themeClass"
      :aria-expanded="isOpen"
      :aria-controls="panelId"
      @click="toggle"
    >
      <span class="pe-3">
        {{ title }}
      </span>

      <span
        class="accordion-item-custom__icon flex-shrink-0"
        aria-hidden="true"
      >
        {{ isOpen ? "-" : "+" }}
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
  font-size: 2rem;
  line-height: 1;
  width: 2rem;
  text-align: center;
}

.accordion-item-custom__panel {
  overflow: hidden;
  transition: max-height 0.3s ease;
}
</style>
