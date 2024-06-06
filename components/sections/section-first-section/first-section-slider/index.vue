<template>
    <swiper :modules="modules" class="main-slider" :slides-per-view="1" :allow-touch-move="false" @swiper="onSwiper"
        @slideChange="onSlideChange" :autoplay="{
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
const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};
</script>

<style lang="scss" scoped></style>