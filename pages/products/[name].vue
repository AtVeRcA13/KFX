<template>
    <div>
        {{ route.params.name }}
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()


console.log(route.params.name)
</script>

<style lang="scss" scoped></style>