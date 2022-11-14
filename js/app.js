        // Navbar open close

const listBtnArr = document.querySelectorAll('.list__btn')
const listMenuArr = document.querySelectorAll('.list__menu')

function removeListClasses() {
    for (let j = 0; j < listMenuArr.length; j++) {
        listMenuArr[j].classList.remove('open')
        listBtnArr[j].classList.remove('active')
    }
}

for (let i = 0; i < listBtnArr.length; i++) {
    listBtnArr[i].addEventListener('click', function () {
        let item = listBtnArr[i]
        if (item.classList.contains('active')) {
            removeListClasses()
            backdropClose()
        } else {
            removeListClasses()
            closeMenu()
            backdropOpen()
            item.nextElementSibling.classList.add('open')
            item.classList.add('active')
        }
    })
}

// Menu open close

const burgerBtn = document.querySelector('.burger__btn')
const headerMenu = document.querySelector('.header__menu')

function closeMenu() {
    headerMenu.classList.remove('open')
    burgerBtn.querySelector('.burger__icon').classList.remove('d-none')
    burgerBtn.querySelector('.close__icon').classList.add('d-none')
}

function openMenu() {
    headerMenu.classList.add('open')
    burgerBtn.querySelector('.burger__icon').classList.add('d-none')
    burgerBtn.querySelector('.close__icon').classList.remove('d-none')
}

function toggleMenu() {
    if (headerMenu.classList.contains('open')) {
        closeMenu()
        backdropClose()
    } else {
        removeListClasses()
        openMenu()
        backdropOpen()
    }
}

burgerBtn.addEventListener('click', toggleMenu)

// Backdrop function

const backdrop = document.querySelector('.backdrop')

function backdropOpen() {
    backdrop.classList.add('open')
}

function backdropClose() {
    backdrop.classList.remove('open')
}

backdrop.addEventListener('click', function () {
    removeListClasses()
    closeMenu()
    backdropClose()
})

// Card hover functions

const card = document.querySelectorAll('.card')

for (let j = 0; j < card.length; j++) {
    const cardList = card[j].querySelectorAll('.card__list-item')
    const cardBgImage = card[j].querySelector('.card__bg-image')
    card[j].addEventListener('mouseover', function () {
        for (let i = 0; i < cardList.length; i++) {
            cardList[i].addEventListener('mouseover', function () {
                let imageData = cardList[i].getAttribute('data-src')
                cardBgImage.setAttribute('src', imageData)
            })
        }
    })

    card[j].addEventListener('mouseleave', function () {
        let imageData = cardList[0].getAttribute('data-src')
        cardBgImage.setAttribute('src', imageData)
    })
}
