<template>
  <div class="fun-fact" :class="{ 'auto-mode': auto }">
      <!-- Transition wrapper -->
      <Transition name="fade-slide" mode="out-in">
        <p v-if="loading">Loading a fun fact...</p>
        <p v-else :key="fact">{{ fact }}</p>
    </Transition>

    <!-- Only show button if not in auto mode -->
    <button
      v-if="!auto"
      @click="fetchFact"
      class="btn">
      Get Another Fact
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import api from "@/plugins/axios"; // your axios instance

// Props to control behavior
interface Props {
  auto?: boolean;     // auto-refresh mode?
  interval?: number;  // ms between refreshes if auto
}
const props = defineProps<Props>();

const fact = ref<string>("");
const loading = ref<boolean>(true);
let timer: number | null = null;

const fetchFact = async () => {
  try {
    loading.value = true;
    const response = await api.get("/funfacts/random");
    fact.value = response.data.fact;
  } catch (error) {
    console.error("Error fetching fun fact:", error);
    fact.value = "Couldn’t fetch a fun fact 😅";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchFact();

  if (props.auto) {
    const interval = props.interval ?? 60000; // default 60s
    timer = window.setInterval(fetchFact, interval);
  }
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style lang="less" scoped>
@import '../css/variables.less';

/* Fade + Slide transition */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fun-fact {
    margin: @5px 0;
    padding: @5px;
    font-family: RoundedLight, Avenir, Helvetica, Arial, sans-serif;
    font-style: italic;
    text-align: right;
    font-size: @10px;

    @media(min-width: 768px) {
        font-size: @14px;
    }
   

    @media(min-width: 1200px) {
        font-size: @16px;
        margin: @10px 0;
        padding: @16px;
    }

    &.auto-mode {
        text-align: center;
    }
}

.btn {
  margin-top: 0.5rem;
  background: @tertiary-color;
  color: white;
  border: none;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: darken(@tertiary-color, 10%);
  }
}
</style>
