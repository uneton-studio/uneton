<template>
  <div class="relative h-17 w-17 mt-2">
    <svg viewBox="0 0 68 68" class="h-full w-full" fill="none">
      <!-- White background ring -->
      <circle cx="34" cy="34" r="28" stroke="white" stroke-width="6.5" />

      <!-- Green progress ring -->
      <circle
        cx="34"
        cy="34"
        r="28"
        stroke="#0B5D64"
        stroke-width="6.5"
        stroke-linecap="round"
        stroke-dasharray="142 176"
        stroke-dashoffset="0"
        transform="rotate(-115 34 34)"
      />

      <!-- Purple dot on start of green stroke -->
      <circle cx="22.5" cy="8.5" r="4" fill="#DBCBFC" />
    </svg>

    <!-- Phone icon -->
    <div
      class="absolute top-1/2 left-1/2 flex h-6 w-3.75 -translate-x-1/2 -translate-y-1/2 items-start justify-center rounded-sm bg-[#A9ADB9]"
    >
      <div class="mt-0.75 h-0.75 w-1.75 rounded-full bg-[#353E5C]"></div>
    </div>
  </div>
</template>
