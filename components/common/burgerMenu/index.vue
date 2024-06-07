<template>
    <Transition name="fade">
        <nav class="burger-menu" v-if="store.burgerMenuOpened">
            <ul class="burger-menu__list">
                <li class="burger-menu__list-item">
                    <a href="#main" class="burger-menu__list-link">Главная</a>
                </li>
                <li class="burger-menu__list-item">
                    <a href="#about" class="burger-menu__list-link">Глава КФХ</a>
                </li>
                <li class="burger-menu__list-item">
                    <a href="#company" class="burger-menu__list-link">О компании</a>
                </li>
                <li class="burger-menu__list-item">
                    <a href="#advantages" class="burger-menu__list-link">Преимущества</a>
                </li>
                <li class="burger-menu__list-item">
                    <a href="#products" class="burger-menu__list-link">Продукция</a>
                </li>
                <li class="burger-menu__list-item">
                    <a href="#direction" class="burger-menu__list-link">Направление</a>
                </li>
                <li class="burger-menu__list-item">
                    <a href="#contacts" class="burger-menu__list-link">Контакты</a>
                </li>
            </ul>
        </nav>
    </Transition>
</template>

<script setup>
import { useAppStore } from 'store/appStore'

const store = useAppStore()
</script>

<style lang="scss" >
.burger-menu {
    padding: 70px 0;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: #007D1A;
}

.burger-menu__list {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.burger-menu__list-item {
    padding: 10px 0;
}

.fade-enter-active,
.fade-leave-active {
    transform: translateX(0%);
    transition: transform, opacity, 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}
</style>