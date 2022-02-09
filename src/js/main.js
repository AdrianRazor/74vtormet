let listItem = document.querySelectorAll('.table__item');
let tabBlock = document.querySelectorAll('.table__tab');
let nav = document.querySelector('.table__nav');
let arrow = document.querySelector('.table__arrow');

listItem.forEach(function (item) {
    item.addEventListener ('click', function () {
        for (let i = 0; i < listItem.length; i++) {
            listItem[i].classList.remove('table__item--active');
            listItem[i].classList.toggle('table__item--show');
            tabBlock[i].classList.remove('table__tab--active');
        };
        item.classList.add('table__item--active');
        arrow.classList.toggle('table__arrow--up');

        for (let j = 0; j < listItem.length; j++) {
            if (listItem[j].classList.contains('table__item--active')) {
                tabBlock[j].classList.add('table__tab--active');
            }
        };
    });
});

document.addEventListener("scroll", (e) => {
    let tabHead = document.querySelectorAll('.table__head');
    let tab = document.querySelectorAll('.table__info');
    
    for (let i = 0; i < tab.length; i++) {
        const { top } = tab[i].getBoundingClientRect();

        if (top <= 0 && window.screen.width <= 1280) {
            tabHead[i].style.transform = `translateY(${-top}px)`
        } else {
            tabHead[i].style.transform = `none`
        }
    };
});
