<script setup lang="ts">
import type { DeepReadonly } from "vue";

import type { ThemeMode } from "@/app.constants";
import type { StrapiRichTextBlock } from "@/types/strapi.interface";

import RichTextNode from "./RichTextNode.vue";

type ReadonlyRichTextBlock = DeepReadonly<StrapiRichTextBlock>;

withDefaults(
  defineProps<{
    content: readonly ReadonlyRichTextBlock[];
    theme?: ThemeMode;
  }>(),
  {
    theme: "dark",
  },
);

function isEmptyParagraph(block: ReadonlyRichTextBlock): boolean {
  return (
    block.type === "paragraph" &&
    block.children.every((child) => {
      if (child.type === "text") {
        return child.text.trim() === "";
      }

      return false;
    })
  );
}
</script>

<template>
  <div
    class="rich-text whitespace-pre-line leading-relaxed"
    :class="{
      'text-light': theme === 'light',
      'text-dark': theme !== 'light',
    }"
  >
    <template v-for="(block, index) in content" :key="index">
      <div v-if="isEmptyParagraph(block)" class="h-4" aria-hidden="true" />

      <p v-else-if="block.type === 'paragraph'" class="mb-0.5 last:mb-0">
        <RichTextNode
          v-for="(child, childIndex) in block.children"
          :key="childIndex"
          :node="child"
        />
      </p>

      <component
        :is="block.format === 'ordered' ? 'ol' : 'ul'"
        v-else-if="block.type === 'list'"
        class="mb-1 list-outside pl-6"
        :class="block.format === 'ordered' ? 'list-decimal' : 'list-disc'"
      >
        <li
          v-for="(item, itemIndex) in block.children"
          :key="itemIndex"
          class="mb-1"
        >
          <RichTextNode
            v-for="(child, childIndex) in item.children"
            :key="childIndex"
            :node="child"
          />
        </li>
      </component>
    </template>
  </div>
</template>
