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
  <article
    class="w-full bg-light-soft rounded-3xl xl:rounded-4xl p-6 flex flex-col"
  >
    <header>
      <h3
        v-if="title"
        class="text-dark font-medium text-2xl leading-4.5 mb-3 xl:text-[1.75rem] xl:leading-8 xl:mb-4"
      >
        {{ title }}
      </h3>

      <p
        v-if="description"
        class="text-dark text-xs leading-4.5 mb-5 xl:text-base xl:leading-6 xl:mb-6"
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
            class="mb-2 xl:mb-3"
          />
        </div>
      </div>
    </header>

    <footer v-if="button" class="mt-auto">
      <Button
        :variant="button.variant"
        :href="button.href"
        tag="a"
        color="dark-mute"
        class="w-full sm:w-auto sm:min-w-40 xl:min-w-50 mt-12 sm:mt-0"
      >
        {{ button.label }}
      </Button>
    </footer>
  </article>
</template>
