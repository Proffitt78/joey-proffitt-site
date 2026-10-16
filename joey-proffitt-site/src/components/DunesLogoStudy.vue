<template>
    <div class="dunes-logo-study">
        <figure>
            <div class="logo-frame">
                <DunesLogo
                    class="dunes-mark"
                    role="img"
                    aria-label="The Dunes logo resembling a lowercase d and a musical note"
                />
            </div>
            <figcaption>A lowercase d with a hint of a musical note.</figcaption>
        </figure>
        <figure>
            <div class="logo-frame">
                <DunesLogo
                    class="dunes-mark dunes-mark--sideways"
                    role="img"
                    aria-label="The Dunes logo turned sideways to show a wave and sand dune"
                />
            </div>
            <figcaption>The same mark, turned sideways.</figcaption>
        </figure>
    </div>
</template>

<script setup lang="ts">
import DunesLogo from '@/assets/images/dunes/d.svg'
</script>

<style scoped lang="less">
.dunes-logo-study {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    margin-top: 24px;
}

.logo-frame {
    display: grid;
    place-items: center;
    min-height: 250px;
    background: #1e1827;
    border: 1px solid #766087;
    border-radius: 16px;
}

// The original SVG remains untouched. Its path inherits this component's color.
.dunes-mark {
    width: 96px;
    height: 180px;
    color: #b5d7bd;
    animation: dunes-color 16s ease-in-out infinite;

    :deep(path) {
        fill: currentColor;
    }
}

.dunes-mark--sideways {
    transform: rotate(90deg);
}

@keyframes dunes-color {
    0%,
    100% {
        color: #b5d7bd;
    }
    50% {
        color: #d9c1a0;
    }
}

@media (prefers-reduced-motion: reduce) {
    .dunes-mark {
        animation: none;
    }
}

@media (max-width: 540px) {
    .dunes-logo-study {
        grid-template-columns: 1fr;
    }
}
</style>
