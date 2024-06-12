<template>
    <div class="products" id="products">
        <div class="container products__container">
            <h2 class="section--title">Продукция</h2>
            <filter-product @select-option="changeCurrentOption" :current-option="currentOption"
                :options-list="props.filterList" />
            <product-slider :slide-list="filtredProducts" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue"
import filterProduct from "common/filter/index.vue"
import productSlider from "./product-slider/index.vue"
const props = defineProps({
    slideList: Array,
    filterList: Array
})
const currentOption = ref("Вся продукция")
const filtredProducts = computed(() => {
    if (currentOption.value === "Вся продукция") return props.slideList
    return props.slideList.filter(function (item) {
        return item.attributes.product_info.class.data.attributes.class === currentOption.value
    })
})
const changeCurrentOption = function (option) {
    currentOption.value = option
    console.log(option)
}


</script>

<style lang="scss" scoped>
.products__container {
    max-width: 1750px;
}
</style>