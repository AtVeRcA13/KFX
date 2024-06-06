<template>
    <form class="form">
        <div class="form__container">
            <h2 class="form__title">Форма обратной связи</h2>
            <div class="form-row"><input class="form-input" type="text" name="name" placeholder="Имя" required>
            </div>
            <div class="form-row"><input class="form-input" type="tel" name="phone" placeholder="Телефон" required>
            </div>
            <div class="form-row"><input class="form-input" type="email" name="email" placeholder="Почта" required>
            </div>
            <div class="form-row"><textarea class="form-input" name="info" placeholder="Примечание" cols="30"
                    rows="3"></textarea></div>

            <button class="form-button" data-type="коневодство">Отправить</button>
        </div>
    </form>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>