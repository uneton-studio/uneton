<script setup lang="ts">
import { hero } from "./data";
import StatCard from "@/components/shared/StatCard.vue";
import HeroContent from "./HeroContent.vue";
</script>

<template>
  <section aria-labelledby="hero-title" class="xl:min-h-[70vh]">
    <div
      class="container hidden xl:min-h-[70vh] items-end gap-20 2xl:gap-40 pb-22 xl:flex"
    >
      <div class="min-w-0 flex-1">
        <HeroContent />
      </div>

      <div class="relative shrink-0">
        <img
          src="../../../assets/images/fernsehturm.webp"
          alt="..."
          class="aspect-75/67 h-auto rounded-3xl object-cover xl:w-2xl 2xl:w-auto 2xl:max-w-204"
        />

        <div class="absolute right-5 bottom-3">
          <StatCard
            v-for="item in hero.items"
            :key="item.id"
            :title="item.title"
            :value="item.subtitle || ''"
            :description="item.description || ''"
            :eyebrow="item.eyebrow"
            class="mb-2"
          >
            <component v-if="item.icon" :is="item.icon" aria-hidden="true" />
          </StatCard>
        </div>
      </div>
    </div>

    <div class="hidden items-center justify-center sm:flex xl:hidden">
      <div class="w-1/2 container">
        <HeroContent />
      </div>

      <div class="w-1/2">
        <img
          src="../../../assets/images/fernsehturm.webp"
          alt="Low-angle view of Berlin's Fernsehturm TV Tower against a pale blue sky, framed by overhead power lines and a dark railing in the foreground."
          class="object-cover"
        />
      </div>
    </div>
  </section>
</template>
