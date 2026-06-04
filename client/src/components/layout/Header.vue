<script setup lang="ts">
import { globalService, type Global } from "@/api/global/global.service";
import { getImageSrc } from "@/utils/utils";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import Button from "../shared/Button.vue";
import DotsIcon from "../icons/DotsIcon.vue";
import A11yWidget from "./A11yWidget.vue";

const route = useRoute();

const global = ref<Global | null>(null);
const error = ref<string | null>(null);
const isScrolled = ref(false);

const isHomePage = computed(() => route.path === "/");

const showBackground = computed(() => {
  return !isHomePage.value || isScrolled.value;
});

const logoSrc = computed(() =>
  getImageSrc(global.value?.header.logo?.url || ""),
);

function updateHeaderBackground() {
  isScrolled.value = window.scrollY > 10;
}

onMounted(async () => {
  if (isHomePage.value) {
    window.addEventListener("scroll", updateHeaderBackground, {
      passive: true,
    });

    updateHeaderBackground();
  } else {
    isScrolled.value = true;
  }

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
        class="mx-auto flex max-w-425 w-4/5 sm:w-auto items-center justify-between rounded-full px-6 xl:px-4 py-4 xl:py-3 transition-all duration-300"
        :class="showBackground ? 'bg-dark-mute shadow-md' : 'bg-transparent'"
      >
        <div class="flex items-center md:ps-3">
          <RouterLink to="/">
            <img
              v-if="global.header.logo?.url"
              :src="logoSrc"
              :alt="global.header.logo.alternativeText || ''"
              class="h-4.5 w-auto md:h-8"
            />
          </RouterLink>
        </div>

        <div class="hidden xl:flex gap-12">
          <RouterLink
            v-for="link in global.header.links"
            :key="link.id"
            :to="link.href"
            class="text-light no-underline text-sm"
          >
            {{ link.label }}
          </RouterLink>
        </div>

        <div class="hidden xl:flex items-stretch gap-4">
          <A11yWidget />

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

        <div class="xl:hidden">
          <DotsIcon />
        </div>
      </nav>
    </div>
  </header>

  <p v-else-if="error" class="text-red-500">
    {{ error }}
  </p>
</template>
