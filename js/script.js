import tabs from './modules/tabs'
import modal from './modules/modal'
import timer from './modules/timer'
import cards from './modules/cards'
import slider from './modules/slider'
import calc from './modules/calculator'
import forms from './modules/forms'
import {openModal} from './modules/modal'

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000)

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
    modal('[data-modal]', '.modal', modalTimerId)
    timer('.timer', '2020-09-01')
    calc()
    cards()
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        slide: '.offer__slide'


    })
    forms('form', modalTimerId)
})




































