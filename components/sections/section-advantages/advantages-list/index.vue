<template>
    <div class="advantages__wrapper">
        <advantagesItem v-for="item in itemsList" :img="item.img" :description="item.description" />
    </div>
</template>

<script setup>
import advantagesItem from "./advantages-item/index.vue"
import icon1 from "images/icon_tractor.png"
import icon2 from "images/icon_field.png"
import icon3 from "images/icon_farmer.png"
import icon4 from "images/icon-handshake.png"
const itemsList = [
    {
        img: icon1,
        description: "Собственный транспортный парк насчитывающий более 10 единиц тракторов и машин."
    },
    {
        img: icon2,
        description: "Площадь пашни в сельскохозяйственном обороте более 800 га."
    },
    {
        img: icon3,
        description: "КФХ Искандарова Т.Т. осуществляет деятельность с 2006 года иобладает большим опытом работы."
    },
    {
        img: icon4,
        description: "Индивидуальный подход к каждому клиенту"
    }
]
</script>

<style lang="scss" scoped></style>