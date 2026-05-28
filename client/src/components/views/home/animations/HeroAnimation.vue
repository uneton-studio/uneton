<template>
  <div class="relative h-69 w-69 rounded-3xl bg-[#001F1F]">
    <!-- Outer orbit -->
    <svg
      class="orbit orbit-slow absolute inset-3.5 h-[248px] w-[248px]"
      viewBox="0 0 248 248"
      fill="none"
    >
      <circle
        cx="124"
        cy="124"
        r="123"
        stroke="white"
        stroke-width="1.5"
        stroke-dasharray="18 8"
      />

      <circle cx="124" cy="1" r="7.5" fill="#DBCBFC" />
    </svg>

    <!-- Middle orbit -->
    <svg
      class="orbit orbit-medium absolute inset-14.5 h-40 w-40"
      viewBox="0 0 160 160"
      fill="none"
    >
      <circle
        cx="80"
        cy="80"
        r="79"
        stroke="white"
        stroke-width="1.5"
        stroke-dasharray="18 8"
      />

      <circle cx="159" cy="80" r="7.5" fill="#9FE3D6" />
    </svg>

    <!-- Inner orbit -->
    <svg
      class="orbit orbit-fast absolute inset-25.5 h-[72px] w-[72px]"
      viewBox="0 0 72 72"
      fill="none"
    >
      <circle
        cx="36"
        cy="36"
        r="35"
        stroke="white"
        stroke-width="1.5"
        stroke-dasharray="18 8"
      />

      <circle cx="1" cy="36" r="7.5" fill="#C7E8FF" />
    </svg>
  </div>
</template>

<style scoped>
.orbit {
  animation-name: spin-clockwise;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  transform-origin: center;
}

.orbit-slow {
  animation-duration: 22s;
}

.orbit-medium {
  animation-duration: 15s;
}

.orbit-fast {
  animation-duration: 10s;
}

@keyframes spin-clockwise {
  to {
    transform: rotate(360deg);
  }
}
</style>
