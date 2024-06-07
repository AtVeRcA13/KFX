<template>
    <div class="product-page">
        <product-card-section :description="description" />
        <popup-product />
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import img1 from "images/pr-wheat.png"
import popupProduct from "popups/popup-product/index.vue"
import productCardSection from "sections/section-products-card/index.vue"
const route = useRoute()
const description = ref(
    {
        title: "Пшеница сорт: Амелия",
        img: img1,
        text: "Амелия – это новый озимый сорт мягкой пшеницы, созданный РУП Научно-Практический центр НАН Беларуси по земледелию в 2018 году. Этот сорт отличается высокой урожайностью и хорошей устойчивостью к различным заболеваниям."
    }

)
</script>
 
<style lang="scss" scoped></style>