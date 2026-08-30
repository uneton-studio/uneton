<script setup lang="ts">
import { computed, ref, watch } from "vue";
import AppLoadingScreen from "./components/layout/AppLoadingScreen.vue";
import Footer from "./components/layout/Footer.vue";
import Header from "./components/layout/Header.vue";
import { useGlobalStore } from "@/stores/global.store";
import { usePageLoadingStore } from "@/stores/page-loading.store";

const PASSWORD = import.meta.env.VITE_PREVIEW_PASSWORD;

const input = ref("");
const unlocked = ref(sessionStorage.getItem("preview-unlocked") === "true");
const passwordError = ref("");

const { error: globalError, isInitialized, loadGlobal } = useGlobalStore();

const { isPageLoading } = usePageLoadingStore();

const isProtected = computed(() => Boolean(PASSWORD));

const hasAccess = computed(() => {
  return !isProtected.value || unlocked.value;
});

function unlock() {
  if (input.value === PASSWORD) {
    sessionStorage.setItem("preview-unlocked", "true");

    unlocked.value = true;
    passwordError.value = "";
    input.value = "";
  } else {
    passwordError.value = "Wrong password";
  }
}

watch(
  hasAccess,
  (hasAccessValue) => {
    if (hasAccessValue) {
      loadGlobal();
    }
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <div
    v-if="!hasAccess"
    class="fixed inset-0 z-9999 flex items-center justify-center bg-black px-6"
  >
    <form
      class="w-full max-w-md rounded-3xl border border-white/10 bg-neutral-900 p-8"
      @submit.prevent="unlock"
    >
      <h1 class="mb-6 text-3xl font-bold text-white">Preview protected</h1>

      <input
        v-model="input"
        type="password"
        placeholder="Password"
        autocomplete="current-password"
        class="mb-4 w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-white outline-none"
      />

      <button
        type="submit"
        class="w-full rounded-xl bg-white px-4 py-3 font-semibold text-black"
      >
        Enter
      </button>

      <p v-if="passwordError" class="mt-4 text-sm text-red-400">
        {{ passwordError }}
      </p>
    </form>
  </div>

  <AppLoadingScreen v-else-if="!isInitialized" />

  <div
    v-else-if="globalError"
    class="flex min-h-screen items-center justify-center px-6"
  >
    <div class="max-w-md text-center">
      <h1 class="text-2xl font-semibold">
        Die Seite konnte nicht geladen werden
      </h1>

      <p class="mt-3 text-sm">
        {{ globalError }}
      </p>
    </div>
  </div>

  <div v-else class="flex min-h-screen flex-col">
    <Header />

    <!-- <div class="fixed z-50 bottom-6 left-6"><A11yWidget /></div> -->

    <main class="relative flex-1">
      <AppLoadingScreen v-if="isPageLoading" :fullscreen="false" />

      <RouterView v-show="!isPageLoading" />
    </main>

    <Footer v-if="!isPageLoading" />
  </div>
</template>
