<template>
    <header ref="header" class="header">
        <div class="container header__inner">
            <logo />
            <header-info />
            <burger-menu />
        </div>
    </header>
</template>

<script setup>
import { onMounted, ref } from "vue";
import burgerMenu from "common/burgerMenu/index.vue"
import headerInfo from "./header-info/index.vue"
import logo from "common/logo/index.vue"
let header = ref();
onMounted(() => {

    /*  window.addEventListener('resize', calcMainPadding);
     //calcMainPadding();
     function calcMainPadding() {
         let headerHeight = header.value.offsetHeight;
         document.querySelector('.main').style.paddingTop = headerHeight + "px";
     }
     let lastScroll = 0;
     const defaultOffset = 600;
 
     const scrollPosition = () => {
         return window.pageYOffset || document.documentElement.scrollTop;
     }
     const containHide = () => {
         return header.value.classList.contains('header-hide');
     }
 
     window.addEventListener('scroll', () => {
         if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
             const headerHeight = window.getComputedStyle(header.value).height
             header.value.classList.add('header-hide');
 
         }
         else if (scrollPosition() < lastScroll && containHide()) {
             header.value.classList.remove('header-hide');
 
         }
         if (scrollPosition() > defaultOffset) {
             header.value.style.position = "fixed";
             calcMainPadding();
         }
         else {
             document.querySelector('.main').style.paddingTop = "0px";
         }
 
         lastScroll = scrollPosition();
     }) */

    if (!header.value) return
    calcMainPadding();
    window.addEventListener('resize', calcMainPadding);
    function calcMainPadding() {
        let headerHeight = header.value.offsetHeight;
        document.querySelector('.main').style.paddingTop = headerHeight + "px";
    }
    let lastScroll = 0
    const defaultOffset = 200
    const scrollPosition = () => {
        return window.pageYOffset || document.documentElement.scrollTop
    }
    const containHide = () => {
        return header.value.classList.contains('header-hide')
    }

    window.addEventListener('scroll', () => {
        if (
            scrollPosition() > lastScroll &&
            !containHide() &&
            scrollPosition() > defaultOffset
        ) {
            header.value.classList.add('header-hide')
        } else if (scrollPosition() < lastScroll && containHide()) {
            header.value.classList.remove('header-hide')
        }

        lastScroll = scrollPosition()
    })
})

</script>

<style lang="scss" scoped></style>