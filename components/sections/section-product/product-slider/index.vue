<template>
    <div class="slider-wrapper">

        <swiper :slidesPerView="4" :spaceBetween="30" :modules="modules" :pagination="{
            clickable: true, el: '.pagination'
        }" :navigation="{
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
}
    " :breakpoints="{

        300: {
            slidesPerView: 1,
        },
        774: {
            slidesPerView: 2,
        },
        962: {
            slidesPerView: 2,
        },
        1300: {
            slidesPerView: 3,
        },
        1800: {
            slidesPerView: 4,
        }
    }
        " class="products-slider">

            <swiper-slide class="products__plants" v-for="item in slideList">
                <img :src="$config.public.API_BASE_URL + item.attributes.main_img.data.attributes.url" alt=""
                    class="products__img">
                <p class="products__name">{{ item.name }}</p>
                <p class="products__price">{{ item.price }}</p>
                <button @click="store.togglePopup" class="pr-button products__button" data-type="Пшеница сорт: Амелия"
                    data-price="150">Купить</button>
                <NuxtLink :to="`/products/${item.product}`" class="pr-button products__link"
                    data-type="Пшеница сорт: Амелия" data-price="150">Подробнее</NuxtLink>

            </swiper-slide>

        </swiper>
        <div class="swiper-pagination pagination"></div>
        <div class="swiper-button-next slider-button-next"></div>
        <div class="swiper-button-prev slider-button-prev"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Pagination, Navigation } from 'swiper/modules'
import img1 from "images/wheat.png"
import img2 from "images/Corn.png"
import img3 from "images/barley.png"
import img4 from "images/Buckwheat.png"
import img5 from "images/oats.png"
import img6 from "images/peas.png"
import img7 from "images/switchgrass.png"
import img8 from "images/Rye.png"
import { useAppStore } from 'store/appStore'
import { Swiper, SwiperSlide } from 'swiper/vue';

const props = defineProps({
    slideList: {
        type: Array,
        default: () => []
    }
})

const modules = [Pagination, Navigation]
/* const slideList = ref([
    {
        img: data.main_img,
        name: data.name,
        price: data.price,
        product: data.sort
    },
    {
        img: img2,
        name: "Кукуруза cорт:",
        price: "Цена: 150 р",
        product: "amelia"
    },
    {
        img: img3,
        name: "Ячмень cорт:",
        price: "Цена: 150 р",
        product: "amelia"
    },
    {
        img: img4,
        name: "Гречиха cорт:",
        price: "Цена: 150 р",
        product: "amelia"
    },
    {
        img: img5,
        name: "Овес cорт:",
        price: "Цена: 150 р",
        product: "amelia"
    },
    {
        img: img6,
        name: "Горох cорт:",
        price: "Цена: 150 р",
        product: "amelia"
    },
    {
        img: img7,
        name: "Просо cорт:",
        price: "Цена: 150 р",
        product: "amelia"
    },
    {
        img: img8,
        name: "Рожь cорт:",
        price: "Цена: 150 р",
        product: "amelia"
    },

]) */

const store = useAppStore()
</script>


<style lang="scss" scoped>
.products__link {
    color: #fff
}
</style>