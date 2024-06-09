<template>
    <div class="products-card-section">
        <div class="container products__container">
            <div class="products__header">
                <nuxt-link :to="{ path: `/`, hash: `#products` }" class="products__button-back">&larr;</nuxt-link>
                <h3 class="products--title">{{ props.description.title }}</h3>
            </div>
            <div class="products__inner">
                <products-slider :img="props.description.product_info.images.data" />
                <div class="products__structure">
                    <h3 class="products__structure-title">Характеристика</h3>
                    <product-list :info="props.description.product_info" :price="props.description.price"
                        :name="props.description.name" :title="props.description.title" />
                </div>
            </div>
            <product-description :description="props.description.product_info.description" />
        </div>
    </div>
</template>

<script setup>
import productList from "./product-list/index.vue"
import productDescription from "./product-description/index.vue"
import productsSlider from "./products-slider/index.vue"

const props = defineProps({ description: Object })

</script>

<style lang="scss" scoped></style>