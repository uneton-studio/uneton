<script setup lang="ts">
import Button from "@/components/shared/Button.vue";
import { hero } from "./data";
</script>

<template>
  <section aria-labelledby="hero-title" class="hero container">
    <h1 id="hero-title" class="mb-3">{{ hero.title }}</h1>
    <p class="text--extra-large mb-5">
      {{ hero.description }}
    </p>
    <div>
      <Button
        v-for="(button, index) in hero.buttons"
        :variant="button.variant"
        color="white"
        :class="index !== hero.buttons.length - 1 ? 'me-3' : ''"
      >
        {{ button.label }}
      </Button>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-bottom: 7.5rem;
}
</style>
