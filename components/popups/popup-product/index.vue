<template>
    <Teleport to="body">
        <form @submit="formSubmitHandler" v-if="store.popupOpened" class="products__popup" action="#">
            <div class="popup__container">
                <div @click="store.togglePopup" class="popup__close">&#10006;</div>
                <div class="popup__body">
                    <h2 class="form__title">Заявка {{ store.popupData.title }} {{ store.popupData.sort }}</h2>

                    <p></p>
                    <div class="form-row"><input class="form-input" type="text" name="name" placeholder="Имя" required>
                    </div>
                    <div class="form-row"><input v-maska data-maska="+7 (###) ###-##-##" class="form-input" type="tel"
                            name="phone" placeholder="Телефон" required>
                    </div>
                    <div class="form-row"><input class="form-input" type="email" name="email" placeholder="Почта" required>
                    </div>
                    <div class="form-row">
                        <div class="form-button__count">
                            <div>
                                <button @click="decrement" class="change minus" type="button">&#8722;</button>
                                <input @input="inputHandler" class="change form__product-count" type="number"
                                    name="product-count" max="999" min="0" v-model="count">
                                <button @click="increment" class="change plus" type="button">&#43;</button>
                            </div>
                            <p class="products_sum">{{ summ }}</p>
                        </div>
                    </div>
                    <button class="form-button">Отправить</button>
                </div>
            </div>
        </form>
        <message v-model:visible="visible">Успешно</message>
    </Teleport>
</template>

<script setup>
import message from "ui/massege/index.vue"
import { useAppStore } from 'store/appStore'
import { ref, computed } from 'vue'
import { vMaska } from "maska/vue"
const visible = ref(false)
const store = useAppStore()
const formSubmitHandler = async function (e) {
    e.preventDefault();
    const form = e.currentTarget
    const formData = new FormData(form);
    formData.append("product-name", store.popupData.name);
    formData.append("summ", summ.value);
    const response = await fetch("http://localhost/mail.php", {
        method: "POST",
        body: formData,
    });
    form.reset();
    store.togglePopup();
    visible.value = true;
};

const count = ref(1)
const price = ref(150)
const summ = computed(() => {
    return Number(count.value) * store.popupData.price
})
function inputHandler() {
    if (Number(count.value) <= 0) {
        count.value = 1
    }
    if (count.value.toString().length > 3) {
        count.value = count.value.toString().slice(0, 3);

    }
}

function increment() {
    if (count.value <= 998) {
        count.value++
    }

}
function decrement() {
    if (count.value >= 2) {
        count.value--
    }

}

</script>

<style lang="scss" scoped></style>