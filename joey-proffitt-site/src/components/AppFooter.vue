<template>
  <v-footer app class="pa-4" dark>
    <v-container>
        <div class="built-by">
            <p><span>Built by </span><span>Joey Proffitt</span></p>
        </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
// No logic needed for now
</script>

<style scoped lang="less">
@import '../css/variables.less';

footer.v-footer{
    background-color: transparent;
    height: 80px;
    color: #fff;
}
</style>