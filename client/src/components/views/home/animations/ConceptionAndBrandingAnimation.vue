<template>
  <div
    class="orbit-graphic relative w-65 h-50 xl:w-45 xl:h-36.25 overflow-hidden"
    aria-hidden="true"
  >
    <div class="orbit orbit--right">
      <div class="orbit__dot"></div>
    </div>

    <div class="orbit orbit--left">
      <div class="orbit__dot"></div>
    </div>

    <div class="orbit orbit--top">
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
  width: 140px;
  height: 140px;
  border: 2px solid #000;
  border-radius: 9999px;
  animation: orbit-spin linear infinite;
}

.orbit--left {
  top: 50px;
  left: 10px;
  border-style: dotted;
  animation-duration: 12s;
}

.orbit--right {
  top: 50px;
  left: 80px;
  border-style: solid;
  animation-duration: 12s;
}

.orbit--top {
  top: 10px;
  left: 45px;
  border-style: dashed;
  animation-duration: 20s;
}

.orbit__dot {
  position: absolute;
  right: -6px;
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  background: #000;
}

.orbit--left .orbit__dot,
.orbit--right .orbit__dot {
  top: calc(50% - 6px);
}

.orbit--top .orbit__dot {
  top: calc(45% - 6px);
}

@media (min-width: 1280px) {
  .orbit {
    width: 95px;
    height: 95px;
  }

  .orbit--left {
    top: 40px;
    left: 10px;
  }

  .orbit--right {
    top: 40px;
    left: 58px;
  }

  .orbit--top {
    top: 10px;
    left: 34px;
  }

  .orbit__dot {
    right: -4px;
    width: 8px;
    height: 8px;
  }

  .orbit--left .orbit__dot,
  .orbit--right .orbit__dot {
    top: calc(50% - 4px);
  }

  .orbit--top .orbit__dot {
    top: calc(45% - 4px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .orbit {
    animation: none;
  }
}
</style>
