<template>
    <div class="direction" id="direction">
        <div class="container direction__container">
            <h2 class="section--title">Направление</h2>
            <div class="direction__wrapper">
                <direction-info />
                <direction-form />
            </div>
        </div>
    </div>
</template>

<script setup>
import directionInfo from "./direction-info/index.vue"
import directionForm from "./direction-form/index.vue"
</script>

<style lang="scss" scoped></style>