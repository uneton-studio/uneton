<script setup lang="ts">
import { getImageSrc } from "@/utils/utils";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useGlobalStore } from "@/stores/global.store";
import Button from "../shared/Button.vue";
import DotsIcon from "../icons/DotsIcon.vue";
import A11yWidget from "./A11yWidget.vue";

const route = useRoute();
const { global } = useGlobalStore();

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const isHomePage = computed(() => route.path === "/");

const showBackground = computed(() => {
  return !isHomePage.value || isScrolled.value || isMobileMenuOpen.value;
});

const logoSrc = computed(() =>
  getImageSrc(global.value?.header.logo?.url ?? ""),
);

function updateHeaderBackground() {
  isScrolled.value = window.scrollY > 10;
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
}

watch(
  () => route.fullPath,
  () => {
    closeMobileMenu();
    updateHeaderBackground();
  },
);

onMounted(() => {
  window.addEventListener("scroll", updateHeaderBackground, {
    passive: true,
  });

  updateHeaderBackground();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateHeaderBackground);
});
</script>

<template>
  <header class="fixed top-0 z-50 w-full pt-5">
    <div class="px-4">
      <nav
        aria-label="Hauptnavigation"
        class="mx-auto flex max-w-425 w-[90%] items-center justify-between rounded-full px-6 py-5 transition-all duration-300 sm:w-auto xl:px-4 xl:py-3"
        :class="showBackground ? 'bg-dark-mute shadow-md' : 'bg-transparent'"
      >
        <div class="flex items-center md:ps-3">
          <RouterLink to="/" @click="closeMobileMenu">
            <img
              v-if="global?.header.logo?.url"
              :src="logoSrc"
              :alt="global?.header.logo?.alternativeText || ''"
              class="h-4.5 xl:h-7 w-auto"
            />
          </RouterLink>
        </div>

        <div class="hidden gap-12 xl:flex">
          <RouterLink
            v-for="link in global?.header.links"
            :key="link.id"
            :to="link.href"
            class="text-light no-underline text-sm"
          >
            {{ link.label }}
          </RouterLink>
        </div>

        <div class="hidden items-stretch gap-4 xl:flex">
          <A11yWidget />

          <Button
            v-for="btn in global?.header.buttons"
            :key="btn.id"
            :href="btn.href"
            variant="filled"
            color="white"
          >
            {{ btn.label }}
          </Button>
        </div>

        <button
          type="button"
          class="xl:hidden"
          :aria-expanded="isMobileMenuOpen"
          :aria-label="isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'"
          @click="toggleMobileMenu"
        >
          <DotsIcon :open="isMobileMenuOpen" />
        </button>
      </nav>

      <Transition name="mobile-menu">
        <div
          v-if="isMobileMenuOpen"
          class="mx-auto sm:ms-auto sm:me-0 mt-4 w-[90%] sm:max-w-100 rounded-3xl bg-dark-mute p-2 xl:hidden"
        >
          <div class="flex flex-col items-center gap-7 pt-4">
            <RouterLink
              v-for="link in global?.header.links"
              :key="link.id"
              :to="link.href"
              class="text-light text-sm no-underline"
              @click="closeMobileMenu"
            >
              {{ link.label }}
            </RouterLink>
          </div>

          <Button
            v-for="btn in global?.header.buttons"
            :key="btn.id"
            :href="btn.href"
            variant="filled"
            color="white"
            class="mt-5 w-full justify-center h-12"
            @click="closeMobileMenu"
          >
            {{ btn.label }}
          </Button>
        </div>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}
</style>
