<script setup lang="ts">
import {
  privacyPolicyService,
  type PrivacyPolicy,
} from "@/api/privacy-policy/privacy-policy.service";
import RichTextRenderer from "@/components/shared/rich-text/RichTextRenderer.vue";
import { onMounted, ref } from "vue";

const privacyPolicy = ref<PrivacyPolicy | null>(null);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const res = await privacyPolicyService.getPrivacyPolicy();
    privacyPolicy.value = res.data;
    console.log(privacyPolicy.value);
  } catch (e) {
    error.value = e instanceof Error ? e.message : "Failed to load";
  }
});
</script>

<template>
  <main class="privacy-policy-view mt-30 md:mt-0 xl:mt-40">
    <section
      v-if="privacyPolicy"
      aria-labelledby="privacy-policy-title"
      class="privacy-policy bg-light pt-30 pb-30 md:pt-40 xl:pt-50 xl:pb-60"
    >
      <div class="container">
        <h1
          id="privacy-policy-title"
          class="text-dark text-[1.75rem] font-body font-medium mb-8"
        >
          {{ privacyPolicy.title }}
        </h1>
        <RichTextRenderer :content="privacyPolicy.content" />
      </div>
    </section>
  </main>
</template>
