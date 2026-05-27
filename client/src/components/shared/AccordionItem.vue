<script setup lang="ts">
import type { ThemeMode } from "@/app.constants";
import { computed, nextTick, onMounted, ref, watch } from "vue";

interface Props {
  title: string;
  theme?: ThemeMode;
  isOpen?: boolean;
  contentId?: string;
}

const props = withDefaults(defineProps<Props>(), {
  theme: "dark",
  isOpen: false,
  contentId: undefined,
});

const emit = defineEmits<{
  toggle: [];
}>();

const contentRef = ref<HTMLElement | null>(null);
const maxHeight = ref("0px");

const generatedId = `accordion-content-${Math.random().toString(36).slice(2, 9)}`;
const panelId = computed(() => props.contentId ?? generatedId);

const cardClass = computed(() =>
  props.theme === "light"
    ? "bg-light-soft text-dark"
    : "bg-dark-mute text-light",
);

const updateHeight = async () => {
  await nextTick();

  if (!contentRef.value) return;

  maxHeight.value = props.isOpen ? `${contentRef.value.scrollHeight}px` : "0px";
};

const toggle = () => {
  emit("toggle");
};

watch(() => props.isOpen, updateHeight);

onMounted(updateHeight);
</script>

<template>
  <div class="w-full">
    <article
      class="rounded-2xl transition-colors duration-200"
      :class="cardClass"
    >
      <button
        type="button"
        class="flex w-full cursor-pointer items-center justify-between p-4 text-left text-base leading-4.5 xl:text-lg xl:leading-4"
        :aria-expanded="isOpen"
        :aria-controls="panelId"
        @click="toggle"
      >
        <span class="pr-3" v-html="title"></span>

        <span
          class="relative flex size-8 shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <span class="absolute h-0.5 w-4 rounded-full bg-current"></span>

          <span
            class="absolute h-0.5 w-4 rounded-full bg-current transition-opacity duration-200"
            :class="isOpen ? 'opacity-0' : 'rotate-90'"
          ></span>
        </span>
      </button>
    </article>

    <div
      :id="panelId"
      class="overflow-hidden transition-[max-height] duration-300"
      role="region"
      :aria-hidden="!isOpen"
      :style="{ maxHeight }"
    >
      <div ref="contentRef" class="pt-4">
        <div class="rounded-2xl p-4" :class="cardClass">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
