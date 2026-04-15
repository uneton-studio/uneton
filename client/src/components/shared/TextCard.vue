<script setup lang="ts">
import type { CTAButton } from "../views/home/data";
import Button from "./Button.vue";
import TextPill from "./TextPill.vue";

interface Props {
  title?: string;
  description?: string;
  items?: string[];
  button?: CTAButton;
}

defineProps<Props>();
</script>

<template>
  <article class="bg-light-soft rounded-4 p-3 p-md-4 d-flex flex-column h-100">
    <header>
      <h3 v-if="title" class="text-dark switzer-medium mb-3">
        {{ title }}
      </h3>

      <p v-if="description" class="text--big text-dark mb-4">
        {{ description }}
      </p>

      <div v-if="items?.length">
        <div v-for="pill in items" :key="pill">
          <TextPill
            :label="pill"
            prefix="+"
            theme="light"
            as="p"
            class="mb-2"
          />
        </div>
      </div>
    </header>

    <footer v-if="button" class="mt-auto">
      <Button
        :variant="button.variant"
        color="black"
        theme="dark"
        class="mt-4 w-100"
      >
        {{ button.label }}
      </Button>
    </footer>
  </article>
</template>
