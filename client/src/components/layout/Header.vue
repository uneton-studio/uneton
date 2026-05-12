<script setup lang="ts">
import { globalService, type Global } from "@/api/global/global.service";
import { getImageSrc } from "@/utils/utils";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import Button from "../shared/Button.vue";
import DotsIcon from "../icons/DotsIcon.vue";
import A11yWidget from "./A11yWidget.vue";

const global = ref<Global | null>(null);
const error = ref<string | null>(null);
const isScrolled = ref(false);

const logoSrc = computed(() =>
  getImageSrc(global.value?.header.logo?.url || ""),
);

function updateHeaderBackground() {
  isScrolled.value = window.scrollY > 10;
}

onMounted(async () => {
  window.addEventListener("scroll", updateHeaderBackground, { passive: true });
  updateHeaderBackground();

  try {
    const res = await globalService.getGlobal();
    global.value = res.data;
  } catch (e) {
    error.value = e instanceof Error ? e.message : "Failed to load";
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateHeaderBackground);
});
</script>

<template>
  <header v-if="global" class="fixed top-0 z-50 w-full pt-5">
    <div class="px-4">
      <nav
        aria-label="Hauptnavigation"
        class="mx-auto flex max-w-425 items-center justify-between rounded-full px-6 md:px-4 py-4 md:py-3 transition-all duration-300"
        :class="isScrolled ? 'bg-dark-mute shadow-md' : 'bg-transparent'"
      >
        <div class="flex items-center md:ps-3">
          <img
            v-if="global.header.logo?.url"
            :src="logoSrc"
            :alt="global.header.logo.alternativeText"
            class="h-4.5 w-auto md:h-8"
          />
        </div>

        <div class="hidden md:flex gap-12">
          <RouterLink
            v-for="link in global.header.links"
            :key="link.id"
            :to="link.href"
            class="text-light no-underline text-sm"
            >{{ link.label }}</RouterLink
          >
        </div>

        <div class="hidden md:flex">
          <A11yWidget class="me-4" />
          <Button
            v-for="btn in global.header.buttons"
            :key="btn.id"
            :href="btn.href"
            variant="filled"
            color="white"
          >
            {{ btn.label }}
          </Button>
        </div>

        <div class="md:hidden">
          <DotsIcon />
        </div>
      </nav>
    </div>
  </header>
</template>
