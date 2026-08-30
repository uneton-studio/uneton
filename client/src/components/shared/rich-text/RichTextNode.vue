<script setup lang="ts">
import type { DeepReadonly } from "vue";

import type {
  StrapiRichTextLink,
  StrapiRichTextNode,
} from "@/types/strapi.interface";

type RichTextNodeValue = StrapiRichTextNode | StrapiRichTextLink;

defineProps<{
  node: DeepReadonly<RichTextNodeValue>;
}>();
</script>

<template>
  <a
    v-if="node.type === 'link'"
    :href="node.url"
    :target="node.target || undefined"
    rel="noopener noreferrer"
    class="rich-text-link underline"
  >
    <RichTextNode
      v-for="(child, index) in node.children"
      :key="index"
      :node="child"
    />
  </a>

  <span v-else-if="node.bold" class="font-medium">
    {{ node.text }}
  </span>

  <template v-else>
    {{ node.text }}
  </template>
</template>

<style scoped>
.rich-text-link {
  position: relative;
  outline: none !important;
  border-radius: 0.125rem;
}

.rich-text-link::after {
  content: "";
  position: absolute;
  inset: -6px;
  border: 2px solid transparent;
  border-radius: inherit;
  pointer-events: none;
}

.rich-text-link:focus-visible::after {
  border-color: currentColor;
}
</style>
