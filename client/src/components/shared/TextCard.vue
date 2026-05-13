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
  <article class="bg-light-soft rounded-3xl xl:rounded-4xl p-6 flex flex-col">
    <header>
      <h3 v-if="title" class="text-dark font-medium mb-4">
        {{ title }}
      </h3>

      <p
        v-if="description"
        class="text-[0.75rem] leading-[1.125rem] md:text-[1.125rem] md:leading-[1.75rem] text-dark mb-[1.5rem]"
      >
        {{ description }}
      </p>

      <div v-if="items?.length">
        <div v-for="pill in items" :key="pill">
          <TextPill
            :label="pill"
            prefix="+"
            theme="light"
            as="p"
            class="mb-[0.5rem]"
          />
        </div>
      </div>
    </header>

    <footer v-if="button" class="mt-auto">
      <Button
        :variant="button.variant"
        color="black"
        theme="dark"
        class="mt-[1rem] w-full"
      >
        {{ button.label }}
      </Button>
    </footer>
  </article>
</template>
