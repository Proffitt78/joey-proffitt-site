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
            font-size: @28px;
            padding-bottom: @10px;
            position: relative;
            text-align: center;
            text-shadow: -2px -2px 0 @primary-color, 2px -2px 0 @primary-color, -2px 2px 0 @primary-color, 2px 2px 0 @primary-color;
            
            
            @media (min-width: 432px) {
                font-size: @30px;
            }
            
            /* Small devices (landscape phones, 576px–767px) */
            @media (min-width: 576px) {
                font-size: @50px;
            }
            
            /* Medium devices (tablets, 768px–991px) */
            @media (min-width: 768px) and (max-width: 991.98px) {
                font-size: @66px;
            }
            
            /* Large devices (desktops, 992px–1199px) */
            @media (min-width: 992px) and (max-width: 1199.98px) {
                font-size: @90px;
            }
            
            /* Extra large devices (large desktops, 1200px–1399px) */
            @media (min-width: 1200px) {
                font-size: @96px;
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
                    height: @32px;        
                    bottom: 18px;
                }

                /* Medium devices (tablets, 768px–991px) */
                @media (min-width: 768px) {
                    height: @40px;        
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
        padding: @10px @5px;
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
            font-size: @14px;
            row-gap: @4px;

            @media(min-width: 768px) {
                font-size: @18px;
                row-gap: 6px;
            }

            @media(min-width: 1200px) {
                font-size: @20px;
                row-gap: @gutter;
            }

            .v-icon.linked-in {
                color: white;
                font-size: @40px;
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
                padding: @4px 0 @2px;
                font-weight: 100;
                text-align: center;

                @media (min-width: 576px){
                    font-size: .px(18)[@value];
                    grid-column: span 2;
                }

                @media (min-width: 1200px){
                    font-size: .px(20)[@value];
                    padding: @10px 0 @5px;
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
                font-size: @12px;
                width: 100%;

                @media (min-width: 576px){
                    background-color: fade(@primary-color, 80%);
                    box-shadow: none;
                    color:#fff;
                    margin: 0;
                }

                @media(min-width: 768px){
                    font-size: @14px;
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

    

    
}
</style>
