<template>
  <v-container class="contact-page">
    <!-- Header -->
    <PageHeader 
      title="Get In Touch" 
      description="I'd love to connect! Here’s how you can reach me or check out my work online." 
    />

    <!-- Contact Info -->
    <section class="contact-info" data-aos="fade-up">
      <div class="info-item">
        <v-icon>mdi-email</v-icon>
        <a href="mailto:joeyproffitt78@gmail.com">joeyproffitt78@gmail.com</a>
      </div>
      <div class="info-item">
        <v-icon>mdi-phone</v-icon>
        <a href="tel:+17579106909">(757) 910-6909</a>
      </div>
      <div class="info-item">
        <v-icon>mdi-file-document</v-icon>
        <a href="/resume/JProffitt-Resume.pdf" target="_blank" download>Download Resume</a>
      </div>
    </section>

    <!-- Social Media -->
    <section id="social-links" class="social-icons text-center mt-12" data-aos="fade-up">
      <h2 class="text-h5 font-weight-medium mb-6">Find Me Online</h2>
      <div class="icons-wrap">
        <a href="https://github.com/Proffitt78" target="_blank" aria-label="GitHub">
          <v-icon>mdi-github</v-icon>
        </a>
        <a href="https://www.linkedin.com/in/joey-proffitt-1b05b7108" target="_blank" aria-label="LinkedIn">
          <v-icon>mdi-linkedin</v-icon>
        </a>
        <a href="https://x.com/JoeyProffitt78" target="_blank" aria-label="X (Twitter)">
          <v-icon>mdi-twitter</v-icon>
        </a>
        <a href="https://www.instagram.com/joey_proffitt_photography/" target="_blank" aria-label="Instagram">
          <v-icon>mdi-instagram</v-icon>
        </a>
        <a href="https://www.facebook.com/joey.proffitt.2025" target="_blank" aria-label="Facebook">
          <v-icon>mdi-facebook</v-icon>
        </a>
        <a href="https://www.youtube.com/@JoeyProffitt1978" target="_blank" aria-label="YouTube">
          <v-icon>mdi-youtube</v-icon>
        </a>
      </div>
    </section>
  </v-container>
</template>

<script setup lang="ts">
    import PageHeader from '@/components/PageHeader.vue';
</script>

<style lang="less" scoped>
    @import '../css/variables.less';

    .contact-page {
        .contact-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            margin-top: 2rem;

            .info-item {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: .px(18)[@value];
            
                .v-icon {
                    color: @tertiary-color;
                }

                a {
                    color: #fff;
                    font-weight: 500;
                    text-decoration: none;

                    &:hover {
                        background-color: transparent;
                    }
                }
            }
        }

        .social-icons {
            .icons-wrap {
                display: flex;
                justify-content: center;
                gap: 12px;

                @media(min-width: 576px) {
                    gap: .px(20)[@value];                
                }

                @media(min-width: 768px) {
                    gap: .px(26)[@value];                
                }

                @media(min-width: 992px) {
                    gap: .px(28)[@value];                
                }

                @media(min-width: 1200px) {
                    gap: .px(30)[@value];                
                }

                @media(min-width: 1400px) {
                    gap: .px(32)[@value];
                }

                a {
                    &:hover {
                        background-color: transparent;
                    }
                }

                .v-icon {
                    font-size: .px(28)[@value];
                    color: @accent-color-3;
                    transition: transform 0.3s ease;

                    @media(min-width: 432px) {
                        font-size: .px(50)[@value];
                    }

                    @media(min-width: 576px) {
                        font-size: .px(60)[@value];
                    }

                    @media(min-width: 768px) {
                        font-size: .px(94)[@value];
                    }

                    @media(min-width: 992px) {
                        font-size: .px(132)[@value];
                    }

                    @media(min-width: 1200px) {
                        font-size: .px(166)[@value];
                    }

                    @media(min-width: 1400px) {
                        font-size: .px(196)[@value];
                    }

                    @media(min-width: 1600px) {
                        font-size: .px(228)[@value];
                    }

                    @media(min-width: 1770px) {
                        font-size: .px(264)[@value];
                    }

                    &:hover {
                        background-color: transparent;
                        transform: scale(1.15);
                        color: @accent-color-1;
                    }
                }
            }
        }
    }
</style>
