<template>
    <ContentLayout
        ><article
            v-if="entry"
            class="reading-column"
        >
            <RouterLink
                class="back-link"
                :to="'/journal#' + entry.series"
                >← {{ series?.title }}</RouterLink
            >
            <p class="kicker">{{ series?.title }} / By Joey Proffitt</p>
            <h1>{{ entry.title }}</h1>
            <p class="deck">{{ entry.description }}</p>
            <section
                v-for="section in entry.sections"
                :key="section.title"
            >
                <h2>{{ section.title }}</h2>
                <p
                    v-for="paragraph in section.paragraphs"
                    :key="paragraph"
                >
                    {{ paragraph }}
                </p>
                <AmmitiGallery v-if="section.gallery" />
                <figure v-if="section.image">
                    <img
                        class="feature-image"
                        :class="section.imageClass"
                        :src="section.image"
                        :alt="section.alt"
                        loading="lazy"
                    />
                    <figcaption>{{ section.caption }}</figcaption>
                </figure>
            </section>
            <RouterLink
                class="text-link"
                to="/work/ammiti"
                >View the Ammiti project →</RouterLink
            >
            <aside class="feedback">
                <h2>Have a question or a thought?</h2>
                <p>I’d love to hear it.</p>
                <a
                    class="text-link"
                    :href="feedbackLink"
                    >Send me feedback →</a
                >
            </aside>
            <nav
                class="entry-list"
                aria-label="More journal stories"
            >
                <h2>Keep exploring</h2>
                <div
                    v-for="other in otherEntries"
                    :key="other.slug"
                >
                    <RouterLink
                        class="text-link"
                        :to="'/journal/' + other.slug"
                        >{{ other.title }} →</RouterLink
                    >
                </div>
            </nav>
        </article>
        <div v-else>
            <h1>Story not found.</h1>
            <RouterLink
                class="text-link"
                to="/journal"
                >Return to the journal →</RouterLink
            >
        </div></ContentLayout
    >
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ContentLayout from '@/components/ContentLayout.vue'
import AmmitiGallery from '@/components/AmmitiGallery.vue'
import { journalEntries, journalSeries } from '@/data/journal'
const route = useRoute()
const entry = computed(() => journalEntries.find((item) => item.slug === route.params.slug))
const series = computed(() => journalSeries.find((item) => item.id === entry.value?.series))
const otherEntries = computed(() =>
    journalEntries.filter((item) => item.slug !== entry.value?.slug),
)
const feedbackLink = computed(
    () =>
        'mailto:joeyproffitt78@gmail.com?subject=' +
        encodeURIComponent('Journal: ' + (entry.value?.title ?? 'Feedback')),
)
</script>

<style scoped lang="less">
// Only images with imageClass: 'journal-logo' use this size.
// Other article images keep the shared full-width .feature-image styling.
.reading-column .journal-logo {
    width: 100%;
    max-width: 240px;
    height: auto;
    margin: 24px auto;
}
</style>
