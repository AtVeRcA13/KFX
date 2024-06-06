<template>
    <div class="products" id="products">
        <div class="container products__container">
            <h2 class="section--title">Продукция</h2>
            <product-slider />
        </div>
    </div>
</template>

<script setup>
import productSlider from "./product-slider/index.vue"
</script>

<style lang="scss" scoped>
.products__container {
    max-width: 1750px;
}
</style>