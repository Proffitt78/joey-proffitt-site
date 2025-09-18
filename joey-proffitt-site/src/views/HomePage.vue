<template>
    <v-container>
        <!-- Hero Section -->
        <div id="home-page">
            <section class="page-header">
                <h1 class="main-section-header"><span class="h1-text">Joey Proffitt</span><span class="fake-oval"></span></h1>
                <h2>Full Stack Software Engineer</h2>
            </section>

            <div class="content-wrap">
                <section id="portfolio-main-image">
                    <img :src="joey" alt="Joey Proffitt image" class="joey-img" />
                </section>
                <section id="info-wrap">
                    <section class="contact-info">
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
                    <secton class="fun-fact">
                        <FunFact
                            auto
                            :interval="15000" />
                    </secton>
                </section>
            </div>
            <div id="opening-statement-wrap">
                <div id="opening-statement">
                    <p>
                        With 12+ years in software engineering, I bridge the gap between design and development as a Full Stack Engineer with a frontend focus. I thrive on building applications that are not only scalable and maintainable, but also delightful to use, combining Vue.js, C#, and RESTful APIs with a strong eye for clean, modern UI.
                    </p>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script setup lang="ts">
import FunFact from "@/components/FunFact.vue";
import joey from '@/assets/images/joey-color-bg-1.jpg'

// No script logic needed yet
</script>

<style lang="less">
@import '../css/variables.less';

#home-page {

    .page-header {
            position: relative;
        
        h1 {
            font-size: @28px;
            font-family: MyCustomFont, Avenir, Helvetica, Arial, sans-serif;
            padding-bottom: @30px;
            margin-bottom: -4px;
            border: 0;
            position: relative;
            text-align: center;

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
                bottom: 33px;
                z-index: 10;    

                @media(min-width: 432px) {
                    bottom: @36px;
                }

                /* Small devices (landscape phones, 576px–767px) */
                @media (min-width: 576px) {
                    height: @32px;        
                    bottom: @38px;
                }

                /* Medium devices (tablets, 768px–991px) */
                @media (min-width: 768px) {
                    height: @40px;        
                    bottom: 44px;
                }

                /* Large devices (desktops, 992px–1199px) */
                @media (min-width: 992px) {
                    height: 48px;        
                    bottom: @50px;
                }

                /* Extra large devices (large desktops, 1200px–1399px) */
                @media (min-width: 1200px) {
                    height: 52px;        
                    bottom: 44px;
                }

                /* Extra extra large devices (very wide screens, 1400px+) */
                @media (min-width: 1400px) {
                    
                }
            }
        }

        h2 {
            bottom: -4px;            
            font-size: @10px;
            font-weight: 300;
            line-height: 1.3;
            padding: 20px 10px;
            position: absolute;
            right: 0px;
            text-align: right;
            z-index: 1;

            // @media screen and (min-resolution: 2dppx) {
            //     border: 3px solid green;
            // }

            @media (min-width: 432px) {
                bottom: -6px;
                font-size: @12px; 
                padding: 20px 20px;
            }
            

            /* Small devices (landscape phones, 576px–767px) */
            @media (min-width: 576px) {
                bottom: -7px;
                font-size: @16px; 
                padding: 20px 20px;
            }

            /* Medium devices (tablets, 768px–991px) */
            @media (min-width: 768px) {
                bottom: -11px;
                font-size: @20px;
                padding: 20px 30px;
            }

            /* Large devices (desktops, 992px–1199px) */
            @media (min-width: 992px) {
                bottom: -10px;
                font-size: @24px;
                padding: 20px 40px;
            }

            /* Extra large devices (large desktops, 1200px–1399px) */
            @media (min-width: 1200px) {
                bottom: -25px;
                font-size: @30px;
                padding: 20px 60px;                
            }

            /* Extra extra large devices (very wide screens, 1400px+) */
            @media (min-width: 1400px) {
                // font-size: 40px;
            }
        }
    }

    
    .content-wrap {
        display: grid;
        grid-template-columns: 1fr;

        // @media (max-width: 575.98px) {
        //     grid-template-columns: 8fr 1fr;
        // }

        /* Small devices (landscape phones, 576px–767px) */
        @media (min-width: 576px) {
            grid-template-columns: 1fr 1fr;
        }

        /* Medium devices (tablets, 768px–991px) */
        @media (min-width: 768px){
            grid-template-columns: 1fr 1fr;
            // column-gap: 50px;
        }

        @media (min-width: 992px){
        }

        /* Extra large devices (large desktops, 1200px–1399px) */
        @media (min-width: 1200px) {
            grid-template-columns: 3fr 4fr;
            column-gap: 100px;
        }

        // /* Extra extra large devices (very wide screens, 1400px+) */
        // @media (min-width: 1400px) {
            
        // }
        
        #portfolio-main-image {
            box-shadow: 5px 5px 0px @accent-color-2, -8px -6px 0px @accent-color-1;
            background-color: @primary-color;

            @media (min-width: 1200px) {
                box-shadow: 30px 30px 0px @accent-color-2, -20px -10px 0px @accent-color-1;
            }
        }

        #info-wrap {
            background-color: darken(@primary-color, 10%);
            height: auto;
            margin-top: 10px;
            padding: @10px @5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            row-gap: @4px;
            border-bottom: 50px solid @accent-color-3;
            
            @media (min-width: 576px) {
                border-bottom: 20px solid @accent-color-3;
                row-gap: @6px;
            }

            @media(min-width: 768px) {
                height: 70%;
            }

            @media (min-width: 992px) {
                border-bottom: 30px solid @accent-color-3;
                row-gap: 8px;
            }

            @media (min-width: 1200px) {
                margin-top: 40px;
                padding: @30px;
                row-gap: 30px;
            }

            a:not(.v-btn) {
                color: #fff;            
            }
    
            .v-icon {
                color: @tertiary-color;
            }
    
            .contact-info {
                
                @media(min-width: 1200px) {
                    display: flex;
                    column-gap: @gutter;
                }
                .v-icon.linked-in {
                    font-size: @40px;
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
                }
    
                .resume-btns {
                    display: grid;
                    grid-template-columns: 1fr;                
                    column-gap: @gutter;

                    /* Small devices (landscape phones, 576px–767px) */
                    @media (min-width: 576px) {
                        grid-template-columns: 1fr 1fr;
                    }
                    
                    @media(min-width: 1200px) {
                        border-left: 1px solid @accent-color-1;
                    }

                    h3 {
                        padding: @4px 0 @2px;
                        text-align: center;

                        @media (min-width: 576px){
                            grid-column: span 2;
                        }

                        @media (min-width: 1200px){
                            padding: @10px 0 @5px;
                        }
                    }
    
                    > div {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
    
                    .v-btn {
                        background-color: transparent;
                        color: @accent-color-3;
                        padding: 0px 4px;
                        font-size: @12px;

                        @media(min-width: 768px){
                            font-size: @14px;
                            padding: 0px 16px;
                        }
                    }
                }
            }
        }
    }

    #opening-statement-wrap {
        position: relative;
    }
    #opening-statement {
        background-color: @secondary-color;
        font-size: @16px;
        padding: @10px;
        position: relative;
        box-shadow: -20px -20px 0px @primary-color, 
                    15px 10px 0px @accent-color-2, ;        

        @media(min-width: 576px) {
            top: @20px;
        }

        @media(min-width: 768px) {
            font-size: @20px;
            left: 120px;
            padding: @20px;
            top: -40px;
            width: 80%;
        }

        @media(min-width: 1200px) {
            font-size: @22px;
            left: 170px;
            top: -40px;
            margin-right: 20px;
            padding: @30px;
        }

        @media(min-width: 1400px) {
            width: 100%;
        }
    }
}
</style>
