<template>
    <div class="main">
        <h2>test</h2>
        <CardTest />
    </div>
</template>

<script setup>
import CardTest from "../components/CardTest.vue";
import { useMindArtCard } from "../composables/useMindArCard";

const { startFunctions } = useMindArtCard();

startFunctions();
</script>

<style scoped>
.main {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
