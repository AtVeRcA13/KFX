import { defineStore } from 'pinia'
export const useAppStore = defineStore('appStore', {
    state() {
        return {
            popupOpened: false,
            burgerMenuOpened: false,
            FilterOpened: false,
            popupData: {
                title: "",
                price: 0,
                name: "",
                sort: ""
            }
        }
    },
    actions: {
        togglePopup() {
            this.popupOpened = !this.popupOpened
        },
        toggleBurgerMenu() {
            this.burgerMenuOpened = !this.burgerMenuOpened
        },
        closeBurgerMenu() {
            this.burgerMenuOpened = false
        },
        setPopupData(data) {
            this.popupData = data
        },
        toggleFilter() {
            this.FilterOpened = !this.FilterOpened;
        },

    }
})