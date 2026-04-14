<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import { process } from "./data/home";
</script>

<template>
  <section aria-labelledby="process-title" class="process">
    <div class="container">
      <SectionHeader
        :title="process.title"
        :description="process.description"
        heading-id="process-title"
        theme="light"
      ></SectionHeader>
    </div>
  </section>
</template>
