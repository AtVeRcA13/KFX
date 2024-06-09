<template>
    <div class="product-page">
        <product-card-section v-if="propsdata" :description="propsdata" />
        <popup-product />
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import img1 from "images/img1.jpg"
import img2 from "images/img2.jpg"
import img3 from "images/img3.jpg"
import popupProduct from "popups/popup-product/index.vue"
import productCardSection from "sections/section-products-card/index.vue"
import { useFetch } from '#app';
const propsdata = ref(null)
const route = useRoute()
const { data, pending, error, refresh } = await useFetch(`http://localhost:1337/api/produkcziyas?filters[name][$eq]=${route.params.name}&populate[product_info][populate]=*`, {

})
console.log(data)
propsdata.value = data.value.data[0].attributes
console.log(propsdata.value)



/* const description = ref(
    {
        title: "Пшеница сорт: Амелия",
        img: [img1, img2, img3],
        text: "Амелия – это новый озимый сорт мягкой пшеницы, созданный РУП Научно-Практический центр НАН Беларуси по земледелию в 2018 году. Этот сорт отличается высокой урожайностью и хорошей устойчивостью к различным заболеваниям."
    }

) */
</script>
 
<style lang="scss" scoped></style>