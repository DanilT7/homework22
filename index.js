let laptop = document.getElementById('laptop');
let videocard = document.getElementById('videocard');
let car = document.getElementById('car');

let macbookAir = document.getElementById('macbook-air');
let macbookPro = document.getElementById('macbook-pro');
let intelcorei3 = document.getElementById('intelcori3');
let intelcorei5 = document.getElementById('intelcori5');
let nissanAria = document.getElementById('nissan-aria');
let audiQ7grey = document.getElementById('audi-q7');

let macbookAirDescription = document.querySelector('.macbook-air');
let macbookProDescription = document.querySelector('.macbook-pro');
let intelcorei3Description = document.querySelector('.intelcori3');
let intelcorei5Description = document.querySelector('.intelcori5');
let nissanAriaDescription = document.querySelector('.nissan-aria');
let audiQ7greyDescription = document.querySelector('.audi-q7');

let laptopList = document.querySelector('.goods_laptop');
let videocardList = document.querySelector('.goods_videocard');
let carList = document.querySelector('.goods_car');

let ulCategories = document.querySelector('.list_categories');
let ulGoods = document.querySelector('.goods_wrap');
let ulDescription = document.querySelector('.description_wrap');

let modalEl = document.querySelector('.modal');

let closeModal = document.querySelector('.modal-button');

ulCategories.addEventListener('click', classAdd);
ulGoods.addEventListener('click', classAdd1);
ulDescription.addEventListener('click', classRemove);
closeModal.addEventListener('click', modalToggleClass);

function classAdd(event) {
    if (event.target.tagName === 'P') {
        const activeEl = document.querySelector('.active');
        if (activeEl) {
            activeEl.classList.remove('active')
        }
        if (event.target.id === 'laptop') {
            laptopList.classList.add('active');
        } else if (event.target.id === 'videocard') {
            videocardList.classList.add('active');
        }
        else if (event.target.id === 'car') {
            carList.classList.add('active');
        }
    }
}
function classAdd1(event) {
    if (event.target.tagName === 'P') {
        const activeEl1 = document.querySelector('.active1');
        if (activeEl1) {
            activeEl1.classList.remove('active1')
        }
        if (event.target.id === 'macbook-air') {
            macbookAirDescription.classList.add('active1');
        }
        else if (event.target.id === 'macbook-pro') {
            macbookProDescription.classList.add('active1');
        } else if (event.target.id === 'intelcori3') {
            intelcorei3Description.classList.add('active1');
        } else if (event.target.id === 'intelcori5') {
            intelcorei5Description.classList.add('active1');
        } else if (event.target.id === 'nissan-aria') {
            nissanAriaDescription.classList.add('active1');
        } else if (event.target.id === 'audi-q7') {
            audiQ7greyDescription.classList.add('active1');
        }
    }
}

function classRemove(event) {
    if (event.target.tagName === 'BUTTON') {
        const activeEl = document.querySelector('.active');
        const activeEl1 = document.querySelector('.active1');
        if (activeEl) {
            activeEl.classList.remove('active');
        }
        if (activeEl1) {
            activeEl1.classList.remove('active1');
        }
        modalToggleClass()
    }
}
function modalToggleClass() {
    modalEl.classList.toggle('d-none');
}