<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

type TextAlign = "default" | "left" | "center" | "right";
type Contrast = "default" | "dark" | "light" | "high";

interface A11ySettings {
  fontSize: number;
  readableFont: boolean;
  textAlign: TextAlign;
  lineHeight: number;
  letterSpacing: number;
  contrast: Contrast;
  highlightLinks: boolean;
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
  highlightLinks: false,
  highlightTitles: false,
  hideImages: false,
};

const isOpen = ref(false);
const wrapperRef = ref<HTMLElement | null>(null);
const settings = ref<A11ySettings>({ ...defaults });

const panelId = `a11y-panel-${Math.random().toString(36).slice(2, 9)}`;

const textButtons = [
  { action: "fontSizeUp", icon: "A+", label: "Text größer" },
  { action: "fontSizeDown", icon: "A−", label: "Text kleiner" },
  { action: "readableFont", icon: "Tt", label: "Lesbare Schrift" },
  { action: "textAlign", icon: "≡", label: "Textausrichtung" },
  { action: "lineHeight", icon: "↕", label: "Zeilenhöhe" },
  { action: "letterSpacing", icon: "↔", label: "Textabstand" },
] as const;

const contrastButtons = [
  { action: "contrastDark", label: "Dunkler Kontrast", circle: "dark" },
  { action: "contrastLight", label: "Heller Kontrast", circle: "light" },
  { action: "contrastHigh", label: "Hoher Kontrast", circle: "high" },
] as const;

const contentButtons = [
  { action: "highlightLinks", icon: "🔗", label: "Links hervorheben" },
  { action: "highlightTitles", icon: "H", label: "Titel hervorheben" },
  { action: "hideImages", icon: "🖼", label: "Bilder ausblenden" },
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

  settings.value = {
    ...defaults,
    ...JSON.parse(stored),
  };
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

  root.classList.remove(
    "a11y-contrast-dark",
    "a11y-contrast-light",
    "a11y-contrast-high",
  );

  if (settings.value.contrast !== "default") {
    root.classList.add(`a11y-contrast-${settings.value.contrast}`);
  }

  root.classList.toggle("a11y-highlight-links", settings.value.highlightLinks);
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
  const s = settings.value;

  if (action === "fontSizeUp") return s.fontSize > 0;
  if (action === "fontSizeDown") return s.fontSize < 0;
  if (action === "readableFont") return s.readableFont;
  if (action === "textAlign") return s.textAlign !== "default";
  if (action === "lineHeight") return s.lineHeight > 0;
  if (action === "letterSpacing") return s.letterSpacing > 0;
  if (action === "contrastDark") return s.contrast === "dark";
  if (action === "contrastLight") return s.contrast === "light";
  if (action === "contrastHigh") return s.contrast === "high";
  if (action === "highlightLinks") return s.highlightLinks;
  if (action === "highlightTitles") return s.highlightTitles;
  if (action === "hideImages") return s.hideImages;

  return false;
};

const runAction = (action: string) => {
  const s = settings.value;

  if (action === "fontSizeUp" && s.fontSize < 3) s.fontSize++;
  if (action === "fontSizeDown" && s.fontSize > -2) s.fontSize--;
  if (action === "readableFont") s.readableFont = !s.readableFont;

  if (action === "textAlign") {
    const order: TextAlign[] = ["default", "left", "center", "right"];
    s.textAlign =
      order[(order.indexOf(s.textAlign) + 1) % order.length] ?? "default";
  }

  if (action === "lineHeight") s.lineHeight = (s.lineHeight + 1) % 4;
  if (action === "letterSpacing") s.letterSpacing = (s.letterSpacing + 1) % 4;

  if (action === "contrastDark") {
    s.contrast = s.contrast === "dark" ? "default" : "dark";
  }

  if (action === "contrastLight") {
    s.contrast = s.contrast === "light" ? "default" : "light";
  }

  if (action === "contrastHigh") {
    s.contrast = s.contrast === "high" ? "default" : "high";
  }

  if (action === "highlightLinks") s.highlightLinks = !s.highlightLinks;
  if (action === "highlightTitles") s.highlightTitles = !s.highlightTitles;
  if (action === "hideImages") s.hideImages = !s.hideImages;

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
  <div ref="wrapperRef" class="a11y-widget">
    <button
      type="button"
      class="a11y-trigger"
      :aria-expanded="isOpen"
      :aria-controls="panelId"
      aria-label="Barrierefreiheits-Menü öffnen"
      @click.stop="isOpen = !isOpen"
    >
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <circle cx="12" cy="4" r="2" fill="currentColor" />
        <path
          d="M19 8H5a1 1 0 0 0 0 2h5v3l-2.5 7a1 1 0 0 0 1.9.7L12 15l1.6 5.7a1 1 0 0 0 1.9-.7L13 13v-3h6a1 1 0 0 0 0-2z"
          fill="currentColor"
        />
      </svg>
    </button>

    <div
      v-show="isOpen"
      :id="panelId"
      class="a11y-panel"
      role="dialog"
      aria-label="Barrierefreiheits-Einstellungen"
    >
      <section class="a11y-section">
        <h3 class="a11y-section-title">Text</h3>

        <div class="a11y-grid">
          <button
            v-for="button in textButtons"
            :key="button.action"
            type="button"
            class="a11y-card"
            :class="{ active: isActive(button.action) }"
            :aria-pressed="isActive(button.action)"
            @click="runAction(button.action)"
          >
            <span class="a11y-icon">{{ button.icon }}</span>
            <span class="a11y-label">{{ button.label }}</span>
          </button>
        </div>
      </section>

      <section class="a11y-section">
        <h3 class="a11y-section-title">Kontrast</h3>

        <div class="a11y-grid">
          <button
            v-for="button in contrastButtons"
            :key="button.action"
            type="button"
            class="a11y-card"
            :class="{ active: isActive(button.action) }"
            :aria-pressed="isActive(button.action)"
            @click="runAction(button.action)"
          >
            <span
              class="a11y-circle"
              :class="`a11y-circle--${button.circle}`"
            ></span>
            <span class="a11y-label">{{ button.label }}</span>
          </button>
        </div>
      </section>

      <section class="a11y-section">
        <h3 class="a11y-section-title">Inhalte</h3>

        <div class="a11y-grid">
          <button
            v-for="button in contentButtons"
            :key="button.action"
            type="button"
            class="a11y-card"
            :class="{ active: isActive(button.action) }"
            :aria-pressed="isActive(button.action)"
            @click="runAction(button.action)"
          >
            <span class="a11y-icon">{{ button.icon }}</span>
            <span class="a11y-label">{{ button.label }}</span>
          </button>
        </div>
      </section>

      <button type="button" class="a11y-reset" @click="reset">
        Zurücksetzen
      </button>
    </div>
  </div>
</template>

<style scoped>
.a11y-widget {
  position: relative;
}

.a11y-trigger {
  display: inline-flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 9999px;
  background: #fff;
  color: #0a1f2e;
  cursor: pointer;
  transition: all 0.2s ease;
}

.a11y-trigger:hover,
.a11y-trigger:focus-visible {
  outline: 3px solid #ffd700;
  outline-offset: 2px;
}

.a11y-panel {
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  z-index: 9999;
  width: min(340px, calc(100vw - 2rem));
  max-height: 80vh;
  overflow-y: auto;
  padding: 20px;
  border-radius: 20px;
  background: #f5f1e8;
  color: #0a1f2e;
  box-shadow: 0 10px 40px rgb(0 0 0 / 25%);
}

.a11y-panel::before {
  position: absolute;
  top: -8px;
  right: 14px;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  background: #f5f1e8;
  content: "";
  transform: rotate(45deg);
}

.a11y-section {
  position: relative;
  margin-bottom: 18px;
}

.a11y-section-title {
  margin: 0 0 12px;
  color: #0a1f2e;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
}

.a11y-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.a11y-card {
  display: flex;
  min-height: 88px;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 2px solid #fff;
  border-radius: 14px;
  background: #fff;
  color: #0a1f2e;
  font-family: inherit;
  transition: all 0.15s ease;
}

.a11y-card:hover {
  border-color: #0a1f2e;
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

.a11y-icon {
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
}

.a11y-label {
  font-size: 11px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
}

.a11y-circle {
  width: 20px;
  height: 20px;
  border: 2px solid #0a1f2e;
  border-radius: 9999px;
}

.a11y-circle--dark {
  background: #0a1f2e;
}

.a11y-circle--light {
  background: #fff;
}

.a11y-circle--high {
  background: linear-gradient(90deg, #0a1f2e 50%, #fff 50%);
}

.a11y-card.active .a11y-circle {
  border-color: #fff;
}

.a11y-reset {
  width: 100%;
  margin-top: 4px;
  padding: 10px;
  cursor: pointer;
  border: 2px solid #0a1f2e;
  border-radius: 8px;
  background: transparent;
  color: #0a1f2e;
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
}

.a11y-reset:hover,
.a11y-reset:focus-visible {
  background: #0a1f2e;
  color: #fff;
  outline: 3px solid #ffd700;
  outline-offset: 2px;
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
.a11y-contrast-light p {
  color: #000 !important;
}

.a11y-contrast-light main a {
  color: #0000ee !important;
}

.a11y-contrast-high body,
.a11y-contrast-high main {
  background: #000 !important;
  color: #ffff00 !important;
}

.a11y-contrast-high h1,
.a11y-contrast-high h2,
.a11y-contrast-high p {
  color: #ffff00 !important;
}

.a11y-contrast-high main a {
  color: #00ffff !important;
  text-decoration: underline !important;
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
