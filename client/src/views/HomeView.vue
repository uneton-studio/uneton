<script setup lang="ts">
import BarrierFree from "@/components/views/home/BarrierFree.vue";
import Hero from "@/components/views/home/Hero.vue";
import Mission from "@/components/views/home/Mission.vue";
import Principles from "@/components/views/home/Principles.vue";
import Process from "@/components/views/home/Process.vue";
import Services from "@/components/views/home/Services.vue";
</script>

<template>
  <main class="home-view">
    <Hero />
    <Services />
    <Process />
    <Mission />
    <Principles />
    <BarrierFree />
  </main>
</template>

<style scoped>
main {
  margin-top: 10rem;
}
</style>
