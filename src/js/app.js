// Подключение основного файла стилей
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
flsFunctions.isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
flsFunctions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
flsFunctions.addLoadedClass();
/* Модуль для работы с меню (Бургер) */
flsFunctions.menuInit();
/* Учет плавающей панели на мобильных устройствах при 100vh */
flsFunctions.fullVHfix();

// ========================================================================================================================================================================================================================================================
// Работа со слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модули работы с прокруткой страницы ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

// Функции работы скроллом
import * as flsScroll from "./files/scroll/scroll.js";

// Плавная навигация по странице
flsScroll.pageNavigation();

/* Динамический адаптив */
import "./files/dynamic_adapt.js";
