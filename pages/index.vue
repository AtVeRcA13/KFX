<template>
  <first-section />
  <about-section />
  <company-section />
  <advantages-section />
  <product-section :slide-list="propsdata" />
  <direction-section />
  <contsctsSection />
  <popup-product />
</template>

<script setup>
import popupProduct from "popups/popup-product/index.vue"
import firstSection from "sections/section-first-section/index.vue"
import aboutSection from "sections/section-about/index.vue"
import companySection from "sections/section-company/index.vue"
import advantagesSection from "sections/section-advantages/index.vue"
import productSection from "sections/section-product/index.vue"
import directionSection from "sections/section-direction/index.vue"
import contsctsSection from "sections/section-contacts/index.vue"
import { useFetch } from "#app"
import { ref } from "vue"
const propsdata = ref([])
const { data, pending, error, refresh } = await useFetch('http://localhost:1337/api/produkcziyas/', {
  query: { "populate[product_info][populate]": "*", "populate[main_img][populate]": "*" }
})
console.log(data)
propsdata.value = data.value.data

</script>

<style lang="scss" scoped></style>