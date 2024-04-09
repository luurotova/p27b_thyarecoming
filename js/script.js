const menuBtn = document.querySelector('.header__nav');
const rspBtn = document.querySelector('.rsp__nav');
const menuBtnClose = document.querySelector('.rsp__nav--close');

menuBtn.addEventListener('click', function() {
    rspBtn.classList.add('active');
})

menuBtnClose.addEventListener('click', function() {
    rspBtn.classList.remove('active');
})