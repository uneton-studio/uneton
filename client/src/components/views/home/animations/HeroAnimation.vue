<template>
  <div class="relative mx-auto h-[280px] w-[280px] scale-[0.93]">
    <div
      class="animate-spin-right absolute left-[75px] top-[75px] h-[150px] w-[150px] rounded-full border-2 border-dashed border-white"
    >
      <div
        class="absolute -left-1.5 top-[62px] h-2.5 w-2.5 rounded-full bg-white"
      />
    </div>

    <div
      class="animate-spin-right-slow absolute left-[35px] top-[35px] h-[225px] w-[225px] rounded-full border-2 border-dashed border-white"
    >
      <div
        class="absolute left-[17px] top-[25px] h-5 w-5 rounded-full bg-[#50fbdc]"
      />
    </div>

    <div
      class="animate-spin-right-slower absolute left-0 top-0 h-[294px] w-[294px] rounded-full border-2 border-dashed border-white"
    >
      <div
        class="absolute left-[125px] top-[-17px] h-[30px] w-[30px] rounded-full bg-[#8e7dff]"
      />
    </div>
  </div>
</template>

<style scoped>
@keyframes spin-right {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-right {
  animation: spin-right 10s linear infinite;
}

.animate-spin-right-slow {
  animation: spin-right 15s linear infinite;
}

.animate-spin-right-slower {
  animation: spin-right 20s linear infinite;
}
</style>
