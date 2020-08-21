function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector)

    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = 17 + 'px'

    if (modalTimerId) {
        clearTimeout(modalTimerId)
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector)

    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    // Modal

    const modalTriggers = document.querySelectorAll(triggerSelector)
    const modal = document.querySelector(modalSelector)


    modalTriggers.forEach(item => {
        item.addEventListener('click', () => openModal(modalSelector, modalTimerId))
    })


    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal(modalSelector)
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector)
        }
    })

    function showModalByScroll() {
        if (document.documentElement.scrollHeight <= (document.documentElement.scrollTop + document.documentElement.clientHeight)) {
            openModal(modalSelector, modalTimerId)
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

    window.addEventListener('scroll', showModalByScroll)
}

export default modal
export {closeModal}
export {openModal}
