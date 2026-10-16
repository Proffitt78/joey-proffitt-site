<template>
    <v-container class="graphic-design">
        <p class="eyebrow">Graphic design / Selected work</p>
        <h2 id="design-heading">The ideas behind the visuals.</h2>
        <p class="section-description">
            Logos and visual identities with a story behind the shapes. Explore the finished work
            and the thinking that went into it.
        </p>

        <!-- Add future flyers, album artwork, and other design projects to this collection. -->
        <div class="design-grid">
            <article class="design-card">
                <RouterLink
                    to="/journal/ammiti-logo"
                    class="design-link"
                >
                    <div class="artwork artwork--ammiti">
                        <img
                            src="/images/ammiti/Ammiti-favicon_1.png"
                            alt="Ammiti logo combining an A, a peace symbol, and a smile"
                            class="ammiti-logo"
                            loading="lazy"
                        />
                    </div>
                    <div class="design-copy">
                        <p class="eyebrow">Ammiti / Logo design</p>
                        <h3>An A, a peace symbol, and a smile</h3>
                        <p>A welcoming identity for the social platform I built.</p>
                        <span class="read-more">Explore the design →</span>
                    </div>
                </RouterLink>
                <RouterLink
                    to="/work/ammiti"
                    class="related-project"
                >
                    Also explore the Ammiti application →
                </RouterLink>
            </article>

            <article class="design-card">
                <RouterLink
                    to="/journal/the-dunes-logo"
                    class="design-link"
                >
                    <div class="artwork artwork--dunes">
                        <DunesLogo
                            class="dunes-logo"
                            role="img"
                            aria-label="The Dunes logo resembling a lowercase d and a musical note"
                        />
                    </div>
                    <div class="design-copy">
                        <p class="eyebrow">The Dunes / Band identity</p>
                        <h3>A letter, a note, a wave</h3>
                        <p>A band logo with musical and coastal connections in one shape.</p>
                        <span class="read-more">Explore the design →</span>
                    </div>
                </RouterLink>
            </article>
        </div>
    </v-container>
</template>

<script setup lang="ts">
import DunesLogo from '@/assets/images/dunes/d.svg'
</script>

<style scoped lang="less">
@import '../css/variables.less';

.graphic-design {
    padding: 0 24px;
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

.section-description {
    max-width: 65ch;
    margin: 22px 0 28px;
}

p {
    color: #ded9e4;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.75;
}

.design-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
}

.design-card {
    border: 1px solid #766087;
    border-radius: 16px;
    background: @primary-color;
    overflow: hidden;
}

.design-link {
    display: block;
    color: #fff;
    text-decoration: none;

    &:hover {
        background: transparent;
    }

    &:hover h3 {
        text-decoration: underline;
        text-underline-offset: 5px;
    }
}

.artwork {
    display: grid;
    place-items: center;
    height: 260px;
    background: linear-gradient(145deg, #30263e, #1e1827);
    border-bottom: 1px solid #766087;
}

// These image sizes belong only to the design collection cards.
.ammiti-logo {
    width: 160px;
    max-height: 190px;
    object-fit: contain;
}

.dunes-logo {
    width: 96px;
    height: 180px;
    color: #b5d7bd;

    :deep(path) {
        fill: currentColor;
    }
}

.design-copy {
    padding: 28px;

    h3 {
        font-size: 1.5rem;
        line-height: 1.3;
        margin-bottom: 16px;
    }
}

.read-more {
    display: inline-block;
    color: #b5d7bd;
    margin-top: 20px;
    text-decoration: underline;
    text-underline-offset: 5px;
}

.related-project {
    display: inline-block;
    color: #b5d7bd;
    margin: 0 28px 28px;
    text-underline-offset: 5px;
}

a:focus-visible {
    outline: 2px solid #b5d7bd;
    outline-offset: -4px;
}

@media (max-width: 650px) {
    .design-grid {
        grid-template-columns: 1fr;
    }
}
</style>
