var link = document.querySelector('.login-but');
var link2 = document.querySelector('.login-but-js');
var login = document.querySelector('[name = login]');
var popupLogin = document.querySelector('.write-us-popup');
var closeButton = document.querySelector('.close-button');
var overlay = document.querySelector('.overlay');
var slide01 = document.querySelector('.slide1');
var slide02 = document.querySelector('.slide2');
var slide03 = document.querySelector('.slide3');
var buttonOnSlide12 = document.querySelector('.but-slide-1-2');
var buttonOnSlide13 = document.querySelector('.but-slide-1-3');
var buttonOnSlide21 = document.querySelector('.but-slide-2-1');
var buttonOnSlide23 = document.querySelector('.but-slide-2-3');
var buttonOnSlide31 = document.querySelector('.but-slide-3-1');
var buttonOnSlide32 = document.querySelector('.but-slide-3-2');
var butMenuCatalog = document.querySelector('.catalog-link');
var catalogMenu = document.querySelector('.catalog-menu');
var servicesMenuDelivery = document.querySelector('.services-menu01');
var servicesMenuWarranty = document.querySelector('.services-menu02');
var servicesMenuCredit = document.querySelector('.services-menu03');
var servicesSlideDelivery = document.querySelector('.delivery-block');
var servicesSlideWarranty = document.querySelector('.warranty-block');
var servicesSlideCredit = document.querySelector('.credit-block');
var searchBlock = document.querySelector('.search-block');
var searchButton = document.querySelector('.search');
var searchLink = document.querySelector('.search-link');
var searchField = document.querySelector('.input-search');

// Pop-up window when you click on button "Login"
link.addEventListener('click', function (event) {
    event.preventDefault();
    popupLogin.classList.add('modal-content-show');
    overlay.classList.add('modal-content-show');
    login.focus();
});

link2.addEventListener('click', function (event) {
    event.preventDefault();
    popupLogin.classList.add('modal-content-show');
    overlay.classList.add('modal-content-show');
});

// Close the "Login" window
overlay.addEventListener('click', function (event) {
    event.preventDefault();
    overlay.classList.remove('modal-content-show');
    popupLogin.classList.remove('modal-content-show');
});

closeButton.addEventListener('click', function () {
    overlay.classList.remove('modal-content-show');
    popupLogin.classList.remove('modal-content-show');
});

window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        if (popupLogin.classList.contains('modal-content-show')) {
            popupLogin.classList.remove('modal-content-show');
            overlay.classList.remove('modal-content-show');
        }
    }
});

// Switching slides
buttonOnSlide12.addEventListener('click', function () {
    if (slide01.classList.contains('modal-content-show')) {
        slide01.classList.remove('modal-content-show');
        slide01.classList.add('modal-content-hide');
    }
    slide02.classList.remove('modal-content-hide');
    slide02.classList.add('modal-content-show');
});

buttonOnSlide13.addEventListener('click', function () {
    if (slide01.classList.contains('modal-content-show')) {
        slide01.classList.remove('modal-content-show');
        slide01.classList.add('modal-content-hide');
    }
    slide03.classList.remove('modal-content-hide');
    slide03.classList.add('modal-content-show');
});

buttonOnSlide21.addEventListener('click', function () {
    if (slide02.classList.contains('modal-content-show')) {
        slide02.classList.remove('modal-content-show');
        slide02.classList.add('modal-content-hide');
    }
    slide01.classList.remove('modal-content-hide');
    slide01.classList.add('modal-content-show');
});

buttonOnSlide23.addEventListener('click', function () {
    if (slide02.classList.contains('modal-content-show')) {
        slide02.classList.remove('modal-content-show');
        slide02.classList.add('modal-content-hide');
    }
    slide03.classList.remove('modal-content-hide');
    slide03.classList.add('modal-content-show');
});

buttonOnSlide31.addEventListener('click', function () {
    if (slide03.classList.contains('modal-content-show')) {
        slide03.classList.remove('modal-content-show');
        slide03.classList.add('modal-content-hide');
    }
    slide01.classList.remove('modal-content-hide');
    slide01.classList.add('modal-content-show');
});

buttonOnSlide32.addEventListener('click', function () {
    if (slide03.classList.contains('modal-content-show')) {
        slide03.classList.remove('modal-content-show');
        slide03.classList.add('modal-content-hide');
    }
    slide02.classList.remove('modal-content-hide');
    slide02.classList.add('modal-content-show');
});

// Opening the top menu when hovering
butMenuCatalog.addEventListener('mouseover', function (event) {
    event.preventDefault();
    catalogMenu.classList.remove('modal-content-hide');
    catalogMenu.classList.add('modal-content-show');
});

butMenuCatalog.addEventListener('mouseout', function (event) {
    event.preventDefault();
    catalogMenu.classList.add('modal-content-hide');
    catalogMenu.classList.remove('modal-content-show');
});

// Switching slides 2
servicesMenuDelivery.addEventListener('click', function (event) {
    event.preventDefault();
    servicesSlideDelivery.classList.remove('slide-hide');
    servicesSlideWarranty.classList.add('slide-hide');
    servicesSlideCredit.classList.add('slide-hide');
});

servicesMenuWarranty.addEventListener('click', function (event) {
    event.preventDefault();
    servicesSlideWarranty.classList.remove('slide-hide');
    servicesSlideDelivery.classList.add('slide-hide');
    servicesSlideCredit.classList.add('slide-hide');
});

servicesMenuCredit.addEventListener('click', function (event) {
    event.preventDefault();
    servicesSlideCredit.classList.remove('slide-hide');
    servicesSlideWarranty.classList.add('slide-hide');
    servicesSlideDelivery.classList.add('slide-hide');
});

// Pop-up search box
searchButton.addEventListener('click', function (event) {
    event.stopPropagation();
    searchBlock.classList.remove('slide-hide');
    searchLink.classList.add('modal-content-hide');
    searchField.focus();
});

window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        searchBlock.classList.add('slide-hide');
        searchLink.classList.remove('modal-content-hide');
    }
});
window.addEventListener('mouseup', function (event) {
    searchBlock.classList.add('slide-hide');
    searchLink.classList.remove('modal-content-hide');
});