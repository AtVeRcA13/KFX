<template>
    <ul class="products__list">
        <li class="products__list-item">
            <p class="products__list-item_text">
                Сорт: {{ props.info.sort.data.attributes.sort }}
            </p>
        </li>
        <li class="products__list-item">
            <p class="products__list-item_text">
                Цена: {{ props.price }}
            </p>
        </li>
        <li class="products__list-item">
            <p class="products__list-item_text">
                Упаковка: {{ props.info.packing.data.attributes.packing }}
            </p>
        </li>
        <li class="products__list-item">
            <p class="products__list-item_text">
                Вес: {{ props.info.weight }}
            </p>
        </li>
        <li class="products__list-item">
            <p class="products__list-item_text">
                В нвличие: {{ props.info.availability ? "да" : "нет" }}
            </p>
        </li>

    </ul>
    <button @click="clickHandler({
        name: props.name,
        title: props.title,
        price: props.price,
        sort: props.info.sort.data.attributes.sort
    })" class="pr-button products__button">Купить</button>
</template>

<script setup>
import { useAppStore } from 'store/appStore'
const props = defineProps(
    {
        info: Object,
        price: Number,
        name: String,
        title: String
    }
)
console.log(props.info)
const store = useAppStore()

const clickHandler = (data) => {
    store.setPopupData(data)
    store.togglePopup()
}
</script>

<style lang="scss" scoped></style>