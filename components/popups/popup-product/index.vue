<template>
    <form class="products__popup" action="#" data-price="150">
        <div class="popup__container">
            <div class="popup__close">&#10006;</div>
            <div class="popup__body">
                <h2 class="form__title">Заявка</h2>
                <div class="form-row"><input class="form-input" type="text" name="name" placeholder="Имя" required></div>
                <div class="form-row"><input class="form-input" type="tel" name="phone" placeholder="Телефон" required>
                </div>
                <div class="form-row"><input class="form-input" type="email" name="email" placeholder="Почта" required>
                </div>
                <div class="form-row">
                    <div class="form-button__count">
                        <div>
                            <button class="change minus" type="button">&#8722;</button>
                            <input class="change form__product-count" type="text" name="productСount" maxlength="3"
                                value="1">
                            <button class="change plus" type="button">&#43;</button>
                        </div>
                        <p class="products_sum">150</p>
                    </div>
                </div>
                <label class="user-agreement">
                    <input class="user-agreement__checkbox" type="checkbox" name="user-agreement__checkbox" required>
                    <p class="user-agreement__text">Согласен с <a class="user-agreement__link"
                            href="privacy-policy.html">условиями</a> обработки персональных данных</p>
                </label>
                <button class="form-button">Отправить</button>
            </div>
        </div>
    </form>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>