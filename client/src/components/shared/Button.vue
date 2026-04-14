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

const bootstrapColorMap: Record<ButtonColor, string> = {
  white: "light",
  black: "dark",
};

const variantClass = computed(() => {
  const color = bootstrapColorMap[props.color];

  if (props.variant === "outlined") return `btn-outline-${color}`;
  if (props.variant === "link") return `btn-link text-${color}`;

  return `btn-${color}`;
});

const sizeClass = computed(() => {
  if (props.size === "sm") return "btn-sm";
  if (props.size === "lg") return "btn-lg";
  return "";
});

const buttonClasses = computed(() => [
  "btn rounded-pill px-4 py-2",
  variantClass.value,
  sizeClass.value,
  { disabled: props.disabled },
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
