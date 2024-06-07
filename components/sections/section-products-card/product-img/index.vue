<template>
    <img :src="props.img" class="pr_img">
</template>

<script setup>
const props = defineProps(
    {
        img: String,
    })

</script>

<style lang="scss" scoped></style>