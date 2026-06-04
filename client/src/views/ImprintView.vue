<script setup lang="ts">
import { imprintService, type Imprint } from "@/api/imprint/imprint.service";
import RichTextRenderer from "@/components/shared/rich-text/RichTextRenderer.vue";
import { onMounted, ref } from "vue";

const imprint = ref<Imprint | null>(null);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const res = await imprintService.getImprint();
    imprint.value = res.data;
    console.log(imprint.value);
  } catch (e) {
    error.value = e instanceof Error ? e.message : "Failed to load";
  }
});
</script>

<template>
  <main class="imprint-view">
    <section
      v-if="imprint"
      aria-labelledby="imprint-title"
      class="imprint bg-light pt-30 pb-30 md:pt-40 xl:pt-50 xl:pb-60"
    >
      <div class="container">
        <h1
          id="imprint-title"
          class="text-dark text-[1.75rem] font-body font-medium mb-8"
        >
          {{ imprint.title }}
        </h1>
        <RichTextRenderer :content="imprint.content" />
      </div>
    </section>
  </main>
</template>
