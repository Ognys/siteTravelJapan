(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        }
        else {
            header.classList.remove('header_active');
        }
    };
}());

// Burger

(function () {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".header-nav");
    const close = document.querySelector(".header-nav-menu-close");
    burger.addEventListener("click", () => {
        menu.classList.add("header-nav-active");
    });
        close.addEventListener("click", () => {
        menu.classList.remove("header-nav-active");
    });

}());