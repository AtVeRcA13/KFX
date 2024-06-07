import { defineStore } from 'pinia'
export const useAppStore = defineStore('appStore', {
    state() {
        return {
            popupOpened: false,
            burgerMenuOpened: false
        }
    },
    actions: {
        togglePopup() {
            this.popupOpened = !this.popupOpened
        },
        toggleBurgerMenu() {
            this.burgerMenuOpened = !this.burgerMenuOpened
        }
    }
})