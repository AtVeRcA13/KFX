<template>
    <div class="products" id="products">
        <div class="container products__container">
            <h2 class="section--title">Продукция</h2>
            <product-slider :slide-list="props.slideList" />
        </div>
    </div>
</template>

<script setup>
import productSlider from "./product-slider/index.vue"
const props = defineProps({
    slideList: Array
})
</script>

<style lang="scss" scoped>
.products__container {
    max-width: 1750px;
}
</style>