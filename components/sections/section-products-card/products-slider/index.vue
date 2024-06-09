<template>
    <swiper :modules="modules" class="products-slider-card" :slides-per-view="1" :scrollbar='{
        "hide": true
    }' :navigation="{
    nextEl: '.slider-button-next-product',
    prevEl: '.slider-button-prev-product',
}">
        <swiper-slide v-for="img in props.img" class="products-slide">
            <img :src="$config.public.API_BASE_URL + img.attributes.url" class="pr_img">
        </swiper-slide>
        <div class="swiper-button-next slider-button-next-product"></div>
        <div class="swiper-button-prev slider-button-prev-product"></div>
    </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Scrollbar, Navigation } from "swiper/modules"
const modules = [Scrollbar, Navigation]
const props = defineProps(
    {
        img: Array,
    })

</script>

<style lang="scss" scoped></style>