var link = document.querySelector('.login-but');
var link2 = document.querySelector('.login-but-js');
var login = document.querySelector('[name = login]');
var popupLogin = document.querySelector('.write-us-popup');
var closeButton = document.querySelector('.close-button');
var overlay = document.querySelector('.overlay');
var butMenuCatalog = document.querySelector('.catalog-link');
var catalogMenu = document.querySelector('.catalog-menu');
var searchBlock = document.querySelector('.search-block');
var searchButton = document.querySelector('.search');
var searchLink = document.querySelector('.search-link');
var searchField = document.querySelector('.input-search');
var imageBar = document.querySelectorAll('.goods-bar img');

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

