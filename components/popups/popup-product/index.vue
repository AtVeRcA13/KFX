<template>
    <form @submit="formSubmitHandler" v-if="store.popupOpened" class="products__popup" action="#" data-price="150">
        <div class="popup__container">
            <div @click="store.togglePopup" class="popup__close">&#10006;</div>
            <div class="popup__body">
                <h2 class="form__title">Заявка</h2>
                <div class="form-row"><input class="form-input" type="text" name="name" placeholder="Имя" required></div>
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
                                name="productСount" max="999" min="0" v-model="count">
                            <button @click="increment" class="change plus" type="button">&#43;</button>
                        </div>
                        <p class="products_sum">{{ summ }}</p>
                    </div>
                </div>
                <button class="form-button">Отправить</button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { useAppStore } from 'store/appStore'
import { ref, computed } from 'vue'
import { vMaska } from "maska/vue"

const formSubmitHandler = function (e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = elements["email"];
    const phone = elements["phone"];
    const name = elements["name"];
    const info = elements["info"];
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("phone", phone.value);
    formData.append("info", info.value);
    formData.append("type", typee === undefined ? type : typee);
    console.log(type);
    const response = await fetch("http://iskandarovv.ru/mail.php", {
        method: "POST",
        body: formData,
    });
    console.log(form);
    form.reset();
};

const count = ref(1)
const price = ref(150)
const summ = computed(() => {
    return Number(count.value) * price.value
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
const store = useAppStore()
</script>

<style lang="scss" scoped></style>