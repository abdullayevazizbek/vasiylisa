const sliderTrack = document.querySelector('.slider__track')
const sliderNextBtn = document.querySelector('.slider__btn-next')
const sliderPrevBtn = document.querySelector('.slider__btn-prev')
const sliderItems = document.querySelector('.slider__item')
const sliderItemWidth = document.querySelector('.slider__item').clientWidth
const lastSliderItem = sliderItems.length -1
let acctiveSliderItem = 0

function moveNext(n) {
    sliderTrack.style.left = `-${n * sliderItemWidth}px`
}

function moveNext(n) {
    sliderTrack.style.left = `-${n * sliderItemWidth}px`
}


sliderNextBtn.addEventListener('click', function () {
    if (acctiveSliderItem === lastSliderItem) {
        acctiveSliderItem = 0
    }else{
        acctiveSliderItem ++
    }
    moveNext(acctiveSliderItem)
})

sliderPrevBtn.addEventListener('click', function () {
    if (acctiveSliderItem === 0) {
        acctiveSliderItem = lastSliderItem
    }else{
        acctiveSliderItem --
    }
    moveNext(acctiveSliderItem)
})

//  const name = new swiper(arguments);