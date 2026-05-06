<script setup lang="ts">
import BarrierFree from "@/components/views/home/BarrierFree.vue";
import Hero from "@/components/views/home/Hero.vue";
import Mission from "@/components/views/home/Mission.vue";
import Principles from "@/components/views/home/Principles.vue";
import Process from "@/components/views/home/Process.vue";
import Questions from "@/components/views/home/Questions.vue";
import Services from "@/components/views/home/Services.vue";
import Standards from "@/components/views/home/Standards.vue";
</script>

<template>
  <main class="home-view mt-40">
    <Hero />
    <Services />
    <Process />
    <Mission />
    <Principles />
    <BarrierFree />
    <Standards />
    <Questions />
  </main>
</template>
