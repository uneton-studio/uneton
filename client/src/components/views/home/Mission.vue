<script setup lang="ts">
import SectionHeader from "@/components/shared/SectionHeader.vue";
import { mission } from "./data";
</script>

<template>
  <section
    aria-labelledby="mission-title"
    class="mission bg-light-soft pb-[17.25rem]"
  >
    <div class="container">
      <SectionHeader
        :title="mission.title"
        heading-id="mission-title"
        theme="dark"
      ></SectionHeader>

      <p
        v-html="mission.body"
        class="text-dark text-2xl leading-7 md:text-[2.625rem] md:leading-9 font-light mt-[7.5rem] max-w-[74rem]"
      ></p>
    </div>
  </section>
</template>
