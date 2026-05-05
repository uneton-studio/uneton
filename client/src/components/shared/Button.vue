<script setup lang="ts">
import type { ButtonVariant } from "@/app.constants";
import { computed } from "vue";

type ButtonColor = "white" | "black";
type ButtonSize = "sm" | "md" | "lg";
type ButtonTag = "button" | "a" | "router-link";

interface Props {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
  tag?: ButtonTag;
  href?: string;
  to?: string | Record<string, unknown>;
  type?: "button" | "submit" | "reset";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "filled",
  color: "white",
  size: "sm",
  disabled: false,
  tag: "button",
  type: "button",
});

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const isButton = computed(() => props.tag === "button");
const isAnchor = computed(() => props.tag === "a");
const isRouterLink = computed(() => props.tag === "router-link");

const variantClass = computed(() => {
  if (props.variant === "outlined") {
    return props.color === "white"
      ? "border border-white text-white bg-transparent"
      : "border border-black text-black bg-transparent";
  }

  if (props.variant === "link") {
    return props.color === "white"
      ? "bg-transparent text-white underline"
      : "bg-transparent text-black underline";
  }

  return props.color === "white"
    ? "bg-white text-black"
    : "bg-black text-white";
});

const sizeClass = computed(() => {
  if (props.size === "sm") return "text-sm px-4 py-2";
  if (props.size === "lg") return "text-lg px-6 py-3";
  return "text-base px-5 py-2.5";
});

const buttonClasses = computed(() => [
  "inline-flex items-center justify-center rounded-full transition",
  variantClass.value,
  sizeClass.value,
  props.disabled ? "opacity-50 pointer-events-none" : "",
]);

const tag = computed(() => props.tag);

function handleClick(event: MouseEvent) {
  if (props.disabled) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  emit("click", event);
}
</script>

<template>
  <component
    :is="tag"
    :to="isRouterLink ? to : undefined"
    :href="isAnchor ? href : undefined"
    :class="buttonClasses"
    :disabled="isButton ? disabled : undefined"
    @click="handleClick"
  >
    <slot />
  </component>
</template>
