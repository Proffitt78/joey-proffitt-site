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
                :class="index % 2 === 0 ? 'alt-bg' : ''"
                :style="{
                    backgroundImage: group.backgroundImage
                    ? `url(/src/assets/images/${group.backgroundImage})`
                    : 'none'
                }"
                >
                <div class="section-header" data-aos="fade-up">
                    <h2><v-icon>{{ group.icon }}</v-icon><span>{{ group.categoryName }}</span></h2>
                    <div class="skill-description">{{ group.description }}</div>
                </div>
        
                <v-container>
                    <v-row class="skills-row">
                        <div
                            class="card-holder"
                            v-for="(skill, idx) in group.skills"
                            :key="skill.skillId">
                            <v-card
                                class="pa-4 text-center"
                                elevation="3"
                                data-aos="fade-up"
                                :data-aos-delay="idx * 100">
                                <v-icon size="36">{{ skill.icon }}</v-icon>
                                <div>{{ skill.skillName }}</div>
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
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
            );
            z-index: 0;
        }

        .section-header {
            color: #fff;
            display: flex;
            flex-direction: column;
            margin: 0 auto 40px auto;
            max-width: 800px;
            position: relative;
            z-index: 1;
            justify-content: center;
            background-color: fade(@accent-color-2, 80%);
            padding: 10px 20px;

            h2 {
                align-items: center;
                display: flex;
                font-weight: 700;
                font-size: 2rem;
                column-gap: 10px;
                line-height: 1;
                margin: 0;

                .v-icon {
                    font-size: .px(40)[@value];
                    margin: 0;
                    color: @tertiary-color;
                }
            }

            .skill-description {
                font-family: RoundedLight, Avenir, Helvetica, Arial, sans-serif;
                font-size: .px(14)[@value];
                line-height: 1.1;
                font-weight: 100;
                opacity: 0.9;

                @media(min-width: 1200px) {
                    padding: 0 10px 0 50px;
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
