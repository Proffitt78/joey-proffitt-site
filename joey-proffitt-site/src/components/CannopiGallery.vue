<template>
  <details v-if="cannopiScreenshots.length" class="cannopi-gallery" @toggle="handleToggle">
    <summary>
      <span class="summary-copy"><span class="summary-title">See inside Cannopi</span><span class="summary-description">A few screenshots. No sign-in needed.</span></span>
      <v-icon class="disclosure-icon" aria-hidden="true">mdi-chevron-down</v-icon>
    </summary>
    <div v-if="expanded" class="gallery-content">
      <p class="gallery-intro">Select a screenshot for a closer look.</p>
      <div class="screenshot-grid">
        <figure v-for="shot in cannopiScreenshots" :key="shot.id">
          <v-dialog max-width="1100" :aria-label="shot.caption">
            <template #activator="{ props }">
              <button v-bind="props" type="button" class="screenshot-button" :aria-label="`Enlarge: ${shot.caption}`">
                <img :src="shot.src" :alt="shot.alt" loading="lazy" decoding="async" />
                <span class="enlarge-hint"><v-icon size="18" aria-hidden="true">mdi-magnify-plus-outline</v-icon> Enlarge</span>
              </button>
            </template>
            <template #default="{ isActive }">
              <v-card class="screenshot-dialog">
                <div class="dialog-heading">
                  <p>{{ shot.caption }}</p>
                  <v-btn variant="text" prepend-icon="mdi-close" @click="isActive.value = false">Close</v-btn>
                </div>
                <img :src="shot.src" :alt="shot.alt" class="full-screenshot" />
              </v-card>
            </template>
          </v-dialog>
          <figcaption>{{ shot.caption }}</figcaption>
        </figure>
      </div>
    </div>
  </details>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cannopiScreenshots } from '@/data/cannopiScreenshots'
const expanded = ref(false)
function handleToggle(event: Event) {
  expanded.value = (event.currentTarget as HTMLDetailsElement).open
}
</script>

<style scoped lang="less">
@import '../css/variables.less';
.cannopi-gallery {
  margin-top: 16px;
  border: 1px solid fade(@secondary-color, 45%);
  border-radius: 16px;
  background: fade(@primary-color, 65%);
  overflow: hidden;
  summary {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 22px 24px;
    cursor: pointer;
    transition: background-color .2s ease;
    &::-webkit-details-marker { display: none; }
    &:focus-visible { outline: 2px solid lighten(@accent-color-3, 20%); outline-offset: -4px; }
  }
  &[open] .disclosure-icon { transform: rotate(180deg); }
}
.summary-copy { display: grid; gap: 6px; }
.summary-title { font-size: 1.125rem; color: lighten(@accent-color-3, 25%); }
.summary-description, .gallery-intro, figcaption, .dialog-heading p {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: .9375rem;
  line-height: 1.6;
  color: #ded9e4;
}
.disclosure-icon { flex-shrink: 0; transition: transform .2s ease; }
.gallery-content { padding: 0 24px 24px; }
.gallery-intro { padding: 18px 0; border-top: 1px solid fade(@secondary-color, 35%); }
.screenshot-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 24px;
  @media (min-width: 700px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
.screenshot-button {
  width: 100%;
  display: block;
  position: relative;
  padding: 0;
  overflow: hidden;
  border: 1px solid fade(@secondary-color, 55%);
  border-radius: 10px;
  background: @primary-color;
  cursor: zoom-in;
  transition: border-color .2s ease, box-shadow .2s ease;
  img { width: 100%; height: 240px; object-fit: contain; padding: 8px; }
  &:focus-visible { outline: 2px solid lighten(@accent-color-3, 20%); outline-offset: 4px; }
}
.enlarge-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: lighten(@accent-color-3, 25%);
  background: fade(@primary-color, 90%);
  font-size: .875rem;
  padding: 8px;
}
figcaption { margin-top: 10px; }
.screenshot-dialog {
  background: @primary-color;
  color: #fff;
  padding: 16px;
  .dialog-heading { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 12px; }
  .v-btn { color: #fff; text-transform: none; letter-spacing: 0; }
  .full-screenshot { display: block; width: 100%; max-height: 72vh; object-fit: contain; }
}
@media (hover: hover) and (pointer: fine) {
  .cannopi-gallery summary:hover { background: fade(@secondary-color, 15%); }
  .screenshot-button:hover { border-color: lighten(@accent-color-3, 20%); box-shadow: 0 6px 20px fade(@primary-color, 40%); }
}
@media (prefers-reduced-motion: reduce) {
  .cannopi-gallery summary, .disclosure-icon, .screenshot-button { transition: none; }
}
</style>
