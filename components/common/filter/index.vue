<template>
    <div class="dropdown" @click="opened = !opened">
        <div class="dropdown_header">
            <p class="dropdown-title">{{ props.currentOption }}</p>
            <icons-strelka class="static-icon" :class="{ dropdown__header_icon: opened }" />
        </div>
        <div class="dropdown_body" :class="{ dropdown_opened: opened }">
            <ul class="dropdown__list">
                <li :class="[{ 'current-option': props.currentOption === item.attributes.class }]" :key="item.id"
                    v-for="item in props.optionsList" @click="emit('select-option', item.attributes.class)"
                    class="dropdown__list_item">
                    <p>{{ item.attributes.class }}</p>
                </li>
                <li :class="[{ 'current-option': props.currentOption === 'Вся продукция' }]"
                    @click="emit('select-option', 'Вся продукция')" class="dropdown__list_item">
                    <p>Вся продукция</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import IconsStrelka from "icons/strelka.vue"
import { ref } from 'vue';
const emit = defineEmits(["select-option"])
const props = defineProps({
    optionsList: {
        type: Array,
        default: () => []
    },
    currentOption: {
        type: String
    }
})
const opened = ref(false)
</script>

<style lang="scss" scoped>
.dropdown {
    position: relative;
    transition: height .3s ease;
    width: -moz-fit-content;
    width: fit-content;
    z-index: 50;
    margin-left: 50px;

}

.dropdown_header {
    align-items: center;
    background: #f2f2f2;
    cursor: pointer;
    display: flex;
    padding: 16px 18px;
    position: relative;
    z-index: 20;
}

.dropdown-title {
    color: #404040;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 6%;
    line-height: 17px;
    text-transform: uppercase;
}

.static-icon {
    transform: rotate(0);
    display: block;
    margin-left: 20px;
}

.dropdown__header_icon {
    transform: rotate(180deg);
}

.dropdown__header_icon {
    display: block;
    margin-left: 20px;
    transition: transform .2s ease;
}

.dropdown_body {
    position: absolute;
    background: #f2f2f2;
    opacity: 0;
    width: 100%;
    z-index: 1;
    transform: translateY(-20px);
    transition: transform, opacity, 0.3s;

}

.dropdown__list_item {
    display: flex;
    align-items: center;
    color: #555;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    text-transform: uppercase;
    transition: .2s ease;
    padding: 16px 18px;
}

.dropdown_opened {
    opacity: 1;
    transform: translateY(0);
}

.current-option {
    display: none;
}
</style>