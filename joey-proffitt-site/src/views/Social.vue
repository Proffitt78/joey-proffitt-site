<template>
    <v-container class="social-page">
      <PageHeader 
            title="Connect With Me" 
            description="I’m active on these platforms — feel free to check out my work and connect." />

      <!-- Social Cards -->
      <v-row justify="center" class="social-cards">
        <v-col cols="12" sm="6" md="4" data-aos="fade-up">
          <v-card class="pa-6 text-center" elevation="3">
            <v-icon size="36" color="primary">mdi-github</v-icon>
            <h3 class="mt-3">GitHub</h3>
            <p>
              <a href="https://github.com/yourusername" target="_blank">
                github.com/yourusername
              </a>
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4" data-aos="fade-up" :data-aos-delay="100">
          <v-card class="pa-6 text-center" elevation="3">
            <v-icon size="36" color="primary">mdi-linkedin</v-icon>
            <h3 class="mt-3">LinkedIn</h3>
            <p>
              <a href="https://linkedin.com/in/yourusername" target="_blank">
                linkedin.com/in/yourusername
              </a>
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4" data-aos="fade-up" :data-aos-delay="200">
          <v-card class="pa-6 text-center" elevation="3">
            <v-icon size="36" color="primary">mdi-twitter</v-icon>
            <h3 class="mt-3">Twitter</h3>
            <p>
              <a href="https://twitter.com/yourusername" target="_blank">
                twitter.com/yourusername
              </a>
            </p>
          </v-card>
        </v-col>
      </v-row>

      <!-- Optional extra socials -->
      <v-row justify="center" align="stretch" class="social-cards mt-6">
        <v-col cols="12" sm="6" md="4" data-aos="fade-up">
          <v-card class="pa-6 text-center" elevation="3">
            <v-icon size="36" color="primary">mdi-instagram</v-icon>
            <h3 class="mt-3">Instagram</h3>
            <p>
              <a href="https://instagram.com/yourusername" target="_blank">
                instagram.com/yourusername
              </a>
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue';
</script>

<style lang="less" scoped>
@import '../css/variables.less';

.social-page {

  .social-cards {
    .v-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
      }

      a {
        color: @accent-color-1;
        font-weight: 500;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
