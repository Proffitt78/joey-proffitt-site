<template>
    <ContentLayout>
        <RouterLink
            class="back-link"
            to="/work"
            >← Selected work</RouterLink
        >
        <p class="kicker">Ammiti / Independent project</p>
        <h1>A social platform, built from the ground up.</h1>
        <p class="deck">
            I designed, built, and launched Ammiti independently. My role covered the interface,
            visual identity, backend, and database.
        </p>
        <figure>
            <img
                class="feature-image"
                src="/images/ammiti/ammiti-profile.png"
                alt="Ammiti member profile showing its cover photo and media gallery"
            />
            <figcaption>
                Member profiles are one part of an application that includes posts, groups, and
                messaging.
            </figcaption>
        </figure>
        <Projects />
        <section class="entry-list">
            <h2>Inside the project</h2>
            <article
                class="entry"
                v-for="entry in journalEntries"
                :key="entry.slug"
            >
                <h3>
                    <RouterLink :to="'/journal/' + entry.slug">{{ entry.title }} →</RouterLink>
                </h3>
                <p>{{ entry.description }}</p>
            </article>
        </section>
    </ContentLayout>
</template>
<script setup lang="ts">
import ContentLayout from '@/components/ContentLayout.vue'
import Projects from './Projects.vue'
import { journalEntries } from '@/data/journal'
</script>
