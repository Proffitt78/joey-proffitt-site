<template>
    <v-main class="content-shell">
        <AppHeader />
        <main class="editorial-page"><slot /></main>
        <AppFooter />
    </v-main>
</template>
<script setup lang="ts">
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
</script>
<style lang="less">
@import '../css/variables.less';
.content-shell {
    background: @page-bg-color;
    min-height: 100vh;
}
.editorial-page {
    max-width: 1160px;
    margin: auto;
    padding: 52px 24px 80px;
    .kicker {
        color: #b5d7bd;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        font-size: 0.8rem;
        margin-bottom: 16px;
    }
    h1 {
        font-size: clamp(2.5rem, 6vw, 4.5rem);
        line-height: 1.1;
        max-width: 19ch;
        margin-bottom: 24px;
    }
    h2 {
        font-size: clamp(1.5rem, 3vw, 2.1rem);
        line-height: 1.25;
        margin-bottom: 16px;
    }
    h3 {
        font-size: 1.4rem;
        line-height: 1.3;
        margin-bottom: 12px;
    }
    p {
        line-height: 1.8;
    }
    .deck {
        font-size: 1.15rem;
        max-width: 65ch;
        color: #e0dae7;
        margin-bottom: 36px;
    }
    .text-link {
        display: inline-block;
        color: #b5d7bd;
        text-decoration: underline;
        text-underline-offset: 5px;
        margin-top: 18px;
    }
    a:focus-visible,
    button:focus-visible,
    summary:focus-visible {
        outline: 2px solid #b5d7bd;
        outline-offset: 5px;
    }

    .feature-image {
        // border: 3px solid red;
        border-radius: 12px;
        display: block;
        width: 100%;
    }

    figure {
        margin: 24px 0;
    }
    figcaption {
        color: #d0c6db;
        font-size: 0.9rem;
        line-height: 1.6;
        margin-top: 12px;
    }
    .feature-card {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 32px;
        align-items: center;
        padding: 28px;
        border: 1px solid #766087;
        border-radius: 20px;
        background: @primary-color;
    }
    .series-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 20px;
        margin: 36px 0;
    }
    .series-card {
        padding: 24px;
        border-top: 3px solid #a0c7aa;
        background: @primary-color;
        border-radius: 0 0 12px 12px;
    }
    .series-card p {
        color: #ded9e4;
    }
    .entry-list {
        margin-top: 40px;
    }
    .entry {
        border-top: 1px solid #766087;
        padding: 28px 0;
    }
    .entry h3 a {
        color: #fff;
    }
    .entry p {
        max-width: 65ch;
        color: #ded9e4;
    }
    .reading-column {
        max-width: 760px;
        margin: auto;
    }
    .reading-column section {
        margin: 36px 0;
    }
    .reading-column p + p {
        margin-top: 18px;
    }
    .back-link {
        display: inline-block;
        color: #b5d7bd;
        margin-bottom: 30px;
    }
    .feedback {
        border-top: 1px solid #766087;
        margin-top: 44px;
        padding-top: 28px;
    }
    @media (max-width: 700px) {
        padding: 36px 20px 60px;
        .feature-card,
        .series-grid {
            grid-template-columns: 1fr;
        }
        .feature-card {
            padding: 20px;
        }
    }
}
</style>
