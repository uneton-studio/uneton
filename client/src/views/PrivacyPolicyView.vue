<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

import RichTextRenderer from "@/components/shared/rich-text/RichTextRenderer.vue";
import { usePrivacyPolicyStore } from "@/stores/privacy-policy.store";
import { usePageLoadingStore } from "@/stores/page-loading.store";

const { privacyPolicy, error, loadPrivacyPolicy } = usePrivacyPolicyStore();

const { startLoading, stopLoading } = usePageLoadingStore();

onMounted(async () => {
  startLoading();

  try {
    await loadPrivacyPolicy();
  } finally {
    stopLoading();
  }
});
</script>

<template>
  <div class="privacy-policy-view">
    <section
      v-if="error"
      class="flex min-h-[70vh] items-center justify-center bg-light px-6"
    >
      <div class="text-center">
        <h1 class="text-dark text-xl font-medium">
          Die Seite konnte nicht geladen werden
        </h1>

        <p class="text-dark mt-3 text-sm">
          {{ error }}
        </p>
      </div>
    </section>

    <section
      v-else-if="privacyPolicy"
      aria-labelledby="privacy-policy-title"
      class="privacy-policy bg-light pt-30 pb-30 md:pt-40 xl:pt-50 xl:pb-60"
    >
      <div class="container">
        <h1
          id="privacy-policy-title"
          class="text-dark mb-8 font-body text-[1.75rem] font-medium"
        >
          {{ privacyPolicy.title }}
        </h1>

        <RichTextRenderer :content="privacyPolicy.content" />
      </div>
    </section>
  </div>
</template>
