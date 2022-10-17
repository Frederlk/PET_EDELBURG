import Swiper, { Autoplay } from "swiper";

import "../../scss/base/swiper.scss";

// Инициализация слайдеров
function initSliders() {
    if (document.querySelector(".main-screen")) {
        new Swiper(".main-screen__slider", {
            modules: [Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 1000,
            loop: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
        });
    }
}
window.addEventListener("load", function (e) {
    initSliders();
});
