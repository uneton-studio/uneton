<template>
  <div
    class="orbit-graphic relative w-65 h-50 xl:w-45 xl:h-36.25"
    aria-hidden="true"
  >
    <div class="orbit orbit--left">
      <div class="orbit__dot"></div>
    </div>

    <div class="orbit orbit--middle">
      <div class="orbit__dot"></div>
    </div>

    <div class="orbit orbit--right">
      <div class="orbit__dot"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes orbit-spin {
  to {
    transform: rotate(360deg);
  }
}

.orbit {
  position: absolute;
  top: 10px;
  width: 180px;
  height: 180px;
  border: 2px solid #000;
  border-radius: 9999px;
  animation: orbit-spin linear infinite;
}

.orbit--left {
  left: 10px;
  border-style: solid;
  animation-duration: 6s;
}

.orbit--middle {
  left: 40px;
  border-style: dashed;
  animation-duration: 10s;
}

.orbit--right {
  left: 70px;
  border-style: dotted;
  animation-duration: 16s;
}

.orbit__dot {
  position: absolute;
  right: -6px;
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  background: #000;
}

.orbit--left .orbit__dot {
  top: calc(50% - 6px);
}

.orbit--middle .orbit__dot,
.orbit--right .orbit__dot {
  top: calc(40% - 6px);
}

/* XL screens */
@media (min-width: 1280px) {
  .orbit {
    width: 120px;
    height: 120px;
  }

  .orbit--left {
    left: 6px;
  }

  .orbit--middle {
    left: 26px;
  }

  .orbit--right {
    left: 46px;
  }

  .orbit__dot {
    right: -4px;
    width: 8px;
    height: 8px;
  }

  .orbit--left .orbit__dot {
    top: calc(50% - 4px);
  }

  .orbit--middle .orbit__dot,
  .orbit--right .orbit__dot {
    top: calc(40% - 4px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .orbit {
    animation: none;
  }
}
</style>
