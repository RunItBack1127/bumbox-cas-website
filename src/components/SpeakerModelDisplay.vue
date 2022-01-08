<template>
    <section id="speaker-model-container"></section>
</template>

<script>
export default {

};
</script>

<style scoped>
section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
}

section canvas {
    width: 50% !important;
    max-width: 50vw;
    height: 100%;
}

@media screen and (max-width: 767px) {
    section canvas {
        width: 100% !important;
        max-width: 100vw;
    }
}
</style>