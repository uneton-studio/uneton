<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import { process } from "./data";
import ProcessAnimation from "@/components/shared/ProcessAnimation.vue";
</script>

<template>
  <section aria-labelledby="process-title" class="process">
    <div class="container">
      <SectionHeader
        :title="process.title"
        :description="process.description"
        heading-id="process-title"
        theme="light"
        class="mb-28 xl:mb-20"
      ></SectionHeader>

      <ProcessAnimation class="mb-36 xl:mb-41" />
    </div>
  </section>
</template>
