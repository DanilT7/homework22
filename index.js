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
let secondModalEl = document.querySelector('.second-modal');

ulCategories.addEventListener('click', classAdd);
ulGoods.addEventListener('click', classAdd1);
ulDescription.addEventListener('click', classRemove);
// closeModal.addEventListener('click', modalToggleClass);

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

const form = document.getElementById('modal-buy');
// let closeModal = document.querySelector('.modal-button');

function printError(element, message) {
    form.elements[element].parentElement.querySelector('small').textContent = message;
}

const inputs = form.querySelectorAll('input[type="text"]');

inputs.forEach(function(input) {
    input.addEventListener('input', () => {
        const small = input.parentElement.querySelector('small');
        if(input.value === '') {
            // input.parentElement.querySelector('small').textContent = '';
            small.textContent = 'Fill in the field';
        } else {
            small.textContent = '';
        }
    })
})

const selects = form.querySelectorAll('select');

selects.forEach(function(select) {
    select.addEventListener('change', () => {
        const small = select.parentElement.querySelector('small');
        if(select.options.selectedIndex === 0) {
            // input.parentElement.querySelector('small').textContent = '';
            small.textContent = 'Fill in the field';
        } else {
            small.textContent = '';
        }
    })
})

const radioEls = form.querySelectorAll('input[type="radio"][name="cashcard"]');

radioEls.forEach((radio) => {
    radio.addEventListener('change', () => {
        if(radio.checked) {
            form.elements.radioCash.parentElement.parentElement.querySelector('small').textContent = '';
        } else {
            form.elements.radioCash.parentElement.parentElement.querySelector('small').textContent = 'Enter payment method';
        }
    })
})

// form.elements.city.value.addEventListener('change', () => {
//     form.elements.city.parentElement.querySelector('small').textContent = '';
// })



form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(form.elements.name.value === '') {
        // form.elements.name.parentElement.querySelector('small').textContent = 'Enter your name';
        printError('name', 'Fill in the field');
    }
    if(form.elements.city.options.selectedIndex === 0) {
        form.elements.city.parentElement.querySelector('small').textContent = 'Fill in the field';
    }
    if(form.elements.NovaPoshta.value === '') {
        // form.elements.NovaPoshta.parentElement.querySelector('small').textContent = 'Enter storage';
        printError('NovaPoshta', 'Fill in the field')
    } 

    if(!form.elements.radioCash.checked && !form.elements.radioCard.checked) {
        form.elements.radioCash.parentElement.parentElement.querySelector('small').textContent = 'Enter payment method';
        // printError('radioCash', 'Enter payment method')
    } 
    if(form.elements.amount.options.selectedIndex === 0) {
        form.elements.amount.parentElement.querySelector('small').textContent = 'Fill in the field';
    }

    // const smalls = document.querySelectorAll('small');

    // smalls.forEach((small) => {
    //     if(small.textContent === '') {
    //         console.log('del class');
    //         modalEl.classList.remove('d-none');
    //     }
    // })
    const formIsNotValid = form.elements.name.value === '' || form.elements.city.options.selectedIndex === 0 || form.elements.NovaPoshta.value === '' || (!form.elements.radioCash.checked && !form.elements.radioCard.checked) || form.elements.amount.options.selectedIndex === 0;
    if(formIsNotValid) {
        console.log('form is not valid');
        
    } else {
        console.log('form is valid')
        modalEl.classList.add('d-none');
        secondModalEl.classList.remove('d-none');
        secondModalBodyEl = document.querySelector('.second-modal-body');

        secondModalBodyEl.innerHTML =  `
        <p>Name:${form.elements.name.value}</p>
        <p>City:${form.elements.city.value}</p>
        <p>Nova Poshta Storage:${form.elements.NovaPoshta.value}</p>
        <p>Payment:${form.elements.radioCash.checked ? 'Cash' : 'Bank card'}</p>
        <p>Amount:${form.elements.amount.value}</p>
        <p>Your comment:${form.elements.comment.value}</p>
        `;
        

        const secondModalButtonEl = document.querySelector('.second-modal-button');

        secondModalButtonEl.addEventListener('click', () => {
            secondModalEl.classList.add('d-none');
        })

    }    
})


// form.elements.name.addEventListener('input', (e) => {
//     printError('name', '')
// })




// form.elements.radioCash.addEventListener('click', (e) => {
//     form.elements.radioCash.checked = true;
//     form.elements.radioCard.checked = false;
// })

// form.elements.radioCard.addEventListener('click', (e) => {
//     form.elements.radioCard.checked = true;
//     form.elements.radioCash.checked = false;
// })

