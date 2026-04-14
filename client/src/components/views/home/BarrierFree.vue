<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import { barrierFree } from "./data/home";
</script>

<template>
  <section aria-labelledby="barrier-free-title" class="barrier-free">
    <div class="container">
      <SectionHeader
        :title="barrierFree.title"
        :description="barrierFree.description"
        heading-id="barrier-free-title"
        theme="light"
      ></SectionHeader>
    </div>
  </section>
</template>
