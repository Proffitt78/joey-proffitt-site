<template>
  <v-container class="about-page">
    <header class="about-heading">
      <p class="eyebrow">About me</p>
      <h2 id="about-heading">A little more about Joey.</h2>
    </header>
    <div class="about-story">
      <figure class="profile">
        <img :src="joey" alt="Joey Proffitt" class="joey-img" width="260" height="260" loading="lazy" decoding="async" />
        <figcaption>Developer. Creative. Father of three.</figcaption>
      </figure>
      <div class="bio-text">
        <p>From 2013 to 2018, I worked at Dominion Enterprises on DX1, which provided websites for independent powersports dealerships. I took designs from the design team and built responsive interfaces that worked across phones, tablets, and desktops.</p>
        <p>I then spent eight years working for the government before losing my job during the DOGE cuts. Most of the work I’d done was on projects I couldn’t publicly share. I had experience, but very little I could put in front of a prospective employer.</p>
        <p>I built this portfolio to start changing that. Then I built Cannopi—an entire social platform of my own. It gave me something concrete to show and a chance to take a product from an idea to launch.</p>
        <p>My strongest area is the frontend, where design and development come together. I care about the details: how a page reads, how it behaves on a phone, and whether it makes sense to the person using it.</p>
        <p>Creative work has been part of my life since the late ’90s. Photoshop is my strongest creative tool. I’m also confident with Illustrator and Premiere, and I’d enjoy using those skills more.</p>
        <p class="creative-interest"><strong>I’m open to creative roles, too.</strong> I’m applying for software development positions, but I’d be excited about a role with more visual design, image editing, or video production. That’s work I’d love to grow in.</p>
      </div>
    </div>
    <section class="working-together" aria-labelledby="working-heading">
      <div class="working-heading">
        <p class="eyebrow">Working together</p>
        <h3 id="working-heading">Here’s what you should know.</h3>
        <p>I want a team to know who I am and how I work before we start a conversation.</p>
      </div>
      <div class="working-grid">
        <section aria-labelledby="interviews-heading">
          <h4 id="interviews-heading">Interviews</h4>
          <p>I don’t participate in coding-test interviews. Live coding in front of strangers makes me anxious and doesn’t show how I work day to day.</p>
          <p>I’m happy to walk through what I’ve built, explain my decisions, and discuss how I approach a problem.</p>
        </section>
        <section aria-labelledby="tools-heading">
          <h4 id="tools-heading">Tools & accountability</h4>
          <p>Yes, I use Google and ChatGPT. I also use documentation and debugging tools. I don’t know everything, and I’m comfortable saying so.</p>
          <p>I care about doing quality work, being reliable, and following through. Using tools doesn’t change my responsibility for what I deliver.</p>
        </section>
        <section aria-labelledby="personal-heading">
          <h4 id="personal-heading">Being myself</h4>
          <p>Cannopi is for the cannabis community, and I use cannabis responsibly myself. I don’t drink.</p>
          <p>I’m open about that. If my cannabis use is a problem for an employer, we’re not a good fit. I want to work somewhere I can be myself.</p>
        </section>
        <section aria-labelledby="schedule-heading">
          <h4 id="schedule-heading">Family & work</h4>
          <p>I’m a father of three young children. I prefer remote work because being home when they’re home matters to me.</p>
          <p>I’m open to a hybrid schedule in Chesapeake, Virginia Beach, or Norfolk, Virginia, when the schedule fits those responsibilities.</p>
        </section>
      </div>
      <div class="about-contact">
        <p>If my work and the way I work sound like a good fit for your team, let’s talk.</p>
        <v-btn href="mailto:joeyproffitt78@gmail.com" size="large" prepend-icon="mdi-email-outline">Get in touch</v-btn>
      </div>
    </section>
  </v-container>
</template>

<script setup lang="ts">
import joey from '@/assets/images/joey-color-bg-1-small.jpg'
</script>

<style scoped lang="less">
@import '../css/variables.less';
.about-page { padding: 0 24px; }
.eyebrow { color: lighten(@accent-color-3, 22%); font-size: .9rem; letter-spacing: .08em; margin-bottom: 12px; }
.about-heading {
  margin-bottom: 32px;
  h2 { font-size: clamp(1.6rem, 3vw, 2.4rem); line-height: 1.25; }
}
.about-story {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 32px;
  align-items: start;
  @media (min-width: 900px) { grid-template-columns: 260px minmax(0, 1fr); gap: 48px; }
}
.profile {
  text-align: center;
  .joey-img {
    width: 260px;
    max-width: 100%;
    height: auto;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid lighten(@accent-color-3, 15%);
  }
  figcaption { font-size: .9rem; line-height: 1.5; margin-top: 16px; color: #ded9e4; }
}
.bio-text, .working-heading > p:last-child, .working-grid p, .about-contact p {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #ded9e4;
  font-size: 1rem;
  line-height: 1.75;
}
.bio-text { max-width: 72ch; p + p { margin-top: 18px; } }
.creative-interest {
  border-left: 3px solid lighten(@accent-color-3, 15%);
  padding-left: 18px;
  strong { display: block; color: lighten(@accent-color-3, 25%); margin-bottom: 6px; }
}
.working-together { margin-top: 48px; }
.working-heading {
  border-top: 1px solid fade(@secondary-color, 40%);
  padding-top: 32px;
  margin-bottom: 24px;
  h3 { font-size: clamp(1.5rem, 2.5vw, 2rem); line-height: 1.3; margin-bottom: 14px; }
}
.working-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 16px;
  @media (min-width: 900px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  > section {
    background: fade(@primary-color, 75%);
    border: 1px solid fade(@secondary-color, 40%);
    border-radius: 16px;
    padding: clamp(20px, 3vw, 30px);
  }
  h4 { font-size: 1.25rem; color: lighten(@accent-color-3, 25%); margin-bottom: 14px; }
  p + p { margin-top: 14px; }
}
.about-contact {
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  p { max-width: 56ch; }
  .v-btn { background: lighten(@accent-color-3, 15%); color: @primary-color; text-transform: none; letter-spacing: 0; }
}
</style>
