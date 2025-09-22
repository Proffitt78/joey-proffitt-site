<template>
    <v-container>
        <!-- Hero Section -->
        <div id="home-page">
            <section class="page-header">
                <h1 class="main-section-header"><span class="h1-text">Joey Proffitt</span><span class="fake-oval"></span></h1>
            </section>
            <section id="info-wrap">
                <div class="online-contacts">
                    <a href="mailto:joeyproffitt78@gmail.com">joeyproffitt78@gmail.com</a>
                    <a href="tel:+17579106909">(757) 910-6909</a>
                    <a href="https://www.linkedin.com/in/joey-proffitt-1b05b7108" target="_blank">
                        <v-icon class="linked-in">mdi-linkedin</v-icon>
                    </a>
                </div>
                <div class="resume-btns">
                    <!-- View Resume -->
                    <h3>Resume</h3>
                    <div>
                        <v-btn
                            href="/resume/JProffitt-Resume.pdf"
                            target="_blank"
                            prepend-icon="mdi-file-eye">
                            View
                        </v-btn>
                    </div>
                    <div>
                        <v-btn
                            href="/resume/JProffitt-Resume.pdf"
                            download
                            prepend-icon="mdi-file-download">
                            Download
                        </v-btn>
                    </div>
                </div>
            </section>
            <h2>Full Stack Software Engineer</h2>
            <div id="opening-statement-wrap">
                <div id="opening-statement">
                    <p>
                        With 12+ years in software engineering, I bridge the gap between design and development as a Full Stack Engineer with a frontend focus. I thrive on building applications that are not only scalable and maintainable, but also delightful to use, combining Vue.js, C#, and RESTful APIs with a strong eye for clean, modern UI.
                    </p>
                </div>
            </div>
            <section id="portfolio-main-image-wrap">
                <div class="portfolio-main-image">
                    <JPLogo class="jp-logo" />
                    <div class="shadow-1"></div>
                    <div class="shadow-2"></div>
                    <div class="shadow-3"></div>
                    <div class="shadow-4"></div>
                </div>
            </section>
            <section class="orb-container">
                <div class="orb" v-for="n in 12" :key="n"></div>
            </section>
        </div>        
        <secton class="fun-fact">
            <FunFact
                auto
                :interval="3600000" />
        </secton>
    </v-container>
</template>

<script setup lang="ts">
import FunFact from "@/components/FunFact.vue"
import JPLogo from '@/assets/icons/jp-svg.svg'

// No script logic needed yet
</script>

<style lang="less">
@import '../css/variables.less';

#home-page {
    position: relative;
    display: flex;
    flex-direction: column;

    #portfolio-main-image-wrap {
        position: absolute;
        top: 140px;
        margin: 0 auto;
        width: 100%;

        @media(min-width: 576px) {
            top: 8px;
        }

        @media(min-width: 800px) {
            left: calc(50% - 400px);
            width: 800px;
        }

        .portfolio-main-image {
            position: relative;
            z-index: 10;

            .jp-logo {
                position: relative;
                z-index: 5;
                path {
                    fill: fade(@accent-color-1, 70%);
                    stroke: @primary-color;
                }
            }
            .shadow-1, .shadow-2, .shadow-3, .shadow-4 {
                background-color: fade(@secondary-color, 40%);
                // border: 1px solid white;
                border-radius: 50%;
                box-shadow: 10px 10px 100px fade(@secondary-color, 30%),
                            -10px -10px 100px fade(@secondary-color, 30%),
                            -10px 10px 100px fade(@secondary-color, 30%),
                            10px -10px 100px fade(@secondary-color, 30%) ;
                bottom: 80px;
                height: 150px;
                opacity: .5;
                position: absolute;
                width: 100%;
                z-index: 3;
            }

            .shadow-1 {
                left: 20%;
            }

            .shadow-2 {
                right: 20%;
            }

            .shadow-3 {
                bottom: 54px;
                background-color: fade(@accent-color-1, 40%);
                box-shadow: 10px 10px 100px fade(@accent-color-1, 30%),
                            -10px -10px 100px fade(@accent-color-1, 30%),
                            -10px 10px 100px fade(@accent-color-1, 30%),
                            10px -10px 100px fade(@accent-color-1, 30%) ;
            }

            .shadow-4 {
                bottom: 54px;
                background-color: fade(@accent-color-1, 20%);
                bottom: 0;
                box-shadow: 10px 10px 100px fade(@accent-color-1, 10%),
                            -10px -10px 100px fade(@accent-color-1, 10%),
                            -10px 10px 50px fade(@accent-color-1, 10%),
                            10px -10px 50px fade(@accent-color-1, 10%) ;
                height: 250px;                
                width: 200%;
                left: -50%;
            }
        }
    }

    .page-header {
        h1 {
            border: 0;
            font-family: MyCustomFont, Avenir, Helvetica, Arial, sans-serif;
            font-size: .px(28)[@value];
            padding-bottom: 10px;
            position: relative;
            text-align: center;
            text-shadow: -2px -2px 0 @primary-color, 2px -2px 0 @primary-color, -2px 2px 0 @primary-color, 2px 2px 0 @primary-color;
            
            
            @media (min-width: 432px) {
                font-size: .px(30)[@value];
            }
            
            /* Small devices (landscape phones, 576px–767px) */
            @media (min-width: 576px) {
                font-size: .px(50)[@value];
            }
            
            /* Medium devices (tablets, 768px–991px) */
            @media (min-width: 768px) and (max-width: 991.98px) {
                font-size: .px(66)[@value];
            }
            
            /* Large devices (desktops, 992px–1199px) */
            @media (min-width: 992px) and (max-width: 1199.98px) {
                font-size: .px(90)[@value];
            }
            
            /* Extra large devices (large desktops, 1200px–1399px) */
            @media (min-width: 1200px) {
                font-size: .px(96)[@value];
                margin-bottom: -18px;
            }
            
            /* Extra extra large devices (very wide screens, 1400px+) */
            @media (min-width: 1400px) {
                // font-size: 9rem;
            }
            
            .h1-text {
                position: relative;
                z-index: 20;
            }
    
            .fake-oval {
                background-color: @primary-color;
                border-bottom: 2px solid @secondary-color;
                display: block;
                height: 25px;
                border-radius: 50%;
                position: absolute;
                width: 100%;
                bottom: 14px;
                z-index: 10;    

                @media(min-width: 432px) {
                    bottom: 12px;
                }

                /* Small devices (landscape phones, 576px–767px) */
                @media (min-width: 576px) {
                    height: 32px;        
                    bottom: 18px;
                }

                /* Medium devices (tablets, 768px–991px) */
                @media (min-width: 768px) {
                    height: 40px;        
                    bottom: 19px;
                }

                /* Large devices (desktops, 992px–1199px) */
                @media (min-width: 992px) {
                    height: 48px;        
                    bottom: 25px;
                }

                /* Extra large devices (large desktops, 1200px–1399px) */
                @media (min-width: 1200px) {
                    border-bottom: 3px solid @secondary-color;
                    height: 52px;        
                    bottom: 23px;
                }

                /* Extra extra large devices (very wide screens, 1400px+) */
                @media (min-width: 1400px) {
                    
                }
            }
        }
    }

    #info-wrap {
        height: auto;
        padding: 10px 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 100;

        @media (min-width: 432px) {
            // height: auto;
        }
        
        @media (min-width: 576px) {
            align-items: flex-start;
            height: 244px;
            flex-direction: row;
            padding-top: 30px;
        }

        @media(min-width: 768px) {
            height: 279px;
            padding-top: 40px;
        }

        @media (min-width: 992px) {
            height: 295px;
        }

        @media (min-width: 1200px) {
        }

        a:not(.v-btn) {
            color: #fff;            
        }

        .v-icon {
            color: @tertiary-color;
        }

        .online-contacts {
            align-items: center;
            display: flex;
            flex-direction: column;
            font-size: .px(14)[@value];
            row-gap: 4px;

            @media(min-width: 768px) {
                font-size: .px(18)[@value];
                row-gap: 6px;
            }

            @media(min-width: 1200px) {
                font-size: .px(20)[@value];
                row-gap: @gutter;
            }

            .v-icon.linked-in {
                color: white;
                font-size: .px(40)[@value];
            }
        }

        .resume-btns {
            border-top: 2px solid @accent-color-3;
            column-gap: @gutter;
            display: grid;
            grid-template-columns: 1fr;           
            margin-top: 10px;     

            /* Small devices (landscape phones, 576px–767px) */
            @media (min-width: 576px) {
                border: 0;
                column-gap: 5px;
                grid-template-columns: 1fr 1fr;
                margin-top: 0px;     
            }
            
            @media(min-width: 1200px) {
                // border-left: 1px solid @accent-color-1;
            }

            h3 {
                font-size: .px(16)[@value];
                padding: 4px 0 2px;
                font-weight: 100;
                text-align: center;

                @media (min-width: 576px){
                    font-size: .px(18)[@value];
                    grid-column: span 2;
                }

                @media (min-width: 1200px){
                    font-size: .px(20)[@value];
                    padding: 10px 0 5px;
                }
            }

            > div {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .v-btn {
                background-color: @accent-color-3;
                margin-bottom: 10px;
                color: @primary-color;                
                padding: 0px 14px;
                font-size: .px(12)[@value];
                width: 100%;

                @media (min-width: 576px){
                    background-color: fade(@primary-color, 80%);
                    box-shadow: none;
                    color:#fff;
                    margin: 0;
                }

                @media(min-width: 768px){
                    font-size: .px(14)[@value];
                    padding: 0px 16px;
                }

                &:hover {
                    background-color: @accent-color-1;
                }

                .v-icon {
                    color: @primary-color;

                    @media (min-width: 576px){
                        color: #fff;
                    }
                }
            }
        }
    }

    h2 {
        font-size: .px(20)[@value];
        text-align: center;
        position: relative;
        z-index: 100;
        text-shadow: -2px -2px 0 @primary-color, 2px -2px 0 @primary-color, -2px 2px 0 @primary-color, 2px 2px 0 @primary-color;

        @media (min-width: 432px) {
            font-size: .px(24)[@value];
        }

        @media (min-width: 576px) {
            font-size: .px(32)[@value];
        }

        @media (min-width: 768px) {
            font-size: .px(40)[@value];
        }

        @media (min-width: 992px) {
            font-size: .px(44)[@value];
        }
        
        @media(min-width: 1200px) {
            font-size: .px(50)[@value];
        }
    }

    #opening-statement-wrap {
        position: relative;
        z-index: 100;
    }
    #opening-statement {
        font-size: .px(14)[@value];

        @media(min-width: 576px) {
            font-size: .px(16)[@value];
        }

        @media(min-width: 768px) {
            font-size: .px(18)[@value];
        }

        @media(min-width: 992px) {
            // font-size: .px(20)[@value];
        }

        @media(min-width: 1200px) {
            font-size: .px(20)[@value];
        }
    }

    //////////////

    // Shared animation
    @keyframes liquidFloat {
        0% {
            transform: translate(0, 0) scale(1);
        }
        25% {
            transform: translate(15px, -15px) scale(1.05);
        }
        50% {
            transform: translate(-15px, 15px) scale(0.98);
        }
        75% {
            transform: translate(12px, 9px) scale(1.02);
        }
        100% {
            transform: translate(0, 0) scale(1);
        }
    }

    .portfolio-main-image {
        .shadow-1, .shadow-2, .shadow-3, .shadow-4 {
            animation: liquidFloat 20s ease-in-out infinite;
            will-change: transform;
        }

        // Offset each one’s animation slightly for organic feel
        .shadow-1 {
            animation-duration: 12s;
            animation-delay: 0s;
        }
        .shadow-2 {
            animation-duration: 16s;
            animation-delay: -5s;
        }
        .shadow-3 {
            animation-duration: 20s;
            animation-delay: -10s;
        }
        .shadow-4 {
            animation-duration: 25s;
            animation-delay: -15s;
        }
    }
    
    ///////////////////////////

    .orb-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none; // ensures clicks go through
        z-index: 2; // behind logo but above background
    }

    .orb {
        position: absolute;
        border-radius: 50%;
        background: fade(@accent-color-3, 60%);
        width: 10px;
        height: 10px;
        opacity: 0;
        animation: orbFloat 6s linear infinite;
    }

    // Add variation with nth-child
    .orb:nth-child(2n) {
        background: fade(@secondary-color, 60%);
    }
    .orb:nth-child(3n) {
        width: 14px;
        height: 14px;
    }
    .orb:nth-child(4n) {
        width: 8px;
        height: 8px;
        background: fade(@accent-color-3, 40%);
    }

    // Position random-ish
    .orb:nth-child(1) { top: 10%; left: 20%; animation-delay: 0s; }
    .orb:nth-child(2) { top: 40%; left: 70%; animation-delay: 3s; }
    .orb:nth-child(3) { top: 80%; left: 50%; animation-delay: 6s; }
    .orb:nth-child(4) { top: 25%; left: 85%; animation-delay: 9s; }
    .orb:nth-child(5) { top: 60%; left: 15%; animation-delay: 12s; }
    .orb:nth-child(6) { top: 75%; left: 30%; animation-delay: 15s; }
    .orb:nth-child(7) { top: 20%; left: 60%; animation-delay: 18s; }
    .orb:nth-child(8) { top: 50%; left: 40%; animation-delay: 21s; }
    .orb:nth-child(9) { top: 15%; left: 75%; animation-delay: 24s; }
    .orb:nth-child(10){ top: 90%; left: 25%; animation-delay: 27s; }
    .orb:nth-child(11){ top: 65%; left: 80%; animation-delay: 30s; }
    .orb:nth-child(12){ top: 35%; left: 10%; animation-delay: 33s; }

    // Keyframes for appearing, drifting, fading
    @keyframes orbFloat {
        0% {
            opacity: 0;
            transform: translateY(0) scale(0.8);
        }
        10% {
            opacity: 1;
            transform: translateY(-10px) scale(1);
        }
        50% {
            opacity: 0.7;
            transform: translateY(-30px) scale(1.1);
        }
        80% {
            opacity: 1;
            transform: translateY(-50px) scale(0.9);
        }
        100% {
            opacity: 0;
            transform: translateY(-70px) scale(0.7);
        }
    }

}
</style>
