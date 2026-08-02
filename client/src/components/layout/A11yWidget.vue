<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import HumanIcon from "../icons/HumanIcon.vue";
import EllipseEmptyIcon from "../icons/EllipseEmptyIcon.vue";
import EllipseFilledIcon from "../icons/EllipseFilledIcon.vue";
import HeadlineIcon from "../icons/HeadlineIcon.vue";
import HideImageIcon from "../icons/HideImageIcon.vue";
import FontBiggerIcon from "../icons/FontBiggerIcon.vue";
import FontSmallerIcon from "../icons/FontSmallerIcon.vue";
import FontIcon from "../icons/FontIcon.vue";
import LetterSpacingIcon from "../icons/LetterSpacingIcon.vue";
import LineHeightIcon from "../icons/LineHeightIcon.vue";
import TextAlignIcon from "../icons/TextAlignIcon.vue";
import Button from "../shared/Button.vue";

type TextAlign = "default" | "left" | "center" | "right";
type Contrast = "default" | "dark" | "light";

interface A11ySettings {
  fontSize: number;
  readableFont: boolean;
  textAlign: TextAlign;
  lineHeight: number;
  letterSpacing: number;
  contrast: Contrast;
  highlightTitles: boolean;
  hideImages: boolean;
}

const STORAGE_KEY = "a11y-settings";

const defaults: A11ySettings = {
  fontSize: 0,
  readableFont: false,
  textAlign: "default",
  lineHeight: 0,
  letterSpacing: 0,
  contrast: "default",
  highlightTitles: false,
  hideImages: false,
};

const isOpen = ref(false);
const wrapperRef = ref<HTMLElement | null>(null);
const settings = ref<A11ySettings>({ ...defaults });

const panelId = `a11y-panel-${Math.random().toString(36).slice(2, 9)}`;

const textButtons = [
  {
    action: "fontSizeUp",
    icon: FontBiggerIcon,
    label: "Text vergrößern",
  },
  {
    action: "fontSizeDown",
    icon: FontSmallerIcon,
    label: "Text verkleinern",
  },
  {
    action: "readableFont",
    icon: FontIcon,
    label: "Leserlicher Text",
  },
  {
    action: "textAlign",
    icon: TextAlignIcon,
    label: "Textausrichtung",
  },
  {
    action: "lineHeight",
    icon: LineHeightIcon,
    label: "Zeilenabstand",
  },
  {
    action: "letterSpacing",
    icon: LetterSpacingIcon,
    label: "Wortabstand",
  },
] as const;

const contrastButtons = [
  {
    action: "contrastLight",
    label: "Heller Kontrast",
    icon: EllipseEmptyIcon,
  },
  {
    action: "contrastDark",
    label: "Dunkler Kontrast",
    icon: EllipseFilledIcon,
  },
] as const;

const contentButtons = [
  {
    action: "highlightTitles",
    icon: HeadlineIcon,
    label: "Überschriften hervorheben",
  },
  {
    action: "hideImages",
    icon: HideImageIcon,
    label: "Bilder ausblenden",
  },
] as const;

const html = computed(() =>
  typeof document !== "undefined" ? document.documentElement : null,
);

const save = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings.value));
};

const load = () => {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) return;

  try {
    settings.value = {
      ...defaults,
      ...JSON.parse(stored),
    };
  } catch {
    settings.value = { ...defaults };
  }
};

const applySettings = () => {
  if (!html.value) return;

  const root = html.value;

  const sizes: Record<number, string> = {
    [-2]: "85%",
    [-1]: "92%",
    0: "100%",
    1: "112%",
    2: "125%",
    3: "140%",
  };

  root.style.fontSize = sizes[settings.value.fontSize] ?? "100%";

  root.classList.toggle("a11y-readable-font", settings.value.readableFont);

  root.classList.remove(
    "a11y-align-left",
    "a11y-align-center",
    "a11y-align-right",
  );

  if (settings.value.textAlign !== "default") {
    root.classList.add(`a11y-align-${settings.value.textAlign}`);
  }

  const lineHeights = ["", "1.5", "1.9", "2.3"];

  root.style.setProperty(
    "--a11y-line-height",
    lineHeights[settings.value.lineHeight] || "inherit",
  );

  root.classList.toggle("a11y-line-height", settings.value.lineHeight > 0);

  const letterSpacings = ["", "0.05em", "0.1em", "0.15em"];

  root.style.setProperty(
    "--a11y-letter-spacing",
    letterSpacings[settings.value.letterSpacing] || "normal",
  );

  root.classList.toggle(
    "a11y-letter-spacing",
    settings.value.letterSpacing > 0,
  );

  root.classList.remove("a11y-contrast-dark", "a11y-contrast-light");

  if (settings.value.contrast !== "default") {
    root.classList.add(`a11y-contrast-${settings.value.contrast}`);
  }

  root.classList.toggle(
    "a11y-highlight-titles",
    settings.value.highlightTitles,
  );

  root.classList.toggle("a11y-hide-images", settings.value.hideImages);
};

const update = () => {
  applySettings();
  save();
};

const reset = () => {
  settings.value = { ...defaults };
  update();
};

const isActive = (action: string) => {
  const currentSettings = settings.value;

  if (action === "fontSizeUp") {
    return currentSettings.fontSize > 0;
  }

  if (action === "fontSizeDown") {
    return currentSettings.fontSize < 0;
  }

  if (action === "readableFont") {
    return currentSettings.readableFont;
  }

  if (action === "textAlign") {
    return currentSettings.textAlign !== "default";
  }

  if (action === "lineHeight") {
    return currentSettings.lineHeight > 0;
  }

  if (action === "letterSpacing") {
    return currentSettings.letterSpacing > 0;
  }

  if (action === "contrastDark") {
    return currentSettings.contrast === "dark";
  }

  if (action === "contrastLight") {
    return currentSettings.contrast === "light";
  }

  if (action === "highlightTitles") {
    return currentSettings.highlightTitles;
  }

  if (action === "hideImages") {
    return currentSettings.hideImages;
  }

  return false;
};

const runAction = (action: string) => {
  const currentSettings = settings.value;

  if (action === "fontSizeUp" && currentSettings.fontSize < 3) {
    currentSettings.fontSize++;
  }

  if (action === "fontSizeDown" && currentSettings.fontSize > -2) {
    currentSettings.fontSize--;
  }

  if (action === "readableFont") {
    currentSettings.readableFont = !currentSettings.readableFont;
  }

  if (action === "textAlign") {
    const order: TextAlign[] = ["default", "left", "center", "right"];

    const currentIndex = order.indexOf(currentSettings.textAlign);

    currentSettings.textAlign =
      order[(currentIndex + 1) % order.length] ?? "default";
  }

  if (action === "lineHeight") {
    currentSettings.lineHeight = (currentSettings.lineHeight + 1) % 4;
  }

  if (action === "letterSpacing") {
    currentSettings.letterSpacing = (currentSettings.letterSpacing + 1) % 4;
  }

  if (action === "contrastDark") {
    currentSettings.contrast =
      currentSettings.contrast === "dark" ? "default" : "dark";
  }

  if (action === "contrastLight") {
    currentSettings.contrast =
      currentSettings.contrast === "light" ? "default" : "light";
  }

  if (action === "highlightTitles") {
    currentSettings.highlightTitles = !currentSettings.highlightTitles;
  }

  if (action === "hideImages") {
    currentSettings.hideImages = !currentSettings.hideImages;
  }

  update();
};

const closeOnOutsideClick = (event: MouseEvent) => {
  if (!wrapperRef.value?.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

const closeOnEscape = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    isOpen.value = false;
  }
};

onMounted(() => {
  load();
  applySettings();

  document.addEventListener("click", closeOnOutsideClick);
  document.addEventListener("keydown", closeOnEscape);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", closeOnOutsideClick);
  document.removeEventListener("keydown", closeOnEscape);
});
</script>

<template>
  <div ref="wrapperRef" class="a11y-widget relative">
    <button
      type="button"
      class="a11y-trigger z-10 flex h-full aspect-square cursor-pointer items-center justify-center rounded-full bg-light"
      :aria-expanded="isOpen"
      :aria-controls="panelId"
      aria-label="Barrierefreiheits-Menü öffnen"
      @click.stop="isOpen = !isOpen"
    >
      <HumanIcon class="text-[#0D3D45]" />
    </button>

    <div
      v-show="isOpen"
      :id="panelId"
      class="a11y-panel absolute w-fit max-w-[calc(100vw-2rem)] rounded-3xl px-5 py-7 min-[400px]:px-8"
      role="dialog"
      aria-label="Barrierefreiheits-Einstellungen"
    >
      <section class="a11y-section">
        <p class="mb-5 font-heading text-xl font-medium text-dark">Text</p>

        <div
          class="grid grid-cols-[repeat(2,7.5rem)] gap-3 max-[350px]:grid-cols-1"
        >
          <button
            v-for="button in textButtons"
            :key="button.action"
            type="button"
            class="a11y-card flex min-h-30 w-full cursor-pointer flex-col items-center justify-center rounded-md bg-light px-2 py-3 text-dark"
            :class="{ active: isActive(button.action) }"
            :aria-pressed="isActive(button.action)"
            @click="runAction(button.action)"
          >
            <component :is="button.icon" aria-hidden="true" />

            <span
              class="a11y-label mt-3.5 text-center font-heading text-xs font-medium leading-tight"
            >
              {{ button.label }}
            </span>
          </button>
        </div>
      </section>

      <section class="a11y-section">
        <p class="mb-5 font-heading text-xl font-medium text-dark">Kontrast</p>

        <div
          class="grid grid-cols-[repeat(2,7.5rem)] gap-3 max-[350px]:grid-cols-1"
        >
          <button
            v-for="button in contrastButtons"
            :key="button.action"
            type="button"
            class="a11y-card flex min-h-30 w-full cursor-pointer flex-col items-center justify-center rounded-md bg-light px-2 py-3 text-dark"
            :class="{ active: isActive(button.action) }"
            :aria-pressed="isActive(button.action)"
            @click="runAction(button.action)"
          >
            <component :is="button.icon" aria-hidden="true" />

            <span
              class="a11y-label mt-3.5 text-center font-heading text-xs font-medium leading-tight"
            >
              {{ button.label }}
            </span>
          </button>
        </div>
      </section>

      <section class="a11y-section">
        <p class="mb-5 font-heading text-xl font-medium text-dark">Inhalte</p>

        <div
          class="grid grid-cols-[repeat(2,7.5rem)] gap-3 max-[350px]:grid-cols-1"
        >
          <button
            v-for="button in contentButtons"
            :key="button.action"
            type="button"
            class="a11y-card flex min-h-30 w-full cursor-pointer flex-col items-center justify-center rounded-md bg-light px-2 py-3 text-dark"
            :class="{ active: isActive(button.action) }"
            :aria-pressed="isActive(button.action)"
            @click="runAction(button.action)"
          >
            <component :is="button.icon" aria-hidden="true" />

            <span
              class="a11y-label mt-3.5 text-center font-heading text-xs font-medium leading-tight"
            >
              {{ button.label }}
            </span>
          </button>
        </div>
      </section>

      <Button class="w-full" @click="reset"> Zurücksetzen </Button>
    </div>
  </div>
</template>

<style scoped>
.a11y-panel {
  left: 0;
  bottom: calc(100% + 24px);
  z-index: 9999;
  background: #e3e5e6;
}

@media (min-width: 1280px) {
  .a11y-panel {
    top: calc(100% + 24px);
    right: 0;
    left: auto;
    bottom: auto;
  }
}
.a11y-section {
  position: relative;
  margin-bottom: 18px;
}

.a11y-card:focus-visible {
  outline: 3px solid #0a1f2e;
  outline-offset: 2px;
}

.a11y-card.active {
  border-color: #0a1f2e;
  background: #0a1f2e;
  color: #fff;
}

@media (prefers-reduced-motion: reduce) {
  .a11y-trigger,
  .a11y-card {
    transition: none;
  }
}
</style>

<style>
.a11y-readable-font,
.a11y-readable-font * {
  font-family: Arial, Verdana, Tahoma, sans-serif !important;
}

.a11y-align-left main,
.a11y-align-left main * {
  text-align: left !important;
}

.a11y-align-center main,
.a11y-align-center main * {
  text-align: center !important;
}

.a11y-align-right main,
.a11y-align-right main * {
  text-align: right !important;
}

.a11y-line-height main p,
.a11y-line-height main li {
  line-height: var(--a11y-line-height) !important;
}

.a11y-letter-spacing main p,
.a11y-letter-spacing main h1,
.a11y-letter-spacing main h2 {
  letter-spacing: var(--a11y-letter-spacing) !important;
}

.a11y-contrast-dark body,
.a11y-contrast-dark main {
  background: #000 !important;
  color: #fff !important;
}

.a11y-contrast-dark h1,
.a11y-contrast-dark h2,
.a11y-contrast-dark p {
  color: #fff !important;
}

.a11y-contrast-dark main a {
  color: #ffe46b !important;
}

.a11y-contrast-light body,
.a11y-contrast-light main {
  background: #fff !important;
  color: #000 !important;
}

.a11y-contrast-light h1,
.a11y-contrast-light h2,
.a11y-contrast-light h3,
.a11y-contrast-light button,
.a11y-contrast-light p {
  color: #000 !important;
}

.a11y-contrast-light article.info-card,
.a11y-contrast-light article.icon-card,
.a11y-contrast-light article.accordion-card,
.a11y-contrast-light footer {
  background: #f8f8f6 !important;
}

.a11y-contrast-light main a {
  color: #0000ee !important;
}

.a11y-highlight-links main a {
  padding: 2px 4px;
  background: #fff8b0 !important;
  color: #000 !important;
  outline: 2px solid #ffeb3b !important;
  text-decoration: underline !important;
}

.a11y-highlight-titles main h1,
.a11y-highlight-titles main h2,
.a11y-highlight-titles main h3 {
  padding: 6px !important;
  background: #e3f2fd !important;
  color: #0a1f2e !important;
  outline: 2px dashed #2196f3 !important;
}

.a11y-hide-images main img,
.a11y-hide-images main picture,
.a11y-hide-images main video {
  visibility: hidden !important;
}
</style>
