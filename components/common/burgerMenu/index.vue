<template>
    <Transition name="fade">
        <nav class="burger-menu" v-if="store.burgerMenuOpened">
            <ul class="burger-menu__list">
                <li class="burger-menu__list-item">
                    <nuxt-link href="#main" class="burger-menu__list-link">Главная</nuxt-link>
                </li>
                <li class="burger-menu__list-item">
                    <nuxt-link href="#about" class="burger-menu__list-link">Глава КФХ</nuxt-link>
                </li>
                <li class="burger-menu__list-item">
                    <nuxt-link href="#company" class="burger-menu__list-link">О компании</nuxt-link>
                </li>
                <li class="burger-menu__list-item">
                    <nuxt-link href="#advantages" class="burger-menu__list-link">Преимущества</nuxt-link>
                </li>
                <li class="burger-menu__list-item">
                    <nuxt-link href="#products" class="burger-menu__list-link">Продукция</nuxt-link>
                </li>
                <li class="burger-menu__list-item">
                    <nuxt-link href="#direction" class="burger-menu__list-link">Направление</nuxt-link>
                </li>
                <li class="burger-menu__list-item">
                    <nuxt-link href="#contacts" class="burger-menu__list-link">Контакты</nuxt-link>
                </li>
            </ul>
        </nav>
    </Transition>
</template>

<script setup>
import { useAppStore } from 'store/appStore'
import { useRoute } from 'vue-router';
import { watch } from "vue";

const store = useAppStore()
const route = useRoute()
watch(() => route.fullPath, () => {
    store.closeBurgerMenu();
})

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