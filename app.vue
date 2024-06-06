<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useHead } from '#imports';
useHead({
  script: [
    {
      src: "https://api-maps.yandex.ru/2.1/?apikey=27cb8373-5688-4495-87b9-2b9961d6254b&lang=ru_RU",
      type: "text/javascript",
      tagPosition: "head",
      defer: true
    }
  ]
})
</script>


