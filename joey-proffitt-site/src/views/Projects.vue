<template>
  <v-container class="projects-page">
    <div class="projects-heading">
      <p class="eyebrow">Selected work</p>
      <h2 id="projects-heading">From an idea to a live product.</h2>
    </div>
    <article class="featured-project" aria-labelledby="cannopi-title">
      <div class="project-overview">
        <p class="project-status"><span aria-hidden="true"></span> Live · Independently built</p>
        <h3 id="cannopi-title">Cannopi</h3>
        <p class="project-subtitle">A social platform for the cannabis community.</p>
        <p class="project-description">
          I built Cannopi myself and launched it. It’s the clearest example of
          what I can do: take an idea, work through the problems, and turn it
          into software people can use.
        </p>
        <div class="project-actions">
          <v-btn href="https://www.cannopi.app" target="_blank" rel="noopener noreferrer" size="large" append-icon="mdi-open-in-new">Visit Cannopi</v-btn>
          <a href="mailto:joeyproffitt78@gmail.com?subject=Let%E2%80%99s%20talk%20about%20Cannopi">Talk through the project <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div class="project-story">
        <div>
          <h4>Why I built it</h4>
          <p>After eight years working for the government, my job ended.
            The projects I’d worked on weren’t things I could publicly show.
            Cannopi gave me something of my own to build and something I can share.</p>
        </div>
        <div>
          <h4>How I approached it</h4>
          <p>I use research, documentation, and tools like ChatGPT to work through
            problems. I’m open about that. I’m responsible for the work I deliver.</p>
        </div>
        <div>
          <h4>Where it is now</h4>
          <p>Cannopi is live and still growing its audience. I’m also looking for
            a role where I can bring that same care and follow-through to a team.</p>
        </div>
      </div>
    </article>
    <CannopiGallery />
  </v-container>
</template>

<script setup lang="ts">
import CannopiGallery from '@/components/CannopiGallery.vue'
</script>

<style scoped lang="less">
@import '../css/variables.less';
.projects-page { padding: 0 24px; }
.eyebrow { color: lighten(@accent-color-3, 22%); font-size: .9rem; letter-spacing: .08em; margin-bottom: 12px; }
.projects-heading {
  margin-bottom: 26px;
  h2 { font-size: clamp(1.6rem, 3vw, 2.4rem); line-height: 1.25; }
}
.featured-project {
  display: grid; grid-template-columns: minmax(0, 1fr);
  border: 1px solid fade(@accent-color-3, 45%); border-radius: 20px; overflow: hidden; background: @primary-color;
  @media (min-width: 960px) { grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr); }
}
.project-overview {
  padding: clamp(24px, 4vw, 48px);
  background: linear-gradient(140deg, fade(@accent-color-3, 13%), transparent 75%);
}
.project-status {
  display: flex; align-items: center; gap: 9px;
  color: lighten(@accent-color-3, 25%); font-family: Avenir, Helvetica, Arial, sans-serif; font-size: .8rem;
  span { width: 7px; height: 7px; border-radius: 50%; background: lighten(@accent-color-3, 20%); flex-shrink: 0; }
}
h3 { font-size: clamp(2.75rem, 5vw, 4rem); line-height: 1.1; margin: 24px 0 14px; }
.project-subtitle { font-size: 1.25rem; line-height: 1.4; max-width: 30ch; }
.project-description, .project-story p {
  color: #ded9e4; font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 1rem; line-height: 1.75;
}
.project-description { margin-top: 22px; }
.project-actions {
  display: flex; flex-direction: column; align-items: flex-start; gap: 20px; margin-top: 30px;
  .v-btn { background: lighten(@accent-color-3, 15%); color: @primary-color; text-transform: none; letter-spacing: 0; }
  a:not(.v-btn) {
    color: #e0dae7; font-family: Avenir, Helvetica, Arial, sans-serif; font-size: .9rem;
    text-decoration: underline; text-underline-offset: 5px;
    &:hover { background: transparent; color: #fff; }
    &:focus-visible { outline: 2px solid lighten(@accent-color-3, 22%); outline-offset: 5px; }
  }
}
.project-story {
  display: grid; gap: 26px; padding: clamp(24px, 4vw, 48px);
  border-top: 1px solid fade(@accent-color-3, 25%);
  h4 { color: lighten(@accent-color-3, 25%); font-size: 1.125rem; margin-bottom: 8px; }
  @media (min-width: 960px) { border-top: 0; border-left: 1px solid fade(@accent-color-3, 25%); }
}
</style>
