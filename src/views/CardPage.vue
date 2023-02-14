<template>
    <div class="main">
        <button @click="startFunc">Start</button>
        <CardTest />
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import CardTest from "../components/CardTest.vue";
import { useMindArtCard } from "../composables/useMindArCard";
const { startFunctions, stopFunc } = useMindArtCard();
let func = ref(null);
onMounted(() => {
    // startFunctions();
    console.log("hey");
});
const startFunc = async () => {
    func.value = startFunctions();
};
onUnmounted(() => {
    // window.onresize = null;
    func.value = null;
    stopFunc();
    //
    // window.removeEventListener("click", () => {
    // startFunctions();
    // });
});
</script>

<style scoped>
.main {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
</style>
