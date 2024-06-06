<template>
    <swiper :modules="modules" class="main-slider" :slides-per-view="1" :allow-touch-move="false" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
    }">
        <swiper-slide class="main-slide">
            <img src="images/wheat_field.png" alt="" class="main__slide-img">
        </swiper-slide>
        <swiper-slide class="main-slide">
            <img src="images/wheat_field2.png" alt="" class="main__slide-img">
        </swiper-slide>
        <swiper-slide class="main-slide">
            <img src="images/wheat_field3.png" alt="" class="main__slide-img">
        </swiper-slide>

    </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
const modules = [Autoplay]


</script>

<style lang="scss" scoped></style>