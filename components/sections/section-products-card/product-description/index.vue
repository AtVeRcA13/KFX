<template>
    <div class="products__description">
        <h3 class="products__description-title">Описание</h3>
        <p class="products__descripition-text">{{ props.description }}</p>
    </div>
</template>

<script setup>
const props = defineProps(
    {
        description: String
    }
)
</script>

<style lang="scss" scoped></style>