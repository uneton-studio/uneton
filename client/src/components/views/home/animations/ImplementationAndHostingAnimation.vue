<template>
  <div
    class="orbit-graphic relative w-65 h-50 xl:w-45 xl:h-36.25 overflow-hidden"
    aria-hidden="true"
  >
    <div class="orbit orbit--outer">
      <div class="orbit__dot orbit__dot--outer"></div>
    </div>

    <div class="orbit orbit--middle">
      <div class="orbit__dot orbit__dot--middle"></div>
    </div>

    <div class="orbit orbit--inner">
      <div class="orbit__dot orbit__dot--inner"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes orbit-spin-clockwise {
  to {
    transform: rotate(360deg);
  }
}

@keyframes orbit-spin-counter {
  to {
    transform: rotate(-360deg);
  }
}

.orbit {
  position: absolute;
  border: 2px solid #000;
  border-radius: 9999px;
}

.orbit--outer {
  width: 180px;
  height: 180px;
  top: 10px;
  left: 10px;
  border-style: solid;
  animation: orbit-spin-counter 18s linear infinite;
}

.orbit--middle {
  width: 135px;
  height: 135px;
  top: 37px;
  left: 10px;
  border-style: dotted;
  animation: orbit-spin-clockwise 14s linear infinite;
}

.orbit--inner {
  width: 70px;
  height: 70px;
  top: 61px;
  left: 10px;
  border-style: solid;
  animation: orbit-spin-clockwise 9.5s linear infinite;
}

.orbit__dot {
  position: absolute;
  right: -5px;
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background: #000;
}

.orbit__dot--outer {
  top: calc(45% - 5px);
}

.orbit__dot--middle {
  top: calc(60% - 5px);
}

.orbit__dot--inner {
  top: calc(45% - 5px);
}

@media (min-width: 1280px) {
  .orbit--outer {
    width: 125px;
    height: 125px;
    top: 10px;
    left: 10px;
  }

  .orbit--middle {
    width: 94px;
    height: 94px;
    top: 29px;
    left: 10px;
  }

  .orbit--inner {
    width: 49px;
    height: 49px;
    top: 46px;
    left: 10px;
  }

  .orbit__dot {
    right: -4px;
    width: 8px;
    height: 8px;
  }

  .orbit__dot--outer {
    top: calc(45% - 4px);
  }

  .orbit__dot--middle {
    top: calc(60% - 4px);
  }

  .orbit__dot--inner {
    top: calc(45% - 4px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .orbit {
    animation: none;
  }
}
</style>
