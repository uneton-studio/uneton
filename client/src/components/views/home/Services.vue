<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import TableRow from "@/components/shared/TableRow.vue";
import { services } from "./data";
</script>

<template>
  <section aria-labelledby="leistungen-title" class="services">
    <div class="container">
      <SectionHeader
        :title="services.title"
        heading-id="leistungen-title"
        theme="dark"
      ></SectionHeader>
      <div v-if="services?.items?.length">
        <TableRow
          v-for="(service, index) in services.items"
          :key="service.id"
          :title="service.title"
          :items="service.items"
          :description="service.description || ''"
          :icon="service.icon"
          :with-bottom-border="index !== services.items.length - 1"
          theme="dark"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: var(--color-background-light-soft);
  padding-bottom: 6.25rem;
}

.section-header {
  margin-bottom: 2.5rem;
}
</style>
