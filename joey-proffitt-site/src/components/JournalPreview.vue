<template>
    <v-container class="journal-preview">
        <div class="journal-intro">
            <div>
                <p class="eyebrow">The journal</p>
                <h2 id="journal-heading">A closer look at the work.</h2>
            </div>
            <RouterLink
                class="browse-link"
                to="/journal"
            >
                Browse the journal →
            </RouterLink>
        </div>
        <p class="description">
            Design decisions, stories from building Ammiti, and a growing space for photography.
            Follow a series or start with a story below.
        </p>
        <div
            class="series-topics"
            aria-label="Journal series"
        >
            <span
                v-for="series in journalSeries"
                :key="series.id"
            >
                {{ series.title }}
            </span>
        </div>
        <div class="journal-stories">
            <article
                v-for="entry in journalEntries.slice(-3).reverse()"
                :key="entry.slug"
            >
                <p class="eyebrow">
                    {{ journalSeries.find((series) => series.id === entry.series)?.title }}
                </p>
                <h3>
                    <RouterLink :to="'/journal/' + entry.slug">{{ entry.title }}</RouterLink>
                </h3>
                <p>{{ entry.description }}</p>
                <RouterLink
                    class="browse-link"
                    :to="'/journal/' + entry.slug"
                >
                    Read the story →
                </RouterLink>
            </article>
        </div>
    </v-container>
</template>
<script setup lang="ts">
import { journalEntries, journalSeries } from '@/data/journal'
</script>
<style scoped lang="less">
@import '../css/variables.less';
.journal-preview {
    padding: 0 24px;
}
.journal-intro {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
}
.eyebrow {
    color: #b5d7bd;
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    margin-bottom: 12px;
}
h2 {
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    line-height: 1.25;
}
.description {
    max-width: 65ch;
    margin: 22px 0;
}
p {
    color: #ded9e4;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.75;
}
.series-topics {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 24px;
    margin-bottom: 28px;
    color: #c8b8dd;
    font-size: 0.95rem;
}
.journal-stories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
    gap: 24px;
    article {
        padding: 28px;
        background: @primary-color;
        border: 1px solid fade(@secondary-color, 60%);
        border-radius: 16px;
    }
    h3 {
        font-size: 1.5rem;
        line-height: 1.3;
        margin-bottom: 16px;
        a {
            color: #fff;
        }
    }
    .browse-link {
        display: inline-block;
        margin-top: 20px;
    }
}
.browse-link {
    color: #b5d7bd;
    text-decoration: underline;
    text-underline-offset: 5px;
}
a:focus-visible {
    outline: 2px solid #b5d7bd;
    outline-offset: 5px;
}
@media (max-width: 650px) {
    .journal-stories {
        grid-template-columns: 1fr;
    }
}
</style>
