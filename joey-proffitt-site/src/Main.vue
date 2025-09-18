<template>
    <v-main>
        <AppHeader />
        <v-container id="main-container">            
            <section id="landing" class="main-section">
                <HomePage />
            </section>
            <section id="skills" class="main-section">
                <Skills />
            </section>
            <section id="contact" class="main-section">
                <Contact />
            </section>
        </v-container>
        <AppFooter />
    </v-main>
</template>

<script setup lang="ts">
    import AppHeader from './components/AppHeader.vue'
    import AppFooter from './components/AppFooter.vue'
    import HomePage from './views/HomePage.vue'
    import Skills from './views/Skills.vue'
    import Contact from './views/Contact.vue'
</script>

<style lang="less">
@import './css/variables.less';

.v-main {
    background-color: @page-bg-color;
  }

.logo-wrap {
    .logo {
        font-size: @30px;
        
        a {
            color: @tertiary-color;
            &:hover {
                background-color: transparent
            }
        }
    }
}
#main-container {
    padding: 0px;
    max-width: none;
}
.main-section {
    min-height: calc(100vh - 64px); // each section takes up full viewport height
    padding: calc(20px + 64px) 0 40px;
    display: flex;
    align-items: flex-start; // center content vertically
    justify-content: center;
    position: relative;
    scroll-snap-align: start;

    @media(min-width: 1200px) {
        padding: 80px 0;
    }
    
    >div {
        max-width: 1220px;
        
    }
    
    &#landing {
        padding-top: 0px;
        .gradient-vertical(@primary-color, @page-bg-color);
    }

    &#contact {
        background-color: @primary-color;
    }
}

.main-section:nth-child(odd) {
    background-color: @page-bg-color;
}

.main-section:nth-child(even) {
    // background-color: lighten(@primary-color, 5%);
}

.main-section-header {
    

}

html {
    scroll-behavior: smooth;
}

.nav-link-wrap {
    a {
        align-items: center;
        border: 3px solid transparent;
        color: @accent-color-2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;

        &:hover {
            background-color: transparent;
        }

        .j-svg {
            fill: @accent-color-2;
            stroke: @accent-color-2;
            width: 36px;

            &.dna {
                path {
                    stroke: @accent-color-2;
                }
            }
        }
    }


    a.router-link-active {
        background-color: @page-bg-color;
        border-radius: @4px;
        color: @primary-color;
        padding: 10px;

        .j-svg {
            fill: @primary-color;
            stroke: @primary-color;

            &.dna {
                path {
                    stroke: @primary-color;
                }
            }
        }
    }

    span {
        font-size: @14px;
    }
}

.v-navigation-drawer {
    background-color: @accent-color-2;
    color: #fff;
}
</style>