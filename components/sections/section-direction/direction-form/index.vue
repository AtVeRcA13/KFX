<template>
    <form @submit="formSubmitHandler" class="form">
        <div class="form__container">
            <h2 class="form__title">Форма обратной связи</h2>
            <div class="form-row"><input class="form-input" type="text" name="name" placeholder="Имя" required>
            </div>
            <div class="form-row"><input v-maska data-maska="+7 (###) ###-##-##" class="form-input" type="tel" name="phone"
                    placeholder="Телефон" required>
            </div>
            <div class="form-row"><input class="form-input" type="email" name="email" placeholder="Почта" required>
            </div>
            <div class="form-row"><textarea class="form-input" name="info" placeholder="Примечание" cols="30"
                    rows="3"></textarea></div>

            <button class="form-button" data-type="коневодство">Отправить</button>
        </div>
    </form>
    <massege v-model:visible="visible">Заявка отправлена</massege>
</template>

<script setup>
import massege from "ui/massege/index.vue"
import { vMaska } from 'maska/vue';
import { ref } from "vue";
const visible = ref(false)
const formSubmitHandler = async function (e) {
    e.preventDefault();
    const form = e.currentTarget
    const formData = new FormData(form);
    const response = await fetch("http://localhost/mail.php", {
        method: "POST",
        body: formData,
    });
    form.reset();
    visible.value = true;
};
</script>

<style lang="scss" scoped></style>