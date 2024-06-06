<template>
    <div ref="mapRef" class="map" id="map"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const mapRef = ref()
onMounted(() => {
    if (mapRef.value) {
        let center = [53.596056, 56.048125];
        function init() {
            let map = new ymaps.Map('map', {
                center: center,
                zoom: 16,
            }),
                myGeoObject = new ymaps.GeoObject({
                    // Описание геометрии.
                    geometry: {
                        type: "Point",
                        coordinates: [53.596056, 56.048125]
                    },
                    // Свойства.
                    properties: {
                        // Контент метки.
                        // iconContent: 'Видное',
                        hintContent: 'Наше КФХ'
                    }
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',

                    // Размеры метки.
                    iconImageSize: [30, 30],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    //iconImageOffset: [-35, -78]
                })
            map.geoObjects
                .add(myGeoObject)
            map.controls.remove('geolocationControl'); // удаляем геолокацию
            map.controls.remove('searchControl'); // удаляем поиск
            map.controls.remove('trafficControl'); // удаляем контроль трафика
            map.controls.remove('typeSelector'); // удаляем тип
            // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
            // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
            map.controls.remove('rulerControl'); // удаляем контрол правил
            // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
        }
        ymaps.ready(init);
    }

})

</script>

<style lang="scss" scoped></style>