<template>
    <ContentLayout>
        <p class="kicker">Journal / Notes from the work</p>
        <h1>Design, build, look closer.</h1>
        <p class="deck">
            Stories about making things, organized into series. Start with the work behind Ammiti,
            or follow the ideas inside its identity.
        </p>
        <nav
            class="series-grid"
            aria-label="Journal series"
        >
            <div
                class="series-card"
                v-for="series in journalSeries"
                :key="series.id"
            >
                <h2>{{ series.title }}</h2>
                <p>{{ series.description }}</p>
                <a
                    v-if="entriesFor(series.id).length"
                    class="text-link"
                    :href="'#' + series.id"
                    >Explore the series ↓</a
                >
                <p
                    v-else
                    class="kicker"
                    style="margin-top: 18px"
                >
                    First story to come
                </p>
            </div>
        </nav>
        <section
            v-for="series in publishedSeries"
            :key="series.id"
            :id="series.id"
            class="entry-list"
            style="scroll-margin-top: 90px"
        >
            <h2>{{ series.title }}</h2>
            <article
                v-for="entry in entriesFor(series.id)"
                :key="entry.slug"
                class="entry"
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
import { journalEntries, journalSeries } from '@/data/journal'
const entriesFor = (id: string) => journalEntries.filter((entry) => entry.series === id)
const publishedSeries = journalSeries.filter((series) => entriesFor(series.id).length)
</script>
