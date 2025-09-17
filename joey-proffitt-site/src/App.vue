

<template>
  <v-app>
    <RouterView />
    <!-- two independent glow elements -->
    <div ref="outerGlow" class="cursor-glow outer"></div>
    <div ref="innerGlow" class="cursor-glow inner"></div>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue'

const outerGlow = ref<HTMLElement | null>(null)
const innerGlow = ref<HTMLElement | null>(null)

let mouseX = 0, mouseY = 0
let outerX = 0, outerY = 0
let innerX = 0, innerY = 0
let rafId = 0

function handleMouseMove(e: MouseEvent) {
  mouseX = e.clientX
  mouseY = e.clientY
}

function animate() {
  // outer follows faster (less lag)
  outerX += (mouseX - outerX) * 0.18
  outerY += (mouseY - outerY) * 0.18

  // inner follows slower (more lag) -> appears to be chased
  innerX += (mouseX - innerX) * 0.06
  innerY += (mouseY - innerY) * 0.06

  if (outerGlow.value) {
    outerGlow.value.style.left = `${outerX}px`
    outerGlow.value.style.top = `${outerY}px`
  }
  if (innerGlow.value) {
    innerGlow.value.style.left = `${innerX}px`
    innerGlow.value.style.top = `${innerY}px`
  }

  rafId = requestAnimationFrame(animate)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  // initialize at center to avoid jump
  outerX = innerX = window.innerWidth / 2
  outerY = innerY = window.innerHeight / 2
  animate()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  cancelAnimationFrame(rafId)
})
</script>
<style lang="less">
  @import './css/main.less';

/* hide on touch devices for perf / UX */
@media (hover: none) and (pointer: coarse) {
  .cursor-glow { display: none !important; }
}

.cursor-glow {
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
    transform: translate(-50%, -50%); /* centers element at left/top coords */
    z-index: 9999;
    mix-blend-mode: screen;
}

/* outer (bigger, softer) */
.cursor-glow.outer {
    // background: radial-gradient(circle, @secondary-color 0%, @primary-color 40%, transparent 70%);
    border: 3px solid @tertiary-color;
    border-radius: 50%;
    // filter: blur(6px);
    height: 36px;
    width: 36px;
}

/* inner (smaller, colored) */
.cursor-glow.inner {
    // background: radial-gradient(circle, @accent-color-3 0%, @accent-color-3 40%, transparent 70%);
    background-color: @accent-color-3;
    border-radius: 50%;
    // box-shadow: 0 0 12px rgba(0,200,255,0.35);
    // filter: blur(2px);
    height: 14px;
    width: 14px;
}
</style>
