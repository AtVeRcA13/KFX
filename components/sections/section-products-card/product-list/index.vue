<template>
    <ul class="products__list">
        <li v-for="item in productsList" class="products__list-item">
            <p class="products__list-item_text">
                {{ item.name }}
            </p>
        </li>
    </ul>
    <button @click="store.togglePopup" class="pr-button products__button" data-type="Пшеница сорт: Амелия"
        data-price="150">Купить</button>
</template>

<script setup>
import { ref } from "vue"
import { useAppStore } from 'store/appStore'
const productsList = ref([
    {
        name: "сорт: Амелия"
    },
    {
        name: "Вид: зерновой"
    },
    {
        name: "Упаковка: мешки"
    },
    {
        name: "Вес: кг"
    },
    {
        name: "Цена: 150р"
    },
    {
        name: "В наличие: да"
    }
])


const store = useAppStore()
</script>

<style lang="scss" scoped></style>