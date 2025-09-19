<template>
    <v-container class="skills-page">
        <PageHeader 
            title="Skills" 
            description="The skills below are powered by a backend API I built in C# and hosted in Azure." />

        <div class="categories-wrap">
            <section
                v-for="(group, index) in categories"
                :key="group.categoryId"
                class="skills-section"
                :class="index % 2 === 0 ? 'alt-bg' : ''">
                <div class="section-header" data-aos="fade-up">
                    <div>
                        <v-icon>{{ group.icon }}</v-icon>
                    </div>
                    <div>
                        <h2>{{ group.categoryName }}</h2>
                        <div class="skill-description">{{ group.description }}</div>
                    </div>
                </div>
        
                <v-container>
                    <v-row class="skills-row">
                        <div
                            class="card-holder"
                            v-for="(skill, idx) in group.skills"
                            :key="skill.skillId">
                            <v-card
                                class="pa-4 text-center skill-card"
                                elevation="3"
                                data-aos="fade-up"
                                :data-aos-delay="idx * 100">
                                <v-icon size="36">{{ skill.icon }}</v-icon>
                                <div>{{ skill.skillName }}</div>
                                <v-dialog 
                                    activator="parent"
                                    max-width="500"
                                    class="skill-details-dialog">
                                    <template v-slot:default="{ isActive }">
                                        <v-card>
                                            <v-card-title :style="{backgroundImage: group.backgroundImage ? `url(/images/${group.backgroundImage})` : 'none'}">
                                                <div class="skill-name-wrap d-flex align-top" >
                                                    <div class="icon-text-wrap">
                                                        <v-icon size="28" class="mr-2">{{ skill.icon }}</v-icon>
                                                        <span class="text-h6">{{ skill.skillName }}</span>
                                                    </div>
                                                    <v-spacer></v-spacer>
                                                    <v-btn icon="mdi-close" variant="text" @click="isActive.value = false"></v-btn>
                                                </div>
                                                <div class="group-name">
                                                    <h2><v-icon>{{ group.icon }}</v-icon><span>{{ group.categoryName }}</span></h2>
                                                </div>
                                            </v-card-title>

                                            <v-card-text>
                                                <!-- Render rich text / formatted details -->
                                                <div class="skill-details" v-html="formatDetails(skill.details)"></div>
                                            </v-card-text>

                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn text="Close" @click="isActive.value = false"></v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </template>
                                </v-dialog>
                            </v-card>
                        </div>
                    </v-row>
                </v-container>
            </section>
        </div>

    </v-container>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useSkillsStore } from "@/stores/skills";
import PageHeader from '@/components/PageHeader.vue';

const skillsStore = useSkillsStore();
const { categories } = storeToRefs(skillsStore);

onMounted(() => {
  skillsStore.fetchSkills();
});

function formatDetails(details: string | null): string {
  if (!details) return "";
  // Convert line breaks into <p> blocks
  return details
    .split(/\n+/)
    .map(line => `<p>${line.trim()}</p>`)
    .join("");
}

</script>

<style lang="less" scoped>
@import '../css/variables.less';

.skills-page {
    .categories-wrap {
        display: grid;
        grid-template-columns: 1fr;

        @media(min-width: 768px) {
            grid-template-columns: 1fr 1fr;
            column-gap: 10px;

            .skills-section:first-child {
                grid-column: span 2;
            }
        }

        @media(min-width: 1200px) {
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: @gutter;

            .skills-section:first-child {
                grid-column: span 3;
            }

            .skills-section:last-child {
                grid-column: span 3;
            }
        }


    }
    .skills-section {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-bottom: 12px solid @accent-color-3;
        border-top: 5px solid @accent-color-3;
        border-radius: 16px;
        margin-bottom: 60px;
        overflow: hidden;
        padding: 20px 0;
        position: relative;

        @media(min-width: 1200px) {
            padding: 40px 0;            
        }

        // dark gradient overlay to ensure text visibility
        &::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
                fade(@secondary-color, 20%),
                fade(@primary-color, 30%)
            );
            z-index: 0;
        }

        .section-header {
            background-color: fade(@accent-color-2, 80%);
            color: #fff;
            column-gap: 5px;
            display: flex;
            justify-content: flex-start;
            margin: 0 auto 40px auto;
            padding: 10px 20px;
            z-index: 1;

            >div {

                .v-icon {
                    font-size: .px(40)[@value];
                    margin: 0;
                    color: @tertiary-color;
    
                    &.mdi-code-tags{
                        position: relative;
                        top: -7px
                    }

                    &.mdi-database{
                        position: relative;
                        top: -4px
                    }

                    &.mdi-account-group{
                        position: relative;
                        top: -7px
                    }
                }
            }

            h2 {
                align-items: center;
                display: flex;
                font-weight: 700;
                font-size: 2rem;
                line-height: 1;
                margin: 0 0 5px;


                span {
                    position: relative;
                    top: 3px;
                }
            }

            .skill-description {
                font-family: RoundedLight, Avenir, Helvetica, Arial, sans-serif;
                font-size: .px(14)[@value];
                line-height: 1.1;
                font-weight: 100;
                opacity: 0.9;

                @media(min-width: 1200px) {
                    font-size: .px(16)[@value];
                }
            }
        }

        .v-container {
            position: relative;
            z-index: 1;
            
            .skills-row {
                justify-content: center;
                gap: 10px;

                @media(min-width: 1200px) {
                    gap: @gutter;
                }
    
                .card-holder {                
                    width: 130px;

                    @media(min-width: 768px) {
                        width: 162px;
                    }
    
                    .v-card {
                        align-items: center;
                        backdrop-filter: blur(6px);
                        background-color: darken(@accent-color-1, 40%);
                        border: 5px solid lighten(@accent-color-3, 20%);        
                        border-radius: 12px;
                        color: lighten(@accent-color-3, 20%);
                        cursor: pointer;
                        display: flex;
                        flex-direction: column;
                        font-size: @14px;
                        height: 100%;
                        justify-content: center;
                        padding: 0px;
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
    
                        &:hover {
                            transform: translateY(-6px);
                            box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.2);
                        }
    
                        @media (min-width: 768px) {
                            border: 5px solid lighten(@accent-color-3, 20%);
                        }

                        @media(min-width: 992px) {
                            font-size: @16px;
                        }
    
    
                        .v-icon {
                            font-size: 36px;
                            color: lighten(@accent-color-3, 20%);;
                        }
    
                        .text-subtitle-1 {
                            margin-top: 10px;
                            font-weight: 500;
                        }
                    }
                }
            }
        }
    }
}
</style>
<style lang="less">
@import '../css/variables.less';
.skill-details-dialog {
    background-color: fade(@primary-color, 90%);

    .v-card {
        background-color: lighten(@secondary-color, 30%);
        // border-left: 2px solid @accent-color-3;
        // border-right: 2px solid @accent-color-3;
        color: #fff;

        .v-card-title {
            background-color: @accent-color-2;
            padding: 10px 0px 10px;
            background-repeat: no-repeat;
            background-size: cover;

            .skill-name-wrap {

                .icon-text-wrap {
                    background-color: fade(@accent-color-2, 90%);
                    border-top: 2px solid @tertiary-color;
                    margin-top: 20px;
                    padding: 49px;
                }

                .v-btn {
                    background-color: @primary-color;
                    margin-right: 10px;
                }
            }


            .group-name {
                padding: 10px 20px 0 0;
                text-align: right;

                h2{
                    display: flex;
                    align-items: center;
                    font-size: .px(20)[@value];
                    justify-content: flex-end;
                    line-height: 1;

                    .v-icon {
                        font-size: .px(20)[@value];
                    }

                    span {
                        line-height: 1;
                        display: inline-block;
                    }
                }
            }
        }
    }

    .skill-details {
        background-color: lighten(@secondary-color, 40%);
        color: @primary-color;
        padding: 30px;
    
        p {
            margin-bottom: 0.75rem;
            line-height: 1.5;
        }
    }

    .v-card-actions {
        color: @primary-color;
    }
}
</style>