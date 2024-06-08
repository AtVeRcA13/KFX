<template>
    <div v-if="props.visible" class="message">
        <slot />

    </div>
</template>

<script setup>
import { watch } from 'vue';
const props = defineProps({
    visible: {
        type: Boolean, default: false,
    },
    life: {
        type: Number, default: 3000,
    }
})

const emit = defineEmits(['update:visible']);
watch(() => props.visible, (isVisible) => {
    if (isVisible === true) {
        setTimeout(() => {
            emit("update:visible", false)
        }, props.life)
    }
});

</script>

<style lang="scss" scoped>
.message {
    position: fixed;
    z-index: 1000;
    width: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #04ad04;
    text-align: center;
    color: #fff;
    padding: 10px;
}
</style>