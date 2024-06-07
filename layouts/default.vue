<template>
    <div class="wrapper">
        <section-header />
        <main class="main">
            <slot />
        </main>
        <section-footer />
    </div>
</template>

<script setup>
import sectionHeader from "sections/section-header/index.vue"
import sectionFooter from "sections/section-footer/index.vue"
</script>

<style lang="scss">
.main {
    padding-top: 126px;
}
</style>