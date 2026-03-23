<template>
  <header v-if="global" class="py-3">
    <div class="container">
      <div
        class="d-flex align-items-center justify-content-between rounded-pill px-4 py-2"
      >
        <div class="d-flex align-items-center">
          <img
            v-if="global.header.logo?.url"
            :src="logoSrc"
            :alt="global.header.logo.alternativeText"
            height="32"
          />
        </div>

        <nav class="d-none d-md-flex gap-4">
          <a
            v-for="link in global.header.links"
            :key="link.id"
            :href="link.href"
            class="text-white text-decoration-none small"
          >
            {{ link.label }}
          </a>
        </nav>

        <div>
          <a
            v-for="btn in global.header.buttons"
            :key="btn.id"
            :href="btn.href"
            class="btn btn-light rounded-pill px-4"
          >
            {{ btn.label }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { globalService, type Global } from "@/api/global/global.service";
import { getImageSrc } from "@/utils/utils";
import { computed, onMounted, ref } from "vue";

const global = ref<Global | null>(null);
const error = ref<string | null>(null);
const logoSrc = computed(() =>
  getImageSrc(global.value?.header.logo?.url || ""),
);

onMounted(async () => {
  try {
    const res = await globalService.getGlobal();
    global.value = res.data;
  } catch (e) {
    error.value = e instanceof Error ? e.message : "Failed to load";
  }
});
</script>

<style scoped></style>
