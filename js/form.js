let headerBtn = document.getElementById('header-btn')
let mainBtn = document.getElementById('main-btn')
let popup = document.getElementById('popup')
let popupBtn = document.getElementById('popup-btn')

let closeBtn = document.querySelector('.cl-btn')

let navBtn = document.getElementById('nav-btn')

let headerBurger = document.querySelector('.header__burger')

let active = headerBurger.classList

popupBtn.addEventListener('click', () => {
  submitHandler()
})

closeBtn.addEventListener('click', () => {
  popup.classList.toggle('open-popup')
  document.querySelector('body').classList.toggle('lock');
})

headerBtn.addEventListener("click", () => {
  if (!headerBurger.classList.contains(active)) {
    popup.classList.toggle('open-popup')
    document.querySelector('body').classList.toggle('lock');
    console.log('yes')
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__navigation-tab').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('.header__nav-btns').classList.toggle('active');

    document.querySelector('body').classList.toggle('lock');
  } else {
    popup.classList.toggle('open-popup')
    document.querySelector('body').classList.toggle('lock');
  }

}
);

navBtn.addEventListener('click', () => {
  if (!headerBurger.classList.contains(active)) {
    popup.classList.toggle('open-popup')
    document.querySelector('body').classList.toggle('lock');
    console.log('yes')
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__navigation-tab').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('.header__nav-btns').classList.toggle('active');

    document.querySelector('body').classList.toggle('lock');
  } else {
    popup.classList.toggle('open-popup')
    document.querySelector('body').classList.toggle('lock');
  }
})

document.getElementById('main-btn').addEventListener("click", function(event) {
  document.querySelector('body').classList.toggle('lock');

  popup.classList.toggle('open-popup')
}
);


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const input = document.getElementById('popup__input');

function submitHandler () {
  if (input.value == '' || input.value == null) {
    alert('Введите эл. почту')
  } else {
    if(isEmailValid(input.value)) {
      popup.classList.toggle('open-popup');
      input.value = ''
    } else {
      alert('Неверный адрес эл. почты')
    }

  }
}


function onInput() {
  if (isEmailValid(input.value)) {
    input.style.borderColor = 'green';
  } else {
    input.style.borderColor = 'red';
  }
}

input.addEventListener('input', onInput);

function isEmailValid(value) {
return EMAIL_REGEXP.test(value);
}