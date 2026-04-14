<template>
  <footer v-if="global" class="greetings">
    <div class="container">
      <nav v-for="nav in global.footer.linkBlocks" :key="nav.id">
        <p>{{ nav.label }}</p>
        <div>
          <p v-for="link in nav.links" :key="link.id">
            <a :href="link.href" class="text-white text-decoration-none small">
              {{ link.label }}
            </a>
          </p>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { globalService, type Global } from "@/api/global/global.service";
import { onMounted, ref } from "vue";

const global = ref<Global | null>(null);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const res = await globalService.getGlobal();
    global.value = res.data;
  } catch (e) {
    error.value = e instanceof Error ? e.message : "Failed to load";
  }
});
</script>
