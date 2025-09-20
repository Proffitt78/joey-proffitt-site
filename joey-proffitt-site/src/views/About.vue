<template>
  <v-container class="about-page">
    <!-- Header -->
    <PageHeader 
      title="About Me" 
      description="Here’s a little about who I am, what I do, and what drives me." 
    />

    <div class="content-wrap">
      <!-- Profile Image -->
      <section id="portfolio-main-image" class="profile-section">
        <img :src="joey" alt="Joey Proffitt" class="joey-img" />
      </section>

      <!-- Bio -->
      <section class="bio-text">
        <p>
          Hi, I’m <strong>Joey Proffitt</strong> — a front-end focused full-stack developer with a passion for creating clean, responsive, and user-friendly web applications. For more than 15 years, I’ve been honing my craft in web technologies, from the foundations of <strong>HTML, CSS, and JavaScript</strong> to modern frameworks like <strong>Vue.js</strong> and <strong>TypeScript</strong>, and full-stack tools like <strong>C#, REST APIs, and SQL</strong>.
        </p>
        <p>
          I enjoy building software that not only works seamlessly but also looks and feels polished. Over the years, I’ve specialized in <strong>responsive design</strong>, making sure that applications adapt beautifully to any device. This very site was built using <strong>Vue 3, TypeScript, Pinia, and Vite</strong>, backed by a <strong>C# and Entity Framework Core API</strong> hosted in <strong>Azure</strong>.
        </p>
        <p>
          Beyond the technical side, I bring strong skills in <strong>problem-solving, collaboration, and communication</strong>, which have been essential in both team-based and freelance projects. I love breaking down complex problems, finding efficient solutions, and working closely with others to deliver results.
        </p>
        <p>
          Outside of development, I’ve always been a creative — tinkering with <strong>Photoshop, Illustrator, and Premiere</strong> since the late 90s. That background gives me an eye for design and detail, which complements my engineering work.
        </p>
        <p>
          At the end of the day, I’m driven by curiosity, creativity, and the satisfaction of building something meaningful that people enjoy using.
        </p>
      </section>
    </div>

    <!-- Fun Fact Component -->
    <section class="fun-fact">
      <FunFact />
    </section>
  </v-container>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue';
import joey from '@/assets/images/joey-color-bg-1.jpg';
import FunFact from "@/components/FunFact.vue";
</script>

<style lang="less" scoped>
@import '../css/variables.less';

.about-page {
  .content-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-top: 40px;

    @media (min-width: 992px) {
      flex-direction: row;
      align-items: flex-start;
      gap: 60px;
    }
  }

  .profile-section {
    flex: 1;
    text-align: center;

    .joey-img {
      max-width: 260px;
      width: 100%;
      border-radius: 50%;
      border: 6px solid lighten(@accent-color-3, 20%);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
      object-fit: cover;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .bio-text {
    flex: 2;
    font-size: 1rem;
    line-height: 1.7;
    color: #eee;
    background: fade(@accent-color-1, 70%);
    padding: 25px 30px;
    border-radius: 16px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.25);

    p {
      margin-bottom: 1rem;
    }

    strong {
      color: lighten(@accent-color-3, 15%);
      font-weight: 600;
    }
  }

  .fun-fact {
    margin-top: 50px;
  }
}
</style>
