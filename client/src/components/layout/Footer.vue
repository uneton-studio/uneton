<script setup lang="ts">
import { globalService, type Global } from "@/api/global/global.service";
import { getImageSrc } from "@/utils/utils";
import { computed, onMounted, ref } from "vue";
import Button from "../shared/Button.vue";

const global = ref<Global | null>(null);
const error = ref<string | null>(null);

const logoSrc = computed(() =>
  getImageSrc(global.value?.footer.logo?.url || ""),
);
const logoSmallSrc = computed(() =>
  getImageSrc(global.value?.footer.logoSmall?.url || ""),
);
const copyrightIconSrc = computed(() =>
  getImageSrc(global.value?.footer.copyright.icon?.url || ""),
);

const currentYear = new Date().getFullYear();

onMounted(async () => {
  try {
    const res = await globalService.getGlobal();
    global.value = res.data;
  } catch (e) {
    error.value = e instanceof Error ? e.message : "Failed to load";
  }
});
</script>

<template>
  <footer v-if="global?.footer">
    <div class="container pt-20 sm:pt-22 xl:pt-30 pb-26 sm:pb-8 xl:pb-21">
      <div
        class="flex-col sm:flex-row sm:gap-5 flex justify-between mb-25 sm:mb-29 xl:mb-60"
      >
        <div v-if="global.footer.newsletter" class="mb-20 sm:mb-0">
          <p
            class="font-heading text-2xl leading-8 max-w-70 xl:text-5xl xl:leading-12 xl:max-w-215 mb-6"
          >
            {{ global.footer.newsletter.label }}
          </p>
          <Button variant="outlined">
            {{ global.footer.newsletter.button.label }}
          </Button>
        </div>
        <div class="flex gap-10">
          <nav
            v-for="nav in global.footer.linkBlocks"
            :key="nav.id"
            :aria-label="nav.label"
          >
            <p class="font-heading text-2xl leading-8 mb-8">{{ nav.label }}</p>
            <ul class="flex flex-col gap-4">
              <li v-for="link in nav.links" :key="link.id">
                <a
                  :href="link.href"
                  class="font-heading text-sm leading-5 xl:text-base xl:leading-5 no-underline"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="hidden sm:flex items-end justify-between">
        <div
          v-if="global.footer.copyright"
          class="flex items-center justify-center"
        >
          <img
            :src="copyrightIconSrc"
            :alt="global.footer.copyright.icon.alternativeText || ''"
            class="w-4 h-4 xl:w-6.5 xl:h-6.5"
          />
          <p
            class="font-heading text-base leading-5 xl:text-2xl xl:leading-8 ms-2"
          >
            {{ global.footer.copyright.label }} {{ currentYear }}
          </p>
        </div>
        <div>
          <img
            v-if="logoSmallSrc"
            :src="logoSmallSrc"
            aria-hidden="true"
            class="w-17 h-17 xl:w-37 xl:h-37"
          />
        </div>
      </div>
      <div class="block sm:hidden">
        <img
          v-if="logoSrc"
          :src="logoSrc"
          :alt="global.footer.logo.alternativeText || ''"
          class="w-100"
        />
      </div>
    </div>
  </footer>
</template>
