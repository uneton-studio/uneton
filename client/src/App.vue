<script setup lang="ts">
import { computed, ref } from "vue";
import Footer from "./components/layout/Footer.vue";
import Header from "./components/layout/Header.vue";

const PASSWORD = import.meta.env.VITE_PREVIEW_PASSWORD;

const input = ref("");
const unlocked = ref(sessionStorage.getItem("preview-unlocked") === "true");
const error = ref("");

const isProtected = computed(() => Boolean(PASSWORD));

function unlock() {
  if (input.value === PASSWORD) {
    sessionStorage.setItem("preview-unlocked", "true");
    unlocked.value = true;
    error.value = "";
  } else {
    error.value = "Wrong password";
  }
}
</script>

<template>
  <div
    v-if="isProtected && !unlocked"
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

      <p v-if="error" class="mt-4 text-sm text-red-400">
        {{ error }}
      </p>
    </form>
  </div>

  <template v-else>
    <Header />
    <RouterView />
    <Footer />
  </template>
</template>
