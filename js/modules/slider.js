function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    // Slider

    const slides = document.querySelectorAll(slide)
    const slider = document.querySelector(container)
    const prev = document.querySelector(prevArrow)
    const next = document.querySelector(nextArrow)
    const total = document.querySelector(totalCounter)
    const current = document.querySelector(currentCounter)
    const slidesWrapper = document.querySelector(wrapper)
    const slidesField = document.querySelector(field)
    const width = window.getComputedStyle(slidesWrapper).width

    let slideIndex = 1
    let offset = 0

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`
        current.textContent = `0${slideIndex}`
    } else {
        total.textContent = slides.length
        current.textContent = slideIndex
    }


    slidesField.style.width = 100 * slides.length + '%'
    slidesField.style.display = 'flex'
    slidesField.style.transition = 'all .5s ease'

    slidesWrapper.style.overflow = 'hidden'

    slides.forEach(item => {
        item.style.width = width;
    })

    slider.style.position = 'relative'

    const dots = document.createElement('ol')
    const indicators = []
    dots.classList.add('carousel-indicators')
    slider.append(dots)

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li')
        dot.dataset.slideTo = i + 1
        dot.classList.add('dot')

        if (i == 0) {
            dot.classList.add('active')
        }
        dots.append(dot)
        indicators.push(dot)
    }

    function deleteNums(exp) {
        return +exp.replace(/\D/g, '')
    }


    next.addEventListener('click', () => {
        if (offset == deleteNums(width) * (slides.length - 1)) {
            offset = 0
        } else {
            offset += deleteNums(width)
        }


        slidesField.style.transform = `translateX(-${offset}px)`

        if (slideIndex == slides.length) {
            slideIndex = 1
        } else {
            slideIndex++
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`
        } else {
            current.textContent = slideIndex
        }
        indicators.forEach(dot => dot.classList.remove('active'))
        indicators[slideIndex - 1].classList.add('active')
    })

    prev.addEventListener('click', () => {
        if (offset == 0) {

            offset = deleteNums(width) * (slides.length - 1)
        } else {
            offset -= deleteNums(width)
        }

        slidesField.style.transform = `translateX(-${offset}px)`

        if (slideIndex == 1) {
            slideIndex = slides.length
        } else {
            slideIndex--
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`
        } else {
            current.textContent = slideIndex
        }

        indicators.forEach(dot => dot.classList.remove('active'))
        indicators[slideIndex - 1].classList.add('active')


    })

    indicators.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to')

            slideIndex = slideTo
            offset = deleteNums(width) * (slideTo - 1)
            slidesField.style.transform = `translateX(-${offset}px)`

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`
            } else {
                current.textContent = slideIndex
            }

            indicators.forEach(dot => dot.classList.remove('active'))
            indicators[slideIndex - 1].classList.add('active')


        })
    })
    //default slider

    // showSlides(slideIndex)
    //
    // if(slides.length < 10){
    //     total.textContent = `0${slides.length}`
    // } else {
    //     total.textContent = slides.length
    // }
    //
    // function showSlides(n){
    //     if(n > slides.length){
    //         slideIndex = 1
    //     }
    //     if(n < 1){
    //         slideIndex = slides.length
    //     }
    //
    //     slides.forEach(item => item.style.display = 'none')
    //
    //     slides[slideIndex - 1].style.display = 'block'
    //
    //     if(slides.length < 10){
    //         current.textContent = `0${slideIndex}`
    //     } else {
    //         current.textContent = slideIndex
    //     }
    // }
    //
    // function plusSlides(n){
    //     showSlides(slideIndex += n)
    // }
    //
    // prev.addEventListener('click', () => {
    //     plusSlides(-1)
    // })
    // next.addEventListener('click', () => {
    //     plusSlides(1)
    // })
}

export default slider
