<template>
  <v-container class="home-intro">
    <div class="intro-grid">
      <div class="intro-copy">
        <p class="eyebrow">Full-stack developer · Frontend focus</p>
        <h1>Joey Proffitt</h1>
        <p class="intro-lead">I build software people can actually use.</p>
        <p class="intro-description">
          My strongest work is on the frontend, where design meets development.
          I also work across the backend and database. I built and launched
          Cannopi, a social platform for the cannabis community.
        </p>
        <div class="intro-actions">
          <v-btn :to="{ path: '/', hash: '#projects' }" class="primary-action" size="large" append-icon="mdi-arrow-down">Explore Cannopi</v-btn>
          <v-btn href="/resume/JProffitt-Resume-Designed.pdf" target="_blank" rel="noopener noreferrer" variant="outlined" size="large" prepend-icon="mdi-file-document-outline">View resume</v-btn>
        </div>
        <p class="work-location">Remote preferred. Open to hybrid in Chesapeake, Virginia Beach, or Norfolk, Virginia.</p>
      </div>
      <div class="intro-signature" aria-hidden="true">
        <div class="signature-glow"></div>
        <JPLogo class="jp-logo" />
        <div class="signature-orbs"><span v-for="n in 12" :key="n" class="orb"></span></div>
      </div>
    </div>
    <div class="intro-contact" aria-label="Contact Joey">
      <a href="mailto:joeyproffitt78@gmail.com">joeyproffitt78@gmail.com</a>
      <a href="tel:+17579106909">(757) 910-6909</a>
      <a href="https://www.linkedin.com/in/joey-proffitt-1b05b7108" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
      <a href="/resume/JProffitt-Resume-Designed.pdf" download>Download resume ↓</a>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import JPLogo from '@/assets/icons/jp-svg.svg'
</script>

<style scoped lang="less">
@import '../css/variables.less';
.home-intro { padding: clamp(36px, 6vw, 80px) 24px 0; }
.intro-grid {
  display: grid; grid-template-columns: minmax(0, 1fr); align-items: center; gap: 32px;
  @media (min-width: 960px) { grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr); }
}
.eyebrow { color: lighten(@accent-color-3, 22%); font-size: .9rem; letter-spacing: .08em; margin-bottom: 20px; }
h1 {
  font-family: MyCustomFont, Avenir, Helvetica, Arial, sans-serif;
  font-size: clamp(2.2rem, 6vw, 4.75rem); font-weight: 400; line-height: 1.12; margin-bottom: 24px;
}
.intro-lead { font-size: clamp(1.4rem, 2.5vw, 2rem); line-height: 1.3; margin-bottom: 18px; }
.intro-description {
  color: #e0dae7; font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.0625rem; line-height: 1.75; max-width: 60ch;
}
.intro-actions {
  display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px;
  .v-btn { text-transform: none; letter-spacing: 0; color: #fff; }
  .primary-action { background: lighten(@accent-color-3, 15%); color: @primary-color; }
  @media (max-width: 399px) { .v-btn { width: 100%; } }
}
.work-location {
  color: #d4ccde; font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: .875rem; line-height: 1.6; margin-top: 22px; max-width: 58ch;
}
.intro-signature {
  display: none;
  position: relative;
  isolation: isolate;
  @media (min-width: 960px) {
    display: grid; place-items: center; padding: 20px;
    background: radial-gradient(ellipse, fade(@secondary-color, 22%), transparent 70%);
  }
  .jp-logo {
    width: 100%; max-width: 340px; position: relative; z-index: 1;
    :deep(path) { fill: lighten(@secondary-color, 10%); stroke: transparent; }
  }
}
.signature-glow {
  position: absolute;
  z-index: 0;
  inset: 46% 8% 8%;
  border-radius: 50%;
  background: radial-gradient(ellipse, fade(@secondary-color, 35%), transparent 70%);
  filter: blur(12px);
  animation: signature-glow-drift 20s ease-in-out infinite;
}
.signature-orbs {
  position: absolute;
  inset: -24px;
  z-index: 2;
  overflow: hidden;
  pointer-events: none;
}
.orb {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: lighten(@accent-color-3, 10%);
  opacity: 0;
  animation: signature-orb-rise 14s linear infinite;
  &:nth-child(2n) { background: lighten(@secondary-color, 15%); animation-duration: 18s; }
  &:nth-child(3n) { width: 10px; height: 10px; }
  &:nth-child(4n) { width: 5px; height: 5px; animation-duration: 16s; }
  &:nth-child(1) { left: 12%; top: 60%; animation-delay: -2s; }
  &:nth-child(2) { left: 24%; top: 82%; animation-delay: -9s; }
  &:nth-child(3) { left: 42%; top: 70%; animation-delay: -5s; }
  &:nth-child(4) { left: 62%; top: 88%; animation-delay: -12s; }
  &:nth-child(5) { left: 82%; top: 68%; animation-delay: -7s; }
  &:nth-child(6) { left: 72%; top: 52%; animation-delay: -1s; }
  &:nth-child(7) { left: 34%; top: 48%; animation-delay: -10s; }
  &:nth-child(8) { left: 56%; top: 64%; animation-delay: -4s; }
  &:nth-child(9) { left: 18%; top: 92%; animation-delay: -13s; }
  &:nth-child(10) { left: 90%; top: 90%; animation-delay: -6s; }
  &:nth-child(11) { left: 46%; top: 96%; animation-delay: -11s; }
  &:nth-child(12) { left: 78%; top: 78%; animation-delay: -3s; }
}
@keyframes signature-orb-rise {
  0% { opacity: 0; transform: translate(0, 10px) scale(.7); }
  18% { opacity: .55; }
  65% { opacity: .4; }
  100% { opacity: 0; transform: translate(12px, -110px) scale(1.1); }
}
@keyframes signature-glow-drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-8px, -6px) scale(1.06); }
}
@media (prefers-reduced-motion: reduce) {
  .orb, .signature-glow { animation: none; }
  .orb { opacity: .25; }
}
.intro-contact {
  display: flex; flex-wrap: wrap; gap: 14px 28px;
  border-top: 1px solid fade(@secondary-color, 45%); margin-top: 40px; padding-top: 22px;
  font-family: Avenir, Helvetica, Arial, sans-serif; font-size: .875rem;
  a {
    color: #e0dae7; overflow-wrap: anywhere; text-underline-offset: 4px;
    &:hover { background: transparent; text-decoration: underline; }
    &:focus-visible { outline: 2px solid lighten(@accent-color-3, 22%); outline-offset: 5px; }
  }
}
</style>
