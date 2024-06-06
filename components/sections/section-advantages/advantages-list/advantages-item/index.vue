
<template>
    <div class="advantages__wrapper_item">
        <img :src="props.img" alt="" class="advantages-img">
        <p class="advantages-text">{{ props.description }}</p>
    </div>
</template>

<script setup>
const props = defineProps(
    {
        img: String,
        description: String
    })

</script>

<style lang="scss" scoped></style>