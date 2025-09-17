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

    <!-- Spacer pushes nav items -->
    <v-spacer />

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
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>
  </v-app-bar>

  <!-- Drawer for mobile -->
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary>
    <v-list>
      <v-list-item
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        link
        @click="drawer = false">
        <v-list-item-title>
          <v-icon start>{{ link.icon }}</v-icon>
          {{ link.label }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
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
    { label: 'Skills', to: '/skills', icon: 'mdi-code-tags' },
    { label: 'Contact', to: '/contact', icon: 'mdi-email' },
]
</script>

<style scoped lang="less">
@import '../css/variables.less';

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
    font-size: 1.2rem;
    gap: 6px; /* space between logo and text */
    text-decoration: none;

    &:hover {
        opacity: 0.8;
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
