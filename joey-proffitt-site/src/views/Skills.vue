<template>
  <v-container class="skills-page">
    <header class="skills-heading">
      <p class="eyebrow">Skills</p>
      <h2 id="skills-heading">What I bring to the work.</h2>
      <p class="section-intro">My strongest area is frontend development. These are the skills I build on, from the interface to the backend.</p>
    </header>
    <section v-for="group in focusedSkills" :key="group.id" class="skill-group" :aria-labelledby="`skills-${group.id}`">
      <div class="group-heading">
        <h3 :id="`skills-${group.id}`">{{ group.title }}</h3>
        <p>{{ group.description }}</p>
      </div>
      <ul class="skill-grid">
        <li v-for="skill in group.skills" :key="skill.name" class="skill-card">
          <v-icon class="skill-icon" aria-hidden="true">{{ skill.icon }}</v-icon>
          <h4>{{ skill.name }}</h4>
          <p>{{ skill.description }}</p>
        </li>
      </ul>
    </section>
    <p class="skills-evidence">Want to see the work behind the list? <RouterLink :to="{ path: '/', hash: '#projects' }">Explore Cannopi <span aria-hidden="true">↑</span></RouterLink></p>
  </v-container>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { focusedSkills } from '@/data/focusedSkills'
</script>

<style scoped lang="less">
@import '../css/variables.less';
.skills-page { padding: 0 24px; }
.eyebrow { color: lighten(@accent-color-3, 22%); font-size: .9rem; letter-spacing: .08em; margin-bottom: 12px; }
.skills-heading {
  margin-bottom: 36px;
  h2 { font-size: clamp(1.6rem, 3vw, 2.4rem); line-height: 1.25; }
}
.section-intro, .group-heading p, .skill-card p, .skills-evidence {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #ded9e4;
  font-size: 1rem;
  line-height: 1.7;
}
.section-intro { margin-top: 16px; max-width: 68ch; }
.skill-group + .skill-group { margin-top: 32px; }
.group-heading {
  margin-bottom: 16px;
  h3 { font-size: 1.25rem; margin-bottom: 4px; color: lighten(@accent-color-3, 22%); }
  p { font-size: .9375rem; }
}
.skill-grid {
  list-style: none;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 16px;
  @media (min-width: 900px) { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
.skill-card {
  background: fade(@primary-color, 75%);
  border: 1px solid fade(@secondary-color, 40%);
  border-radius: 16px;
  padding: 24px;
  transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease, background-color .22s ease;
  .skill-icon { color: lighten(@accent-color-3, 22%); font-size: 30px; margin-bottom: 16px; }
  h4 { font-size: 1.125rem; line-height: 1.35; margin-bottom: 10px; }
  p { font-size: .9375rem; }
}
.skills-evidence {
  border-top: 1px solid fade(@secondary-color, 40%);
  margin-top: 32px;
  padding-top: 24px;
  a {
    display: inline-block;
    color: lighten(@accent-color-3, 25%);
    text-decoration: underline;
    text-underline-offset: 4px;
    &:hover { color: #fff; background: transparent; }
    &:focus-visible { outline: 2px solid @accent-color-3; outline-offset: 4px; }
  }
}
@media (hover: hover) and (pointer: fine) {
  .skill-card:hover {
    transform: translateY(-4px);
    border-color: lighten(@accent-color-3, 10%);
    background-color: fade(@primary-color, 92%);
    box-shadow: 0 10px 24px fade(@primary-color, 30%);
  }
}
@media (prefers-reduced-motion: reduce) {
  .skill-card { transition: none; }
  .skill-card:hover { transform: none; }
}
</style>
