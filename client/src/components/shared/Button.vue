<script setup lang="ts">
import type { ButtonVariant } from "@/app.constants";
import { computed } from "vue";

type ButtonColor = "white" | "black" | "dark-mute";
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

const focusColor = computed(() => {
  switch (props.color) {
    case "white":
      return "#ffffff";
    case "black":
      return "#000000";
    case "dark-mute":
      return "#1F3639";
  }
});

const variantClass = computed(() => {
  if (props.variant === "outlined") {
    switch (props.color) {
      case "white":
        return "border border-white bg-transparent text-white hover:bg-[#1F3639]";
      case "black":
        return "border border-black bg-transparent text-black hover:bg-[#F2EAFE]";
      case "dark-mute":
        return "border border-dark-mute bg-transparent text-dark-mute hover:bg-[#F2EAFE]";
    }
  }

  if (props.variant === "link") {
    switch (props.color) {
      case "white":
        return "bg-transparent text-white underline";
      case "black":
        return "bg-transparent text-black underline";
      case "dark-mute":
        return "bg-transparent text-dark-mute underline";
    }
  }

  switch (props.color) {
    case "white":
      return "bg-white text-black hover:bg-[#F2EAFE]";
    case "black":
      return "bg-black text-white hover:bg-[#1F3639]";
    case "dark-mute":
      return "bg-dark-mute text-white hover:bg-[#1F3639]";
  }
});

const sizeClass = computed(() => {
  switch (props.size) {
    case "sm":
      return "min-w-28 px-5 py-3 text-xs md:text-sm";
    case "lg":
      return "px-5 py-3 text-lg";
    default:
      return "px-5 py-2.5 text-base";
  }
});

const buttonClasses = computed(() => [
  "app-button",
  "relative",
  "inline-flex items-center justify-center",
  "rounded-full",
  "font-medium md:font-normal",
  "cursor-pointer",
  "transition-colors duration-500 ease-in-out",
  variantClass.value,
  sizeClass.value,
  props.disabled ? "pointer-events-none opacity-50" : "",
]);

const buttonStyle = computed(() => ({
  "--focus-color": focusColor.value,
}));

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
    :type="isButton ? type : undefined"
    :disabled="isButton ? disabled : undefined"
    :class="buttonClasses"
    :style="buttonStyle"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<style scoped>
.app-button {
  outline: none !important;
}

.app-button::after {
  content: "";
  position: absolute;

  inset: -6px;

  border: 2px solid transparent;
  border-radius: inherit;

  pointer-events: none;
}

.app-button:focus-visible::after {
  border-color: var(--focus-color);
}
</style>
