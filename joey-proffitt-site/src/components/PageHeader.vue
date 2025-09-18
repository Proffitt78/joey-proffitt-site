<template>
  <div class="text-center mb-10" data-aos="fade-down">
    <h1 class="main-section-header">{{ title }}</h1>

    <div class="page-description" v-if="description">
      <p>{{ description }}</p>
    </div>

    <!-- Slot for custom extra content if needed fool -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
}>();
</script>

<style scoped lang="less">
@import '../css/variables.less';

.main-section-header {
    border-bottom: 10px solid @accent-color-2;
    box-shadow: 0px 1px 0px @accent-color-3;
    font-family: MyCustomFont, Avenir, Helvetica, Arial, sans-serif;
    font-size: @20px;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: center;

    @media(min-width: 576px) {
        border-bottom: 15px solid @accent-color-2;
        box-shadow: 0px 2px 0px @accent-color-3;
        font-size: @40px;
        margin-bottom: 25px;
    }

    @media(min-width: 768px) {
        border-bottom: 16px solid @accent-color-2;
        font-size: @50px;
    }

    @media(min-width: 992px) {
        border-bottom: 18px solid @accent-color-2;
        box-shadow: 0px 3px 0px @secondary-color;
        font-size: @66px;
    }

    @media(min-width: 1200px) {
        border-bottom: 20px solid @accent-color-2;
        font-size: @80px;
        margin-bottom: 40px;
    }
}

.page-description {
    font-size: @14px;
    opacity: 0.9;

    @media(min-width: 576px) {
        font-size: @20px;
    }

    @media(min-width: 768px) {
        font-size: @22px;
    }

    @media(min-width: 992px) {
        font-size: @26px;
    }

    @media(min-width: 1200px) {
        font-size: @30px;
    }
}
</style>
