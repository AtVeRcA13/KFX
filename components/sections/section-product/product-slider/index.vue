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

            <swiper-slide class="products__plants" v-for="item in slideList" :key="item.id">
                <img :src="$config.public.API_BASE_URL + item.attributes.main_img.data.attributes.url" alt=""
                    class="products__img">
                <p class="products__name">{{ item.attributes.title }}</p>
                <p class="products__price">Цена: {{ item.attributes.price }}</p>
                <button @click="clickHandler({
                    name: item.attributes.name,
                    title: item.attributes.title,
                    price: item.attributes.price,
                    sort: item.attributes.product_info.sort.data.attributes.sort
                })" class="pr-button products__button">Купить</button>
                <NuxtLink :to="`/products/${item.attributes.name}`" class="pr-button products__link">Подробнее</NuxtLink>

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
import { useAppStore } from 'store/appStore'
import { Swiper, SwiperSlide } from 'swiper/vue';


const props = defineProps({
    slideList: {
        type: Array,
        default: () => []
    }
})
const clickHandler = (data) => {
    store.setPopupData(data)
    store.togglePopup()
}

const modules = [Pagination, Navigation]

const store = useAppStore()
</script>


<style lang="scss" scoped>
.products__link {
    color: #fff
}
</style>