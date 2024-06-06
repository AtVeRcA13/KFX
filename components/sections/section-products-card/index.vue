<template>
    <div class="container products__container">
        <div class="products__header">
            <a class="products__button-back" href="javascript:history.back()">&larr;</a>
            <h3 class="products--title">Пшеница сорт :Амелия</h3>
        </div>
        <div class="products__inner">
            <img src="images/pr-wheat.png" alt="wheat" class="pr_img">
            <div class="products__structure">
                <h3 class="products__structure-title">Характеристика</h3>
                <ul class="products__list">
                    <li class="products__list-item">
                        <p class="products-sort">
                            Сорт: Амелия
                        </p>
                    </li>
                    <li class="products__list-item">
                        <p class="products-sort">
                            Вид: мягкая
                        </p>
                    </li>
                    <li class="products__list-item">
                        <p class="products-packaging">
                            Упаковка: мешки
                        </p>
                    </li>
                    <li class="products__list-item">
                        <p class="products-mass">
                            Вес: кг
                        </p>
                    </li>
                    <li class="products__list-item">
                        <p class="products-price">
                            Цена: 150р
                        </p>
                    </li>
                    <li class="products__list-item">
                        <p class="products-availability">
                            В наличие: да
                        </p>
                    </li>
                </ul>
                <button class="pr-button products__button" data-type="Пшеница сорт: Амелия" data-price="150">Купить</button>
            </div>
        </div>
        <div class="products__description">
            <h3 class="products__description-title">Описание</h3>
            <p class="products__descripition-text">Амелия – это новый озимый сорт мягкой пшеницы, созданный РУП
                Научно-Практический центр НАН Беларуси по земледелию в 2018 году. Этот сорт отличается высокой урожайностью
                и хорошей устойчивостью к различным заболеваниям.</p>
        </div>
    </div>
</template>

<script setup>
import popupProduct from "popup/"
</script>

<style lang="scss" scoped></style>