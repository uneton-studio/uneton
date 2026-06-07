<script setup lang="ts">
import type {
  StrapiRichTextLink,
  StrapiRichTextNode,
} from "@/types/strapi.interface";

defineProps<{
  node: StrapiRichTextNode | StrapiRichTextLink;
}>();
</script>

<template>
  <a
    v-if="node.type === 'link'"
    :href="node.url"
    :target="node.target || undefined"
    rel="noopener noreferrer"
    class="underline"
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
