	document.querySelector('.header__burger').addEventListener("click", function(event) {
    
		document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__navigation-tab').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('.header__nav-btns').classList.toggle('active');

    document.querySelector('body').classList.toggle('lock');
  }
  );