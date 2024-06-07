<template>
    <button v-on:click="store.toggleBurgerMenu" class="header__burger-btn" id="burger">
        <span></span><span></span><span></span>
    </button>
</template>

<script setup>
import { useAppStore } from 'store/appStore'

const store = useAppStore()
</script>

<style lang="scss" scoped></style>