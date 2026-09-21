<template>
  <v-app-bar flat>
    <!-- Logo / Title -->
    <v-app-bar-title>
        <RouterLink to="/" class="logo-link">
            <span>
                Joey Proffitt
            </span>
            <img :src="logo" alt="Joey Proffitt logo" class="logo-img" />
        </RouterLink>
    </v-app-bar-title>


    <!-- Desktop Nav -->
    <template v-if="!mobile">
      <v-btn
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        variant="text"
        class="mx-2">
        <v-icon start>{{ link.icon }}</v-icon>
        {{ link.label }}
      </v-btn>
    </template>

    <!-- Mobile Nav (Hamburger) -->
    <template v-else>
      <v-btn icon aria-label="Toggle navigation" :aria-expanded="drawer" aria-controls="mobile-navigation" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>
  </v-app-bar>

  <!-- Drawer for mobile -->
  <v-navigation-drawer
    id="mobile-navigation"
    v-model="drawer"
    location="right"
    temporary>
    <div class="mobile-links">
      <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" @click="drawer = false">
        <v-icon start>{{ link.icon }}</v-icon>
        {{ link.label }}
      </RouterLink>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { RouterLink } from 'vue-router'
import logo from '@/assets/images/logo.png'

// Drawer state
const drawer = ref(false)

// Vuetify composable: tells us if the screen is small
const { smAndDown } = useDisplay()
const mobile = computed(() => smAndDown.value)

// Define navigation links
const navLinks = [
    { label: 'Projects', to: '/projects', icon: 'mdi-application-brackets-outline' },
    { label: 'Skills', to: '/skills', icon: 'mdi-code-tags' },
    { label: 'About', to: '/about', icon: 'mdi-code-tags' },
    { label: 'Contact', to: '/contact', icon: 'mdi-email' },
]
</script>

<style scoped lang="less">
@import '../css/variables.less';

.mobile-links {
    padding: 12px 0;
    a {
        display: flex;
        align-items: center;
        min-height: 48px;
        padding: 12px 20px;
        color: #fff;
        &:hover { background: fade(@secondary-color, 25%); }
        &:focus-visible { outline: 2px solid @accent-color-3; outline-offset: -4px; }
    }
}

.logo-img {
    height: 50px; /* adjust as needed */
    width: auto;
    vertical-align: middle;
}

.logo-link {
    align-items: center;
    color: #fff;
    display: flex;
    font-weight: bold;
    font-size: .px(19)[@value];
    gap: 6px; /* space between logo and text */
    text-decoration: none;

    &:hover {
        opacity: 0.8;
        background-color: transparent;
    }

    span {
        line-height: 1;
    }
}

header.v-toolbar {
    background-color: @primary-color;
    color: #fff;
}
</style>
